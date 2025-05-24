"use client";
import { Loader, YoutubeIcon, Wand2, Sparkles } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { generateWithFallback } from '@/gemini/data';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';

export default function VideoGenerator() {
    const [url, setUrl] = useState('');
    const [prompt, setPrompt] = useState('');
    const [response, setResponse] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const [loadingMessage, setLoadingMessage] = useState('');
    const [loadingStep, setLoadingStep] = useState(0);
    const [isMessageVisible, setIsMessageVisible] = useState(true);

    const loadingMessages = [
        "Analyzing video content...",
        "Generating response...",
        "Processing video transcript...",
        "Almost there...",
        "Finalizing insights..."
    ];

    useEffect(() => {
        let interval;
        let timeout;

        if (isLoading) {
            // Set initial message
            setLoadingMessage(loadingMessages[0]);

            // Rotate through messages every 3 seconds with fade effect
            interval = setInterval(() => {
                // Start fade out
                setIsMessageVisible(false);

                // After fade out completes, change message and fade in
                timeout = setTimeout(() => {
                    setLoadingStep(prev => (prev + 1) % loadingMessages.length);
                    setLoadingMessage(loadingMessages[(loadingStep + 1) % loadingMessages.length]);
                    setIsMessageVisible(true);
                }, 300); // Matches the transition duration
            }, 3000);
        } else {
            setLoadingStep(0);
        }

        return () => {
            clearInterval(interval);
            clearTimeout(timeout);
        };
    }, [isLoading, loadingStep]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!url || !prompt) {
            setError('Please provide both a YouTube URL and a prompt');
            return;
        }
        setError('');
        fetchSummary(url, prompt);
    };

    const fetchSummary = async (url, prompt) => {
        try {
            setIsLoading(true);
            const result = await generateWithFallback(url, prompt);
            setResponse(result);
        } catch (e) {
            console.error(e.message);
            setResponse("Something went wrong.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="max-w-4xl mx-auto px-4 py-8">
            <div className="text-center mb-10">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">YouTube Video Insight Generator</h1>
                <p className="text-gray-600">
                    Get AI-powered insights from any YouTube video. Paste a URL and ask your question.
                </p>
            </div>

            <Card className="mb-8">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Wand2 className="h-5 w-5 text-purple-600" />
                        Generate Insights
                    </CardTitle>
                    <CardDescription>
                        Enter a YouTube URL and your prompt to get started
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label htmlFor="url" className="block text-sm font-medium text-gray-700 mb-1">
                                YouTube Video URL
                            </label>
                            <Input
                                id="url"
                                type="url"
                                placeholder="https://www.youtube.com/watch?v=..."
                                value={url}
                                onChange={(e) => setUrl(e.target.value)}
                                className="w-full"
                            />
                        </div>

                        <div>
                            <label htmlFor="prompt" className="block text-sm font-medium text-gray-700 mb-1">
                                Your Question or Prompt
                            </label>
                            <Textarea
                                id="prompt"
                                placeholder="E.g. Summarize the key points of this video, explain the main concepts, etc."
                                value={prompt}
                                onChange={(e) => setPrompt(e.target.value)}
                                rows={4}
                                className="w-full"
                            />
                        </div>

                        {error && <p className="text-red-500 text-sm">{error}</p>}

                        <Button type="submit" disabled={isLoading} className="w-full">
                            {isLoading ? (
                                <>
                                    <Loader className="mr-2 h-4 w-4 animate-spin" />
                                    Generating...
                                </>
                            ) : (
                                <>
                                    <Sparkles className="mr-2 h-4 w-4" />
                                    Generate Insights
                                </>
                            )}
                        </Button>
                    </form>
                </CardContent>
            </Card>

            {isLoading && (
                <div className="flex flex-col items-center justify-center py-12">
                    <div className="relative">
                        <div className="h-16 w-16 rounded-full border-4 border-purple-500 border-t-transparent animate-spin"></div>
                        <YoutubeIcon className="h-8 w-8 text-red-600 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                    </div>
                    <p className={`mt-4 text-gray-600 transition-opacity duration-300 ${isMessageVisible ? 'opacity-100' : 'opacity-0'}`}>
                        {loadingMessage}
                    </p>
                </div>
            )}

            {response && !isLoading && (
                <Card>
                    <CardHeader>
                        <CardTitle>Generated Response</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="prose max-w-none">
                            <p className="whitespace-pre-line">{response}</p>
                        </div>
                    </CardContent>
                </Card>
            )}
        </div>
    );
}
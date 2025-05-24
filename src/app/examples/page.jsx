"use client";
import { examples } from '@/constants/examples';
import { YoutubeIcon, Clipboard, Sparkles, Check } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { CopyButton } from '@/components/CopyButton';

export default function ExamplesPage() {
    return (
        <div className="max-w-7xl mx-auto px-4 py-8">
            <div className="text-center mb-12">
                <h1 className="text-3xl font-bold text-gray-900 mb-3">Example Use Cases</h1>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                    Discover how our YouTube Insight Generator can help you in various scenarios.
                    Click any example to try it yourself!
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {examples.map((example) => (
                    <Card key={example.id} className="hover:shadow-lg transition-shadow">
                        <CardHeader>
                            <div className="relative h-48 w-full rounded-lg overflow-hidden mb-4">
                                <Image
                                    src={example.imageUrl}
                                    alt={example.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <CardTitle>{example.title}</CardTitle>
                            <CardDescription>{example.description}</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-3">
                                <div className="flex items-start space-x-2">
                                    <YoutubeIcon className="h-5 w-5 mt-0.5 text-red-600 flex-shrink-0" />
                                    <span className="text-sm text-gray-700">
                                        <span className="font-medium">Example URL:</span>{' '}
                                        <Link href={example.youtubeUrl} className="text-blue-600 hover:underline">
                                            {example.youtubeUrl.split('=')[0]}...
                                        </Link>
                                    </span>
                                </div>
                                <div className="flex items-start space-x-2">
                                    <Sparkles className="h-5 w-5 mt-0.5 text-purple-600 flex-shrink-0" />
                                    <div>
                                        <p className="text-sm font-medium text-gray-700">Example Prompt:</p>
                                        <p className="text-sm text-gray-600 bg-gray-50 p-2 rounded mt-1">
                                            {example.promptExample}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                        <CardFooter className="flex justify-between">
                            <CopyButton textToCopy={example.promptExample}></CopyButton>

                            <Link href={`/?url=${encodeURIComponent(example.youtubeUrl)}&prompt=${encodeURIComponent(example.promptExample)}`}>
                                <Button size="sm">
                                    Try This Example
                                </Button>
                            </Link>
                        </CardFooter>
                    </Card>
                ))}
            </div>

            <div className="mt-16 text-center">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to try it yourself?</h2>
                <Link href="/">
                    <Button>
                        <Sparkles className="h-5 w-5 mr-2" />
                        Generate Your Own Insights
                    </Button>
                </Link>
            </div>
        </div>
    );
}
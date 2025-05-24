"use client";
import { ArrowRight, Sparkles, Play } from 'lucide-react';
import { Button } from './ui/button';
import { useRouter } from 'next/navigation';
import { RedirectToSignIn, SignedIn, SignedOut, SignInButton, SignOutButton, useUser } from '@clerk/nextjs';
import toast from 'react-hot-toast';

export default function LandingPage() {
    const router = useRouter();
    const { isSignedIn } = useUser()

    const handleStart = () => {
        if (!isSignedIn) {
            return toast.error('User not signed in');
        }
        else router.push('/dashboard')
    }

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
            {/* Navigation */}
            <nav className="px-6 py-4 flex justify-between items-center max-w-7xl mx-auto">
                <div className="flex items-center space-x-2">
                    <Play className="h-6 w-6 text-purple-600" />
                    <span className="text-xl font-bold text-gray-900">VideoInsight</span>
                </div>
                {/* <Button
                    className="bg-purple-600 hover:bg-purple-700"
                > */}
                <SignedOut>
                    <SignInButton className="bg-purple-600 text-white p-2 rounded-lg hover:bg-purple-700" />
                </SignedOut>
                {/* </Button> */}
            </nav>

            {/* Hero Section */}
            <div className="max-w-7xl mx-auto px-6 py-20 md:py-32">
                <div className="text-center">
                    <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                        Unlock the <span className="text-purple-600">Power</span> of Video Content
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-10">
                        AI-powered insights from any YouTube video. Get summaries, key points, and answers to your questions instantly.
                    </p>
                    <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-10">
                        SignIn to get Started
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Button
                            size="lg"
                            onClick={handleStart}
                            className="bg-purple-600 hover:bg-purple-700 px-8 py-6 text-lg text-white"
                        >
                            Get Started <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                        <Button
                            variant="outline"
                            size="lg"
                            className="px-8 py-6 text-lg border-gray-300"
                        >
                            <Play className="mr-2 h-5 w-5" />
                            Watch Demo
                        </Button>
                    </div>
                </div>

                {/* Feature Highlights */}
                <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        {
                            icon: <Sparkles className="h-8 w-8 text-purple-600" />,
                            title: "Instant Summaries",
                            description: "Get concise summaries of long videos in seconds"
                        },
                        {
                            icon: <Sparkles className="h-8 w-8 text-purple-600" />,
                            title: "Key Insights",
                            description: "Extract the most important points from any video"
                        },
                        {
                            icon: <Sparkles className="h-8 w-8 text-purple-600" />,
                            title: "Ask Questions",
                            description: "Get answers to specific questions about the content"
                        }
                    ].map((feature, index) => (
                        <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex items-center mb-4">
                                {feature.icon}
                                <h3 className="text-xl font-semibold ml-3">{feature.title}</h3>
                            </div>
                            <p className="text-gray-600">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
}
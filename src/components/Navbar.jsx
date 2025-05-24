"use client"
import { SignedIn, SignedOut, UserButton, useUser } from '@clerk/nextjs';
import { YoutubeIcon, Sparkles } from 'lucide-react';
import Link from 'next/link';

export default function Navbar() {
    const { isSignedIn } = useUser();
    return (
        <nav className="bg-white border-b border-gray-200 px-4 py-3 shadow-sm">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <div>
                    <Link href={'/'} className="flex items-center space-x-2">
                        <YoutubeIcon className="h-8 w-8 text-red-600" />
                        <span className="text-xl font-bold text-gray-800">Video Insight</span>
                    </Link>
                </div>
                <div className="flex items-center space-x-4">
                    <Link href="/" className="text-gray-600 hover:text-gray-900 font-medium">Home</Link>
                    <Link href="/about" className="text-gray-600 hover:text-gray-900 font-medium">About</Link>
                    <Link href="/examples" className="text-gray-600 hover:text-gray-900 font-medium">Examples</Link>
                    <SignedIn>
                        <UserButton />
                    </SignedIn>
                </div>
            </div>
        </nav>
    );
}
"use client";

import { useToast } from '@/hooks/use-toast';
import { Clipboard, Check } from 'lucide-react';
import { useState } from 'react';
import { Button } from './ui/button';

export function CopyButton({ textToCopy }) {
    const [copied, setCopied] = useState(false);
    const { toast } = useToast();

    const handleCopy = () => {
        navigator.clipboard.writeText(textToCopy);
        setCopied(true);

        toast({
            title: "Copied!",
            description: "Prompt copied to clipboard",
            duration: 2000,
        });

        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <Button variant="outline" size="sm" onClick={handleCopy}>
            {copied ? (
                <Check className="h-4 w-4 mr-2 text-green-500" />
            ) : (
                <Clipboard className="h-4 w-4 mr-2" />
            )}
            {copied ? "Copied!" : "Copy Prompt"}
        </Button>
    );
}
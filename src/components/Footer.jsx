import { GithubIcon, Twitter, Linkedin, YoutubeIcon } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-gray-50 border-t border-gray-200">
            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="flex items-center space-x-2 mb-4 md:mb-0">
                        <YoutubeIcon className="h-6 w-6 text-red-600" />
                        <span className="font-medium text-gray-800">Video Insight</span>
                    </div>

                    <div className="flex space-x-6">
                        <a href="https://github.com/arunks2003" className="text-gray-500 hover:text-gray-700">
                            <GithubIcon className="h-5 w-5" />
                        </a>
                        <a href="#" className="text-gray-500 hover:text-gray-700">
                            <Twitter className="h-5 w-5" />
                        </a>
                        <a href="https://www.linkedin.com/in/arun-kumar-iitbhu/" className="text-gray-500 hover:text-gray-700">
                            <Linkedin className="h-5 w-5" />
                        </a>
                    </div>
                </div>

                <div className="mt-8 pt-8 border-t border-gray-200 text-center text-sm text-gray-500">
                    <p>© {new Date().getFullYear()} Video Insight Generator. All rights reserved.</p>
                    <p className="mt-1">Developed By Arun Kumar</p>
                </div>
            </div>
        </footer>
    );
}
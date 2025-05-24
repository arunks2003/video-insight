"use client";
import { GithubIcon, LinkedinIcon, TwitterIcon, MailIcon, Link as LinkIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function AboutPage() {
    return (
        <div className="max-w-6xl mx-auto px-4 py-12">
            <div className="flex flex-col md:flex-row gap-12 items-start">
                {/* Profile Section */}
                <div className="w-full md:w-1/3 space-y-6">
                    <div className="relative aspect-square w-full rounded-lg overflow-hidden border">
                        <Image
                            src="/my_image.jpg"
                            alt="Arun Kumar"
                            fill
                            className="object-cover"
                        />
                    </div>

                    <div className="space-y-2">
                        <h1 className="text-3xl font-bold">Arun Kumar</h1>
                        <p className="text-gray-600">Full Stack Developer</p>
                        <p className="text-sm text-gray-500">Varanasi, Uttar Pradesh</p>
                    </div>

                    <div className="flex gap-3">
                        <Button variant="outline" size="icon" asChild>
                            <a href="https://github.com/arunks2003" target="_blank">
                                <GithubIcon className="h-4 w-4" />
                            </a>
                        </Button>
                        <Button variant="outline" size="icon" asChild>
                            <a href="https://www.linkedin.com/in/arun-kumar-iitbhu/" target="_blank">
                                <LinkedinIcon className="h-4 w-4" />
                            </a>
                        </Button>
                        <Button variant="outline" size="icon" asChild>
                            <a href="https://twitter.com/arun-kumar" target="_blank">
                                <TwitterIcon className="h-4 w-4" />
                            </a>
                        </Button>
                        <Button variant="outline" size="icon" asChild>
                            <a href="mailto:mrakchaudhary2003@gmail.com">
                                <MailIcon className="h-4 w-4" />
                            </a>
                        </Button>
                    </div>

                    <div className="space-y-4">
                        <div>
                            <h3 className="font-medium">Education</h3>
                            <p className="text-sm">Indian Institute of Technology (BHU) Varanasi</p>
                            <p className="text-sm text-gray-500">B.Tech. in Civil Engineering (CGPA: 8.09)</p>
                        </div>

                        <div>
                            <h3 className="font-medium">Technical Skills</h3>
                            <div className="flex flex-wrap gap-2 mt-2">
                                {[
                                    'React', 'Next.js', 'Node.js', 'TypeScript',
                                    'MongoDB', 'Firebase', 'Tailwind CSS', 'REST APIs',
                                    'SEO', 'Git', 'Algorithms'
                                ].map(skill => (
                                    <span key={skill} className="text-xs bg-gray-100 px-2 py-1 rounded">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Details Section */}
                <div className="w-full md:w-2/3 space-y-8">
                    <section>
                        <h2 className="text-2xl font-bold mb-4">Professional Experience</h2>

                        <div className="space-y-6">
                            <div className="border-l-2 border-purple-500 pl-4">
                                <h3 className="font-semibold">Full Stack Developer - Tech Associate</h3>
                                <p className="text-sm text-gray-500">ECELL - IITBHU</p>
                                <ul className="mt-2 space-y-1 list-disc list-inside text-sm">
                                    <li>Improved FCP, LCP, and CLS metrics by 50%, boosting page speed and SEO performance</li>
                                    <li>Increased Google ranking from 5th to 2nd through targeted keyword optimization</li>
                                    <li>Enhanced responsiveness by 60% using TailwindCSS</li>
                                    <li>Integrated Clerk auth and Firebase DB, securing user data</li>
                                </ul>
                                <div className="flex flex-wrap gap-2 mt-3">
                                    <span className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded">Next.js</span>
                                    <span className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded">TypeScript</span>
                                    <span className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded">Tailwind CSS</span>
                                    <span className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded">Firebase</span>
                                </div>
                            </div>

                            <div className="border-l-2 border-blue-500 pl-4">
                                <h3 className="font-semibold">Web Developer Intern</h3>
                                <p className="text-sm text-gray-500">Web Stack Academy</p>
                                <ul className="mt-2 space-y-1 list-disc list-inside text-sm">
                                    <li>Developed 5+ RESTful APIs enabling real-time data exchange</li>
                                    <li>Implemented JWT-based authentication and bcrypt encryption</li>
                                    <li>Integrated Razorpay API, reducing checkout time by 30%</li>
                                </ul>
                                <div className="flex flex-wrap gap-2 mt-3">
                                    <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">React.js</span>
                                    <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">Node.js</span>
                                    <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">MongoDB</span>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4">Achievements</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="border p-4 rounded-lg">
                                <h3 className="font-medium flex items-center gap-2">
                                    <LinkIcon className="h-4 w-4" />
                                    Leetcode
                                </h3>
                                <p className="text-sm mt-1">Knight Level (Max. Rating 2052)</p>
                                <p className="text-sm text-gray-500">Top 2% at Leetcode</p>
                            </div>
                            <div className="border p-4 rounded-lg">
                                <h3 className="font-medium">Technex'24</h3>
                                <p className="text-sm mt-1">1st position in treasure hunt</p>
                                <p className="text-sm text-gray-500">IIT BHU</p>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}
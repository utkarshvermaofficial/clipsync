"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function FeaturesPage() {
  const [activeTab, setActiveTab] = useState('editing');
  const [isIntersecting, setIsIntersecting] = useState({});

  // Setup intersection observer for animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsIntersecting(prev => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting
          }));
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.feature-section');
    elements.forEach(el => observer.observe(el));

    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, []);

  const features = {
    editing: [
      {
        title: "Real-time Collaborative Editing",
        description: "Multiple team members can work on the same project simultaneously with real-time updates and changes visible to everyone.",
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        ),
        image: "/features/collaboration.webp"
      },
      {
        title: "AI-Powered Video Editing",
        description: "Leverage our advanced AI to automatically create highlight reels, suggest cuts, and enhance your footage with just a few clicks.",
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        ),
        image: "/features/ai-editing.webp"
      },
      {
        title: "Multi-Track Timeline",
        description: "Our professional-grade timeline supports unlimited video, audio, and effect tracks for complex editing projects.",
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
          </svg>
        ),
        image: "/features/timeline.webp"
      }
    ],
    effects: [
      {
        title: "Motion Graphics Library",
        description: "Access thousands of pre-built motion graphics, animated text effects, and transitions that can be customized to match your brand.",
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
          </svg>
        ),
        image: "/features/motion-graphics.webp"
      },
      {
        title: "Color Grading Suite",
        description: "Professional color correction tools with LUTs, curves, and color wheels to achieve the perfect look for your videos.",
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
          </svg>
        ),
        image: "/features/color-grading.webp"
      },
      {
        title: "Audio Effects & Mixing",
        description: "Comprehensive audio editing tools including noise reduction, equalizer, compressor, and automated background music matching.",
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15.536a5 5 0 01.707-7.07m0 0a5 5 0 000-7.072m11.314 0a9 9 0 010 12.728M3.464 3.464a9 9 0 000 12.728" />
          </svg>
        ),
        image: "/features/audio-mixing.webp"
      }
    ],
    export: [
      {
        title: "4K & 8K Export",
        description: "Export your videos in up to 8K resolution with customizable bitrates and frame rates for different platforms.",
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
          </svg>
        ),
        image: "/features/4k-export.webp"
      },
      {
        title: "Multi-Platform Publishing",
        description: "Direct publishing to YouTube, Instagram, TikTok, and other platforms with optimized settings for each.",
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
          </svg>
        ),
        image: "/features/publishing.webp"
      },
      {
        title: "Custom Brand Templates",
        description: "Save your brand's styles, intros, outros, and graphics as reusable templates for consistent video production.",
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
          </svg>
        ),
        image: "/features/brand-templates.webp"
      }
    ],
    collaboration: [
      {
        title: "Team Workspaces",
        description: "Organize projects by team with customizable permissions and shared asset libraries.",
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
          </svg>
        ),
        image: "/features/team-workspaces.webp"
      },
      {
        title: "Comment & Approval Workflow",
        description: "Streamlined review process with time-coded comments, approval stages, and version history.",
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
          </svg>
        ),
        image: "/features/comments.webp"
      },
      {
        title: "Cloud Asset Management",
        description: "Centralized storage for all your media assets with tagging, searching, and version control.",
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
          </svg>
        ),
        image: "/features/cloud-assets.webp"
      }
    ]
  };

  return (
    <div>
        <Header />
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white pt-28 pb-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Powerful Features for Professional Video Creation
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-10">
              Everything you need to create stunning videos in one collaborative platform
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/signup" className="bg-white text-blue-700 hover:bg-blue-50 px-8 py-3 rounded-lg font-medium text-lg shadow-lg transition-all duration-300 hover:shadow-xl">
                Start Free Trial
              </Link>
              <Link href="/pricing" className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-3 rounded-lg font-medium text-lg transition-all duration-300">
                See Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Navigation */}
      <section className="sticky top-16 bg-white z-10 shadow-md">
        <div className="container mx-auto">
          <div className="flex overflow-x-auto no-scrollbar">
            {Object.keys(features).map((category) => (
              <button
                key={category}
                onClick={() => setActiveTab(category)}
                className={`px-6 py-4 text-sm md:text-base font-medium whitespace-nowrap ${
                  activeTab === category
                    ? 'text-blue-600 border-b-2 border-blue-600'
                    : 'text-gray-600 hover:text-blue-600 border-b-2 border-transparent'
                } transition-all duration-200`}
              >
                {category === 'editing' && 'Editing Tools'}
                {category === 'effects' && 'Effects & Graphics'}
                {category === 'export' && 'Export & Publishing'}
                {category === 'collaboration' && 'Team Collaboration'}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Features Display */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          {Object.keys(features).map((category) => (
            <div 
              key={category} 
              className={`${activeTab === category ? 'block' : 'hidden'}`}
            >
              {features[category].map((feature, index) => (
                <div 
                  key={feature.title}
                  id={`feature-${category}-${index}`}
                  className={`feature-section mb-24 flex flex-col-reverse md:flex-row ${
                    index % 2 !== 0 ? 'md:flex-row-reverse' : ''
                  } items-center gap-12 opacity-0 transition-all duration-1000 ${
                    isIntersecting[`feature-${category}-${index}`] ? 'opacity-100 translate-y-0' : 'translate-y-10'
                  }`}
                >
                  <div className="md:w-1/2">
                    <div className="flex items-center mb-4">
                      <div className="p-2 bg-blue-100 text-blue-600 rounded-lg mr-4">
                        {feature.icon}
                      </div>
                      <h3 className="text-2xl font-bold text-gray-800">{feature.title}</h3>
                    </div>
                    <p className="text-lg text-gray-600 mb-8">
                      {feature.description}
                    </p>
                    <Link 
                      href={`/tutorials#${feature.title.toLowerCase().replace(/\s+/g, '-')}`}
                      className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700 transition-colors"
                    >
                      Learn more about this feature
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </Link>
                  </div>
                  <div className="md:w-1/2 mb-8 md:mb-0 bg-gray-100 rounded-xl overflow-hidden shadow-lg">
                    <div className="relative h-64 md:h-80 w-full">
                      {/* Replace with actual images */}
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 flex items-center justify-center">
                        <p className="text-lg font-medium text-blue-800">
                          {feature.title} Screenshot
                          <br />
                          <span className="text-sm font-normal">(Replace with actual image: {feature.image})</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-12">Trusted by Video Professionals Worldwide</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "ClipSync has completely transformed our video workflow. What used to take days now takes hours.",
                author: "Sarah Johnson",
                title: "Creative Director, Visualize Media"
              },
              {
                quote: "The collaborative features are unmatched. Our remote team can now work together as if we're in the same room.",
                author: "Michael Chen",
                title: "Video Producer, TechStream"
              },
              {
                quote: "As a YouTuber, the time I save with ClipSync means I can focus on creating better content, not wrestling with complex software.",
                author: "Alicia Rodriguez",
                title: "Content Creator, 1.2M Subscribers"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <svg className="h-8 w-8 text-blue-400 mb-4 mx-auto" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                  <path d="M9.352 4C4.456 4 0.672 7.456 0.672 12.664c0 4.792 3.152 8.728 7.856 8.728 1.459 0 2.781-.59 3.76-1.54l.48 1.149 3.563-1.938c-.375-1.067-.555-2.217-.555-3.395C15.776 9.083 14.638 4 9.352 4zM24.48 4c-4.896 0-8.68 3.456-8.68 8.664 0 4.792 3.152 8.728 7.856 8.728 1.459 0 2.781-.59 3.76-1.54l.48 1.149 3.563-1.938c-.375-1.067-.555-2.217-.555-3.395C30.904 9.083 29.766 4 24.48 4z" />
                </svg>
                <p className="text-gray-600 mb-6 italic">{testimonial.quote}</p>
                <div>
                  <p className="font-medium text-gray-800">{testimonial.author}</p>
                  <p className="text-sm text-gray-500">{testimonial.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-indigo-600 to-blue-600 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to elevate your video production?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Join thousands of professionals who are creating amazing videos faster and more collaboratively with ClipSync.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/signup" className="bg-white text-blue-700 hover:bg-blue-50 px-8 py-3 rounded-lg font-medium text-lg shadow-lg transition-all duration-300 hover:shadow-xl">
              Start Free Trial
            </Link>
            <Link href="/demo" className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-3 rounded-lg font-medium text-lg transition-all duration-300">
              Request a Demo
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            {[
              {
                question: "Do I need to download any software to use ClipSync?",
                answer: "No, ClipSync is a fully browser-based solution that works on any modern browser. There's no need to download or install anything on your computer."
              },
              {
                question: "Can I import my existing projects from other editing software?",
                answer: "Yes, ClipSync supports importing projects from major editing platforms including Adobe Premiere, Final Cut Pro, and DaVinci Resolve through our conversion tool."
              },
              {
                question: "How secure is my media content on ClipSync?",
                answer: "We take security seriously. All your content is encrypted both in transit and at rest using enterprise-grade encryption. We also offer private cloud deployments for enterprise customers."
              },
              {
                question: "What file formats are supported for import and export?",
                answer: "ClipSync supports all major video and audio formats including MP4, MOV, AVI, WAV, MP3, and more. You can export to various formats optimized for different platforms."
              },
              {
                question: "Is there a limit on project length or complexity?",
                answer: "Our standard plans support projects up to 2 hours in length with unlimited tracks. Enterprise plans offer extended project lengths and enhanced performance for complex projects."
              }
            ].map((faq, index) => (
              <div key={index} className="border-b border-gray-200 pb-6">
                <button
                  className="flex justify-between items-center w-full text-left focus:outline-none"
                  onClick={() => {
                    // Toggle FAQ (in a real implementation)
                  }}
                >
                  <span className="text-lg font-medium text-gray-900">{faq.question}</span>
                  <svg className="h-5 w-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
                <div className="mt-2">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link href="/support" className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700">
              View all FAQs
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
    <Footer />
    </div>
  );
}
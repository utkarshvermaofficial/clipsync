"use client";
import React from 'react';
import Image from 'next/image';
import Header from '../components/Header';
import Footer from '../components/Footer';

const AboutPage = () => {
  return (
    <div>
      <Header />
      <main className="pt-16">
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-indigo-800 py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
        </div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              About ClipSync
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Revolutionizing how teams create videos together
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 md:pr-12 mb-10 md:mb-0">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-gray-700 mb-6">
                ClipSync began with a simple question: Why is collaborative video editing still so difficult? 
                In 2023, our founders experienced firsthand the frustration of trying to work together on video projects 
                across different time zones and devices.
              </p>
              <p className="text-gray-700 mb-6">
                That frustration sparked an idea – a real-time collaborative web video editor that works as 
                intuitively as modern document collaboration tools. After months of development and 
                testing with early users, ClipSync was born.
              </p>
              <p className="text-gray-700">
                Today, ClipSync is used by creative teams in over 30 countries, helping them create 
                stunning video content through seamless collaboration.
              </p>
            </div>
            <div className="md:w-1/2">
              <div className="relative rounded-lg overflow-hidden shadow-xl">
                {/* Replace with your actual image */}
                <div className="bg-gradient-to-br from-blue-400 to-indigo-500 h-80 w-full flex items-center justify-center text-white text-xl">
                  <div className="text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                    Our Story Image
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is ClipSync Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">What is ClipSync?</h2>
            <p className="text-gray-700">
              ClipSync is a powerful web-based video editor that enables real-time collaboration 
              between team members, no matter where they are in the world.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-8 transition-transform hover:transform hover:scale-105">
              <div className="text-blue-600 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Real-time Collaboration</h3>
              <p className="text-gray-700">
                Multiple team members can work on the same project simultaneously, seeing each other's changes in real-time, just like in Google Docs.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-8 transition-transform hover:transform hover:scale-105">
              <div className="text-blue-600 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Browser-based Editing</h3>
              <p className="text-gray-700">
                No downloads required. ClipSync runs entirely in your browser, making it accessible from any device with an internet connection.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-8 transition-transform hover:transform hover:scale-105">
              <div className="text-blue-600 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Commenting & Feedback</h3>
              <p className="text-gray-700">
                Add comments at specific timestamps and resolve feedback directly within the editing interface.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Key Features</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="flex">
              <div className="flex-shrink-0 mr-4">
                <div className="bg-blue-100 rounded-full p-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Real-time Editing</h3>
                <p className="text-gray-700">
                  See changes from your team members instantaneously as they happen, enabling truly collaborative workflows.
                </p>
              </div>
            </div>
            
            <div className="flex">
              <div className="flex-shrink-0 mr-4">
                <div className="bg-blue-100 rounded-full p-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Cloud Storage</h3>
                <p className="text-gray-700">
                  Your projects are automatically saved to the cloud, accessible from anywhere and protected from hardware failures.
                </p>
              </div>
            </div>
            
            <div className="flex">
              <div className="flex-shrink-0 mr-4">
                <div className="bg-blue-100 rounded-full p-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Advanced Effects</h3>
                <p className="text-gray-700">
                  Apply professional-grade effects, transitions, and filters directly in your browser without waiting for rendering.
                </p>
              </div>
            </div>
            
            <div className="flex">
              <div className="flex-shrink-0 mr-4">
                <div className="bg-blue-100 rounded-full p-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Multi-format Support</h3>
                <p className="text-gray-700">
                  Import and export videos in all popular formats, ensuring compatibility with your existing workflow.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Workflow Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">Perfect for Team Workflows</h2>
            <p className="text-gray-300">
              ClipSync transforms how teams create videos together, making the process faster, more efficient, and more enjoyable.
            </p>
          </div>
          
          <div className="relative">
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-blue-500 transform -translate-y-1/2 z-0"></div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
              <div className="bg-gray-800 p-6 rounded-lg text-center">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold">1</span>
                </div>
                <h3 className="text-lg font-bold mb-3">Upload Media</h3>
                <p className="text-gray-400">
                  Drag and drop videos, images, and audio files directly into the browser.
                </p>
              </div>
              
              <div className="bg-gray-800 p-6 rounded-lg text-center">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold">2</span>
                </div>
                <h3 className="text-lg font-bold mb-3">Invite Team</h3>
                <p className="text-gray-400">
                  Share a secure link to bring your team into the same editing session.
                </p>
              </div>
              
              <div className="bg-gray-800 p-6 rounded-lg text-center">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold">3</span>
                </div>
                <h3 className="text-lg font-bold mb-3">Edit Together</h3>
                <p className="text-gray-400">
                  Collaborate in real-time with changes synced instantly to everyone.
                </p>
              </div>
              
              <div className="bg-gray-800 p-6 rounded-lg text-center">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold">4</span>
                </div>
                <h3 className="text-lg font-bold mb-3">Export & Share</h3>
                <p className="text-gray-400">
                  Export your finished video in high quality for any platform.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">What Our Users Say</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg p-8 shadow-sm">
              <div className="flex items-center mb-4">
                <div className="mr-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-xl">
                    JD
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Jane Doe</h4>
                  <p className="text-sm text-gray-600">Marketing Director, TechCorp</p>
                </div>
              </div>
              <p className="text-gray-700">
                "ClipSync has transformed how our marketing team creates video content. What used to take us days of back-and-forth now happens in a single collaborative session."
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-8 shadow-sm">
              <div className="flex items-center mb-4">
                <div className="mr-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-xl">
                    MS
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Mike Smith</h4>
                  <p className="text-sm text-gray-600">Freelance Videographer</p>
                </div>
              </div>
              <p className="text-gray-700">
                "Being able to edit with my clients in real-time has completely changed my workflow. No more endless revision cycles - we get it right together the first time."
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-8 shadow-sm">
              <div className="flex items-center mb-4">
                <div className="mr-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-xl">
                    AL
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Ana Lee</h4>
                  <p className="text-sm text-gray-600">Content Creator</p>
                </div>
              </div>
              <p className="text-gray-700">
                "The browser-based editing is a game-changer. I can now work on my videos from any device, anywhere, without compromising on features or quality."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to transform your video workflow?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Join thousands of teams already using ClipSync to collaborate better.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="px-8 py-3 bg-white text-blue-600 rounded-lg font-medium hover:bg-blue-50 transition transform hover:scale-105">
                Start Free Trial
              </button>
              <button className="px-8 py-3 border-2 border-white text-white rounded-lg font-medium hover:bg-blue-700 transition transform hover:scale-105">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
    <Footer />
      </main>
    </div>
  );
};

export default AboutPage;
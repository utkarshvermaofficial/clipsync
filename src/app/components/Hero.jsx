import React from 'react';

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-blue-50 to-indigo-100 pt-24 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Content */}
          <div className="w-full lg:w-1/2 lg:pr-12 mb-10 lg:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Sync Your Clips <span className="text-blue-600">Seamlessly</span>
            </h1>
            <p className="text-lg text-gray-700 mb-8 max-w-lg">
              ClipSync makes it effortless to synchronize and share your clips across all your devices. 
              Experience the freedom of access everywhere, anytime.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="px-8 py-3 bg-blue-600 text-white rounded-lg font-medium shadow-lg hover:bg-blue-700 transition transform hover:scale-105">
                Get Started
              </button>
              <button className="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-lg font-medium hover:bg-blue-50 transition transform hover:scale-105">
                Learn More
              </button>
            </div>
            
            {/* Stats or Trust Indicators */}
            <div className="mt-12 grid grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-blue-600">10K+</div>
                <div className="text-sm text-gray-600">Active Users</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-blue-600">99%</div>
                <div className="text-sm text-gray-600">Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-blue-600">4.9</div>
                <div className="text-sm text-gray-600">Star Rating</div>
              </div>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="w-full lg:w-1/2">
            <div className="relative">
              {/* Replace with your hero image */}
              <div className="rounded-lg bg-gradient-to-br from-blue-400 to-indigo-500 shadow-2xl h-80 md:h-96 w-full flex items-center justify-center">
                <div className="text-white text-xl font-semibold">
                  {/* Replace this with an actual image */}
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16l2.879-2.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Hero Image Placeholder
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -bottom-4 -right-4 bg-blue-200 rounded-full h-24 w-24 z-0"></div>
              <div className="absolute -top-4 -left-4 bg-indigo-200 rounded-full h-16 w-16 z-0"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
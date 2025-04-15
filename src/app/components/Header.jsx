'use client';
import React, { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const handleLogin = () => {
    router.push('/login');
  };

  const handleSignup = () => {
    router.push('/signup');
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-lg py-2' : 'bg-white/95 py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <div className="relative h-9 w-9 mr-2">
            <svg className="h-full w-full text-blue-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 10L19.553 7.724C20.179 7.39 21 7.87565 21 8.618V15.382C21 16.1244 20.179 16.61 19.553 16.276L15 14M5 18H13C14.1046 18 15 17.1046 15 16V8C15 6.89543 14.1046 6 13 6H5C3.89543 6 3 6.89543 3 8V16C3 17.1046 3.89543 18 5 18Z" 
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <span className="text-2xl font-bold text-gray-900">
            Clip<span className="text-blue-600">Sync</span>
          </span>
        </Link>

        {/* Navigation Links - Desktop */}
        <nav className="hidden md:flex space-x-8">
          {[
            { name: 'Home', path: '/' },
            { name: 'Features', path: '/features' },
            { name: 'About Us', path: '/about' },
            { name: 'Our Team', path: '/ourTeam' },
          ].map((item) => (
            <Link 
              key={item.name} 
              href={item.path} 
              className={`font-medium transition-colors duration-200 relative ${
                pathname === item.path 
                  ? 'text-blue-600' 
                  : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              {item.name}
              {pathname === item.path && (
                <span className="absolute bottom-[-4px] left-0 w-full h-0.5 bg-blue-600 rounded-full"></span>
              )}
            </Link>
          ))}
        </nav>

        {/* Buttons - Desktop */}
        <div className="hidden md:flex items-center space-x-4">
          <button 
            onClick={handleLogin}
            className="px-5 py-2 text-blue-600 border border-blue-600 rounded-full font-medium hover:bg-blue-50 transition-all duration-200"
          >
            Log In
          </button>
          <button 
            onClick={handleSignup}
            className="px-5 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full font-medium hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
          >
            Sign Up Free
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button 
            onClick={toggleMobileMenu}
            className="text-gray-700 focus:outline-none"
            aria-label="Toggle menu"
          >
            {!mobileMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div 
        className={`md:hidden absolute top-full left-0 right-0 bg-white shadow-lg transition-all duration-300 overflow-hidden ${
          mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="container mx-auto px-4 py-3">
          <nav className="flex flex-col space-y-4 pb-4">
            {[
              { name: 'Home', path: '/' },
              { name: 'Features', path: '/features' },
              { name: 'About Us', path: '/about' },
              { name: 'Our Team', path: '/ourTeam' },
            ].map((item) => (
              <Link 
                key={item.name} 
                href={item.path} 
                onClick={() => setMobileMenuOpen(false)}
                className={`font-medium py-1 ${
                  pathname === item.path 
                    ? 'text-blue-600' 
                    : 'text-gray-700'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-2 space-y-3">
              <button 
                onClick={handleLogin}
                className="w-full px-4 py-2 text-blue-600 border border-blue-600 rounded-full font-medium hover:bg-blue-50 transition-all duration-200"
              >
                Log In
              </button>
              <button 
                onClick={handleSignup}
                className="w-full px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full font-medium hover:from-blue-700 hover:to-indigo-700 transition-all duration-200"
              >
                Sign Up Free
              </button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
"use client";
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const TeamMember = ({ name, role, imgSrc, bio, githubUrl }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:transform hover:scale-105">
      <div className="relative h-64 w-full">
        <img 
          src={imgSrc} 
          alt={name} 
          className="w-full h-full object-cover object-center"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{name}</h3>
        <p className="text-blue-600 font-medium mb-3">{role}</p>
        <p className="text-gray-600 mb-4">{bio}</p>
        <a 
          href={githubUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center text-blue-600 hover:text-blue-800 transition"
        >
          <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
          GitHub Profile
        </a>
      </div>
    </div>
  );
};

const OurTeamPage = () => {
  const teamMembers = [
    {
      name: "Utkarsh Verma",
      role: "Lead Developer",
      imgSrc: "/assests/team/utkarsh_verma.jpg",
      bio: "Utkarsh is the mastermind behind ClipSync. With a passion for coding and a knack for problem-solving, he leads our development team to success.",
      githubUrl: "https://github.com/utkarshvermaofficial"
    },
    {
      name: "Aishna Gupta",
      role: "UI/UX Designer",
      imgSrc: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80",
      bio: "Aishna is our creative genius. She designs intuitive and beautiful interfaces that enhance user experience. Her eye for detail ensures that every pixel matters.",
      githubUrl: "https://github.com/aishnagupta31"
    },
    {
      name: "Vansh Rai Chaudhary",
      role: "Backend Engineer",
      imgSrc: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80",
      bio: "Vansh is the backbone of ClipSync. He ensures that our servers run smoothly and efficiently, handling all the data processing and storage needs.",
      githubUrl: "https://github.com/VanshRai7000"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-50 to-indigo-100 py-30">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Meet Our <span className="text-blue-600">Team</span>
              </h1>
              <p className="text-lg text-gray-700">
                At ClipSync, our talented team works tirelessly to bring you the best experience. 
                We're passionate about technology and committed to excellence.
              </p>
            </div>
          </div>
        </section>

        {/* Team Members Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <TeamMember key={index} {...member} />
              ))}
            </div>
          </div>
        </section>

        {/* Join Our Team Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="bg-blue-600 rounded-xl shadow-xl p-8 text-white text-center max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-4">Join Our Team</h2>
              <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
                We're always looking for talented individuals to join our growing team. 
                If you're passionate about technology and innovation, we'd love to hear from you.
              </p>
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-blue-50 transition transform hover:scale-105">
                View Open Positions
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default OurTeamPage;
"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function UserDashboard() {
  const router = useRouter();
  
  // Sample data - replace with actual data fetching logic
  const [projects, setProjects] = useState([
    { id: 1, title: 'Marketing Campaign Video', status: 'In Progress', collaborators: 4, lastEdited: '2 hours ago', thumbnail: '/project-thumb-1.jpg' },
    { id: 2, title: 'Product Demo', status: 'Complete', collaborators: 2, lastEdited: '1 day ago', thumbnail: '/project-thumb-2.jpg' },
    { id: 3, title: 'Team Introduction', status: 'Draft', collaborators: 1, lastEdited: '3 days ago', thumbnail: '/project-thumb-3.jpg' },
  ]);

  const stats = {
    storage: { used: 2.4, total: 10 },
    projectsCount: projects.length,
    collaborators: 7,
    completedProjects: 5
  };

  // State for dropdown and modal
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isNewProjectModalOpen, setIsNewProjectModalOpen] = useState(false);
  const [newProject, setNewProject] = useState({
    title: '',
    aspectRatio: '16:9'
  });
  
  // Toggle dropdown
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  
  // Handle logout
  const handleLogout = async () => {
    try {
      // Close the dropdown
      setIsDropdownOpen(false);
      
      // You would typically call your logout API here
      // For example:
      // await fetch('/api/auth/logout', { method: 'POST' });
      
      // For demonstration, show a logout message
      console.log('User logged out successfully');
      
      // Redirect to the login page or home page
      router.push('/');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };
  
  // Handle new project modal open
  const openNewProjectModal = () => {
    setIsNewProjectModalOpen(true);
  };
  
  // Handle new project modal close
  const closeNewProjectModal = () => {
    setIsNewProjectModalOpen(false);
    // Reset form
    setNewProject({ title: '', aspectRatio: '16:9' });
  };
  
  // Handle form input changes
  const handleNewProjectChange = (e) => {
    const { name, value } = e.target;
    setNewProject(prev => ({ ...prev, [name]: value }));
  };
  
  // Handle project creation
  const handleCreateProject = (e) => {
    e.preventDefault();
    
    // Validate form
    if (!newProject.title.trim()) {
      alert('Please enter a project title');
      return;
    }
    
    // Create a new project
    const newProjectData = {
      id: Date.now(), // Temporary ID, would be replaced with server-generated ID
      title: newProject.title,
      status: 'Draft',
      collaborators: 0,
      lastEdited: 'Just now',
      thumbnail: null,
      aspectRatio: newProject.aspectRatio
    };
    
    // Add to projects list
    setProjects(prev => [newProjectData, ...prev]);
    
    // Close modal
    closeNewProjectModal();
    
    // Optionally navigate to the editor
    // router.push(`/editor/${newProjectData.id}`);
    console.log('New project created:', newProjectData);
  };

  // Close dropdown when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (isDropdownOpen && !event.target.closest('.user-dropdown')) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isDropdownOpen]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header with user info */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold mb-2">Welcome back, Alex</h1>
              <p className="text-blue-100">Let's continue creating amazing videos</p>
            </div>
            <div className="mt-4 md:mt-0 flex items-center space-x-4">
              <button 
                onClick={openNewProjectModal}
                className="bg-white text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-50 transition">
                <span className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                  </svg>
                  New Project
                </span>
              </button>
              <button className="bg-transparent border border-white text-white px-4 py-2 rounded-lg hover:bg-white/10 transition">
                <span className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                    <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                  </svg>
                  Templates
                </span>
              </button>
              
              {/* User icon with dropdown */}
              <div className="relative user-dropdown">
                <button 
                  onClick={toggleDropdown}
                  className="h-10 w-10 rounded-full bg-blue-500 text-white font-semibold border-2 border-white flex items-center justify-center hover:bg-blue-600 transition focus:outline-none"
                >
                  <span>A</span>
                </button>
                
                {/* Dropdown menu */}
                {isDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10 text-gray-800">
                    <Link href="/profile" className="block px-4 py-2 text-sm hover:bg-gray-100 flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                      My Profile
                    </Link>
                    <Link href="/settings" className="block px-4 py-2 text-sm hover:bg-gray-100 flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      Settings
                    </Link>
                    <hr className="my-1" />
                    <button 
                      onClick={handleLogout}
                      className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 flex items-center text-red-600"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                      </svg>
                      Log Out
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* New Project Modal */}
      {isNewProjectModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full mx-4 overflow-hidden">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-700 py-4 px-6">
              <h3 className="text-xl font-bold text-white">Create New Project</h3>
            </div>
            
            <form onSubmit={handleCreateProject} className="p-6">
              <div className="mb-5">
                <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
                  Project Title
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={newProject.title}
                  onChange={handleNewProjectChange}
                  placeholder="Enter project title"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="aspectRatio" className="block text-sm font-medium text-gray-700 mb-1">
                  Aspect Ratio
                </label>
                <select
                  id="aspectRatio"
                  name="aspectRatio"
                  value={newProject.aspectRatio}
                  onChange={handleNewProjectChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="16:9">16:9 - Landscape (YouTube, TV)</option>
                  <option value="9:16">9:16 - Portrait (Instagram, TikTok)</option>
                  <option value="1:1">1:1 - Square (Instagram)</option>
                  <option value="4:3">4:3 - Standard</option>
                  <option value="21:9">21:9 - Cinematic Widescreen</option>
                </select>
                
                {/* Aspect ratio preview */}
                <div className="mt-3 flex justify-center">
                  <div className="border-2 border-blue-200 bg-blue-50 rounded overflow-hidden">
                    {newProject.aspectRatio === '16:9' && (
                      <div className="w-64 h-36 flex items-center justify-center text-blue-500 text-sm">
                        16:9 Preview
                      </div>
                    )}
                    {newProject.aspectRatio === '9:16' && (
                      <div className="w-36 h-64 flex items-center justify-center text-blue-500 text-sm">
                        9:16 Preview
                      </div>
                    )}
                    {newProject.aspectRatio === '1:1' && (
                      <div className="w-48 h-48 flex items-center justify-center text-blue-500 text-sm">
                        1:1 Preview
                      </div>
                    )}
                    {newProject.aspectRatio === '4:3' && (
                      <div className="w-64 h-48 flex items-center justify-center text-blue-500 text-sm">
                        4:3 Preview
                      </div>
                    )}
                    {newProject.aspectRatio === '21:9' && (
                      <div className="w-64 h-28 flex items-center justify-center text-blue-500 text-sm">
                        21:9 Preview
                      </div>
                    )}
                  </div>
                </div>
              </div>
              
              <div className="flex justify-end space-x-3">
                <button
                  type="button"
                  onClick={closeNewProjectModal}
                  className="px-4 py-2 text-sm border border-gray-300 rounded-md hover:bg-gray-100 transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
                >
                  Create Project
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Rest of the dashboard content */}
      <div className="container mx-auto px-4 py-8">
        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="rounded-full bg-blue-100 p-3 mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <div>
                <p className="text-gray-500 text-sm">Active Projects</p>
                <p className="text-2xl font-semibold text-gray-800">{stats.projectsCount}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="rounded-full bg-green-100 p-3 mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <p className="text-gray-500 text-sm">Completed Projects</p>
                <p className="text-2xl font-semibold text-gray-800">{stats.completedProjects}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="rounded-full bg-purple-100 p-3 mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div>
                <p className="text-gray-500 text-sm">Collaborators</p>
                <p className="text-2xl font-semibold text-gray-800">{stats.collaborators}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="rounded-full bg-yellow-100 p-3 mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                </svg>
              </div>
              <div>
                <p className="text-gray-500 text-sm">Storage Used</p>
                <p className="text-2xl font-semibold text-gray-800">{stats.storage.used} / {stats.storage.total} GB</p>
              </div>
            </div>
            <div className="mt-4">
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div 
                  className="bg-blue-600 h-2.5 rounded-full"
                  style={{ width: `${(stats.storage.used / stats.storage.total) * 100}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Projects */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Recent Projects</h2>
            <Link href="/projects" className="text-blue-600 hover:text-blue-800 transition flex items-center">
              View All
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map(project => (
              <div key={project.id} className="bg-white rounded-lg shadow overflow-hidden">
                <div className="h-48 bg-gray-200 relative">
                  {project.thumbnail ? (
                    <div className="w-full h-full bg-gradient-to-br from-blue-400 to-indigo-500 flex items-center justify-center">
                      <span className="text-white font-medium">Project Thumbnail</span>
                    </div>
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-blue-400 to-indigo-500 flex items-center justify-center">
                      <span className="text-white font-medium">No Thumbnail</span>
                    </div>
                  )}
                  <div className={`absolute top-3 right-3 px-2 py-1 rounded text-xs font-medium ${
                    project.status === 'Complete' ? 'bg-green-100 text-green-800' : 
                    project.status === 'In Progress' ? 'bg-blue-100 text-blue-800' : 
                    'bg-yellow-100 text-yellow-800'
                  }`}>
                    {project.status}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-lg text-gray-900 mb-2">{project.title}</h3>
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Last edited {project.lastEdited}
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-500 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                      <span className="text-sm text-gray-500">{project.collaborators} collaborators</span>
                    </div>
                    <button className="text-blue-600 hover:text-blue-800 transition">
                      <span className="flex items-center text-sm font-medium">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                        </svg>
                        Edit
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Activity and Notifications */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Recent Activity</h2>
            <div className="bg-white rounded-lg shadow divide-y divide-gray-100">
              <div className="p-6 flex">
                <div className="mr-4 flex-shrink-0">
                  <div className="h-10 w-10 rounded-full bg-blue-200 flex items-center justify-center">
                    <span className="text-blue-600 font-medium">JD</span>
                  </div>
                </div>
                <div>
                  <p className="font-medium text-gray-900">Jane Doe updated <span className="text-blue-600">Marketing Campaign Video</span></p>
                  <p className="text-sm text-gray-500 mt-1">Added 3 new clips to the timeline</p>
                  <p className="text-xs text-gray-400 mt-1">30 minutes ago</p>
                </div>
              </div>
              
              <div className="p-6 flex">
                <div className="mr-4 flex-shrink-0">
                  <div className="h-10 w-10 rounded-full bg-green-200 flex items-center justify-center">
                    <span className="text-green-600 font-medium">MS</span>
                  </div>
                </div>
                <div>
                  <p className="font-medium text-gray-900">Mike Smith commented on <span className="text-blue-600">Product Demo</span></p>
                  <p className="text-sm text-gray-500 mt-1">"Let's adjust the transition at 00:45, it's too abrupt"</p>
                  <p className="text-xs text-gray-400 mt-1">2 hours ago</p>
                </div>
              </div>
              
              <div className="p-6 flex">
                <div className="mr-4 flex-shrink-0">
                  <div className="h-10 w-10 rounded-full bg-purple-200 flex items-center justify-center">
                    <span className="text-purple-600 font-medium">AL</span>
                  </div>
                </div>
                <div>
                  <p className="font-medium text-gray-900">You shared <span className="text-blue-600">Team Introduction</span> with Alex Lee</p>
                  <p className="text-sm text-gray-500 mt-1">Alex now has editor access</p>
                  <p className="text-xs text-gray-400 mt-1">1 day ago</p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Notifications</h2>
            <div className="bg-white rounded-lg shadow divide-y divide-gray-100">
              <div className="p-4 flex items-center">
                <div className="mr-4 flex-shrink-0 text-blue-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">Jane commented on your project</p>
                  <p className="text-xs text-gray-500 mt-1">1 hour ago</p>
                </div>
              </div>
              
              <div className="p-4 flex items-center">
                <div className="mr-4 flex-shrink-0 text-green-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">Export completed: "Product Demo"</p>
                  <p className="text-xs text-gray-500 mt-1">2 hours ago</p>
                </div>
              </div>
              
              <div className="p-4 flex items-center">
                <div className="mr-4 flex-shrink-0 text-yellow-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">Storage usage at 80%</p>
                  <p className="text-xs text-gray-500 mt-1">1 day ago</p>
                </div>
              </div>
              
              <div className="p-4">
                <Link href="/notifications" className="text-blue-600 hover:text-blue-800 transition text-sm font-medium flex items-center justify-center">
                  View all notifications
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

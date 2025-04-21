'use client'

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';

const navigationItems = [
  { title: 'About', href: '#' },
  { title: 'Research', href: '#' },
  { title: 'Products', href: '#' },
  { title: 'Technologies', href: '#' },
  { title: 'Discover', href: '#' },
];

export default function Page() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 to-black">
      {/* Navbar - with scroll effect */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrollY > 50 ? 'bg-gray-900 shadow-lg py-3' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center">
            <div>
              {/* Logo replaced with GIF image */}
              <div className={`relative transition-all duration-300 ${scrollY > 50 ? 'w-16 h-16' : 'w-24 h-24'}`}>
                <Image 
                  src="/sociologo.gif" // Change this to your local GIF path
                  alt="SocioInvent Logo"
                  width={scrollY > 50 ? 64 : 96}
                  height={scrollY > 50 ? 64 : 96}
                  className="rounded-full"
                />
              </div>
            </div>
            <div className="flex items-center gap-8">
              {navigationItems.map((item, index) => (
                <a key={index} href={item.href} className="text-white text-lg font-light tracking-wide hover:text-cyan-400 transition-colors">
                  {item.title}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - Full Screen */}
      <section className="h-screen w-full flex items-center justify-center bg-gradient-to-r from-gray-900 via-gray-800 to-black relative">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-7xl font-bold mb-6">
            <span className="text-white">#</span>
            <span className="text-cyan-400">Future</span>
            <span className="text-white"> is now</span>
            <span className="text-green-400">.</span>
          </h1>
          <h2 className="text-white text-3xl font-light mb-12">
            Pioneering AI that mirrors human cognition, driving us closer to true AGI
          </h2>
          
          {/* CTA Buttons */}
          <div className="flex justify-center gap-6 z-10 relative">
            <Link href="#">
              <button className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-10 py-4 rounded-full font-medium hover:shadow-lg transition-all">
                Learn More
              </button>
            </Link>
            <Link href="#">
              <button className="border border-cyan-400 text-cyan-400 px-10 py-4 rounded-full font-medium hover:bg-cyan-400 hover:bg-opacity-10 transition-all">
                Get in Touch
              </button>
            </Link>
          </div>
        </div>

        {/* Wave Animation */}
        <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden">
          <svg viewBox="0 0 1200 300" className="w-full opacity-60">
            <path
              d="M0,192L48,186.7C96,181,192,171,288,181.3C384,192,480,224,576,213.3C672,203,768,149,864,144C960,139,1056,181,1152,197.3C1248,213,1344,203,1392,197.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              fill="url(#waveGradient)"
              fillOpacity="1"
            />
            <defs>
              <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#3B82F6" />
                <stop offset="100%" stopColor="#06B6D4" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </section>

      {/* Project Brain Section - Full Screen */}
      <section className="min-h-screen w-full flex items-center py-24 bg-gradient-to-r from-gray-900 via-gray-800 to-black">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl font-bold mb-8">
                <span className="text-lime-400">Project</span>
                <span className="text-white"> Brain</span>
                <span className="text-lime-400">.</span>
              </h2>
              <p className="text-white text-xl mb-6">
                Pioneering AI that mirrors human cognition, driving us closer to true Artificial General Intelligence (AGI).
              </p>
              <p className="text-gray-300 text-lg mb-6">
                Our revolutionary approach combines neural networks with symbolic reasoning to create AI systems that can understand context, reason through complex problems, and learn from minimal examples.
              </p>
              <div className="flex items-center mt-8">
                <Link href="#">
                  <button className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-3 rounded-full font-medium hover:shadow-lg transition-all flex items-center">
                    <span>Learn More</span>
                    <ChevronRight size={20} className="ml-2" />
                  </button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-gray-800 to-purple-900 rounded-full w-96 h-96 mx-auto flex items-center justify-center">
                {/* Neural network visualization */}
                <div className="w-4/5 h-4/5 relative">
                  {/* Network nodes */}
                  {Array.from({ length: 12 }).map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-3 h-3 bg-cyan-300 rounded-full animate-pulse"
                      style={{
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                        animationDelay: `${i * 0.2}s`,
                        animationDuration: `${2 + Math.random() * 2}s`
                      }}
                    ></div>
                  ))}
                  
                  {/* Network connections */}
                  <svg className="absolute inset-0 w-full h-full">
                    <g strokeWidth="1" stroke="rgba(255,255,255,0.5)">
                      {Array.from({ length: 20 }).map((_, i) => (
                        <line
                          key={i}
                          x1={`${Math.random() * 100}%`}
                          y1={`${Math.random() * 100}%`}
                          x2={`${Math.random() * 100}%`}
                          y2={`${Math.random() * 100}%`}
                        />
                      ))}
                    </g>
                  </svg>
                </div>
              </div>
              <div className="absolute -top-8 -left-8 w-24 h-24 bg-lime-400 rounded-full opacity-30 animate-pulse"></div>
              <div className="absolute -bottom-8 -right-8 w-16 h-16 bg-cyan-400 rounded-full opacity-40 animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section - Full Screen - NEW SECTION */}
      <section className="min-h-screen w-full flex items-center py-24 bg-gradient-to-b from-gray-900 via-gray-800 to-black relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20">
          <div className="absolute -top-20 -left-20 w-96 h-96 bg-purple-600 rounded-full filter blur-3xl"></div>
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-cyan-500 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-72 h-72 bg-blue-600 rounded-full filter blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6">
              <span className="text-white">About </span>
              <span className="text-cyan-400">Us</span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <h3 className="text-3xl font-bold text-white mb-6">Our Vision</h3>
              <p className="text-gray-300 text-lg mb-6">
                At SocioDynamics, we envision a world where artificial intelligence augments human capabilities while preserving human values. We are dedicated to developing AI systems that can think, learn, and adapt with human-like cognition but remain firmly grounded in ethical principles.
              </p>
              
              <h3 className="text-3xl font-bold text-white mb-6 mt-12">Our Journey</h3>
              <p className="text-gray-300 text-lg mb-6">
                Founded in 2023, SocioDynamics emerged from groundbreaking research in cognitive science and artificial intelligence. What began as an academic exploration has evolved into a pioneering force at the intersection of neuroscience, computer science, and philosophy of mind.
              </p>
              
              <div className="grid grid-cols-2 gap-8 mt-12">
                <div className="flex flex-col items-center">
                  <div className="text-4xl font-bold text-cyan-400 mb-2">5+</div>
                  <p className="text-gray-300">Research Papers</p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="text-4xl font-bold text-cyan-400 mb-2">2</div>
                  <p className="text-gray-300">Patents Filed</p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="text-4xl font-bold text-cyan-400 mb-2">2</div>
                  <p className="text-gray-300">Research Labs</p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="text-4xl font-bold text-cyan-400 mb-2">10+</div>
                  <p className="text-gray-300">Academic Partners</p>
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2 relative">
              <div className="w-full h-96 bg-gradient-to-br from-purple-900 to-cyan-900 rounded-2xl relative overflow-hidden shadow-2xl">
                {/* Abstract representation of mind/AI */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-4/5 h-4/5">
                    {/* Central core */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-white bg-opacity-30 rounded-full flex items-center justify-center">
                      <div className="w-24 h-24 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-full animate-pulse"></div>
                    </div>
                    
                    {/* Orbiting elements */}
                    {Array.from({ length: 6 }).map((_, i) => (
                      <div 
                        key={i}
                        className="absolute rounded-full"
                        style={{
                          width: `${Math.random() * 16 + 8}px`,
                          height: `${Math.random() * 16 + 8}px`,
                          top: `${Math.random() * 100}%`,
                          left: `${Math.random() * 100}%`,
                          background: `rgb(${Math.random() * 100 + 155}, ${Math.random() * 100 + 155}, 255)`,
                          boxShadow: '0 0 15px rgba(100, 200, 255, 0.8)',
                          animation: `float ${Math.random() * 10 + 10}s infinite ease-in-out`,
                        }}
                      ></div>
                    ))}
                    
                    {/* Connection lines */}
                    <svg className="absolute inset-0 w-full h-full">
                      <g strokeWidth="1" stroke="rgba(255,255,255,0.3)">
                        {Array.from({ length: 15 }).map((_, i) => (
                          <line
                            key={i}
                            x1={`${Math.random() * 100}%`}
                            y1={`${Math.random() * 100}%`}
                            x2={`${Math.random() * 100}%`}
                            y2={`${Math.random() * 100}%`}
                            strokeDasharray="5,5"
                          />
                        ))}
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
              
              {/* Mission statement card */}
              <div className="absolute -bottom-12 -right-8 w-64 bg-gray-900 p-6 rounded-lg border-l-4 border-cyan-400 shadow-lg">
                <h4 className="text-white text-lg font-bold mb-2">Our Mission</h4>
                <p className="text-gray-300">To create intelligence that understands the world as humans do, while remaining aligned with human values.</p>
              </div>
            </div>
          </div>
          
          {/* Values section */}
          <div className="mt-32">
            <h3 className="text-3xl font-bold text-white mb-12 text-center">Our Core Values</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Scientific Rigor",
                  description: "We maintain the highest standards of research methodology and transparency in our pursuit of advanced AI."
                },
                {
                  title: "Human-Centered Design",
                  description: "We prioritize technology that enhances human capabilities rather than replacing them."
                },
                {
                  title: "Ethical Innovation",
                  description: "We develop AI with careful consideration of societal impacts and long-term consequences."
                }
              ].map((value, idx) => (
                <div key={idx} className="bg-gray-800 bg-opacity-50 p-8 rounded-xl border-t border-purple-500">
                  <h4 className="text-white text-xl font-bold mb-4">{value.title}</h4>
                  <p className="text-gray-300">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technology Overview Section - Full Screen */}
      <section className="min-h-screen w-full flex items-center py-24 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-16 text-center">
            <span className="text-white">Our </span>
            <span className="text-cyan-400">Technologies</span>
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              {
                title: "Neurosymbolic AI",
                description: "Combining neural networks with symbolic AI for improved reasoning capabilities.",
                bgColor: "from-blue-600 to-purple-600",
                emoji: "🧩"
              },
              {
                title: "Neuromorphic Computing",
                description: "Hardware designed to mimic the structure and function of biological neural networks.",
                bgColor: "from-teal-400 to-yellow-400",
                emoji: "🧪"
              },
              {
                title: "Embodied AI",
                description: "AI systems that interact with the physical world through robotic interfaces.",
                bgColor: "from-blue-500 to-indigo-600",
                emoji: "🚀"
              },
              {
                title: "Quantum Computing & AI",
                description: "Leveraging quantum mechanics principles to enhance computational capabilities.",
                bgColor: "from-pink-500 to-yellow-400",
                emoji: "✨"
              },
              {
                title: "Edge AI & Distributed Computing",
                description: "Processing data locally on devices at the network edge for real-time applications.",
                bgColor: "from-blue-400 to-cyan-400",
                emoji: "🌐"
              },
              {
                title: "Reinforcement Learning",
                description: "Training agents through reward signals to achieve complex goals autonomously.",
                bgColor: "from-purple-500 to-cyan-500",
                emoji: "🔥"
              },
              {
                title: "Bio-Inspired & DNA Computing",
                description: "Computing paradigms modeled after biological processes and structures.",
                bgColor: "from-indigo-500 to-cyan-400",
                emoji: "🧬"
              },
              {
                title: "Blockchain & Decentralized AI",
                description: "Distributed ledger technologies enabling transparent and secure AI operations.",
                bgColor: "from-orange-500 to-pink-500",
                emoji: "🔗"
              },
              {
                title: "Autonomous Agent Frameworks",
                description: "Architectures enabling AI agents to operate independently with minimal supervision.",
                bgColor: "from-yellow-400 to-orange-500",
                emoji: "🤖"
              },
              {
                title: "Multimodal Large Language Models",
                description: "AI systems capable of processing and generating multiple types of data simultaneously.",
                bgColor: "from-pink-500 to-orange-500",
                emoji: "📊"
              },
              {
                title: "Autonomous Swarm Robotics",
                description: "Coordinated multi-robot systems that collaborate to accomplish complex tasks.",
                bgColor: "from-indigo-500 to-green-500",
                emoji: "🐝"
              },
              {
                title: "Brain-Computer Interfaces",
                description: "Direct communication pathways between the brain and external computing devices.",
                bgColor: "from-cyan-400 to-blue-600",
                emoji: "🧠"
              }
            ].map((tech, index) => (
              <div 
                key={index} 
                className={`bg-gradient-to-br ${tech.bgColor} p-6 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 overflow-hidden relative`}
              >
                <div className="text-4xl mb-3 flex items-center">
                  <span className="mr-2">{tech.emoji}</span> 
                </div>
                <h3 className="text-white text-xl font-bold mb-3">{tech.title}</h3>
                <p className="text-white text-opacity-90 text-sm">{tech.description}</p>
                <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-white bg-opacity-10 rounded-full"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section - Full Screen */}
      <section className="min-h-screen w-full flex items-center py-24 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6">
              <span className="text-white">Team</span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-pink-500 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {/* Team Member 1 */}
            <div className="flex flex-col items-center">
              <div className="bg-white rounded-3xl w-full aspect-square mb-6 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-r from-gray-100 to-gray-200"></div>
              </div>
              <h3 className="text-white text-2xl font-bold mb-1">Sanoufar</h3>
              <h4 className="text-white text-2xl font-bold mb-3">Abdul Azeez</h4>
              <p className="text-white text-lg text-center">Founder and CEO</p>
            </div>
            
            {/* Team Member 2 */}
            <div className="flex flex-col items-center">
              <div className="bg-white rounded-3xl w-full aspect-square mb-6 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-r from-gray-100 to-gray-200"></div>
              </div>
              <h3 className="text-white text-2xl font-bold mb-3">Dr. Asharaf</h3>
              <p className="text-white text-lg text-center">Chief of Research, Advisor and Mentor</p>
            </div>
            
            {/* Team Member 3 */}
            <div className="flex flex-col items-center">
              <div className="bg-white rounded-3xl w-full aspect-square mb-6 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-r from-gray-100 to-gray-200"></div>
              </div>
              <h3 className="text-white text-2xl font-bold mb-1">Aditya</h3>
              <h4 className="text-white text-2xl font-bold mb-3">Vishnu</h4>
              <p className="text-white text-lg text-center">Web Engineering</p>
            </div>
            
            {/* Team Member 4 */}
            <div className="flex flex-col items-center">
              <div className="bg-white rounded-3xl w-full aspect-square mb-6 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-r from-gray-100 to-gray-200"></div>
              </div>
              <h3 className="text-white text-2xl font-bold mb-1">Siya</h3>
              <h4 className="text-white text-2xl font-bold mb-3">ul Haq</h4>
              <p className="text-white text-lg text-center">AI Engineer</p>
            </div>
            
            {/* Team Member 5 */}
            <div className="flex flex-col items-center">
              <div className="bg-white rounded-3xl w-full aspect-square mb-6 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-r from-gray-100 to-gray-200"></div>
              </div>
              <h3 className="text-white text-2xl font-bold mb-1">Shyni</h3>
              <h4 className="text-white text-2xl font-bold mb-3">Sharaf</h4>
              <p className="text-white text-lg text-center">AI Engineer</p>
            </div>
          </div>
        </div>
      </section>

      {/* Research Publications Section - Full Screen */}
      <section className="min-h-screen w-full flex items-center py-24 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-16 text-center">
            <span className="text-white">Latest </span>
            <span className="text-cyan-400">Research</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Recursive Self-Improvement in Large Language Models",
                authors: "Zhang, Lee, Patel & Johnson",
                date: "March 2025",
                description: "A novel approach to enabling AI systems to analyze and enhance their own underlying architectures."
              },
              {
                title: "Integrating Symbolic Knowledge with Neural Representations",
                authors: "Williams, Chen & Gupta",
                date: "February 2025",
                description: "Exploring new methods for combining structured knowledge with learned distributed representations."
              }
            ].map((paper, idx) => (
              <div key={idx} className="bg-gray-900 rounded-lg p-6 border-l-4 border-cyan-400 hover:shadow-lg transition-all">
                <h3 className="text-white text-xl font-bold mb-2">{paper.title}</h3>
                <p className="text-cyan-400 mb-4">{paper.authors} • {paper.date}</p>
                <p className="text-gray-300 mb-6">{paper.description}</p>
                <Link href="#">
                  <button className="text-white flex items-center group">
                    <span>Read paper</span>
                    <ChevronRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                </Link>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link href="#">
              <button className="text-cyan-400 border-b border-cyan-400 pb-1 hover:text-white hover:border-white transition-colors">
                View all research publications
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section - Full Screen */}
      <section className="min-h-screen w-full flex items-center py-24 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          {/* Neural network visualization background */}
          <div className="w-full h-full relative">
            {Array.from({ length: 30 }).map((_, i) => (
              <div
                key={i}
                className="absolute bg-cyan-400 rounded-full"
                style={{
                  width: `${Math.random() * 10 + 2}px`,
                  height: `${Math.random() * 10 + 2}px`,
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                }}
              ></div>
            ))}
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-5xl font-bold mb-8">
              <span className="text-white">Join the </span>
              <span className="text-lime-400">Future</span>
            </h2>
            <p className="text-white text-xl mb-12">
              Be among the first to experience the power of our cognitive AI systems. Request a demo or join our research partnership program.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="#">
                <button className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-10 py-4 rounded-full font-medium hover:shadow-lg transition-all w-full sm:w-auto">
                  Request Demo
                </button>
              </Link>
              <Link href="#">
                <button className="border border-cyan-400 text-cyan-400 px-10 py-4 rounded-full font-medium hover:bg-cyan-400 hover:bg-opacity-10 transition-all w-full sm:w-auto">
                  Contact Us
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>


      {/* Footer */}
      <footer className="w-full bg-gray-900 py-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-8 md:mb-0">
              <div className="flex items-center mb-4">
                {/* Footer logo also changed to GIF */}
                <div className="h-12 w-12 mr-3 relative">
                  <Image 
                    src="/logo.gif" // Change this to your local GIF path
                    alt="SocioInvent Logo"
                    width={48}
                    height={48}
                    className="rounded-full"
                  />
                </div>
                <span className="text-white text-xl font-bold">SOCIODYNAMICS</span>
              </div>
              <p className="text-gray-400 max-w-xs">
                Pioneering AI that mirrors human cognition, driving us closer to true Artificial General Intelligence.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-white font-bold mb-4">Company</h3>
                <ul className="space-y-2">
                  {["About", "Research", "Careers", "Contact"].map((item, idx) => (
                    <li key={idx}>
                      <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="text-white font-bold mb-4">Resources</h3>
                <ul className="space-y-2">
                  {["Blog", "Publications", "Documentation", "Partners"].map((item, idx) => (
                    <li key={idx}>
                      <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="text-white font-bold mb-4">Legal</h3>
                <ul className="space-y-2">
                  {["Privacy", "Terms", "Ethics", "Cookies"].map((item, idx) => (
                    <li key={idx}>
                      <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 SocioDynamics. All rights reserved.
            </p>
            <div className="flex space-x-6">
              {["Twitter", "LinkedIn", "GitHub", "YouTube"].map((social, idx) => (
                <a key={idx} href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  {social}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
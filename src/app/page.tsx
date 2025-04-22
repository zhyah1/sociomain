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
        <div className="flex items-center gap-20">
          {navigationItems.map((item, index) => (
            <a key={index} href={item.href} className="text-white text-lg font-bold tracking-wide hover:text-cyan-400 transition-colors">
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
          Avicenna 1.0: Our Most Powerful AI Model for the Agentic Era
          </h2>
          
          {/* CTA Buttons */}
          <div className="flex justify-center gap-40 z-10 relative">
            <Link href="#">
              <button className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-10 py-4 rounded-full font-medium hover:shadow-lg transition-all">
                Learn More
              </button>
            </Link>
            <Link href="#">
              <button className="border border-cyan-400 text-cyan-400 px-10 py-4 rounded-full font-medium hover:bg-cyan-400 hover:bg-opacity-10 transition-all">
              Chat with Avicenna
              </button>
            </Link>
          </div>
        </div>

{/* Wave Image only at the bottom of the page */}
<div className="absolute bottom-0 left-0 right-0 w-full h-auto overflow-hidden" style={{ top: 'auto' }}>
  <Image
    src="/waver.png"  // Replace with your actual PNG file path
    alt="Wave Pattern"
    width={1200}
    height={300}
    className="w-full translate-y-0"  // Ensure no translation upward
    priority
  />
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
{/* Our Services Section - Full Screen */}
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
        <span className="text-white">Our </span>
        <span className="text-cyan-400">Services</span>
      </h2>
      <div className="w-32 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto"></div>
    </div>
    
    <div className="mb-20">
      <p className="text-gray-300 text-lg text-center max-w-3xl mx-auto">
        At SocioDynamics, we offer cutting-edge AI solutions for enterprises looking to transform their digital capabilities.
        Our team of experts specializes in developing innovative technologies that align with your business goals.
      </p>
    </div>
    
    {/* Services Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
      {/* Service 1 */}
      <div className="service-card flex flex-col items-center">
        <div className="w-48 h-48 mb-8 relative">
          {/* Cybersecurity Icon - Sphere wireframe */}
          <svg className="w-full h-full" viewBox="0 0 200 200">
            <g stroke="rgba(56, 189, 248, 0.8)" fill="none" strokeWidth="1">
              {/* Create circles for the sphere wireframe */}
              {Array.from({ length: 8 }).map((_, i) => (
                <circle 
                  key={`circle-${i}`}
                  cx="100" 
                  cy="100" 
                  r={50 + i * 5}
                  opacity={(1 - i * 0.1).toString()}
                  transform={`rotate(${i * 20} 100 100)`}
                />
              ))}
              {/* Create horizontal circles */}
              {Array.from({ length: 6 }).map((_, i) => (
                <ellipse 
                  key={`ellipse-h-${i}`}
                  cx="100" 
                  cy="100" 
                  rx="70" 
                  ry={15 + i * 10}
                  opacity={(0.6 + i * 0.05).toString()}
                />
              ))}
              {/* Create vertical circles */}
              {Array.from({ length: 6 }).map((_, i) => (
                <ellipse 
                  key={`ellipse-v-${i}`}
                  cx="100" 
                  cy="100" 
                  rx={15 + i * 10} 
                  ry="70"
                  opacity={(0.6 + i * 0.05).toString()}
                  transform={`rotate(${i * 30} 100 100)`}
                />
              ))}
            </g>
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 bg-cyan-400 bg-opacity-20 rounded-full animate-pulse"></div>
          </div>
        </div>
        <h3 className="text-2xl font-bold text-white mb-4">Cybersecurity</h3>
        <p className="text-gray-300 text-center">
          Advanced threat detection and protection systems using AI-powered tools to safeguard your digital assets.
        </p>
      </div>
      
      {/* Service 2 */}
      <div className="service-card flex flex-col items-center">
        <div className="w-48 h-48 mb-8 relative">
          {/* Risk Mitigation Icon - Surface plot */}
          <svg className="w-full h-full" viewBox="0 0 200 200">
            <g stroke="rgba(56, 189, 248, 0.8)" fill="none" strokeWidth="1">
              {/* Create grid lines */}
              {Array.from({ length: 11 }).map((_, i) => (
                <path 
                  key={`grid-v-${i}`}
                  d={`M${40 + i * 12},40 L${40 + i * 12},160 Z`}
                  opacity="0.7"
                />
              ))}
              {Array.from({ length: 11 }).map((_, i) => (
                <path 
                  key={`grid-h-${i}`}
                  d={`M40,${40 + i * 12} L160,${40 + i * 12} Z`}
                  opacity="0.7"
                />
              ))}
              {/* Surface plot curves */}
              {Array.from({ length: 11 }).map((_, i) => (
                <path 
                  key={`surface-${i}`}
                  d={`M40,${40 + i * 12} Q80,${40 + i * 12 - Math.sin(i * 0.6) * 30} 120,${40 + i * 12 + Math.cos(i * 0.5) * 20} T160,${40 + i * 12}`}
                  opacity="0.8"
                />
              ))}
            </g>
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 bg-cyan-400 bg-opacity-20 rounded-full animate-pulse"></div>
          </div>
        </div>
        <h3 className="text-2xl font-bold text-white mb-4">Risk Mitigation</h3>
        <p className="text-gray-300 text-center">
          Data-driven analysis to identify, assess, and mitigate potential risks across your business operations.
        </p>
      </div>
      
      {/* Service 3 */}
      <div className="service-card flex flex-col items-center">
        <div className="w-48 h-48 mb-8 relative">
          {/* Product Development Icon - 3D shape */}
          <svg className="w-full h-full" viewBox="0 0 200 200">
            <g stroke="rgba(56, 189, 248, 0.8)" fill="none" strokeWidth="1">
              {/* Base cube wireframe */}
              <path d="M60,140 L140,140 L140,60 L60,60 Z" />
              <path d="M60,60 L85,35 L165,35 L140,60" />
              <path d="M140,60 L165,35 L165,115 L140,140" />
              <path d="M60,140 L85,115 L165,115 L140,140" />
              <path d="M60,60 L85,35 L85,115 L60,140" />
              <path d="M85,115 L165,115 L165,35 L85,35" />
              
              {/* Internal structure lines */}
              <path d="M60,60 L140,140" opacity="0.7" />
              <path d="M140,60 L60,140" opacity="0.7" />
              <path d="M85,35 L140,140" opacity="0.7" />
              <path d="M60,60 L165,115" opacity="0.7" />
            </g>
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 bg-cyan-400 bg-opacity-20 rounded-full animate-pulse"></div>
          </div>
        </div>
        <h3 className="text-2xl font-bold text-white mb-4">Product Development</h3>
        <p className="text-gray-300 text-center">
          End-to-end product design and development with focus on intelligent systems and cognitive computing solutions.
        </p>
      </div>
      
      {/* Service 4 */}
      <div className="service-card flex flex-col items-center">
        <div className="w-48 h-48 mb-8 relative">
          {/* AI Solutions Icon - Dot matrix */}
          <svg className="w-full h-full" viewBox="0 0 200 200">
            <g stroke="rgba(56, 189, 248, 0.8)" fill="rgba(56, 189, 248, 0.8)">
              {/* Create dot matrix pattern */}
              {Array.from({ length: 15 }).map((_, i) => (
                Array.from({ length: 15 }).map((_, j) => (
                  <circle 
                    key={`dot-${i}-${j}`}
                    cx={40 + i * 8} 
                    cy={40 + j * 8} 
                    r={1.5}
                    opacity={0.4 + Math.sin(i * j * 0.05) * 0.6}
                  />
                ))
              ))}
              
              {/* Create active region in shape of a wave */}
              {Array.from({ length: 15 }).map((_, i) => (
                Array.from({ length: 5 }).map((_, j) => (
                  <circle 
                    key={`active-${i}-${j}`}
                    cx={40 + i * 8} 
                    cy={70 + Math.sin(i * 0.5) * 15 + j * 8} 
                    r={2}
                    opacity="1"
                  />
                ))
              ))}
            </g>
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 bg-cyan-400 bg-opacity-20 rounded-full animate-pulse"></div>
          </div>
        </div>
        <h3 className="text-2xl font-bold text-white mb-4">AI Solutions</h3>
        <p className="text-gray-300 text-center">
          Custom AI implementations that transform data into actionable insights and automate complex business processes.
        </p>
      </div>
    </div>
    
    {/* Call to action */}
    <div className="mt-24 text-center">
      <div className="inline-block bg-gradient-to-r from-purple-600 to-cyan-500 p-0.5 rounded-lg">
        <button className="px-8 py-3 bg-gray-900 rounded-lg text-white font-bold hover:bg-gray-800 transition-colors">
          Request Consultation
        </button>
      </div>
      <p className="text-gray-400 mt-4">
        Our experts are ready to help you find the right solution for your business
      </p>
    </div>
    
    {/* Additional Services Info */}
    <div className="mt-32 grid grid-cols-1 lg:grid-cols-2 gap-12">
      <div className="bg-gray-800 bg-opacity-50 p-8 rounded-xl border-l-4 border-purple-500">
        <h3 className="text-2xl font-bold text-white mb-6">Enterprise Solutions</h3>
        <p className="text-gray-300 mb-4">
          We work closely with enterprise clients to develop tailored AI solutions that address specific business challenges and deliver measurable ROI.
        </p>
        <ul className="space-y-2 text-gray-300">
          <li className="flex items-start">
            <span className="text-cyan-400 mr-2">→</span>
            <span>Custom AI model development and training</span>
          </li>
          <li className="flex items-start">
            <span className="text-cyan-400 mr-2">→</span>
            <span>System integration with existing infrastructure</span>
          </li>
          <li className="flex items-start">
            <span className="text-cyan-400 mr-2">→</span>
            <span>Scalable architecture design</span>
          </li>
        </ul>
      </div>
      
      <div className="bg-gray-800 bg-opacity-50 p-8 rounded-xl border-l-4 border-cyan-500">
        <h3 className="text-2xl font-bold text-white mb-6">Research Partnerships</h3>
        <p className="text-gray-300 mb-4">
          We collaborate with academic institutions and research labs to push the boundaries of AI innovation and bring cutting-edge technologies to market.
        </p>
        <ul className="space-y-2 text-gray-300">
          <li className="flex items-start">
            <span className="text-cyan-400 mr-2">→</span>
            <span>Joint research initiatives</span>
          </li>
          <li className="flex items-start">
            <span className="text-cyan-400 mr-2">→</span>
            <span>Technology transfer programs</span>
          </li>
          <li className="flex items-start">
            <span className="text-cyan-400 mr-2">→</span>
            <span>Academic consulting services</span>
          </li>
        </ul>
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

     {/* Products Section - Full Screen */}
<section className="min-h-screen w-full flex items-center py-24 bg-gradient-to-b from-gray-900 to-black">
  <div className="max-w-7xl mx-auto px-4">
    <h2 className="text-5xl font-bold mb-16 text-center">
      <span className="text-white">EXPLORE OUR </span>
      <span className="text-cyan-400">PRODUCT AREAS</span>
    </h2>
    
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      {/* Main Product - SocioDynamics */}
      <div className="md:col-span-2 row-span-2 bg-white rounded-lg p-8 flex flex-col items-center justify-center">
        <div className="w-48 h-48 mb-6">
          <Image 
            src="/sociodynamics-logo.png" 
            alt="SocioDynamics Logo" 
            width={192} 
            height={192}
          />
        </div>
        <h3 className="text-gray-800 text-3xl font-bold">SOCIODYNAMICS</h3>
        <p className="text-gray-600 text-xl mt-2">FUTURE IS NOW</p>
      </div>
      
      {/* Sociocademy */}
      <div className="bg-white rounded-lg p-6 flex flex-col items-center justify-center">
        <h3 className="text-gray-800 text-2xl font-bold">Sociocademy</h3>
        <p className="text-gray-600 text-sm text-center mt-2">CONNECT. LEARN. GROW</p>
      </div>
      
      {/* AirGuardian */}
      <div className="bg-white rounded-lg p-6 flex flex-col items-center justify-center">
        <div className="w-24 h-24 mb-2">
          <Image 
            src="/airguardian-logo.png" 
            alt="AirGuardian Logo" 
            width={96} 
            height={96}
          />
        </div>
        <h3 className="text-gray-800 text-xl font-bold">AIRGUARDIAN</h3>
        <p className="text-gray-600 text-sm">Drone Intelligence</p>
      </div>
      
      {/* SocioCare */}
      <div className="bg-white rounded-lg p-6 flex flex-col items-center justify-center">
        <div className="w-24 h-24 mb-2">
          <Image 
            src="/sociocare-logo.png" 
            alt="SocioCare Logo" 
            width={96} 
            height={96}
          />
        </div>
        <h3 className="text-gray-800 text-xl font-bold">SOCIO CARE</h3>
      </div>
      
      {/* SocioGreen */}
      <div className="bg-white rounded-lg p-6 flex flex-col items-center justify-center">
        <div className="w-24 h-24 mb-2">
          <Image 
            src="/sociogreen-logo.png" 
            alt="SocioGreen Logo" 
            width={96} 
            height={96}
          />
        </div>
        <h3 className="text-gray-800 text-lg font-bold">SOCIOGREEN</h3>
        <p className="text-gray-600 text-sm">TECHNOLOGY</p>
      </div>
      
      {/* SocioGenome */}
      <div className="bg-white rounded-lg p-6 flex flex-col items-center justify-center">
        <div className="w-24 h-24 mb-2">
          <Image 
            src="/sociogenome-logo.png" 
            alt="SocioGenome Logo" 
            width={96} 
            height={96}
          />
        </div>
        <h3 className="text-gray-800 text-xl font-bold">SocioGenome</h3>
        <p className="text-gray-600 text-sm">Genome AI</p>
      </div>
      
      {/* QuantumLoop */}
      <div className="bg-white rounded-lg p-6 flex flex-col items-center justify-center">
        <div className="w-24 h-24 mb-2">
          <Image 
            src="/quantumloop-logo.png" 
            alt="QuantumLoop Logo" 
            width={96} 
            height={96}
          />
        </div>
        <h3 className="text-gray-800 text-xl font-bold">QUANTUMLOOP</h3>
        <p className="text-gray-600 text-sm">TECHNOLOGY</p>
      </div>
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
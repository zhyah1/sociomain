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
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [headerVisible, setHeaderVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Determine if we're scrolling up or down
      if (currentScrollY > lastScrollY + 10) {
        // Scrolling down - hide header
        setHeaderVisible(false);
      } else if (currentScrollY < lastScrollY - 10) {
        // Scrolling up - show header
        setHeaderVisible(true);
      }
      
      // Update scroll position states
      setScrollY(currentScrollY);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Set isLoaded to true after a small delay to trigger animations
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, [lastScrollY]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black">
      {/* Navbar - with scroll effect */}
      <nav 
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrollY > 50 ? 'bg-gray-900/90 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-6'
        } transform ${
          headerVisible ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
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
            <div className="hidden md:flex items-center gap-8 lg:gap-12">
              {navigationItems.map((item, index) => (
                <a 
                  key={index} 
                  href={item.href} 
                  className={`text-white text-lg font-medium tracking-wide hover:text-cyan-400 transition-all transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
                  style={{ 
                    transitionDelay: `${index * 100}ms`,
                    transitionProperty: 'transform, opacity, color',
                    transitionDuration: '800ms'
                  }}
                >
                  {item.title}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - Full Screen */}
      <section className="h-screen w-full flex items-center justify-center bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 z-10">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 md:mb-8 tracking-tight leading-tight">
              <div className="flex flex-wrap justify-center items-baseline">
                <span 
                  className={`text-white inline-block transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}`}
                  style={{ transitionDelay: '200ms', transitionDuration: '1000ms', transitionProperty: 'transform, opacity' }}
                >
                  #
                </span>
                <span 
                  className={`text-cyan-400 inline-block mx-2 transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}`}
                  style={{ transitionDelay: '400ms', transitionDuration: '1000ms', transitionProperty: 'transform, opacity' }}
                >
                  Future
                </span>
                <span 
                  className={`text-white inline-block transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}`}
                  style={{ transitionDelay: '600ms', transitionDuration: '1000ms', transitionProperty: 'transform, opacity' }}
                >
                  is&nbsp;now
                </span>
                <span 
                  className={`text-green-400 inline-block transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}`}
                  style={{ transitionDelay: '800ms', transitionDuration: '1000ms', transitionProperty: 'transform, opacity' }}
                >
                  .
                </span>
              </div>
            </h1>
            
            <h2 
              className={`text-white text-xl md:text-2xl lg:text-3xl font-light mb-12 mx-auto max-w-3xl transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
              style={{ 
                transitionDelay: '1000ms', 
                transitionDuration: '1000ms', 
                transitionProperty: 'transform, opacity',
                letterSpacing: '0.05em'
              }}
            >
              Hytham 1.0: Our Most Powerful AI Model for the Agentic Era
            </h2>
              
            {/* CTA Buttons */}
            <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-8 z-10 relative">
              <Link href="#">
                <button 
                  className={`bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-3 md:px-10 md:py-4 rounded-full font-medium hover:shadow-lg hover:shadow-purple-500/20 transition-all mb-4 md:mb-0 transform ${isLoaded ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-8 opacity-0 scale-95'}`}
                  style={{ transitionDelay: '1200ms', transitionDuration: '1000ms', transitionProperty: 'transform, opacity, box-shadow' }}
                >
                  Learn More
                </button>
              </Link>
              <Link href="#">
                <button 
                  className={`border-2 border-cyan-400 text-cyan-400 px-8 py-3 md:px-10 md:py-4 rounded-full font-medium hover:bg-cyan-400/10 transition-all transform ${isLoaded ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-8 opacity-0 scale-95'}`}
                  style={{ transitionDelay: '1400ms', transitionDuration: '1000ms', transitionProperty: 'transform, opacity, background-color' }}
                >
                  Chat with Hytham
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Optional: Add some floating elements or particles for visual interest */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* You could add particles or other decorative elements here */}
        </div>
      </section>
 {/* Project Brain Section - Full Screen */}
<section className="relative w-full min-h-screen bg-gradient-to-b from-black to-gray-900 overflow-hidden">
  {/* Network background visualization - Enhanced */}
  <div className="absolute inset-0">
    {/* Animated network nodes */}
    {Array.from({ length: 30 }).map((_, i) => (
      <div
        key={i}
        className="absolute rounded-full animate-pulse"
        style={{
          width: `${Math.random() * 4 + 1}px`,
          height: `${Math.random() * 4 + 1}px`,
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          opacity: 0.4 + Math.random() * 0.4,
          backgroundColor: i % 3 === 0 ? '#34d399' : i % 3 === 1 ? '#60a5fa' : '#a78bfa',
          boxShadow: i % 3 === 0 ? '0 0 15px #34d399' : i % 3 === 1 ? '0 0 15px #60a5fa' : '0 0 15px #a78bfa',
          animationDuration: `${Math.random() * 3 + 2}s`,
        }}
      />
    ))}
  </div>
  
  {/* Content container */}
  <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 flex flex-col justify-center items-center min-h-screen">
    {/* Logo in top right */}
    <div className="absolute top-8 right-8">
      <div className="flex items-center">
        <div className="w-8 h-8">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <circle cx="50" cy="50" r="40" fill="url(#grad1)" />
            <defs>
              <radialGradient id="grad1" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                <stop offset="0%" stopColor="#8a3ffc" />
                <stop offset="100%" stopColor="#6fdbff" />
              </radialGradient>
            </defs>
          </svg>
        </div>
        <span className="text-white ml-2 font-bold text-lg tracking-wider">SOCIOINVENT</span>
      </div>
    </div>
    
    {/* Main heading with initial position below viewport */}
    <div className="flex flex-col items-center translate-y-20 opacity-0" id="heroContent">
      <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8 text-center tracking-tight">
        <span className="text-green-400">Project</span>{" "}
        <span className="text-white">Brain</span>
        <span className="text-green-400">.</span>
      </h1>
      
      {/* Subtitle */}
      <p className="text-white text-xl max-w-3xl text-center leading-relaxed font-light mb-12">
        Pioneering AI that mirrors human cognition, driving us closer to true 
        <span className="mx-1 text-cyan-400 font-normal">Artificial General Intelligence</span> (AGI).
      </p>
      
      {/* Learn More button */}
      <div className="mt-4">
        <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full text-white text-lg font-medium hover:shadow-lg hover:shadow-purple-500/20 transition-all transform hover:scale-105 duration-300">
          Learn More
        </button>
      </div>
    </div>
  </div>
</section>

{/* Project Brain Description */}
<section className="w-full py-24 bg-gradient-to-b from-gray-900 to-black">
  <div className="max-w-6xl mx-auto px-6">
    {/* Main Heading - Better alignment */}
    <div className="mb-16">
      <h2 className="text-5xl md:text-6xl font-bold text-left translate-y-16 opacity-0 transition-all duration-1000 ease-out scroll-reveal">
        <span className="text-green-400">Project</span>{" "}
        <span className="text-white">Brain</span>
        <span className="text-green-400">.</span>
      </h2>
      <div className="w-32 h-1 mt-4 bg-gradient-to-r from-purple-600 to-cyan-600 translate-y-16 opacity-0 transition-all duration-1000 delay-100 ease-out scroll-reveal"></div>
    </div>
    
    {/* Subtitle with Brain Icon - Center aligned and enhanced */}
    <h3 className="text-white text-3xl md:text-4xl font-light mb-16 text-center leading-relaxed translate-y-16 opacity-0 transition-all duration-1000 delay-200 ease-out scroll-reveal">
      A Research Prototype Inspired by the Human Brain{" "}
      <span className="inline-block mx-1 align-middle">
        <svg viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-cyan-400">
          <path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9z"/>
          <path d="M12 15c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"/>
          <path d="M12 8v-2"/>
          <path d="M12 18v-2"/>
          <path d="M8 12h-2"/>
          <path d="M18 12h-2"/>
        </svg>
      </span>{" "}
      for Achieving General Intelligence
    </h3>
    
    {/* Descriptive Text - Center aligned with controlled width */}
    <p className="text-white text-xl leading-relaxed max-w-5xl mx-auto text-center translate-y-16 opacity-0 transition-all duration-1000 delay-300 ease-out scroll-reveal">
      Our cutting-edge research prototype is designed to emulate the intricacies of the human brain, 
      paving the way for the development of true Artificial General Intelligence (AGI). By leveraging 
      <span className="text-cyan-400"> advanced neural architectures</span>, 
      <span className="text-purple-400"> cognitive modeling</span>, and 
      <span className="text-green-400"> adaptive learning systems</span>, we are 
      pushing the boundaries of AI to create systems capable of reasoning, problem-solving, and 
      continuous learning—just like the human mind.
    </p>
  </div>
</section>

{/* About Us Section - Full Screen - Redesigned */}
<section className="min-h-screen w-full flex flex-col justify-center py-24 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
  {/* Background elements - Enhanced */}
  <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-600 rounded-full filter blur-3xl"></div>
    <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-600 rounded-full filter blur-3xl"></div>
    <div className="absolute top-3/4 right-1/3 w-48 h-48 bg-green-500 rounded-full filter blur-3xl"></div>
  </div>
  
  <div className="max-w-6xl mx-auto px-4 relative z-10">
    {/* Header */}
    <div className="mb-20 text-center">
      <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 translate-y-16 opacity-0 transition-all duration-1000 ease-out scroll-reveal">About</h1>
      <div className="w-32 h-1 mx-auto bg-gradient-to-r from-purple-600 to-cyan-600 translate-y-16 opacity-0 transition-all duration-1000 delay-100 ease-out scroll-reveal"></div>
    </div>
    
    {/* Main content - better alignment and typography */}
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center translate-y-16 opacity-0 transition-all duration-1000 delay-200 ease-out scroll-reveal">
        SocioDynamics AI: <span className="text-cyan-400">Advancing AI</span> for a <span className="text-green-400">Better World</span>
      </h2>
      
      <p className="text-xl text-white mb-12 leading-relaxed text-center translate-y-16 opacity-0 transition-all duration-1000 delay-300 ease-out scroll-reveal">
        SocioDynamics is an AI research and deployment company—an innovation hub
        where ideas flourish, creativity thrives, and breakthroughs happen. Our workspace
        drives cutting-edge technologies that redefine what is possible.
      </p>
      
      <p className="text-xl text-white leading-relaxed text-center translate-y-16 opacity-0 transition-all duration-1000 delay-400 ease-out scroll-reveal">
        But we go beyond technology. Our innovations are purpose-driven, harnessing the
        power of AI and Robotics to positively impact social dynamics, fostering a better
        and more harmonious world for all.
      </p>
    </div>
    
    {/* Added call to action */}
    <div className="mt-16 text-center translate-y-16 opacity-0 transition-all duration-1000 delay-500 ease-out scroll-reveal">
      <button className="px-8 py-3 border-2 border-cyan-400 text-cyan-400 rounded-full text-lg font-medium hover:bg-cyan-400/10 transition-all transform hover:scale-105 duration-300">
        Join Our Mission
      </button>
    </div>
  </div>
</section>

{/* Add custom animations to your Tailwind CSS */}
<style jsx global>{`
  @keyframes fadeUpIn {
    from {
      opacity: 0;
      transform: translateY(40px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  .animate-fade-up-in {
    animation: fadeUpIn 1.2s forwards;
  }
  
  /* Add this script to handle scroll animations */
  .scroll-reveal.active {
    transform: translateY(0) !important;
    opacity: 1 !important;
  }
`}</style>

{/* Script for scroll animations */}
<script dangerouslySetInnerHTML={{
  __html: `
    // Automatically animate the hero section when page loads
    document.addEventListener('DOMContentLoaded', function() {
      // Get the hero content element
      const heroContent = document.getElementById('heroContent');
      
      // Apply animation after a short delay
      setTimeout(() => {
        heroContent.style.transition = 'all 1.2s ease-out';
        heroContent.style.transform = 'translateY(0)';
        heroContent.style.opacity = '1';
      }, 300);
      
      // Initialize intersection observer to detect when elements enter viewport
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          // Add 'active' class when element enters the viewport
          if (entry.isIntersecting) {
            // Get the element that needs to be animated
            const target = entry.target;
            
            // Apply the animation by changing styles directly
            setTimeout(() => {
              target.style.transform = 'translateY(0)';
              target.style.opacity = '1';
            }, 100);
            
            // Unobserve after animation is triggered
            observer.unobserve(target);
          }
        });
      }, {
        root: null, // viewport
        threshold: 0.15, // trigger when 15% visible
        rootMargin: '-50px 0px' // trigger slightly before element enters viewport
      });
      
      // Target all elements with the scroll-reveal class
      document.querySelectorAll('.scroll-reveal').forEach(el => {
        observer.observe(el);
      });
    });
  `
}} />

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
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-8">
      {/* Service 1 */}
      <div className="service-card flex flex-col items-center lg:col-span-3 xl:col-span-1">
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
      <div className="service-card flex flex-col items-center lg:col-span-3 xl:col-span-1">
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
      <div className="service-card flex flex-col items-center lg:col-span-3 xl:col-span-1">
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
      <div className="service-card flex flex-col items-center lg:col-span-3 xl:col-span-1">
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

      {/* Service 5 - Digital Transformation */}
      <div className="service-card flex flex-col items-center lg:col-span-3 xl:col-span-1">
        <div className="w-48 h-48 mb-8 relative">
          {/* Digital Transformation Icon - Connected Network */}
          <svg className="w-full h-full" viewBox="0 0 200 200">
            <g stroke="rgba(56, 189, 248, 0.8)" fill="rgba(56, 189, 248, 0.8)">
              {/* Create center node */}
              <circle cx="100" cy="100" r="10" opacity="0.9" />
              
              {/* Create surrounding nodes */}
              {Array.from({ length: 8 }).map((_, i) => {
                const angle = i * Math.PI / 4;
                const x = 100 + Math.cos(angle) * 50;
                const y = 100 + Math.sin(angle) * 50;
                return (
                  <g key={`node-${i}`}>
                    <circle cx={x} cy={y} r="6" opacity="0.8" />
                    <line 
                      x1="100" 
                      y1="100" 
                      x2={x} 
                      y2={y} 
                      strokeWidth="1.5"
                      opacity="0.6" 
                    />
                    
                    {/* Secondary connections */}
                    {Array.from({ length: 2 }).map((_, j) => {
                      const subAngle = angle + (j === 0 ? 0.4 : -0.4);
                      const subX = x + Math.cos(subAngle) * 25;
                      const subY = y + Math.sin(subAngle) * 25;
                      return (
                        <g key={`subnode-${i}-${j}`}>
                          <circle cx={subX} cy={subY} r="4" opacity="0.7" />
                          <line 
                            x1={x} 
                            y1={y} 
                            x2={subX} 
                            y2={subY} 
                            strokeWidth="1"
                            opacity="0.5" 
                          />
                        </g>
                      );
                    })}
                  </g>
                );
              })}
              
              {/* Add animated pulses */}
              <circle cx="100" cy="100" r="15" opacity="0" stroke="rgba(56, 189, 248, 0.8)" strokeWidth="2" fill="none">
                <animate attributeName="r" from="15" to="60" dur="3s" repeatCount="indefinite" />
                <animate attributeName="opacity" from="0.8" to="0" dur="3s" repeatCount="indefinite" />
              </circle>
            </g>
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 bg-cyan-400 bg-opacity-20 rounded-full animate-pulse"></div>
          </div>
        </div>
        <h3 className="text-2xl font-bold text-white mb-4">Digital Transformation</h3>
        <p className="text-gray-300 text-center">
          Strategic frameworks and implementation services to guide your organization through comprehensive digital evolution.
        </p>
      </div>
      
      {/* Service 6 - IoT Solutions */}
      <div className="service-card flex flex-col items-center lg:col-span-3 xl:col-span-1">
        <div className="w-48 h-48 mb-8 relative">
          {/* IoT Solutions Icon - Connected Devices */}
          <svg className="w-full h-full" viewBox="0 0 200 200">
            <g stroke="rgba(56, 189, 248, 0.8)" fill="none" strokeWidth="1.5">
              {/* Create central cloud */}
              <path d="M100,80 C90,65 70,65 60,75 C45,60 20,70 25,90 C10,95 10,115 25,120 C20,140 45,150 60,135 C70,145 90,145 100,130" fill="rgba(56, 189, 248, 0.1)" />
              
              {/* Create various IoT devices */}
              {/* Smart watch */}
              <rect x="130" y="50" width="18" height="22" rx="3" fill="rgba(56, 189, 248, 0.2)" />
              <rect x="133" y="54" width="12" height="14" rx="1" fill="none" />
              <path d="M130,61 L122,67 L122,77" />
              
              {/* Smart thermostat */}
              <circle cx="150" cy="110" r="12" fill="rgba(56, 189, 248, 0.2)" />
              <circle cx="150" cy="110" r="8" />
              <path d="M150,98 L150,90 L160,90" />
              
              {/* Smartphone */}
              <rect x="50" y="160" width="15" height="25" rx="2" fill="rgba(56, 189, 248, 0.2)" />
              <line x1="55" y1="160" x2="60" y2="160" />
              <path d="M50,172 L40,160 L40,150" />
              
              {/* Smart speaker */}
              <path d="M120,160 C120,152 134,152 134,160 L134,170 C134,178 120,178 120,170 Z" fill="rgba(56, 189, 248, 0.2)" />
              <path d="M127,152 L127,145 L115,145" />
              <path d="M127,178 L127,185" />
              
              {/* Smart bulb */}
              <circle cx="40" cy="40" r="10" fill="rgba(56, 189, 248, 0.2)" />
              <path d="M40,30 L40,20" />
              <path d="M33,33 L26,26" />
              <path d="M30,40 L20,40" />
              <path d="M40,50 L40,60 L50,60" />
              
              {/* Connection lines to cloud */}
              <path d="M40,40 Q60,60 60,80" strokeDasharray="3,3" />
              <path d="M139,61 Q120,70 100,80" strokeDasharray="3,3" />
              <path d="M150,110 Q120,100 100,100" strokeDasharray="3,3" />
              <path d="M57,160 Q70,140 70,120" strokeDasharray="3,3" />
              <path d="M127,160 Q110,140 90,130" strokeDasharray="3,3" />
              
              {/* Data transmission animation */}
              <circle cx="0" cy="0" r="2" fill="rgba(56, 189, 248, 1)">
                <animateMotion path="M40,40 Q60,60 60,80" dur="6s" repeatCount="indefinite" />
              </circle>
              <circle cx="0" cy="0" r="2" fill="rgba(56, 189, 248, 1)">
                <animateMotion path="M139,61 Q120,70 100,80" dur="4s" repeatCount="indefinite" />
              </circle>
              <circle cx="0" cy="0" r="2" fill="rgba(56, 189, 248, 1)">
                <animateMotion path="M150,110 Q120,100 100,100" dur="5s" repeatCount="indefinite" />
              </circle>
            </g>
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 bg-cyan-400 bg-opacity-20 rounded-full animate-pulse"></div>
          </div>
        </div>
        <h3 className="text-2xl font-bold text-white mb-4">IoT Solutions</h3>
        <p className="text-gray-300 text-center">
          Connected device ecosystems that generate real-time data insights and enable intelligent automation across your infrastructure.
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
    <div className="mt-32 grid grid-cols-1 lg:grid-cols-3 gap-10">
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

      <div className="bg-gray-800 bg-opacity-50 p-8 rounded-xl border-l-4 border-blue-500">
        <h3 className="text-2xl font-bold text-white mb-6">Digital Transformation</h3>
        <p className="text-gray-300 mb-4">
          Our comprehensive approach helps organizations evolve their digital capabilities to compete in today&apos;s rapidly changing technology landscape.
        </p>
        <ul className="space-y-2 text-gray-300">
          <li className="flex items-start">
            <span className="text-cyan-400 mr-2">→</span>
            <span>Digital maturity assessment</span>
          </li>
          <li className="flex items-start">
            <span className="text-cyan-400 mr-2">→</span>
            <span>Technology roadmap development</span>
          </li>
          <li className="flex items-start">
            <span className="text-cyan-400 mr-2">→</span>
            <span>Legacy system modernization</span>
          </li>
          <li className="flex items-start">
            <span className="text-cyan-400 mr-2">→</span>
            <span>Change management and training</span>
          </li>
        </ul>
      </div>
    </div>

    {/* IoT Solutions Additional Info */}
    <div className="mt-10">
      <div className="bg-gray-800 bg-opacity-50 p-8 rounded-xl border-l-4 border-teal-500">
        <h3 className="text-2xl font-bold text-white mb-6">IoT Implementation Services</h3>
        <p className="text-gray-300 mb-6">
          Our IoT solutions connect your physical assets to digital ecosystems, enabling intelligent data collection, analysis, and automated decision-making.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h4 className="text-xl font-semibold text-white mb-4">Device Ecosystem</h4>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start">
                <span className="text-cyan-400 mr-2">→</span>
                <span>Smart sensor deployment</span>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-400 mr-2">→</span>
                <span>Edge computing solutions</span>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-400 mr-2">→</span>
                <span>Connectivity infrastructure</span>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-400 mr-2">→</span>
                <span>Device management platforms</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xl font-semibold text-white mb-4">Data Intelligence</h4>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start">
                <span className="text-cyan-400 mr-2">→</span>
                <span>Real-time analytics pipeline</span>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-400 mr-2">→</span>
                <span>Predictive maintenance</span>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-400 mr-2">→</span>
                <span>Automated workflow triggers</span>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-400 mr-2">→</span>
                <span>Visualization dashboards</span>
              </li>
            </ul>
          </div>
        </div>
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
    <div className="mb-16 text-center">
      <h2 className="text-7xl font-bold mb-2 text-white">Team</h2>
      <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-pink-500 mx-auto"></div>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
      {/* Team Member 1 */}
      <div className="flex flex-col items-center">
        <div className="rounded-3xl w-full aspect-square mb-4 overflow-hidden p-0.5 bg-gradient-to-r from-pink-500 via-yellow-500 to-pink-500">
          <div className="w-full h-full bg-white rounded-2xl"></div>
        </div>
        <h3 className="text-white text-xl font-bold mb-1 text-center">Sanoufar Abdul Azeez</h3>
        <p className="text-white text-lg text-center">Founder and CEO</p>
      </div>
      
      {/* Team Member 2 */}
      <div className="flex flex-col items-center">
        <div className="rounded-3xl w-full aspect-square mb-4 overflow-hidden p-0.5 bg-gradient-to-r from-pink-500 via-yellow-500 to-pink-500">
          <div className="w-full h-full bg-white rounded-2xl"></div>
        </div>
        <h3 className="text-white text-xl font-bold mb-1 text-center">Dr. Asharaf S</h3>
        <p className="text-white text-lg text-center">Chief of Research, Advisor and Mentor</p>
      </div>
      
      {/* Team Member 3 */}
      <div className="flex flex-col items-center">
        <div className="rounded-3xl w-full aspect-square mb-4 overflow-hidden p-0.5 bg-gradient-to-r from-pink-500 via-yellow-500 to-pink-500">
          <div className="w-full h-full bg-white rounded-2xl"></div>
        </div>
        <h3 className="text-white text-xl font-bold mb-1 text-center">Aditya Vishnu</h3>
        <p className="text-white text-lg text-center">Web Engineering</p>
      </div>
      
      {/* Team Member 4 */}
      <div className="flex flex-col items-center">
        <div className="rounded-3xl w-full aspect-square mb-4 overflow-hidden p-0.5 bg-gradient-to-r from-pink-500 via-yellow-500 to-pink-500">
          <div className="w-full h-full bg-white rounded-2xl"></div>
        </div>
        <h3 className="text-white text-xl font-bold mb-1 text-center">Siyaul Haq</h3>
        <p className="text-white text-lg text-center">AI Engineer</p>
      </div>
      
      {/* Team Member 5 */}
      <div className="flex flex-col items-center">
        <div className="rounded-3xl w-full aspect-square mb-4 overflow-hidden p-0.5 bg-gradient-to-r from-pink-500 via-yellow-500 to-pink-500">
          <div className="w-full h-full bg-white rounded-2xl"></div>
        </div>
        <h3 className="text-white text-xl font-bold mb-1 text-center">Shyni Sharaf</h3>
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
        <h3 className="text-gray-800 text-xl font-bold">AGRIVERSE</h3>
        <p className="text-gray-600 text-sm">AGRI TECH</p>
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
        <h3 className="text-gray-800 text-xl font-bold">SOCIOPAY</h3>
        <p className="text-gray-600 text-sm"></p>
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

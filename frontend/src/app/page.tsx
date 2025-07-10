'use client'

import React, { useState } from 'react';
import { 
  Menu, 
  X, 
  Leaf, 
  TrendingUp, 
  Shield, 
  Users, 
  MapPin, 
  Phone, 
  Mail,
  ArrowRight,
  CheckCircle,
  Sprout,
  BarChart3,
  Zap
} from 'lucide-react';
import Link from 'next/link';


export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Navigation */}
      <nav className="relative z-50 px-4 lg:px-8 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Leaf className="h-8 w-8 text-green-400" />
            <span className="text-2xl font-bold text-white">Krishi-Udyog</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#products" className="text-gray-300 hover:text-green-400 transition-colors duration-200">
              Products
            </a>
            <a href="#newsroom" className="text-gray-300 hover:text-green-400 transition-colors duration-200">
              Newsroom
            </a>
            <a href="#about" className="text-gray-300 hover:text-green-400 transition-colors duration-200">
              About Us
            </a>
            <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg transition-colors duration-200">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-green-400 transition-colors duration-200"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-gray-900 bg-opacity-95 backdrop-blur-sm border-t border-gray-800">
            <div className="px-4 py-4 space-y-4">
              <a href="#products" className="block text-gray-300 hover:text-green-400 transition-colors duration-200">
                Products
              </a>
              <a href="#newsroom" className="block text-gray-300 hover:text-green-400 transition-colors duration-200">
                Newsroom
              </a>
              <a href="#about" className="block text-gray-300 hover:text-green-400 transition-colors duration-200">
                About Us
              </a>
              <button className="w-full bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg transition-colors duration-200">
                Get Started
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: 'url("/display/farmForAgroTech.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundColor: 'yellow'
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-60"></div>
        
        {/* Content */}
        <div className="relative z-10 text-center px-4 lg:px-8 max-w-5xl mx-auto">
          <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
            Precision Agriculture
            <span className="text-green-400 block">for Tomorrow</span>
          </h1>
          <p className="text-xl lg:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Revolutionizing farming with cutting-edge technology, data-driven insights, and sustainable solutions 
            for maximum yield and environmental stewardship.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 transform hover:scale-105 flex items-center gap-2">
              Explore Solutions
              <ArrowRight className="h-5 w-5" />
            </button>
            <button className="border-2 border-green-400 text-green-400 hover:bg-green-400 hover:text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200">
              Watch Demo
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="products" className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Our <span className="text-green-400">Products</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive precision agriculture solutions designed to optimize your farming operations
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-900 rounded-xl p-8 hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 cursor-pointer border-2 border-transparent hover:border-green-400">
              <div className="bg-green-600 rounded-lg p-4 w-16 h-16 flex items-center justify-center mb-6">
                <Leaf className="h-8 w-8 text-white" />
              </div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold">Smart Fertilizer Recommendation</h3>
                <span className="bg-green-600 text-white text-xs px-2 py-1 rounded-full font-semibold">LIVE</span>
              </div>
              <p className="text-gray-300 mb-6">
                AI-powered system that predicts optimal fertilizers based on weather, soil, and crop conditions for maximum yield.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span className="text-gray-300">Weather Analysis</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span className="text-gray-300">Soil Condition Assessment</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span className="text-gray-300">Crop-Specific Recommendations</span>
                </li>
              </ul>
              <Link href="/predicting-optimal-fertilizer">
                <button className="w-full mt-6 bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition-colors duration-200">
                  Try Now
                </button>
              </Link>
            </div>

            <div className="bg-gray-900 rounded-xl p-8 hover:bg-gray-600 transition-all duration-300 transform hover:scale-105 cursor-pointer border-2 border-transparent hover:border-orange-400 opacity-75">
              <div className="bg-green-600 rounded-lg p-4 w-16 h-16 flex items-center justify-center mb-6">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold">Pest & Disease Detection</h3>
                <span className="text-center  bg-orange-500 text-white text-xs px-2 py-1 rounded-full font-semibold ">COMING SOON</span>
              </div>
              <p className="text-gray-300 mb-6">
                Advanced computer vision system to identify and diagnose crop diseases and pest infestations early.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span className="text-gray-300">Image Recognition</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span className="text-gray-300">Early Detection</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span className="text-gray-300">Treatment Recommendations</span>
                </li>
              </ul>
              <button className="w-full mt-6 bg-gray-600 text-gray-400 py-3 rounded-lg font-semibold cursor-not-allowed ">
                Coming Soon
              </button>
            </div>

            <div className="bg-gray-900 rounded-xl p-8 hover:bg-gray-600 transition-all duration-300 transform hover:scale-105 cursor-pointer border-2 border-transparent hover:border-orange-400 opacity-75">
              <div className="bg-green-600 rounded-lg p-4 w-16 h-16 flex items-center justify-center mb-6">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold">Yield Prediction</h3>
                <span className="bg-orange-500 text-center text-white text-xs px-2 py-1 rounded-full font-semibold">COMING SOON</span>
              </div>
              <p className="text-gray-300 mb-6">
                Machine learning models to predict crop yields based on historical data, weather patterns, and farming practices.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span className="text-gray-300">Historical Analysis</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span className="text-gray-300">Weather Integration</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span className="text-gray-300">Accurate Forecasting</span>
                </li>
              </ul>
              <button className="w-full mt-6 bg-gray-600 text-gray-400 py-3 rounded-lg font-semibold cursor-not-allowed">
                Coming Soon
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl lg:text-5xl font-bold text-green-400 mb-2">500+</div>
              <p className="text-gray-300 text-lg">Farms Transformed</p>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-bold text-green-400 mb-2">35%</div>
              <p className="text-gray-300 text-lg">Yield Increase</p>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-bold text-green-400 mb-2">40%</div>
              <p className="text-gray-300 text-lg">Water Savings</p>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-bold text-green-400 mb-2">24/7</div>
              <p className="text-gray-300 text-lg">Support Available</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                About <span className="text-green-400">Krishi-Udyog</span>
              </h2>
              <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                We are pioneering the future of agriculture through innovative technology solutions that empower farmers 
                to make data-driven decisions and achieve sustainable growth.
              </p>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Our mission is to bridge the gap between traditional farming wisdom and modern technology, creating 
                solutions that are both powerful and accessible to farmers of all scales.
              </p>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <TrendingUp className="h-6 w-6 text-green-400" />
                  <span className="text-gray-300">Growth Focused</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="h-6 w-6 text-green-400" />
                  <span className="text-gray-300">Sustainable</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-6 w-6 text-green-400" />
                  <span className="text-gray-300">Farmer-First</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/2132227/pexels-photo-2132227.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop" 
                alt="Modern farming technology" 
                className="rounded-xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsroom Section */}
      <section id="newsroom" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Latest <span className="text-green-400">News</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Stay updated with the latest developments in precision agriculture
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <article className="bg-gray-800 rounded-xl overflow-hidden hover:bg-gray-700 transition-colors duration-300">
              <img 
                src="https://images.pexels.com/photos/1595108/pexels-photo-1595108.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop" 
                alt="Agricultural innovation" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">AI-Powered Crop Monitoring</h3>
                <p className="text-gray-300 mb-4">
                  Revolutionary new AI system helps farmers predict crop health issues before they become problems.
                </p>
                <span className="text-green-400 text-sm">December 15, 2024</span>
              </div>
            </article>

            <article className="bg-gray-800 rounded-xl overflow-hidden hover:bg-gray-700 transition-colors duration-300">
              <img 
                src="https://images.pexels.com/photos/2132227/pexels-photo-2132227.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop" 
                alt="Sustainable farming" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">Sustainable Farming Initiative</h3>
                <p className="text-gray-300 mb-4">
                  New partnership brings sustainable farming practices to over 1000 farms across the region.
                </p>
                <span className="text-green-400 text-sm">December 10, 2024</span>
              </div>
            </article>

            <article className="bg-gray-800 rounded-xl overflow-hidden hover:bg-gray-700 transition-colors duration-300">
              <img 
                src="https://images.pexels.com/photos/1595108/pexels-photo-1595108.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop" 
                alt="Smart irrigation" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">Smart Irrigation Breakthrough</h3>
                <p className="text-gray-300 mb-4">
                  Advanced irrigation system reduces water usage by 40% while increasing crop yields.
                </p>
                <span className="text-green-400 text-sm">December 5, 2024</span>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-600">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
            Ready to Transform Your Farm?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
            Join thousands of farmers who have already revolutionized their operations with our precision agriculture solutions.
          </p>
          <button className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 transform hover:scale-105">
            Start Your Journey Today
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-16">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Leaf className="h-8 w-8 text-green-400" />
                <span className="text-2xl font-bold text-white">Krishi-Udyog</span>
              </div>
              <p className="text-gray-300 mb-4">
                Empowering farmers with precision agriculture technology for a sustainable future.
              </p>
              <div className="flex space-x-4">
                <div className="bg-gray-800 rounded-lg p-2">
                  <Phone className="h-5 w-5 text-green-400" />
                </div>
                <div className="bg-gray-800 rounded-lg p-2">
                  <Mail className="h-5 w-5 text-green-400" />
                </div>
                <div className="bg-gray-800 rounded-lg p-2">
                  <MapPin className="h-5 w-5 text-green-400" />
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Our Solutions</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-green-400 transition-colors">Fertilizer Recommendation</a></li>
                <li><a href="#" className="text-gray-300 hover:text-green-400 transition-colors">Pest & Disease Detection</a></li>
                <li><a href="#" className="text-gray-300 hover:text-green-400 transition-colors">Yield Prediction</a></li>
                <li><a href="#" className="text-gray-300 hover:text-green-400 transition-colors">Support Center</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-green-400 transition-colors">About Us</a></li>
                <li><a href="#" className="text-gray-300 hover:text-green-400 transition-colors">Careers</a></li>
                <li><a href="#" className="text-gray-300 hover:text-green-400 transition-colors">Partners</a></li>
                <li><a href="#" className="text-gray-300 hover:text-green-400 transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Support</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-green-400 transition-colors">Help Center</a></li>
                <li><a href="#" className="text-gray-300 hover:text-green-400 transition-colors">Documentation</a></li>
                <li><a href="#" className="text-gray-300 hover:text-green-400 transition-colors">API Reference</a></li>
                <li><a href="#" className="text-gray-300 hover:text-green-400 transition-colors">Community</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="text-gray-300">
              © 2025 Krishi-Udyog. All rights reserved. Empowering agriculture through innovation.
            </p>
          </div>
        </div>
      </footer>
    </div>
    </>
  );
}
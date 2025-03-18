import React from 'react';
import { Wifi, Zap, Lock, Clock, Globe, Shield, Server, Gauge } from 'lucide-react';
import { Link } from 'react-router-dom';

const InternetConnectivity = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-blue-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
              Business Internet Solutions
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-blue-200 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              High-speed, reliable connectivity solutions for modern businesses
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900">Enterprise-Grade Connectivity</h2>
            <p className="mt-4 text-lg text-gray-500">
              In today's digital world, reliable internet connectivity is crucial for business success. Our solutions provide the speed, reliability, and security your business needs to stay competitive.
            </p>
            <p className="mt-4 text-lg text-gray-500">
              From dedicated internet access to SD-WAN solutions, we offer a comprehensive suite of connectivity options designed to meet your specific business requirements and ensure maximum uptime.
            </p>
            
            <div className="mt-8 space-y-6">
              <div className="flex items-start">
                <Gauge className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Guaranteed Bandwidth</h3>
                  <p className="mt-2 text-gray-500">Dedicated bandwidth with speeds up to 100 Gbps and guaranteed throughput</p>
                </div>
              </div>

              <div className="flex items-start">
                <Shield className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Enhanced Security</h3>
                  <p className="mt-2 text-gray-500">Built-in DDoS protection and advanced security features to protect your network</p>
                </div>
              </div>

              <div className="flex items-start">
                <Clock className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">24/7 Support</h3>
                  <p className="mt-2 text-gray-500">Round-the-clock monitoring and technical support with rapid response times</p>
                </div>
              </div>

              <div className="flex items-start">
                <Globe className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Global Coverage</h3>
                  <p className="mt-2 text-gray-500">Extensive network coverage with points of presence worldwide</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Available Solutions</h3>
            
            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
              <div className="flex items-center mb-4">
                <Wifi className="h-6 w-6 text-blue-600 mr-3" />
                <h4 className="text-xl font-semibold text-gray-900">Dedicated Internet Access</h4>
              </div>
              <ul className="text-gray-600 space-y-2">
                <li>• Symmetrical speeds up to 100 Gbps</li>
                <li>• 99.999% availability SLA</li>
                <li>• Built-in DDoS protection</li>
                <li>• BGP routing options</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
              <div className="flex items-center mb-4">
                <Server className="h-6 w-6 text-blue-600 mr-3" />
                <h4 className="text-xl font-semibold text-gray-900">SD-WAN Solutions</h4>
              </div>
              <ul className="text-gray-600 space-y-2">
                <li>• Intelligent traffic routing</li>
                <li>• Application-aware networking</li>
                <li>• Multi-link load balancing</li>
                <li>• Zero-touch provisioning</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
              <div className="flex items-center mb-4">
                <Zap className="h-6 w-6 text-blue-600 mr-3" />
                <h4 className="text-xl font-semibold text-gray-900">Broadband Services</h4>
              </div>
              <ul className="text-gray-600 space-y-2">
                <li>• High-speed cable and fiber options</li>
                <li>• Business-class SLAs</li>
                <li>• Static IP addresses</li>
                <li>• Optional backup solutions</li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-blue-50 rounded-xl p-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Transform Your Connectivity?</h3>
            <p className="text-lg text-gray-600 mb-8">
              Contact us today to discuss your business internet needs and find the perfect solution for your organization.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InternetConnectivity;
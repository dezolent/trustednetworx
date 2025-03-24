import React from 'react';
import { Wifi, Zap, Lock, Clock, Globe, Shield, Server, Gauge, DollarSign, Router, Signal, Network, Headphones } from 'lucide-react';
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
              Ensure your business remains agile, efficient, and securely connected with our comprehensive Internet Connectivity solutions
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
                <Wifi className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Reliability</h3>
                  <p className="mt-2 text-gray-500">Experience high-quality, uninterrupted connectivity backed by our robust infrastructure and support.​</p>
                </div>
              </div>

              <div className="flex items-start">
                <Gauge className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Scalability</h3>
                  <p className="mt-2 text-gray-500">Easily adjust services to align with your business growth and evolving needs.​</p>
                </div>
              </div>

              <div className="flex items-start">
                <Shield className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Security</h3>
                  <p className="mt-2 text-gray-500">Protect your data and communications with our advanced security measures and monitoring.</p>
                </div>
              </div>

              <div className="flex items-start">
                <DollarSign className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Cost Efficiency</h3>
                  <p className="mt-2 text-gray-500">Optimize your IT investments with solutions designed to provide maximum value and performance.​</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Available Solutions</h3>
            
            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
              <div className="flex items-center mb-4">
                <Router className="h-6 w-6 text-blue-600 mr-3" />
                <h4 className="text-xl font-semibold text-gray-900">Managed SD-WAN Services</h4>
              </div>
              <ul className="text-gray-600 space-y-2">
                <li>Our award-winning SD-WAN combines MPLS, broadband internet circuits, and 4G-LTE to deliver a resilient and high-performance network. This intelligent network dynamically manages resources, offering improved performance, reliability, and security.</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
              <div className="flex items-center mb-4">
                <Globe className="h-6 w-6 text-blue-600 mr-3" />
                <h4 className="text-xl font-semibold text-gray-900">Satellite Broadband</h4>
              </div>
              <ul className="text-gray-600 space-y-2">
                <li>As an authorized reseller of Starlink services and equipment, we provide high-speed, low-latency broadband internet access, even in remote locations. This ensures your business remains connected, regardless of geography.</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
              <div className="flex items-center mb-4">
                <Signal className="h-6 w-6 text-blue-600 mr-3" />
                <h4 className="text-xl font-semibold text-gray-900">IoT Single SIM</h4>
              </div>
              <ul className="text-gray-600 space-y-2">
                <li>Our IoT Single SIM card ensures your devices maintain connectivity at all times by intelligently roaming to find the strongest mobile signal, regardless of carrier. This global solution enhances security, reduces costs, and provides real-time data for effective device management.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="text-center mt-16">
          <h2 className="text-3xl font-extrabold text-gray-900">
            Why Choose TrustedNetworx Solutions
          </h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
              <div className="text-blue-600 mb-4 flex items-center justify-center">
                <Network size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Customized IT Solutions</h3>
              <p className="text-gray-600">
                Our team expertly monitors and maintains your IT infrastructure, allowing you to focus on your core business operations without interruption. We provide fully managed fiber, broadband, and wireless 4G/LTE solutions, ensuring your networks are secure, efficient, and up-to-date.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
              <div className="text-blue-600 mb-4 flex items-center justify-center">
                <Headphones size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Comprehensive Support</h3>
              <p className="text-gray-600">
                As a client, you'll have direct access to dedicated account managers, project managers, engineers, service technicians, and a customer care team to assist with all aspects of your networking needs.
              </p>
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

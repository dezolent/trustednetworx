import React from 'react';
import { Smartphone, Signal, Shield, Globe, Zap, Lock, Settings, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const MobilitySolutions = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-blue-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
              Mobility Solutions
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-blue-200 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Comprehensive mobile solutions for your workforce
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900">Enterprise Mobility Management</h2>
            <p className="mt-4 text-lg text-gray-500">
              Keep your mobile workforce connected and productive with our comprehensive mobility solutions. We provide end-to-end management of your mobile devices, applications, and security.
            </p>
            
            <div className="mt-8 space-y-6">
              <div className="flex items-start">
                <Smartphone className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Device Management</h3>
                  <p className="mt-2 text-gray-500">Centralized control of all mobile devices across your organization</p>
                </div>
              </div>

              <div className="flex items-start">
                <Signal className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Network Coverage</h3>
                  <p className="mt-2 text-gray-500">Extensive network coverage with reliable connectivity</p>
                </div>
              </div>

              <div className="flex items-start">
                <Shield className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Security</h3>
                
                  <p className="mt-2 text-gray-500">Advanced security features to protect mobile data and devices</p>
                </div>
              </div>

              <div className="flex items-start">
                <Globe className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Global Coverage</h3>
                  <p className="mt-2 text-gray-500">International roaming and global connectivity solutions</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Mobile Solutions</h3>
            
            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
              <div className="flex items-center mb-4">
                <Settings className="h-6 w-6 text-blue-600 mr-3" />
                <h4 className="text-xl font-semibold text-gray-900">Mobile Device Management</h4>
              </div>
              <ul className="text-gray-600 space-y-2">
                <li>• Device provisioning and configuration</li>
                <li>• Remote device management</li>
                <li>• Security policy enforcement</li>
                <li>• Asset tracking and inventory</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
              <div className="flex items-center mb-4">
                <Lock className="h-6 w-6 text-blue-600 mr-3" />
                <h4 className="text-xl font-semibold text-gray-900">Mobile Security</h4>
              </div>
              <ul className="text-gray-600 space-y-2">
                <li>• Data encryption</li>
                <li>• Secure container solutions</li>
                <li>• Application security</li>
                <li>• Threat protection</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
              <div className="flex items-center mb-4">
                <Users className="h-6 w-6 text-blue-600 mr-3" />
                <h4 className="text-xl font-semibold text-gray-900">Enterprise Mobility</h4>
              </div>
              <ul className="text-gray-600 space-y-2">
                <li>• Mobile application management</li>
                <li>• Content management</li>
                <li>• BYOD support</li>
                <li>• Policy management</li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-blue-50 rounded-xl p-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Mobilize Your Workforce?</h3>
            <p className="text-lg text-gray-600 mb-8">
              Contact us today to learn how our mobility solutions can help your business stay connected and productive.
            </p>
            <Link
              to="mailto:carter@trustednetworx.com"
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

export default MobilitySolutions;
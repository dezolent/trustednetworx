import React from 'react';
import { Phone, Shield, Zap, DollarSign } from 'lucide-react';
import { Link } from 'react-router-dom';

const PotsReplacement = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative min-h-[400px] flex items-center">
        {/* Background Image */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(/TrustedNetworx-Hero-Image.jpg)',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/95 to-black/50" />
        </div>

        <div className="relative z-10 w-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
                POTS Replacement Solutions
              </h1>
              <p className="mt-3 max-w-md mx-auto text-base text-blue-200 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                Modern alternatives to traditional phone lines for your business
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900">Cutting the Landline</h2>
            <p className="mt-4 text-lg text-gray-500">
              As traditional Plain Old Telephone Service (POTS) lines become obsolete and carriers phase out support, businesses need reliable alternatives that offer improved functionality and cost savings.
            </p>
            <p className="mt-4 text-lg text-gray-500">
              Our POTS replacement solutions provide modern, digital alternatives that maintain compatibility with your existing equipment while adding new features and capabilities. We help you transition smoothly from legacy copper lines to IP-based solutions.
            </p>
          </div>
          <div className="bg-blue-50 p-8 rounded-lg">
            <div className="text-blue-600 mb-6">
              <Phone size={48} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Key Benefits</h3>
            <ul className="space-y-4 text-gray-600">
              <li className="flex items-start">
                <DollarSign className="flex-shrink-0 h-6 w-6 text-blue-600 mr-2" />
                <div>
                  <span className="font-medium block">Cost Savings:</span>
                  <span>Reduce monthly telephone expenses by up to 50% while adding new capabilities</span>
                </div>
              </li>
              <li className="flex items-start">
                <Shield className="flex-shrink-0 h-6 w-6 text-blue-600 mr-2" />
                <div>
                  <span className="font-medium block">Enhanced Reliability:</span>
                  <span>Improved uptime with built-in redundancy and disaster recovery options</span>
                </div>
              </li>
              <li className="flex items-start">
                <Zap className="flex-shrink-0 h-6 w-6 text-blue-600 mr-2" />
                <div>
                  <span className="font-medium block">Future-Proof Solution:</span>
                  <span>Stay ahead of copper retirement with modern IP-based technology</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* All-In-One Solution Section */}
        <div className="mt-16 bg-gray-50 rounded-xl p-8">
          <div className="mx-auto">
            <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">
              An All-In-One POTS Replacement Solution
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="prose prose-lg">
                <p className="text-gray-600">
                  <a 
                    href="https://dataremote.com/pots-line-replacement/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 font-semibold"
                  >
                    POTS IN A BOX®
                  </a>{' '}
                  is a cutting-edge POTS line replacement solution that enables seamless migration of legacy PSTN-based analog systems to modern IP and cellular data networks, supporting voice, fax, alarm signals, and emergency communications. Featuring cost-effective, plug-and-play cellular routers, it delivers versatile business continuity and reliable telecommunications for today's evolving industry.
                </p>
              </div>
              <div className="flex justify-center">
                <img 
                  src="/DataRemote-90X1-All-In-One-POTS-Replacement.png" 
                  alt="POTS IN A BOX Solution Diagram"
                  className="max-w-full h-auto rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Compatible Systems & Use Cases</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
              <h4 className="text-xl font-semibold text-gray-900 mb-3">Security Systems</h4>
              <ul className="text-gray-600 space-y-2">
                <li>• Fire alarm panels</li>
                <li>• Burglar alarms</li>
                <li>• Emergency phones</li>
                <li>• Building access control</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
              <h4 className="text-xl font-semibold text-gray-900 mb-3">Business Equipment</h4>
              <ul className="text-gray-600 space-y-2">
                <li>• Fax machines</li>
                <li>• Point of sale systems</li>
                <li>• Credit card readers</li>
                <li>• ATM machines</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
              <h4 className="text-xl font-semibold text-gray-900 mb-3">Building Systems</h4>
              <ul className="text-gray-600 space-y-2">
                <li>• Elevator phones</li>
                <li>• Gate entry systems</li>
                <li>• Building automation</li>
                <li>• Environmental monitoring</li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-blue-50 rounded-xl p-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Modernize Your Phone Lines?</h3>
            <p className="text-lg text-gray-600 mb-8">
              Contact us today to learn how we can help you transition from legacy POTS lines to modern alternatives while maintaining compatibility with your existing systems.
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

export default PotsReplacement;

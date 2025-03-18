import React from 'react';
import { PhoneCall, Mic, MessageSquare, Settings, Headphones, Globe, Shield, BarChart } from 'lucide-react';
import { Link } from 'react-router-dom';

const VoiceSolutions = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-blue-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
              Voice Solutions
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-blue-200 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Advanced voice communication systems for modern business
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900">
            Enterprise Voice Communications
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            Comprehensive voice solutions that enhance business communication and collaboration
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
            <div className="text-blue-600 mb-4">
              <PhoneCall size={32} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Voice Services</h3>
            <ul className="text-gray-600 space-y-2">
              <li>• HD Voice Quality</li>
              <li>• Toll-Free Numbers</li>
              <li>• Local Numbers</li>
              <li>• International Calling</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
            <div className="text-blue-600 mb-4">
              <Mic size={32} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Voice Features</h3>
            <ul className="text-gray-600 space-y-2">
              <li>• Voice Recognition</li>
              <li>• Voice Analytics</li>
              <li>• Call Recording</li>
              <li>• Voice Transcription</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
            <div className="text-blue-600 mb-4">
              <MessageSquare size={32} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Unified Communications</h3>
            <ul className="text-gray-600 space-y-2">
              <li>• Voice & Video</li>
              <li>• Instant Messaging</li>
              <li>• Presence Information</li>
              <li>• Team Collaboration</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
            <div className="text-blue-600 mb-4">
              <Settings size={32} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Management</h3>
            <ul className="text-gray-600 space-y-2">
              <li>• Call Analytics</li>
              <li>• Quality Monitoring</li>
              <li>• System Administration</li>
              <li>• User Management</li>
            </ul>
          </div>
        </div>

        <div className="bg-gray-50 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Benefits of Our Voice Solutions</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Enhanced Quality</h4>
              <p className="text-gray-600">
                Crystal-clear voice quality with HD audio and advanced noise cancellation.
                Reliable service with guaranteed uptime and redundancy.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Cost Efficiency</h4>
              <p className="text-gray-600">
                Reduce communication costs with competitive calling rates and bundled services.
                Eliminate hardware costs with cloud-based solutions.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Advanced Features</h4>
              <p className="text-gray-600">
                Access modern features like voice analytics, transcription, and intelligent routing.
                Integrate with your existing business applications.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Scalability</h4>
              <p className="text-gray-600">
                Easily scale your voice services up or down based on business needs.
                Add new features and users without complex infrastructure changes.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-blue-50 rounded-xl p-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Enhance Your Voice Communications?</h3>
            <p className="text-lg text-gray-600 mb-8">
              Contact us today to learn how our voice solutions can transform your business communications.
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

export default VoiceSolutions;
import React from 'react';
import { PhoneCall, Users, Settings, Headphones, Link } from 'lucide-react';
import { Link as RouterLink } from 'react-router-dom';

const IpPbx = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-blue-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
              IP PBX Solutions
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-blue-200 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Advanced business phone systems for modern communication
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900">
            Transform Your Business Communications
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            Our IP PBX solutions combine traditional telephony with modern IP technology
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
            <div className="text-blue-600 mb-4">
              <PhoneCall size={32} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Advanced Features</h3>
            <ul className="text-gray-600 space-y-2">
              <li>• Auto-attendant</li>
              <li>• Call queuing</li>
              <li>• Voice mail to email</li>
              <li>• Call recording</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
            <div className="text-blue-600 mb-4">
              <Users size={32} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Collaboration Tools</h3>
            <ul className="text-gray-600 space-y-2">
              <li>• Video conferencing</li>
              <li>• Instant messaging</li>
              <li>• Presence information</li>
              <li>• Screen sharing</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
            <div className="text-blue-600 mb-4">
              <Settings size={32} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Easy Management</h3>
            <ul className="text-gray-600 space-y-2">
              <li>• Web-based interface</li>
              <li>• User management</li>
              <li>• Call reporting</li>
              <li>• System monitoring</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
            <div className="text-blue-600 mb-4">
              <Headphones size={32} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Support</h3>
            <ul className="text-gray-600 space-y-2">
              <li>• 24/7 technical support</li>
              <li>• Remote assistance</li>
              <li>• Regular updates</li>
              <li>• Training available</li>
            </ul>
          </div>
        </div>

        <div className="bg-gray-50 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Our IP PBX Solution?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Cost Savings</h4>
              <p className="text-gray-600">
                Reduce your communication costs with lower call rates and minimal hardware requirements.
                Eliminate the need for separate phone lines for each employee.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Scalability</h4>
              <p className="text-gray-600">
                Easily add new users and features as your business grows. No need for expensive
                hardware upgrades or complex installations.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Flexibility</h4>
              <p className="text-gray-600">
                Work from anywhere with internet access. Support remote workers and multiple
                office locations with a unified system.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Reliability</h4>
              <p className="text-gray-600">
                Enterprise-grade infrastructure ensures high availability and call quality.
                Built-in redundancy and failover capabilities.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-blue-50 rounded-xl p-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Modernize Your Business Phone System?</h3>
            <p className="text-lg text-gray-600 mb-8">
              Contact us today to learn how our IP PBX solutions can transform your business communications.
            </p>
            <RouterLink
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10"
            >
              Get Started
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IpPbx;
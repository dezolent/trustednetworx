import React from 'react';
import { Truck, MapPin, BarChart, Shield, Settings, Clock, DollarSign, Fuel } from 'lucide-react';
import { Link } from 'react-router-dom';

const FleetManagement = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-blue-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
              Fleet & Fuel Management Solutions
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-blue-200 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Optimize your fleet operations with real-time tracking and comprehensive management tools
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900">
            Transform Your Fleet Operations
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            Optimize your fleet operations with TrustedNetworx's Fleet and Fuel Management Partner Solutions, designed to enhance efficiency, reduce costs, and ensure compliance across your entire vehicle network.​
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
            <div className="text-blue-600 mb-4">
              <MapPin size={32} />
            </div>
            <h4 className="text-xl font-semibold text-gray-900 mb-3">Real-Time GPS Tracking</h4>
            <ul className="text-gray-600 space-y-2">
              <li>• Live vehicle location</li>
              <li>• Historical trip data</li>
              <li>• Geofencing capabilities</li>
              <li>• Real-time notifications</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
            <div className="text-blue-600 mb-4">
              <Settings size={32} />
            </div>
            <h4 className="text-xl font-semibold text-gray-900 mb-3">Maintenance Management</h4>
            <ul className="text-gray-600 space-y-2">
              <li>• Service scheduling</li>
              <li>• Maintenance alerts</li>
              <li>• Vehicle diagnostics</li>
              <li>• Repair history</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
            <div className="text-blue-600 mb-4">
              <Fuel size={32} />
            </div>
            <h4 className="text-xl font-semibold text-gray-900 mb-3">Fuel Management</h4>
            <ul className="text-gray-600 space-y-2">
              <li>• Fuel consumption tracking</li>
              <li>• Cost analysis</li>
              <li>• Fuel card integration</li>
              <li>• Efficiency reports</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
            <div className="text-blue-600 mb-4">
              <BarChart size={32} />
            </div>
            <h4 className="text-xl font-semibold text-gray-900 mb-3">Performance Analytics</h4>
            <ul className="text-gray-600 space-y-2">
              <li>• Driver scorecards</li>
              <li>• Route optimization</li>
              <li>• Custom reporting</li>
              <li>• KPI dashboards</li>
            </ul>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="bg-gray-50 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Benefits of Our Fleet Management Solutions</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Enhanced Efficiency</h4>
              <p className="text-gray-600">
                By leveraging real-time data and analytics, streamline operations, reduce downtime, and improve overall fleet performance.​
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Cost Reduction</h4>
              <p className="text-gray-600">
                Identify and eliminate inefficiencies, leading to significant savings on fuel and maintenance.​
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Regulatory Compliance</h4>
              <p className="text-gray-600">
                Maintain adherence to industry standards and regulations with automated tracking and reporting features.​
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Improved Safety</h4>
              <p className="text-gray-600">
                Proactively address risky driving behaviors, fostering a culture of safety within your team.​
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-blue-50 rounded-xl p-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Optimize Your Fleet?</h3>
            <p className="text-lg text-gray-600 mb-8">
              Partner with TrustedNetworx to transform your fleet management strategy, ensuring your operations are efficient, compliant, and primed for success in today's competitive landscape.
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

export default FleetManagement;

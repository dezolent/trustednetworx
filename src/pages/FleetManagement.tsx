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
              Fleet Management Solutions
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-blue-200 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Optimize your fleet operations with real-time tracking and comprehensive management tools
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900">Transform Your Fleet Operations</h2>
            <p className="mt-4 text-lg text-gray-500">
              Our comprehensive fleet management system helps businesses optimize their operations, reduce costs, and improve efficiency. With real-time tracking and advanced analytics, you'll have complete visibility into your fleet's performance.
            </p>
            <p className="mt-4 text-lg text-gray-500">
              From small businesses to large enterprises, our scalable solution adapts to your needs while providing the tools necessary for effective fleet management and compliance.
            </p>
          </div>
          <div className="bg-blue-50 p-8 rounded-lg">
            <div className="text-blue-600 mb-6">
              <Truck size={48} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Key Benefits</h3>
            <ul className="space-y-4 text-gray-600">
              <li className="flex items-start">
                <DollarSign className="flex-shrink-0 h-6 w-6 text-blue-600 mr-2" />
                <div>
                  <span className="font-medium block">Cost Reduction:</span>
                  <span>Lower fuel consumption, maintenance costs, and operational expenses</span>
                </div>
              </li>
              <li className="flex items-start">
                <Clock className="flex-shrink-0 h-6 w-6 text-blue-600 mr-2" />
                <div>
                  <span className="font-medium block">Improved Efficiency:</span>
                  <span>Optimize routes, reduce idle time, and enhance driver productivity</span>
                </div>
              </li>
              <li className="flex items-start">
                <Shield className="flex-shrink-0 h-6 w-6 text-blue-600 mr-2" />
                <div>
                  <span className="font-medium block">Enhanced Safety:</span>
                  <span>Monitor driver behavior and ensure compliance with safety regulations</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Comprehensive Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
              <div className="text-blue-600 mb-4">
                <MapPin size={32} />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">Real-Time Tracking</h4>
              <ul className="text-gray-600 space-y-2">
                <li>• Live vehicle location</li>
                <li>• Historical trip data</li>
                <li>• Geofencing capabilities</li>
                <li>• Mobile app access</li>
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
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-blue-50 rounded-xl p-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Optimize Your Fleet?</h3>
            <p className="text-lg text-gray-600 mb-8">
              Contact us today to learn how our fleet management solutions can help you reduce costs and improve efficiency.
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
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Truck, Wifi, PhoneCall, Smartphone, Mic, ArrowRight } from 'lucide-react';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative bg-blue-600 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-blue-600 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
                  <span className="block">Modern Solutions for</span>
                  <span className="block text-blue-200">Modern Business</span>
                </h1>
                <p className="mt-3 text-base text-blue-200 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  TrustedNetworx delivers cutting-edge telecommunications solutions to help your business stay connected and competitive.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <Link to="/about" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50 md:py-4 md:text-lg md:px-10">
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Our Services
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Comprehensive telecommunications solutions for your business needs
            </p>
          </div>

          <div className="mt-10">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <Link to="/pots-replacement" className="group">
                <div className="relative rounded-lg border border-gray-200 bg-white p-6 shadow-sm hover:shadow-lg transition-shadow">
                  <div className="text-blue-600 mb-4">
                    <Phone size={32} />
                  </div>
                  <h3 className="text-lg font-medium text-gray-900">POTS Replacement</h3>
                  <p className="mt-2 text-gray-500">Modern alternatives to traditional phone lines</p>
                  <div className="mt-4 flex items-center text-blue-600">
                    Learn more <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>

              <Link to="/fleet-management" className="group">
                <div className="relative rounded-lg border border-gray-200 bg-white p-6 shadow-sm hover:shadow-lg transition-shadow">
                  <div className="text-blue-600 mb-4">
                    <Truck size={32} />
                  </div>
                  <h3 className="text-lg font-medium text-gray-900">Fleet Management</h3>
                  <p className="mt-2 text-gray-500">Efficient fleet tracking and management solutions</p>
                  <div className="mt-4 flex items-center text-blue-600">
                    Learn more <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>

              <Link to="/internet-connectivity" className="group">
                <div className="relative rounded-lg border border-gray-200 bg-white p-6 shadow-sm hover:shadow-lg transition-shadow">
                  <div className="text-blue-600 mb-4">
                    <Wifi size={32} />
                  </div>
                  <h3 className="text-lg font-medium text-gray-900">Internet Connectivity</h3>
                  <p className="mt-2 text-gray-500">High-speed internet solutions for business</p>
                  <div className="mt-4 flex items-center text-blue-600">
                    Learn more <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>

              <Link to="/ip-pbx" className="group">
                <div className="relative rounded-lg border border-gray-200 bg-white p-6 shadow-sm hover:shadow-lg transition-shadow">
                  <div className="text-blue-600 mb-4">
                    <PhoneCall size={32} />
                  </div>
                  <h3 className="text-lg font-medium text-gray-900">IP PBX</h3>
                  <p className="mt-2 text-gray-500">Advanced business phone systems</p>
                  <div className="mt-4 flex items-center text-blue-600">
                    Learn more <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>

              <Link to="/mobility-solutions" className="group">
                <div className="relative rounded-lg border border-gray-200 bg-white p-6 shadow-sm hover:shadow-lg transition-shadow">
                  <div className="text-blue-600 mb-4">
                    <Smartphone size={32} />
                  </div>
                  <h3 className="text-lg font-medium text-gray-900">Mobility Solutions</h3>
                  <p className="mt-2 text-gray-500">Enterprise mobility management and solutions</p>
                  <div className="mt-4 flex items-center text-blue-600">
                    Learn more <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>

              <Link to="/voice-solutions" className="group">
                <div className="relative rounded-lg border border-gray-200 bg-white p-6 shadow-sm hover:shadow-lg transition-shadow">
                  <div className="text-blue-600 mb-4">
                    <Mic size={32} />
                  </div>
                  <h3 className="text-lg font-medium text-gray-900">Voice Solutions</h3>
                  <p className="mt-2 text-gray-500">Advanced voice communication systems</p>
                  <div className="mt-4 flex items-center text-blue-600">
                    Learn more <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-600">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            <span className="block">Ready to get started?</span>
            <span className="block text-blue-200">Contact us today for a consultation.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
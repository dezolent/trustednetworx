import React from 'react';
import { Shield, Users, Award, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-blue-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
              About TrustedNetworx
            </h1>
            <h2 className="mt-3 max-w-md mx-auto text-base text-blue-200 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Leading the Future of Telecom Solutions
            </h2>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl font-extrabold text-gray-900 mb-3">Our Story</h2>
            <div className="prose prose-lg text-gray-500">
              <p className="mb-6">
                TrustedNetworx’s leadership has been at the forefront of telecommunications innovation for over 25 years.  As a leading reseller of telecommunication services, we've helped countless businesses modernize their communication infrastructure and stay competitive in an ever-evolving digital landscape.
              </p>
            </div>
            <h2 className="mt-12 text-2xl font-extrabold text-gray-900 mb-3">Your Trusted Telecom Partner</h2>
            <div className="prose prose-lg text-gray-500">
              <p>
                Having worked with industry leaders such as AT&T, Verizon, T-Mobile, US Cellular, MetTel Fusion Connect, Xirgo Technologies, DataRemote and many more, we have a proven track record of expanding market presence, forming strategic partnerships, and delivering scalable telecom solutions. From POTS line replacement and enterprise mobility to IoT connectivity and managed services, we help businesses transition to next-generation networks with confidence.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8">
            <div className="bg-blue-50 p-6 rounded-lg">
              <div className="text-blue-600 mb-4">
                <Award size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Proven Expertise</h3>
              <p className="mt-2 text-gray-600">With decades of experience in telecom and enterprise solutions, we understand the unique challenges businesses face in connectivity and infrastructure modernization.</p>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <div className="text-blue-600 mb-4">
                <Zap size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Innovative Solutions</h3>
              <p className="mt-2 text-gray-600">From cellular data technology to cloud-based communication systems, we offer future-proof solutions tailored to your needs.</p>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <div className="text-blue-600 mb-4">
                <Shield size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Reliable & Scalable</h3>
              <p className="mt-2 text-gray-600">Our solutions are designed for long-term success, helping businesses reduce costs, improve efficiency, and enhance communication capabilities.</p>
            </div>
          </div>
        </div>

        {/* Our Trusted Partners Section */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Trusted by Industry Leaders
            </h2>
          </div>

          <div className="w-full">
            <img 
              src="/partners/Partners-Banner-Desktop.png"
              alt="Our Trusted Partners"
              className="w-full hidden md:block"
            />
            <img 
              src="/partners/Partners-Banner-Mobile.png"
              alt="Our Trusted Partners"
              className="w-full md:hidden"
            />
          </div>
        </div>
      </div>

        {/* CTA Section */}
        <div className="mt-16 bg-blue-50 rounded-xl p-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Transform Your Telecommunications?</h3>
            <p className="text-lg text-gray-600 mb-8">
              Let us help you navigate the future of telecom with expertise, reliability, and innovation. Partner with us for a seamless transition into the next generation of connectivity solutions.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

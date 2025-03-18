import React from 'react';
import { Shield, Users, Award } from 'lucide-react';

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
            <p className="mt-3 max-w-md mx-auto text-base text-blue-200 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Your trusted partner in telecommunications solutions since 2005
            </p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900">Our Story</h2>
            <p className="mt-4 text-lg text-gray-500">
              TrustedNetworx has been at the forefront of telecommunications innovation for over 15 years. As a leading reseller of telecommunication services, we've helped countless businesses modernize their communication infrastructure and stay competitive in an ever-evolving digital landscape.
            </p>
            <p className="mt-4 text-lg text-gray-500">
              Our commitment to excellence and customer satisfaction has made us a trusted partner for businesses of all sizes. We pride ourselves on delivering cutting-edge solutions while maintaining the personal touch that our clients value.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8">
            <div className="bg-blue-50 p-6 rounded-lg">
              <div className="text-blue-600 mb-4">
                <Shield size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Trust & Reliability</h3>
              <p className="mt-2 text-gray-600">We build lasting relationships with our clients through transparent communication and reliable service.</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg">
              <div className="text-blue-600 mb-4">
                <Users size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Expert Team</h3>
              <p className="mt-2 text-gray-600">Our team of certified professionals ensures you receive the highest quality service and support.</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg">
              <div className="text-blue-600 mb-4">
                <Award size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Industry Leadership</h3>
              <p className="mt-2 text-gray-600">Recognized as a leader in telecommunications solutions with numerous industry awards.</p>
            </div>
          </div>
        </div>

        {/* Mission Section */}
        <div className="mt-16">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">Our Mission</h2>
            <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-500">
              To empower businesses with innovative telecommunications solutions that drive growth and success in the digital age.
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16">
          <dl className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            <div className="bg-white overflow-hidden">
              <dt className="text-5xl font-extrabold text-blue-600">15+</dt>
              <dd className="mt-2 text-lg font-medium text-gray-500">Years of Experience</dd>
            </div>
            <div className="bg-white overflow-hidden">
              <dt className="text-5xl font-extrabold text-blue-600">1000+</dt>
              <dd className="mt-2 text-lg font-medium text-gray-500">Satisfied Clients</dd>
            </div>
            <div className="bg-white overflow-hidden">
              <dt className="text-5xl font-extrabold text-blue-600">24/7</dt>
              <dd className="mt-2 text-lg font-medium text-gray-500">Customer Support</dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
};

export default About;
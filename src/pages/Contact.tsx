import React, { useEffect } from 'react';
import { Mail, MapPin } from 'lucide-react';

const Contact = () => {
  useEffect(() => {
    // Remove any existing Pipedrive scripts
    const existingScript = document.querySelector('script[src*="pipedrive"]');
    if (existingScript) {
      existingScript.remove();
    }

    // Create and append the new script
    const script = document.createElement('script');
    script.src = 'https://webforms.pipedrive.com/f/loader';
    script.async = true;
    document.head.appendChild(script);

    return () => {
      // Cleanup on unmount
      const scriptToRemove = document.querySelector('script[src*="pipedrive"]');
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, []);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-blue-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
              Contact Us
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-blue-200 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Get in touch with our team to discuss your business needs
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
            <h2 className="text-3xl font-extrabold text-gray-900 text-center">Get In Touch</h2>
            <div
                className="pipedriveWebForms"
                data-pd-webforms="https://webforms.pipedrive.com/f/72oA5v3gMTRFXMHL96MVC38B88qfVCNnRO3FQKPV1qwjveXmYnVmUbiytp6Q5q7cz1"
            />
          </div>
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900 mb-8">Get In Touch</h2>
            <div className="space-y-6">
              <div className="flex items-center text-gray-700">
                <Mail className="h-6 w-6 text-blue-600 mr-3" />
                <span>operations@trustednetworx.com</span>
              </div>
              <div className="flex items-center text-gray-700">
                <MapPin className="h-6 w-6 text-blue-600 mr-3" />
                <span>18001 Old Cutler Rd, Miami, FL 33157</span>
              </div>
            </div>

            <div className="mt-12">
              <h3 className="text-xl font-bold text-gray-900 mb-4">About Us</h3>
              <p className="text-gray-600">
                TrustedNetworx is your partner in telecommunications solutions. We specialize in providing cutting-edge technology solutions that help businesses stay connected, efficient, and competitive in today's digital world.
              </p>
            </div>
          </div>


        </div>
      </div>
    </div>
  );
};

export default Contact;
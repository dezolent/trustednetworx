import React from 'react';
import { 
  Phone, Shield, Zap, DollarSign, 
  Bell, Flame, UserCheck, Building2, 
  PhoneCall, Printer, Router, ShoppingCart,
  PhoneForwarded, Building, DoorClosed, Wifi,
  Gauge, Terminal, Banknote, Activity,
  Server, Radio, Globe, Cpu, Network
} from 'lucide-react';
import { Link } from 'react-router-dom';

const PotsReplacement = () => {
  const usesCases = [
    { icon: Printer, name: 'FAX' },
    { icon: Gauge, name: 'Meter Reading' },
    { icon: Bell, name: 'Burglar & Fire Alarm' },
    { icon: ShoppingCart, name: 'Point of Sale Terminals' },
    { icon: PhoneForwarded, name: 'Ring-Down (Audiodial)' },
    { icon: Terminal, name: 'Vending Machines' },
    { icon: Building2, name: 'Elevator, Paging, Taxi' },
    { icon: Banknote, name: 'ATM Machines' },
    { icon: Building, name: 'Apartment Call Box' },
    { icon: Activity, name: 'Telemetry' },
    { icon: DoorClosed, name: 'Gate Access' },
    { icon: Server, name: 'SMB Router/Gateway' },
    { icon: Router, name: 'Analog M2M' },
    { icon: Radio, name: '4G/5G Internet Access' },
    { icon: Terminal, name: 'Legacy Modem Support' },
    { icon: Wifi, name: 'Wireless Wi-Fi Access' }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative min-h-[400px] flex items-center">
        {/* Background Image */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(/POTS-Line-Replacement-Banner.jpg)',
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

        {/* Mission Section */}
        <div className="mt-16">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">PTSN Sunset & The Market</h2>
            <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-500">
              POTS technology remains the backbone of infrastructure, seamlessly integrating into every aspect of modern life. These landlines connect essential devices such as electrical transformer stations, security alarm panels, commercial HVAC systems, POS terminals, ATMs, traffic control systems, and elevator emergency phones.


            </p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="py-16">
          <dl className="grid grid-cols-1 gap-8 sm:grid-cols-3 text-center">
            <div className="bg-white overflow-hidden">
              <dt className="text-5xl font-extrabold text-blue-600">900M+</dt>
              <dd className="mt-2 text-lg font-medium text-gray-500">Legacy Landlines Globally</dd>
            </div>
            <div className="bg-white overflow-hidden">
              <dt className="text-5xl font-extrabold text-blue-600">30M+</dt>
              <dd className="mt-2 text-lg font-medium text-gray-500">POTS Lines in the US</dd>
            </div>
            <div className="bg-white overflow-hidden">
              <dt className="text-5xl font-extrabold text-blue-600">31.4%</dt>
              <dd className="mt-2 text-lg font-medium text-gray-500">Increase in POTS Costs Over The Past 5 Years</dd>
            </div>
          </dl>
        </div>

        {/* Use Cases Section with Wave Background */}
        <div className="py-16">
          <div className="relative w-full bg-blue-50">
            {/* Top Wave */}
            <div className="absolute top-0 left-0 right-0 h-16 overflow-hidden -translate-y-full">
              <svg className="absolute bottom-0 w-full h-16" preserveAspectRatio="none" viewBox="0 0 1440 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 54L1440 54L1440 0C1440 0 1320 36 1200 36C1080 36 960 0 840 0C720 0 600 36 480 36C360 36 240 0 120 0C60 0 0 18 0 18L0 54Z" fill="#EBF5FF"/>
              </svg>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
              <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">
                Supporting All Your POTS Replacement Needs
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8">
                {usesCases.map((useCase, index) => (
                  <div key={index} className="flex flex-col items-center text-center">
                    <useCase.icon className="w-8 h-8 text-blue-600 mb-3" />
                    <p className="text-sm font-medium text-gray-900">{useCase.name}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Wave */}
            <div className="absolute bottom-0 left-0 right-0 h-16 overflow-hidden translate-y-full">
              <svg className="absolute top-0 w-full h-16" preserveAspectRatio="none" viewBox="0 0 1440 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0L1440 0L1440 54C1440 54 1320 18 1200 18C1080 18 960 54 840 54C720 54 600 18 480 18C360 18 240 54 120 54C60 54 0 36 0 36L0 0Z" fill="#EBF5FF"/>
              </svg>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Compatible Systems & Industries</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
              <h4 className="text-xl font-semibold text-gray-900 mb-3">Retail</h4>
              <ul className="text-gray-600 space-y-2">
                <li>• Point of sale systems</li>
                <li>• Security alarms</li>
                <li>• Fire alarm panels</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
              <h4 className="text-xl font-semibold text-gray-900 mb-3">Healthcare</h4>
              <ul className="text-gray-600 space-y-2">
                <li>• Fax machines</li>
                <li>• Emergency phones</li>
                <li>• Paging systems</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
              <h4 className="text-xl font-semibold text-gray-900 mb-3">Education</h4>
              <ul className="text-gray-600 space-y-2">
                <li>• Elevator phones</li>
                <li>• Campus security systems</li>
                <li>• Safety Phones</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
              <h4 className="text-xl font-semibold text-gray-900 mb-3">Manufacturing</h4>
              <ul className="text-gray-600 space-y-2">
                <li>• Fire alarm panels</li>
                <li>• Meter reading</li>
                <li>• Gate entry systems</li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-blue-50 rounded-xl p-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Don't Let Outdated POTS Lines Slow Down Your Business</h3>
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

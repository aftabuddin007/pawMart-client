// TermsPrivacyPage.jsx
import React from 'react';
import { Shield, FileText, Lock, Eye, Cookie, UserCheck } from 'lucide-react';

const TermsPrivacy = () => {
  const lastUpdated = "January 1, 2026";

  const privacyData = {
    collectedInfo: [
      "Personal identification information (name, email address, phone number)",
      "Demographic information (age, gender, location)",
      "Browser and device information",
      "Usage data and analytics",
      "Cookies and tracking data"
    ],
    usagePurposes: [
      "To provide and maintain our service",
      "To notify you about changes to our service",
      "To allow you to participate in interactive features",
      "To provide customer support",
      "To gather analysis or valuable information",
      "To monitor the usage of our service",
      "To detect, prevent and address technical issues"
    ],
    dataProtection: [
      "Encryption of sensitive data",
      "Regular security audits",
      "Access control and authentication",
      "Data backup and recovery procedures",
      "Employee training on data protection"
    ]
  };

  const termsData = {
    userResponsibilities: [
      "Provide accurate and complete information",
      "Keep your login credentials secure",
      "Use the service in compliance with applicable laws",
      "Not engage in unauthorized access or use",
      "Respect intellectual property rights"
    ],
    prohibitedActivities: [
      "Violating any laws or regulations",
      "Infringing on intellectual property rights",
      "Harassing, abusing, or harming others",
      "Transmitting viruses or malicious code",
      "Attempting to gain unauthorized access",
      "Collecting user information without consent",
      "Interfering with the service's operation"
    ],
    terminationConditions: [
      "Violation of these terms",
      "Request by law enforcement",
      "Unexpected technical issues",
      "Discontinuation of the service",
      "Extended periods of inactivity"
    ]
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="border-b py-6">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-3xl font-bold mb-2">Terms & Privacy Policy</h1>
          <p className="text-gray-600">Last updated: {lastUpdated}</p>
        </div>
      </div>

      <main className="max-w-4xl mx-auto px-4 py-8">
        {/* Navigation */}
        <div className="mb-12">
          <h2 className="text-lg font-semibold mb-4">Navigate to section:</h2>
          <div className="flex flex-wrap gap-3">
            <a href="#privacy" className="inline-flex items-center px-4 py-2 rounded-lg border hover:bg-gray-50">
              <Shield className="w-4 h-4 mr-2" />
              Privacy Policy
            </a>
            <a href="#terms" className="inline-flex items-center px-4 py-2 rounded-lg border hover:bg-gray-50">
              <FileText className="w-4 h-4 mr-2" />
              Terms of Service
            </a>
            <a href="#cookies" className="inline-flex items-center px-4 py-2 rounded-lg border hover:bg-gray-50">
              <Cookie className="w-4 h-4 mr-2" />
              Cookie Policy
            </a>
          </div>
        </div>

        <div className="space-y-12">
          {/* Privacy Policy Section */}
          <section id="privacy" className="scroll-mt-20">
            <div className="flex items-center mb-6">
              <Shield className="w-8 h-8 text-blue-600 mr-3" />
              <h2 className="text-2xl font-bold">Privacy Policy</h2>
            </div>

            <div className="space-y-8">
              {/* Information We Collect */}
              <div className="border-l-4 border-blue-200 pl-4 py-2">
                <div className="flex items-center mb-3">
                  <Eye className="w-5 h-5 text-gray-600 mr-2" />
                  <h3 className="text-xl font-semibold">Information We Collect</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  We collect several different types of information for various purposes to provide and improve our service to you.
                </p>
                <ul className="space-y-2 ml-6">
                  {privacyData.collectedInfo.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* How We Use Your Information */}
              <div className="border-l-4 border-green-200 pl-4 py-2">
                <div className="flex items-center mb-3">
                  <UserCheck className="w-5 h-5 text-gray-600 mr-2" />
                  <h3 className="text-xl font-semibold">How We Use Your Information</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  We use the collected data for various purposes:
                </p>
                <ul className="space-y-2 ml-6">
                  {privacyData.usagePurposes.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-green-500 mr-2">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Data Protection */}
              <div className="border-l-4 border-purple-200 pl-4 py-2">
                <div className="flex items-center mb-3">
                  <Lock className="w-5 h-5 text-gray-600 mr-2" />
                  <h3 className="text-xl font-semibold">Data Protection</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  We implement appropriate security measures to protect your personal information:
                </p>
                <ul className="space-y-2 ml-6">
                  {privacyData.dataProtection.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-purple-500 mr-2">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Data Retention */}
              <div>
                <h3 className="text-xl font-semibold mb-3">Data Retention</h3>
                <p className="text-gray-700">
                  We will retain your personal information only for as long as is necessary for the purposes set out in this Privacy Policy. 
                  We will retain and use your information to the extent necessary to comply with our legal obligations, 
                  resolve disputes, and enforce our policies.
                </p>
              </div>

              {/* Your Rights */}
              <div>
                <h3 className="text-xl font-semibold mb-3">Your Data Protection Rights</h3>
                <p className="text-gray-700 mb-4">
                  You have the right to:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-semibold mb-2">Access</h4>
                    <p className="text-sm text-gray-600">Request copies of your personal data</p>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-semibold mb-2">Rectification</h4>
                    <p className="text-sm text-gray-600">Request correction of inaccurate data</p>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-semibold mb-2">Erasure</h4>
                    <p className="text-sm text-gray-600">Request deletion of your personal data</p>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-semibold mb-2">Restriction</h4>
                    <p className="text-sm text-gray-600">Request restriction of processing</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Terms of Service Section */}
          <section id="terms" className="scroll-mt-20 pt-8 border-t">
            <div className="flex items-center mb-6">
              <FileText className="w-8 h-8 text-blue-600 mr-3" />
              <h2 className="text-2xl font-bold">Terms of Service</h2>
            </div>

            <div className="space-y-8">
              {/* Agreement */}
              <div>
                <h3 className="text-xl font-semibold mb-3">Agreement to Terms</h3>
                <p className="text-gray-700">
                  By accessing or using our service, you agree to be bound by these Terms. 
                  If you disagree with any part of the terms, you may not access the service.
                </p>
              </div>

              {/* User Responsibilities */}
              <div>
                <h3 className="text-xl font-semibold mb-3">User Responsibilities</h3>
                <ul className="space-y-3">
                  {termsData.userResponsibilities.map((item, index) => (
                    <li key={index} className="flex items-start p-3 border rounded-lg">
                      <span className="text-blue-500 font-semibold mr-3">{index + 1}.</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Prohibited Activities */}
              <div>
                <h3 className="text-xl font-semibold mb-3">Prohibited Activities</h3>
                <p className=" mb-4">
                  You may not access or use the service for any purpose other than that for which we make the service available. The service may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {termsData.prohibitedActivities.map((item, index) => (
                    <div key={index} className="p-3 border border-red-100  rounded-lg">
                      <span className="text-red-600 font-medium">✗</span>
                      <span className="ml-2">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Termination */}
              <div>
                <h3 className="text-xl font-semibold mb-3">Termination</h3>
                <p className=" mb-4">
                  We may terminate or suspend your access immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
                </p>
                <div className=" p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Grounds for termination include:</h4>
                  <ul className="space-y-2">
                    {termsData.terminationConditions.map((item, index) => (
                      <li key={index} className="flex items-center">
                        <span className="text-gray-500 mr-2">▪</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Limitation of Liability */}
              <div>
                <h3 className="text-xl font-semibold mb-3">Limitation of Liability</h3>
                <p className="">
                  To the maximum extent permitted by applicable law, in no event shall we be liable for any special, incidental, indirect, or consequential damages whatsoever arising out of or in any way related to the use of or inability to use the service.
                </p>
              </div>

              {/* Changes to Terms */}
              <div>
                <h3 className="text-xl font-semibold mb-3">Changes to Terms</h3>
                <p className="text-gray-700">
                  We reserve the right, at our sole discretion, to modify or replace these Terms at any time. 
                  If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect.
                </p>
              </div>
            </div>
          </section>

          {/* Cookie Policy Section */}
          <section id="cookies" className="scroll-mt-20 pt-8 border-t">
            <div className="flex items-center mb-6">
              <Cookie className="w-8 h-8 text-blue-600 mr-3" />
              <h2 className="text-2xl font-bold">Cookie Policy</h2>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">What Are Cookies</h3>
                <p className="text-gray-700">
                  Cookies are small text files that are placed on your computer or mobile device when you visit our website. 
                  They are widely used to make websites work more efficiently and provide information to the owners of the site.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 border rounded-lg">
                  <h4 className="font-semibold mb-2 text-blue-600">Essential Cookies</h4>
                  <p className="text-sm text-gray-600">Required for the website to function properly</p>
                </div>
                <div className="p-4 border rounded-lg">
                  <h4 className="font-semibold mb-2 text-green-600">Analytics Cookies</h4>
                  <p className="text-sm text-gray-600">Help us understand how visitors interact</p>
                </div>
                <div className="p-4 border rounded-lg">
                  <h4 className="font-semibold mb-2 text-purple-600">Marketing Cookies</h4>
                  <p className="text-sm text-gray-600">Track visitors across websites</p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Managing Cookies</h3>
                <p className="text-gray-700 mb-4">
                  You can control and/or delete cookies as you wish. You can delete all cookies that are already on your computer and you can set most browsers to prevent them from being placed.
                </p>
                <div className=" p-4 rounded-lg">
                  <p className="text-sm text-gray-600">
                    Most web browsers allow some control of most cookies through the browser settings. 
                    To find out more about cookies, including how to see what cookies have been set and how to manage and delete them, visit <a href="#" className="text-blue-600 underline">www.allaboutcookies.org</a>.
                  </p>
                </div>
              </div>
            </div>
          </section>

        

         
        </div>
      </main>
    </div>
  );
};

export default TermsPrivacy;
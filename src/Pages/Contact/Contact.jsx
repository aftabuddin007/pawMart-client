// ContactPage.jsx
import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageCircle, 
  Send,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  CheckCircle,
  AlertCircle
} from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const contactInfo = {
    phone: '+1 (555) 123-4567',
    email: 'support@company.com',
    address: '123 Business Street, Suite 100\nSan Francisco, CA 94107',
    hours: 'Monday - Friday: 9:00 AM - 6:00 PM\nSaturday: 10:00 AM - 4:00 PM\nSunday: Closed'
  };

  const socialLinks = [
    { icon: Facebook, url: '#', label: 'Facebook' },
    { icon: Twitter, url: '#', label: 'Twitter' },
    { icon: Linkedin, url: '#', label: 'LinkedIn' },
    { icon: Instagram, url: '#', label: 'Instagram' }
  ];

  const contactMethods = [
    {
      icon: Phone,
      title: 'Call Us',
      description: 'Available during business hours',
      value: contactInfo.phone,
      action: 'tel:' + contactInfo.phone
    },
    {
      icon: Mail,
      title: 'Email Us',
      description: 'We respond within 24 hours',
      value: contactInfo.email,
      action: 'mailto:' + contactInfo.email
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      description: 'Come say hello at our office',
      value: contactInfo.address,
      action: 'https://maps.google.com'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      description: 'When we\'re available',
      value: contactInfo.hours,
      action: null
    }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Simulate form submission
      console.log('Form submitted:', formData);
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      
      // Reset submission status after 3 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 3000);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b ">
      {/* Header */}
      <div className="relative bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Contact Methods */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactMethods.map((method, index) => (
            <div 
              key={index}
              className={` rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 ${
                method.action ? 'cursor-pointer ' : ''
              }`}
              onClick={() => method.action && window.open(method.action, '_blank')}
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <method.icon className="w-6 h-6 text-blue-600" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-1">{method.title}</h3>
                  <p className="text-sm  mb-3">{method.description}</p>
                  <p className=" whitespace-pre-line">{method.value}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Contact Form */}
          <div>
            <div className=" rounded-2xl shadow-xl p-8">
              <div className="flex items-center mb-8">
                <MessageCircle className="w-8 h-8 text-blue-600 mr-3" />
                <h2 className="text-2xl font-bold ">Send us a Message</h2>
              </div>

              {submitted && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                  <div>
                    <p className="font-medium text-green-800">Message sent successfully!</p>
                    <p className="text-sm text-green-600">We'll get back to you soon.</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium  mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg border ${
                        errors.name ? 'border-red-300' : 'border-gray-300'
                      } focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition`}
                      placeholder="John Doe"
                    />
                    {errors.name && (
                      <div className="flex items-center mt-2 text-red-600 text-sm">
                        <AlertCircle className="w-4 h-4 mr-1" />
                        {errors.name}
                      </div>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium  mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg border ${
                        errors.email ? 'border-red-300' : 'border-gray-300'
                      } focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition`}
                      placeholder="john@example.com"
                    />
                    {errors.email && (
                      <div className="flex items-center mt-2 text-red-600 text-sm">
                        <AlertCircle className="w-4 h-4 mr-1" />
                        {errors.email}
                      </div>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium  mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                      placeholder="(555) 123-4567"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium  mb-2">
                      Subject
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="support">Technical Support</option>
                      <option value="sales">Sales Question</option>
                      <option value="feedback">Feedback</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium  mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="6"
                    className={`w-full px-4 py-3 rounded-lg border ${
                      errors.message ? 'border-red-300' : 'border-gray-300'
                    } focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition resize-none`}
                    placeholder="Tell us how we can help you..."
                  />
                  {errors.message && (
                    <div className="flex items-center mt-2 text-red-600 text-sm">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {errors.message}
                    </div>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-4 px-6 rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 font-semibold text-lg flex items-center justify-center"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* Right Column - Map & Social */}
          <div className="space-y-8">
            {/* Map */}
            

            {/* Social Media */}
            <div className=" rounded-2xl shadow-xl p-6">
              <h3 className="text-xl font-bold  mb-6">Connect With Us</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    className="group flex flex-col items-center justify-center p-4 rounded-xl border-2 border-gray-200 hover:border-blue-500 hover:bg-blue-50 transition-all duration-300"
                  >
                    <social.icon className="w-8 h-8 text-gray-600 group-hover:text-blue-600 mb-2 transition-colors" />
                    <span className="text-sm font-medium text-gray-700 group-hover:text-blue-700">
                      {social.label}
                    </span>
                  </a>
                ))}
              </div>
              <div className="mt-6 pt-6 border-t border-gray-100">
                <p className="text-center text-gray-600">
                  Follow us for updates and announcements
                </p>
              </div>
            </div>

            {/* FAQ/Quick Links */}
            <div className=" rounded-2xl p-6">
              <h3 className="text-xl font-bold  mb-4">Quick Links</h3>
              <div className="space-y-3">
                <a href="#" className="block p-3 bg-white rounded-lg hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-gray-900">Frequently Asked Questions</span>
                    <span className="text-blue-600">→</span>
                  </div>
                </a>
                <a href="#" className="block p-3 bg-white rounded-lg hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-gray-900">Support Documentation</span>
                    <span className="text-blue-600">→</span>
                  </div>
                </a>
                <a href="#" className="block p-3 bg-white rounded-lg hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-gray-900">Schedule a Call</span>
                    <span className="text-blue-600">→</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

     
    </div>
  );
};

export default ContactPage;
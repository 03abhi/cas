import React, { useState } from 'react';
import { MessageCircle, Phone, Mail, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="section-padding bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      <div className="container-custom">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed">
            Get in touch with our team to discuss your goals and create a personalized study plan
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-7">
            <div className="bg-white dark:bg-gray-800 rounded-3xl p-10 lg:p-12 shadow-2xl border border-gray-100 dark:border-gray-700 transition-colors duration-300">
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Send us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">Name *</label>
                    <input 
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-5 py-4 border-2 border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-300 text-lg"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">Email *</label>
                    <input 
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-5 py-4 border-2 border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-300 text-lg"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">Phone</label>
                  <input 
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-5 py-4 border-2 border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-300 text-lg"
                    placeholder="(555) 123-4567"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">Message *</label>
                  <textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-5 py-4 border-2 border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-300 resize-none text-lg"
                    placeholder="Tell us about your goals and which exam you're preparing for..."
                  />
                </div>
                <button 
                  type="submit"
                  className="group w-full flex items-center justify-center space-x-3 px-8 py-5 bg-primary-600 dark:bg-primary-500 text-white font-bold rounded-xl hover:bg-primary-700 dark:hover:bg-primary-600 transition-all duration-300 transform hover:scale-[1.02] shadow-xl hover:shadow-2xl text-lg"
                >
                  <Send className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                  <span>Send Message</span>
                </button>
              </form>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Get in Touch</h3>
                <div className="space-y-8">
                  <div className="flex items-start space-x-4">
                    <div className="flex items-center justify-center w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-xl flex-shrink-0">
                      <Phone className="w-8 h-8 text-primary-600 dark:text-primary-400" />
                    </div>
                    <div>
                      <div className="font-bold text-gray-900 dark:text-white text-xl mb-1">Phone</div>
                      <div className="text-gray-600 dark:text-gray-300 text-lg mb-1">(555) 123-4567</div>
                      <div className="text-gray-500 dark:text-gray-400 font-medium">Mon-Fri 9AM-6PM EST</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="flex items-center justify-center w-16 h-16 bg-secondary-100 dark:bg-secondary-900/30 rounded-xl flex-shrink-0">
                      <Mail className="w-8 h-8 text-secondary-600 dark:text-secondary-400" />
                    </div>
                    <div>
                      <div className="font-bold text-gray-900 dark:text-white text-xl mb-1">Email</div>
                      <div className="text-gray-600 dark:text-gray-300 text-lg mb-1">support@casclasses.com</div>
                      <div className="text-gray-500 dark:text-gray-400 font-medium">We'll respond within 24 hours</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="flex items-center justify-center w-16 h-16 bg-accent-100 dark:bg-accent-900/30 rounded-xl flex-shrink-0">
                      <MapPin className="w-8 h-8 text-accent-600 dark:text-accent-400" />
                    </div>
                    <div>
                      <div className="font-bold text-gray-900 dark:text-white text-xl mb-1">Office</div>
                      <div className="text-gray-600 dark:text-gray-300 text-lg">123 Education Blvd</div>
                      <div className="text-gray-600 dark:text-gray-300 text-lg">Chicago, IL 60601</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-primary-600 to-primary-700 dark:from-primary-500 dark:to-primary-600 rounded-2xl p-8 text-white shadow-xl">
                <div className="flex items-center space-x-3 mb-6">
                  <MessageCircle className="w-8 h-8" />
                  <h4 className="text-2xl font-bold">Live Chat Available</h4>
                </div>
                <p className="mb-6 text-lg leading-relaxed">
                  Need immediate help? Our student success team is available for live chat during business hours.
                </p>
                <button className="w-full py-4 bg-white dark:bg-gray-100 text-primary-600 dark:text-primary-700 font-bold rounded-xl hover:bg-gray-50 dark:hover:bg-gray-200 transition-all duration-300 transform hover:scale-[1.02] shadow-lg text-lg">
                  Start Live Chat
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
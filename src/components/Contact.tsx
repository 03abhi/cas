import React, { useState } from 'react';
import { Mail, Send, MessageCircle, Phone, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create email content
    const subject = `Contact Form Submission from ${formData.name}`;
    const body = `Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Message: ${formData.message}`;
    
    // Create mailto link
    const mailtoLink = `mailto:info@casclasses.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Open email client
    window.location.href = mailtoLink;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
    <section id="contact" className="py-8 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      <div className="container-custom">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed">
            Get in touch with our team to discuss your goals and create a personalized study plan
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-stretch">
          <div className="flex flex-col">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 md:p-7 lg:p-9 shadow-xl border border-gray-100 dark:border-gray-700 transition-colors duration-300 h-full flex flex-col">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-7">Send us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-7 flex flex-col h-full">
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">Name *</label>
                    <input 
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-5 py-4 border-2 border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-300"
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
                      className="w-full px-5 py-4 border-2 border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-300"
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
                    className="w-full px-5 py-4 border-2 border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-300"
                    placeholder="(555) 123-4567"
                  />
                </div>
                <div className="flex-1">
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">Message *</label>
                  <textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={8}
                    className="w-full px-5 py-4 border-2 border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-300 resize-none h-full"
                    style={{ minHeight: '380px' }}
                    placeholder="Tell us about your goals and which exam you're preparing for..."
                  />
                </div>
                <button 
                  type="submit"
                  className="group w-full flex items-center justify-center space-x-3 px-7 py-4 bg-primary-600 dark:bg-primary-500 text-white font-bold rounded-lg hover:bg-primary-700 dark:hover:bg-primary-600 transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl hover-lift"
                >
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  <span>Send Message</span>
                </button>
              </form>
            </div>
          </div>

          <div className="flex flex-col">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 md:p-6 lg:p-7 shadow-xl border border-gray-100 dark:border-gray-700 transition-colors duration-300 h-full flex flex-col">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-5">Contact Information</h3>
              <div className="space-y-5 flex flex-col h-full">
                <div className="flex items-start space-x-3">
                  <div className="flex items-center justify-center w-12 h-12 bg-secondary-100 dark:bg-secondary-900/30 rounded-lg flex-shrink-0">
                    <Mail className="w-6 h-6 text-secondary-600 dark:text-secondary-400" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 dark:text-white text-base mb-1">Email</div>
                    <div className="text-gray-600 dark:text-gray-300 mb-1 text-sm">info@casclasses.com</div>
                    <div className="text-gray-500 dark:text-gray-400 font-medium text-xs">We'll respond within 24 hours</div>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="flex items-center justify-center w-12 h-12 bg-secondary-100 dark:bg-secondary-900/30 rounded-lg flex-shrink-0">
                    <Phone className="w-6 h-6 text-secondary-600 dark:text-secondary-400" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 dark:text-white text-base mb-1">Phone</div>
                    <div className="text-gray-600 dark:text-gray-300 mb-1 text-sm">86181 97603</div>
                    <div className="text-gray-500 dark:text-gray-400 font-medium text-xs">Available 9 AM - 6 PM</div>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="flex items-center justify-center w-12 h-12 bg-secondary-100 dark:bg-secondary-900/30 rounded-lg flex-shrink-0">
                    <MapPin className="w-6 h-6 text-secondary-600 dark:text-secondary-400" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 dark:text-white text-base mb-1">Address</div>
                    <div className="text-gray-600 dark:text-gray-300 mb-1 text-sm">1st Floor, CAS Classes, ELV Commercial Center, Whitefield Main Rd, Whitefield, Bengaluru, Karnataka 560066</div>
                    <div className="text-gray-500 dark:text-gray-400 font-medium text-xs">Near Whitefield Metro Station</div>
                  </div>
                </div>

                <div className="flex-1 flex flex-col">
                  <div className="w-full overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-100 dark:bg-gray-700">
                    <iframe
                      title="CAS Classes Location"
                      src="https://www.google.com/maps?q=Whitefield+Main+Rd,+Whitefield,+Bengaluru,+Karnataka+560066&output=embed&z=15"
                      width="100%"
                      height="400"
                      style={{ border: 0 }}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      allowFullScreen
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>

    </>
  );
};

export default Contact;
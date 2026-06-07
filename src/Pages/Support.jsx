import { useState } from "react";
import Footer from "../components/Footer";

export default function SupportPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // null, 'success', 'error'

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      // In a real app, you would send this data to your backend
      setSubmitStatus('success');
      setIsSubmitting(false);
      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    }, 1500);
  };

  const faqData = [
    {
      question: "How long does shipping take?",
      answer: "Shipping times vary depending on the destination and service selected. Express deliveries typically take 2-5 business days, while standard shipping can take 7-14 business days. You'll get an estimated delivery date when you create your shipment."
    },
    {
      question: "What items are prohibited from shipping?",
      answer: "We prohibit shipping of hazardous materials, flammable items, explosives, weapons, illegal substances, perishable foods without proper packaging, and items that violate international trade regulations. For a complete list, please visit our Prohibited Items page."
    },
    {
      question: "How can I track my shipment?",
      answer: "All shipments come with a tracking number. You can track your package in real-time by entering your tracking number on our website's tracking page or through the tracking link sent to your email."
    },
    {
      question: "Do you offer insurance for shipped items?",
      answer: "Yes, we offer cargo insurance for all shipments. Basic coverage is included, and you can purchase additional insurance based on the declared value of your items for extra protection."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards (Visa, Mastercard, American Express), PayPal, Google Pay, Apple Pay, and bank transfers for business accounts."
    },
    {
      question: "How do I calculate shipping costs?",
      answer: "You can calculate shipping costs using our online calculator. Simply enter the origin, destination, weight, and dimensions of your package to get an instant quote."
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-blue-50 py-10 sm:py-16">
        <div className="page-container min-w-0 text-center">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Support & Help Center
          </h1>
          <p className="text-lg text-gray-600">
            Find answers to common questions or contact our support team for assistance
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-12">
        <div className="page-container min-w-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-gray-900">
                Contact Us
              </h2>
              <p className="text-gray-600">
                Our support team is available to help you with any questions or concerns.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5 text-blue-500">
                      <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Email Support</h3>
                      <p className="text-gray-600"><a href="mailto:support@yuusell.com" className="underline">support@yuusell.com</a></p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5 text-blue-500">
                      <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257.685a11.042 11.042 0 005.517 5.663l1.007-.304a1 1 0 011.276.44l1.492-2.249a1 1 0 011.093-.093l2.188.659a1 1 0 01.412 1.412l-.659 2.188a1 1 0 01-.44 1.276l-.304 1.007c-2.943 1.273-6.451 2.15-10.15 2.15C5.821 15.004 3 12.171 3 9a2 2 0 012-2z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Phone Support</h3>
                    <p className="text-gray-600"><a href="tel:+19412889573" className="underline">(+1) 941 288 95 73</a></p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5 text-blue-500">
                      <path d="M12 21a9 9 0 019-9V9a2 2 0 00-2-2H5a2 2 0 00-2 2v3a9 9 0 009 9zm0-12a3 3 0 100 6 3 3 0 000-6z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Live Chat</h3>
                    <p className="text-gray-600">Available 24/7 on our website</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Send Us a Message
              </h2>
              <p className="text-gray-600 mb-6">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>
              
              {submitStatus === 'success' && (
                <div className="bg-green-50 text-green-800 p-4 rounded mb-6">
                  Your message has been sent successfully! We'll respond shortly.
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="bg-red-50 text-red-800 p-4 rounded mb-6">
                  There was an error sending your message. Please try again.
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      disabled={isSubmitting}
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      disabled={isSubmitting}
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    disabled={isSubmitting}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-y"
                    disabled={isSubmitting}
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-500 text-white px-6 py-2 rounded-full font-medium hover:bg-blue-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>



      <Footer />
    </>
  );
}
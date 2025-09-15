import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faQuestionCircle,
  faEnvelope,
  faComments,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

const HelpAndSupport: React.FC = () => {
  // Color scheme matching the dashboard
  const primaryColor = "#991b1b"; // Rich red (bg-red-800)
  const darkText = "#1e293b";
  const lightText = "#64748b";
  const cardBg = "#ffffff";
  const dashboardBg = "#fef2f2"; // Very light red background

  // State to manage which FAQ item is open
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // State for the contact form
  const [contactSubject, setContactSubject] = useState("");
  const [contactMessage, setContactMessage] = useState("");
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const faqs = [
    {
      question: "How do I reset my password?",
      answer: "To reset your password, go to the login page and click 'Forgot Password'. You will receive an email with instructions to create a new password.",
    },
    {
      question: "How can I view my transaction history?",
      answer: "You can view your full transaction history by navigating to the 'Accounts' page and selecting 'View Statement' for any of your accounts.",
    },
    {
      question: "Is my personal information secure?",
      answer: "Yes, we use industry-standard encryption and security protocols to ensure your data is protected at all times. Your security is our top priority.",
    },
    {
      question: "How do I set up a new savings goal?",
      answer: "You can create and track your financial goals in the 'My Goals Tracker' section of the sidebar. This feature helps you stay on track with automated savings plans.",
    },
    {
      question: "What are the fees for international transfers?",
      answer: "International transfer fees vary depending on the destination and currency. You can view the exact fees when initiating a transfer on the 'Transfer Funds' page.",
    },
  ];

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact form submitted:", {
      subject: contactSubject,
      message: contactMessage,
    });
    // Simulate API call
    setIsFormSubmitted(true);
    setContactSubject("");
    setContactMessage("");
  };

  return (
    <div className="min-h-screen p-6" style={{ backgroundColor: dashboardBg }}>
      {/* Page Header */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold" style={{ color: darkText }}>
          Help & Support
        </h2>
        <p className="text-sm" style={{ color: lightText }}>
          Find answers to common questions or contact our support team directly.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* FAQs Section */}
        <div className="p-6 rounded-xl shadow-md border border-gray-100" style={{ backgroundColor: cardBg }}>
          <div className="flex items-center mb-4">
            <FontAwesomeIcon icon={faQuestionCircle} className="text-xl mr-3" style={{ color: primaryColor }} />
            <h3 className="text-xl font-semibold" style={{ color: darkText }}>
              Frequently Asked Questions
            </h3>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-200">
                <button
                  className="w-full flex justify-between items-center py-3 text-left transition-colors hover:text-red-800"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <span className="font-medium" style={{ color: darkText }}>{faq.question}</span>
                  <FontAwesomeIcon
                    icon={faChevronDown}
                    className={`transform transition-transform duration-200 ${openFaq === index ? "rotate-180" : ""}`}
                  />
                </button>
                {openFaq === index && (
                  <p className="pb-3 text-sm animate-fade-in" style={{ color: lightText }}>
                    {faq.answer}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Contact Support Section */}
        <div className="p-6 rounded-xl shadow-md border border-gray-100" style={{ backgroundColor: cardBg }}>
          <div className="flex items-center mb-4">
            <FontAwesomeIcon icon={faEnvelope} className="text-xl mr-3" style={{ color: primaryColor }} />
            <h3 className="text-xl font-semibold" style={{ color: darkText }}>
              Contact Support
            </h3>
          </div>
          {isFormSubmitted ? (
            <div className="text-center py-10">
              <FontAwesomeIcon icon={faComments} className="text-6xl mb-4" style={{ color: primaryColor }} />
              <h4 className="text-xl font-bold mb-2" style={{ color: darkText }}>
                Message Sent!
              </h4>
              <p className="text-sm" style={{ color: lightText }}>
                A member of our team will get back to you within 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleContactSubmit} className="space-y-4">
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2" style={{ color: darkText }}>
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  value={contactSubject}
                  onChange={(e) => setContactSubject(e.target.value)}
                  className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-200 transition-shadow"
                  placeholder="e.g., Issue with a transfer"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2" style={{ color: darkText }}>
                  Your Message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  value={contactMessage}
                  onChange={(e) => setContactMessage(e.target.value)}
                  className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-200 resize-none transition-shadow"
                  placeholder="Describe your issue or question in detail."
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 text-sm font-medium rounded-lg text-white transition-colors hover:opacity-90"
                style={{ backgroundColor: primaryColor }}
              >
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
      
      {/* Additional Support Options */}
      <div className="mt-8 text-center">
        <p className="text-sm font-medium" style={{ color: darkText }}>
          You can also reach us by phone:
        </p>
        <p className="text-lg font-bold mt-2" style={{ color: primaryColor }}>
          <FontAwesomeIcon icon={faPhone} className="mr-2" />
          +254 711 000 000
        </p>
      </div>
    </div>
  );
};

export default HelpAndSupport;
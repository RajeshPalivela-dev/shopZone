import React, { useState } from "react";
import { FaSearch, FaHeadset, FaBox, FaTruck, FaUndo, FaCreditCard } from "react-icons/fa";

const Help = () => {
  const [search, setSearch] = useState("");

  const helpItems = [
    {
      icon: <FaBox />,
      title: "Orders",
      description: "Track your order and view order details.",
    },
    {
      icon: <FaTruck />,
      title: "Shipping & Delivery",
      description: "Get information about shipping and delivery.",
    },
    {
      icon: <FaUndo />,
      title: "Returns & Refunds",
      description: "Learn how to return products and request refunds.",
    },
    {
      icon: <FaCreditCard />,
      title: "Payments",
      description: "Get help with payment methods and transactions.",
    },
  ];

  const faqs = [
    {
      question: "How can I track my order?",
      answer:
        "Visit your Orders page to check the status of your order.",
    },
    {
      question: "How can I return a product?",
      answer:
        "Contact our support team or visit the Returns section to request a return.",
    },
    {
      question: "What payment methods are accepted?",
      answer:
        "Available payment methods will be displayed during checkout.",
    },
    {
      question: "How can I contact customer support?",
      answer:
        "You can contact our support team using the contact details below.",
    },
  ];

  const filteredFaqs = faqs.filter((faq) =>
    faq.question.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-12">
      <div className="mx-auto max-w-6xl">

        {/* Header */}
        <div className="mb-10 text-center">
          <h1 className="mb-3 text-4xl font-bold text-gray-900">
            How Can We Help You?
          </h1>
          <p className="text-gray-600">
            Find answers to your questions about ShopZone.
          </p>
        </div>

        {/* Search Bar */}
        <div className="mx-auto mb-12 flex max-w-2xl items-center gap-3 rounded-xl border bg-white px-4 py-3 shadow-sm focus-within:ring-2 focus-within:ring-blue-500">
          <FaSearch className="text-gray-400" />
          <input
            type="text"
            placeholder="Search frequently asked questions..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-transparent text-gray-700 outline-none"
          />
        </div>

        {/* Help Categories */}
        <div className="mb-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {helpItems.map((item, index) => (
            <div
              key={index}
              className="rounded-xl border border-gray-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-4 text-3xl text-blue-600">
                {item.icon}
              </div>
              <h2 className="mb-2 text-lg font-semibold text-gray-900">
                {item.title}
              </h2>
              <p className="text-sm leading-6 text-gray-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <section className="mb-14">
          <h2 className="mb-6 text-2xl font-bold text-gray-900">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {filteredFaqs.map((faq, index) => (
              <details
                key={index}
                className="group rounded-xl border border-gray-200 bg-white p-5"
              >
                <summary className="cursor-pointer font-semibold text-gray-800">
                  {faq.question}
                </summary>
                <p className="mt-3 leading-6 text-gray-600">
                  {faq.answer}
                </p>
              </details>
            ))}

            {filteredFaqs.length === 0 && (
              <p className="rounded-xl bg-white p-6 text-center text-gray-500">
                No matching questions found. Try another search.
              </p>
            )}
          </div>
        </section>

        {/* Contact Support */}
        <section className="rounded-2xl bg-blue-600 px-6 py-10 text-center text-white shadow-lg">
          <FaHeadset className="mx-auto mb-4 text-4xl" />

          <h2 className="mb-3 text-2xl font-bold">
            Still Need Help?
          </h2>

          <p className="mb-6 text-blue-100">
            Our support team is here to help you with your questions.
          </p>

          <a
            href="mailto:support@shopzone.com"
            className="inline-block rounded-lg bg-white px-6 py-3 font-semibold text-blue-600 transition hover:bg-gray-100"
          >
            Contact Support
          </a>
        </section>

      </div>
    </div>
  );
};

export default Help;
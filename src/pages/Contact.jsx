import { useState } from "react";
import emailjs from "@emailjs/browser";
import { blurCircles } from "@/constants/theme";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // EmailJS configuration - Real EmailJS credentials
    const serviceId = "service_rlac4th";
    const templateId = "template_wczi6ir";
    const publicKey = "Bwe4JKCqvjzm4RNGz";

    setLoading(true);
    setError("");

    try {
      // Try EmailJS first
      emailjs.init(publicKey);
      await emailjs.send(serviceId, templateId, {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
      });

      setSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setSubmitted(false), 5000);
    } catch (error) {
      console.error("EmailJS failed, opening email client:", error);

      // Fallback to mailto link
      const subject = encodeURIComponent(`Contact Form: ${formData.subject}`);
      const body = encodeURIComponent(
        `Name: ${formData.name}\n` +
          `Email: ${formData.email}\n\n` +
          `Message:\n${formData.message}`
      );
      const mailtoLink = `mailto:support@docsbox.app?subject=${subject}&body=${body}`;

      // Open email client
      window.open(mailtoLink, "_blank");

      setSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setSubmitted(false), 5000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative">
      {/* Decorative blur circles */}
      <div style={{ ...blurCircles.topRight, position: "fixed", zIndex: 0 }} />
      <div
        style={{ ...blurCircles.bottomLeft, position: "fixed", zIndex: 0 }}
      />

      {/* Hero Section */}
      <section className="relative pt-20 pb-16">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Get In{" "}
            <span className="bg-linear-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Touch
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Have questions about DocsBox? We'd love to hear from you. Reach out
            and we'll respond as soon as possible.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative py-20 bg-white">
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="group p-6 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl hover:shadow-lg transition-all">
                <div className="text-4xl mb-4">📧</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Email</h3>
                <p className="text-gray-600 mb-2">support@docsbox.app</p>
                <p className="text-sm text-gray-500">
                  We reply within 24 hours
                </p>
              </div>

              <div className="group p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl hover:shadow-lg transition-all">
                <div className="text-4xl mb-4">🤝</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Social</h3>
                <div className="flex gap-3">
                  <a
                    href="#"
                    className="text-indigo-600 hover:text-indigo-700 font-medium"
                  >
                    Twitter
                  </a>
                  <a
                    href="#"
                    className="text-indigo-600 hover:text-indigo-700 font-medium"
                  >
                    GitHub
                  </a>
                  <a
                    href="#"
                    className="text-indigo-600 hover:text-indigo-700 font-medium"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>

              <div className="group p-6 bg-gradient-to-br from-pink-50 to-indigo-50 rounded-2xl hover:shadow-lg transition-all">
                <div className="text-4xl mb-4">💬</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Chat</h3>
                <p className="text-gray-600 mb-2">Discord Community</p>
                <p className="text-sm text-gray-500">Join 1000+ users</p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="md:col-span-2">
              <div className="p-10 bg-white rounded-2xl shadow-xl border border-gray-100">
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="text-6xl mb-4">✅</div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      Thank you!
                    </h3>
                    <p className="text-gray-600">
                      We've received your message and will get back to you soon.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-900 mb-2">
                          Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-900 mb-2">
                          Email
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-900 mb-2">
                        Subject
                      </label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition"
                        placeholder="How can we help?"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-900 mb-2">
                        Message
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition resize-none"
                        placeholder="Tell us more..."
                      />
                    </div>

                    {/* Error Message */}
                    {error && (
                      <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                        <p className="text-red-600 text-sm">{error}</p>
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-3 px-6 bg-linear-to-r from-indigo-600 to-purple-600 text-white font-bold rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                    >
                      {loading ? "Sending..." : "Send Message"}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative py-20 bg-gradient-to-b from-white to-purple-50">
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {[
              {
                q: "How much does DocsBox cost?",
                a: "DocsBox is completely free to use with a free forever plan. Premium features are available with optional subscription.",
              },
              {
                q: "Is my data really encrypted?",
                a: "Yes! We use AES-256 encryption, the same standard used by banks and governments. Your data is encrypted before it leaves your device.",
              },
              {
                q: "Can I use DocsBox offline?",
                a: "Absolutely. DocsBox works fully offline. Your documents sync automatically when you go back online.",
              },
              {
                q: "How do I backup my documents?",
                a: "DocsBox automatically backs up your encrypted documents to Google Drive daily. You can also download backups manually anytime.",
              },
              {
                q: "What if I forget my password?",
                a: "We don't store passwords. You can reset access through your Google account linked to DocsBox.",
              },
              {
                q: "Can I share documents with others?",
                a: "Yes! You can securely share documents with limited-scope access. Recipients can only view documents you've explicitly shared.",
              },
            ].map((faq, idx) => (
              <details
                key={idx}
                className="group p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all cursor-pointer border border-gray-100"
              >
                <summary className="flex items-center justify-between font-bold text-gray-900 text-lg">
                  {faq.q}
                  <span className="group-open:rotate-180 transition-transform">
                    📖
                  </span>
                </summary>
                <p className="mt-4 text-gray-600 leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 bg-white">
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Still have questions?
          </h2>
          <p className="text-lg text-gray-600 mb-10">
            Check out our documentation or join our community for more help
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#"
              className="px-8 py-3 bg-white border-2 border-indigo-600 text-indigo-600 rounded-lg font-semibold hover:bg-indigo-50 transition-all"
            >
              Read Documentation
            </a>
            <a
              href="/download"
              className="px-8 py-3 bg-linear-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all"
            >
              Download App
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

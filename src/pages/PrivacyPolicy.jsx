import { blurCircles } from "@/constants/theme";

export default function PrivacyPolicy() {
  const sections = [
    {
      title: "1. Introduction",
      content:
        'DocsBox ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and otherwise handle your information when you use our mobile application and associated services.',
    },
    {
      title: "2. Information We Collect",
      subsections: [
        {
          subtitle: "Personal Information",
          text: "When you sign in with your Google account, we collect your email address and basic profile information. This information is used solely to authenticate your identity and link your encrypted data.",
        },
        {
          subtitle: "Document Data",
          text: "All documents you upload to DocsBox are encrypted using AES-256 encryption before being stored. We cannot access the contents of your documents as they remain encrypted at all times.",
        },
        {
          subtitle: "Device Information",
          text: "We may collect information about your device, such as device type, operating system version, and app version, to improve app performance and compatibility.",
        },
        {
          subtitle: "Usage Data",
          text: "We collect anonymous usage statistics to understand how users interact with DocsBox and to identify areas for improvement.",
        },
      ],
    },
    {
      title: "3. How We Use Your Information",
      content:
        "We use the information we collect for the following purposes:\n• To authenticate your identity and manage your account\n• To encrypt and store your documents securely\n• To provide customer support and respond to inquiries\n• To improve and optimize our application\n• To comply with legal obligations\n• To detect and prevent fraud or security issues",
    },
    {
      title: "4. Data Storage & Security",
      content:
        "Your data is protected by enterprise-grade security measures:\n• AES-256 End-to-End Encryption: All documents are encrypted before storage\n• Secure Key Management: Encryption keys are stored in EncryptedSharedPreferences with hardware-backed security\n• Cloud Backup: Encrypted backups are automatically created and stored on Google Drive\n• HTTPS: All data in transit is protected by HTTPS encryption\n• No Local Password Storage: We use OAuth 2.0, so passwords are never stored locally",
    },
    {
      title: "5. Data Sharing & Third Parties",
      content:
        "We do not sell, trade, or rent your personal information to third parties. However, we may share information with:\n• Google (for authentication and cloud backup)\n• Law enforcement (if required by legal process)\n• Service providers who assist in operating our app (under strict confidentiality agreements)",
    },
    {
      title: "6. Your Data Rights",
      content:
        "You have the following rights regarding your data:\n• Right to Access: You can request a copy of your personal information\n• Right to Delete: You can request deletion of your account and associated data\n• Right to Portability: You can request your data in a portable format\n• Right to Rectification: You can update or correct your information\n• Right to Withdraw Consent: You can withdraw permission for data processing",
    },
    {
      title: "7. Data Retention",
      content:
        "We retain your data only as long as necessary to provide our services. When you delete your account:\n• Your account information is deleted within 30 days\n• Your encrypted documents are deleted from our servers\n• Backups are retained according to Google Drive's retention policy\n• You can request immediate deletion of all data",
    },
    {
      title: "8. GDPR & Compliance",
      content:
        "DocsBox complies with:\n• GDPR (General Data Protection Regulation)\n• CCPA (California Consumer Privacy Act)\n• Android Security Best Practices\n• OWASP Mobile Security Guidelines\n\nWe maintain compliance through regular security audits and data protection assessments.",
    },
    {
      title: "9. Children's Privacy",
      content:
        "DocsBox is not intended for users under 13 years of age. We do not knowingly collect personal information from children under 13. If we become aware of such collection, we will take steps to delete such information and terminate the child's account immediately.",
    },
    {
      title: "10. Security Measures",
      content:
        "We implement comprehensive security measures:\n• AES-256 symmetric encryption for documents\n• OAuth 2.0 for secure authentication\n• Hardware-backed keystore for key storage\n• Regular security updates and patches\n• Background task encryption for backups\n• FileProvider for secure file sharing with limited permissions",
    },
    {
      title: "11. Changes to This Policy",
      content:
        'We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by updating the "Last Updated" date and, if the changes are significant, by providing a prominent notice.',
    },
    {
      title: "12. Contact Us",
      content:
        "If you have questions about this Privacy Policy or our privacy practices, please contact us at:\n\nEmail: syedsyabahmadshah@gmail.com\nWebsite: www.syab.tech\nMailing Address: Contact us through our website\n\nWe will respond to your inquiry within 30 days.",
    },
  ];

  return (
    <div className="relative">
      {/* Decorative blur circles */}
      <div style={{ ...blurCircles.topLeft, position: "fixed", zIndex: 0 }} />
      <div
        style={{ ...blurCircles.bottomRight, position: "fixed", zIndex: 0 }}
      />

      {/* Hero Section */}
      <section className="relative pt-20 pb-16 bg-linear-to-br from-indigo-50 to-purple-50">
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Privacy{" "}
            <span className="bg-linear-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Policy
            </span>
          </h1>
          <p className="text-lg text-gray-600 mb-4">
            Last Updated: November 5, 2024
          </p>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Your privacy is our priority. Learn how DocsBox protects your data.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="relative py-20 bg-white">
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {sections.map((section, idx) => (
              <div key={idx} className="scroll-mt-20" id={`section-${idx}`}>
                <div className="p-8 bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                    <span className="w-12 h-12 bg-linear-to-r from-indigo-600 to-purple-600 text-white rounded-lg flex items-center justify-center font-bold">
                      {idx + 1}
                    </span>
                    {section.title}
                  </h2>

                  {section.content && (
                    <p className="text-gray-700 leading-relaxed whitespace-pre-line mb-4">
                      {section.content}
                    </p>
                  )}

                  {section.subsections && (
                    <div className="space-y-4">
                      {section.subsections.map((subsection, subIdx) => (
                        <div
                          key={subIdx}
                          className="pl-4 border-l-4 border-purple-400"
                        >
                          <h3 className="text-lg font-semibold text-gray-900 mb-2">
                            {subsection.subtitle}
                          </h3>
                          <p className="text-gray-700 leading-relaxed">
                            {subsection.text}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Summary Box */}
          <div className="mt-16 p-8 bg-linear-to-r from-indigo-50 to-purple-50 rounded-2xl border-2 border-indigo-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              🔒 Your Privacy Matters
            </h3>
            <p className="text-gray-700 mb-4">
              DocsBox is built with privacy-first design principles. We use
              military-grade encryption, secure authentication, and transparent
              practices to ensure your documents remain yours and yours alone.
            </p>
            <p className="text-gray-700">
              We never access your encrypted data, never sell your information,
              and never compromise on security. Your trust is everything to us.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative py-20 bg-gradient-to-b from-white to-purple-50">
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Questions About Privacy?
          </h2>
          <p className="text-lg text-gray-600 mb-10">
            We're here to help. Contact our privacy team for any concerns or
            inquiries.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:syedsyabahmadshah@gmail.com"
              className="px-8 py-3 bg-linear-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all"
            >
              Email Privacy Team
            </a>
            <a
              href="/contact"
              className="px-8 py-3 bg-white border-2 border-indigo-600 text-indigo-600 rounded-lg font-semibold hover:bg-indigo-50 transition-all"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

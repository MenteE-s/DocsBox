import { blurCircles } from "@/constants/theme";

export default function Download() {
  const platforms = [
    {
      icon: "📱",
      name: "Android",
      description: "Get DocsBox from Google Play Store",
      version: "v1.0.0",
      features: ["AES-256 Encryption", "Offline Mode", "Cloud Backup"],
      downloads: [
        {
          label: "Google Play Store",
          link: "https://play.google.com/store/apps/details?id=com.docsbox",
        },
        {
          label: "Direct Download",
          link: "https://github.com/MenteE-s/DocsBox/raw/main/public/app-release.apk",
        },
      ],
      color: "from-green-500 to-emerald-600",
    },
    {
      icon: "🖥️",
      name: "Web App",
      description: "Access DocsBox from your browser",
      version: "Coming Soon",
      features: ["No Installation", "Cloud Sync", "Full Features"],
      downloads: [],
      color: "from-blue-500 to-blue-600",
      disabled: true,
    },
    {
      icon: "🍎",
      name: "iOS",
      description: "Coming to Apple App Store",
      version: "Coming Soon",
      features: ["iPhone Support", "iPad Optimized", "iCloud Sync"],
      downloads: [],
      color: "from-gray-500 to-gray-700",
      disabled: true,
    },
  ];

  const requirements = [
    {
      title: "Android Requirements",
      icon: "📋",
      items: [
        "Android 8.0 or higher",
        "Minimum 100MB free storage",
        "Google Play Services",
        "Google Account for backup",
      ],
    },
    {
      title: "Security Requirements",
      icon: "🔒",
      items: [
        "Hardware-backed keystore recommended",
        "HTTPS connection for cloud sync",
        "Google Sign-In for authentication",
        "Device must support AES cryptography",
      ],
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Business Owner",
      text: "DocsBox completely changed how I manage my business documents. Security without compromise!",
      avatar: "👩‍💼",
    },
    {
      name: "Alex Chen",
      role: "Security Developer",
      text: "The implementation of AES-256 encryption is impressive. This is production-ready code.",
      avatar: "👨‍💻",
    },
    {
      name: "Maria Garcia",
      role: "Legal Professional",
      text: "Finally, an app that takes document security seriously. Highly recommended for sensitive files.",
      avatar: "👩‍⚖️",
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
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Download{" "}
            <span className="bg-linear-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              DocsBox
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get secure document management in your pocket. Free forever, no ads,
            no compromises.
          </p>
        </div>
      </section>

      {/* Download Options */}
      <section className="relative py-20 bg-white">
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {platforms.map((platform, idx) => (
              <div
                key={idx}
                className={`relative group rounded-3xl shadow-xl overflow-hidden transition-all duration-300 ${
                  platform.disabled
                    ? "opacity-75"
                    : "hover:shadow-2xl hover:-translate-y-2"
                }`}
              >
                {/* Background gradient */}
                <div
                  className={`absolute inset-0 bg-linear-to-br ${platform.color}`}
                />

                {/* Content */}
                <div className="relative z-10 p-8 text-white h-full flex flex-col">
                  <div className="text-6xl mb-4">{platform.icon}</div>

                  <h3 className="text-3xl font-bold mb-2">{platform.name}</h3>
                  <p className="text-white text-opacity-90 mb-4 flex-grow">
                    {platform.description}
                  </p>

                  <div className="mb-6">
                    <p className="text-sm text-white text-opacity-80 mb-3">
                      Version: {platform.version}
                    </p>
                    <ul className="space-y-2">
                      {platform.features.map((feature, i) => (
                        <li key={i} className="text-sm flex items-center gap-2">
                          <span>✓</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {platform.disabled ? (
                    <button
                      disabled
                      className="py-3 px-6 rounded-lg font-bold text-center transition-all bg-white text-gray-700 cursor-not-allowed opacity-80"
                    >
                      Coming Soon
                    </button>
                  ) : (
                    <div className="flex flex-col gap-3">
                      {platform.downloads.map((download, i) => (
                        <a
                          key={i}
                          href={download.link}
                          target={
                            download.label === "Google Play Store"
                              ? "_blank"
                              : "_self"
                          }
                          rel={
                            download.label === "Google Play Store"
                              ? "noopener noreferrer"
                              : ""
                          }
                          download={
                            download.label === "Direct Download" ? true : false
                          }
                          className="py-3 px-6 rounded-lg font-bold text-center transition-all bg-white text-gray-900 hover:shadow-lg hover:scale-105"
                        >
                          {download.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>

                {/* Shine effect */}
                {!platform.disabled && (
                  <div className="absolute inset-0 bg-linear-to-r from-white via-transparent to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="relative py-20 bg-gradient-to-b from-white to-purple-50">
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            Requirements
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {requirements.map((req, idx) => (
              <div
                key={idx}
                className="p-8 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-5xl">{req.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {req.title}
                  </h3>
                </div>

                <ul className="space-y-3">
                  {req.items.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-gray-600"
                    >
                      <span className="text-indigo-600 font-bold mt-1">→</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Installation Guide */}
      <section className="relative py-20 bg-white">
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            Installation Guide
          </h2>

          <div className="space-y-6">
            {[
              {
                step: "01",
                title: "Visit Google Play Store",
                description:
                  'Open Google Play Store on your Android device and search for "DocsBox"',
              },
              {
                step: "02",
                title: "Tap Install",
                description:
                  'Review the permissions and tap "Install" to download the app',
              },
              {
                step: "03",
                title: "Sign In with Google",
                description:
                  "Launch DocsBox and sign in with your Google account for encryption key management",
              },
              {
                step: "04",
                title: "Start Using",
                description:
                  "Begin uploading and organizing your documents. They're automatically encrypted!",
              },
            ].map((step, idx) => (
              <div key={idx} className="flex gap-6 items-start">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-linear-to-r from-indigo-600 to-purple-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                    {step.step}
                  </div>
                </div>
                <div className="flex-grow pt-2">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative py-20 bg-linear-to-r from-purple-600 via-purple-700 to-indigo-600 overflow-hidden">
        <div
          style={{
            ...blurCircles.topLeft,
            position: "absolute",
            opacity: 0.25,
          }}
        />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white text-center mb-16">
            What Users Say
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <div
                key={idx}
                className="group relative p-8 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                {/* Top gradient bar */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1 bg-linear-to-r ${
                    idx === 0
                      ? "from-pink-400 to-purple-500"
                      : idx === 1
                      ? "from-blue-400 to-cyan-500"
                      : "from-yellow-400 to-orange-500"
                  } rounded-t-3xl`}
                />

                <div className="text-center">
                  <div
                    className={`w-20 h-20 mx-auto mb-4 text-4xl rounded-full flex items-center justify-center ${
                      idx === 0
                        ? "bg-pink-100"
                        : idx === 1
                        ? "bg-blue-100"
                        : "bg-yellow-100"
                    }`}
                  >
                    {testimonial.avatar}
                  </div>
                  <p className="text-lg mb-6 italic text-gray-700">
                    "{testimonial.text}"
                  </p>
                  <div>
                    <p className="font-bold text-gray-900">
                      {testimonial.name}
                    </p>
                    <p
                      className={`text-sm font-semibold ${
                        idx === 0
                          ? "text-pink-600"
                          : idx === 1
                          ? "text-blue-600"
                          : "text-yellow-600"
                      }`}
                    >
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="relative py-20 bg-white">
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Need Help?</h2>
          <p className="text-lg text-gray-600 mb-10">
            Our support team is here to help you get the most out of DocsBox
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://docs.docsbox.app"
              className="px-8 py-3 bg-white border-2 border-indigo-600 text-indigo-600 rounded-lg font-semibold hover:bg-indigo-50 transition-all"
            >
              View Documentation
            </a>
            <a
              href="/contact"
              className="px-8 py-3 bg-linear-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all"
            >
              Contact Support
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

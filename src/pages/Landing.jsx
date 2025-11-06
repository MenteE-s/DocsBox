import { useState, useEffect } from "react";
import { blurCircles } from "@/constants/theme";

export default function Landing() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const features = [
    {
      icon: "🔐",
      title: "AES-256 Encryption",
      description:
        "Enterprise-level end-to-end encryption for all your documents",
    },
    {
      icon: "🔑",
      title: "OAuth 2.0 Auth",
      description: "Secure passwordless authentication with Google Sign-In",
    },
    {
      icon: "☁️",
      title: "Cloud Backup",
      description: "Automatic encrypted backups to Google Drive",
    },
    {
      icon: "📱",
      title: "Offline Mode",
      description: "Full functionality without internet connection",
    },
    {
      icon: "⚡",
      title: "Real-time Sync",
      description: "Conflict-free synchronization across devices",
    },
    {
      icon: "🎯",
      title: "Secure Sharing",
      description: "Limited-scope file access with granular permissions",
    },
  ];

  const stats = [
    { number: "256-bit", label: "AES Encryption" },
    { number: "9", label: "Security Features" },
    { number: "100%", label: "Offline Ready" },
    { number: "∞", label: "Privacy First" },
  ];

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative min-h-screen pt-20 pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500" />

        {/* Blur circles */}
        <div style={{ ...blurCircles.topLeft, position: "absolute" }} />
        <div style={{ ...blurCircles.topRight, position: "absolute" }} />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left side - Text */}
            <div
              className="text-white"
              style={{ animation: "fadeIn 0.8s ease-out" }}
            >
              <div className=" text-black inline-block px-4 py-2 bg-white bg-opacity-20 backdrop-blur-md rounded-full mb-6 border border-white border-opacity-30">
                <span className="text-sm font-semibold">
                  🎯 Secure Document Management
                </span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                Your Documents,
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-pink-200">
                  Perfectly Secure
                </span>
              </h1>

              <p className="text-lg md:text-xl text-white text-opacity-90 mb-8 leading-relaxed max-w-xl">
                Store, organize, and share your documents with enterprise-grade
                encryption. No compromise on privacy, no compromise on ease of
                use.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <a
                  href="/download"
                  className="px-8 py-4 bg-white text-purple-600 rounded-lg font-bold text-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 text-center"
                >
                  Download Now
                </a>
                <a
                  href="/about"
                  className="px-8 py-4 bg-white bg-opacity-20 text-purple-600 rounded-lg font-bold text-lg hover:bg-opacity-30 transition-all border border-white border-opacity-40 backdrop-blur-md text-center"
                >
                  Learn More
                </a>
              </div>

              {/* Social proof */}
              <div className="flex items-center gap-6 text-white text-opacity-90">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-xl">
                      ⭐
                    </span>
                  ))}
                </div>
                <span>95% Success Rate - Trusted by users</span>
              </div>
            </div>

            {/* Right side - Visual */}
            <div
              className="relative h-96 hidden md:block"
              style={{ transform: `translateY(${scrollY * 0.3}px)` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white to-blue-100 rounded-3xl shadow-2xl opacity-40" />
              <div className="absolute inset-4 bg-gradient-to-br from-white to-pink-100 rounded-3xl shadow-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="text-8xl mb-4">🔒</div>
                  <p className="text-2xl font-bold text-gray-800">End-to-End</p>
                  <p className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                    Encrypted
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="text-center"
                style={{ animation: `fadeIn 0.8s ease-out ${idx * 0.1}s both` }}
              >
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-20 bg-gradient-to-b from-white via-purple-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Powerful Security Features
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Everything you need to keep your documents safe and accessible
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="group relative p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                style={{ animation: `fadeIn 0.8s ease-out ${idx * 0.1}s both` }}
              >
                {/* Gradient border on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300" />

                <div className="relative z-10">
                  <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600" />
        <div
          style={{
            ...blurCircles.topRight,
            position: "absolute",
            opacity: 0.3,
          }}
        />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Secure Your Documents?
          </h2>
          <p className="text-lg text-white text-opacity-90 mb-10">
            Join thousands of users who trust DocsBox with their sensitive
            documents
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/download"
              className="px-8 py-4 bg-white text-purple-600 rounded-lg font-bold text-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              Download for Free
            </a>
            <a
              href="/contact"
              className="px-8 py-4 bg-white bg-opacity-20 text-white rounded-lg font-bold text-lg hover:bg-opacity-30 transition-all border border-white border-opacity-40 backdrop-blur-md"
            >
              Get Support
            </a>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}

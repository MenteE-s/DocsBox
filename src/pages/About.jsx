import { blurCircles } from "@/constants/theme";
import posterImage from "@/assets/images/poster.png";

export default function About() {
  const securityFeatures = [
    {
      number: "01",
      title: "AES-256 Encryption",
      description:
        "Enterprise-grade symmetric encryption protecting all documents at rest",
    },
    {
      number: "02",
      title: "OAuth 2.0 Authentication",
      description:
        "Secure passwordless login with Google, zero local credential storage",
    },
    {
      number: "03",
      title: "Encrypted SharedPreferences",
      description:
        "Hardware-backed key storage resistant to rooting and device compromise",
    },
    {
      number: "04",
      title: "Room Database Encryption",
      description: "Encrypted blob storage with SHA-256 integrity verification",
    },
    {
      number: "05",
      title: "Google Drive Backup",
      description: "Automatic encrypted cloud backups with retention rotation",
    },
    {
      number: "06",
      title: "WorkManager Scheduling",
      description: "Reliable background backup tasks respecting device state",
    },
    {
      number: "07",
      title: "FileProvider Sharing",
      description:
        "Limited-scope file access with automatic permission revocation",
    },
    {
      number: "08",
      title: "Offline-First Sync",
      description:
        "Queue-based synchronization with conflict resolution and exponential backoff",
    },
    {
      number: "09",
      title: "Real-time Pull-to-Refresh",
      description:
        "User-triggered synchronization with smooth animations and feedback",
    },
  ];

  const values = [
    {
      icon: "🔒",
      title: "Security First",
      description:
        "Your privacy is not negotiable. Every feature is designed with security at its core.",
    },
    {
      icon: "⚡",
      title: "Performance",
      description:
        "Encryption shouldn't slow you down. Optimized algorithms keep your app lightning fast.",
    },
    {
      icon: "👥",
      title: "User Experience",
      description:
        "Complex security made simple. Intuitive interface that anyone can use.",
    },
    {
      icon: "🌍",
      title: "Accessibility",
      description:
        "Works offline, works online, works everywhere. Your documents, always available.",
    },
  ];

  const teamMembers = [
    {
      name: "Founder & Full-Stack Developer",
      tag: "Full-Stack Developer",
      role: "Full-Stack Developer & AI Engineer • Python, Flask, React.js, TailwindCSS, PostgreSQL • Generative AI • Building Smart, Scalable Web & AI Solutions",
      avatar: "👨‍💼",
      verified: true,
      color: "from-blue-500 to-blue-600",
      skills: ["Python", "React.js", "Flask", "PostgreSQL"],
    },
    {
      name: "Backend Engineer",
      tag: "Backend Lead",
      role: "Python Developer & Data Scientist • ML & Data Science Expert • Transforming data into meaningful insights • Specialized in scalable backend solutions",
      avatar: "�‍💻",
      verified: true,
      color: "from-purple-500 to-purple-600",
      skills: ["Python", "Data Science", "Backend", "PostgreSQL"],
    },
    {
      name: "MenteE",
      tag: "Design Lead & Founder",
      role: "Graphics Designer & UI/UX Designer • Figma Expert • Adobe XD Proficient • Prototyping Specialist • Creating Innovative Designs for the Future",
      avatar: "👩‍🎨",
      verified: true,
      color: "from-pink-500 to-pink-600",
      skills: ["Figma", "Adobe XD", "UI Design", "Prototyping"],
    },
    {
      name: "ML Engineer",
      tag: "ML/Data Engineer",
      role: "Data Analyst & ML Engineer • Python, Pandas, NumPy, Matplotlib • Data Cleaning, Visualization & Machine Learning • Building intelligent solutions",
      avatar: "🤖",
      verified: true,
      color: "from-green-500 to-green-600",
      skills: ["Python", "ML", "Data Analysis", "Scikit-Learn"],
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
      <section className="relative pt-20 pb-16 bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              About{" "}
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                DocsBox
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Secure document management meets beautiful design. We believe your
              documents deserve military-grade protection without sacrificing
              ease of use.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="relative py-20 bg-white">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                We created DocsBox because we realized that most document
                management apps force you to choose: security or usability. We
                refused to accept that trade-off.
              </p>
              <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                By implementing enterprise-grade encryption with an intuitive
                interface, DocsBox proves that the two can coexist. Your
                sensitive documents deserve protection that doesn't compromise
                on experience.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Built with Kotlin and Jetpack Compose, DocsBox represents the
                cutting edge of Android security architecture combined with
                modern user interface design.
              </p>
            </div>

            <div className="relative h-96">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-3xl shadow-lg opacity-60" />
              <div className="absolute inset-4 bg-white rounded-3xl shadow-md flex flex-col items-center justify-center p-8 text-center">
                <img
                  src={posterImage}
                  alt="DocsBox Poster"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="relative py-20 bg-gradient-to-b from-white to-purple-50">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            Our Core Values
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, idx) => (
              <div
                key={idx}
                className="group p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center hover:-translate-y-2"
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Features Section */}
      <section className="relative py-20 bg-white">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              9 Security Features
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive protection across every layer of your application
            </p>
          </div>

          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
            {securityFeatures.map((feature, idx) => (
              <div
                key={idx}
                className="group relative p-8 bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-purple-200"
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-bold text-lg">
                      {feature.number}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section - Visible with team members and verification badges */}
      <section className="relative py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A dedicated team of developers, designers, and engineers
              passionate about security
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, idx) => (
              <div
                key={idx}
                className="group p-6 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 text-center hover:-translate-y-3 border border-gray-100 hover:border-purple-200 flex flex-col h-full"
              >
                {/* Avatar with gradient background */}
                <div className="mb-4 relative">
                  <div
                    className={`w-20 h-20 mx-auto mb-3 bg-gradient-to-br ${member.color} rounded-full flex items-center justify-center text-4xl shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    {member.avatar}
                  </div>
                  {member.verified && (
                    <div className="absolute top-0 right-1/4 transform translate-x-1/2 bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold shadow-md">
                      ✓
                    </div>
                  )}
                </div>

                {/* Name and Title */}
                <div className="mb-4">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {member.name}
                  </h3>
                  <div className="inline-block px-3 py-1 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full text-xs font-semibold">
                    {member.tag}
                  </div>
                </div>

                {/* Role description */}
                <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-grow">
                  {member.role}
                </p>

                {/* Skills */}
                <div className="flex flex-wrap gap-2 justify-center mt-auto">
                  {member.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="inline-block px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs font-medium hover:bg-gray-200 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="relative py-20 bg-linear-to-r from-purple-600 via-purple-700 to-indigo-600 overflow-hidden">
        <div
          style={{
            ...blurCircles.topLeft,
            position: "absolute",
            opacity: 0.25,
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white text-center mb-16">
            Built With Modern Tech
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "🔷",
                name: "Kotlin",
                desc: "Modern Android development",
                color: "from-blue-400 to-blue-600",
              },
              {
                icon: "🎨",
                name: "Jetpack Compose",
                desc: "UI framework",
                color: "from-yellow-400 to-yellow-600",
              },
              {
                icon: "🔐",
                name: "AES-256",
                desc: "Encryption",
                color: "from-orange-400 to-orange-600",
              },
              {
                icon: "🔑",
                name: "OAuth 2.0",
                desc: "Authentication",
                color: "from-yellow-400 to-yellow-600",
              },
              {
                icon: "☁️",
                name: "Google Drive API",
                desc: "Cloud backup",
                color: "from-blue-400 to-blue-600",
              },
              {
                icon: "🗄️",
                name: "Room Database",
                desc: "Local storage",
                color: "from-gray-400 to-gray-600",
              },
              {
                icon: "⚙️",
                name: "WorkManager",
                desc: "Background tasks",
                color: "from-gray-500 to-gray-700",
              },
              {
                icon: "🚀",
                name: "Firebase",
                desc: "Platform",
                color: "from-orange-400 to-orange-600",
              },
            ].map((tech, idx) => (
              <div
                key={idx}
                className="group p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div
                  className={`w-16 h-16 mx-auto mb-4 bg-linear-to-br ${tech.color} rounded-xl flex items-center justify-center text-3xl group-hover:scale-110 transition-transform`}
                >
                  {tech.icon}
                </div>
                <h3 className="font-bold text-lg mb-1 text-gray-900 text-center">
                  {tech.name}
                </h3>
                <p className="text-sm text-gray-600 text-center">{tech.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 bg-white">
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Ready to Experience Secure Documents?
          </h2>
          <p className="text-lg text-gray-600 mb-10">
            Download DocsBox today and see how security and usability can work
            together
          </p>
          <a
            href="/download"
            className="inline-block px-10 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-bold text-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
          >
            Get Started Free
          </a>
        </div>
      </section>
    </div>
  );
}

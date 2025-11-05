import { blurCircles } from "@/constants/theme";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-white">
      {/* Decorative blur circles */}
      <div style={blurCircles.topLeft} />
      <div style={blurCircles.topRight} />
      <div style={blurCircles.bottomLeft} />
      <div style={blurCircles.bottomRight} />

      {/* Navigation */}
      <nav className="relative z-50 bg-white bg-opacity-90 backdrop-blur-md shadow-md sticky top-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-linear-to-r from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">📦</span>
              </div>
              <div>
                <span className="text-xs text-gray-600">by MenteE</span>
                <span className="text-xl font-bold bg-linear-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent block">
                  DocsBox
                </span>
              </div>
            </div>

            {/* Nav Links */}
            <div className="hidden md:flex gap-8">
              <a
                href="/"
                className="text-gray-600 hover:text-indigo-600 transition-colors font-medium"
              >
                Home
              </a>
              <a
                href="/about"
                className="text-gray-600 hover:text-indigo-600 transition-colors font-medium"
              >
                About
              </a>
              <a
                href="/contact"
                className="text-gray-600 hover:text-indigo-600 transition-colors font-medium"
              >
                Contact
              </a>
              <a
                href="/download"
                className="text-gray-600 hover:text-indigo-600 transition-colors font-medium"
              >
                Download
              </a>
            </div>

            {/* CTA Button */}
            <a
              href="/download"
              className="px-6 py-2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              Get App
            </a>
          </div>
        </div>
      </nav>

      {/* Main content */}
      <main className="relative z-10">{children}</main>

      {/* Footer */}
      <footer className="relative z-20 bg-linear-to-b from-purple-900 via-indigo-900 to-gray-900 text-white mt-20 pt-20 pb-8 overflow-hidden">
        {/* Decorative blur element */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl opacity-10 pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-linear-to-r from-indigo-400 to-purple-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">📦</span>
                </div>
                <div>
                  <span className="text-xs text-purple-300">by MenteE</span>
                  <span className="text-lg font-bold text-white block">
                    DocsBox
                  </span>
                </div>
              </div>
              <p className="text-purple-200 text-sm">
                Secure document management for everyone
              </p>
            </div>

            {/* Product */}
            <div>
              <h4 className="font-semibold mb-4 text-purple-200">Product</h4>
              <ul className="space-y-2 text-sm text-purple-300">
                <li>
                  <a
                    href="/"
                    className="hover:text-white transition duration-200"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="/download"
                    className="hover:text-white transition duration-200"
                  >
                    Download
                  </a>
                </li>
                <li>
                  <a
                    href="/about"
                    className="hover:text-white transition duration-200"
                  >
                    Security
                  </a>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-semibold mb-4 text-purple-200">Company</h4>
              <ul className="space-y-2 text-sm text-purple-300">
                <li>
                  <a
                    href="/about"
                    className="hover:text-white transition duration-200"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="/contact"
                    className="hover:text-white transition duration-200"
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition duration-200"
                  >
                    Blog
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="font-semibold mb-4 text-purple-200">Legal</h4>
              <ul className="space-y-2 text-sm text-purple-300">
                <li>
                  <a
                    href="/privacy"
                    className="hover:text-white transition duration-200"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition duration-200"
                  >
                    Terms
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition duration-200"
                  >
                    Security
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-purple-700 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-purple-300">
            <p>
              &copy; 2024 <span className="font-bold">MenteE</span> / DocsBox.
              All rights reserved.
            </p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a
                href="#"
                className="hover:text-purple-200 transition duration-200"
              >
                Twitter
              </a>
              <a
                href="#"
                className="hover:text-purple-200 transition duration-200"
              >
                GitHub
              </a>
              <a
                href="#"
                className="hover:text-purple-200 transition duration-200"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

/**
 * Shared Theme Configuration
 * Colors and styles inspired by modern design systems
 * Usage: import { colors, animations } from '@/constants/theme'
 */

export const colors = {
  // Primary Palette
  primary: {
    blue: "#4F46E5", // Indigo - Primary action
    purple: "#A855F7", // Purple - Accent
    pink: "#D946EF", // Fuchsia - Highlight
  },
  // Background Palette
  bg: {
    light: "#F3E8FF", // Lavender - Light background
    lighter: "#FAF5FF", // Almost white lavender
    white: "#FFFFFF",
    dark: "#1F2937", // Dark gray - Text
  },
  // Utility Colors
  text: {
    primary: "#1F2937",
    secondary: "#6B7280",
    light: "#FFFFFF",
  },
  // Status Colors
  status: {
    success: "#10B981",
    warning: "#F59E0B",
    error: "#EF4444",
    info: "#3B82F6",
  },
};

export const gradients = {
  // Gradient Backgrounds
  hero: `linear-gradient(135deg, ${colors.primary.blue} 0%, ${colors.primary.purple} 100%)`,
  accent: `linear-gradient(135deg, ${colors.primary.purple} 0%, ${colors.primary.pink} 100%)`,
  light: `linear-gradient(135deg, ${colors.bg.light} 0%, ${colors.bg.lighter} 100%)`,
  dark: `linear-gradient(135deg, #667eea 0%, #764ba2 100%)`,
};

export const animations = {
  // Reusable animation styles
  fadeIn: `
    @keyframes fadeIn {
      from {
        opacity: 0;
        transform: translateY(10px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    animation: fadeIn 0.5s ease-out;
  `,
  slideInLeft: `
    @keyframes slideInLeft {
      from {
        opacity: 0;
        transform: translateX(-30px);
      }
      to {
        opacity: 1;
        transform: translateX(0);
      }
    }
    animation: slideInLeft 0.6s ease-out;
  `,
  slideInRight: `
    @keyframes slideInRight {
      from {
        opacity: 0;
        transform: translateX(30px);
      }
      to {
        opacity: 1;
        transform: translateX(0);
      }
    }
    animation: slideInRight 0.6s ease-out;
  `,
  pulse: `
    @keyframes pulse {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.5; }
    }
    animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  `,
  float: `
    @keyframes float {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-20px); }
    }
    animation: float 3s ease-in-out infinite;
  `,
  bounce: `
    @keyframes bounce {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-10px); }
    }
    animation: bounce 1s infinite;
  `,
};

export const blurCircles = {
  // Decorative blur circle styles
  topLeft: {
    position: "absolute",
    top: "-100px",
    left: "-100px",
    width: "300px",
    height: "300px",
    background: colors.primary.pink,
    borderRadius: "50%",
    filter: "blur(80px)",
    opacity: 0.3,
  },
  topRight: {
    position: "absolute",
    top: "-50px",
    right: "-100px",
    width: "400px",
    height: "400px",
    background: colors.primary.purple,
    borderRadius: "50%",
    filter: "blur(100px)",
    opacity: 0.25,
  },
  bottomLeft: {
    position: "absolute",
    bottom: "-100px",
    left: "-50px",
    width: "350px",
    height: "350px",
    background: colors.primary.blue,
    borderRadius: "50%",
    filter: "blur(90px)",
    opacity: 0.2,
  },
  bottomRight: {
    position: "absolute",
    bottom: "-50px",
    right: "-100px",
    width: "300px",
    height: "300px",
    background: colors.primary.pink,
    borderRadius: "50%",
    filter: "blur(80px)",
    opacity: 0.25,
  },
};

export const shadows = {
  sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
  md: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
  lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
  xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
  glow: `0 0 20px ${colors.primary.purple}40`,
};

export const spacing = {
  xs: "0.25rem",
  sm: "0.5rem",
  md: "1rem",
  lg: "1.5rem",
  xl: "2rem",
  "2xl": "3rem",
  "3xl": "4rem",
};

// Tailwind CSS Classes for common patterns
export const twClasses = {
  // Button classes
  btnPrimary:
    "px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105",
  btnSecondary:
    "px-6 py-3 bg-white border-2 border-indigo-500 text-indigo-500 rounded-lg font-semibold hover:bg-indigo-50 transition-all duration-300",

  // Card classes
  card: "bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300",
  cardGradient:
    "bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl p-6 shadow-lg",

  // Container classes
  container: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
  heroSection:
    "relative min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 overflow-hidden",

  // Text classes
  heading1: "text-5xl md:text-6xl font-bold text-white",
  heading2: "text-4xl md:text-5xl font-bold text-gray-900",
  heading3: "text-2xl md:text-3xl font-bold text-gray-900",
  bodyLarge: "text-lg md:text-xl text-gray-600 leading-relaxed",
  bodySmall: "text-sm md:text-base text-gray-600",
};

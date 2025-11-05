# DocsBox - Secure Document Management

A beautiful, modern landing page and website for DocsBox, a secure Android document management application featuring enterprise-grade encryption and user-friendly design.

## 🎨 Design System

The project uses a modern design system inspired by premium SaaS applications with the following color palette:

- **Primary**: Indigo (`#4F46E5`)
- **Secondary**: Purple (`#A855F7`)
- **Accent**: Fuchsia (`#D946EF`)
- **Light Background**: Lavender (`#F3E8FF`)

### Theme Files

All colors, gradients, animations, and design tokens are centralized in:

- `src/constants/theme.js` - Main theme configuration file

This approach makes it easy to update the entire design system from one place.

## 📁 Project Structure

```
src/
├── constants/
│   └── theme.js           # Shared theme configuration
├── components/
│   └── Layout.jsx         # Navigation & footer wrapper
├── pages/
│   ├── Landing.jsx        # Hero page with features
│   ├── About.jsx          # About & security features
│   ├── Contact.jsx        # Contact form & FAQ
│   └── Download.jsx       # Download options & guides
├── App.jsx                # Main router
└── main.jsx               # Entry point
```

## 🚀 Pages

### Landing Page (`/`)

- Hero section with call-to-action
- Feature showcase (6 key features)
- Statistics display
- Social proof
- Smooth scroll animations

### About Page (`/about`)

- Mission statement
- Core values
- All 9 security features detailed
- Technology stack
- Modern design patterns

### Contact Page (`/contact`)

- Contact form with validation
- FAQ section (6 common questions)
- Contact information
- Social links
- Smooth form interactions

### Download Page (`/download`)

- Platform options (Android, Web, iOS)
- System requirements
- Step-by-step installation guide
- User testimonials
- Support links

## 🎯 Key Features

- ✅ Responsive design (mobile-first)
- ✅ Gradient backgrounds with blur circles (glassmorphism)
- ✅ Smooth animations and transitions
- ✅ Contact form with feedback
- ✅ FAQ section with expandable answers
- ✅ Centralized theme configuration
- ✅ SEO-friendly structure
- ✅ Accessibility considerations

## 💻 Technologies

- **React 19** - UI framework
- **React Router 7** - Client-side routing
- **Tailwind CSS 4** - Styling
- **Vite** - Build tool
- **JavaScript (JSX)** - Programming language

## 🛠️ Setup & Development

### Prerequisites

- Node.js 16+
- npm or yarn

### Installation

```bash
npm install
```

### Development Server

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

Output will be in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## 📝 Content Integration

The website is built around DocsBox's core features from the data files:

- **9 Security Features**: Displayed across multiple pages
- **AES-256 Encryption**: Highlighted as primary security feature
- **OAuth 2.0 Authentication**: Emphasized in security section
- **Cloud Backup**: Featured in features list
- **Offline-First Design**: Highlighted in download page

## 🎨 Design Patterns

### Gradient Backgrounds

Smooth gradients from primary to secondary colors create visual depth:

```jsx
className = "bg-linear-to-r from-indigo-600 to-purple-600";
```

### Blur Circle Elements

Decorative blur circles for modern aesthetic:

```javascript
import { blurCircles } from "@/constants/theme";
<div style={blurCircles.topLeft} />;
```

### Animations

- Fade-in on scroll
- Smooth hover effects
- Scale transitions on buttons
- Float animations for decorative elements

## 📱 Responsive Design

The layout is fully responsive:

- Mobile: Single column, compact spacing
- Tablet: Two columns where appropriate
- Desktop: Three+ columns with full features

## ✨ Future Enhancements

- [ ] Dark mode support
- [ ] Additional language translations
- [ ] Blog section
- [ ] User dashboard
- [ ] Mobile app download tracking
- [ ] Newsletter subscription

## 📄 License

This project is part of DocsBox. All rights reserved.

## 🤝 Support

For issues or questions, visit the Contact page or reach out to support@docsbox.app

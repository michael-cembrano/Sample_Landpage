# InnovateLab - Modern Landing Page

A fully responsive and cross-platform landing page built with React, Vite, Tailwind CSS, and DaisyUI.

![Landing Page Preview](******)

## ✨ Features

- **Modern Design**: Clean, innovative, and professional UI
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **Smooth Animations**: Powered by Framer Motion for engaging interactions
- **Dark/Light Theme**: Toggle between themes with smooth transitions
- **Component-Based**: Modular and reusable components
- **Performance Optimized**: Built with Vite for lightning-fast development
- **Accessible**: WCAG compliant and screen reader friendly

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <https://github.com/michael-cembrano/Sample_Landpage>
   cd sample_landpage
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## 📦 Build for Production

```bash
npm run build
```

The optimized build will be generated in the `dist` folder.

## 🛠️ Tech Stack

- **Frontend Framework**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS + DaisyUI
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Development**: ESLint for code quality

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.jsx        # Navigation component
│   ├── Hero.jsx          # Hero section
│   ├── Features.jsx      # Features showcase
│   ├── Testimonials.jsx  # Customer testimonials
│   ├── Footer.jsx        # Footer with contact info
│   └── ThemeToggle.jsx   # Dark/light theme toggle
├── App.jsx               # Main app component
├── main.jsx             # Entry point
└── index.css            # Global styles
```

## 🎨 Components Overview

### Navbar
- Responsive navigation with mobile menu
- Smooth scroll to sections
- Glass morphism effect on scroll

### Hero Section
- Full-screen hero with gradient background
- Animated call-to-action buttons
- Statistics showcase
- Floating background elements

### Features Section
- Interactive tab-based feature showcase
- Animated cards with hover effects
- Detailed feature explanations

### Testimonials
- Carousel with auto-play functionality
- Customer ratings and highlights
- Smooth transitions between testimonials

### Footer
- Newsletter subscription
- Contact information
- Social media links
- Organized link sections

## 🎯 Customization

### Colors & Themes
Edit `tailwind.config.js` to customize the color palette:

```javascript
daisyui: {
  themes: [
    {
      light: {
        "primary": "#6366f1",
        "secondary": "#8b5cf6",
        // ... other colors
      }
    }
  ]
}
```

### Content
Update the content in each component file:
- `Hero.jsx` - Main headline and description
- `Features.jsx` - Feature list and descriptions
- `Testimonials.jsx` - Customer testimonials
- `Footer.jsx` - Contact information and links

### Animations
Modify animations in component files using Framer Motion:

```javascript
const variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}
```

## 📱 Responsive Design

The landing page is built with a mobile-first approach:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px

## ⚡ Performance

- **Vite** for fast build times and hot module replacement
- **Code splitting** for optimal loading
- **Image optimization** with lazy loading
- **CSS optimization** with Tailwind's purge functionality

## 🧪 Development Scripts

```bash
# Development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linter
npm run lint
```

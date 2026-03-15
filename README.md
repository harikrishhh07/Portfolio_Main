# Hari Krishna's Portfolio Website 🚀

> A modern, interactive 3D portfolio website showcasing projects, skills, and professional experience. Built with React, Three.js, and cutting-edge web technologies.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![React](https://img.shields.io/badge/React-18.3.1-blue?logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.5.3-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-5.4.4-purple?logo=vite)](https://vitejs.dev/)

## 🌐 Live Demo

Visit the live portfolio: [Portfolio Website]()

## ✨ Features

- **Interactive 3D Tech Stack Visualization** - Animated bouncing balls with physics simulation using Three.js and React Three Fiber
- **Smooth Scrolling Experience** - Sophisticated scroll animations using GSAP ScrollSmoother and ScrollTrigger
- **Responsive Design** - Fully responsive across all devices and screen sizes
- **Modern UI/UX** - Clean, minimalist design with smooth transitions and hover effects
- **Project Showcase** - Detailed project cards with descriptions and links
- **Tech Stack Display** - 15 dynamic tech balls representing web development and ML technologies
- **Social Integration** - Easy access to GitHub, LinkedIn, Leetcode, and Resume

## 📋 Table of Contents

- [About Me](#about-me)
- [Tech Stack](#tech-stack)
- [Projects](#projects)
- [Installation](#installation)
- [Usage](#usage)
- [File Structure](#file-structure)
- [Configuration](#configuration)
- [Contributing](#contributing)
- [License](#license)

## 👨‍💻 About Me

I'm **Hari Krishna**, an aspiring **AI Engineer** and **Machine Learning Architect** from Chennai, India. 

Passionate about:
- Building scalable AI systems and production-ready ML APIs
- Advanced deep learning and neural network architecture
- System design and cloud deployments
- Full-stack web development

## 🛠️ Tech Stack

### Frontend
- **Framework**: React 18.3.1 with TypeScript 5.5.3
- **Build Tool**: Vite 5.4.4
- **Styling**: CSS3 with modern animations
- **3D Graphics**: Three.js, @react-three/fiber, @react-three/drei
- **Physics**: React Three Rapier
- **Animations**: GSAP 3.14.2 (ScrollSmoother, ScrollTrigger, SplitText)

### Tech Visualization (15 Technologies)
**Web Development:**
- React, Next.js, Node.js, Express, MongoDB, MySQL, TypeScript, JavaScript

**ML & Data Science:**
- Python, TensorFlow, PyTorch, Numpy, Matplotlib, React, Node.js

## 📁 Projects Showcased

1. **Monkeytype Clone** - High-speed typing test application
2. **Employee Management System** - Python-based CRUD application
3. **Collaborative White Board** - Real-time collaboration tool
4. **Binary Search Visualization** - Interactive data structure visualization
5. **Ideathon 6.0** - Hackathon project
6. **Portfolio Website** - This project

## 🚀 Installation

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- Git

### Clone & Setup

```bash
# Clone the repository
git clone https://github.com/harikrishhh07/Portfolio_Main.git

# Navigate to project directory
cd Portfolio-Website-main

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:5175`

## 📖 Usage

### Development Server
```bash
npm run dev
```
Starts a local development server with hot module replacement.

### Build Production
```bash
npm run build
```
Creates an optimized production build in the `dist/` folder.

### Preview Build
```bash
npm run preview
```
Previews the production build locally.

### Type Checking
```bash
npm run tsc
```
Runs TypeScript compiler to check for type errors.

## 📂 File Structure

```
src/
├── components/
│   ├── About.tsx           # About section
│   ├── Career.tsx          # Career/Experience section
│   ├── Contact.tsx         # Contact information
│   ├── Landing.tsx         # Hero/Landing section
│   ├── Navbar.tsx          # Navigation bar
│   ├── TechStack.tsx       # 3D tech visualization
│   ├── Work.tsx            # Projects showcase
│   ├── Character/          # 3D character model
│   ├── styles/             # Component styles
│   └── utils/              # Utility functions
├── context/
│   └── LoadingProvider.tsx # Global loading state
├── App.tsx                 # Main app component
├── main.tsx                # Entry point
└── index.css               # Global styles

public/
├── images/                 # Tech stack logos
├── models/                 # 3D models and HDR files
└── draco/                  # Draco decoder

```

## ⚙️ Configuration

### GSAP
Uses the free version of GSAP 3.14.2 with all premium plugins included. No trial limitations for deployment.

### Three.js
Configured with:
- Custom HDR environment for realistic lighting
- Post-processing effects (N8AO for ambient occlusion)
- Physics-based materials for tech balls
- Shadow mapping and anti-aliasing

### Vite
- Hot Module Replacement (HMR)
- TypeScript support
- CSS preprocessing
- Asset optimization

## 🎨 Customization

### Changing Tech Stack
Edit `src/components/TechStack.tsx`:
```typescript
const imageUrls = [
  "/images/react2.webp",
  "/images/your-tech.webp",
  // Add more tech logos
];
```

### Styling
Global styles are in `src/index.css`
Component-specific styles are in `src/components/styles/`

## 🔗 Links

- **GitHub**: [harikrishhh07](https://github.com/harikrishhh07)
- **LinkedIn**: [LinkedIn Profile](#)
- **LeetCode**: [harikrishhh](https://leetcode.com/u/Harikrishhh)
- **Resume**: [Google Drive](#)

## 📝 License

This project is open source and available under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- GSAP for smooth animations
- Three.js for 3D graphics
- React Three Fiber for React integration with Three.js
- Vite for lightning-fast builds

## 📧 Contact

Feel free to reach out for collaboration, suggestions, or just to connect!

---

**Made with ❤️ by Hari Krishna**

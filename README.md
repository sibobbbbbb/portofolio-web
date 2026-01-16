# 🌐 Farhan Raditya Aji - Portfolio Website

A modern, responsive portfolio website showcasing my journey as a Software Engineering student at Institut Teknologi Bandung (ITB). Built with React and Vite, featuring smooth animations, dynamic project filtering, and an integrated contact form.

🔗 **Live Demo**: [farhanra.me](https://farhanra.me)

## ✨ Features

- **📱 Fully Responsive Design** - Optimized for all devices from mobile to desktop
- **🎨 Modern UI/UX** - Clean and professional design with smooth animations powered by Framer Motion
- **🔍 Dynamic Project Filtering** - Filter projects by category (Web App, Mobile App, Desktop App)
- **📧 Contact Form** - Integrated with EmailJS for direct communication
- **⚡ High Performance** - Fast loading times with Vite and optimized assets
- **🎭 Interactive Elements** - Engaging hover effects and micro-interactions
- **🌙 Dark Theme** - Eye-friendly dark theme with atmospheric background effects
- **📊 SEO Optimized** - Comprehensive meta tags and Schema.org markup

## 🛠️ Tech Stack

### Core Technologies
- **React 18.3** - UI library for building interactive interfaces
- **Vite 5.4** - Next-generation frontend build tool
- **Tailwind CSS 3.4** - Utility-first CSS framework

### Key Libraries
- **Framer Motion 11.5** - Animation library for smooth transitions
- **React Icons 5.5** - Icon library for consistent iconography
- **Swiper 11.1** - Modern touch slider for mobile-friendly carousels
- **EmailJS 3.2** - Email service integration for contact form

### Development Tools
- **ESLint 9.9** - Code linting and quality control
- **PostCSS 8.4** - CSS transformation and optimization
- **Autoprefixer 10.4** - Automatic vendor prefix addition

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/sibobbbbbb/portofolio-web.git
   cd portofolio-web
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality checks

## 📁 Project Structure

```
portofolio-web/
├── public/              # Static assets
├── src/
│   ├── assets/         # Images and media files
│   ├── components/     # React components
│   │   ├── Navbar.jsx
│   │   ├── Profile.jsx
│   │   ├── Experience.jsx
│   │   ├── Projects.jsx
│   │   ├── TechStack.jsx
│   │   └── Contact.jsx
│   ├── constants/      # Data and configuration
│   │   ├── index.js
│   │   └── projects/   # Project data by category
│   ├── App.jsx         # Main application component
│   ├── main.jsx        # Application entry point
│   └── index.css       # Global styles
├── index.html          # HTML template with SEO meta tags
├── tailwind.config.js  # Tailwind CSS configuration
├── vite.config.js      # Vite configuration
└── package.json        # Project dependencies
```

## 🎯 Key Sections

### 1. Profile
Hero section with introduction, social links, and professional summary

### 2. Experience
Timeline of work experience and roles including:
- Software Engineer Intern at PT. Akhdani Reka Solusi
- IT Associates at Google Developer Groups on Campus ITB
- Full Stack Developer at Bandung Tennis Enthusiast (BEAST)

### 3. Projects
Dynamic project showcase with filtering by category:
- Web Applications
- Mobile Applications
- Desktop Applications

### 4. Tech Stack
Visual representation of technical skills and technologies

### 5. Contact
Integrated contact form with EmailJS for direct communication

## 🌐 Deployment

This project is deployed on Cloudflare Pages. The deployment configuration includes:

- **Build command**: `npm run build`
- **Output directory**: `dist`
- **Custom headers** defined in `_headers` file
- **Redirect rules** defined in `_redirects` file

### Deploy to Cloudflare Pages

1. Push your code to GitHub
2. Connect your repository to Cloudflare Pages
3. Configure build settings:
   - Build command: `npm run build`
   - Build output directory: `dist`
4. Deploy!

## 📊 SEO Features

- 📌 Primary meta tags (title, description)
- 🔗 Open Graph tags for social sharing
- 🐦 Twitter Card meta tags
- 📍 Canonical URL
- 🌍 Geo-location meta tags
- 📋 Schema.org structured data markup

## 🎨 Customization

To customize the portfolio for your own use:

1. **Update constants**: Edit `/src/constants/index.js` with your information
2. **Add projects**: Modify files in `/src/constants/projects/`
3. **Replace images**: Update images in `/src/assets/` and `/public/`
4. **Update meta tags**: Modify SEO information in `index.html`
5. **Configure EmailJS**: Update EmailJS configuration in `Contact.jsx`

## 📄 License

This project is open source and available for personal and educational use.

## 👤 Author

**Farhan Raditya Aji**
- Website: [farhanra.me](https://farhanra.me)
- GitHub: [@sibobbbbbb](https://github.com/sibobbbbbb)
- LinkedIn: [Farhan Raditya Aji](https://www.linkedin.com/in/farhan-raditya-aji/)
- Instagram: [@farhan.raditya29](https://www.instagram.com/farhan.raditya29)

## 🙏 Acknowledgments

- Built with React and Vite
- UI inspiration from modern portfolio designs
- Icons from React Icons library
- Animations powered by Framer Motion

---

⭐ If you found this portfolio helpful, please consider giving it a star on GitHub!
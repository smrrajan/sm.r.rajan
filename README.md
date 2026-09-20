# RAJAN SM R - Developer Portfolio

A premium, modern, production-ready developer portfolio website built with React.js, Tailwind CSS, and Vite. Designed to showcase your projects, skills, and professional identity to potential employers and clients.

## 🎨 Features

### ✨ Modern Design
- **Dark theme** with gradient accents and glassmorphism effects
- **Responsive design** that works perfectly on all devices
- **Smooth animations** and transitions throughout
- **Professional visual hierarchy** for maximum impact

### 📱 Sections
- **Navbar** - Sticky navigation with active section highlighting
- **Hero** - Impressive introduction with typing animation
- **About** - Professional introduction with animated statistics
- **Skills** - Modern skills dashboard with proficiency levels
- **Projects** - Interactive project showcase with filtering
- **Experience** - Professional timeline with responsibilities
- **Education** - Academic timeline with achievements
- **Certifications** - Professional certifications showcase
- **Coding Profiles** - GitHub, LeetCode, LinkedIn connections
- **Contact** - Contact form with validation
- **Footer** - Professional footer with links and social

### 🚀 Performance
- Lightweight and fast loading
- Optimized Tailwind CSS
- Minimal dependencies
- Lazy-loaded content
- Production-ready code

### ♿ Accessibility
- Semantic HTML structure
- ARIA labels for screen readers
- Keyboard navigation support
- High contrast ratios
- Focus visible states

### 🔍 SEO
- Proper meta tags and descriptions
- Open Graph metadata
- Semantic HTML
- Optimized title and description

## 📋 Prerequisites

- Node.js 16+ and npm
- Basic knowledge of React and Tailwind CSS
- Text editor (VS Code recommended)

## 🛠️ Installation

### 1. Clone or Extract the Project

```bash
cd portfolio
```

### 2. Install Dependencies

```bash
npm install
```

This will install:
- React 18.2.0
- Vite (build tool)
- Tailwind CSS (styling)
- React Icons (icons library)

## 🚀 Running Locally

### Development Server

```bash
npm run dev
```

This will:
- Start the Vite dev server at `http://localhost:5173`
- Enable hot module replacement (HMR) for instant updates
- Automatically open in your default browser

### Build for Production

```bash
npm run build
```

This will:
- Compile your project into optimized files
- Generate output in the `dist/` folder
- Create minified and optimized assets

### Preview Production Build

```bash
npm run preview
```

Preview your production build locally before deploying.

## 📝 Customization Guide

### 1. Update Personal Information

**File:** `src/data/portfolioData.js`

```javascript
export const personalInfo = {
  name: 'YOUR NAME',
  title: 'Your Professional Title',
  tagline: 'Your tagline',
  description: 'Your description',
  location: 'Your Location',
  email: 'your.email@example.com',
  resumeUrl: '/resume.pdf',
  profileImage: '/profile.jpg',
};
```

### 2. Add Profile Image

1. Create a profile image (recommended: 500x500px)
2. Place it in `public/profile.jpg`
3. The image will automatically display in the Hero section

### 3. Add Resume

1. Create or export your resume as PDF
2. Place it in `public/resume.pdf`
3. The "Download Resume" button will link to it

### 4. Update Social Links

**File:** `src/data/portfolioData.js`

```javascript
export const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/yourusername',
    icon: 'FaGithub',
    label: 'Visit my GitHub profile',
  },
  // ... add your other profiles
];
```

### 5. Add Projects

**File:** `src/data/portfolioData.js`

```javascript
export const projects = [
  {
    id: 1,
    title: 'Project Title',
    description: 'Short description',
    longDescription: 'Detailed description',
    image: '/projects/project1.jpg',
    technologies: ['React', 'Tailwind CSS'],
    github: 'https://github.com/yourusername/project',
    liveDemo: 'https://project-demo.com',
    category: 'React',
  },
  // ... add more projects
];
```

**Categories:** All, React, Java, JavaScript, Other

**To add project images:**
1. Create images (recommended: 600x400px)
2. Place them in `public/projects/` folder
3. Reference them in the projects array

### 6. Update Skills

**File:** `src/data/portfolioData.js`

```javascript
export const skills = {
  programming: [
    {
      name: 'JavaScript',
      level: 85,
      description: 'Your proficiency description',
    },
    // ... add more skills
  ],
  // ... update other categories
};
```

**Available skill categories:**
- programming
- webDevelopment
- database
- tools
- concepts

### 7. Add Experience

**File:** `src/data/portfolioData.js`

```javascript
export const experience = [
  {
    id: 1,
    company: 'Company Name',
    position: 'Your Position',
    duration: 'Jan 2024 - Present',
    description: 'Brief description',
    responsibilities: [
      'Responsibility 1',
      'Responsibility 2',
      // ... add more
    ],
  },
  // ... add more experience
];
```

### 8. Update Education

**File:** `src/data/portfolioData.js`

```javascript
export const education = [
  {
    id: 1,
    degree: "Bachelor's Degree",
    field: 'Computer Science',
    institution: 'University Name',
    year: '2020 - 2024',
    achievements: [
      'Achievement 1',
      'Achievement 2',
      // ... add more
    ],
  },
  // ... add more education
];
```

### 9. Add Certifications

**File:** `src/data/portfolioData.js`

```javascript
export const certifications = [
  {
    id: 1,
    title: 'Certification Name',
    organization: 'Organization',
    date: '2024',
    credentialUrl: 'https://...',
    icon: 'FaCertificate',
  },
  // ... add more certifications
];
```

### 10. Update Coding Profiles

**File:** `src/data/portfolioData.js`

```javascript
export const codingProfiles = [
  {
    id: 1,
    platform: 'GitHub',
    description: 'Your description',
    url: 'https://github.com/yourusername',
    icon: 'FaGithub',
    username: '@yourusername',
  },
  // ... update all profiles
];
```

### 11. Update Statistics

**File:** `src/data/portfolioData.js`

```javascript
export const stats = [
  {
    label: 'Projects Completed',
    value: 20,
    suffix: '+',
  },
  // ... update all stats
];
```

### 12. Customize Colors (Optional)

**File:** `tailwind.config.js`

```javascript
colors: {
  dark: {
    bg: '#0f172a',      // Main background
    bg2: '#1e293b',     // Secondary background
    text: '#f1f5f9',    // Primary text
    text2: '#cbd5e1',   // Secondary text
    accent: '#3b82f6',  // Accent color
  },
}
```

Change these hex values to customize the color scheme throughout the entire portfolio.

## 🎯 Design Customization

### Animations

Animations are defined in `tailwind.config.js`. You can:
- Modify animation timing in the `keyframes` section
- Add new animations
- Disable animations via `prefers-reduced-motion`

### Typography

Modify font sizes and weights in components. Tailwind utility classes like:
- `text-3xl` - font size
- `font-bold` - font weight
- `leading-tight` - line height

### Spacing

Adjust padding and margins using Tailwind's spacing scale:
- `p-8` - padding
- `m-4` - margin
- `gap-6` - gap between flex/grid items

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Add New Project"
4. Import your GitHub repository
5. Click "Deploy"

### Deploy to Netlify

1. Build your project: `npm run build`
2. Go to [netlify.com](https://netlify.com)
3. Drag and drop the `dist/` folder, or
4. Connect your GitHub repository for automatic deployments

### Deploy to GitHub Pages

1. Update `vite.config.js`:
```javascript
export default {
  base: '/portfolio-repo/', // your repo name
  // ...
}
```

2. Build and deploy:
```bash
npm run build
# Then push dist/ folder to gh-pages branch
```

### Deploy to Your Own Server

1. Build the project:
```bash
npm run build
```

2. Upload the `dist/` folder contents to your server
3. Ensure your server serves `index.html` for all routes

## 📧 Contact Form Backend

The contact form currently has frontend validation only. To enable email functionality:

### Option 1: EmailJS (Recommended)

1. Sign up at [emailjs.com](https://emailjs.com)
2. Get your Service ID, Template ID, and Public Key
3. Update `Contact.jsx`:

```javascript
import emailjs from '@emailjs/browser';

emailjs.init('YOUR_PUBLIC_KEY');

// In handleSubmit:
await emailjs.send('SERVICE_ID', 'TEMPLATE_ID', {
  from_name: formData.name,
  from_email: formData.email,
  subject: formData.subject,
  message: formData.message,
});
```

### Option 2: Formspree

1. Go to [formspree.io](https://formspree.io)
2. Create a new form
3. Update the form action to your Formspree endpoint

### Option 3: Backend API

Create a backend endpoint and update the form submission:

```javascript
const response = await fetch('https://your-api.com/contact', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(formData),
});
```

## 🔧 Project Structure

```
portfolio/
├── public/                    # Static assets
│   ├── profile.jpg           # Your profile image
│   ├── resume.pdf            # Your resume
│   └── projects/             # Project images
│       ├── project1.jpg
│       ├── project2.jpg
│       └── ...
│
├── src/
│   ├── components/           # React components
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Experience.jsx
│   │   ├── Education.jsx
│   │   ├── Certifications.jsx
│   │   ├── CodingProfiles.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   └── ScrollToTop.jsx
│   │
│   ├── data/
│   │   └── portfolioData.js  # All portfolio content
│   │
│   ├── App.jsx               # Main app component
│   ├── main.jsx              # React entry point
│   └── index.css             # Global styles
│
├── index.html                # HTML entry point
├── package.json              # Dependencies
├── tailwind.config.js        # Tailwind configuration
├── postcss.config.js         # PostCSS configuration
├── vite.config.js            # Vite configuration
└── README.md                 # This file
```

## 🎨 Best Practices

### Content Updates
- Keep descriptions concise and impactful
- Use action verbs for responsibilities
- Include specific metrics where possible
- Update projects with recent work first

### Images
- Use optimized, web-ready images
- Recommended sizes:
  - Profile: 500x500px
  - Projects: 600x400px
  - Logos: 64x64px
- Use modern formats (JPG, PNG, WebP)

### SEO
- Update meta description in `index.html`
- Use descriptive alt text for images
- Keep title and description under character limits
- Use semantic HTML headings

### Performance
- Compress images before uploading
- Minimize external scripts
- Use lazy loading for images
- Monitor Lighthouse scores

## 🐛 Troubleshooting

### Port Already in Use
```bash
# Use a different port
npm run dev -- --port 3000
```

### Module Not Found
```bash
# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

### Styles Not Applied
- Clear browser cache (Ctrl+Shift+Delete)
- Check Tailwind config is properly set
- Verify CSS is imported in `main.jsx`

### Build Fails
- Check Node version: `node --version` (should be 16+)
- Check for syntax errors in `portfolioData.js`
- Try: `npm install` then `npm run build`

## 📚 Resources

### Documentation
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [React Documentation](https://react.dev)
- [Vite Guide](https://vitejs.dev/guide/)

### Tools
- [React Icons](https://react-icons.github.io/react-icons)
- [Tailwind UI Components](https://tailwindui.com)
- [Color Picker](https://colorpicker.com)

### Learning
- [Tailwind CSS Tutorial](https://www.tailwindcss.com/docs)
- [React Hooks Guide](https://react.dev/reference/react/hooks)
- [Web Accessibility](https://www.w3.org/WAI/)

## 📄 License

This project is open source and available for personal and commercial use.

## ✨ Tips for Success

1. **First Impressions Matter** - Your hero section is crucial. Make it count!
2. **Quality Over Quantity** - Showcase 3-5 best projects, not all of them
3. **Keep It Updated** - Regularly update with new projects and experiences
4. **Mobile First** - Test on mobile devices frequently
5. **Customize Thoughtfully** - Don't over-customize; maintain professionalism
6. **Analytics** - Add Google Analytics to track visitor interest
7. **Personal Touch** - Add a professional photo, it increases connection
8. **Call to Action** - Make it easy for recruiters to contact you

## 🤝 Support

For issues or questions:
1. Check the troubleshooting section
2. Review component comments in code
3. Check console for error messages
4. Consult documentation links

## 🎉 You're Ready!

Your portfolio is now set up and ready to showcase your skills to the world. Good luck with your job search and projects!

---

**Built with ❤️ using React & Tailwind CSS**

# 🚀 Getting Started Guide

Welcome! This guide will help you get your portfolio up and running in minutes.

## ⏱️ Quick Setup (5 minutes)

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Start Development Server
```bash
npm run dev
```

Your portfolio will open at `http://localhost:5173`

### Step 3: Update Your Information
Edit `src/data/portfolioData.js` with your personal information.

**That's it! Your portfolio is now live locally.** 🎉

---

## 📸 Adding Your Profile Image

1. Prepare an image (square, 500x500px recommended)
2. Save it as `public/profile.jpg`
3. The image will automatically appear in the Hero section

**Tip:** Use a professional headshot for best results.

---

## 📄 Adding Your Resume

1. Export your resume as PDF
2. Save it as `public/resume.pdf`
3. Users can download it by clicking "Download Resume" button

---

## 🎯 Essential Customizations

### 1. Personal Information
**File:** `src/data/portfolioData.js`

Change these fields:
```javascript
name: 'RAJAN SM R' → 'YOUR NAME'
title: 'Software Developer | ...' → 'YOUR TITLE'
email: 'rajan@example.com' → 'your.email@example.com'
```

### 2. Social Links
Same file, update URLs:
```javascript
'https://github.com' → 'https://github.com/yourname'
'https://linkedin.com/in/rajan' → 'https://linkedin.com/in/yourname'
```

### 3. Projects
Add your projects with:
- Title
- Description
- Technologies used
- GitHub link
- Live demo link
- Category (All, React, Java, JavaScript, Other)

### 4. Skills
Update skill levels (0-100):
```javascript
level: 90 // Your actual proficiency level
```

**Important:** Use realistic skill levels. Recruiters notice inflated percentages.

### 5. Experience & Education
Add your actual experience and education history with:
- Company/Institution name
- Position/Degree
- Duration
- Responsibilities/Achievements

---

## 🖼️ Adding Project Images

1. Create project screenshots (600x400px recommended)
2. Save them in `public/projects/`
3. Name them: `project1.jpg`, `project2.jpg`, etc.
4. Reference them in `src/data/portfolioData.js`

```javascript
image: '/projects/project1.jpg'
```

---

## 🎨 Customizing Colors

**File:** `tailwind.config.js`

Find the `colors` section:
```javascript
colors: {
  dark: {
    bg: '#0f172a',      // Dark background
    bg2: '#1e293b',     // Lighter background
    text: '#f1f5f9',    // Text color
    text2: '#cbd5e1',   // Secondary text
    accent: '#3b82f6',  // Accent blue
  },
}
```

Change hex values to customize the entire theme.

---

## ✏️ Component Customization

### Hero Section
**File:** `src/components/Hero.jsx`

Change the typing animation roles:
```javascript
const roles = ['Java Developer', 'Frontend Developer', ...];
```

### About Section
**File:** `src/components/About.jsx`

Modify the stats displayed or add new sections.

### Skills Section
**File:** `src/components/Skills.jsx`

Add new skill categories or modify existing ones.

### Projects Section
**File:** `src/components/Projects.jsx`

Change filter categories or customize card appearance.

---

## 🌐 Making it Live

### Option 1: Vercel (Easiest)

1. Push to GitHub
2. Go to `vercel.com`
3. Click "Import Project"
4. Select your repository
5. Click "Deploy"

**Your portfolio is live!** 🎉

### Option 2: Netlify

1. Run `npm run build`
2. Go to `netlify.com`
3. Drag & drop the `dist/` folder
4. Done!

### Option 3: Your Own Server

1. Run `npm run build`
2. Upload contents of `dist/` folder
3. Configure server to serve `index.html` for all routes

---

## ✅ Pre-Launch Checklist

Before sharing your portfolio, verify:

- [ ] Personal information is updated
- [ ] Profile image is added
- [ ] Resume is added and links work
- [ ] All social links are correct
- [ ] Projects are added with descriptions
- [ ] Skills reflect your actual proficiency
- [ ] Experience and education are accurate
- [ ] Contact form works
- [ ] No broken links
- [ ] Mobile responsive (test on phone)
- [ ] Page loads quickly
- [ ] No console errors (open DevTools)

---

## 🔍 Testing Your Portfolio

### Desktop
- Test at 1440px, 1280px, 1024px widths
- Check all animations
- Verify all links work

### Mobile
- Test at 768px, 480px, 360px widths
- Check hamburger menu works
- Ensure buttons are touchable
- Verify text is readable

### Cross-Browser
- Test in Chrome, Firefox, Safari, Edge
- Check form validation

### Performance
- Use Google Lighthouse
- Aim for 90+ score
- Check page load time

---

## 🚀 Advanced Customizations

### Adding Analytics
Add Google Analytics in `index.html`:
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
```

### Enable Contact Form
See Contact.jsx for EmailJS or Formspree setup instructions.

### Add Dark/Light Mode Toggle
Uncomment theme toggle code in Navbar.jsx

### Add Blog Section
Create a new `Blog.jsx` component following the same pattern.

---

## 📚 Learning Resources

- **Tailwind CSS:** https://tailwindcss.com/docs
- **React Hooks:** https://react.dev/reference/react/hooks
- **Vite:** https://vitejs.dev/guide/
- **React Icons:** https://react-icons.github.io/react-icons

---

## 🆘 Common Issues

### Issue: Images not showing
**Solution:** Ensure images are in `public/` folder and path starts with `/`

### Issue: Styles not applying
**Solution:** Clear cache (Ctrl+Shift+Delete) and restart dev server

### Issue: Port 5173 already in use
**Solution:** Use different port: `npm run dev -- --port 3000`

### Issue: npm install fails
**Solution:** Delete `node_modules` and `package-lock.json`, then try again

---

## 💡 Pro Tips

1. **Keep It Updated** - Add new projects and skills regularly
2. **Quality Over Quantity** - 5 great projects > 20 mediocre ones
3. **Tell Your Story** - Use your About section to connect personally
4. **Showcase Process** - Highlight how you solved problems
5. **Include Metrics** - Show impact: "Improved performance by 40%"
6. **Call to Action** - Make it easy to contact you
7. **Professional Photo** - Use a clear, recent headshot
8. **Mobile First** - Always test on mobile first
9. **Fast Loading** - Optimize images and minimize files
10. **SEO** - Update meta tags for better search visibility

---

## 🎯 Next Steps

1. Customize `portfolioData.js`
2. Add your images and resume
3. Test locally with `npm run dev`
4. Deploy to Vercel or Netlify
5. Share your portfolio!

---

## 📧 Questions?

Check the full README.md for comprehensive documentation.

**Happy coding! 🚀**

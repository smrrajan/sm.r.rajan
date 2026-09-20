# 📁 Project File Structure

Complete guide to every file in your portfolio project.

## Directory Tree

```
portfolio/
│
├── 📂 public/                          # Static assets (included in build)
│   ├── profile.jpg                     # Your profile image (add your own)
│   ├── resume.pdf                      # Your resume PDF (add your own)
│   └── 📂 projects/                    # Project showcase images
│       ├── project1.jpg                # (Add your project images)
│       ├── project2.jpg
│       ├── project3.jpg
│       └── project4.jpg
│
├── 📂 src/                             # Source code (compiled to dist/)
│   │
│   ├── 📂 components/                  # React components
│   │   ├── Navbar.jsx                  # Navigation bar with mobile menu
│   │   ├── Hero.jsx                    # Hero section with typing animation
│   │   ├── About.jsx                   # About section with stats
│   │   ├── Skills.jsx                  # Skills dashboard with progress bars
│   │   ├── Projects.jsx                # Projects showcase with filtering
│   │   ├── Experience.jsx              # Professional timeline
│   │   ├── Education.jsx               # Education timeline
│   │   ├── Certifications.jsx          # Certifications showcase
│   │   ├── CodingProfiles.jsx          # GitHub, LeetCode, LinkedIn links
│   │   ├── Contact.jsx                 # Contact form with validation
│   │   ├── Footer.jsx                  # Footer with social links
│   │   └── ScrollToTop.jsx             # Scroll to top button
│   │
│   ├── 📂 data/                        # Data and configuration
│   │   └── portfolioData.js            # ALL portfolio content (edit this!)
│   │
│   ├── App.jsx                         # Main React component (orchestrates sections)
│   ├── main.jsx                        # React entry point
│   └── index.css                       # Global styles and Tailwind imports
│
├── 📂 .github/                         # GitHub configuration (optional)
│   └── 📂 workflows/                   # GitHub Actions workflows
│       └── deploy.yml                  # Auto-deploy workflow (if using GitHub Pages)
│
├── index.html                          # HTML entry point (contains meta tags)
├── package.json                        # Project dependencies and scripts
├── package-lock.json                   # Locked dependency versions (auto-generated)
├── vite.config.js                      # Vite build configuration
├── tailwind.config.js                  # Tailwind CSS configuration
├── postcss.config.js                   # PostCSS configuration (for Tailwind)
├── .gitignore                          # Files to ignore in Git
├── .env.example                        # Environment variables template
│
├── README.md                           # Main documentation
├── GETTING_STARTED.md                  # Quick start guide
├── DATA_SCHEMA.md                      # Data structure documentation
├── DEPLOYMENT.md                       # Deployment guide
└── 📂 dist/                            # Built output (created by npm run build)
    ├── index.html
    ├── assets/
    │   ├── index.abc123.js
    │   └── index.def456.css
    └── vite.svg
```

---

## File Descriptions

### Configuration Files

#### `package.json`
- **Purpose:** Project metadata and dependencies
- **Edit:** Only to add new packages
- **Key sections:**
  - `dependencies` - React, React-Icons (required)
  - `devDependencies` - Vite, Tailwind, PostCSS
  - `scripts` - npm commands (dev, build, preview)

#### `vite.config.js`
- **Purpose:** Vite build tool configuration
- **Edit:** Only for advanced customization
- **Configure:** Port, build options, plugins

#### `tailwind.config.js`
- **Purpose:** Tailwind CSS configuration
- **Edit:** To customize colors, animations, fonts
- **Key sections:**
  - `colors` - Dark theme colors
  - `animation` - Custom animations
  - `keyframes` - Animation definitions

#### `postcss.config.js`
- **Purpose:** CSS post-processing configuration
- **Status:** Don't modify (already configured)

#### `index.html`
- **Purpose:** HTML entry point
- **Edit:** Meta tags, title, description
- **Contains:**
  - `<meta>` tags for SEO
  - Open Graph metadata
  - Link to React app

#### `.gitignore`
- **Purpose:** Files to exclude from Git
- **Contains:** node_modules, build files, secrets
- **Status:** Don't modify

#### `.env.example`
- **Purpose:** Template for environment variables
- **Status:** Reference only (copy to `.env.local` to use)

---

### Source Code Files

#### `src/main.jsx`
- **Purpose:** React entry point
- **Renders:** App component into DOM
- **Status:** Don't modify

#### `src/App.jsx`
- **Purpose:** Main component that organizes all sections
- **Contains:** Background effects, section layout
- **Edit:** Only for major structural changes
- **Key features:**
  - Animated background gradients
  - Section management
  - Scroll tracking

#### `src/index.css`
- **Purpose:** Global styles and Tailwind imports
- **Contains:**
  - Tailwind directives
  - Global animations
  - Utility classes (buttons, cards, etc.)
  - Custom CSS utilities
- **Edit:** For global style customization

---

### Components (`src/components/`)

Each component is responsible for one section:

#### `Navbar.jsx`
- **Shows:** Navigation bar
- **Features:** Sticky, mobile menu, active highlighting
- **Data from:** navLinks, personalInfo
- **Edit:** For navbar customization

#### `Hero.jsx`
- **Shows:** Title, tagline, profile image, social links
- **Features:** Typing animation, floating badges
- **Data from:** personalInfo, socialLinks
- **Customize:** Profile image, social icons

#### `About.jsx`
- **Shows:** About text, statistics, strengths
- **Features:** Animated counters
- **Data from:** stats, personalInfo
- **Customize:** Bio text, stats

#### `Skills.jsx`
- **Shows:** Skills organized by category with progress bars
- **Features:** Animated skill levels
- **Data from:** skills object
- **Customize:** Add/remove skills, categories

#### `Projects.jsx`
- **Shows:** Project cards with filtering
- **Features:** Filter by category, hover effects
- **Data from:** projects array
- **Customize:** Add new projects, categories

#### `Experience.jsx`
- **Shows:** Professional timeline
- **Features:** Visual timeline, responsibilities
- **Data from:** experience array
- **Customize:** Add work experience

#### `Education.jsx`
- **Shows:** Education timeline
- **Features:** Achievements with checkmarks
- **Data from:** education array
- **Customize:** Add education history

#### `Certifications.jsx`
- **Shows:** Certification cards
- **Features:** Links to verify credentials
- **Data from:** certifications array
- **Customize:** Add certifications

#### `CodingProfiles.jsx`
- **Shows:** GitHub, LeetCode, LinkedIn profiles
- **Features:** Platform descriptions, external links
- **Data from:** codingProfiles array
- **Customize:** Update profile URLs

#### `Contact.jsx`
- **Shows:** Contact form and information
- **Features:** Form validation, success/error messages
- **Data from:** personalInfo, socialLinks
- **Customize:** Add form backend, email service

#### `Footer.jsx`
- **Shows:** Footer with copyright, social links, credits
- **Features:** Gradient divider, animated links
- **Data from:** personalInfo, navLinks, socialLinks
- **Status:** No customization needed

#### `ScrollToTop.jsx`
- **Shows:** Floating button to scroll to top
- **Features:** Appears after scrolling 300px
- **Status:** No customization needed

---

### Data File

#### `src/data/portfolioData.js` ⭐ **MAIN FILE TO EDIT**

**Purpose:** Central data source for entire portfolio

**Contains:**
- `personalInfo` - Your personal information
- `socialLinks` - Social media profiles
- `skills` - Skills organized by category
- `projects` - Projects showcase
- `experience` - Work history
- `education` - Academic history
- `certifications` - Certifications
- `codingProfiles` - Coding platform profiles
- `stats` - Key statistics
- `navLinks` - Navigation menu items

**Edit:** This is the PRIMARY file you should customize

**How it works:**
1. Components import data from this file
2. Data is displayed automatically
3. No need to edit components to update content
4. All portfolio information in one place

**Example:**
```javascript
export const personalInfo = {
  name: 'Your Name',  // Update this
  email: 'your@email.com',  // Update this
  // ... more fields
};
```

---

### Documentation Files

#### `README.md`
- **Content:** Comprehensive documentation
- **Sections:** Features, installation, customization, deployment
- **Read:** Before starting

#### `GETTING_STARTED.md`
- **Content:** Quick start guide
- **Best for:** First-time setup
- **Contains:** Step-by-step instructions

#### `DATA_SCHEMA.md`
- **Content:** Detailed data structure documentation
- **Best for:** Understanding what data to edit
- **Contains:** Examples for each data type

#### `DEPLOYMENT.md`
- **Content:** Deployment to production
- **Sections:** Vercel, Netlify, GitHub Pages, Own Server
- **Read:** Before deploying

---

### Build Output

#### `dist/` (Generated by `npm run build`)
- **Purpose:** Production-ready build
- **Contains:** Minified JS, CSS, HTML
- **Location:** Only exists after running build
- **Upload this:** To deploy the site
- **Don't edit:** It's auto-generated

---

## Which Files to Edit

### Must Edit (For Basic Setup)
- ✅ **`src/data/portfolioData.js`** - Your personal information, projects, skills
- ✅ **`index.html`** - Meta tags (optional but recommended)
- ✅ **Add images** - profile.jpg, resume.pdf, project images

### Should Edit (For Customization)
- 📝 **`src/index.css`** - Global styles, colors (optional)
- 📝 **`tailwind.config.js`** - Colors, animations (optional)
- 📝 **Component files** - For major feature changes (advanced)

### Don't Edit (Infrastructure)
- ❌ `package.json` - Unless adding packages
- ❌ `vite.config.js` - Already configured
- ❌ `postcss.config.js` - Already configured
- ❌ `src/main.jsx` - Already configured
- ❌ `.gitignore` - Already configured

---

## File Update Workflow

### Common Tasks

**Add a project:**
1. Create project image
2. Place in `public/projects/`
3. Add to `projects` array in `portfolioData.js`
4. Done! Component auto-updates

**Add a skill:**
1. Edit `skills` object in `portfolioData.js`
2. Add skill with name, level, description
3. Done! Component auto-updates

**Add experience:**
1. Edit `experience` array in `portfolioData.js`
2. Add company, position, responsibilities
3. Done! Component auto-updates

**Change colors:**
1. Edit `colors` in `tailwind.config.js`
2. Save and refresh browser
3. Entire site theme updates

---

## Dependencies Explained

### `src/App.jsx` imports:
```javascript
import React, { useEffect, useState } from 'react'  // React hooks
import Navbar from './components/Navbar'  // Component files
import './index.css'  // Global styles
```

### Components import:
```javascript
import { useState, useEffect } from 'react'  // React hooks
import { FaGithub } from 'react-icons/fa'  // Icons
import { personalInfo } from '../data/portfolioData'  // Data
```

### Tailwind CSS:
```javascript
// Used in className attributes
<div className="bg-dark-bg text-blue-400 p-8">
```

---

## Asset Organization

### Images
```
public/
├── profile.jpg          # Your headshot
├── resume.pdf           # Your resume
└── projects/            # Project screenshots
    ├── project1.jpg     # 600x400px recommended
    ├── project2.jpg
    └── ...
```

### When adding images:
1. Prepare image (optimize size)
2. Save in correct folder
3. Reference correct path in data file
4. Use `/path/to/image` (starts with `/`)

---

## Build Process

```
Source Code (src/)
       ↓
    Vite
       ↓
  Tailwind (CSS)
       ↓
  PostCSS
       ↓
 Optimized Build (dist/)
       ↓
    Deploy
```

**What happens during `npm run build`:**
1. Vite bundles all components
2. Tailwind processes all styles
3. Everything is minified
4. Output goes to `dist/`
5. Ready for production

---

## File Size Reference

Typical sizes after build:
- `dist/index.html` - ~15KB
- `dist/assets/index.js` - ~150KB (gzipped ~50KB)
- `dist/assets/index.css` - ~200KB (gzipped ~30KB)
- **Total:** ~200KB (gzipped ~80KB)

Fast loading on most internet connections!

---

## Quick Navigation

**To customize:**
→ Edit `src/data/portfolioData.js`

**To style:**
→ Edit `tailwind.config.js` or `src/index.css`

**To add features:**
→ Edit component files or create new components

**To deploy:**
→ Follow `DEPLOYMENT.md`

**To understand data:**
→ Read `DATA_SCHEMA.md`

---

## Tips

1. **Always backup** - Before major changes
2. **One edit at a time** - Makes debugging easier
3. **Test locally** - Before deploying
4. **Use VS Code** - Best editor for this project
5. **Check console** - Press F12 for errors
6. **Version control** - Use Git to track changes

---

For more details, see the documentation files (README.md, GETTING_STARTED.md, DATA_SCHEMA.md).

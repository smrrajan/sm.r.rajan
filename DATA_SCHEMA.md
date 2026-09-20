# 📋 Data Structure Documentation

This document explains the structure of `src/data/portfolioData.js` and how to customize each section.

## Table of Contents
- [Personal Info](#personal-info)
- [Social Links](#social-links)
- [Skills](#skills)
- [Projects](#projects)
- [Experience](#experience)
- [Education](#education)
- [Certifications](#certifications)
- [Coding Profiles](#coding-profiles)
- [Statistics](#statistics)

---

## Personal Info

Controls the main information displayed across the portfolio.

```javascript
export const personalInfo = {
  name: string,                    // Your full name
  title: string,                   // Professional title (shown in navbar)
  tagline: string,                 // Short tagline
  description: string,             // Longer personal description
  location: string,                // Your location
  email: string,                   // Email address (for contact)
  resumeUrl: string,               // Path to resume PDF
  profileImage: string,            // Path to profile image
};
```

### Example:
```javascript
export const personalInfo = {
  name: 'RAJAN SM R',
  title: 'Software Developer | Java Developer | Web Developer',
  tagline: 'Building clean, useful and modern digital experiences.',
  description: 'Passionate developer focused on...',
  location: 'India',
  email: 'rajan@example.com',
  resumeUrl: '/resume.pdf',
  profileImage: '/profile.jpg',
};
```

### Display Locations:
- `name` - Navbar logo, Hero section
- `title` - Navbar, Hero section
- `tagline` - About section
- `description` - Hero section, About section
- `location` - Contact section
- `email` - Contact section, social links
- `resumeUrl` - Hero "Download Resume" button
- `profileImage` - Hero right section, About section

---

## Social Links

Array of social media profiles for contact.

```javascript
export const socialLinks = [
  {
    name: string,       // Platform name (GitHub, LinkedIn, etc.)
    url: string,        // Link to your profile
    icon: string,       // Icon name from react-icons
    label: string,      // Accessibility label
  },
  // ... more links
];
```

### Example:
```javascript
export const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/yourusername',
    icon: 'FaGithub',
    label: 'Visit my GitHub profile',
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/yourname',
    icon: 'FaLinkedin',
    label: 'Connect on LinkedIn',
  },
  {
    name: 'LeetCode',
    url: 'https://leetcode.com/yourname',
    icon: 'SiLeetcode',
    label: 'View my LeetCode profile',
  },
  {
    name: 'Email',
    url: 'mailto:your.email@example.com',
    icon: 'FaEnvelope',
    label: 'Send me an email',
  },
];
```

### Icon Options:
Use any icon from:
- React Icons FA (FaXxx): https://react-icons.github.io/react-icons/search?q=fa
- Simple Icons (SiXxx): https://react-icons.github.io/react-icons/search?q=si

### Display Locations:
- Hero section social buttons
- Contact section social links
- Footer

---

## Skills

Organized by category with proficiency levels.

```javascript
export const skills = {
  programming: [
    {
      name: string,           // Skill name
      level: number,          // 0-100 proficiency
      description: string,    // Brief description
    },
    // ... more skills
  ],
  webDevelopment: [ ... ],
  database: [ ... ],
  tools: [ ... ],
  concepts: [ ... ],
};
```

### Example:
```javascript
export const skills = {
  programming: [
    {
      name: 'Java',
      level: 90,
      description: 'Strong proficiency in Java programming and OOP concepts',
    },
    {
      name: 'JavaScript',
      level: 85,
      description: 'Modern JavaScript with ES6+ features',
    },
    {
      name: 'Python',
      level: 75,
      description: 'Python for scripting and data processing',
    },
  ],
  webDevelopment: [
    {
      name: 'React',
      level: 88,
      description: 'Building modern web applications with React and hooks',
    },
    // ... more web skills
  ],
  database: [ ... ],
  tools: [ ... ],
  concepts: [ ... ],
};
```

### Categories:
- **programming** - Languages
- **webDevelopment** - Frontend frameworks and technologies
- **database** - Database systems
- **tools** - Development tools and platforms
- **concepts** - Core CS concepts and paradigms

### Level Guidelines:
- 90-100: Expert, daily use, can teach others
- 75-89: Advanced, solid practical experience
- 60-74: Intermediate, can work independently
- 45-59: Basic, learning phase
- Below 45: Don't include

### Display Locations:
- Skills section (main showcase)
- Animated progress bars
- Skill level indicators

---

## Projects

Showcase of your work with filtering support.

```javascript
export const projects = [
  {
    id: number,                           // Unique ID
    title: string,                        // Project name
    description: string,                  // Short description (1 line)
    longDescription: string,              // Detailed description
    image: string,                        // Path to project image
    technologies: string[],               // Tech stack array
    github: string,                       // GitHub repository URL
    liveDemo: string,                     // Live demo URL or '#'
    category: 'All'|'React'|'Java'|...,  // Filter category
  },
  // ... more projects
];
```

### Example:
```javascript
export const projects = [
  {
    id: 1,
    title: 'Autonomous Railway Track Inspection System',
    description: 'Drone-based system for railway track inspection using image processing.',
    longDescription: 'Developed an innovative solution using drone technology...',
    image: '/projects/project1.jpg',
    technologies: ['Drone Technology', 'Pixhawk', 'GPS', 'Image Processing'],
    github: 'https://github.com/yourusername/railway-inspection',
    liveDemo: '#',
    category: 'Other',
  },
  {
    id: 2,
    title: 'Coding Practice Website',
    description: 'Platform for coding practice with multiple programming languages.',
    longDescription: 'Built a full-stack coding practice platform...',
    image: '/projects/project2.jpg',
    technologies: ['React', 'JavaScript', 'HTML', 'CSS'],
    github: 'https://github.com/yourusername/coding-practice',
    liveDemo: 'https://coding-practice-demo.com',
    category: 'React',
  },
];
```

### Categories:
- **All** - Shows in all filters
- **React** - React projects
- **Java** - Java projects
- **JavaScript** - JavaScript projects
- **Other** - Other projects

### Image Guidelines:
- Size: 600x400px recommended
- Location: `public/projects/`
- Format: JPG or PNG
- Should represent the project visually

### Display Locations:
- Projects section (3-column grid)
- Project filtering
- Cards with tech badges

---

## Experience

Professional work history with timeline.

```javascript
export const experience = [
  {
    id: number,                  // Unique ID
    company: string,             // Company name
    position: string,            // Job title
    duration: string,            // Date range
    description: string,         // Brief role description
    responsibilities: string[],  // Array of tasks/accomplishments
  },
  // ... more experience
];
```

### Example:
```javascript
export const experience = [
  {
    id: 1,
    company: 'Tech Company Name',
    position: 'Software Developer / Intern',
    duration: 'Jan 2024 - Present',
    description: 'Building web applications and solving real-world problems',
    responsibilities: [
      'Developed web applications using modern technologies',
      'Worked with frontend and backend technologies',
      'Improved problem-solving skills through real projects',
      'Collaborated with team members on various projects',
    ],
  },
];
```

### Tips:
- Order by most recent first
- Include metrics when possible ("Improved performance by 40%")
- Use action verbs (Built, Developed, Optimized, etc.)
- Keep descriptions concise

### Display Locations:
- Experience section (vertical timeline)
- Timeline dots and connecting lines

---

## Education

Academic history with timeline.

```javascript
export const education = [
  {
    id: number,              // Unique ID
    degree: string,          // Degree name
    field: string,           // Field of study
    institution: string,     // School/University name
    year: string,            // Graduation year or date range
    achievements: string[],  // Array of achievements
  },
  // ... more education
];
```

### Example:
```javascript
export const education = [
  {
    id: 1,
    degree: "Bachelor's Degree",
    field: 'Information Technology / Engineering',
    institution: 'Your College Name',
    year: '2024 - 2025',
    achievements: [
      'CGPA: 8.5/10',
      'Dean\'s List (2023, 2024)',
      'Participated in hackathons',
      'Led technical club activities',
    ],
  },
];
```

### Tips:
- Order by most recent first
- Include awards, honors, and Dean's list mentions
- Add relevant coursework if recent graduate
- Include internships if relevant

### Display Locations:
- Education section (vertical timeline)
- Achievements section with checkmarks

---

## Certifications

Professional credentials and achievements.

```javascript
export const certifications = [
  {
    id: number,           // Unique ID
    title: string,        // Certification name
    organization: string, // Issuing organization
    date: string,         // Issue date (year or full date)
    credentialUrl: string,// Link to verify credential
    icon: string,         // Icon from react-icons
  },
  // ... more certifications
];
```

### Example:
```javascript
export const certifications = [
  {
    id: 1,
    title: 'Java Programming Certification',
    organization: 'Oracle',
    date: '2024',
    credentialUrl: 'https://example.com/cert1',
    icon: 'FaCertificate',
  },
  {
    id: 2,
    title: 'React Developer Certification',
    organization: 'Udemy',
    date: '2024',
    credentialUrl: 'https://example.com/cert2',
    icon: 'FaCertificate',
  },
];
```

### Tips:
- Include only relevant certifications
- Add links to verify credentials
- Order by recency
- Include both professional and online certs

### Display Locations:
- Certifications section (grid of cards)
- External links for verification

---

## Coding Profiles

Links to coding platforms.

```javascript
export const codingProfiles = [
  {
    id: number,      // Unique ID
    platform: string,// Platform name
    description: string,    // What to find there
    url: string,     // Profile URL
    icon: string,    // Icon from react-icons
    username: string,// Your username
  },
  // ... more profiles
];
```

### Example:
```javascript
export const codingProfiles = [
  {
    id: 1,
    platform: 'GitHub',
    description: 'View my repositories and contributions',
    url: 'https://github.com/yourusername',
    icon: 'FaGithub',
    username: '@yourusername',
  },
  {
    id: 2,
    platform: 'LeetCode',
    description: '500+ problems solved',
    url: 'https://leetcode.com/yourname',
    icon: 'SiLeetcode',
    username: 'yourname',
  },
  {
    id: 3,
    platform: 'LinkedIn',
    description: 'Connect with me professionally',
    url: 'https://linkedin.com/in/yourname',
    icon: 'FaLinkedin',
    username: 'yourname',
  },
];
```

### Display Locations:
- Coding Profiles section (3-column cards)
- With platform highlights and CTAs

---

## Statistics

Key metrics displayed with animations.

```javascript
export const stats = [
  {
    label: string,  // Stat label
    value: number,  // Numeric value
    suffix: string, // Suffix ('+', etc.)
  },
  // ... more stats
];
```

### Example:
```javascript
export const stats = [
  {
    label: 'Projects Completed',
    value: 15,
    suffix: '+',
  },
  {
    label: 'Technologies Mastered',
    value: 12,
    suffix: '+',
  },
  {
    label: 'Problems Solved',
    value: 500,
    suffix: '+',
  },
  {
    label: 'Certifications',
    value: 4,
    suffix: '',
  },
];
```

### Display Locations:
- About section (animated counters)
- Displayed as 2x2 or 4x1 grid

---

## Navigation Links

Define site sections (automatically updated in navbar).

```javascript
export const navLinks = [
  { name: string, href: string },
  // ... more links
];
```

### Example:
```javascript
export const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Education', href: '#education' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Contact', href: '#contact' },
];
```

---

## Tips for Data Management

1. **Keep URLs Absolute** - Use full URLs for external links
2. **Use Realistic Values** - Recruiters notice inflated numbers
3. **Keep Descriptions Concise** - More is not better
4. **Regular Updates** - Add new projects and achievements
5. **Consistent Formatting** - Use same date formats throughout
6. **Test Links** - Verify all URLs work before deploying
7. **Image Optimization** - Compress images for faster loading
8. **Backup Your Data** - Keep a copy of your data elsewhere

---

## Export Statement

All data must be exported:
```javascript
export const personalInfo = { ... }
export const socialLinks = [ ... ]
export const skills = { ... }
// etc.
```

Without `export`, components won't be able to import the data.

---

## Verification Checklist

Before deploying, verify:
- [ ] All URLs are complete and working
- [ ] Images exist and paths are correct
- [ ] No typos in important information
- [ ] All exports are present
- [ ] Data matches reality
- [ ] Dates are accurate
- [ ] Skill levels are realistic
- [ ] Categories match defined options

---

For more help, see README.md and GETTING_STARTED.md

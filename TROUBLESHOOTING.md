# 🆘 Troubleshooting & FAQ

Common issues and their solutions.

## Table of Contents
- [Installation Issues](#installation-issues)
- [Development Issues](#development-issues)
- [Styling Issues](#styling-issues)
- [Build Issues](#build-issues)
- [Deployment Issues](#deployment-issues)
- [General FAQ](#general-faq)

---

## Installation Issues

### Issue: "npm: command not found"

**Problem:** Node.js/npm not installed

**Solution:**
1. Download Node.js from https://nodejs.org
2. Install LTS version (recommended)
3. Verify installation:
   ```bash
   node --version
   npm --version
   ```
4. Restart terminal and try again

---

### Issue: "ERR! 404 Not Found"

**Problem:** npm trying to fetch non-existent package

**Solution:**
```bash
# Clear npm cache
npm cache clean --force

# Try install again
npm install
```

---

### Issue: "permission denied" during npm install

**Problem:** Permission issues on your system

**Solution:**
```bash
# Option 1: Use sudo (not ideal)
sudo npm install

# Option 2: Fix npm permissions
mkdir ~/.npm-global
npm config set prefix '~/.npm-global'
export PATH=~/.npm-global/bin:$PATH

# Then try again
npm install
```

---

### Issue: "node_modules is too large"

**Problem:** Dependencies take too much space

**Solution:**
```bash
# This is normal (~500MB)
# You can safely delete it - just run npm install again
rm -rf node_modules

# To save space, use npm ci instead
npm ci
```

---

## Development Issues

### Issue: "npm run dev" doesn't start

**Problem:** Port already in use or other error

**Solution:**
```bash
# Use different port
npm run dev -- --port 3000

# Or check what's using port 5173
lsof -i :5173  # Mac/Linux
netstat -ano | findstr :5173  # Windows
```

---

### Issue: Changes not appearing in browser

**Problem:** Hot Module Replacement (HMR) not working

**Solution:**
1. Clear browser cache (Ctrl+Shift+Delete)
2. Hard refresh (Ctrl+Shift+R)
3. Restart dev server:
   ```bash
   # Stop with Ctrl+C
   npm run dev
   ```
4. Check file was saved correctly
5. Check browser console for errors

---

### Issue: "Module not found" error

**Problem:** Import path is incorrect

**Solution:**
1. Check spelling of filename
2. Verify path is correct
3. Make sure file exists
4. Example:
   ```javascript
   // Wrong
   import Hero from './components/hero'  // Case sensitive!
   
   // Correct
   import Hero from './components/Hero'
   ```

---

### Issue: React component not rendering

**Problem:** Component not added to App.jsx or has errors

**Solution:**
1. Check if component is imported in App.jsx
2. Check console for error message
3. Look for syntax errors in component
4. Example error:
   ```javascript
   // Wrong - missing return
   export default function MyComponent() {
     <div>content</div>
   }
   
   // Correct
   export default function MyComponent() {
     return <div>content</div>
   }
   ```

---

## Styling Issues

### Issue: Tailwind styles not applying

**Problem:** Tailwind CSS not processing correctly

**Solution:**
1. Verify `index.css` imports Tailwind:
   ```css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```
2. Check `tailwind.config.js` has correct paths:
   ```javascript
   content: ["./index.html", "./src/**/*.{js,jsx}"]
   ```
3. Restart dev server
4. Clear browser cache
5. Check class names are typed correctly

---

### Issue: Colors not matching Tailwind config

**Problem:** Using default Tailwind colors instead of custom

**Solution:**
1. Check `tailwind.config.js` for color definitions
2. Use custom color names: `bg-dark-bg`
3. Not standard Tailwind: `bg-gray-900`
4. Verify config is saved before restart

---

### Issue: Animations not working

**Problem:** Animation classes defined but not running

**Solution:**
1. Check animation is defined in `tailwind.config.js`
2. Ensure class name is correct: `animate-slideUp`
3. Check for `prefers-reduced-motion` affecting animations:
   ```css
   @media (prefers-reduced-motion: reduce) {
     * { animation: none !important; }
   }
   ```
4. Restart dev server after config changes

---

### Issue: Mobile styles not responsive

**Problem:** Responsive classes not working

**Solution:**
1. Check you're using Tailwind breakpoints:
   ```javascript
   // Correct format
   <div className="text-sm md:text-base lg:text-lg">
   ```
2. Test actual mobile screen sizes
3. Use `md:`, `lg:`, `xl:` prefixes
4. Don't use bare pixel values

---

## Build Issues

### Issue: "npm run build" fails

**Problem:** Error during production build

**Solution:**
```bash
# Check for obvious errors
npm run build

# If still failing:
# 1. Check terminal output for specific error
# 2. Look for syntax errors in code
# 3. Try clearing cache
rm -rf node_modules
npm install
npm run build
```

---

### Issue: "dist" folder empty after build

**Problem:** Build failed silently or output elsewhere

**Solution:**
1. Check console for error messages
2. Ensure `npm run build` completes without errors
3. Check if using correct vite config
4. Verify `vite.config.js` exists and is correct

---

### Issue: Image not found during build

**Problem:** Images in `src/` not included in build

**Solution:**
1. Images must be in `public/` folder
2. Reference with absolute path: `/image.jpg`
3. Not `./image.jpg` or relative paths
4. Example:
   ```javascript
   // Wrong - from src/
   <img src="./profile.jpg" />
   
   // Correct - from public/
   <img src="/profile.jpg" />
   ```

---

## Deployment Issues

### Issue: Deploy succeeds but site shows 404

**Problem:** Server not configured for SPA routing

**Solution:**
- **Vercel:** Auto-configured, should work
- **Netlify:** Auto-configured, should work
- **GitHub Pages:** Need `_redirects` or `.htaccess`
- **Custom Server (Nginx):**
  ```nginx
  location / {
    try_files $uri $uri/ /index.html;
  }
  ```
- **Custom Server (Apache):**
  ```apache
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule ^ /index.html [L]
  ```

---

### Issue: Site loads but styling is broken

**Problem:** CSS not loading in production

**Solution:**
1. Check browser DevTools Network tab
2. Verify CSS files are loading
3. Check for errors in console
4. Ensure `base` is correct in `vite.config.js`:
   ```javascript
   base: '/'  // or '/portfolio/' for subdirectory
   ```

---

### Issue: Images not showing after deploy

**Problem:** Image paths incorrect in production

**Solution:**
1. Use absolute paths: `/image.jpg`
2. Never use relative paths: `./image.jpg`
3. Verify images in `public/` folder
4. Check file names (case sensitive on Linux servers)

---

### Issue: Form submission not working

**Problem:** Backend not configured

**Solution:**
1. Frontend validation only currently
2. To enable email:
   - Use EmailJS (see Contact.jsx)
   - Use Formspree (add endpoint)
   - Connect to backend API
3. See DEPLOYMENT.md for email service setup

---

### Issue: Domain name not working

**Problem:** DNS not properly configured

**Solution:**
1. Wait 24-48 hours after DNS changes
2. Verify DNS records:
   - Go to https://dnschecker.org
   - Enter your domain
   - Check A and CNAME records
3. Common issues:
   - Nameservers not updated at registrar
   - DNS propagation in progress
   - Old DNS cache
4. Clear browser cache and try again

---

### Issue: HTTPS/SSL certificate error

**Problem:** Website shows "Not Secure"

**Solution:**
- **Vercel/Netlify:** Auto-configured, should work
- **Own Server:**
  ```bash
  # Get free certificate
  sudo certbot certonly -a webroot -w /path/to/site -d yourdomain.com
  ```
- Check Certificate status: https://www.sslshopper.com/ssl-checker.html

---

## General FAQ

### Q: Can I run on port other than 5173?

**A:** Yes!
```bash
npm run dev -- --port 3000
```

---

### Q: How do I update a deployed site?

**A:** Depends on platform:
- **Vercel/Netlify:** Just push to GitHub, auto-deploys
- **Manual:** Build and upload `dist/` folder again

---

### Q: Can I use TypeScript?

**A:** Yes, but requires setup. Current project uses JavaScript.
To add TypeScript:
```bash
npm install -D typescript
# Rename .jsx to .tsx
# Create tsconfig.json
```

---

### Q: Can I add a backend?

**A:** Yes! For contact form or other features:
1. Create separate backend (Node.js, Python, etc.)
2. API endpoint: `VITE_API_URL`
3. Fetch from frontend:
   ```javascript
   const response = await fetch(import.meta.env.VITE_API_URL + '/api/contact', {
     method: 'POST',
     body: JSON.stringify(formData)
   })
   ```

---

### Q: How do I add a blog?

**A:** Create new section:
1. Create `Blog.jsx` component
2. Add blog data to `portfolioData.js`
3. Import in `App.jsx`
4. Add blog section to page

---

### Q: Can I use a different color scheme?

**A:** Yes! Edit `tailwind.config.js`:
```javascript
colors: {
  dark: {
    bg: '#0f172a',        // Change these hex values
    bg2: '#1e293b',
    text: '#f1f5f9',
    text2: '#cbd5e1',
    accent: '#3b82f6',
  },
}
```

---

### Q: Is the portfolio mobile-responsive?

**A:** Yes! Tested on:
- 1440px (desktop)
- 1280px (laptop)
- 1024px (tablet)
- 768px (tablet)
- 480px (mobile)
- 360px (small mobile)

---

### Q: Can I use custom fonts?

**A:** Yes! Add to `index.html`:
```html
<link href="https://fonts.googleapis.com/css2?family=Your+Font" rel="stylesheet">
```

Then in `tailwind.config.js`:
```javascript
fontFamily: {
  sans: ['Your Font', 'sans-serif'],
}
```

---

### Q: How do I backup my portfolio?

**A:** 
1. Use Git (recommended)
   ```bash
   git add .
   git commit -m "Backup"
   git push
   ```
2. Or zip the entire folder

---

### Q: Can I edit components directly?

**A:** Yes, but not recommended:
- Components are harder to maintain
- Better to update `portfolioData.js`
- If you must edit, do it carefully

---

### Q: How do I add Google Analytics?

**A:** Add to `index.html`:
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-YOUR_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-YOUR_ID');
</script>
```

---

### Q: What if I have a different question?

**A:** Check these resources:
1. README.md (comprehensive guide)
2. DATA_SCHEMA.md (data structure)
3. DEPLOYMENT.md (deployment help)
4. PROJECT_STRUCTURE.md (file organization)
5. Component comments in code

---

## Getting Help

### Common Places to Check

1. **Browser Console**
   - Press F12 → Console
   - Look for red error messages
   - Error messages often tell you exactly what's wrong

2. **Terminal Output**
   - When running `npm run dev`
   - When running `npm run build`
   - Check for error messages at the end

3. **File Names**
   - Check spelling (case-sensitive!)
   - Verify file exists
   - Check file extensions

4. **Code Syntax**
   - Look for typos
   - Check matching brackets
   - Verify import statements

---

## Debugging Tips

### 1. Check Console
```javascript
// Press F12 in browser, click Console tab
// Look for error messages
```

### 2. Add Console Logs
```javascript
export default function MyComponent() {
  console.log('Component loaded');
  return <div>content</div>
}
```

### 3. Restart Dev Server
```bash
# Press Ctrl+C to stop
# Then
npm run dev
```

### 4. Clear Everything
```bash
# Nuclear option if stuck
rm -rf node_modules dist
npm cache clean --force
npm install
npm run dev
```

### 5. Check Git Diff
```bash
git diff  # See what changed
git status  # See modified files
```

---

## Still Stuck?

1. **Read error message carefully** - It usually tells you the problem
2. **Search error message online** - Likely others had it
3. **Check documentation** - See README.md, DATA_SCHEMA.md
4. **Review recent changes** - What did you change last?
5. **Try simpler version** - Remove recent changes and build up

---

## Prevention Tips

1. **Make one change at a time** - Easier to find problems
2. **Test after each change** - Don't build up many changes
3. **Commit to Git frequently** - Revert if something breaks
4. **Back up before major changes** - Just in case
5. **Read error messages** - They're usually helpful

---

Good luck! Most issues have simple solutions. Read the error message and follow the steps above. 🚀

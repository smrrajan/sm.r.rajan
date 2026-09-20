# 🚀 Deployment Guide

Complete guide to deploy your portfolio to production.

## Deployment Options

1. [Vercel (Recommended)](#vercel-recommended)
2. [Netlify](#netlify)
3. [GitHub Pages](#github-pages)
4. [Your Own Server](#your-own-server)
5. [Other Platforms](#other-platforms)

---

## Vercel (Recommended)

**Why Vercel?**
- Made by the Vite creators
- Automatic deployments from GitHub
- Free tier is generous
- Lightning-fast CDN
- Zero configuration needed

### Step-by-Step Guide

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/yourusername/portfolio.git
   git branch -M main
   git push -u origin main
   ```

2. **Create Vercel Account**
   - Go to https://vercel.com
   - Click "Sign Up"
   - Choose "Continue with GitHub"
   - Authorize Vercel

3. **Import Project**
   - Click "Add New Project"
   - Select your repository
   - Click "Import"
   - Vercel auto-detects Vite configuration

4. **Deploy**
   - Review settings
   - Click "Deploy"
   - Wait ~2 minutes
   - Your site is live!

### Custom Domain

1. Go to your project settings
2. Click "Domains"
3. Enter your domain
4. Follow DNS setup instructions
5. Update your domain registrar's nameservers

### Automatic Deployments

Every push to `main` branch automatically deploys. Setup:
1. Edit files locally
2. Commit and push
3. Vercel automatically rebuilds
4. Your site updates instantly

---

## Netlify

**Why Netlify?**
- User-friendly interface
- Form submission support built-in
- Great free tier
- Easy custom domain setup

### Step-by-Step Guide

1. **Build Your Project**
   ```bash
   npm run build
   ```
   This creates a `dist/` folder with your optimized site.

2. **Create Netlify Account**
   - Go to https://netlify.com
   - Click "Sign Up"
   - Choose preferred signup method

3. **Deploy Option A: Drag & Drop (Quickest)**
   - Go to netlify.com/drop
   - Drag `dist/` folder onto the site
   - Your portfolio is live instantly!

4. **Deploy Option B: GitHub Integration (Recommended)**
   - Push your code to GitHub
   - In Netlify, click "New site from Git"
   - Connect GitHub account
   - Select your repository
   - Click "Deploy site"

### Configure Build Settings

If using GitHub integration:
1. Click "Site settings"
2. Click "Build & deploy"
3. Set Build command: `npm run build`
4. Set Publish directory: `dist`
5. Save

### Custom Domain

1. Click "Domain settings"
2. Click "Add custom domain"
3. Enter your domain
4. Follow nameserver instructions
5. Update domain registrar

### Forms Setup (Optional)

Netlify can handle form submissions:
1. Add `netlify` attribute to form
2. In Netlify dashboard, go to Forms
3. Submissions appear in dashboard

---

## GitHub Pages

**Why GitHub Pages?**
- Free hosting
- GitHub integration
- Good for portfolios
- Version control built-in

### Prerequisites
- GitHub account
- Repository named `username.github.io` (for user pages)

### Step-by-Step Guide

1. **Update Vite Configuration**
   
   Edit `vite.config.js`:
   ```javascript
   export default {
     base: '/',  // For username.github.io
     // OR
     base: '/portfolio/',  // For github.com/username/portfolio
     plugins: [react()],
     // ... rest of config
   }
   ```

2. **Build Project**
   ```bash
   npm run build
   ```

3. **Push `dist/` to GitHub**
   
   Option A - Manual push:
   ```bash
   git add dist/
   git commit -m "Deploy to GitHub Pages"
   git push
   ```

   Option B - GitHub Actions (Automatic):
   
   Create `.github/workflows/deploy.yml`:
   ```yaml
   name: Deploy to GitHub Pages
   
   on:
     push:
       branches: [main]
   
   jobs:
     deploy:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v3
         - uses: actions/setup-node@v3
           with:
             node-version: '18'
         - run: npm install
         - run: npm run build
         - uses: peaceiris/actions-gh-pages@v3
           with:
             github_token: ${{ secrets.GITHUB_TOKEN }}
             publish_dir: ./dist
   ```

4. **Enable GitHub Pages**
   - Go to repository Settings
   - Click "Pages"
   - Select "Deploy from a branch"
   - Choose `gh-pages` branch
   - Click Save

5. **Wait & Access**
   - Wait ~5 minutes for build
   - Visit `https://username.github.io`

### Custom Domain with GitHub Pages

1. Create `public/CNAME` file with your domain:
   ```
   yourdomain.com
   ```

2. In repository Settings → Pages → Custom domain
3. Enter your domain
4. Update domain registrar's DNS:
   - Add A record pointing to GitHub's IP
   - Or add CNAME record

---

## Your Own Server

**Why Your Own Server?**
- Complete control
- No restrictions
- Can run backend code
- Better for complex setups

### Prerequisites
- Hosting account (AWS, DigitalOcean, Linode, etc.)
- SSH access to server
- Node.js installed (optional)

### Step-by-Step Guide

1. **Build Project**
   ```bash
   npm run build
   ```

2. **Upload `dist/` Folder**
   - Use FTP/SFTP to upload `dist/` contents
   - Or use SCP: `scp -r dist/* user@host:/var/www/portfolio/`

3. **Configure Web Server**

   **For Nginx:**
   ```nginx
   server {
       listen 80;
       server_name yourdomain.com;
       
       root /var/www/portfolio;
       index index.html;
       
       location / {
           try_files $uri $uri/ /index.html;
       }
   }
   ```

   **For Apache:**
   ```apache
   <Directory /var/www/portfolio>
       RewriteEngine On
       RewriteBase /
       RewriteRule ^index\.html$ - [L]
       RewriteCond %{REQUEST_FILENAME} !-f
       RewriteCond %{REQUEST_FILENAME} !-d
       RewriteRule . /index.html [L]
   </Directory>
   ```

4. **Enable HTTPS**
   ```bash
   sudo certbot certonly -a webroot -w /var/www/portfolio -d yourdomain.com
   ```

5. **Restart Web Server**
   ```bash
   sudo systemctl restart nginx
   # or
   sudo systemctl restart apache2
   ```

### Update Process

For future updates:
```bash
npm run build
scp -r dist/* user@host:/var/www/portfolio/
ssh user@host 'sudo systemctl restart nginx'
```

---

## Other Platforms

### Railway.app
- Click "New Project"
- Select GitHub repository
- Select build command: `npm run build`
- Output directory: `dist`
- Deploy

### Render
- Go to render.com
- "New Static Site"
- Connect GitHub
- Build command: `npm run build`
- Publish directory: `dist`
- Deploy

### AWS Amplify
- Go to AWS Amplify Console
- "New app" → "Host web app"
- Connect GitHub
- Review build settings
- Deploy

### Hostinger
- Upload `dist/` via FTP
- Set public HTML folder to `dist`
- Configure SSL
- Done

---

## Pre-Deployment Checklist

Before deploying, verify:

- [ ] Run `npm run build` locally (no errors)
- [ ] Test build: `npm run preview`
- [ ] All personal information updated
- [ ] All images and resume added
- [ ] All links working (test in preview)
- [ ] Mobile responsive (test on phone)
- [ ] No console errors
- [ ] Performance acceptable
- [ ] Meta tags updated
- [ ] Social links correct

---

## Post-Deployment Checklist

After deploying:

- [ ] Visit production URL
- [ ] Test all navigation
- [ ] Test all buttons and links
- [ ] Test contact form
- [ ] Test on mobile
- [ ] Test in different browsers
- [ ] Check page load time
- [ ] Verify images load
- [ ] Check favicon displays
- [ ] Test smooth scrolling

---

## Performance Optimization

### Before Deploying

1. **Optimize Images**
   ```bash
   # Using ImageOptim, TinyPNG, or similar
   ```

2. **Minify CSS/JS**
   - Vite does this automatically with `npm run build`

3. **Remove Unused Code**
   - Check for unused imports
   - Remove commented code

### Monitor Performance

Use Google Lighthouse:
1. Open your site in Chrome
2. Press F12 (DevTools)
3. Click Lighthouse tab
4. Click "Analyze page load"
5. Aim for 90+ scores

---

## Troubleshooting

### Issue: Build Fails

```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Issue: 404 Errors on Routes

Make sure your server serves `index.html` for all routes (SPA routing).

Nginx: Use `try_files $uri $uri/ /index.html;`
Apache: Use rewrite rules in `.htaccess`

### Issue: Slow Load Time

- Optimize images further
- Enable gzip compression on server
- Use CDN (Vercel/Netlify do this automatically)
- Minimize external scripts

### Issue: HTTPS Not Working

```bash
# Get free SSL certificate
sudo certbot certonly -a webroot -w /path/to/site -d yourdomain.com

# Renew automatically
sudo certbot renew --quiet
```

### Issue: Custom Domain Not Working

- Check DNS propagation: https://dnschecker.org
- Wait up to 48 hours for DNS changes
- Verify CNAME/A records are correct
- Check domain registrar settings

---

## Environment Variables

For sensitive data (future backend integration):

1. Create `.env.local` file (NOT committed)
2. Define variables:
   ```
   VITE_API_URL=https://api.example.com
   VITE_EMAIL_SERVICE_KEY=xxx
   ```

3. Access in code:
   ```javascript
   const apiUrl = import.meta.env.VITE_API_URL;
   ```

Different platforms handle env variables differently:
- **Vercel:** Settings → Environment Variables
- **Netlify:** Site settings → Build & deploy → Environment
- **GitHub Pages:** Not supported (don't commit secrets!)

---

## Continuous Deployment

### With Vercel/Netlify (Automatic)
- Push to GitHub
- Auto-builds and deploys
- No manual steps needed

### With GitHub Actions
Create workflow (see GitHub Pages section above)

### Manual Updates
```bash
# After making changes locally:
npm run build
# Then upload dist/ folder to server
```

---

## Monitoring & Analytics

### Google Analytics
Add to `index.html`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXX');
</script>
```

### Error Monitoring
Use Sentry for error tracking (free tier available)

---

## Domain Registration

### Recommended Registrars
- Namecheap (affordable)
- Google Domains (user-friendly)
- GoDaddy (popular)
- Bluehost (has hosting too)

### DNS Setup
After registering domain:
1. Get nameservers from hosting provider
2. Go to domain registrar settings
3. Update nameservers
4. Wait 24-48 hours for propagation
5. Test with `nslookup yourdomain.com`

---

## Maintenance

### Regular Tasks
- Update portfolio quarterly
- Check for broken links
- Monitor performance
- Update dependencies monthly: `npm update`
- Backup your data

### Security
- Keep Node.js updated
- Update npm packages: `npm audit fix`
- Use strong passwords
- Enable 2FA on hosting accounts
- Keep backups

---

## Getting Help

- **Vercel Docs:** https://vercel.com/docs
- **Netlify Docs:** https://docs.netlify.com
- **GitHub Pages:** https://pages.github.com
- **Nginx Config:** https://nginx.org/en/docs/
- **DNS Help:** https://dnschecker.org

---

Good luck with your deployment! 🚀

Any issues? Check the troubleshooting section or refer to platform-specific documentation.

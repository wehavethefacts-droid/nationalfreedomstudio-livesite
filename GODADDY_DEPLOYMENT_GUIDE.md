# National Freedom Studio Website
## GoDaddy Deployment & Maintenance Guide

---

## Quick Start: Deploying to GoDaddy

### Step 1: Build the Website
Before uploading to GoDaddy, you need to generate the optimized files:

```bash
# Navigate to the project directory
cd nationalfreedom-studio-copy

# Install dependencies (first time only)
pnpm install

# Build the website for production
pnpm build
```

This creates a `dist/` folder with all the files ready for deployment.

### Step 2: Upload to GoDaddy

1. **Log into GoDaddy Hosting Account**
   - Go to https://www.godaddy.com and sign in
   - Navigate to "My Products" → "Hosting"
   - Click "Manage" on your hosting account

2. **Access File Manager**
   - Look for "File Manager" in the hosting dashboard
   - Click to open the file browser

3. **Navigate to Public Root**
   - You should see a folder called `public_html/` (this is your website root)
   - If your domain has a subfolder, navigate into it

4. **Upload Files**
   - Delete any existing files in `public_html/` (backup first if needed)
   - Upload all contents from the `dist/` folder to `public_html/`
   - Make sure `index.html` is in the root of `public_html/`

5. **Verify the Upload**
   - Visit your domain in a browser
   - The website should load immediately

---

## Option 1: Making Changes via GoDaddy File Manager (Easiest)

For simple text and content updates, you can edit files directly in GoDaddy without rebuilding:

### Editing Text Content

1. **Log into GoDaddy File Manager**
2. **Navigate to the HTML file** you want to edit:
   - `index.html` - Home page
   - `studio/index.html` - Studio page
   - `gear/index.html` - Gear page
   - `discography/index.html` - Discography page
   - `mastering/index.html` - Mastering page
   - `about/index.html` - About page
   - `contact/index.html` - Contact page

3. **Right-click the file** and select "Edit"
4. **Make your changes** in the text editor
5. **Save the file**
6. **Refresh your website** in the browser to see the changes

### Common Changes You Can Make:

**Update contact email:**
Find this line and replace the email address:
```html
<a href="mailto:nationalfreedomstudio@gmail.com">
```

**Update studio description:**
Find the description text and edit it directly in the HTML.

**Add new artist to discography:**
Find the discography section and add a new entry following the same format.

**Update gear list:**
Find the gear category and add/remove items as needed.

---

## Option 2: Making Larger Changes (Rebuild & Re-deploy)

For layout changes, styling updates, or adding new sections:

1. **Make changes locally** on your computer in the source files
2. **Rebuild the project:**
   ```bash
   pnpm build
   ```
3. **Upload the new `dist/` folder contents** to GoDaddy (same as initial deployment)
4. **Clear your browser cache** (Ctrl+Shift+Delete or Cmd+Shift+Delete) to see the updates

---

## File Structure Explained

```
dist/
├── index.html          ← Home page
├── studio/
│   └── index.html      ← Studio page
├── gear/
│   └── index.html      ← Gear page
├── discography/
│   └── index.html      ← Discography page
├── mastering/
│   └── index.html      ← Mastering page
├── about/
│   └── index.html      ← About page
├── contact/
│   └── index.html      ← Contact page
├── assets/             ← Images, CSS, JavaScript
└── 404.html            ← Error page
```

---

## Connecting Your Domain

### If you already own a domain at GoDaddy:

1. Go to your GoDaddy account
2. Navigate to "My Products" → "Domains"
3. Click on your domain
4. Go to "DNS" settings
5. Point the domain to your hosting account (GoDaddy will provide instructions)
6. Wait 24-48 hours for DNS to propagate

### If you need to purchase a domain:

1. In GoDaddy hosting dashboard, look for "Domain" settings
2. You can purchase and connect a domain directly through GoDaddy
3. Once connected, your website will be live at your domain

---

## Troubleshooting

### Website shows "404 Not Found"
- Make sure you uploaded files to `public_html/` (not a subfolder)
- Verify `index.html` is in the root of `public_html/`
- Clear your browser cache and try again

### Changes aren't showing up
- Clear your browser cache (Ctrl+Shift+Delete)
- Wait a few minutes for the server to refresh
- Make sure you saved the file in GoDaddy File Manager

### Images aren't loading
- Check that image URLs are correct in the HTML
- The website uses external images from the original studio server
- If images break, contact support to update image URLs

### Email links don't work
- Make sure the email address is in the correct format: `mailto:email@domain.com`
- Test by clicking the link in your browser

---

## Backing Up Your Website

It's a good idea to keep a backup of your website files:

1. **Download from GoDaddy:**
   - Open File Manager
   - Select all files in `public_html/`
   - Click "Download" to save a copy to your computer

2. **Keep the source code:**
   - Save the original project folder on your computer or cloud storage
   - This allows you to rebuild if needed

---

## Regular Maintenance Tips

### Monthly Tasks:
- Check that all links work correctly
- Verify contact form is receiving emails
- Review discography for any updates needed

### Quarterly Tasks:
- Update artist information if needed
- Review and update gear list
- Check for any broken images or links

### When Adding New Content:
- Keep the same formatting and style as existing content
- Use the same font sizes and spacing
- Test on mobile devices to ensure it looks good

---

## Getting Help

If you encounter issues:

1. **Check the GoDaddy Help Center:** https://www.godaddy.com/help
2. **Contact GoDaddy Support:** Available 24/7 via phone, chat, or email
3. **Common issues are usually related to:**
   - DNS propagation (wait 24-48 hours)
   - Browser cache (clear and refresh)
   - File upload location (make sure it's in `public_html/`)

---

## Advanced: Rebuilding Locally

If you want to make code changes and rebuild:

1. **Install Node.js** from https://nodejs.org/ (if not already installed)
2. **Install pnpm:**
   ```bash
   npm install -g pnpm
   ```
3. **Navigate to project folder:**
   ```bash
   cd nationalfreedom-studio-copy
   ```
4. **Install dependencies:**
   ```bash
   pnpm install
   ```
5. **Build for production:**
   ```bash
   pnpm build
   ```
6. **Upload the `dist/` folder contents** to GoDaddy

---

## Summary

| Task | Difficulty | Time |
|------|-----------|------|
| Update text via File Manager | Easy | 5 min |
| Add new artist to discography | Easy | 10 min |
| Update contact info | Easy | 5 min |
| Change styling/layout | Medium | 30 min + rebuild |
| Add new page | Hard | 1-2 hours |

**For most updates, you'll use Option 1 (GoDaddy File Manager)—no technical knowledge required!**

---

## Contact Information

**National Freedom Studio**
- Email: nationalfreedomstudio@gmail.com
- Location: Cottage Grove, Oregon
- Website: [your-domain.com]

---

*Last updated: 2026*

- Intern: Omkar Sharma 
- GitHub: @omkar-editor
- Organization: WeIntern Pvt Ltd
- Program: Web Development Internship – Week 2
# Objective 
-Build a secure user authentication system that handles registration, login, and session management. Security best practices such as password hashing and input sanitization must be applied throughout.
# Key Requirements
- User registration with email, username, and password
- Password hashing using bcrypt or similar algorithm
- Login system that validates credentials against the database
- Session management using JWT tokens or cookies
- Protected routes that require authentication to access
- Logout functionality that invalidates the session
- Display appropriate error messages for invalid credentials


# TechVision - Responsive Company Website

A fully responsive, multi-page company website built with modern HTML5, CSS3, and JavaScript. Designed to work seamlessly across all devices with professional branding and interactive features.

## 📋 Features

### Core Features
- ✅ **Fully Responsive Design** - Works perfectly on desktop, tablet, and mobile devices
- ✅ **Multi-Page Structure** - 4 complete pages (Home, About, Services, Contact)
- ✅ **Responsive Navigation** - Hamburger menu for mobile devices
- ✅ **Professional Styling** - Modern color scheme and consistent typography
- ✅ **Contact Form** - Fully functional with validation
- ✅ **Consistent Footer** - Appears on all pages
- ✅ **Accessibility Features** - WCAG compliant with keyboard navigation support
- ✅ **Performance Optimized** - Clean, efficient code structure

### Technical Highlights
- **Flexbox & CSS Grid** - Modern layout techniques for responsive design
- **Form Validation** - Real-time validation with user-friendly error messages
- **Mobile-First Approach** - Designed mobile-first, then enhanced for larger screens
- **Smooth Animations** - Subtle hover effects and transitions
- **Intersection Observer API** - Lazy loading animations for better performance
- **No External Dependencies** - Pure HTML, CSS, and JavaScript

## 📁 Project Structure

```
Vortex/
├── index.html          # Home page
├── about.html          # About page
├── services.html       # Services page
├── contact.html        # Contact page
├── styles.css          # All styling (responsive design)
├── script.js           # JavaScript functionality
└── README.md           # This file
```

## 🎨 Design System

### Color Scheme
- **Primary Blue**: `#2563eb` - Main brand color
- **Primary Dark**: `#1d4ed8` - Darker shade for hover states
- **Secondary Green**: `#064e3b` - Accent color
- **Accent Orange**: `#f59e0b` - Call-to-action buttons
- **Light Gray**: `#f3f4f6` - Background for sections
- **Dark Text**: `#111827` - Primary text color

### Typography
- **Font Family**: Segoe UI, Tahoma, Geneva, Verdana, sans-serif
- **Heading Scale**: 1.5rem - 3.5rem depending on context
- **Line Height**: 1.6 for optimal readability

## 📄 Pages Overview

### 1. Home Page (index.html)
- Hero section with call-to-action
- Features grid (4 feature cards)
- CTA section encouraging user engagement

### 2. About Page (about.html)
- Company story and background
- Mission, Vision, and Values cards
- Statistics showcase (500+ projects, etc.)
- Team member profiles

### 3. Services Page (services.html)
- Comprehensive service offerings (6 services)
- Service features and benefits
- Process workflow (4-step process)
- Professional presentation of capabilities

### 4. Contact Page (contact.html)
- Contact information (email, phone, address, hours)
- Functional contact form with validation
- Form fields: Name, Email, Phone, Subject, Message
- Privacy agreement checkbox

## 🔧 JavaScript Functionality

### Mobile Navigation
- Hamburger menu toggle on mobile devices
- Smooth menu animations
- Auto-close menu when link is clicked
- Click-outside to close functionality
- Keyboard support (ESC to close)

### Form Validation
- Real-time field validation on blur
- Custom error messages for each field
- Pattern matching for email and phone
- Minimum length requirements
- Required field checking
- Checkbox validation for privacy agreement

### Navigation Highlighting
- Active page indicator in navigation
- Updates based on current page
- Works across all pages

### Performance Features
- Intersection Observer for lazy-loaded animations
- Smooth scroll behavior
- Optimized event listeners
- No external library dependencies

## 📱 Responsive Breakpoints

The website is optimized for three main breakpoints:

1. **Desktop** (1024px and up)
   - Full navigation menu
   - Multi-column layouts
   - Optimal content display

2. **Tablet** (769px - 1023px)
   - Adaptive grid layouts
   - Hamburger menu activation
   - Adjusted spacing

3. **Mobile** (480px - 768px)
   - Single column layouts
   - Mobile-optimized hamburger menu
   - Touch-friendly buttons and links
   - Simplified navigation

4. **Small Mobile** (Below 480px)
   - Extra-small optimizations
   - Minimal padding
   - Stacked elements
   - Readable typography

## 🚀 Getting Started

### Prerequisites
- Any modern web browser (Chrome, Firefox, Safari, Edge)
- A local web server (optional, for local testing)

### Installation & Running

1. **Extract the files** to your desired directory

2. **Open in browser**:
   - Double-click `index.html` to open in default browser
   - OR use a local server:
     ```bash
     # Using Python
     python -m http.server 8000
     
     # Using Node.js
     npx http-server
     ```

3. **Access the site**:
   - Local: `http://localhost:8000`
   - Direct: Open `index.html` in your browser

## 📝 Contact Form Details

### Form Fields
1. **Full Name** (Required)
   - Min length: 2 characters
   - Only letters and spaces allowed

2. **Email Address** (Required)
   - Valid email format required
   - Pattern: `name@domain.com`

3. **Phone Number** (Optional)
   - Min length: 10 digits
   - Accepts: numbers, spaces, dashes, parentheses

4. **Subject** (Required)
   - Dropdown options: General Inquiry, Services, Support, Partnership, Other

5. **Message** (Required)
   - Min length: 10 characters

6. **Privacy Agreement** (Required)
   - Checkbox to confirm agreement

### Form Behavior
- Real-time validation as user types
- Error messages appear below fields
- Success message on submission
- Form resets after successful submission
- Submit button disabled during processing

## ♿ Accessibility Features

- Semantic HTML structure
- ARIA labels for form elements
- Keyboard navigation support
- Focus states for all interactive elements
- Color contrast compliance
- Reduced motion support via `prefers-reduced-motion` media query

## 🎯 Customization Guide

### Change Brand Color
Edit the `:root` section in `styles.css`:
```css
:root {
    --primary-color: #2563eb;  /* Change this */
    --secondary-color: #064e3b; /* And this */
    --accent-color: #f59e0b;   /* And this */
}
```

### Update Company Information
1. Edit text in HTML files
2. Update contact details in `contact.html`
3. Modify footer content in all pages
4. Update team members in `about.html`

### Add New Pages
1. Create new `.html` file based on existing page structure
2. Copy navigation and footer from existing pages
3. Add new navigation link to all pages
4. Update `styles.css` if needed

### Modify Services
Edit the services grid in `services.html`:
- Change service names
- Update descriptions
- Modify features list
- Adjust icons (using emoji)

## 🔍 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 📈 Performance Tips

- Images are optimized with CSS gradients instead of image files
- No external CDN dependencies
- Minimal JavaScript for faster load times
- CSS Grid and Flexbox for efficient layouts
- Lazy loading animations using Intersection Observer

## 🐛 Troubleshooting

### Mobile menu not working
- Check that JavaScript file is loaded
- Verify hamburger element has correct ID
- Check browser console for errors

### Form not validating
- Ensure all form fields have correct IDs
- Check that validation rules match field names
- Verify error message elements exist

### Styling not appearing
- Clear browser cache (Ctrl+Shift+Delete)
- Check CSS file is linked correctly
- Verify file paths are correct

## 📞 Support

For issues or questions:
1. Check the HTML comments in source files
2. Review the CSS custom properties in `:root`
3. Inspect JavaScript console for errors
4. Test in different browsers
5. Verify file structure and paths

## 📄 License

This project is provided as-is for educational and commercial use.

## 🎉 Features Summary

- **4 Pages**: Home, About, Services, Contact
- **Responsive Navigation**: Hamburger menu on mobile
- **Professional Footer**: Consistent across all pages
- **Flexible Layouts**: CSS Grid and Flexbox
- **Form Validation**: Real-time error checking
- **Accessibility**: WCAG compliant
- **No Dependencies**: Pure HTML, CSS, JavaScript
- **Mobile-First**: Optimized for all screen sizes

---

**Version**: 1.0.0  
**Last Updated**: 2024  
**Created with**: HTML5, CSS3, Vanilla JavaScript

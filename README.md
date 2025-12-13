# 🚀 Portfolio Website - Full Stack Developer

Portfolio website modern dan responsif untuk seorang Full-Stack Developer. Dibangun dengan HTML5, CSS3, dan vanilla JavaScript.

## ✨ Fitur Utama

### 🎨 Design & Styling
- **Dark/Light Mode Toggle** - Tema yang dapat diubah dengan penyimpanan preference
- **Responsive Design** - Sempurna di semua ukuran device (mobile, tablet, desktop)
- **Modern Gradient Effects** - Animated gradient blobs dan gradient text
- **Smooth Animations** - CSS dan JavaScript animations untuk UX yang mulus
- **Glassmorphism** - Modern UI dengan backdrop blur effects

### 🧭 Navigation & UX
- **Fixed Sticky Navigation** - Header yang tetap terlihat saat scroll
- **Scroll Progress Bar** - Visual indicator posisi scroll halaman
- **Hamburger Menu** - Mobile-friendly navigation menu
- **Smooth Scroll** - Smooth scroll ke berbagai sections
- **Active Link Tracking** - Highlight nav link sesuai section yang aktif

### 📝 Sections

#### Hero
- Badge dengan animasi pulse
- Gradient text heading
- Statistics display
- Call-to-action buttons
- Tech stack showcase
- Floating animated cards

#### Projects/Works
- Featured project card
- Project grid layout
- Project metadata (category, year, tech)
- Hover effects dan animations
- Responsive grid

#### About
- Personal introduction
- Highlights dengan icons
- Statistics cards
- Personality showcase

#### Skills
- Skill categories (Frontend, Backend, Mobile, Tools)
- Progress bars dengan animations
- Skill levels indicator
- Hover effects

#### Contact
- Contact form dengan validation
- Real-time error messages
- Success notification
- Alternative contact methods
- Social media links

#### Footer
- Multi-column layout
- Quick links
- Social links
- Credits

## 🛠️ Tech Stack

- **HTML5** - Semantic markup
- **CSS3** - Modern styling dengan CSS variables
- **JavaScript (ES6+)** - Vanilla JS tanpa dependencies
- **APIs Used:**
  - Intersection Observer API (untuk scroll animations)
  - localStorage API (untuk theme persistence)
  - matchMedia API (untuk dark mode detection)

## 📁 File Structure

```
portofolio/
├── index.html              # Main HTML file
├── styles/
│   ├── style.css          # Main stylesheet (1300+ lines)
│   └── animations.css     # Animation keyframes & classes
├── js/
│   └── script.js          # JavaScript (300+ lines)
└── README.md              # This file
```

## 🎯 Fitur JavaScript

### Navigation
- Mobile menu toggle dengan hamburger icon
- Smooth scroll navigation
- Active link tracking berdasarkan scroll position

### Theme Management
- System preference detection
- Toggle dark/light mode
- Theme persistence dengan localStorage

### Form Handling
- Real-time email validation
- Field length validation
- Error message display
- Form submission handling
- Success notification

### Animations
- Scroll reveal animations menggunakan Intersection Observer
- Parallax effect pada hero section
- Floating card animations
- Progress bar animations

### Accessibility
- Keyboard navigation support (Tab, Escape, Arrow keys)
- Focus management
- Semantic HTML
- ARIA labels

## 🎨 Color Scheme

### Dark Mode (Default)
- Background: `#0e0e10`
- Secondary: `#16161a`
- Tertiary: `#202024`
- Accent: `#4d7cff`
- Accent Secondary: `#00d4ff`

### Light Mode
- Background: `#ffffff`
- Secondary: `#f5f5f5`
- Tertiary: `#ebebeb`
- Text: `#0e0e10`

## 📱 Responsive Breakpoints

- **1024px** - Large tablets/small laptops
- **768px** - Tablets
- **480px** - Mobile devices

## 🚀 Getting Started

1. **Open in Browser**
   ```
   Open index.html di web browser
   ```

2. **Customize Content**
   - Ganti nama, bio, dan informasi personal di hero section
   - Update projects section dengan portfolio Anda
   - Ganti tech stack dengan teknologi yang Anda gunakan
   - Update contact information dan social links

3. **Add Your Images**
   - Replace placeholder SVG dengan images asli di work cards
   - Add profile photo di about section
   - Optimize images untuk web

4. **Deployment**
   - Push ke GitHub
   - Deploy ke Netlify/Vercel/GitHub Pages
   - Setup custom domain

## 📝 Customization Guide

### Mengubah Colors
Edit variabel di `:root` di `styles/style.css`:
```css
:root {
  --accent: #4d7cff;  /* Ganti dengan color yang diinginkan */
  --accent-secondary: #00d4ff;
  /* ... */
}
```

### Menambah Projects
Duplicate `.work-card` di HTML dan update:
- Project image
- Category badge
- Project title
- Description
- Tech stack
- Link

### Update Skills
Edit `.skill-item` di HTML:
- Skill name
- Proficiency level
- Progress percentage

## ⚡ Performance

- **Optimized CSS** - Minify untuk production
- **Lazy Loading** - Images akan di-load saat diperlukan
- **Smooth Animations** - 60fps animations dengan GPU acceleration
- **Small Bundle** - No external dependencies (vanilla JS)

## 🔍 SEO

Meta tags sudah diset untuk:
- Title dan description
- Open Graph tags
- Viewport configuration
- Theme color

Update meta tags dengan informasi Anda:
```html
<meta name="description" content="Your portfolio description">
<meta property="og:title" content="Your Name - Developer">
```

## 🎓 Learning Resources

Fitur-fitur yang bisa dipelajari dari portfolio ini:

1. **CSS Grid & Flexbox** - Modern layout techniques
2. **CSS Variables** - Dynamic theming
3. **Intersection Observer** - Lazy loading & scroll animations
4. **localStorage** - Data persistence
5. **Form Validation** - Client-side validation
6. **Smooth Animations** - CSS & JavaScript animations
7. **Responsive Design** - Mobile-first approach
8. **Semantic HTML** - Accessibility best practices

## 📞 Contact & Support

Untuk customize atau questions, feel free to modify HTML, CSS, dan JavaScript sesuai kebutuhan.

## 📄 License

Bebas digunakan untuk personal dan commercial purposes.

---

**Made with ❤️ and vanilla JavaScript**

Happy coding! 🚀

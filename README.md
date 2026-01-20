# Soflink.uz

A modern, responsive website for Soflink, built on the Dewi template. This project showcases a professional online presence with smooth animations, parallax effects, and interactive elements.

## 🚀 Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **Smooth Scrolling**: Lenis-powered smooth scrolling for enhanced user experience
- **Parallax Effects**: GSAP-powered parallax layers for dynamic visual appeal
- **Interactive Navigation**: Sticky navigation with scroll-based highlighting
- **Portfolio Gallery**: Isotope-powered filterable portfolio with lightbox
- **Contact Forms**: PHP-based contact and newsletter forms
- **Animations**: AOS (Animate On Scroll) for elegant entrance animations
- **Modern UI**: Clean, professional design with Bootstrap components

## 🛠️ Technologies Used

- **HTML5**: Semantic markup structure
- **CSS3**: Custom styling with SCSS
- **JavaScript**: Interactive functionality
- **Bootstrap 5.3.3**: Responsive framework
- **GSAP**: Advanced animations and ScrollTrigger
- **Lenis**: Smooth scrolling library
- **AOS**: Animate on scroll library
- **Isotope**: Portfolio filtering
- **GLightbox**: Image lightbox
- **Pure Counter**: Animated counters
- **Swiper**: Carousel/slider functionality

## 📦 Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/soflink.uz.git
   ```

2. Navigate to the project directory:
   ```bash
   cd soflink.uz
   ```

3. Open `index.html` in your browser or serve with a local server:
   ```bash
   # Using Python
   python -m http.server 8000

   # Using Node.js
   npx serve .
   ```

## 🎯 Usage

### Customization

- **Content**: Edit HTML files to update text, images, and content
- **Styling**: Modify `assets/css/main.css` or `assets/scss/` files for styling changes
- **JavaScript**: Customize behavior in `assets/js/main.js`
- **Images**: Replace images in `assets/img/` directories
- **Forms**: Update PHP files in `forms/` for form handling

### Key Sections

- **Hero**: Main banner with parallax background
- **About**: Company information and services
- **Portfolio**: Showcase of work with filtering
- **Team**: Team member profiles
- **Testimonials**: Client reviews
- **Contact**: Contact form and information

### Parallax Configuration

Parallax effects are controlled in `main.js`. To adjust layer speeds:

```javascript
const layers = [
  { layer: "1", yPercent: 70 },  // Fastest movement
  { layer: "2", yPercent: 55 },
  { layer: "3", yPercent: 40 },
  { layer: "4", yPercent: 10 }   // Slowest movement
];
```

## 📁 Project Structure

```
soflink.uz/
├── index.html                 # Main homepage
├── portfolio-details.html     # Portfolio detail pages
├── service-details.html       # Service detail pages
├── assets/
│   ├── css/
│   │   └── main.css          # Compiled styles
│   ├── js/
│   │   ├── main.js           # Main JavaScript
│   │   └── script.js         # Additional scripts
│   ├── img/                  # Images
│   ├── scss/                 # SCSS source files
│   └── vendor/               # Third-party libraries
├── forms/                     # PHP contact forms
└── README.md                  # This file
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is based on the Dewi template by BootstrapMade. Please refer to the original license at [BootstrapMade License](https://bootstrapmade.com/license/).

## 🙏 Credits

- **Template**: [Dewi](https://bootstrapmade.com/dewi-free-multi-purpose-html-template/) by BootstrapMade
- **Icons**: Bootstrap Icons
- **Fonts**: Google Fonts
- **Libraries**: All third-party libraries are included in `assets/vendor/`

## 📞 Support

For support or questions, please contact us through the website's contact form or reach out to the development team.

---

**Last Updated**: January 2026
**Version**: 1.0.0</content>
<parameter name="filePath">e:\Web Projects\soflink.uz\README.md
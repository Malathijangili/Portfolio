# Personal Developer Portfolio — JANGILI MALATHI

A modern, responsive, dark-themed personal developer portfolio built using React, Vite, and custom CSS. Designed for college portfolio submission, internship applications, GitHub showcase, and Vercel deployment.

---

## 🌟 Project Overview

This portfolio website showcases my academic background as a second-year Computer Science & Engineering student at Sandip University. It highlights my foundational skills in software development, web development, AI/ML concepts, practical projects, and my continuous learning journey.

- **Developer Name:** JANGILI MALATHI
- **Role / Title:** CSE Student & Aspiring Full-Stack Developer
- **University:** Sandip University
- **Academic Standing:** Second Year (B.Tech CSE, 2025–2029)
- **Primary Focus:** Web Development, Software Engineering, Artificial Intelligence & Machine Learning

---

## ✨ Features

- **Dark & Light Mode:** Toggleable theme with local storage persistence (Dark navy theme by default).
- **Hero Section:** Terminal-style developer graphic, interactive status badges, and quick social links.
- **About Me Section:** Information cards covering education standing, current focus, learning areas, and career goals.
- **Education Section:** Professional timeline displaying degree details at Sandip University (without fake CGPA metrics).
- **Categorized Technical Skills:** Honest competency badges (`Familiar`, `Learning`, `Exploring`) across Programming Languages, Web Development, Database, Tools, and AI/ML.
- **Interactive Projects Hub:** Real-time search by title, description, category, or tech stack, with dynamic category filtering buttons.
- **Honest Learning & Progress:** Focuses on genuine student learning milestones without fabricated work experience or awards.
- **Career Trajectory Section ("Where I'm Heading"):** Expresses career goals and aspiration to become a Full-Stack & AI/ML Engineer.
- **Validated Contact Form:** Client-side input validation for Name, Email, and Message with integrated `mailto:` fallback.
- **Fully Responsive:** Fluid layouts designed for mobile, tablet, laptop, and desktop viewports.
- **SEO & Accessibility:** Optimized meta tags, semantic HTML5 structure, ARIA attributes, and `prefers-reduced-motion` support.

---

## 🛠️ Technologies Used

- **Frontend Framework:** React 19 (Hooks, Functional Components)
- **Build Tool:** Vite 6
- **Styling:** Custom Vanilla CSS (Design Tokens, Glassmorphism, CSS Variables, Responsive Grid/Flexbox)
- **Icons:** Lucide React & Custom SVG Components
- **Deployment Platform:** Vercel / GitHub Pages

---

## 💻 Installation & Setup Instructions

### Prerequisites
Make sure you have Node.js (v18.0 or higher) and npm installed on your machine.

### Step 1: Clone or Download the Repository
```bash
git clone https://github.com/Malathijangili/portfolio.git
cd portfolio
```

### Step 2: Install Dependencies
```bash
npm install
```

### Step 3: Run Development Server
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:5173`.

### Step 4: Build for Production
```bash
npm run build
```
The optimized production output will be generated inside the `dist/` directory.

---

## 📁 Project Structure

```
portfolio/
│
├── public/
│   ├── favicon.svg
│   └── assets/
│
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Sticky header & theme toggle
│   │   ├── Hero.jsx            # Terminal & quick CTA section
│   │   ├── About.jsx           # About bio & key summary cards
│   │   ├── Education.jsx       # Academic timeline & coursework
│   │   ├── Skills.jsx          # Categorized skill badges
│   │   ├── Projects.jsx        # Project search & filtering logic
│   │   ├── ProjectCard.jsx     # Individual project card component
│   │   ├── Achievements.jsx    # Genuine student progress milestones
│   │   ├── CareerObjective.jsx # Career vision & CTA
│   │   ├── Contact.jsx         # Form with client validation & details
│   │   ├── Footer.jsx          # Social links, copyright & scroll-top
│   │   └── Icons.jsx           # Clean SVG icon components
│   │
│   ├── data/
│   │   └── projects.js         # Project dataset (TasteHub & Portfolio)
│   │
│   ├── hooks/
│   │   └── useTheme.js         # Dark/Light theme custom hook
│   │
│   ├── App.jsx                 # Main application layout
│   ├── main.jsx                # Entry point
│   └── index.css               # Core CSS design system
│
├── screenshots/
│   ├── home.png                # Home section screenshot
│   ├── about.png               # About section screenshot
│   ├── projects.png            # Projects section screenshot
│   └── mobile.png              # Mobile view screenshot
│
├── .gitignore
├── package.json
├── vite.config.js
├── DOCUMENTATION.md            # Comprehensive Academic Documentation
└── README.md                   # Project README
```

---

## 📷 Screenshots

| View | Screenshot File |
| :--- | :--- |
| **Home / Hero** | `screenshots/home.png` |
| **About Section** | `screenshots/about.png` |
| **Projects & Search** | `screenshots/projects.png` |
| **Mobile Drawer** | `screenshots/mobile.png` |

---

## 🔗 Repository & Deployment Links

## 🌐 Live Demo

🔗 Live Website: https://portfolio-malathi7.vercel.app/

## 📂 GitHub Repository

🔗 GitHub: https://github.com/Malathijangili/Portfolio
---

## 👤 Author Information

- **Name:** JANGILI MALATHI
- **Degree:** B.Tech in Computer Science & Engineering (2025–2029)
- **University:** Sandip University
- **Email:** [malavikapateljangili@gmail.com](mailto:malavikapateljangili@gmail.com)
- **GitHub:** [https://github.com/Malathijangili](https://github.com/Malathijangili)
- **LinkedIn:** [https://www.linkedin.com/in/jangili-malathi-3a0299397/](https://www.linkedin.com/in/jangili-malathi-3a0299397/)

---

## 🚀 Future Improvements

1. Integrate live LeetCode problem-solving activity metrics via public APIs.
2. Add full-stack project case studies featuring backend API integration.
3. Incorporate interactive AI/ML demo widgets directly into project cards.
4. Implement blog/notes section for publishing tech learnings and code summaries.

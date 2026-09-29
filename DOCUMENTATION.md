# ACADEMIC PROJECT DOCUMENTATION
## Personal Developer Portfolio Web Application

**Student Name:** JANGILI MALATHI  
**Program:** B.Tech – Computer Science & Engineering (Second Year)  
**Institution:** Sandip University  
**Academic Session:** 2025 – 2029  
**Contact Email:** malavikapateljangili@gmail.com  
**GitHub Profile:** [https://github.com/Malathijangili](https://github.com/Malathijangili)  
**LinkedIn Profile:** [https://www.linkedin.com/in/jangili-malathi-3a0299397/](https://www.linkedin.com/in/jangili-malathi-3a0299397/)  

---

## 1. Introduction

In the modern software industry, a developer's personal portfolio serves as a central hub for personal branding, technical skills demonstration, academic projects, and continuous learning history. For a Computer Science & Engineering (CSE) student, presenting an authentic, transparent, and professional web presence is essential for securing internships, participating in open-source projects, and satisfying college academic project submissions.

This project document details the architecture, design decisions, implementation, and deployment of a modern React-based developer portfolio for **JANGILI MALATHI**, a second-year CSE student at Sandip University. The portfolio emphasizes practical learning, web development competencies, and an aspiring focus toward Artificial Intelligence, Machine Learning, and Generative AI.

---

## 2. Problem Statement

Early-stage computer science students often face difficulty presenting their technical profile effectively:
- **Exaggeration vs. Reality:** Many portfolio templates force students to claim senior-level experience or arbitrary "95% proficiency" metrics that do not accurately represent a second-year student's level.
- **Static & Generic Templates:** Plain HTML pages or generic resume templates lack dynamic interactivity (like search, category filtering, theme persistence, and smooth animations).
- **Unstructured Project Displays:** Students frequently lack a standardized way to highlight project features, repository links, and live demonstration URLs cleanly.
- **Lack of Responsive & Accessible Standards:** Portfolios built without responsive design or basic web accessibility (ARIA attributes, keyboard navigation, color contrast) fail on mobile viewports and modern accessibility evaluations.

---

## 3. Objectives

The primary objectives of this developer portfolio project are:
1. **Authentic Representation:** Accurately represent a second-year B.Tech CSE student without fabricating achievements, fake CGPA metrics, or unverified work experience.
2. **Modern Developer Aesthetics:** Implement a sleek Dark Navy + Blue developer theme with glassmorphism, smooth scrolling, clean typography, and interactive theme toggling.
3. **Interactive Project Discovery:** Provide real-time live search and multi-category filtering (`Web Development`, `JavaScript`, `React`, `Personal`) for showcase projects.
4. **Validation & Contact Handling:** Implement a validated client-side contact form with zero fake backend server claims and seamless email integration.
5. **Production Readiness:** Prepare the application for immediate GitHub repository hosting and Vercel cloud deployment.

---

## 4. Proposed Solution

The proposed solution is a single-page application (SPA) built using **React** and **Vite**, styled with a custom vanilla CSS design system. The application features:
- A responsive sticky navigation header with active section tracking and theme toggle.
- A developer Hero section complete with interactive terminal syntax graphics and social links.
- An About section with 4 targeted summary cards highlighting education, focus areas, learning goals, and current standing.
- An Education timeline section detailing B.Tech CSE studies at Sandip University.
- A categorized Skills matrix utilizing honest proficiency badges (`Familiar`, `Learning`, `Exploring`).
- A Projects section with live search, category filtering, and project cards for *TasteHub* and *Personal Developer Portfolio*.
- A Learning & Progress section focusing on practical student milestones.
- A Career Objective card ("Where I'm Heading") with an interactive call-to-action button.
- A Contact section with client-side form validation and mailto fallbacks.

---

## 5. Technologies Used

| Layer | Technology | Purpose |
| :--- | :--- | :--- |
| **Frontend Framework** | React 19 | Modular component architecture, state management (`useState`, `useEffect`) |
| **Build Tooling** | Vite 6 | Rapid HMR development server & optimized production bundling |
| **Styling** | Vanilla CSS3 | Custom CSS design tokens, HSL gradients, glassmorphism, responsive grid & flexbox |
| **Icons** | Lucide React & Custom SVG | Scalable vector graphic icons for developer tools and social media |
| **State Persistence** | Web Storage API | `localStorage` theme state memory |
| **Version Control** | Git & GitHub | Source code repository management |
| **Deployment** | Vercel Platform | Automated continuous integration and edge hosting |

---

## 6. System Requirements

### Hardware Requirements
- **Computer/Laptop:** Minimum 4 GB RAM (8 GB recommended)
- **Processor:** Dual-core 2.0 GHz or higher (Intel i3/AMD Ryzen 3 or above)
- **Disk Space:** 500 MB free storage for development dependencies
- **Network:** Active internet connection for package installation and cloud deployment

### Software Requirements
- **Operating System:** Windows 10/11, Linux, or macOS
- **Runtime Environment:** Node.js (v18.0.0 or higher) & npm (v9.0.0 or higher)
- **IDE / Code Editor:** Visual Studio Code (VS Code) with ES6/JSX extensions
- **Version Control:** Git 2.x
- **Modern Web Browsers:** Google Chrome, Microsoft Edge, Mozilla Firefox, or Apple Safari

---

## 7. Website Features

1. **Sticky Header with Glassmorphism:** Remains visible during scroll with smooth backdrop blur and active section tracking.
2. **Dark / Light Theme Toggle:** Instant theme switching with preference saved in `localStorage`.
3. **Developer Terminal Visual:** Interactive code snippet component displaying student metadata in JS syntax.
4. **Structured Education Card:** Displays degree, institution, timeline, and core coursework without fake metrics.
5. **Non-Misleading Skill Badges:** Uses clear qualitative tags (`Familiar`, `Learning`, `Exploring`) instead of fake progress bars.
6. **Live Project Search & Category Filter:** Filters projects in real time across title, tech stack, description, and categories.
7. **Conditional Live Demo Links:** Shows real demo links when available (e.g. TasteHub) and graceful "Deployment Pending" badges when links are pending.
8. **Client-Side Form Validation:** Validates required fields, email format, and minimum length before submitting contact form.
9. **Accessible Keyboard Navigation:** Complete focus indicators and screen reader support.

---

## 8. Website Structure

```
portfolio/
├── public/
│   ├── favicon.svg
│   └── assets/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Education.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── ProjectCard.jsx
│   │   ├── Achievements.jsx
│   │   ├── CareerObjective.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   └── Icons.jsx
│   ├── data/
│   │   └── projects.js
│   ├── hooks/
│   │   └── useTheme.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── screenshots/
├── package.json
├── vite.config.js
├── README.md
└── DOCUMENTATION.md
```

---

## 9. UI/UX Design

The visual design adheres to a **Dark + Blue Professional Developer** theme:
- **Color Palette:**
  - Dark Navy Background (`#070a11` / `#0f172a`)
  - Primary Accent Blue (`#3b82f6` / `#2563eb`)
  - Light Blue Highlight (`#60a5fa` / `#38bdf8`)
  - Neutral Cards (`#0f172a` in dark mode, `#ffffff` in light mode)
- **Typography:** `Inter` for clean body readability, `Fira Code` for code blocks and tech tags.
- **Micro-Interactions:** Subtle hover translations (`translateY(-4px)`), smooth button glow shadows, and glassmorphism borders (`rgba(59, 130, 246, 0.18)`).

---

## 10. Implementation

- **Theme Hook (`useTheme.js`):** Listens to state changes and toggles `.dark` / `.light` class lists on `document.documentElement`, syncing with `localStorage`.
- **Dynamic Projects State (`Projects.jsx`):** Maintains `searchQuery` and `selectedCategory` state, computing `filteredProjects` in real time with array `.filter()` logic.
- **Form State & Validation (`Contact.jsx`):** Tracks input object, verifies regex patterns, displays field-specific error strings, and triggers `mailto:` upon successful submit.

---

## 11. GitHub Repository

The source code is structured for direct upload to GitHub.

- **Repository Structure:** Clean root level with `.gitignore` excluding `node_modules/` and `dist/`.
- **Commit Strategy:** Meaningful incremental commits:
  1. `Initial portfolio setup`
  2. `Add responsive portfolio sections`
  3. `Add projects and skills section`
  4. `Add dark light mode`
  5. `Add project filtering and search`
  6. `Add responsive navigation`
  7. `Add SEO metadata`
  8. `Prepare project for deployment`

---

## 12. Vercel Deployment Flow

```
GitHub Repository
       ↓
Connect Repository to Vercel
       ↓
Import Project
       ↓
Framework Preset: Vite
       ↓
Build Command: npm run build
       ↓
Output Directory: dist
       ↓
Deploy & Assign Custom Domain / Subdomain
```

*Note: Replace "Vercel deployment URL: Add after deployment" in README.md with the live URL upon completion.*

---

## 13. Testing Matrix

| Test Case | Scenario | Expected Outcome | Result |
| :--- | :--- | :--- | :--- |
| **TC-01** | Navbar Navigation | Clicking nav links smoothly scrolls to corresponding section | PASS |
| **TC-02** | Theme Toggle | Clicking Sun/Moon icon toggles dark/light theme and saves preference | PASS |
| **TC-03** | Project Search | Typing "TasteHub" or "React" filters visible cards instantly | PASS |
| **TC-04** | Category Filter | Clicking "JavaScript" shows only JS-tagged projects | PASS |
| **TC-05** | Form Validation | Submitting empty form shows validation errors on required fields | PASS |
| **TC-06** | Email Validation | Entering `invalid-email` triggers "Please enter a valid email address" | PASS |
| **TC-07** | External Links | Clicking GitHub/LinkedIn links opens real profiles in new tab | PASS |
| **TC-08** | Mobile Menu | Hamburger icon toggles mobile navigation drawer cleanly | PASS |
| **TC-09** | Responsive Layout | Layout adapts across Mobile (375px), Tablet (768px), & Desktop (1200px) | PASS |
| **TC-10** | Production Build | `npm run build` generates error-free production bundle in `dist/` | PASS |

---

## 14. Responsive Design

The portfolio implements CSS Media Queries for major viewports:
- **Desktop (> 992px):** Multi-column grid layouts for About cards, Skills, and Projects.
- **Tablet (768px – 992px):** Two-column card grids, responsive hero text sizing.
- **Mobile (< 768px):** Single-column stacked cards, hamburger drawer overlay, full-width touch-friendly buttons, and hidden horizontal overflow.

---

## 15. Future Improvements

1. Integrate GitHub REST API to dynamically display recent commit contributions and repository stars.
2. Build interactive AI/ML mini-demos directly within project cards using browser-based TensorFlow.js models.
3. Add an interactive LeetCode problem counter badge using public GraphQL profile endpoints.

---

## 16. Conclusion

The developer portfolio for **JANGILI MALATHI** successfully fulfills all academic, technical, and design requirements. It offers an honest, professional, and visually compelling showcase of a second-year B.Tech CSE student's journey in software development, web engineering, and AI/ML. Built with React and Vite, the codebase is modular, fully accessible, responsive, and ready for immediate deployment on Vercel.

# Course Browse Page – Undo School

A responsive Course Browse page built with **React (Vite)** and **TailwindCSS**, replicating the reference design with pixel-accurate layout, spacing, and interactive elements.

## Assignment Requirements

### Replicate the Layout
- Built with React and TailwindCSS.
- Spacing, typography, and component placement match the reference (Figma/screenshots).
- Semantic HTML5 (`nav`, `section`, `article`, `button`, etc.) used throughout.

### Responsive Design
- Page works on desktop and mobile.
- Tested at **~375px** (mobile) and **~1440px** (desktop).
- Mobile-first: sections stack, hero text scales, horizontal rows remain scrollable with hidden scrollbars.

### Interactive Elements
- **Hover states**: Cards lift (`translateY`), shadow increases, image scales; buttons and chips have hover/active styles.
- **Clickable buttons**: Login, Register for free, Search, Add to cart (icon), scroll arrows, age chips, time chips, category cards.
- **Search**: Hero search input with magnifying glass icon; placeholder “What do you want to learn today?”
- **Filters**: “How Old Are You?” single-selection chips; “Filter with Time” single-selection chips with two-line labels (e.g. “Morning classes” / “8am - 12pm”).
- All course cards use **dummy data** (e.g. Daniel james, Summer robotics camp, 4.9 rating, 200+ learners, ₹ 299).

### Clean & Maintainable Code
- **Semantic HTML**: `<nav>`, `<section>`, `<article>`, `<button>`, headings in order.
- **Component-based**: Navbar, Hero, FilterChips, CourseCard, CourseRow, TeacherCard, CategoryCard, TimeChips, TimeFilterCard, WebinarSection, SectionHeader.
- **Modular JS**: Reusable components; data in `src/data/` (courses, teachers, categories, ages).
- **Tailwind**: Utility classes in JSX; no inline styles; shared patterns (e.g. scrollbar-hide, transitions).

---

## Enhancements (Creative Freedom)

- **Micro-animations & hover effects**
  - Course/teacher/category cards: `hover:-translate-y-1.5` to `-translate-y-2`, stronger shadow, image `scale-105` on hover; grayscale image that becomes color on hover.
  - Filter chips: active ring (`ring-2 ring-violet-400`), scale on select; hover on inactive chips.
  - Category cards: highlighted (Coding) has orange gradient + lift + scale; others have violet-tinted hover.
- **Scroll UX**
  - Horizontal rows use **scroll arrows** (left/right) and **position indicator** (e.g. “2/5”) for New Launches and Featured Courses.
  - Webinar section has a single right arrow for “more cards”.
- **Visual polish**
  - **Webinar header**: Dotted lines, purple diamond shapes, and alarm-style icon flanking the title.
  - **Time chips**: Two-line layout (e.g. “Morning classes” + “8am - 12pm”) with sun/moon icons.
  - **Category cards**: First card (Coding) highlighted with orange gradient; others use SVG icons (laptop, mic, chess, book, phone, math) for a consistent line-art look.
  - **Course cards**: Rating + learners badge on image (e.g. “4.9 | 200+ learners” with star), “By: Instructor” with small avatar, person/clock icons in footer, and add-to-cart icon.
- **Teacher cards**: Profile image overlapping top edge of card; credentials with vertical divider (e.g. “M.Sc, B.Ed | 15+ Years”); “1000+ Students” and subject pill.
- **Consistent transitions**: `duration-200`/`duration-300` with `ease-out` on interactive elements; `active:scale-[0.98]` on buttons/chips for press feedback.

---

## Folder structure

```
undoschool-browse/
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── SectionHeader.jsx
│   │   ├── FilterChips.jsx
│   │   ├── CourseCard.jsx
│   │   ├── CourseRow.jsx
│   │   ├── WebinarSection.jsx
│   │   ├── TeacherCard.jsx
│   │   ├── CategoryCard.jsx
│   │   ├── TimeFilterCard.jsx
│   │   └── TimeChips.jsx
│   ├── data/
│   │   ├── courses.js
│   │   ├── teachers.js
│   │   ├── categories.js
│   │   └── ages.js
│   ├── pages/
│   │   └── Browse.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173). The browse page is at `/` and `/browse`.

## Build

```bash
npm run build
```

## Features (summary)

- **Navbar**: Logo, Course (active with underline), Login, Register for free (gradient).
- **Hero**: Purple gradient, “Learn a New Skill”, “Everyday, Anytime, and Anywhere.” (yellow), search bar with icon and gradient Search button.
- **How Old Are You?**: Single-selection age chips; subtitle with emojis.
- **New Launches / Featured Courses**: Section title + star, subtitle, horizontal scroll with arrows and position (e.g. 1/5).
- **Learn from Top Teachers**: Subtitle; teacher cards with overlapping avatar, credentials, experience, students, subject pill.
- **Webinar starting within 24 hrs**: Decorative header (dotted lines, diamonds, alarm icon); cards with “Starting at X” tag.
- **Popular Categories**: Subtitle with sparkle; Coding highlighted (orange); other categories with icons.
- **Filter with Time**: Subtitle; time chips (two-line + sun/moon); wide horizontal course cards with rating, “By”, tags, footer with icons and cart.

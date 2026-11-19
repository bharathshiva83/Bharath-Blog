# Palancha Bharath Shiva — Project Memory & Context Tracker

> **Notice for AI Assistants & Future Sessions**:
> Read this file **first** before making any suggestions or changes. This document tracks all architectural decisions, hard constraints, and the complete session history to prevent regressions across context resets.

---

## 1. Project Invariants & Hard Constraints (NEVER VIOLATE)

| Invariant | Rule |
| :--- | :--- |
| **Education** | **STRICTLY JNTUH** (`JNTUH (Jawaharlal Nehru Technological University, Hyderabad)`). **NEVER mention Sphoorthy anywhere** in code, text, or docs. |
| **Socials** | Strictly **LinkedIn** (`palanchabharath`), **GitHub** (`bharathshiva83`), and **Email** (`palanchabharath2828@gmail.com`). **NEVER add Twitter / X.** |
| **Career Domain** | **AI & Computer Vision Engineer** at **EON Space Labs** (multi-sensor PTZ surveillance, YOLOv8/v11, ByteTrack, **30+ FPS**, NVIDIA Jetson Orin/Nano, PyQt5). Not a generic web dev. |
| **Design Style** | **Emil Kowalski craft aesthetic**: centered `max-w-2xl` stream, monochromatic dark/light toggle (`#FFFFFF` / `#080808`), Inter + JetBrains Mono, zero AI slop / gradients. |
| **Communication** | Keep all assistant responses **brief, concise, and direct** — no long fluffy paragraphs. |
| **Single Source of Truth** | All bio, experiences, skills, projects, and resume data live in [`src/data/profile.ts`](file:///c:/Users/BHARATH%20SHIVA/Documents/GitHub/Bharath%20Blog/src/data/profile.ts). |
| **Dev Toolbar** | Keep Astro dev toolbar **disabled** (`devToolbar: { enabled: false }` in `astro.config.mjs`) to avoid bottom island/cursor widgets. |

---

## 2. Technical Stack & Live URLs

- **Framework**: Astro 4.16 + TypeScript + Tailwind CSS (via `@astrojs/tailwind`)
- **Content Collections**: Markdown posts in `src/content/blog/`
- **Hosting**: Free GitHub Pages
- **CI/CD**: GitHub Actions via `.github/workflows/deploy.yml` with `Source: GitHub Actions`
- **Live Site**: [https://bharathshiva83.github.io/Bharath-Blog/](https://bharathshiva83.github.io/Bharath-Blog/)
- **Live Resume Page**: [https://bharathshiva83.github.io/Bharath-Blog/resume](https://bharathshiva83.github.io/Bharath-Blog/resume)
- **Live Resume PDF**: [https://bharathshiva83.github.io/Bharath-Blog/resume.pdf](https://bharathshiva83.github.io/Bharath-Blog/resume.pdf)

---

## 3. Where to Edit Project Content

All website data is controlled from a single configuration file: **[`src/data/profile.ts`](file:///c:/Users/BHARATH%20SHIVA/Documents/GitHub/Bharath%20Blog/src/data/profile.ts)**:

| Section | Location in `src/data/profile.ts` |
| :--- | :--- |
| **Tagline & Bio** | `personalInfo.tagline`, `personalInfo.about` |
| **Availability Badge** | `personalInfo.status` |
| **Work Experience** | `experiences` array (roles, companies, dates, impact bullets) |
| **Projects** | `projects` array (titles, descriptions, tags, GitHub links) |
| **Skills** | `skills` array (categories and comma-separated items) |
| **Education** | `education` object (JNTUH) |
| **Publications** | `publications` array (title, journal, date, DOI, paper PDF link) |
| **Resume PDF Path** | `resume.pdfUrl` (set to `"/Bharath-Blog/resume.pdf"`) |
| **New Articles** | Create `.md` files in `src/content/blog/` |

---

## 4. Resume & Download Architecture

- **PDF Storage**: The physical resume is placed at [`public/resume.pdf`](file:///c:/Users/BHARATH%20SHIVA/Documents/GitHub/Bharath%20Blog/public/resume.pdf).
- **Download Behavior**: Chromium/Edge internal PDF viewer intercepts plain PDF links. To guarantee a native file download directly into the user's `Downloads` folder:
  1. The page pre-loads the PDF into memory as a `blob:` URL upon page load.
  2. Vite/dev server sets `Content-Disposition: attachment; filename="Palancha_Bharath_Shiva_Resume.pdf"`.
- **View in Browser**: The **"View PDF ↗"** button opens the document inside the browser's native PDF reader.
- **Print / Save**: The **"Print"** button triggers `@media print` CSS, hiding header, footer, and dark backgrounds for clean 1-page paper printing or saving.

---

## 5. Chronological Session & Decision History

### Session 1: Migration & Emil Kowalski Redesign
- Replaced old Jekyll setup with Astro 4.16 + Tailwind CSS.
- Applied Emil Kowalski design principles (streamlined reading layout, high-contrast dark/light mode, micro-interactions).

### Session 2: Profile & Resume Alignment
- Ingested Palancha Bharath Shiva's official resume.
- Specialization: AI & Computer Vision Engineer at EON Space Labs (multi-sensor PTZ, YOLOv8/v11, ByteTrack, super-resolution).
- Implemented **JNTUH** education constraint (completely purged any mention of Sphoorthy).
- Integrated peer-reviewed research paper: *Bone Fracture Detection with Deep Learning and Ensemble of CNN Models in X-Ray Images* (IJARSCT, May 2025) with direct Paper PDF (`https://www.ijarsct.co.in/Paper26934.pdf`) and DOI links.

### Session 3: UI Polish, Cleanup & Download Reliability
- Disabled Astro dev toolbar (`devToolbar: { enabled: false }`) to eliminate the floating bottom island/cursor widget.
- Cleaned repository: Deleted all legacy Jekyll folders (`_data/`, `_includes/`, `_layouts/`, `_posts/`, `assets/`, `_config.yml`, `404.html`, etc.).
- Fixed resume download via pre-loaded Blob URL mechanism to prevent browser PDF viewer interception.
- Synchronized all FPS references from `20+ FPS` to `30+ FPS` across resume summary, job bullets, and project cards.
- Configured GitHub Actions Pages deployment (`Source: GitHub Actions`), verified live production build at `https://bharathshiva83.github.io/Bharath-Blog/`.



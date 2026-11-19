# Palancha Bharath Shiva — Personal Website & Technical Portfolio

## 1. Overview
- **Owner**: Palancha Bharath Shiva
- **Role**: AI & Computer Vision Engineer (EON Space Labs)
- **Education**: B.Tech in Computer Science & Data Science — JNTUH (Jawaharlal Nehru Technological University, Hyderabad)
- **GitHub**: [bharathshiva83](https://github.com/bharathshiva83)
- **LinkedIn**: [palanchabharath](https://www.linkedin.com/in/palanchabharath)
- **Email**: palanchabharath2828@gmail.com
- **Design Philosophy**: Minimalist, craft-driven design inspired by Emil Kowalski (clean typography, focused `max-w-2xl` reading stream, neutral monochromatic palette, zero AI slop, no Twitter/X).
- **Hosting**: Free GitHub Pages with automated CI/CD via GitHub Actions.

---

## 2. Where to Edit Your Content

Everything on your website is controlled by **[src/data/profile.ts](file:///c:/Users/BHARATH%20SHIVA/Documents/GitHub/Bharath%20Blog/src/data/profile.ts)**:

| Section | What to Edit in `src/data/profile.ts` |
| :--- | :--- |
| **Personal Bio & Tagline** | `personalInfo.tagline`, `personalInfo.about` |
| **Status Badge** | `personalInfo.status` (`"Available for work"`, `"Open to roles"`, etc.) |
| **Work Experience** | `experiences` array (roles, companies, dates, impact bullets) |
| **Projects** | `projects` array (titles, descriptions, tags, code/live links) |
| **Resume PDF File** | `resume.pdfUrl` (place file in `public/resume.pdf` or paste Google Drive link) |
| **Resume Summary** | `resume.summary` |
| **Resume Skills & Certs** | `skills` array & `resume.certifications` array |
| **Education** | `education` object |
| **New Blog Posts** | Create `.md` files in `src/content/blog/` |

---

## 3. How to Update Your Resume PDF

1. Save your resume PDF as **`resume.pdf`** inside the **`public/`** folder:
   ```text
   public/
   └── resume.pdf
   ```
2. In `src/data/profile.ts`, `resume.pdfUrl` is already configured to `"/Bharath-Blog/resume.pdf"`.
   *(Or if you prefer Google Drive/Dropbox, simply paste the share link into `resume.pdfUrl`).*
3. The **"Download PDF"** button on the `/resume` page will instantly download your PDF!

---

## 4. Deploying Updates Live

```bash
git add .
git commit -m "update details"
git push origin main
```
GitHub Actions builds and publishes changes live to `https://bharathshiva83.github.io/Bharath-Blog/`.

---

## 5. Architectural Decisions & Changelog

### Key Decisions Made:
1. **Tech Stack Migration**: Migrated from legacy Jekyll to **Astro 4 + Tailwind CSS + TypeScript + Content Collections**. Fast static generation and zero runtime JS overhead.
2. **Design Philosophy**: Emil Kowalski minimalist aesthetic (centered `max-w-2xl` stream, monochromatic dark/light toggle, Inter & JetBrains Mono typography, zero AI gradients/rainbow slop).
3. **Single Source of Truth**: All personal bio, experiences, projects, skills, and resume data centralized in [`src/data/profile.ts`](file:///c:/Users/BHARATH%20SHIVA/Documents/GitHub/Bharath%20Blog/src/data/profile.ts). Editing one file updates the entire site.
4. **Education Constraint**: Strictly specified as **JNTUH (Jawaharlal Nehru Technological University, Hyderabad)**. Sphoorthy strictly omitted from all pages.
5. **Socials Policy**: Strictly LinkedIn, GitHub, and Email (zero Twitter/X references).
6. **Domain Focus**: Tailored to **AI & Computer Vision Engineer** at **EON Space Labs** (multi-sensor PTZ, YOLOv8/v11, ByteTrack, 30+ FPS, NVIDIA Jetson, super-resolution).
7. **Research Publication**: Showcased *Bone Fracture Detection with Deep Learning and Ensemble of CNN Models in X-Ray Images* (IJARSCT) with direct paper PDF and DOI links.
8. **Dev Toolbar Removal**: Disabled Astro dev toolbar (`devToolbar: { enabled: false }`) to eliminate the floating bottom island/cursor widget.
9. **Reliable Resume Download**: Implemented preloaded Blob URL download + `Content-Disposition: attachment` headers to prevent Chrome/Edge from hijacking downloads into their internal viewer. Added **"View PDF"** and `@media print` styles.
10. **Repository Cleanup**: Pruned all legacy Jekyll files (`_data/`, `_includes/`, `_layouts/`, `_posts/`, `assets/`, `_config.yml`, `404.html`, `build-preview.js`, etc.).
11. **Hosting & CI/CD**: Free GitHub Pages automated via `.github/workflows/deploy.yml` with `Source: GitHub Actions`.
12. **Security & Privacy**: Verified zero API keys or secrets in repository. Added `.env*` to `.gitignore`. Code is public on GitHub (standard for engineers).


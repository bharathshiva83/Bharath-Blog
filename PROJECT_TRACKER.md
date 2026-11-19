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
git commit -m "update resume and profile details"
git push origin main
```
GitHub Actions builds and publishes changes live to `https://bharathshiva83.github.io/Bharath-Blog/`.

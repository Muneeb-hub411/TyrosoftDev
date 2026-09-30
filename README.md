# Tyrosoft Dev — Production Marketing & Engineering Platform

Tyrosoft Dev is a high-impact software engineering agency and AI automation company. This repository contains the complete Next.js 15 (App Router) production marketing website built with TypeScript, Tailwind CSS, Framer Motion, and Lucide Icons.

---

## 🌟 Key Features

- **Dark Editorial Aesthetic**: Deep near-black background (`#07050B`), dark purple card surfaces (`#0F0B16`), and exact brand purple (`#6D28D9`) accents.
- **AI Automation Spotlight**: Interactive before/after operational cost-reduction comparison with automated metrics.
- **8 Core Capability Blocks**: Complete breakdown for Web Dev, App Dev, Graphic Design, Video Editing, Marketing, IT Support, Free Consultation, and AI Automation.
- **Filterable Work Portfolio**: Interactive category filters (Web, App, Design, Video, Automation) with project detail modals.
- **Email-Ready Contact Route Handler**: Working contact form with server-side validation and Resend/SMTP integration support (`/api/contact`).
- **Cursor-Following Spotlight Cards**: Micro-interactions with mouse-tracking radial purple glow effects.
- **SEO & Accessibility Ready**: OpenGraph metadata, JSON-LD Organization schema, dynamic `sitemap.xml`, `robots.txt`, and full keyboard/screen-reader accessibility (`prefers-reduced-motion` respected).

---

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animation**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Space Grotesk (Headings), Inter (Body), JetBrains Mono (Badges)

---

## 🚀 Quick Start

### 1. Prerequisites
Ensure you have **Node.js 18.x+** and **npm** installed.

### 2. Install Dependencies
```bash
npm install
```

### 3. Environment Setup
Copy `.env.example` to `.env.local`:
```bash
cp .env.example .env.local
```

Configure your email credentials if you want live form submissions routed to your inbox via Resend:
```env
RESEND_API_KEY=re_123456789_abcdefg
CONTACT_RECEIVER_EMAIL=hello@tyrosoftdev.com
```

### 4. Run Locally
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📦 Vercel Deployment

Deploying to Vercel takes less than 2 minutes:

1. Push your repository to GitHub / GitLab / Bitbucket.
2. Import the project into your [Vercel Dashboard](https://vercel.com/new).
3. Set the Environment Variables (`RESEND_API_KEY`, `CONTACT_RECEIVER_EMAIL`) in the Vercel project settings.
4. Click **Deploy**. Vercel will automatically build and deploy the Next.js App Router application to global edge networks.

---

## 📝 Replacing Placeholder Content

All application data is centralized in typed data files under `src/data/` for easy editing:

1. **Client Testimonials (`src/data/testimonials.ts`)**:
   - Replace placeholder author names (`[REPLACE: Marcus Vance]`), positions, and quotes with verified client testimonials.
2. **Company Contact Details (`src/data/company.ts`)**:
   - Update official email, phone number, physical address, and social media links.
3. **Portfolio Case Studies (`src/data/projects.ts`)**:
   - Add your actual client project stories, live URLs, and screenshots.

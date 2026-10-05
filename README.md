# 🎬 Vardox Studio

Vardox Studio is a modern creative marketing website for a video-first creative agency. Built with Next.js, React, TypeScript, and Tailwind CSS, the site showcases the studio’s brand identity, services, portfolio, team, and contact pathways in a polished, conversion-focused experience.

This project is designed as a high-impact agency landing site for businesses that want video production, branding, social media content, advertising campaigns, and creative storytelling support.

## 🌐 Overview

Vardox Studio helps brands grow through:

- Video production and editing
- Social media content strategy and execution
- Branding and visual design
- Advertising campaigns and paid media support
- Influencer marketing and audience engagement
- Creative consulting and campaign storytelling

The website includes a responsive homepage, dedicated services page, portfolio gallery, about section, FAQ, blog area, and contact pages that drive leads to the studio.

## 🛠️ Tech Stack

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS
- Framer Motion
- Radix UI components
- Three.js / React Three Fiber
- Lucide icons and custom UI elements
- Render deployment configuration

## 📁 Project Structure

```text
.
├── public/                     # Static assets and public media
├── src/
│   ├── app/                   # App router pages and route entry points
│   │   ├── about/
│   │   ├── blog/
│   │   ├── contact/
│   │   ├── portfolio/
│   │   ├── services/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/            # Reusable sections and UI elements
│   │   ├── sections/
│   │   └── ui/
│   ├── context/               # Context providers
│   ├── data/                  # Service and page data
│   ├── hooks/                 # Custom hooks
│   └── lib/                   # Utility helpers
├── .eslintrc.* / eslint.config.mjs
├── next.config.mjs
├── package.json
├── render.yaml
├── tsconfig.json
├── postcss.config.mjs
├── README.md
└── cspell.json
```

## ✨ Features

- Responsive multi-page agency website
- Animated hero, call-to-action, and service previews
- Service detail sections with branded content blocks
- Portfolio showcase with filters and embedded media
- About and team storytelling sections
- FAQ and conversion-focused lead generation
- Contact form and contact details for direct outreach
- Floating CTA and interactive navigation improvements
- Modern dark/light creative visual language with motion effects

## 📄 Pages

The app includes dedicated routes for:

- Home: `/`
- About: `/about`
- Services: `/services`
- Portfolio: `/portfolio`
- Blog: `/blog`
- Contact: `/contact`

## 🚀 Getting Started

### Prerequisites

- Node.js 20+
- npm

### Install dependencies

```bash
npm install
```

### Run locally

```bash
npm run dev
```

Then open http://localhost:3000 in your browser.

## ▶️ Available Scripts

```bash
npm run dev     # Start the development server
npm run build   # Create a production build
npm run start   # Start the production server
npm run lint    # Run ESLint checks
```

## 🌍 Deployment

This project includes a Render deployment configuration in `render.yaml`.

Typical deployment flow:

1. Push the project to your Git repository.
2. Connect the repo to Render or another hosting platform.
3. Use the existing build and start commands.
4. Deploy the app and verify the production build.

### Render configuration

```yaml
services:
  - type: web
    name: vardoxstudio
    env: node
    buildCommand: npm install && npm run build
    startCommand: npm start
```

## 🎨 Customization

To adapt the site for a different studio or agency brand:

- Update metadata in `src/app/layout.tsx`
- Edit homepage sections in `src/app/page.tsx`
- Modify content in the service and portfolio data files under `src/components` and `src/data`
- Replace branding assets, colors, and imagery with your own visuals
- Update contact information in the contact-related sections and footer

## 📝 Notes

This is a marketing-focused website rather than a CMS-backed application, so content is primarily defined in component files and local data structures. If you want to extend it with a CMS, email workflow, or form backend, you can easily add those integrations on top of the current structure.

## License

This project does not currently include a custom license file. If you are working in a team or client environment, confirm licensing and usage rights before publishing or reusing the codebase commercially.

## 💬 Support

For project questions, content updates, or deployment help, contact the studio or maintainers through the existing contact sections in the website.

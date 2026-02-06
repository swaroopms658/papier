# Papier Creations - Website Clone

A modern React-based clone of the Papier Creations website with improved UI/UX.

## Tech Stack

- **React** (Vite)
- **Tailwind CSS** for styling
- **React Router** for navigation

## Getting Started

```bash
cd papier-clone
npm install
npm run dev
```

Then open `http://localhost:5173` in your browser.

## Project Structure

```
src/
├── components/     # Reusable UI components
│   ├── Header.jsx
│   ├── Footer.jsx
│   ├── Hero.jsx
│   ├── CategoryCard.jsx
│   └── ProductCard.jsx
├── pages/          # Page components
│   ├── Home.jsx
│   ├── About.jsx
│   ├── Contact.jsx
│   ├── Products.jsx
│   ├── Category.jsx
│   ├── ProductDetail.jsx
│   ├── Capabilities.jsx
│   └── Brands.jsx
├── data/           # Static data (simulating CMS)
│   └── siteData.js
└── App.jsx         # Main app with routing
```

## Features

- **Responsive Design** - Mobile-first approach
- **Product Categories** - 8 hygiene product categories
- **Product Listing** - Filter by category
- **Contact Form** - Functional enquiry form
- **Modern UI** - Smooth animations, hover effects

## Pages

| Page | Route |
|------|-------|
| Home | `/` |
| About | `/about` |
| Products | `/products` |
| Category | `/category/:slug` |
| Product Detail | `/product/:id` |
| Brands | `/brands` |
| Capabilities | `/capabilities` |
| Contact | `/contact` |

## Brand Colors

- Primary: `#1a4d2e` (Dark Green)
- Accent: `#4caf50` (Green)

## Deployment

Build for production:

```bash
npm run build
```

Deploy the `dist` folder to Vercel, Netlify, or any static host.

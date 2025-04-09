## 🌟 anthonycole.fyi

### Background
When I built this site I wanted to be intentional with my design, I prioritised building a content-focused, simple platform that prioritizes simplicity, performance, and maintainability. The site was built with React, Next, and Tailwind and uses markdown for content management. I've also set up [commitlint](https://commitlint.js.org/) and ESLint.

## 🛠️ Technology Choices

### ⚛️ Next.js (App Router)

Next.js was chosen for several reasons:

- **🚀 Server Components**: Leveraging React Server Components for improved performance and SEO
- **🗂️ App Router**: Using the modern file-based routing system for intuitive organization
- **⚡ Built-in Optimizations**: Image optimization, code splitting, and other performance features
- **📝 TypeScript Support**: Strong typing for better developer experience and code quality

### 🎨 Tailwind CSS 4

The latest version of Tailwind CSS was selected for styling because of the following:

- **🧩 Utility-First Approach**: Rapid development without leaving HTML
- **🪶 Zero Runtime**: No CSS-in-JS performance overhead
- **🔧 Highly Customizable**: Easy to maintain a consistent design system
- **📦 Small Bundle Size**: Only includes the utilities actually used

### 📄 Markdown for Content

Content is stored in markdown files rather than a database or CMS:

- **🔍 Simplicity**: No database setup or management required
- **📜 Version Control**: Content changes can be tracked in Git
- **👨‍💻 Developer-Friendly**: Easy to edit and preview locally
- **🧳 Portable**: Content can be easily migrated to other systems

## 📂 Project Structure

```
personal-site/
├── app/                  # Next.js App Router pages
│   ├── about/            # About page
│   ├── globals.css       # Global styles
│   ├── layout.tsx        # Root layout component
│   └── page.tsx          # Home page
├── components/           # Reusable React components
│   ├── header.tsx        # Site header with navigation
│   └── markdown-content.tsx # Markdown rendering component
├── content/              # Markdown content files
│   ├── about.md          # About page content
│   └── home.md           # Home page content
├── lib/                  # Utility functions
│   └── mdx.ts            # Markdown processing utilities
├── public/               # Static assets
├── tailwind.config.ts    # Tailwind CSS configuration
└── postcss.config.js     # PostCSS configuration
```

## 💭 Design Philosophy

The design follows a minimalist approach inspired by anthonycole.fyi:

- **📝 Content-First**: Typography and spacing prioritize readability
- **🧘‍♂️ Minimal Styling**: Limited color palette and visual elements
- **📱 Responsive Design**: Works seamlessly on all device sizes
- **♿ Accessibility**: High contrast text and semantic HTML

## ⚡ Performance Considerations

This architecture was chosen with performance in mind:

- **🏗️ Static Generation**: Pages are pre-rendered at build time
- **🪶 Minimal JavaScript**: Limited client-side JS for faster loading
- **✂️ CSS Optimization**: Tailwind automatically removes unused styles
- **🖼️ Image Optimization**: Next.js handles image optimization

## 🚀 Getting Started

### 📋 Prerequisites

- Node.js 23.0 or later
- [nvm](https://github.com/nvm-sh/nvm)
- [pnpm](https://pnpm.io/)

### 💻 Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/anthonycole/anthonycole.fyi.git
   cd anthonycole.fyi

2. Run `pnpm i`

### 💻 Local Setup

1. Run `pnpm dev`
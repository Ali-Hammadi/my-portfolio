# Ali Hammadi — Portfolio

Personal portfolio website for Ali Hammadi, a Flutter developer and final-year Informatics Engineering student. The site presents professional experience, technical skills, featured projects, project case studies, and contact links.

**Live website:** [aliehammadi.me](https://aliehammadi.me)

## Features

- Responsive portfolio layout built with React and Tailwind CSS
- English and Arabic language support
- Right-to-left layout support for Arabic
- Featured project cards with detailed case-study modals
- Project galleries and technology tags
- Experience, education, skills, and contact sections
- CV download link
- SEO metadata, Open Graph metadata, sitemap, and structured data

## Tech Stack

- [React 18](https://react.dev/)
- [Vite 5](https://vite.dev/)
- [Tailwind CSS 3](https://tailwindcss.com/)
- JavaScript (ES modules)
- Firebase, Django REST, and Flutter project content showcased in the portfolio

## Getting Started

### Prerequisites

- Node.js 18 or later
- npm

### Installation

Clone the repository and install its dependencies:

```bash
git clone https://github.com/Ali-Hammadi/my-portifolio.git
cd my-portifolio
npm install
```

### Development

Start the local development server:

```bash
npm run dev
```

Vite will print the local URL in the terminal, usually `http://localhost:5173`.

### Production build

Create an optimized production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Starts the Vite development server |
| `npm run build` | Builds the application for production |
| `npm run preview` | Serves the production build locally |

## Project Structure

```text
.
├── public/              # Static images, CV files, sitemap, and robots.txt
├── src/
│   ├── components/      # Layout, sections, project modal, and reusable UI
│   ├── data/            # Portfolio content, case studies, and translations
│   ├── hooks/           # Language state and body-scroll behavior
│   ├── App.jsx          # Main application composition
│   ├── index.css        # Global styles
│   └── main.jsx         # React entry point
├── index.html           # HTML entry point and SEO metadata
└── package.json         # Project scripts and dependencies
```

## Updating Portfolio Content

Most portfolio content is maintained in [`src/data/portfolioData.js`](./src/data/portfolioData.js), [`src/data/caseStudies.js`](./src/data/caseStudies.js), and [`src/data/translations.js`](./src/data/translations.js).

- Add or update projects in `portfolioData.js`.
- Add detailed project case studies in `caseStudies.js`.
- Update English and Arabic interface text in `translations.js`.
- Place new static images and documents in `public/`.

## Contact

- [GitHub](https://github.com/Ali-Hammadi)
- [LinkedIn](https://www.linkedin.com/in/aliehammadi)
- [Telegram](https://t.me/aliehammadi)
- [Email](mailto:hamadea524@gmail.com)

## License

This repository contains a personal portfolio website. Unless otherwise stated, the source code and portfolio content are personal property of Ali Hammadi.

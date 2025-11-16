# Bonjour Agency - Premium Digital Solutions

A modern, premium agency website showcasing services in web development, AI solutions, POS systems, and social media management. Built with Next.js 14, TypeScript, and featuring stunning 3D animations.

## Features

- **Modern Design**: Premium black & white theme with smooth animations
- **3D Elements**: Interactive Three.js components throughout the site
- **Responsive**: Fully responsive design that works on all devices
- **Performance**: Optimized for fast loading and excellent Core Web Vitals
- **SEO Ready**: Built-in SEO optimization and metadata
- **Multiple Pages**: Comprehensive multi-page website with 11+ pages

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **3D Graphics**: Three.js, React Three Fiber, Drei
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment Ready**: Optimized for Vercel deployment

## Pages

1. **Home** (`/`) - Hero section with 3D sphere, services overview, stats, and CTA
2. **Services** (`/services`) - Overview of all services with detailed descriptions
3. **Web Development** (`/services/web-development`) - Dedicated service page with 3D cube
4. **POS Systems** (`/services/pos-systems`) - POS solutions showcase
5. **AI Solutions** (`/services/ai-solutions`) - AI capabilities and use cases
6. **Social Media** (`/services/social-media`) - Social media management services
7. **About** (`/about`) - Company mission, vision, values, and journey
8. **Portfolio** (`/portfolio`) - Case studies and project showcases
9. **Team** (`/team`) - Team members and company culture
10. **Testimonials** (`/testimonials`) - Client testimonials and reviews
11. **Contact** (`/contact`) - Contact form and information

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm, yarn, or pnpm package manager

### Installation

1. Clone the repository:
\`\`\`bash
git clone <repository-url>
cd bounjour
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
# or
yarn install
# or
pnpm install
\`\`\`

3. Run the development server:
\`\`\`bash
npm run dev
# or
yarn dev
# or
pnpm dev
\`\`\`

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

\`\`\`
bounjour/
├── app/                    # Next.js app directory
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── portfolio/         # Portfolio page
│   ├── services/          # Services pages
│   │   ├── ai-solutions/
│   │   ├── pos-systems/
│   │   ├── social-media/
│   │   └── web-development/
│   ├── team/              # Team page
│   ├── testimonials/      # Testimonials page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # Reusable components
│   ├── 3d/               # 3D components
│   │   ├── FloatingCube.tsx
│   │   ├── ParticleField.tsx
│   │   └── Scene3D.tsx
│   ├── Footer.tsx
│   └── Navigation.tsx
├── lib/                   # Utility functions
│   └── utils.ts
├── public/               # Static files
├── next.config.js        # Next.js configuration
├── tailwind.config.ts    # Tailwind configuration
├── tsconfig.json         # TypeScript configuration
└── package.json          # Dependencies
\`\`\`

## Customization

### Colors

The color scheme is defined in `tailwind.config.ts`. The default theme uses black and white:

- Primary: Black (#000000)
- Secondary: White (#ffffff)
- Accent colors for highlights and interactions

### Content

Update the content in each page file:
- Company information in `components/Footer.tsx`
- Navigation items in `components/Navigation.tsx`
- Services data in respective service pages
- Team members in `app/team/page.tsx`
- Testimonials in `app/testimonials/page.tsx`

### 3D Components

3D components are located in `components/3d/`. Each component uses:
- `@react-three/fiber` for React integration
- `@react-three/drei` for helpful abstractions
- Three.js for 3D graphics

## Build for Production

\`\`\`bash
npm run build
npm start
\`\`\`

## Deployment

This project is optimized for deployment on Vercel:

1. Push your code to GitHub
2. Import the project in Vercel
3. Deploy with one click

Alternatively, deploy to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Digital Ocean
- Railway

## Performance Optimizations

- Dynamic imports for 3D components (client-side only)
- Optimized images and assets
- Code splitting and lazy loading
- Minimal external dependencies
- Tree-shaking enabled

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is proprietary software owned by Bonjour Agency.

## Contact

For inquiries about this project:
- Email: hello@bonjour.agency
- Website: [Coming Soon]

---

Built with ❤️ by Bonjour Agency

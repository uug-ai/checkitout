# Dreamland Festival - Example Application

A demonstration application showcasing React plugin components through a complete festival website experience.

## About the Project

This example application demonstrates plugin functionality through **Dreamland**, a fictional electronic music festival website inspired by Tomorrowland. The application showcases modern React development practices and component integration.

### Features

🎪 **Festival Home Page**
- Hero section with festival branding and call-to-action
- Artist lineup grid with headliner showcase
- News section with latest announcements
- Features grid highlighting festival statistics
- Responsive design with festival-themed styling

🎫 **Ticket Shop**
- Multiple ticket tiers (Day Pass, 3-Day Pass, VIP, Student, etc.)
- Dynamic pricing with original/discounted prices
- Popular and sold-out badges
- Interactive purchase flow
- Free ticket giveaway feature

🧭 **Navigation**
- React Router DOM for seamless page transitions
- Clean navigation bar
- Responsive mobile-friendly design

## Quick Start

### Development Mode

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view the application in development mode with hot reload.

### Build for Production

```bash
npm run build
```

Builds the app for production in the `dist` folder with optimized bundles.

### Preview Production Build

```bash
npm run preview
```

Preview the production build locally before deployment.

### Code Quality

```bash
npm run lint
```

Run ESLint to check code quality and fix issues.

## Project Structure

```
src/
├── components/     # Reusable components
│   └── Navbar.tsx
├── pages/         # Route components
│   ├── Home.tsx   # Festival landing page
│   └── Shop.tsx   # Ticket purchasing
├── assets/        # Static assets
├── App.tsx        # Main app component with routing
└── main.tsx       # Application entry point
```

## Technologies Used

- **React 19** with TypeScript
- **React Router DOM** for navigation
- **Vite** for build tooling and development server
- **ESLint** for code quality
- **CSS3** for styling with modern techniques

## Festival Theme

The Dreamland theme features:
- **Colors**: Rich purples, golds, and gradients
- **Typography**: Modern, bold headings with clean body text  
- **Layout**: Grid-based design with card components
- **Interactive Elements**: Hover effects and smooth transitions

This example serves as both a demonstration of the plugin components and a showcase of modern React application development.

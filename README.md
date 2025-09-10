# CheckItOut

A React plugin library with modal functionality and a demo application showcase.

## Project Structure

This repository contains two main projects:

### 🔧 Plugin (`/plugin`)
A React component library that provides reusable UI components including:
- `PluginButton` - A button component that opens a modal
- `Modal` - A customizable modal component

**Built with:** React 19, TypeScript, Vite

### 🎪 Example (`/example`) 
A demonstration application showcasing the plugin components. Features a complete festival website called "Dreamland" - a Tomorrowland-style electronic music festival site with:
- Festival home page with lineup, news, and hero sections
- Ticket shop with various pricing tiers and purchase options
- React Router navigation between pages

**Built with:** React 19, TypeScript, Vite, React Router DOM

## Quick Start

### Plugin Development

```bash
cd plugin
npm install
npm run dev     # Start development server
npm run build   # Build for production
npm run lint    # Run ESLint
```

### Example Application

```bash
cd example
npm install
npm run dev     # Start development server
npm run build   # Build for production  
npm run lint    # Run ESLint
```

## Building Both Projects

To build both the plugin and example applications:

```bash
# Build plugin first
cd plugin && npm install && npm run build

# Then build example
cd ../example && npm install && npm run build
```

## Development

1. **Plugin Development**: Make changes to components in `/plugin/src/`
2. **Example Testing**: Use the example application to test plugin components
3. **Building**: Both projects use Vite for fast builds and hot reload during development

## Scripts Available

Both projects include these npm scripts:
- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run lint` - Run ESLint for code quality
- `npm run preview` - Preview production build locally

## Technologies Used

- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite** - Fast build tool and dev server
- **ESLint** - Code linting
- **React Router DOM** - Client-side routing (example only)
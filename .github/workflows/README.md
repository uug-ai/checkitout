# GitHub Actions for Dreamland Festival Website

This repository includes GitHub Actions workflows to ensure the React Vite application builds successfully.

## Workflows

### 🔄 CI - Example Website (`ci.yml`)
**Recommended workflow** - Simple, focused, and efficient.

- **Triggers**: Push to `main`/`develop`, PRs to `main`/`develop`
- **Node.js**: Version 20
- **Steps**:
  1. 📋 Install dependencies with `npm ci`
  2. 🔍 Lint code with ESLint
  3. 🔧 Type check with TypeScript
  4. 🏗️ Build the application
  5. ✅ Verify build output exists
  6. 📤 Upload build artifacts

### 🧪 Build React Vite Example (`build-react-vite.yml`)
**Comprehensive workflow** - Tests multiple Node.js versions and includes preview testing.

- **Triggers**: Push/PR on multiple branches with `example/` path changes
- **Node.js**: Matrix testing on versions 18.x and 20.x
- **Features**:
  - Multi-version compatibility testing
  - Build verification
  - Preview server testing
  - Artifact upload

## Build Verification

Both workflows ensure:
- ✅ Dependencies install correctly
- ✅ Code passes ESLint checks
- ✅ TypeScript compiles without errors
- ✅ Vite build completes successfully
- ✅ Required build files are generated (`dist/index.html`, `dist/assets/`)
- ✅ Build artifacts are preserved

## Usage

The workflows will automatically run when:
- Code is pushed to protected branches
- Pull requests are created
- Changes are made to files in the `example/` directory

## Local Testing

To run the same checks locally:

```bash
cd example

# Install dependencies
npm ci

# Lint code
npm run lint

# Type check
npx tsc --noEmit

# Build application
npm run build

# Preview build (optional)
npm run preview
```

## Artifacts

Successful builds are uploaded as GitHub artifacts and retained for 30 days (CI workflow) or 7 days (build workflow). These can be downloaded from the Actions tab for testing or deployment purposes.

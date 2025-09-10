# Checkout Plugin - Standalone Usage

## Quick Start (Standalone)

The checkout plugin can be included as a single, self-contained JavaScript file in any website:

### 1. Download the Files
- `dist/checkout-plugin.umd.cjs` - The main JavaScript file (includes React)
- `dist/checkout-plugin.css` - Styles for the plugin

### 2. Include in Your HTML
```html
<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" href="checkout-plugin.css">
</head>
<body>
    <div id="my-checkout"></div>
    
    <script src="checkout-plugin.umd.cjs"></script>
    <script>
        // The plugin is now available as CheckoutPlugin
        console.log(CheckoutPlugin);
        
        // Use CheckoutPlugin.default to access the main component
        // (implementation depends on your plugin's API)
    </script>
</body>
</html>
```

### 3. Features
- ✅ **Fully self-contained** - No external dependencies required
- ✅ **React included** - Complete React runtime bundled
- ✅ **Browser compatible** - Works in any modern browser
- ✅ **No build tools needed** - Just include the files and go

### File Sizes
- JavaScript: ~200KB (includes React runtime)
- CSS: ~5KB

## Development
```bash
npm install
npm run build
```

The build creates:
- `dist/checkout-plugin.umd.cjs` - Standalone UMD bundle
- `dist/checkout-plugin.css` - Styles

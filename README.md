# Ersi Sallaku - Digital Graphic Designer Portfolio

A portfolio website showcasing design work and creative projects.

## Vercel Speed Insights Integration

This project includes [Vercel Speed Insights](https://vercel.com/docs/speed-insights) to monitor and optimize website performance.

### Setup

The Speed Insights integration is implemented using the `@vercel/speed-insights` package bundled into a standalone JavaScript file.

### Installation

```bash
npm install
```

### Building

To rebuild the Speed Insights bundle:

```bash
npm run build
```

This creates `dist/speed-insights.bundle.js` which is loaded by the website.

### How it Works

1. The `speed-insights.js` file imports and initializes the Vercel Speed Insights library
2. The build script bundles it into `dist/speed-insights.bundle.js`
3. The HTML file includes this bundle via a script tag in the `<head>` section
4. Speed Insights automatically tracks Core Web Vitals and performance metrics when the site is deployed on Vercel

### Deployment

When deployed to Vercel:
1. Enable Speed Insights in your Vercel project dashboard
2. Deploy the site with the included files
3. Performance data will start appearing in the Vercel dashboard

### Files

- `speed-insights.js` - Source file that initializes Speed Insights
- `dist/speed-insights.bundle.js` - Bundled JavaScript (generated, do not edit)
- `package.json` - Dependencies and build configuration

## License

ISC

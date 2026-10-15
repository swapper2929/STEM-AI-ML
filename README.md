# AI STEM Lab

A static, browser-first STEM learning platform that follows the Godot-inspired scientific workbench model described in the project specification. This repository is the foundation for the phased implementation of the High School Machine Learning Laboratory.

## Current status

This scaffold is intentionally honest about progress:
- Core application shell is implemented.
- Two interactive demo modules are functional in-browser.
- A full 30-module registry is registered in the app and documented in the UI.
- Remaining modules are intentionally tracked as planned / integrating rather than falsely marked complete.

## Included functionality

- Dark scientific workbench layout
- Left navigator with module categories
- Central workspace with live module rendering
- Right inspector with module-specific controls
- Bottom panel with console, metrics, logs, dataset, and help tabs
- Responsive layout for desktop and tablet screens
- GitHub Pages compatible base path configuration
- Offline-ready manifest and service worker registration hook

## Active demo modules

- Neural Playground
- Polynomial Regression Lab

## Quick start

```bash
npm install
npm run dev
```

Then open the local Vite URL printed in the terminal.

## Production build

```bash
npm run build
```

The production bundle is created in the `dist/` directory.

## GitHub Pages deployment

This app is configured with `base: './'` for static hosting compatibility. Upload the generated `dist/` folder to GitHub Pages or deploy it using a GitHub Actions workflow.

## Module registry and roadmap

The app includes a 30-module registry with the following categories:
- Neural Networks and Optimization
- Generative Systems and Complex Systems
- Pathfinding and Reinforcement Learning
- Computer Vision and ML
- Neural Evolution, Robot and Synthesis

The statuses are tracked separately and are not overstated. For a real educational product, each module should be validated individually before being marked as tested or offline-ready.

## Notes

This project intentionally avoids claiming that all modules are fully built and tested. The scaffold aligns with the specification while preserving a truthful and maintainable roadmap.

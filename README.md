# Global Bioeconomy Simulation — GitHub Pages container

This is a desktop-first one-page container for the simulation.

## Files

- `index.html` — page structure
- `style.css` — visual design
- `script.js` — country delegations, conceptual overlays, and Treaty Hub links
- `assets/` — put actor photos and other assets here

## Important

The current map uses simple placeholder country shapes so the interaction and page architecture work immediately. Replace the SVG contents in `index.html` with a real world-country SVG when ready. Keep the country `<g>` IDs matching the country names used in `script.js`.

### Current countries wired for delegation popups

India, China, Brazil, Germany, UAE, Panama, Gabon, France, Indonesia, Australia, Finland, Peru.

### Adding treaty links

In `script.js`, edit `treatyHub`:

```js
"Round 1 drafts": [
  { title: "India delegation draft", url: "https://docs.google.com/..." },
  { title: "Brazil delegation draft", url: "https://docs.google.com/..." }
]
```

### Adding actor photos

Put the image files in `assets/actors/` and update the relevant `photo` path. The current UI uses a placeholder "Photo" label; the next iteration can render the actual image automatically.

## GitHub Pages

Upload these files to a GitHub repository and enable Pages from the repository's Settings → Pages → Deploy from branch, using the branch/folder containing these files.

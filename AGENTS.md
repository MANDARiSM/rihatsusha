# AGENTS.md

## Cursor Cloud specific instructions

This is a **static website** (HTML/CSS/vanilla JS) with no build tools, package managers, or automated tests.

### Running the dev server

```bash
python3 -m http.server 8000 --directory /workspace
```

Then open `http://localhost:8000` in a browser. There is no hot-reload; refresh the page manually after editing files.

### Key files

| File | Purpose |
|------|---------|
| `index.html` | Main page (Japanese corporate landing page for 理髪社) |
| `styles.css` | All styles, responsive breakpoints at 768px / 480px |
| `script.js` | Scroll animations, parallax, hamburger menu, contact form handler |

### Notes

- No linter, test framework, or build step is configured in this repository.
- The contact form submits client-side only (shows an `alert()` and resets).
- Image/logo assets use Japanese filenames containing parentheses and kanji; be careful with shell quoting.
- Google Fonts (Noto Serif JP, Noto Sans JP) are loaded from CDN; pages work offline but fonts degrade to system defaults.

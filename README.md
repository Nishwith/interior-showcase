# Interior Designer Showcase

A React + Vite showcase with three distinct interior design website directions: Luxury Atelier, Modern Living, and Architectural Studio.

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Personalize a designer

The site reads query parameters from the URL:

- `template`: `luxury`, `modern`, or `architectural`
- `name`: studio / designer name
- `location`: studio location
- `phone`: contact phone
- `email`: contact email
- `address`: contact address

Example:

```text
http://localhost:5173/?template=luxury&name=Aria+Interiors&location=Hyderabad
http://localhost:5173/?template=modern&name=Aria+Interiors
http://localhost:5173/?template=architectural&name=Aria+Interiors
```

For actual client outreach, use real, authorized contact information. The default phone, email and address are clearly illustrative placeholders; replace them before sending a personalized preview. Project photography and project descriptions are visual demonstration content, not claims of work completed by the named designer.

## Deploy to GitHub Pages

1. Create a repository named `interiors`.
2. Keep the `base` in `vite.config.js` as `/interiors/` for a project page at `https://YOUR-USERNAME.github.io/interiors/`.
3. Install dependencies and run `npm run build`.
4. Publish the `dist` directory using GitHub Pages, or run `npm run deploy` after configuring your repository remote.

If your repository name differs, update the `base` value in `vite.config.js` to `/<repository-name>/`.

## Notes

- Images are loaded from Unsplash URLs and therefore require an internet connection. Replace them with licensed, client-approved photography before production.
- Theme preference is stored locally in the visitor's browser.
- The three templates share content data and reusable sections while retaining separate layouts and typography.

# ShwethGarage - Shweth Naik portfolio

Single-page portfolio plus a `/work` catalogue, built with [Astro](https://astro.build)
and [Tailwind CSS](https://tailwindcss.com). Static output, hosted on Vercel at
https://shwethgarage.vercel.app

## Run locally

Needs [Node.js](https://nodejs.org) 18+.

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # production build into dist/
```

## Where things live

| To change... | Edit |
| --- | --- |
| Any text, numbers, links, contact details, work list, FAQ | `src/data/content.js` |
| Colours, fonts | `tailwind.config.mjs` |
| A section's layout | the matching file in `src/components/` |
| Section order on the home page | `src/pages/index.astro` |
| Work catalogue categories / clips | `allWork` in `src/data/content.js` (shown on `/work`) |

## Adding a video

1. Compress it for the web (vertical clips scale to height 1280, landscape to width 1280):

   ```bash
   ffmpeg -i "input.mp4" -vf scale=-2:1280 -c:v libx264 -preset medium -crf 30 \
     -c:a aac -b:a 96k -movflags +faststart public/work/my-clip.mp4
   ffmpeg -ss 1 -i public/work/my-clip.mp4 -frames:v 1 -q:v 4 public/work/my-clip.jpg
   ```

2. Add `{ title, src, poster, orientation }` to a category in `allWork`
   (`orientation` is `"portrait"` or `"landscape"`).
3. To feature it on the home page, add it to `featuredWork.videos`.

Raw footage lives in `my work to be added/` (gitignored, never committed).

## Contact form

Submissions go through [Web3Forms](https://web3forms.com) using the key in
`contact.web3formsKey`. Without a key the form falls back to opening the visitor's
mail app. WhatsApp buttons open a pre-filled message (`contact.whatsappMessage`).

## Logo

None yet - the name shows as text. To add one, put the file at `public/logo.svg`
and set `showLogo: true` in `site` (`src/data/content.js`).

## Deploy

Push to `main`; Vercel redeploys automatically. Work on a branch and open a PR.

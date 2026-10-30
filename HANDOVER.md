# Handover Notes

## Current site direction

- Charles Michael Sports Hub is presented as a community sports hub in Limuru, with taekwondo as its flagship programme.
- Home page lead-in: "Kenya's newest sports hub."
- Flagship event: **Mount Kenya International Taekwondo Open Tournament**.
- Event date selected for the site: **Saturday 10 – Sunday 11 April 2027**, in Limuru, Kenya. It is presented as a two-day event.
- WhatsApp and call contact: **0754 151 315**. WhatsApp links use `https://wa.me/254754151315`; phone links use `tel:+254754151315`.

## Work completed

- Replaced the home-page hero and founder placeholders with supplied photos.
- Optimized 13 unique supplied photos to WebP in `public/images/`; exact duplicate uploads were not copied again. Photos appear across the home, programmes, tournament, and news pages.
- Updated event text, countdowns, structured event dates, calendar download, sponsor copy, navigation, and contact details to use the new event name and dates.
- Added this handover document for continuing work.

## Important files

- `src/pages/index.astro` — home page, hero image, event summary, and countdown.
- `src/pages/open-2027.astro` — tournament details, date schema, calendar download, and WhatsApp share link. The `/open-2027` URL is intentionally retained.
- `src/pages/news.astro` — community photo gallery.
- `src/pages/contact.astro` — call and WhatsApp contact links.
- `public/images/` — optimized WebP photos.

## Suggested next steps

1. Confirm the tournament venue, registration process, schedule, eligibility details, and sponsor information before publishing those specifics.
2. Confirm that the person shown in the black-belt portrait is the founder before describing the image as his portrait.
3. When continuing from this handover, inspect `git status` first and preserve any unrelated or staged user changes.
4. Run `npm run build` from the project root to verify a production build.

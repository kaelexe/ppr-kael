# Portfolio style and coding guide

This guide records the conventions in this repository and the owner's request to preserve them. Read it before changing the portfolio. This file is named `AGENT.md` as requested; tools that automatically discover only `AGENTS.md` may need this guide referenced explicitly.

## Stack and structure

- Keep the existing React 18, TypeScript, and Create React App setup. Use the existing npm scripts and package-lock.json. Do not migrate frameworks or add dependencies for routine changes.
- Use functional React components, local hooks for simple state, and TypeScript interfaces for component props. Follow nearby components' use of `React.FC` where applicable.
- Put page components in `src/components/` with PascalCase filenames and default exports.
- Keep layout styles in companion files under `src/components/styles/`. Existing filenames use both `.style.tsx` and `.styles.tsx`; preserve existing names and use `.styles.tsx` for new companions.
- Export named styled components and import them into their page component. Keep dedicated animation components under `src/components/framer-motion/`.
- Follow existing formatting: two-space indentation, double-quoted strings, semicolons, trailing commas in multiline structures, and readable multiline JSX.

## Styling and visual identity

- Preserve Poppins typography, the centered 1200px page width, generous spacing, and roughly 700px content columns.
- Preserve orange accents (`#ffa500` and Chakra's orange palette), section headings with a horizontal orange line, and the existing light/dark toggle. The initial theme is dark.
- Use Chakra UI for accessible controls, text, theme-aware colors, and responsive props. Use styled-components for layout and companion page styles.
- Follow the existing flex layouts, rem spacing, and mobile breakpoint around 768px. Keep content usable on narrow screens and at larger text sizes.
- Keep the fixed navigation bar clear of page headings. Prefer minimum heights over fixed viewport heights when text or forms need to grow.
- Preserve the typewriter introduction and technology marquee unless the owner asks to change them. Do not add a new visual theme, decorative imagery, or unrelated animations.
- Use readable body text (at least 1rem for new main content), visible focus states, and colors that work in both modes.

## Behavior and content

- Preserve `App.tsx`'s local page state and switch-based navigation for this small site. Add a matching render case for each newly implemented navigation destination.
- Attach actions to actual buttons or links, not just nested text spans, so keyboard and full-button clicks work.
- Use associated labels, required fields where appropriate, and honest helper text for forms. Avoid claiming a message was sent when only opening an email app.
- The contact recipient is `johnmichaelamto@gmail.com`. The current contact flow is a `mailto:` draft, not a server-backed delivery service. Encode subject and body separately and leave final sending to the visitor.
- Keep the approved resume in `public/John_Michael_Amto_Resume.pdf`. Link through `process.env.PUBLIC_URL` so configured subdirectory deployments work. Use `target="_blank"` and `rel="noopener noreferrer"` for View Resume; do not add a download attribute.
- Keep professional claims grounded in the owner's supplied resume. Never invent clients, project outcomes, metrics, testimonials, or public samples of confidential work.
- Preserve existing uncommitted and staged work. Keep changes limited to the requested feature; do not silently repair unrelated placeholders or reformat the whole project.

## Verification

- Run the existing production build for source changes, and inspect the resulting diff. Do not silently accept build-tool rewrites of unrelated configuration.
- Check affected pages on desktop and mobile, in both color modes where feasible. Verify navigation, the resume URL/new-tab behavior, and the contact form's empty-input and encoded-draft behavior.
- Do not send real emails as a test. Do not commit, push, or publish unless requested.

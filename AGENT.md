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
- The theme cycle is Light → Dark → Sakura → Light. New visitors follow the system theme until they explicitly choose one; the choice persists in `portfolio-theme`. `PortfolioThemeProvider` owns the system listener and theme selection; Chakra's internal system listener is disabled to avoid overwriting Sakura or manual choices. Keep the blossom icon for Sakura, baby-pink surfaces, readable rose text, and pink accents. Other themes retain their orange accents. Use `--portfolio-accent` for shared CSS focus/section accents. Keep the original project-cover branding independent of the portfolio palette.
- Use Chakra UI for accessible controls, text, theme-aware colors, and responsive props. Use styled-components for layout and companion page styles.
- Follow the existing flex layouts, rem spacing, and mobile breakpoint around 768px. Keep content usable on narrow screens and at larger text sizes.
- The shared portfolio shell fills `100dvh`, reserving space for the fixed 64px navigation and the footer. `PageViewport` owns fallback scrolling for small screens and enlarged text. Visible scrollbars are intentionally hidden, but scrolling and keyboard access must remain usable; never clip essential content just to remove a scrollbar.
- Preserve the typewriter introduction and technology marquee unless the owner asks to change them. Do not add a new visual theme, decorative imagery, or unrelated animations.
- The portfolio-wide dot texture lives in `DotField.tsx`, with its canvas and shared surface styles in `DotField.styles.tsx`. Mount it once in `App.tsx` so Home, Projects, and Contact share it. Keep the fixed canvas sized to the viewport, with pointer coordinates relative to that canvas so scrolling long project pages does not increase its memory use or offset the interaction. Keep it decorative, subtle in both themes, static under reduced motion, and paused when offscreen or the tab is hidden. Pointer updates must not trigger React renders. Clean up observers, listeners, and animation frames on unmount.
- Project buttons currently open the deployed applications in new tabs. Preserve the supplied live URLs in `Projects.tsx`; repository links are temporarily omitted at the owner's request.
- Keep dots neutral gray in both themes, including on hover. Hover changes their size and opacity, never their hue.
- Projects shows one selected project at a time. Keep the centered left rail on desktop (only the active name is visible), numbered horizontal navigation on mobile, and a short fade/scale transition with reduced-motion support. Retain the original project covers; do not reintroduce the duplicate application-preview section. Overview, Functionality, and Notes keep the existing project facts reachable in compact chapters. Preserve keyboard navigation and live-demo links.
- In Projects, scrolling down or up selects the next or previous project when the content beneath the pointer cannot scroll farther in that direction. Preserve native scrolling for overflow, ignore horizontal and browser zoom gestures, and allow only one project change per wheel gesture so trackpad momentum cannot skip entries. Wheel navigation stops at the first and last project.
- Image-based covers use `ProjectImage.tsx`: reserve their responsive frame, show a theme-aware skeleton, and keep the actual image invisible until loading and decoding finish. Handle cached images, decode/network failures with retry, and stale callbacks after switching projects. Do not show partial progressive images or add an artificial minimum loading delay. Respect reduced motion for skeleton/reveal animations. Editorial text covers do not need a loading state.
- Use readable body text (at least 1rem for new main content), visible focus states, and colors that work in both modes.

## Behavior and content

- Preserve `App.tsx`'s local page state and switch-based navigation for this small site. Add a matching render case for each newly implemented navigation destination.
- Visible navigation contains Overview, Projects, and Contact. Overview uses the landing component. About is temporarily disabled because it repeats the introduction. Preserve `About.tsx` and `About.styles.tsx` for possible reuse; do not delete them or add them back to navigation without the owner's request. Keep View Resume and the scrolling technology strip on Overview. Keep the marquee's pause control, meaningful icon labels, and static reduced-motion version.
- The collection includes Crafted Comforts, Presko, Pinedesk, and Equipify. Derive the displayed total from project data. On narrow phones show the selected project name and the other project numbers so the rail fits without horizontal scrolling. Equipify is a Dawn-based Shopify theme concept, not a headless storefront or Shopify app. The owner authorized a reveal toggle for its demo storefront password; keep it hidden initially and reset its reveal state when switching projects. Do not add an account/admin password or change the live Shopify theme as part of portfolio edits.
- Attach actions to actual buttons or links, not just nested text spans, so keyboard and full-button clicks work.
- Use associated labels, required fields where appropriate, and honest helper text for forms. Avoid claiming a message was sent when only opening an email app.
- The contact recipient is `johnmichaelamto@gmail.com`. The contact form uses a native HTTPS POST to FormSubmit, with required name, email, and message fields. Preserve the provider's CAPTCHA and the honeypot. The owner must activate the form from their inbox before delivery works. Do not replace this with a `mailto:` draft, disable CAPTCHA, claim inbox delivery before it is verified, or send test messages without authorization. See `CONTACT_SETUP.md` for activation steps.
- Keep the approved resume in `public/John_Michael_Amto_Resume.pdf`. Link through `process.env.PUBLIC_URL` so configured subdirectory deployments work. Use `target="_blank"` and `rel="noopener noreferrer"` for View Resume; do not add a download attribute.
- Keep professional claims grounded in the owner's supplied resume. Never invent clients, project outcomes, metrics, testimonials, or public samples of confidential work.
- Preserve existing uncommitted and staged work. Keep changes limited to the requested feature; do not silently repair unrelated placeholders or reformat the whole project.

## Verification

- Run the existing production build for source changes, and inspect the resulting diff. Do not silently accept build-tool rewrites of unrelated configuration.
- Check affected pages on desktop and mobile, in both color modes where feasible. Verify navigation, the resume URL/new-tab behavior, and the contact form's validation and HTTPS POST destination without sending a real message.
- Do not send real emails as a test. Do not commit, push, or publish unless requested.

import React, { useRef, useState } from "react";
import { Badge, Button, Flex, Heading, Text, useColorModeValue } from "@chakra-ui/react";
import { ArrowBackIcon, ArrowForwardIcon, ExternalLinkIcon } from "@chakra-ui/icons";
import { AnimatePresence, useReducedMotion } from "framer-motion";
import ProjectImage from "./ProjectImage";
import {
  ProjectsWrapper, ProjectRail, ProjectStage, ProjectCover, Cover,
  ProjectCopy, DetailNavigation, ReadingPane, ChapterControls, ProjectFooter,
} from "./styles/Projects.styles";

const projects = [
  {
    id: "crafted-comforts", number: "01", name: "Crafted Comforts",
    category: "Visual storytelling", kind: "Frontend design study",
    subtitle: "A little yarn. A lot of character.",
    description: "A crochet showcase that gives handmade pieces room to tell their stories. A moving collection, gentle typography, and a filterable gallery turn a small catalogue into a personal exhibition.",
    stack: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    image: "", alt: "", caption: "Editorial cover · crochet portfolio interface study",
    liveUrl: "https://crafted-comforts-jet.vercel.app/",
    challenge: "Translate a Figma overview into a responsive, inviting portfolio where the work takes centre stage without making navigation harder.",
    features: [
      ["A collection in motion", "An automatically moving hero includes a pause control and respects reduced-motion preferences."],
      ["Browse by collection", "Category filters separate little companions, flowers, and everyday pieces."],
      ["A closer look", "Native gallery dialogs reveal an individual piece, its category, and its story."],
      ["An inquiry path", "A configurable email inquiry opens a visitor's mail app; an unconfigured form stays clearly marked as a demo."],
    ],
    decision: "Keep the collection data in one place so the hero, filters, and detail dialogs use the same pieces. Use native dialogs and responsive layouts to support both keyboard and mobile browsing.",
    scope: "Design study inspired by a supplied Figma overview. The current collection uses clearly labeled illustrative artwork and draft copy, not original product photography. This is a showcase, not an online checkout.",
  },
  {
    id: "presko", number: "02", name: "Presko",
    category: "Booking & operations", kind: "Full-stack portfolio demo",
    subtitle: "A little care. A lot cooler.",
    description: "An aircon-cleaning booking experience that connects a simple customer journey to a staff scheduling dashboard. Behind the calm interface, database rules protect each appointment slot.",
    stack: ["React", "TypeScript", "Tailwind CSS", "CodeIgniter", "MySQL"],
    image: "presko-booking.png", alt: "Presko's booking screen with service choices and an appointment summary",
    caption: "Application screenshot · service selection · synthetic demo",
    liveUrl: "https://presko.freedev.app/app/",
    challenge: "Let a customer choose a service and time without an account, while giving one service team a reliable way to manage availability.",
    features: [
      ["Three-step booking", "Choose a service, select an available time, and enter contact details. Prices and availability are validated by the server."],
      ["Protected time slots", "Transactional slot claims and a unique database constraint prevent competing bookings from claiming the same slot."],
      ["Private management links", "Customers can view or cancel an appointment using a private link; only the token hash is stored."],
      ["A staff workspace", "Staff can filter bookings, confirm or complete appointments, cancel requests, and block or reopen unavailable slots."],
    ],
    decision: "Lock the parent slot inside an InnoDB transaction for booking, cancellation, and blocking. Keep the appointment and its slot claim together so a partial write cannot leave the schedule inconsistent.",
    scope: "Fictional business with synthetic appointments and illustrative prices. The demo covers one team and fixed time windows. No real service is scheduled; payments, SMS, email delivery, and calendar integrations are outside its scope.",
  },
  {
    id: "pinedesk", number: "03", name: "Pinedesk",
    category: "Support & collaboration", kind: "Full-stack portfolio demo",
    subtitle: "Every conversation, in its place.",
    description: "A support inbox for the fictional Parcel & Pine shop. Customers follow their own requests while agents manage conversations, private notes, and ticket status in a focused workspace.",
    stack: ["React", "TypeScript", "Tailwind CSS", "CodeIgniter", "MySQL"],
    image: "pinedesk-workspace.png", alt: "Pinedesk agent workspace showing a ticket queue, customer conversation, and reply composer",
    caption: "Application screenshot · agent workspace · synthetic demo",
    liveUrl: "https://pinedeskhelp.freedev.app/",
    challenge: "Make customer conversations easy to follow while keeping agent-only information private at the API boundary, not just hidden in the interface.",
    features: [
      ["Two distinct perspectives", "Requesters can create tickets and see their own conversations. Agents can access the wider support inbox."],
      ["Replies and private notes", "Public replies and internal notes have separate drafts. Private notes never enter requester API responses."],
      ["A traceable workflow", "Status changes record an actor, old and new values, and a timestamp. A customer reply can reopen a waiting conversation."],
      ["A focused recent queue", "Search and status views work across the latest 20 loaded tickets. Conversations refresh while the tab is visible, with a manual refresh option."],
    ],
    decision: "Enforce ownership and note visibility on the server. Save messages and their related status events together, and lock the ticket during writes so resolution cannot race a reply.",
    scope: "Fictional accounts and tickets. Queue controls describe recent loaded records, not global analytics. Assignment changes, full server-side queue controls, and AI triage remain future work; the current demo does not claim those features.",
  },
  {
    id: "equipify", number: "04", name: "Equipify",
    category: "Shopify commerce", kind: "Shopify theme concept",
    subtitle: "Everyday gadgets, brought to life.",
    description: "A Dawn-based Shopify storefront with editable Liquid sections, GSAP animation, a React kit builder, and an interactive Three.js product study.",
    stack: ["Shopify Liquid", "JavaScript", "React", "GSAP", "Three.js"],
    image: "", alt: "", caption: "Editorial cover · Shopify theme concept",
    liveUrl: "https://quick-start-0c438d35.myshopify.com",
    challenge: "Extend an existing Shopify theme with a distinctive gadget storefront while keeping content editable through Shopify's theme editor.",
    features: [
      ["Merchant-editable sections", "Custom Liquid sections expose the hero, collection, product lab, kit builder, and brand story to Shopify's theme editor."],
      ["Product discovery", "Category filters, price sorting, search, and quick-view dialogs help visitors explore the illustrative catalogue."],
      ["A React kit builder", "Contained React interfaces manage kit totals and bag quantities. Portfolio demo mode uses a browser-local bag with checkout disabled."],
      ["An interactive product study", "A lazy-loaded Three.js headphone study supports finish selection, dragging, and keyboard rotation, with a photo fallback when WebGL is unavailable."],
    ],
    decision: "Keep Liquid and Dawn as the storefront foundation, adding React only where interaction benefits from it. Load the 3D study on approach, pause it offscreen, and support reduced motion rather than making every visitor pay its rendering cost.",
    scope: "Portfolio concept with illustrative products and prices, reference imagery, and demo checkout disabled. The 3D object is an original procedural study, not an exact model of the pictured product. Live checkout verification is not claimed. Shopify storefront access may require a password.",
  },
];

const Projects: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [section, setSection] = useState("Overview");
  const [chapter, setChapter] = useState(0);
  const [showStorefrontPassword, setShowStorefrontPassword] = useState(false);
  const projectButtons = useRef<(HTMLButtonElement | null)[]>([]);
  const reduceMotion = useReducedMotion();
  const muted = useColorModeValue("gray.600", "gray.300");
  const project = projects[selectedIndex];
  const notes = [["The brief", project.challenge], ["The engineering", project.decision], ["Project scope", project.scope]];
  const chapters = section === "Functionality" ? project.features : notes;

  const selectProject = (index: number) => {
    setSelectedIndex(index);
    setSection("Overview");
    setChapter(0);
    setShowStorefrontPassword(false);
  };

  const onProjectKeyDown = (event: React.KeyboardEvent<HTMLElement>) => {
    const focusedIndex = projectButtons.current.indexOf(event.target as HTMLButtonElement);
    if (focusedIndex < 0) return;
    let next = focusedIndex;
    if (event.key === "ArrowDown" || event.key === "ArrowRight") next = (focusedIndex + 1) % projects.length;
    else if (event.key === "ArrowUp" || event.key === "ArrowLeft") next = (focusedIndex + projects.length - 1) % projects.length;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = projects.length - 1;
    else return;
    event.preventDefault();
    selectProject(next);
    projectButtons.current[next]?.focus();
  };

  return (
    <ProjectsWrapper aria-label="Selected projects">
      <ProjectRail aria-label="Select a project" onKeyDown={onProjectKeyDown}>
        <span className="collection-label">Selected work</span>
        {projects.map((item, index) => (
          <button
            key={item.id}
            ref={(button) => { projectButtons.current[index] = button; }}
            type="button"
            aria-label={`Show ${item.name}`}
            aria-pressed={index === selectedIndex}
            aria-controls="selected-project"
            onClick={() => selectProject(index)}
          >
            <span className="rail-line" aria-hidden="true" />
            <span className="project-number" aria-hidden="true">{item.number}</span>
            <span className="project-name" aria-hidden="true">{item.name}</span>
            <ArrowForwardIcon className="project-arrow" aria-hidden="true" />
          </button>
        ))}
      </ProjectRail>
      <AnimatePresence mode="wait" initial={false}>
        <ProjectStage
          id="selected-project"
          key={project.id}
          aria-labelledby={`title-${project.id}`}
          initial={reduceMotion ? false : { opacity: 0, y: 12, scale: 0.985 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={reduceMotion ? { opacity: 1 } : { opacity: 0, y: -6, scale: 0.995 }}
          transition={{ duration: reduceMotion ? 0 : 0.22, ease: "easeOut" }}
        >
          <ProjectCover>
            {project.image ? (
              <ProjectImage src={`${process.env.PUBLIC_URL}/projects/${project.image}`} alt={project.alt} />
            ) : (
              <Cover $brand={project.id}>
                <span className="cover-eyebrow">{project.id === "equipify" ? "Everyday tech / Shopify concept" : "Crochet & little joys"}</span>
                <div className="cover-title">{project.id === "equipify" ? <>equipify<span className="cover-mark">.</span></> : <>crafted<br /><em>comforts.</em></>}</div>
                <span className="cover-rule" />
                <p>{project.id === "equipify" ? <>Thoughtful gear.<br />Playful interactions.</> : <>Small stitches.<br />Endless comforts.</>}</p>
                <span className="cover-footnote">{project.id === "equipify" ? "Liquid · Motion · 3D / 04" : "A frontend design study / 01"}</span>
              </Cover>
            )}
            <figcaption>{project.caption}</figcaption>
          </ProjectCover>
          <ProjectCopy>
            <Text fontSize="sm" color={muted} letterSpacing="0.12em" textTransform="uppercase">{project.number} / {String(projects.length).padStart(2, "0")} &nbsp;·&nbsp; {project.category}</Text>
            <Heading id={`title-${project.id}`} as="h1" className="project-title">{project.name}</Heading>
            <Text className="project-subtitle" color={muted}>{project.subtitle}</Text>
            <DetailNavigation aria-label="Project details">
              {["Overview", "Functionality", "Notes"].map((item) => (
                <button key={item} type="button" aria-pressed={section === item} onClick={() => { setSection(item); setChapter(0); }}>{item}</button>
              ))}
            </DetailNavigation>
            <ReadingPane key={`${project.id}-${section}-${chapter}`} aria-live="polite">
              {section === "Overview" ? (
                <>
                  <Text lineHeight="1.8" color={muted}>{project.description}</Text>
                  <Flex gap="2" mt="5" flexWrap="wrap" aria-label={`${project.name} technologies`}>
                    {project.stack.map((tech) => <Badge key={tech} variant="outline" fontWeight="400" textTransform="none" fontSize="sm" px="2" py="0.5" borderRadius="full">{tech}</Badge>)}
                  </Flex>
                </>
              ) : (
                <>
                  <Heading as="h2" fontSize="lg" mb="3">{chapters[chapter][0]}</Heading>
                  <Text lineHeight="1.8" color={muted}>{chapters[chapter][1]}</Text>
                  <ChapterControls aria-label={`${section} pages`}>
                    <button type="button" aria-label={`Previous ${section.toLowerCase()} page`} disabled={chapter === 0} onClick={() => setChapter(chapter - 1)}><ArrowBackIcon /></button>
                    <span>{String(chapter + 1).padStart(2, "0")} / {String(chapters.length).padStart(2, "0")}</span>
                    <button type="button" aria-label={`Next ${section.toLowerCase()} page`} disabled={chapter === chapters.length - 1} onClick={() => setChapter(chapter + 1)}><ArrowForwardIcon /></button>
                  </ChapterControls>
                </>
              )}
            </ReadingPane>
            <ProjectFooter>
              <Button as="a" href={project.liveUrl} target="_blank" rel="noopener noreferrer" variant="outline" colorScheme="orange" rightIcon={<ExternalLinkIcon />} size="sm" aria-label={`Visit ${project.name} live site (opens in a new tab)`}>Visit live site</Button>
              <Text fontSize="sm" color={muted}>{project.kind}</Text>
              {project.id === "equipify" && (
                <div className="storefront-access">
                  <Text fontSize="sm" color={muted}>Shopify demo access</Text>
                  <button
                    className="password-toggle"
                    type="button"
                    aria-label={showStorefrontPassword ? "Hide storefront password" : "Show storefront password"}
                    aria-expanded={showStorefrontPassword}
                    aria-controls="equipify-storefront-password"
                    onClick={() => setShowStorefrontPassword(!showStorefrontPassword)}
                  >
                    {showStorefrontPassword ? "Hide password" : "Show password"}
                  </button>
                  <span id="equipify-storefront-password" hidden={!showStorefrontPassword}>
                    <code>mahfia</code>
                  </span>
                </div>
              )}
            </ProjectFooter>
          </ProjectCopy>
        </ProjectStage>
      </AnimatePresence>
    </ProjectsWrapper>
  );
};

export default Projects;

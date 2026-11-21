import React, { useEffect, useRef, useState } from "react";
import { Button, Skeleton, Text, useColorModeValue } from "@chakra-ui/react";
import { CloseIcon, ExternalLinkIcon } from "@chakra-ui/icons";
import { useReducedMotion } from "framer-motion";
import { PreviewPanel, PreviewToolbar, PreviewViewport, PreviewStatus } from "./styles/ProjectPreview.styles";

interface ProjectPreviewProps {
  name: string;
  url: string;
  onClose: () => void;
}

const ProjectPreview: React.FC<ProjectPreviewProps> = ({ name, url, onClose }) => {
  const [phase, setPhase] = useState<"loading" | "ready" | "slow">("loading");
  const closeButton = useRef<HTMLButtonElement>(null);
  const reduceMotion = useReducedMotion();
  const panelColor = useColorModeValue("white", "gray.900");
  const startColor = useColorModeValue("gray.100", "gray.700");
  const endColor = useColorModeValue("gray.200", "gray.600");

  useEffect(() => { closeButton.current?.focus(); }, []);

  useEffect(() => {
    if (phase !== "loading") return;
    const timer = window.setTimeout(() => setPhase("slow"), 12000);
    return () => window.clearTimeout(timer);
  }, [phase]);

  return (
    <PreviewPanel
      id="project-preview"
      aria-label={`${name} live preview`}
      initial={reduceMotion ? false : { opacity: 0, x: 28 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: reduceMotion ? 0 : 0.28 }}
      style={{ background: `var(--chakra-colors-${panelColor.replace(".", "-")})` }}
    >
      <PreviewToolbar>
        <div>
          <Text fontSize="sm" fontWeight="500">{name}</Text>
          <Text fontSize="xs" color="var(--portfolio-muted)">Live preview</Text>
        </div>
        <div className="preview-actions">
          <Button as="a" href={url} target="_blank" rel="noopener noreferrer" variant="ghost" size="sm" rightIcon={<ExternalLinkIcon />}>
            Open in new tab
          </Button>
          <Button ref={closeButton} onClick={onClose} variant="ghost" size="sm" leftIcon={<CloseIcon boxSize="2.5" />}>
            Close preview
          </Button>
        </div>
      </PreviewToolbar>
      <PreviewViewport>
        <iframe
          title={`${name} live website`}
          src={url}
          sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox"
          referrerPolicy="strict-origin-when-cross-origin"
          onLoad={() => setPhase("ready")}
          style={{ visibility: phase === "loading" ? "hidden" : "visible" }}
        />
        {phase === "loading" && (
          <PreviewStatus>
            <Skeleton height="1rem" width="40%" startColor={startColor} endColor={endColor} />
            <Skeleton height="35%" width="100%" startColor={startColor} endColor={endColor} />
            <Skeleton height="1rem" width="80%" startColor={startColor} endColor={endColor} />
            <Skeleton height="1rem" width="60%" startColor={startColor} endColor={endColor} />
            <Text role="status" fontSize="sm">Opening {name}…</Text>
          </PreviewStatus>
        )}
        {phase === "slow" && (
          <PreviewStatus className="preview-notice">
            <Text role="status" fontSize="sm">
              Taking longer to load? Try opening the site in a new tab.
            </Text>
            <Button size="sm" variant="outline" onClick={() => setPhase("ready")}>Dismiss notice</Button>
          </PreviewStatus>
        )}
      </PreviewViewport>
      <Text fontSize="xs" px="4" py="2" color="var(--portfolio-muted)">
        If the preview stays blank or asks you to sign in, use Open in new tab.
      </Text>
    </PreviewPanel>
  );
};

export default ProjectPreview;

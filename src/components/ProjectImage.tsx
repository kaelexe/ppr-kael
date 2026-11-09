import React, { useEffect, useRef, useState } from "react";
import { Button, Skeleton, Text, useColorModeValue } from "@chakra-ui/react";
import { ProjectImageFrame } from "./styles/Projects.styles";

interface ProjectImageProps {
  src: string;
  alt: string;
}

type ImagePhase = "loading" | "ready" | "error";

const ProjectImage: React.FC<ProjectImageProps> = ({ src, alt }) => {
  const imageRef = useRef<HTMLImageElement>(null);
  const [attempt, setAttempt] = useState(0);
  const [state, setState] = useState<{ source: string; phase: ImagePhase }>({ source: src, phase: "loading" });
  const phase = state.source === src ? state.phase : "loading";
  const startColor = useColorModeValue("gray.100", "gray.700");
  const endColor = useColorModeValue("gray.200", "gray.600");

  useEffect(() => {
    const image = imageRef.current;
    if (!image) return;
    let active = true;
    setState({ source: src, phase: "loading" });

    const fail = () => {
      if (active) setState({ source: src, phase: "error" });
    };

    const reveal = async () => {
      try {
        // A load event means the bytes arrived; decode waits until the entire
        // image is paint-ready so progressive rows never reach the screen.
        if (typeof image.decode === "function") await image.decode();
        if (active) {
          setState({ source: src, phase: image.naturalWidth > 0 ? "ready" : "error" });
        }
      } catch {
        fail();
      }
    };

    image.addEventListener("load", reveal);
    image.addEventListener("error", fail);
    // Cached images may finish before React attaches the listeners.
    if (image.complete) {
      if (image.naturalWidth > 0) void reveal();
      else fail();
    }

    return () => {
      active = false;
      image.removeEventListener("load", reveal);
      image.removeEventListener("error", fail);
    };
  }, [src, attempt]);

  return (
    <ProjectImageFrame aria-busy={phase === "loading"} data-image-state={phase}>
      <img
        key={`${src}-${attempt}`}
        ref={imageRef}
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        aria-hidden={phase !== "ready"}
      />
      {phase === "loading" && (
        <>
          <Skeleton className="cover-skeleton" startColor={startColor} endColor={endColor} aria-hidden="true" />
          <span className="cover-status" role="status">Loading project cover</span>
        </>
      )}
      {phase === "error" && (
        <div className="cover-error">
          <Text fontSize="sm" role="status">Project cover couldn’t load.</Text>
          <Button
            size="sm"
            variant="ghost"
            colorScheme="orange"
            onClick={() => {
              setState({ source: src, phase: "loading" });
              setAttempt((value) => value + 1);
            }}
          >
            Retry image
          </Button>
        </div>
      )}
    </ProjectImageFrame>
  );
};

export default ProjectImage;

import React from "react";
import { Icon } from "@chakra-ui/react";

const SakuraIcon: React.FC = () => (
  <Icon viewBox="0 0 24 24" boxSize="18px" aria-hidden="true">
    {[0, 72, 144, 216, 288].map((angle) => (
      <path
        key={angle}
        d="M12 12C9 10 7.5 7 9 3.5Q9.7 2 11 2L12 4L13 2Q14.3 2 15 3.5C16.5 7 15 10 12 12Z"
        transform={`rotate(${angle} 12 12)`}
        fill="currentColor"
      />
    ))}
    <circle cx="12" cy="12" r="2" fill="var(--portfolio-footer-bg, white)" />
  </Icon>
);

export default SakuraIcon;

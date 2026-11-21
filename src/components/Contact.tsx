import React, { useState } from "react";
import { Button, Link, Text } from "@chakra-ui/react";
import { CopyIcon, ExternalLinkIcon } from "@chakra-ui/icons";

import {
  ContactWrapper,
  ContactContent,
  ContactTitle,
  ContactEmail,
  ContactActions,
} from "./styles/Contact.styles";

const contactEmail = "johnmichaelamto@gmail.com";
const gmailDraft = new URLSearchParams({
  fs: "1",
  tf: "cm",
  to: contactEmail,
  su: "Portfolio inquiry",
});

const Contact: React.FC = () => {
  const [copyStatus, setCopyStatus] = useState("");

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(contactEmail);
      setCopyStatus("Email copied. Paste it into your preferred email app.");
    } catch {
      setCopyStatus("Couldn't copy. Select the email address above to copy it.");
    }
  };

  return (
    <ContactWrapper aria-labelledby="contact-title">
      <ContactContent>
        <Text fontSize="sm" letterSpacing="0.18em" textTransform="uppercase">
          Let's work together
        </Text>
        <ContactTitle id="contact-title" as="h1">
          Good things start<br />with a hello.
        </ContactTitle>
        <Text fontSize={["md", "md", "lg"]} maxWidth="34rem">
          Have a project in mind? Tell me what you're building, your timeline,
          and where you could use a hand.
        </Text>
        <ContactEmail>
          <Text fontSize="sm" color="var(--portfolio-muted)">
            Reach me at
          </Text>
          <Text fontSize={["md", "xl"]} userSelect="all">
            {contactEmail}
          </Text>
        </ContactEmail>
        <ContactActions>
          <Button
            as="a"
            href={`https://mail.google.com/mail/u/0/?${gmailDraft.toString()}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open in Gmail (opens in a new tab)"
            colorScheme="orange"
            rightIcon={<ExternalLinkIcon />}
          >
            Open in Gmail
          </Button>
          <Button variant="outline" leftIcon={<CopyIcon />} onClick={copyEmail}>
            Copy email
          </Button>
        </ContactActions>
        <Text fontSize="sm" color="var(--portfolio-muted)">
          Gmail opens a draft for you to send. Prefer another app?{" "}
          <Link href={`mailto:${contactEmail}`} textDecoration="underline">
            Use your email app.
          </Link>
        </Text>
        <Text role="status" fontSize="sm" minHeight="3em">
          {copyStatus}
        </Text>
      </ContactContent>
    </ContactWrapper>
  );
};

export default Contact;

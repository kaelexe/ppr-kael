import React, { useState } from "react";
import {
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Text,
  Textarea,
} from "@chakra-ui/react";

import {
  ContactWrapper,
  ContactContent,
  SectionTitle,
  Line,
  ContactForm,
} from "./styles/Contact.styles";

const Contact: React.FC = () => {
  const [message, setMessage] = useState("");

  const onSubmitEmail = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!message.trim()) {
      return;
    }

    const subject = encodeURIComponent("Portfolio inquiry");
    const body = encodeURIComponent(message.trim());
    window.location.href = `mailto:johnmichaelamto@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <ContactWrapper>
      <SectionTitle>
        Reach out to me
        <Line />
      </SectionTitle>
      <ContactContent>
        <Text fontSize={["md", "md", "lg"]}>
          Have a project in mind? Tell me what you're building and where you
          could use a hand.
        </Text>
        <ContactForm onSubmit={onSubmitEmail}>
          <FormControl isRequired>
            <FormLabel htmlFor="contact-message">Your message</FormLabel>
            <Textarea
              id="contact-message"
              name="message"
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              placeholder="A little about your project, timeline, and what you need help with..."
              rows={7}
              maxLength={1500}
              resize="vertical"
              focusBorderColor="orange.400"
              fontSize="md"
            />
            <FormHelperText fontSize="sm">
              This opens a draft in your email app. Review it and send it there.
              If no app opens, copy your message and email me directly.
            </FormHelperText>
          </FormControl>
          <Button
            type="submit"
            colorScheme="orange"
            fontSize="sm"
            alignSelf="flex-start"
            isDisabled={!message.trim()}
          >
            Open email draft
          </Button>
        </ContactForm>
      </ContactContent>
    </ContactWrapper>
  );
};

export default Contact;

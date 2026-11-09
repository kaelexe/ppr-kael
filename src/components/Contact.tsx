import React, { useState } from "react";
import {
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
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
    if (!message.trim()) {
      event.preventDefault();
      return;
    }
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
        <ContactForm
          action="https://formsubmit.co/johnmichaelamto@gmail.com"
          method="POST"
          onSubmit={onSubmitEmail}
        >
          <input type="hidden" name="_subject" value="Portfolio inquiry" />
          <input type="hidden" name="_template" value="table" />
          <input
            type="text"
            name="_honey"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            style={{ display: "none" }}
          />
          <FormControl isRequired>
            <FormLabel htmlFor="contact-name">Your name</FormLabel>
            <Input
              id="contact-name"
              name="name"
              autoComplete="name"
              maxLength={100}
              pattern={".*\\S.*"}
              title="Please enter your name."
              focusBorderColor="orange.400"
              fontSize="md"
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel htmlFor="contact-email">Your email</FormLabel>
            <Input
              id="contact-email"
              name="email"
              type="email"
              autoComplete="email"
              maxLength={254}
              focusBorderColor="orange.400"
              fontSize="md"
            />
            <FormHelperText fontSize="sm">
              So I can reply to your inquiry.
            </FormHelperText>
          </FormControl>
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
              FormSubmit handles delivery. Continue to its verification page to
              finish sending your message.
            </FormHelperText>
          </FormControl>
          <Button
            type="submit"
            colorScheme="orange"
            fontSize="sm"
            alignSelf="flex-start"
            isDisabled={!message.trim()}
          >
            Send message
          </Button>
        </ContactForm>
      </ContactContent>
    </ContactWrapper>
  );
};

export default Contact;

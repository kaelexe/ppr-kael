import React from "react";
import {
  Box,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  useColorMode,
  useColorModeValue,
  Stack,
  Button,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import { ReactComponent as Logo } from "../assets/klx_main.svg";

const Links = ["Home", "About", "Projects", "Contact"];

interface NavbarProps {
  onNavigate: (page: string) => void;
}

const NavLink = ({ children }: { children: React.ReactNode }) => (
  <Button
    variant="ghost"
    size="sm"
    fontWeight="medium"
    _hover={{ bg: useColorModeValue("gray.200", "gray.700") }}
  >
    {children}
  </Button>
);

const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box
      bg={useColorModeValue("white", "gray.900")}
      px={4}
      boxShadow="md"
      position="fixed"
      top={0}
      width="100%"
      zIndex={10}
    >
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <HStack spacing={2}>
          <Logo width="30px" height="30px" />
        </HStack>

        <HStack spacing={8} alignItems="center">
          <HStack as="nav" spacing={4} display={{ base: "none", md: "flex" }}>
            {Links.map((link) => (
              <NavLink key={link}>
                <span onClick={() => onNavigate(link.toLowerCase())}>
                  {link}
                </span>
              </NavLink>
            ))}
          </HStack>
        </HStack>

        <Flex alignItems="center">
          <IconButton
            aria-label="Toggle color mode"
            icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            onClick={toggleColorMode}
            mr={2}
            size="sm"
            variant="ghost"
          />
          <IconButton
            size="md"
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label="Open Menu"
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
        </Flex>
      </Flex>

      {isOpen ? (
        <Box pb={4} display={{ md: "none" }}>
          <Stack as="nav" spacing={4}>
            {Links.map((link) => (
              <NavLink key={link}>
                <span
                  onClick={() => {
                    onNavigate(link.toLowerCase());
                    onClose();
                  }}
                >
                  {link}
                </span>
              </NavLink>
            ))}
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
};

export default Navbar;

import React from "react";
import {
  Box,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  useColorModeValue,
  Stack,
  Button,
  Tooltip,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import { ReactComponent as Logo } from "../assets/klx_main.svg";
import SakuraIcon from "./icons/SakuraIcon";
import { usePortfolioTheme } from "../styles/PortfolioThemeProvider";

const Links = ["Overview", "Projects", "Contact"];

interface NavbarProps {
  onNavigate: (page: string) => void;
}

interface NavLinkProps {
  children: React.ReactNode;
  onClick: () => void;
}

const NavLink = ({ children, onClick }: NavLinkProps) => (
  <Button
    onClick={onClick}
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
  const { appearance, nextAppearance, cycleTheme } = usePortfolioTheme();
  const themeLabel = `${appearance.charAt(0).toUpperCase() + appearance.slice(1)} theme. Switch to ${nextAppearance.charAt(0).toUpperCase() + nextAppearance.slice(1)} theme`;

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
              <NavLink key={link} onClick={() => onNavigate(link.toLowerCase())}>
                {link}
              </NavLink>
            ))}
          </HStack>
        </HStack>

        <Flex alignItems="center">
          <Tooltip label={themeLabel}>
            <IconButton
              aria-label={themeLabel}
              icon={appearance === "sakura" ? <SakuraIcon /> : appearance === "dark" ? <MoonIcon /> : <SunIcon />}
              onClick={cycleTheme}
              color={appearance === "sakura" ? "orange.600" : undefined}
              mr={2}
              size="sm"
              variant="ghost"
            />
          </Tooltip>
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
              <NavLink
                key={link}
                onClick={() => {
                  onNavigate(link.toLowerCase());
                  onClose();
                }}
              >
                {link}
              </NavLink>
            ))}
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
};

export default Navbar;

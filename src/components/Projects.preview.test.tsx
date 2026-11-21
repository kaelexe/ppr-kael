import React from "react";
import { act, fireEvent, render, screen, waitFor } from "@testing-library/react";
import { ChakraProvider } from "@chakra-ui/react";
import Projects from "./Projects";
import ProjectPreview from "./ProjectPreview";

let mockDesktopPreview = true;

jest.mock("@chakra-ui/react", () => ({
  ...jest.requireActual("@chakra-ui/react"),
  useMediaQuery: () => [mockDesktopPreview],
}));

jest.mock("framer-motion", () => ({
  ...jest.requireActual("framer-motion"),
  useReducedMotion: () => true,
}));

beforeEach(() => {
  mockDesktopPreview = true;
  window.matchMedia = () => ({
    matches: false,
    media: "",
    onchange: null,
    dispatchEvent: () => true,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
  });
});

afterEach(() => { jest.useRealTimers(); });

test("loads a single demo only after a click and removes it on close", async () => {
  const onPreviewChange = jest.fn();
  const view = render(<ChakraProvider><Projects onPreviewChange={onPreviewChange} /></ChakraProvider>);
  expect(view.container.querySelector("iframe")).toBeNull();
  fireEvent.click(screen.getByRole("button", { name: "Functionality" }));
  fireEvent.click(screen.getByRole("button", { name: "Next functionality page" }));
  const trigger = screen.getByRole("link", { name: "Preview Crafted Comforts" });
  fireEvent.click(trigger);
  const frame = screen.getByTitle("Crafted Comforts live website");
  expect(frame).toHaveAttribute("src", "https://crafted-comforts-jet.vercel.app/");
  expect(view.container.querySelectorAll("iframe")).toHaveLength(1);
  expect(screen.getByRole("status")).toHaveTextContent("Opening Crafted Comforts");
  expect(onPreviewChange).toHaveBeenLastCalledWith(true);
  fireEvent.wheel(screen.getByRole("main", { name: "Selected projects" }), { deltaY: 120 });
  expect(screen.getByRole("heading", { name: "Crafted Comforts" })).toBeInTheDocument();
  expect(screen.getByRole("button", { name: "Close preview" })).toHaveFocus();
  fireEvent.load(frame);
  expect(screen.queryByText("Opening Crafted Comforts…")).not.toBeInTheDocument();
  fireEvent.click(screen.getByRole("button", { name: "Close preview" }));
  expect(frame).not.toBeInTheDocument();
  expect(trigger).toHaveFocus();
  expect(onPreviewChange).toHaveBeenLastCalledWith(false);
  expect(screen.getByRole("heading", { name: "Browse by collection" })).toBeInTheDocument();
  await waitFor(() => expect(screen.getByRole("navigation", { name: "Select a project" })).toBeInTheDocument());
});

test("Escape closes the preview and leaving Projects removes it", () => {
  const onPreviewChange = jest.fn();
  const view = render(<ChakraProvider><Projects onPreviewChange={onPreviewChange} /></ChakraProvider>);
  fireEvent.click(screen.getByRole("link", { name: "Preview Crafted Comforts" }));
  fireEvent.keyDown(window, { key: "Escape" });
  expect(view.container.querySelector("iframe")).toBeNull();
  fireEvent.click(screen.getByRole("link", { name: "Preview Crafted Comforts" }));
  const frame = screen.getByTitle("Crafted Comforts live website");
  view.unmount();
  expect(frame.isConnected).toBe(false);
  expect(onPreviewChange).toHaveBeenLastCalledWith(false);
});

test("small screens use a new tab and resizing removes an existing preview", () => {
  const view = render(<ChakraProvider><Projects /></ChakraProvider>);
  fireEvent.click(screen.getByRole("link", { name: "Preview Crafted Comforts" }));
  mockDesktopPreview = false;
  view.rerender(<ChakraProvider><Projects /></ChakraProvider>);
  expect(view.container.querySelector("iframe")).toBeNull();
  expect(screen.getByRole("link", { name: "Visit Crafted Comforts live site (opens in a new tab)" })).toHaveAttribute("target", "_blank");
});

test.each([
  ["Presko", "https://presko.freedev.app/app/"],
  ["Pinedesk", "https://pinedeskhelp.freedev.app/"],
  ["Equipify", "https://quick-start-0c438d35.myshopify.com"],
])("%s keeps its new-tab link on desktop", async (name, url) => {
  render(<ChakraProvider><Projects /></ChakraProvider>);
  fireEvent.click(screen.getByRole("button", { name: `Show ${name}` }));
  const link = await screen.findByRole("link", { name: `Visit ${name} live site (opens in a new tab)` });
  expect(link).toHaveAttribute("href", url);
  expect(link).toHaveAttribute("rel", "noopener noreferrer");
  expect(screen.queryByTitle(/live website/)).not.toBeInTheDocument();
});

test("slow loads retain the escape route without an endless skeleton", () => {
  jest.useFakeTimers();
  render(<ChakraProvider><ProjectPreview name="Demo" url="https://example.com/" onClose={jest.fn()} /></ChakraProvider>);
  act(() => { jest.advanceTimersByTime(12000); });
  expect(screen.getByRole("status")).toHaveTextContent("Taking longer to load");
  expect(screen.getByRole("link", { name: "Open in new tab" })).toHaveAttribute("href", "https://example.com/");
  fireEvent.click(screen.getByRole("button", { name: "Dismiss notice" }));
  expect(screen.queryByRole("status")).not.toBeInTheDocument();
  fireEvent.load(screen.getByTitle("Demo live website"));
  expect(screen.queryByRole("status")).not.toBeInTheDocument();
});

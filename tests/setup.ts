import { afterEach } from "vitest";
import { cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";

// Mocking Resize Observer
class ResizeObserver {
  observe() {}

  unobserve() {}

  connect() {}

  disconnect() {}
}

window.ResizeObserver = ResizeObserver;

afterEach(() => {
  cleanup();
});

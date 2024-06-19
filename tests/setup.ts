import { expect, afterEach } from "vitest";
import { cleanup } from "@testing-library/react";
import matchers from "@testing-library/jest-dom/matchers";
import "@testing-library/jest-dom";

expect.extend(matchers);

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

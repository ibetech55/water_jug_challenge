import { cleanup } from "@testing-library/react";

afterEach(() => {
  cleanup();
});


beforeAll(() => {
  Object.defineProperty(window, "matchMedia", {
    writable: true,
    value: vi.fn().mockImplementation((query) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    })),
  });

  const { getComputedStyle } = window;
  window.getComputedStyle = (elt) => getComputedStyle(elt);

});

export * from "@testing-library/react";
export { default as userEvent } from "@testing-library/user-event";

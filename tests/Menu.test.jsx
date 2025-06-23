import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Menu from "../src/components/Menu/Menu";
import { MemoryRouter } from "react-router-dom";

describe("Menu component exists", () => {
  it("Menu componenet renders correctly", () => {
    const result = render(
      <MemoryRouter>
        <Menu />
      </MemoryRouter>
    );
    expect(result).toMatchSnapshot();
  });
});

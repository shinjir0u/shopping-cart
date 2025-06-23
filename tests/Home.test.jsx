import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Home from "../src/components/Home/Home";

describe("Home component exists", () => {
  it("Home componenet renders correctly", () => {
    const result = render(
      <Home />
    );
    expect(result).toMatchSnapshot();
  });
});

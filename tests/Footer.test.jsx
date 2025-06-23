import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Footer from "../src/components/Footer/Footer";

describe("Footer component exists", () => {
  it("Footer componenet renders correctly", () => {
    const result = render(<Footer />);
    expect(result).toMatchSnapshot();
  });
});

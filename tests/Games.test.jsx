import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import sampleGames from "../helperFiles/sampleGamesObject";
import Games from "../src/components/Games/Games";

describe("Games component exists in DOM", () => {
  it("Games component renders with the correct data", () => {
    const result = render(<Games games={sampleGames.results} />);
    expect(result).toMatchSnapshot();
  });
});

import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import sampleGames from "../helperFiles/sampleGamesObject";
import Games from "../src/components/Games/Games";
import * as rrd from "react-router-dom";

describe("Games component exists in DOM", () => {
  let mockData = { games: sampleGames.results };
  vi.mock("react-router-dom");

  it("Games component renders with the correct data", () => {
    rrd.useOutletContext.mockReturnValue(mockData);
    const result = render(<Games games={sampleGames.results} />);
    expect(result).toMatchSnapshot();
  });
});

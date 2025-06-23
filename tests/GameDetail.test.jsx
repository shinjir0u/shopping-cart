import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import sampleGames from "../helperFiles/sampleGamesObject";
import GameDetail from "../src/components/GameDetail/GameDetail";
import App from "../src/App";
import * as rrd from "react-router-dom";

describe("Game component exists in DOM", () => {
  let mockData = { games: sampleGames.results, selectedIndex: 2 };
  vi.mock("react-router-dom");
  it("Game component renders with the correct data", () => {
    rrd.useOutletContext.mockReturnValue(mockData);
    const result = render(<GameDetail />);
    expect(result).toMatchSnapshot();
  });
});

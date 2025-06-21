import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import gameHelper from "../src/components/Helpers/gameHelper";
import sampleGame from "../helperFiles/sampleGameObject";
import sampleGames from "../helperFiles/sampleGamesObject";
import GameDetail from "../src/components/GameDetail/GameDetail";

describe("Game component exists in DOM", () => {
  it("Game component renders with the correct data", () => {
    const gameData = gameHelper(sampleGame, sampleGames.results, 2);
    const result = render(<GameDetail {...gameData} />);
    expect(result).toMatchSnapshot();
  });
});

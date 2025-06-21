import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import gameHelper from "../src/components/Helpers/gameHelper";
import sampleGame from "../helperFiles/sampleGameObject";
import sampleGames from "../helperFiles/sampleGamesObject";
import Game from "../src/components/Game/Game";

describe("Game component exists in DOM", () => {
  it("Game component renders with the correct data", () => {
    const gameData = gameHelper(sampleGame, sampleGames, 2);

    const result = render(<Game {...gameData} />);
    expect(result).toMatchSnapshot();
  });
});

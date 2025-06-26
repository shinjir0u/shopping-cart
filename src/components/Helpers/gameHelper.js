const logoMapper = {
  pc: "/src/assets/icons/pc-logo.png",
  playstation: "/src/assets/icons/playstation-logo.png",
  xbox: "/src/assets/icons/xbox-logo.png",
  ios: "/src/assets/icons/ios-logo.png",
  android: "/src/assets/icons/android-logo.png",
  mac: "/src/assets/icons/mac-logo.png",
  linux: "/src/assets/icons/linux-logo.png",
  nintendo: "/src/assets/icons/nintendo-logo.png",
};

function gameHelper(game, games, selectedIndex) {
  console.log(games);

  return {
    id: game.id,
    name: game.name,
    description: game.description_raw,
    images: games[selectedIndex].short_screenshots.map((image) => image.image),
    esrb_rating: game.esrb_rating.name,
    developers: game.developers.map((developer) => developer.name),
    publishers: game.publishers.map((publisher) => publisher.name),
    rating: game.rating,
    rating_top: game.rating_top,
    platforms: game.parent_platforms.map(
      (platform) => logoMapper[platform.platform.slug]
    ),
    website: game.website,
  };
}

export default gameHelper;

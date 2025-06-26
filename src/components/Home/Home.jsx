import styles from "./Home.module.css";

function Home() {
  return (
    <div className={styles.home}>
      <section
        className={`${styles.home__section} ${styles.home__section_style_one}`}
      >
        <div className={`${styles.home__section_content} container`}>
          <div>
            <h1>Welcome To the Chilling Gamers</h1>
            <p>This is a simulation of a game store website.</p>
          </div>
          <img
            src="/src/assets/images/game-background-one.jpg"
            alt="game background one"
          />
        </div>
      </section>
      <section
        className={`${styles.home__section} ${styles.home__section_style_two}`}
      >
        <div className={`${styles.home__section_content} container`}>
          <div>
            <h1>Variety Of Games</h1>
            <p>Get acess to as many games as you want.</p>
          </div>
          <img
            src="/src/assets/images/game-background-two.jpg"
            alt="game background two"
          />
        </div>
      </section>
      <section
        className={`${styles.home__section} ${styles.home__section_style_one}`}
      >
        <div className={`${styles.home__section_content} container`}>
          <div>
            <h1>Gaming Gamers</h1>
            <p>Join with us to enjoy unforgettable moments of your life.</p>
          </div>
          <img
            src="/src/assets/images/game-background-three.png"
            alt="game background three"
          />
        </div>
      </section>
    </div>
  );
}

export default Home;

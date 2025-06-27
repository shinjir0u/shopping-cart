import styles from "./Home.module.css";

function Home() {
  return (
    <div className={styles.home}>
      <section
        className={`${styles.home__section} ${styles.home__section_style_one}`}
      >
        <div className={`${styles.home__section_content} container`}>
          <div>
            <h1>Welcome</h1>
            <p>
              This is a simulation of a game store website. Lorem ipsum dolor
              sit, amet consectetur adipisicing elit. Qui, voluptatibus odit
              quibusdam maxime facere alias?
            </p>
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
          <img
            src="/src/assets/images/game-background-two.jpg"
            alt="game background two"
          />
          <div>
            <h1>Variety Of Games</h1>
            <p>
              Get acess to as many games as you want. Lorem ipsum, dolor sit
              amet consectetur adipisicing elit. Repellendus nisi dolor laborum
              modi ducimus magni?
            </p>
          </div>
        </div>
      </section>
      <section
        className={`${styles.home__section} ${styles.home__section_style_one}`}
      >
        <div className={`${styles.home__section_content} container`}>
          <div>
            <h1>Gaming Gamers</h1>
            <p>
              Join with us to enjoy unforgettable moments of your life. Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus
              voluptatibus natus maxime soluta repudiandae quasi?
            </p>
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

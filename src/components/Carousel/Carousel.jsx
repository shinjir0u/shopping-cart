import { useState } from "react";
import styles from "./Carousel.module.css";

function Carousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  function setPreviousImage() {
    setCurrentIndex((previousIndex) =>
      previousIndex === 0 ? images.length - 1 : previousIndex - 1
    );
  }

  function setNextImage() {
    setCurrentIndex((previousIndex) =>
      previousIndex === images.length - 1 ? 0 : previousIndex + 1
    );
  }

  return (
    <div className={styles.carousel}>
      <div className={styles.image_container}>
        <span className={styles.currentPosition}>{`${currentIndex + 1} / ${
          images.length
        }`}</span>
        <button className={styles.previousButton} onClick={setPreviousImage}>
          &#8592;
        </button>
        <img
          key={currentIndex}
          className={styles.image}
          src={images[currentIndex]}
          alt="game image"
        />
        <button className={styles.nextButton} onClick={setNextImage}>
          &#8594;
        </button>
      </div>
      <ul className={styles.dots}>
        {images.map((image, index) => (
          <li
            key={index}
            className={`${styles.dot} ${
              index === currentIndex ? styles.active : ""
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </ul>
    </div>
  );
}

export default Carousel;

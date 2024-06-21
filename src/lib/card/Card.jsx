import styles from "./Card.module.css";
import { createContext } from "react";

export const CardContext = createContext(null);

function Card({ isFront, setIsFront, front, back, opacity = 1 }) {
  const frontStyles = {
    position: isFront ? "relative" : "absolute",
    transform: `rotateY(${isFront ? 0 : 180}deg)`,
  };
  const backStyles = {
    position: isFront ? "absolute" : "relative",
    zIndex: isFront ? "1" : "2",
    transform: `rotateY(${isFront ? -180 : 0}deg)`,
  };
  return (
    <CardContext.Provider
      value={{
        isFront: isFront,
        setIsFront: setIsFront,
      }}
    >
      <div className={styles.card} style={{ opacity: opacity }}>
        <div className={styles["card-front"]} style={frontStyles}>
          {front}
        </div>
        {!!back && (
          <div className={styles["card-back"]} style={backStyles}>
            {back}
          </div>
        )}
      </div>
    </CardContext.Provider>
  );
}

export default Card;

import { useState, createContext } from "react";

import styles from "./QuestionLayout.module.css";

import Card from "lib/card/Card";
import QuestionBackCard from "./QuestionBackCard";
import QuestionCardLayout from "lib/card/QuestionCardLayout";
import ContentGridLayout from "lib/card/ContentGridLayout";
import FancyHeader from "lib/FancyHeader";

export const QuestionLayoutContext = createContext(null);
export const QuestionInfoContext = createContext(null);

export function QuestionLayout({
  title,
  id,
  children,
  images,
  hint,
  info,
  histInfo = "",
  showSecondRowImages = false,
  customFront = null,
}) {
  const alreadySolved = !!localStorage.getItem(id);

  const [isFront, setIsFront] = useState(!alreadySolved);
  const [answerState, setAnswerState] = useState(alreadySolved);
  console.log(isFront);
  const checkAnswerOnClick = (good) => {
    if (good) {
      localStorage.setItem(id, true);
      setAnswerState(true);
    }
    setIsFront(false);
  };

  const front = customFront || (
    <QuestionCardLayout>
      <QuestionInfoContext.Provider
        value={{
          hint: hint,
        }}
      >
        <ContentGridLayout
          title={
            <div className={styles["heading"]}>
              <FancyHeader className={styles["title"]} text={title} />
            </div>
          }
          content={children}
          customStyles={{ gridcolumnAuto: true }}
        />
      </QuestionInfoContext.Provider>
    </QuestionCardLayout>
  );

  return (
    <QuestionLayoutContext.Provider value={checkAnswerOnClick}>
      <Card
        isFront={isFront}
        setIsFront={setIsFront}
        front={front}
        back={
          <QuestionBackCard
            info={info}
            histInfo={histInfo}
            showSecondRowImages={showSecondRowImages}
            images={images}
            answerState={answerState}
            title={title}
          />
        }
      />
    </QuestionLayoutContext.Provider>
  );
}

export default QuestionLayout;

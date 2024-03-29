import { useState, useEffect, useContext, createContext } from "react";

import styles from "./QuestionLayout.module.css";

import Card from "lib/card/Card";
import QuestionBackCard from "./QuestionBackCard";
import QuestionCardLayout from "lib/card/QuestionCardLayout";
import ContentGridLayout from "lib/card/ContentGridLayout";
import FancyHeader from "lib/FancyHeader";
import { CardModalContext } from "lib/card/CardModal";
import CardHint from "./CardHint";

export const QuestionLayoutContext = createContext(null);
export const QuestionInfoContext = createContext(null);

export function QuestionLayout({
  title,
  id,
  children,
  images,
  hint,
  info,
  showSecondRowImages = false,
  customFront = null,
}) {
  const alreadySolved = !!localStorage.getItem(id);
  const ctx = useContext(CardModalContext);

  useEffect(() => {
    if (alreadySolved) {
      ctx.flip(false);
    }
  }, []);

  const [answerState, setAnswerState] = useState(alreadySolved);

  const checkAnswerOnClick = (good) => {
    if (good) {
      localStorage.setItem(id, true);
      setAnswerState(true);
    }
    ctx.flip();
  };

  const front = customFront || (
    <QuestionCardLayout>
      <QuestionInfoContext.Provider value={{
        hint: hint
      }}>
        <ContentGridLayout
          title={
            <div className={styles["heading"]}>
              <FancyHeader className={styles["title"]} text={title} />
            </div>
          }
          content={children}
        />
      </QuestionInfoContext.Provider>
    </QuestionCardLayout>
  );

  return (
    <QuestionLayoutContext.Provider value={checkAnswerOnClick}>
      <Card
        front={front}
        back={
          <QuestionBackCard
            info={info}
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

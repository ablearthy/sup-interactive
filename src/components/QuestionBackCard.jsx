import { cloneElement, useContext, useState } from "react";

import styles from "./QuestionBackCard.module.css";

import QuestionCardLayout from "lib/card/QuestionCardLayout";
import ContentGridLayout from "lib/card/ContentGridLayout";
import FancyHeader from "lib/FancyHeader";
import Button from "lib/Button";
import { CardModalContext } from "lib/card/CardModal";
import { findNextUnansweredQuestionIndex } from "js/BridgesUtils";
import { RootContext } from "js/RootContext";

function sidebar(images, [isHistShown, setIsHistShown]) {
  return (
    <div className={styles["sidebar"]}>
      <div className={styles["sidebar-main-image"]}>
        {images[0]}
        <div className={styles["sidebar-show-hist-btn"]}>
          <button onClick={() => setIsHistShown(!isHistShown)}>
            {isHistShown ? "Обратно" : "Узнать больше"}
          </button>
        </div>
      </div>
      <div className={styles["sidebar-extra-images"]}>
        {images[1].map((e, idx) => cloneElement(e, { key: idx }))}
      </div>
    </div>
  );
}

function NextButton() {
  const rootCtx = useContext(RootContext);
  const ctx = useContext(CardModalContext);
  const onClick = () => {
    ctx.closeModal();
    const nextIdx = findNextUnansweredQuestionIndex(ctx.idx);
    if (nextIdx !== -1) {
      const [, setShowModal] = rootCtx.richBridges[nextIdx].modalState;
      setTimeout(() => setShowModal(true), 400);
    }
  };
  return <Button onClick={onClick}>Дальше!</Button>;
}

function QuestionBackCard({
  info,
  showSecondRowImages,
  images,
  answerState,
  title,
  histInfo = "",
}) {
  const [isHistShown, setIsHistShown] = useState(false);

  const wrongAnswerBackContent = (
    <div className={styles["back-content"]}>
      <p>Неверно! Попробуйте ещё раз или воспользуйтесь подсказкой!</p>
      <div className={styles["row"]}>
        <Button>Ещё раз!</Button>
        <NextButton />
      </div>
    </div>
  );

  const goodAnswerBackContent = (
    <div className={styles["content"]}>
      <h2 className={styles["good-subheading"]}>
        {isHistShown ? "Историческая справка" : "Кстати!"}
      </h2>
      <div className={styles["content-info"]}>
        {isHistShown ? histInfo : info}
      </div>
      <div
        className={styles["sidebar-extra-images"]}
        style={
          showSecondRowImages ? { marginBottom: "1rem" } : { display: "none" }
        }
      >
        {images[1].map((e, idx) => cloneElement(e, { key: idx }))}
      </div>
      <div className={styles["row"]}>
        <NextButton />
      </div>
      <div className={styles["footer"]}></div>
    </div>
  );

  return (
    <QuestionCardLayout>
      <ContentGridLayout
        title={
          <FancyHeader
            className={styles["title"]}
            text={answerState ? "Верно!" : title}
          />
        }
        content={answerState ? goodAnswerBackContent : wrongAnswerBackContent}
        sidebar={
          answerState
            ? sidebar(images, [isHistShown, setIsHistShown])
            : undefined
        }
        customStyles={{
          title: isHistShown ? { opacity: 0 } : undefined,
        }}
      />
    </QuestionCardLayout>
  );
}

export default QuestionBackCard;

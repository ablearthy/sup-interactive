import { useState, useContext } from "react";

import styles from "./QuestionTextInput.module.css";

import Button from "lib/Button";
import { QuestionInfoContext, QuestionLayoutContext } from "./QuestionLayout";
import CardHint from "./CardHint";

function QuestionTextInput({ children, rightAnswers }) {
  const [answerValue, setAnswerValue] = useState("");
  const qCtx = useContext(QuestionLayoutContext);
  const cardCtx = useContext(QuestionInfoContext);

  return (
    <div className={styles["content-wrapper"]}>
      {children}
      <div className={styles["form"]}>
        <input
          className={styles["input"]}
          placeholder="Введите ответ"
          type="text"
          value={answerValue}
          onChange={(e) => setAnswerValue(e.target.value)}
        />
        <CardHint hint={cardCtx.hint} />
        <Button
          onClick={() =>
            qCtx(rightAnswers.includes(answerValue.toLocaleLowerCase().trim()))
          }
        >
          Отправить
        </Button>
      </div>
    </div>
  );
}

export default QuestionTextInput;

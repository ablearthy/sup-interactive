import { useState, useContext, createContext } from "react";

import styles from "./QuestionTextInput.module.css";

import Button from "lib/Button";
import { QuestionInfoContext, QuestionLayoutContext } from "./QuestionLayout";
import CardHint from "./CardHint";

export const QuestionTextInputContext = createContext();

function QuestionTextInput({ children, rightAnswers }) {
  const [answerValue, setAnswerValue] = useState("");
  const qCtx = useContext(QuestionLayoutContext);
  const cardCtx = useContext(QuestionInfoContext);

  return (
    <div className={styles["content-wrapper"]}>
      <QuestionTextInputContext.Provider
        value={{ answerValue, setAnswerValue }}
      >
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
              qCtx(
                rightAnswers.includes(answerValue.toLocaleLowerCase().trim()),
              )
            }
          >
            Отправить
          </Button>
        </div>
      </QuestionTextInputContext.Provider>
    </div>
  );
}

export default QuestionTextInput;

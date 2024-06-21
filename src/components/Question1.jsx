import QuestionChoice from "./QuestionChoice";
import { QuestionLayoutContext, QuestionLayout } from "./QuestionLayout";
import Button from "lib/Button";
import styles from "./Question1.module.css";
import { useContext } from "react";
import CardHint from "./CardHint";

import q01img1 from "img/questions/01/1.jpg";
import q01img2 from "img/questions/01/2.jpg";

const hint =
  "Два из перечисленных относятся к одному замку, но носят разные его названия";

const Info = (
  <>
    <p>
      В 1906 году во время разборки пролета старого моста произошел инцидент:
      один из десятников распорядился прорубить верхнюю часть свода поперек —
      вместо того, чтобы разбирать его продольными полосами. Из-за этого
      обвалился кирпичный свод, 40 рабочих, которые находились на мосту,
      свалились в воду. Трое утонули, остальных удалось спасти.
    </p>
  </>
);

const HistInfo = (
  <>
    <p>
      Первый деревянный мост был открыт в 1710-е годы, в 1836 году стал
      каменным, а в 1907 году по проекту инженера А. П. Пшеницкого и архитектора
      Л. А. Ильина был полностью перестроен.
    </p>
  </>
);

function Content() {
  const options = [
    ["Зимний сад", false],
    ["Михайловский сквер", false],
    ["Марсово поле", true],
    ["Михайловский сад", true],
    ["Летний сад", true],
    ["Сквер у Инженерного Замка", true],
  ];
  const choice = QuestionChoice(
    options.map((x) => x[0]),
    styles["toggled"],
    true,
  );
  const ctx = useContext(QuestionLayoutContext);

  const cmp = (lhs, rhs) => {
    if (lhs.length !== rhs.length) {
      return false;
    }

    for (var i = 0; i < lhs.length; i++) {
      if (lhs[i] !== rhs[i]) {
        return false;
      }
    }
    return true;
  };

  return (
    <div className={styles["content-wrapper"]}>
      <p>
        Название моста связано с его местоположением: 1-й Садовый мост окружен
        зелеными насаждениями со всех четырех сторон. Выберите из списка
        названия этих насаждений:
      </p>
      <div className={styles["buttons"]}>
        {options.map((content, idx) => {
          return (
            <Button key={idx} onClick={choice.onClick(idx)}>
              {content[0]}
            </Button>
          );
        })}
      </div>
      <CardHint hint={hint} />
      <Button
        className={styles["submit-button"]}
        onClick={() =>
          ctx(
            cmp(
              choice.checked,
              options.map((x) => x[1]),
            ),
          )
        }
      >
        Отправить
      </Button>
    </div>
  );
}

function Question1({ id, title }) {
  return (
    <QuestionLayout
      id={id}
      title={title}
      images={[
        <img alt="" src={q01img1} style={{ objectFit: "cover" }} />,
        [<img alt="" src={q01img2} style={{ objectFit: "cover" }} />],
      ]}
      showSecondRowImages={false}
      hint={hint}
      info={Info}
      histInfo={HistInfo}
    >
      <Content />
    </QuestionLayout>
  );
}

export default Question1;

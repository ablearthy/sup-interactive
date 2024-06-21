import styles from "./Question11.module.css";

import QuestionLayout from "./QuestionLayout";
import QuestionTextInput, {
  QuestionTextInputContext,
} from "components/QuestionTextInput";

import q11img1 from "img/questions/11/1.jpg";
import q11img2 from "img/questions/11/2.jpg";
import { useContext } from "react";

const hint = "Деньги были уничтожены безвозвратно";
const rightAnswers = ["сжечь"];

const Info = (
  <>
    <p>
      Многие верят, что грифоны на Банковском помогают исполнять желания. При
      реставрации внутри скульптур было найдено множество записок с пожеланиями,
      например:
    </p>
    <p>«Силы духа, хлеба, свободы, независимости»</p>
    <p>
      «Хочу срочнейше мужчину, который будет меня уважать, любить, содержать»
    </p>
    <p>
      «Хочу с Наташей прожить всю жизнь, иметь много деток, здоровых и
      счастливых. Чтобы в семье была любовь и радость. Здоровья моим родителям и
      ее родителям. Счастья тебе, грифон!»
    </p>
    <p>«Лёва, хочу тачку Шевроле Трейлблейзер»</p>
  </>
);

const HistInfo = (
  <>
    <p>
      Один из шести цепных мостов Санкт-Петербурга был построен в 1826 году по
      проекту инженера В. К. фон Треттера и скульптора П. П. Соколова. Получил
      название по расположенному рядом Ассигнационному банку.
    </p>
    <p>
      Первоначальная конструкция Банковского моста не сохранилась. В настоящее
      время это однопролетный стальной балочный мост, цепи же выполняют лишь
      декоративную функцию.
    </p>
  </>
);

function Content() {
  const { answerValue } = useContext(QuestionTextInputContext);

  return (
    <div>
      <p>
        Первые российские кредитные учреждения — банки — появились при Елизавете
        Петровне в 1754 г., когда деньги были ещё металлическими. Императрица
        Екатерина II впервые ввела в оборот бумажные деньги — ассигнации (1760-е
        гг.) и создала Ассигнационный банк.
      </p>
      <p>
        Итогом правления Екатерины стало появление большого количества бумажных
        денег, что привело к серьезной инфляции. Для борьбы с этой проблемой сын
        Екатерины, Павел I, издал следующий указ:
      </p>
      <p>
        «На Дворцовой площади следует{" "}
        <span className={styles["filled"]}>{answerValue}</span> лишние 5
        миллионов рублей ассигнациями».
      </p>
      <p>
        Попробуйте догадаться, что было приказано сделать с деньгами, и
        заполните пропуск одним словом.
      </p>
    </div>
  );
}

function Question11({ id, title }) {
  return (
    <QuestionLayout
      id={id}
      title={title}
      images={[
        <img alt="" src={q11img1} style={{ objectFit: "cover" }} />,
        [<img alt="" src={q11img2} style={{ objectFit: "cover" }} />],
      ]}
      showSecondRowImages={true}
      hint={hint}
      info={Info}
      histInfo={HistInfo}
    >
      <QuestionTextInput rightAnswers={rightAnswers}>
        <Content />
      </QuestionTextInput>
    </QuestionLayout>
  );
}

export default Question11;

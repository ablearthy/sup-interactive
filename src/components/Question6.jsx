import QuestionChoice from "./QuestionChoice";
import { QuestionLayoutContext, QuestionLayout } from "./QuestionLayout";
import Button from "lib/Button";
import styles from "./Question6.module.css";
import { useContext } from "react";
import CardHint from "./CardHint";

import q06img1 from "img/questions/06/1.jpg";
import q06img2 from "img/questions/06/2.jpg";

const hint = "Емельян Пугачев — оппозиционер";

const Info = (
  <>
    <p>
      Преображенский и Семеновский полки были первыми в русской гвардии. Их
      создал в 1690 году Петр I из потешных войск, размещавшихся в
      Преображенском и Семеновском селах под Москвой. В 1730 году был
      сформирован еще один гвардейский полк — Измайловский.
    </p>
    <p>
      Для старейших гвардейских полков — Преображенского, Семеновского и
      Измайловского — в Санкт-Петербурге в 1730-е годы были выделены территории
      в предместье столицы, за Фонтанкой, служившей тогда границей города.
    </p>
  </>
);

const HistInfo = (
  <>
    <p>
      Первая деревянная переправа на этом месте появилась в середине XVIII века.
      В 1780-е годы, как и другие мосты на Фонтанке, Измайловский перестроили по
      типовому проекту Ж.—Р. Перроне.
    </p>
    <p>
      В 1861 году при реконструкции по проекту инженера В. В. Дыммана на мосту
      ликвидировали надмостовые башенки, заменили деревянный разводной пролет,
      расширили проезжую часть.
    </p>
  </>
);

function Content() {
  const options = [
    [
      "Солдат Данила",
      false,
      [
        "180 см",
        "25 лет",
        "Дед Данилы служил в гвардии Преображенского полка",
        "Замечен в компании соратников Емельяна Пугачева",
      ],
    ],
    [
      "Солдат Александр",
      false,
      [
        "169 см",
        "21 год",
        "Отец Александра — генерал-майор",
        "Обучался в гарнизонной школе, но завалил почти все экзамены",
      ],
    ],
    [
      "Солдат Кондратий",
      true,
      [
        "178 см",
        "24 года",
        "Никого в роду с чином выше полковника нет",
        "Отличился на фронте русско-турецкой войны 1768—1774 гг.",
      ],
    ],
  ];

  const choice = QuestionChoice(
    options.map((x) => x[1]),
    styles["toggled"],
    false,
  );

  const ctx = useContext(QuestionLayoutContext);

  const cmp = (lhs, rhs) => {
    if (lhs.length != rhs.length) {
      return false;
    }

    for (var i = 0; i < lhs.length; i++) {
      if (lhs[i] != rhs[i]) {
        return false;
      }
    }
    return true;
  };

  return (
    <div className={styles["content-wrapper"]}>
      <p>
        Измайловский мост получил имя по названию лейб-гвардии Измайловского
        полка, слобода которого находилась на левом берегу Фонтанки. <br />
        Известно, что при поступлении в этот полк солдаты проходили строжайший
        отбор по множеству критериев: рост, возраст, физические данные,
        социальный статус, образование, политические взгляды, внешность и т.д.
        Предположите, чего именно ожидали от кандидатов и выберите наилучшего
        солдата из трех предложенных:
      </p>
      <div className={styles["buttons"]}>
        {options.map((content, idx) => {
          return (
            <div key={idx} className={styles["option"]}>
              <Button onClick={choice.onClick(idx)}>{content[0]}</Button>
              <ol>
                {content[2].map((text, idx) => {
                  return <li key={idx}>{text}</li>;
                })}
              </ol>
            </div>
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

function Question6({ id, title }) {
  return (
    <QuestionLayout
      id={id}
      title={title}
      images={[
        <img alt="" src={q06img1} style={{ objectFit: "cover" }} />,
        [<img alt="" src={q06img2} style={{ objectFit: "cover" }} />],
      ]}
      showSecondRowImages={false}
      hint={hint}
      info={Info}
      histInfo={HistInfo}
    >
      <Content hint={hint} />
    </QuestionLayout>
  );
}

export default Question6;

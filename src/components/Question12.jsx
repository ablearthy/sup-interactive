import QuestionChoice from "./QuestionChoice";
import { QuestionLayoutContext, QuestionLayout } from "./QuestionLayout";
import Button from "lib/Button";
import styles from "./Question1.module.css";
import { useContext } from "react";
import CardHint from "./CardHint";

import q12img1 from "img/questions/12/1.jpg";
import q12img2 from "img/questions/12/2.jpg";

const hint =
  "Примем стоимость проезда за 49 рублей — столько мы платим за первую поездку по карте «Подорожник»";

const Info = (
  <>
    <p>
      В 1894 году инженер Л. Н. Колпицын попросил разрешения у городской Думы
      построить мост через Екатерининский канал на собственные средства и в
      течение 10 лет брать за проход по мосту по 1 копейке с человека. После
      этого срока мост он планировал передать в собственность города. Однако
      инженеру отказали. Несмотря на противодействие властей, спустя два года
      Колпицын на свои деньги (3500 рублей) возвел первую деревянную версию
      Итальянского моста.
    </p>
  </>
);

const HistInfo = (
  <>
    <p>
      Пешеходный мост через Екатерининский канал в створе Итальянской улицы был
      возведен в 1896 году по проекту и на средства инженера Л. Н. Колпицына.
    </p>
    <p>
      Современный мост построен в 1955 году по проекту института
      «Ленгипроинжпроект», его авторы — инженер А. Д. Гутцайт и архитектор В. С.
      Васильковский.
    </p>
  </>
);

function Content() {
  const options = [
    ["17 836 000", true],
    ["25 480 000", false],
    ["16 380 000", false],
    ["20 020 000", false],
  ];
  const choice = QuestionChoice(
    options.map((x) => x[0]),
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
        В конце XIX века на возведение этого моста потратили 3500 рублей.
        Посчитайте стоимость строительства на современные деньги, если 1 рубль
        1890-х годов равен 104 поездкам в метро Санкт-Петербурга по карте
        «Подорожник». Выберите верный вариант:
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

function Question12({ id, title }) {
  return (
    <QuestionLayout
      id={id}
      title={title}
      images={[
        <img alt="" src={q12img1} style={{ objectFit: "cover" }} />,
        [<img alt="" src={q12img2} style={{ objectFit: "cover" }} />],
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

export default Question12;

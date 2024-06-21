import QuestionTextInput from "components/QuestionTextInput";
import QuestionLayout from "components/QuestionLayout";

import img from "img/questions/10/q1.jpg";

import styles from "./Question10.module.css";
import commonStyles from "lib/commons.module.css";

import q10img1 from "img/questions/10/1.jpg";
import q10img2 from "img/questions/10/2.jpg";

const hint = "Главные герои произведений: Е. О. и Р. Р.";

const rightAnswers = ["пушкин достоевский", "достоевский пушкин"];

const Info = (
  <div className={commonStyles["paragraph"]}>
    <p>
      Роман Ф. М. Достоевского «Преступление и Наказание» начинается со слов: «В
      начале июля, в чрезвычайно жаркое время, под вечер, один молодой человек
      вышел из своей каморки, … на улицу и медленно, как бы в нерешимости,
      отправился к К-ну мосту.
    </p>
  </div>
);

const HistInfo = (
  <>
    <p>
      Мост продолжает одноименный переулок — один из самых коротких переулков в
      Санкт-Петербурге. Название они получили от питейного заведения, которое в
      середине XVIII века находилось на углу переулка и Садовой улицы и
      принадлежало купцу Кокушкину.
    </p>
    <p>
      В конце того же века на этом месте построили постоянную переправу из
      дерева. До середины XX века мост неоднократно реконструировали и
      ремонтировали. В настоящее время сохранился однопролетный металлический
      мост, построенный в 1946 г. по проекту инженера Б. Б. Левина.
    </p>
  </>
);

function Content() {
  return (
    <div className={styles["content-wrapper"]}>
      <img className={styles["image"]} src={img} alt="Ф. М. Достоевский" />
      <div className={`${commonStyles["paragraph"]} ${styles["content"]}`}>
        <p>
          Кокушкин мост — один из самых «литературных» в Санкт-Петербурге.
          Посмотрите на картинку и попытайтесь догадаться, какие два
          прославленных автора упоминают этот мост в своих произведениях.
          (запишите ответ в таком виде: Иванов Петров)
        </p>
      </div>
    </div>
  );
}

function Question10({ id, title }) {
  return (
    <QuestionLayout
      id={id}
      title={title}
      images={[
        <img alt="" src={q10img1} style={{ objectFit: "cover" }} />,
        [<img alt="" src={q10img2} style={{ objectFit: "cover" }} />],
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

export default Question10;

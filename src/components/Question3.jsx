import img1 from "img/questions/03/q1.jpg";
import img2 from "img/questions/03/q2.jpg";
import img3 from "img/questions/03/q3.jpg";
import img4 from "img/questions/03/q4.jpg";

import q03img1 from "img/questions/03/1.jpg";
import q03img2 from "img/questions/03/2.jpg";

import QuestionTextInput from "components/QuestionTextInput";
import QuestionLayout from "components/QuestionLayout";

import styles from "./Question3.module.css";

const rightAnswers = ["подкова", "подковы"];
const hint = "ранее на Литейном находились кузницы";

const Info = (
  <>
    <p>
      В 1741 году персидский шах преподнес в подарок русской императрице Анне
      Иоанновне 14 слонов. Чтобы их могли представить пред царственные очи,
      пришлось усиливать мост.
    </p>
  </>
);

const HistInfo = (
  <>
    <p>
      В 1716 году на этом месте появился первый деревянный мост. В 1841 году
      инженеры И. Ф. Буттац и А. Х. Редер спроектировали арочную трехпролетную
      переправу — мост приобрел современный облик.
    </p>
  </>
);

function Content() {
  return (
    <>
      <p>
        Аничков мост знаменит группами «Укрощение коня человеком», созданными
        ваятелем П. К. Клодтом. Каких только легенд не придумывали про этих
        коней! Чтобы успешно преодолеть этот мост, ответьте на вопрос: что есть
        у двух коней, стремящихся от Литейного проспекта? И того же самого нет у
        тех, кто движется к нему.
      </p>
      <div className={styles["images-block"]}>
        <div className={styles["images-block2"]}>
          <div className={styles["image-block"]}>
            {/* <div>1</div> */}
            <img src={img1} alt="" />
          </div>
          <div className={styles["image-block"]}>
            {/* <div>2</div> */}
            <img src={img2} alt="" />
          </div>
        </div>
        <div className={styles["images-block2"]}>
          <div className={styles["image-block"]}>
            {/* <div>3</div> */}
            <img src={img3} alt="" />
          </div>
          <div className={styles["image-block"]}>
            {/* <div>4</div> */}
            <img src={img4} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

function Question3({ id, title }) {
  return (
    <QuestionLayout
      id={id}
      title={title}
      images={[
        <img alt="" src={q03img1} style={{ objectFit: "cover" }} />,
        [<img alt="" src={q03img2} style={{ objectFit: "cover" }} />],
      ]}
      showSecondRowImages={false}
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

export default Question3;

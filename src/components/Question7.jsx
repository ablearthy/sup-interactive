import QuestionTextInput from "components/QuestionTextInput";
import QuestionLayout from "components/QuestionLayout";

import q07img1 from "img/questions/07/1.jpg";
import q07img2 from "img/questions/07/2.jpg";

const Info = (
  <>
    <p>
      Пикалов мост знаменит тем, что с него хорошо просматриваются одновременно
      семь других переправ: Могилевский, Красногвардейский, Ново-Никольский,
      Смежный, Старо-Никольский, Кашин и Торговый мосты.
    </p>
    <p>
      К настоящему времени Пикалов мост — единственная переправа в этой части
      города, в целом сохранившая исторический облик.
    </p>
  </>
);

const HistInfo = (
  <>
    <p>
      Мост сооружен в 1785 году трехпролетным деревянным на каменных опорах с
      центральным разводным пролетом. Название переправа получила по фамилии
      строившего ее подрядчика.
    </p>
    <p>
      При реконструкции в начале XX века Пикалов мост стал металлическим. В
      1980-е гг. усилили свайное основания опор и устоев, пролетное строение
      заменили на железобетонное балочное.
    </p>
  </>
);

const rightAnswers = ["пикалов"];

const hint = "Находится в центре композиции";

function Question7({ id, title }) {
  return (
    <QuestionLayout
      id={id}
      title={title}
      images={[
        <img alt="" src={q07img1} style={{ objectFit: "cover" }} />,
        [<img alt="" src={q07img2} style={{ objectFit: "cover" }} />],
      ]}
      showSecondRowImages={false}
      hint={hint}
      info={Info}
      histInfo={HistInfo}
    >
      <QuestionTextInput rightAnswers={rightAnswers}>
        <div>
          Семимостье, как следует из названия, представляет собой ансамбль из
          семи мостов. Но есть только одна точка на определенном месте, откуда
          видно все семь переправ. Взгляните на карту и определите, что это за
          мост? (запишите в формате: дворцовый)
        </div>
      </QuestionTextInput>
    </QuestionLayout>
  );
}

export default Question7;

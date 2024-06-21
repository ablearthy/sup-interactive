import QuestionTextInput from "components/QuestionTextInput";
import QuestionLayout from "components/QuestionLayout";

import q05img1 from "img/questions/05/1.jpg";
import q05img2 from "img/questions/05/2.jpg";

const hint = "Эти мосты участвуют в шоу «Поющие мосты»";

const Info = (
  <>
    <p>
      За историю своего существования мост претерпел несколько реконструкций. К
      1940-м годам на этом месте соорудили трехпролетный арочный мост из
      железобетона.
    </p>
  </>
);

const HistInfo = (
  <>
    <p>
      В 1717 году был построен деревянный мост. В 1738 году переправу
      реконструировали. Работы выполняли под руководством «посадского человека»
      Обухова, в честь которого мост получил название Обуховский.
    </p>
    <p>
      В 1787 году, как и другие мосты на Фонтанке, его перестроили по типовому
      проекту Ж.—Р. Перроне. Во время очередных реноваций изменяли конструкцию
      свода, ширину проезжей части.
    </p>
  </>
);

const rightAnswers = ["разводные", "разводной"];

function Question5({ id, title }) {
  return (
    <QuestionLayout
      id={id}
      title={title}
      images={[
        <img alt="" src={q05img1} style={{ objectFit: "cover" }} />,
        [<img alt="" src={q05img2} style={{ objectFit: "cover" }} />],
      ]}
      showSecondRowImages={false}
      hint={hint}
      info={Info}
      histInfo={HistInfo}
    >
      <QuestionTextInput rightAnswers={rightAnswers}>
        <div>
          У первого деревянного моста через Фонтанку в створе современного
          Московского проспекта в средней части была поперечная щель шириной 70
          см для прохода судна. Как называются мосты, обеспечивающие пропуск
          кораблей? (запишите одно слово)
        </div>
      </QuestionTextInput>
    </QuestionLayout>
  );
}

export default Question5;

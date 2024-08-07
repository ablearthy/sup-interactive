import QuestionTextInput from "components/QuestionTextInput";
import QuestionLayout from "components/QuestionLayout";

import img1 from "img/questions/pevchesky/01.jpg";
import img2 from "img/questions/pevchesky/02.jpg";

const hint = "Колонна сооружена по проекту упомянутого в вопросе архитектора.";
const rightAnswers = [
  "александринская",
  "александрийская",
  "александровская",
  "александрова",
  "александринская колонна",
  "александрийская колонна",
  "александрова колонна",
  "александровская колонна",
  "александринский столп",
  "александрийский столп",
];

const Info = (
  <>
    <p>
      Нынешнее название моста связано с тем, что он вел к Придворной певческой
      капелле, историю которой ведут с XV века! При Петре I Капелла переехала из
      Москвы в Петербург. В самом конце XVIII века ее директором стал Дмитрий
      Степанович Бортнянский, чьи произведения до сих пор изучают воспитанники
      музыкальных школ. Именно Дмитрий Степанович выкупил земельный участок
      напротив будущего Певческого моста, где впоследствии расположилась
      Капелла.
    </p>
  </>
);

const HistInfo = (
  <>
    <p>
      Мост был построен в 1834 году по проекту архитектора Огюста Монферрана.
      Первоначально он назывался Желтым. В 1838–1840-х гг. на месте деревянного
      по проекту инженера Е. А. Адама был построен однопролетный арочный
      чугунный мост с очень красивыми литыми чугунными решетками. Торжественное
      открытие состоялось в 1840 году. Первым по новой переправе проехал
      император Николай I. Впоследствии мост неоднократно ремонтировался и
      реставрировался, в 1937 году его заасфальтировали. Последняя реконструкция
      была проведена в 2004 году: мост был укреплен, его устои и свод усилены,
      выправлена геометрия арочного свода.
    </p>
  </>
);

function Pevchesky({ id, title }) {
  return (
    <QuestionLayout
      id={id}
      title={title}
      images={[
        <img alt="" src={img1} style={{ objectFit: "cover" }} />,
        [<img alt="" src={img2} style={{ objectFit: "cover" }} />],
      ]}
      showSecondRowImages={true}
      hint={hint}
      info={Info}
      histInfo={HistInfo}
    >
      <QuestionTextInput rightAnswers={rightAnswers}>
        <div>
          Первый деревянный мост в этом месте был построен по проекту
          архитектора Огюста Монферрана для прохода войск на парад по случаю
          открытия знаменитой колонны. Как она называлась?
        </div>
      </QuestionTextInput>
    </QuestionLayout>
  );
}

export default Pevchesky;

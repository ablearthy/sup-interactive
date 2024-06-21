import commonStyles from "lib/commons.module.css";

import QuestionTextInput from "components/QuestionTextInput";
import QuestionLayout from "components/QuestionLayout";

import q08img1 from "img/questions/08/1.jpg";
import q08img2 from "img/questions/08/2.jpg";

const hint = "А судьи кто?";

const Info = (
  <p>
    Предположительно в одном из домов на канале Грибоедова недалеко от Харламова
    моста «проживала» старуха-процентщица — героиня романа Ф. М. Достоевского
    «Преступление и наказание».
  </p>
);

const HistInfo = (
  <>
    <p>В середине XVIII века на месте Харламова была деревянная переправа.</p>
    <p>
      Название мост получил по расположенному поблизости дому статского
      советника Е. С. Харламова. В 1927 году был переименован в Комсомольский, в
      1991 году ему вернули историческое наименование.
    </p>
    <p>
      В 1934 году по проекту инженеров М. И. Жданова и А. Д. Саперштейн и при
      консультации профессора Г. П. Передерия мост реконструировали.
    </p>
  </>
);

const rightAnswers = ["горе от ума"];

const Content = (
  <div className={`${commonStyles["paragraph"]}`}>
    <p>
      Около Харламова моста в одном из домов проживал знаменитый русский
      писатель. Прочтите отрывок из первого варианта произведения, которое он
      начал писать именно в этом доме. Назовите это произведение. (Ответ
      запишите в формате: война и мир)
    </p>
    <p>
      «Те, кто дожил до своих седых волос! <br />
      Те, кого мы обязаны уважать в пустыне! <br />
      Вот кто наши суровые знатоки и судьи!»
    </p>
  </div>
);

function Question8({ id, title }) {
  return (
    <QuestionLayout
      id={id}
      title={title}
      images={[
        <img alt="" src={q08img1} style={{ objectFit: "cover" }} />,
        [<img alt="" src={q08img2} style={{ objectFit: "cover" }} />],
      ]}
      showSecondRowImages={false}
      hint={hint}
      info={Info}
      histInfo={HistInfo}
    >
      <QuestionTextInput rightAnswers={rightAnswers}>
        {Content}
      </QuestionTextInput>
    </QuestionLayout>
  );
}

export default Question8;

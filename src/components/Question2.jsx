import QuestionTextInput from "components/QuestionTextInput";
import QuestionLayout from "components/QuestionLayout";

import q02img1 from "img/questions/02/1.jpg";
import q02img2 from "img/questions/02/2.jpg";
import q02img3 from "img/questions/02/3.jpg";

const hint = "…, где ты был? На Фонтанке водку…";
const rightAnswers = ["чижик-пыжик"];

const Info = (
  <>
    <p>
      Рядом с мостом расположен самый маленький памятник в Санкт-Петербурге —
      «Чижик-Пыжик» (с 1994 года). По одной из версий, прозвище «чижик-пыжик»
      студентов Императорского училища правоведения послужило названием для
      скульптуры.
    </p>
    <p style={{ marginTop: "1rem" }}>
      «Чижик-пыжик, где ты был? <br />
      На Фонтанке водку пил. <br />
      Выпил рюмку, выпил две — <br />
      Зашумело в голове»
    </p>
  </>
);

const HistInfo = (
  <>
    <p>
      Первый мост появился на этом месте в 1710-х годах. В 1825 году по проекту
      П. П. Базена и Э. К. Клапейрона возвели однопролетное арочное сооружение
      из чугунных тюбингов, скрепленных между собой болтами.
    </p>
    <p>
      В 1952—1954 гг. по проекту инженера Б. Б. Левина мост обновили — с заменой
      конструкции пролетного строения и усилением устоев.
    </p>
  </>
);

function Question2({ id, title }) {
  return (
    <QuestionLayout
      id={id}
      title={title}
      images={[
        <img alt="" src={q02img1} style={{ objectFit: "cover" }} />,
        [
          <img alt="" src={q02img2} style={{ objectFit: "cover" }} />,
          <img alt="" src={q02img3} style={{ objectFit: "cover" }} />,
        ],
      ]}
      showSecondRowImages={true}
      hint={hint}
      info={Info}
      histInfo={HistInfo}
    >
      <QuestionTextInput rightAnswers={rightAnswers}>
        <div>
          Неподалёку от моста в 1835 году открылось Императорское училище
          правоведения. Воспитанники училища носили мундиры зелёного цвета с
          желтыми петлицами, которые напоминали оттенок оперения птицы, а зимой
          — особые шапки. В свободное время студенты тайно посещали
          расположенный недалеко трактир, а после нетрезвыми шли гулять по
          набережной и громко петь песни. За такое поведение и внешнее сходство
          студентам дали прозвище и придумали одноименную песенку. Какое это
          было прозвище?
        </div>
      </QuestionTextInput>
    </QuestionLayout>
  );
}

export default Question2;

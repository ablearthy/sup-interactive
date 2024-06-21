import commonStyles from "lib/commons.module.css";

import QuestionTextInput from "components/QuestionTextInput";
import QuestionLayout from "components/QuestionLayout";

import q13img1 from "img/questions/13/1.jpg";
import q13img2 from "img/questions/13/2.jpg";

const hint = "Этот правитель отменил крепостное право";
const rightAnswers = ["александр второй", "александр 2", "александр ii"];

const Info = (
  <>
    <p>
      Небольшие мостики, построенные при слиянии канала Грибоедова и Мойки,
      составляют единое целое, поэтому и фонари на всех трех одинаковые. На
      сложном ажурном основании в XIX веке возвышался красивый шар масляного
      светильника. Однако через несколько месяцев после открытия мостов фонари
      решили укоротить и изменить их конструкцию — после того, как один из
      фонарщиков упал в Мойку.
    </p>
  </>
);

const HistInfo = (
  <>
    <p>
      Уникальная архитектурная и инженерная конструкция из трех мостов была
      построена в 1832 году по проекту инженеров В. К. фон Треттера и Е. А.
      Адама. Она связала два однопролетных металлических моста через Мойку и
      Екатерининский канал: Мало-Конюшенный и Театральный, а также Ложный или
      Пешеходный мост-дамбу. Трехмостье объединяет сразу три петербургских
      острова — Спасский, 1-й Адмиралтейский и Казанский.
    </p>
  </>
);

function Question13({ id, title }) {
  return (
    <QuestionLayout
      id={id}
      title={title}
      images={[
        <img alt="" src={q13img1} style={{ objectFit: "cover" }} />,
        [<img alt="" src={q13img2} style={{ objectFit: "cover" }} />],
      ]}
      showSecondRowImages={false}
      hint={hint}
      info={Info}
      histInfo={HistInfo}
    >
      <QuestionTextInput rightAnswers={rightAnswers}>
        <div className={`${commonStyles["paragraph"]}`}>
          <p>
            История Тройного моста связана с убийством одного из русских
            правителей. Прочитайте краткое описание события и скажите, о ком
            идёт речь? (Запишите ответ в таком виде: Иван Пятый)
          </p>
          <p>
            Кортеж с «правителем» повернул с Инженерной улицы на набережную,
            направляюсь к Тройному мосту. Когда террористы бросили бомбу в
            первый раз, «правитель» не пострадал. Во второй раз бомба попала
            прямо под ноги «правителю». Вскоре он скончался.
          </p>
        </div>
      </QuestionTextInput>
    </QuestionLayout>
  );
}

export default Question13;

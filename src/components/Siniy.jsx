import QuestionTextInput from "components/QuestionTextInput";
import QuestionLayout from "components/QuestionLayout";

import img1 from "img/questions/siniy/01.jpg";
import img2 from "img/questions/siniy/02.jpg";

const hint =
  "Возведение этого здания связано с созданием Петром I военно-морского флота в 1696 году.";
const rightAnswers = ["адмиралтейство", "адмиралтейства"];

const Info = (
  <>
    <p>
      Синий — не единственный цветной в Петербурге. Сохранились еще Красный,
      часть Гороховой улицы, и Зеленый, расположенный по оси Невского проспекта.
      Примечательно, что все цветные мосты перекинуты именно через Мойку. Ранее
      был еще Желтый, однако он потерял свой цвет и получил новое название —
      «Певческий».
    </p>
  </>
);

const HistInfo = (
  <>
    <p>
      Первый деревянный мост по проекту Х. ван Болоса был сооружен в 1730-е гг.
      Это был трехпролетный мост с деревянными пролетными строениями на каменных
      опорах. В 1818 году он был перестроен по проекту инженера В. И. Гесте и
      стал чугунным. В 1840-е гг. происходила перепланировка Исаакиевской
      площади, из-за чего пришлось расширить мост — он стал самым широким в
      Санкт-Петербурге и носит это гордое звание до сих пор, его ширина – 95,4
      метра! В 1930 году Синий был снова перестроен, так как по нему
      планировалось провести трамвайные пути. Именно тогда старый чугунный свод
      был демонтирован и заменен железобетонным. В 1971 году на правом берегу
      Мойки у низовой части моста были нанесены отметки уровней самых крупных
      наводнений XIX-XX веков. Последний капитальный ремонт здесь проводился в
      2013-2014 гг. Сейчас мост является пешеходным и автомобильным.
    </p>
  </>
);

function Siniy({ id, title }) {
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
          В 1736–1737 годах на этом месте по проекту голландского мастера
          Хармана ван Болоса был сооружен первый мост через Мойку. Однако мастер
          гораздо более известен благодаря строительству шпилей. На один из
          своих шпилей он посадил будущий символ Петербурга. Что это было за
          здание?
        </div>
      </QuestionTextInput>
    </QuestionLayout>
  );
}

export default Siniy;

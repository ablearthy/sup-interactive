import styles from "./WelcomeScreen.module.css";
import CardModal from "../lib/card/CardModal";
import { useState } from "react";
import Card from "../lib/card/Card";
import CardLayout from "lib/card/CardLayout";
import FancyHeader from "../lib/FancyHeader";
import Button from "../lib/Button";

function WelcomeScreen() {
  const [showModal, setShowModal] = useState(true);

  const content = (
    <div className={styles.content}>
      <div className={styles.header}>
        <div className={styles.title}>
          <FancyHeader text={"ФОНТАНКА SUP"} />
        </div>
        <div className={styles.subheading}>XI ФЕСТИВАЛЬ САПСЁРФИНГА</div>
      </div>

      <div className={styles.description}>
        Онлайн-квест по маршруту фестиваля «Фонтанка SUP» был создан студентами
        Университета ИТМО совместно с Музеем мостов Санкт-Петербурга. Пройдя
        квест, участники мероприятия смогут узнать самые интересные факты о
        встречающихся им на пути мостах: по ним каждый день проходят тысячи
        людей, но мало кто помнит, какую роль сыграли они в истории города.
        <br />
        <br />
        Желаем интересной игры и незабываемых впечатлений от Северной столицы!
      </div>
      <Button onClick={() => setShowModal(false)}>Поплыли</Button>
    </div>
  );

  return (
    <CardModal
      showModal={showModal}
      setShowModal={setShowModal}
      disableAnimationOnEnter={true}
    >
      <Card
        isFront={true}
        front={<CardLayout>{content}</CardLayout>}
        opacity={0.9}
      />
    </CardModal>
  );
}

export default WelcomeScreen;

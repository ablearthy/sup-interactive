import styles from "./CardModal.module.css";
import commonStyles from "lib/commons.module.css";
import "./ModalFlipTransition.css";
import React, { Fragment, useState, useEffect } from "react";
import Modal from "react-overlays/Modal";
import { createContext, useRef } from "react";

import { CSSTransition, Transition } from "react-transition-group";

const transitionTimeout = 300;

const fadeStyles = {
  entered: "show",
  entering: "show",
};

const Fade = ({ children, ...props }) => (
  <Transition {...props} timeout={transitionTimeout}>
    {(status, innerProps) =>
      React.cloneElement(children, {
        ...innerProps,
        className: `${styles.fade} ${styles[`fade-${fadeStyles[status]}`]} ${
          children.props.className
        }`,
      })
    }
  </Transition>
);

export const CardModalContext = createContext(null);

function CardModal({
  disableAnimationOnEnter = false,
  showModal,
  setShowModal,
  onQuestionSolved,
  children,
}) {
  const questionRef = useRef(null);

  const [showFront, setShowFront] = useState(true);

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    return () => {
      setIsMounted(false);
    };
  }, []);

  const closeModal = () => {
    setShowModal(false);
    setTimeout(() => setShowFront(true), transitionTimeout);
    onQuestionSolved && onQuestionSolved();
  };

  return (
    <Modal
      className={styles.modal}
      show={showModal}
      onHide={closeModal}
      transition={Fade}
    >
      <Fragment>
        <div
          className={`${styles["question-wrapper"]} ${
            !disableAnimationOnEnter || isMounted
              ? ""
              : commonStyles.notransition
          }`}
        >
          <CSSTransition
            in={showFront}
            timeout={transitionTimeout}
            classNames="flip"
          >
            <CardModalContext.Provider
              value={{
                flip: (enableAnimation = true) => {
                  if (!enableAnimation && questionRef.current) {
                    questionRef.current.classList.add(styles["notransition"]);
                  }
                  setShowFront((v) => !v);
                },
                closeModal: closeModal,
              }}
            >
              <div className={styles["question"]} ref={questionRef}>
                {children}
              </div>
            </CardModalContext.Provider>
          </CSSTransition>
        </div>
        <div className={styles.shadow}></div>
      </Fragment>
    </Modal>
  );
}

export default CardModal;

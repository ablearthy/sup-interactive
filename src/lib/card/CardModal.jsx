import styles from "./CardModal.module.css";
import commonStyles from "lib/commons.module.css";
import React, { Fragment, useState, useEffect } from "react";
import Modal from "react-overlays/Modal";
import { createContext, useRef } from "react";

import { Transition } from "react-transition-group";

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
  idx = undefined,
  disableAnimationOnEnter = false,
  showModal,
  setShowModal,
  onQuestionSolved,
  children,
}) {
  const questionRef = useRef(null);

  const closeModal = () => {
    setShowModal(false);
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
            !disableAnimationOnEnter ? "" : commonStyles.notransition
          }`}
        >
          <CardModalContext.Provider
            value={{
              closeModal: closeModal,
              idx: idx,
            }}
          >
            <div className={styles["question"]} ref={questionRef}>
              {children}
            </div>
          </CardModalContext.Provider>
        </div>
        <div className={styles.shadow}></div>
      </Fragment>
    </Modal>
  );
}

export default CardModal;

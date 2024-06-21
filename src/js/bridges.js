import React from "react";

import Question1 from "components/Question1";
import Question2 from "components/Question2";
import Question3 from "components/Question3";
import Question4 from "components/Question4";
import Question5 from "components/Question5";
import Question6 from "components/Question6";
import Question7 from "components/Question7";
import Question8 from "components/Question8";
import Question9 from "components/Question9";
import Question10 from "components/Question10";
import Question11 from "components/Question11";
import Question12 from "components/Question12";
import Question13 from "components/Question13";

const data = [
  [[59.941041, 30.334754], Question1],
  [[59.941686, 30.337329], Question2],
  [[59.933215, 30.342661], Question3],
  [[59.928377, 30.335022], Question4],
  [[59.921501, 30.317094], Question5],
  [[59.919194, 30.307245], Question6],
  [[59.920624, 30.297782], Question7],
  [[59.924082, 30.302589], Question8],
  // [[59.926732, 30.300969], Question9],
  [[59.925786, 30.313339], Question10],
  [[59.932124, 30.324229], Question11],
  [[59.936849, 30.326428], Question12],
  [[59.9416, 30.328145], Question13],
];

const bridgesCount = data.length;
const generateTitle = (index) => `Задание ${index} из ${bridgesCount}`;

export const bridges = data.map((o, ix) => {
  const [position, Component] = o;
  return {
    position: position,
    overlayComponent: (
      <Component id={JSON.stringify(position)} title={generateTitle(ix + 1)} />
    ),
  };
});

import { bridges } from "./bridges";

function isBridgeFinishedInternal(pos) {
  return localStorage.getItem(JSON.stringify(pos));
}

export function isBridgeFinished(bridge) {
  return isBridgeFinishedInternal(bridge.position);
}

export function unsetBridgeFinished(bridge) {
  return localStorage.removeItem(JSON.stringify(bridge.position));
}

export function countFinishedBridges() {
  return bridges.filter(isBridgeFinished).length;
}

export function findNextUnansweredQuestionIndex(questionIdx) {
  let i = (questionIdx + 1) % bridges.length;

  while (i !== questionIdx) {
    if (!isBridgeFinished(bridges[i])) {
      return i;
    }
    i = (i + 1) % bridges.length;
  }
  return -1;
}

import React from "react";
import { preparationContent } from "./preparationTips.json";
import "./PreparationTips.css";

const PreparationTips = () => {
  const [
    currentPreparationTipIndex,
    updatePreparationTipIndex
  ] = React.useState(0);

  const nextTip = () => {
    currentPreparationTipIndex < preparationContent.length - 1
      ? updatePreparationTipIndex(currentIndex => currentIndex + 1)
      : updatePreparationTipIndex(0);
  };

  return (
    <div id="my-appointment__page-one" onClick={nextTip}>
      <p>{preparationContent[currentPreparationTipIndex].tip}</p>
    </div>
  );
};

export default PreparationTips;

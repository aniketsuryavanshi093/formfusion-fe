import React from "react";
import classes from "./index.module.css";

interface StartProps {
  updatePage: (newState: Number) => void;
}

const StartComponent: React.FC<StartProps> = ({ updatePage }) => {
  const handleClick = () => {
    updatePage(1);
  };
  return (
    <>
      <picture className={classes.picture}>
        <img
          alt="logo"
          src="https://images.typeform.com/images/hkUC2EnNZ8DZ/image/default-firstframe.png"
        />
        {/* <Image alt="logo" height="90" width="100" src="https://images.typeform.com/images/hkUC2EnNZ8DZ/image/default-firstframe.png" /> */}
      </picture>
      <div className="flex items-center h-1/4">
        <button className={classes.button} onClick={handleClick}>
          Let's do it
        </button>
        <p className="mb-0 ml-3 text-white text-xs">
          Press <strong> Enter ↵ </strong>
        </p>
      </div>
    </>
  );
};

export default StartComponent;

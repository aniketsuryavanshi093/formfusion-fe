import React from "react";
// import Image from 'next/image';
import classes from "./index.module.css";

const QuizComponent = () => {
  return (
    <div className="h-full text-base leading-6 text-gray-700 box-border">
      <div className={`inline-block z-[-20] leading-0 bg-gray-800 h-full w-full bg-cover bg-center bg-top absolute ${classes.bgimage}`}>
        <div className="h-full flex flex-col justify-center items-center">
          <picture className={classes.picture}>
            <img
              alt="logo"
              src="https://images.typeform.com/images/hkUC2EnNZ8DZ/image/default-firstframe.png"
            />
            {/* <Image alt="logo" height="90" width="100" src="https://images.typeform.com/images/hkUC2EnNZ8DZ/image/default-firstframe.png" /> */}
          </picture>
          <div className="flex items-center h-1/4">
            <button className={classes.button}>Let's do it</button>
            <p className="mb-0 ml-3 text-white text-xs">Press <strong> Enter ↵ </strong></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizComponent;

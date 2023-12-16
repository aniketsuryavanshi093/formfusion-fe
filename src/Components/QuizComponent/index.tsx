"use client";
import React, { useState } from "react";
// import Image from 'next/image';
import classes from "./index.module.css";
import MCQComponent from "./MCQComponent";
import StartComponent from "./StartComponent";

const QuizComponent = () => {
  const [page, setPage] = useState<Number>(0);

  const updatePage = (newState: Number) => {
    setPage(newState);
  };

  return (
    <div className="h-full text-base leading-6 text-gray-700 box-border">
      <div
        className={`inline-block z-[-20] leading-0 bg-gray-800 h-full w-full bg-cover bg-center bg-top absolute ${classes.bgimage}`}
      >
        <div className="h-full flex flex-col justify-center items-center">
          {!page && <StartComponent updatePage={updatePage} />}
          {page === 1 && <MCQComponent />}
        </div>
      </div>
    </div>
  );
};

export default QuizComponent;

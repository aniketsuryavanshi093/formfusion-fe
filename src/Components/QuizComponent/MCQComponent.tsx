import React, { useState } from "react";
import classes from "./MCQComponent.module.css";

const MCQComponent = () => {
  const data = {
    question:
      "First Off ---- what does the 3rd R of the AARRR Funnel stand for?*",
    options: ["Revenue", "Regression", "Referral", "Retrograde"],
    imageUrl:
      "https://images.typeform.com/images/9ctm8DHqNgc6/image/default-firstframe.png",
  };
  const [clickedIndex, setClickedIndex] = useState<Number>();
  const handleClick = (index: Number) => {
    setClickedIndex(index);
  };
  return (
    <div style={{ paddingInline: "40px" }}>
      <div
        style={{
          width: "100%",
          maxWidth: "720px",
          margin: "0px auto",
          paddingInline: "0",
        }}
      >
        <div
          style={{
            // marginBlock: "32px 96px",
            fontSize: "24px",
            lineHeight: "32px",
          }}
        >
          <div className="flex">
            <span className="text-white text-base inline-flex items-baseline">
              {" "}
              1
              <svg height="10" width="11" className={classes.svg}>
                <path d="M7.586 5L4.293 1.707 5.707.293 10.414 5 5.707 9.707 4.293 8.293z"></path>
                <path d="M8 4v2H0V4z"></path>
              </svg>
            </span>
            <p className="text-white text-24">{data.question}</p>
          </div>
          <picture
            style={{
              display: "block",
              height: "120px",
              width: "120px",
              maxHeight: "100%",
              maxWidth: "100%",
              marginLeft: "2rem",
              marginTop: "0.75rem",
            }}
          >
            <img
              style={{ display: "block", height: "120px", width: "120px" }}
              src={data.imageUrl}
              alt="Question image"
            />
          </picture>
          <div className="mt-2 ml-8">
            <div className="inline-flex min-w-168 flex-col flex-wrap w-1/2 lg:w-1/4">
              {data.options.map((elem, index) => (
                <div className="mb-2">
                  <div
                    className={`${classes["button-div"]} ${
                      index == clickedIndex ? classes["clicked-div"] : ""
                    }`}
                    onClick={() => handleClick(index)}
                  >
                    <div className="flex ms-px-8 me-px-8 p-2">
                      <div className={classes.option}>
                        <span>{String.fromCharCode(65 + index)}</span>
                      </div>
                    </div>
                    <div className="flex items-center text-left w-full">
                      <div className={classes["option-text"]}>{elem}</div>
                    </div>
                    {index == clickedIndex && (
                      <div>
                        <span className="flex items-center justify-center mx-2">
                          <svg height="13" width="16" className={classes.svg}>
                            <path d="M14.293.293l1.414 1.414L5 12.414.293 7.707l1.414-1.414L5 9.586z"></path>
                          </svg>
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
              {clickedIndex != null && <button>ok</button>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MCQComponent;

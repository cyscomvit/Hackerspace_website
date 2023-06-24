import React from "react";
import { useState } from "react";
import "./faq.css";

const Data = [
  {
    Question: "Does the event require any pre-requisites knowledge?",
    Answer:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    Question: "When will the event take place?",
    Answer:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    Question: "What is the entry fee to be paid?",
    Answer:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    Question: "Where is the meeting place?",
    Answer:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];
const Accordion = () => {
  const [selected, setSelected] = useState(null);

  const FunctionWrapper = (i) => {
    toggle(i);
    changeStyle();
  };
  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
    console.log("i");
  };

  const changeStyle = () => {
    var Element = document.getElementsByClassName("item");
    const BoxShadow =
      "rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px";
    Element.style.background = "rgba(194, 26, 26, 0.1)";
    // Element.style.box-shadow = "rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px";
    Element.style.transition = "transform 0.3s ease-in-out 0s";
    Element.style.transform = "scale(1.02)";
    Element.style.border = "none";
    Element.style.borderRadius = "10px";
    Element.style.padding = "20px";
    Element.style.boxShadow = BoxShadow;
    console.log("Hello");
  };

  return (
    <div className="wrapper">
      <div className="head">
        <h1>Frequently asked Questions</h1>
      </div>

      <div className="accordion">
        {Data.map((item, i) => (
          <>
            <div className="item" key={i}>
              <div className="title" onClick={() => FunctionWrapper(i)}>
                <h2>{item.Question}</h2>
                <span className="circle">{selected === i ? "-" : ">"}</span>
              </div>
              <div className={selected === i ? "content-show" : "content"}>
                <p>{item.Answer}</p>
              </div>
            </div>
            <br />
          </>
        ))}
      </div>
    </div>
  );
};

export default Accordion;

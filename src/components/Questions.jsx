import React, { useState } from "react";
import { decode } from "html-entities";

export let responseArr = [];

export default function Questions(props) {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);

    function checkResponseArr() {
      for (let i = 0; i < responseArr.length; i++) {
        if (responseArr[i].question === props.question) {
          responseArr.splice(i, 1);
        }
      }
    }
    checkResponseArr();
    let responseObj = {
      question: props.question,
      correctAns: props.correctAns,
      value: event.target.value,
      isCorrect: event.target.value === props.correctAns ? true : false,
    };
    responseArr.push(responseObj);
  };

  const optionsArr = props.incorrectAns.map((option) => {
    const isSelected = option === selectedOption;
    const optionStyle = `my-3 md:my-0 text-center rounded-xl py-1 px-3 cursor-pointer ${
      isSelected ? "bg-orange-200" : "bg-[#9dacf5]"
    }`;

    return (
      <fieldset className={optionStyle}>
        <input
          className="peer hidden cursor-pointer"
          id={option}
          type="radio"
          name={props.question}
          value={option}
          onClick={handleOptionChange}
          checked={isSelected}
        />
        <label htmlFor={option}>{decode(option)}</label>
      </fieldset>
    );
  });

  return (
    <>
      <form className="px-5 py-3">
        <legend className="cursor-pointer">{decode(props.question)}</legend>
        <div className="cursor-pointer flex-wrap md:flex gap-3">
          {optionsArr}
        </div>
      </form>
    </>
  );
}

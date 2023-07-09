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

  const optionsArr = props.incorrectAns.map((option, index) => {
    const isSelected = option === selectedOption;
    let finalStyleOption = {};
    if (props.revealed) {
      if (option === props.correctAns) {
        finalStyleOption =
          option === selectedOption ? "bg-green-500" : "bg-green-500";
      } else if (option === selectedOption) {
        finalStyleOption = "bg-red-500";
      } else {
        finalStyleOption = "bg-[#9dacf5]";
      }
    } else {
      finalStyleOption = isSelected ? "bg-orange-200" : "bg-[#9dacf5]";
    }
    const optionStyle = `cursor-pointer flex flex-wrap my-3 md:my-0 rounded-xl py-1 px-3 bg-[#9dacf5] text-center ${finalStyleOption}`;

    let uniqueId = `${props.question}_${index}`; // Unique Id here

    return (
      <label htmlFor={uniqueId} className={optionStyle}>
        <input
          className="peer hidden w-full"
          id={uniqueId}
          type="radio"
          name={props.question}
          value={option}
          checked={isSelected}
          onChange={handleOptionChange}
        />
        {decode(option)}
      </label>
    );
  });

  return (
    <>
      <form className="px-5 py-3 text-center">
        <legend className="text-center">{decode(props.question)}</legend>
        <div className="flex-wrap gap-3">{optionsArr}</div>
      </form>
    </>
  );
}

import { decode } from "html-entities";

export let responseArr = [];
export default function Questions(props) {
  const optionsArr = props.incorrectAns.map((option) => {
    return (
      <fieldset className="rounded-xl py-1 px-3  bg-[#9dacf5] cursor-pointer">
        <input
          className="peer hidden cursor-pointer"
          id={option}
          type="radio"
          name={props.question}
          value={option}
          onClick={handleOptionChange}
        />
        <label htmlFor={option}>{decode(option)}</label>
      </fieldset>
    );
  });

  function handleOptionChange(event) {
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
    event.preventDefault();
    console.log(responseObj);
    if (event.target.value === props.correctAns) {
      console.log("Correct Answer");
      responseArr.push(responseObj);
      // console.log(responseArr);
    } else {
      console.log("Incorrect Answer");
      responseArr.push(responseObj);
      // console.log(responseArr);
    }
  }

  return (
    <>
      <form className="px-5 py-3">
        <legend>{decode(props.question)}</legend>
        <div className="flex gap-3">{optionsArr}</div>
      </form>
    </>
  );
}

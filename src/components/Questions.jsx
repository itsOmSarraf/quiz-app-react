import { decode } from "html-entities";

export default function Questions(props) {
  const optionsArr = props.incorrectAns.map((option) => {
    return (
      <fieldset className="rounded-xl py-1 px-3  bg-[#9dacf5] cursor-pointer">
        <input
          className="peer hidden cursor-pointer"
          id={option}
          type="radio"
          name="answer"
          value={option}
          // onChange={handleOptionChange}
          onClick={handleOptionChange}
        />
        <label htmlFor={option}>{decode(option)}</label>
      </fieldset>
    );
  });
  function handleOptionChange(event) {
    event.preventDefault();
    let isClicked = false;
    // Update the selected option in the parent component's state
    // props.onChange(event.target.value);
    console.log(event.target.value, props.correctAns, props.question);
    if (event.target.value === props.correctAns) {
      console.log("Correct Answer");
      // event.target.parentElement.classList.add("bg-green-400");
      isClicked = true;
    } else {
      console.log("Incorrect Answer");
      // event.target.parentElement.classList.add("bg-red-400");
      isClicked = true;
    }
  }
  // console.log(response);
  return (
    <>
      <form className="px-5 py-3">
        <legend>{decode(props.question)}</legend>
        <div className="flex gap-3">{optionsArr}</div>
        {/* <hr className="mt-2" /> */}
      </form>
    </>
  );
}

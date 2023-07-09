import React from "react";
import Questions from "./components/Questions";
import StartQuiz from "./components/StartQuiz";
import shuffle from "lodash/shuffle";
import { responseArr } from "./components/Questions";

export default function App() {
  const [quiz, setQuiz] = React.useState("");
  const [questionSet, setQuestionSet] = React.useState([]);
  const [restltBtn, setRestltBtn] = React.useState(false);
  const [count, setCount] = React.useState(0);
  const [revealed, setRevealed] = React.useState(false);

  function countCorrectAns() {
    for (let i = 0; i < responseArr.length; i++) {
      console.log(responseArr);
      if (responseArr[i].isCorrect === true) {
        setCount((ct) => ct + 1);
      }
    }
    setRevealed(true); // Set "revealed" to true here
    setRestltBtn(true);
  }
  let apiURL = "https://opentdb.com/api.php?amount=5&category=18&type=multiple";
  React.useEffect(() => {
    if (quiz !== "") {
      fetch(apiURL)
        .then((res) => res.json())
        .then((data) => {
          setQuestionSet(data.results);
          console.log(data.results);
        });
    }
  }, [quiz]);
  React.useEffect(() => {
    console.log("Number of correct answers:", count);
  }, [count]);
  const [buttonClicked, setButtonClicked] = React.useState(false);

  function startQuiz() {
    setQuiz("not empty now :P");
    setButtonClicked(true);
    confirm("Are you ready to start the quiz?");
    // console.log("Quiz Started");
  }
  function refreshScreen() {
    setRevealed(false); // Reset "revealed" state here
    window.location.reload();
  }
  const questionElements = questionSet.map((question) => {
    return (
      <Questions
        key={question.question}
        question={question.question}
        correctAns={question.correct_answer}
        incorrectAns={shuffle(
          question.incorrect_answers.concat(question.correct_answer)
        )}
        revealed={revealed} // Pass "revealed" state here
      />
    );
  });

  return (
    <>
      <div className="w-fit h-full md:w-[600px] md:h-fit bg-[#FFFAD1] md:m-auto md:mt-9 md:rounded-3xl shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]">
        {buttonClicked ? (
          <div className="flex justify-center align-middle items-center">
            <h1 className="text-4xl my-2 font-bold text-center text-[#4D5B9E] md:text-5xl">
              Questions
            </h1>
            <h2 className="md:ml-10 ml-3 text-2xl my-2 font-bold text-center text-[#000000] md:text-3xl">
              {count}/5
            </h2>
          </div>
        ) : (
          <div></div>
        )}
        {buttonClicked ? (
          <div>
            {questionElements}
            <div className="w-full flex justify-center">
              {restltBtn ? (
                <button
                  className="bg-[#4D5B9E] text-white rounded-xl px-5 py-2 my-5"
                  onClick={refreshScreen}
                >
                  Play Again
                </button>
              ) : (
                <button
                  className="bg-[#4D5B9E] text-white rounded-xl px-5 py-2 my-5"
                  onClick={countCorrectAns}
                >
                  See Results
                </button>
              )}
            </div>
          </div>
        ) : (
          <StartQuiz startQuiz={startQuiz} />
        )}
      </div>
    </>
  );
}

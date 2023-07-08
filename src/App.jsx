import React from "react";
import Questions from "./components/Questions";
import StartQuiz from "./components/StartQuiz";
import shuffle from "lodash/shuffle";
import { responseArr } from "./components/Questions";

export default function App() {
  const [quiz, setQuiz] = React.useState("");
  const [questionSet, setQuestionSet] = React.useState([]);

  const [count, setCount] = React.useState(0);

  function countCorrectAns() {
    for (let i = 0; i < responseArr.length; i++) {
      console.log(responseArr);
      if (responseArr[i].isCorrect === true) {
        setCount((ct) => ct + 1);
      }
    }
  }
  React.useEffect(() => {
    if (quiz !== "") {
      fetch("https://opentdb.com/api.php?amount=5&category=18&difficulty=easy")
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
    console.log("Quiz Started");
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
      />
    );
  });

  return (
    <>
      <div className="w-screen h-screen md:w-[600px] md:h-fit bg-[#FFFAD1] md:m-auto md:mt-9 md:rounded-3xl shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]">
        {buttonClicked ? (
          ((
            <h1 className="text-4xl my-2 font-bold text-center text-[#4D5B9E] md:text-5xl">
              Questions
            </h1>
          ),
          (<button onClick={countCorrectAns}>Count Correct Answers</button>))
        ) : (
          <div></div>
        )}
        {buttonClicked ? (
          <div>{questionElements}</div>
        ) : (
          <StartQuiz startQuiz={startQuiz} />
        )}
        \
      </div>
    </>
  );
}

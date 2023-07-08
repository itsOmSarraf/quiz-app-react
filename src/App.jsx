import React from "react";
import Questions from "./components/Questions";
import StartQuiz from "./components/StartQuiz";
import shuffle from "lodash/shuffle";

export default function App() {
  const [quiz, setQuiz] = React.useState("");
  const [questionSet, setQuestionSet] = React.useState([]);

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
          <h1 className="text-4xl my-2 font-bold text-center text-[#4D5B9E] md:text-5xl">
            Questions
          </h1>
        ) : (
          <div></div>
        )}
        {buttonClicked ? (
          <div>{questionElements}</div>
        ) : (
          <StartQuiz startQuiz={startQuiz} />
        )}
      </div>
    </>
  );
}

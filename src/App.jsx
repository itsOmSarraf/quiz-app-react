import React from "react";
import Questions from "./components/Questions";
import StartQuiz from "./components/StartQuiz";
export default function App() {
  const [quiz, setQuiz] = React.useState("");
  // const [score, setScore] = React.useState(0);
  const [questionSet, setQuestionSet] = React.useState([]);

  React.useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=10&category=18&difficulty=easy")
      .then((res) => res.json())
      .then((data) => {
        console.log(data.results);
        setQuestionSet(data.results);
      });
  }, [quiz]);

  const [buttonClicked, setButtonClicked] = React.useState(false);

  function startQuiz() {
    setQuiz("not empty now :P");
    setButtonClicked(true);
    console.log("Quiz Started");
  }

  return (
    <>
      <div className="w-screen h-screen md:w-[600px] md:h-[600px] bg-[#FFFAD1] md:m-auto md:mt-9 md:rounded-3xl shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]">
        {buttonClicked ? <Questions /> : <StartQuiz startQuiz={startQuiz} />}
      </div>
    </>
  );
}

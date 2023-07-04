import React from "react";
import Questions from "./components/Questions";
import StartQuiz from "./components/StartQuiz";
export default function App() {
  const [quiz, setQuiz] = React.useState();
  function startQuiz() {
    console.log("start quiz");
    console.log(quiz);
    setQuiz("not null now :P ");
    // fetch(
    //   "https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple"
    // )
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data.results);
    //     setQuiz(data.results);
    //   });
  }

  return (
    <>
      <div className="w-screen h-screen md:w-[600px] md:h-[600px] bg-[#FFFAD1] md:m-auto md:mt-9 md:rounded-3xl shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]">
        {!quiz ? <StartQuiz startQuiz={startQuiz} /> : <Questions />}
      </div>
    </>
  );
}

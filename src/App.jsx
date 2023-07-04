import React from "react";
export default function App() {
  const [quiz, setQuiz] = React.useState();
  function startQuiz() {
    console.log("start quiz");
    console.log(quiz);
    setQuiz("hello");
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
        {!quiz ? (
          <div class="fixed inset-0 h-screen w-screen bg-black bg-opacity-50">
            <div className="flex flex-col items-center justify-center h-full">
              <h1 className="text-4xl font-bold text-center text-[#293264]">
                Quizzical
              </h1>
              <p className="mt-3 text-xl font-bold text-center text-[#293264]">
                Quiz App
              </p>
              <button
                onClick={startQuiz}
                className="mt-3 bg-[#4D5B9E] p-3 rounded-xl text-white font-bold"
              >
                Start Quiz
              </button>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center h-full">
            <h1 className="text-4xl font-bold text-center text-[#293264]">
              Quiz Questions here
            </h1>
          </div>
        )}
      </div>
    </>
  );
}

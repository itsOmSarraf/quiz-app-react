export default function startQuiz(props) {
  function handleClick() {
    props.startQuiz();
  }
  return (
    <div class="fixed inset-0 h-screen w-screen bg-black bg-opacity-50">
      <div className="flex flex-col items-center justify-center h-full">
        <h1 className="text-4xl font-bold text-center text-[#293264]">
          Quizzical
        </h1>
        <p className="mt-3 text-xl font-bold text-center text-[#293264]">
          Quiz App
        </p>
        <button
          onClick={handleClick}
          className="mt-3 bg-[#4D5B9E] p-3 rounded-xl text-white font-bold"
        >
          Start Quiz
        </button>
      </div>
    </div>
  );
}

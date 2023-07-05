import { decode } from "html-entities";

export default function Questions(props) {
  console.log(props);
  const optionsArr = props.incorrectAns.map((option) => {
    return <button className="border-black border-2">{option}</button>;
  });
  console.log(optionsArr);
  return (
    <>
      <div className="px-5 py-3">
        <h1 className=""> • {decode(props.question)}</h1>
        <div className="flex gap-2">{optionsArr}</div>
      </div>
    </>
  );
}

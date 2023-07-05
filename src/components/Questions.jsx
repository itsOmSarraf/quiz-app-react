export default function Questions(props) {
  console.log(props);
  return (
    <>
      <div>
        <h1 className=""> • {props.question}</h1>
      </div>
    </>
  );
}

interface Props {
  heading: string;
}

function Message(props: Props) {
  // JSX: JavaScript XML
  return (
    <>
      <h1>{props.heading}</h1>
    </>
  );
}

export default Message;

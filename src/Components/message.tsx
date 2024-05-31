interface Props {
  children: string;
}

function Message({ children }: Props) {
  // JSX: JavaScript XML
  return (
    <>
      <h1>{children}</h1>
    </>
  );
}

export default Message;

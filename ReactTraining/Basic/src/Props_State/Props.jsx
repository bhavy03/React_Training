function Card(props) {
  return (
    <div style={{ border: "2px solid purple", padding: "1rem" }}>
      {props.children}
      {props.content}
    </div>
  );
}

function Button({ label, onClick }) {
  return <button onClick={onClick}>{label}</button>;
}

function Message() {
  return <p>Hello from Message component!</p>;
}

function Modal({ title, children }) {
  return (
    <div className="modal">
      <h2>{title}</h2>
      <div>{children}</div>
    </div>
  );
}
function Profile(props) {
  return (
    <div className="card">
      <Avatar {...props} />
    </div>
  );
}
// this will pass all props of profile to avatar

function Child({ sendMessage }) {
  return <button onClick={() => sendMessage("Hello from child!")}>Send</button>;
}

function Props() {
  const handleClick = () => {
    alert("Button clicked!");
  };
  function handleMessageFromChild(message) {
    console.log("Message from child:", message);
  }
  return (
    <>
      <Card content={<Message />}>
        <Message />
        <h2>Hello Bhavya!</h2>
        <p>This content is passed as children!</p>
      </Card>
      <Button label="Click me" onClick={handleClick} />;
      <Modal title="Hello Bhavya!">
        <p>This is modal content</p>
      </Modal>
      <Child sendMessage={handleMessageFromChild} />
      {/* When the button is clicked: */}
      {/* sendMessage("Hi!") → goes to myFunction("Hi!") */}
      {/* sendMessage is function and  sendMessage("Hello!") is function call */}
    </>
  );
}

export default Props;

// props = {
//     sendMessage: handleMessageFromChild // this is a function!
//   }
// props are objects but inside them the content can be of any type

//if passed in props in bool and don't want anything then return null to not render anything
// In JSX, {cond && <A />} means “if cond, render <A />, otherwise nothing”.
// To test the condition, JavaScript converts the left side to a boolean automatically. However, if the left side is 0, then the whole expression gets that value (0), and React will happily render 0 rather than nothing.

// componentDidMount()	useEffect(() => {}, [])
// componentDidUpdate()	useEffect(() => {}, [dep])
// componentWillUnmount()	useEffect(() => return () => {}, [])
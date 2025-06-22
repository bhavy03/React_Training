function EventPropogation() {
  return (
    <>
      <div
        className="Toolbar"
        onClick={() => {
          alert("You clicked on the toolbar!");
        }}
      >
        <button onClick={() => alert("Playing!")}>Play Movie</button>
        <button onClick={() => alert("Uploading!")}>Upload Image</button>
      </div>
    </>
  );
}
export default EventPropogation;

// now in this if i click the toolbar it first alert child then followed by parent now to stop this propogation we use e.stopPropogation();

function Button({ onClick, children }) {
  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        onClick();
      }}
    >
      {children}
    </button>
  );
}
function Toolbar() {
  return (
    <div
      className="Toolbar"
      onClick={() => {
        alert("You clicked on the toolbar!");
      }}
    >
      <Button onClick={() => alert("Playing!")}>Play Movie</Button>
      <Button onClick={() => alert("Uploading!")}>Upload Image</Button>
    </div>
  );
}

// similarly to preventdefault default behaviour of some events we use
{
  /* <form
  onSubmit={(e) => {
    e.preventDefault();
    alert("Submitting!");
  }}
></form>; */
}
// like on this the whole page got reloaded

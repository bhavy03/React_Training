function Profile() {
  return <div>Hello world</div>;
}
const today = new Date();

function formatDate(date) {
  return new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(date);
}

function Gallery() {
  return (
    <>
      <section>
        <h1>Amazing scientists</h1>
        <h1>To Do List for {formatDate(today)}</h1>
        <Profile />
        <Profile />
        <Profile />
      </section>
    </>
  );
}
export default Gallery;

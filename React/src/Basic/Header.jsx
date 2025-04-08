import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="flex flex-col h-20 sm:flex-wrap justify-center border-solid border-4 shadow-xl">
        <nav className="bg-white px-1 py-1 flex text-lg space-x-11">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contacts">Contacts</Link>
        </nav>
        {/* <main className="bg-white px-1 py-1 shadow-xl text-xs border-solid border-4 "> */}
        {/* main content */}
        {/* </main> */}
        {/* <footer className="bg-white px-1 py-1 shadow-xl flex text-xs border-solid border-4"> */}
        {/*  footer */}
        {/* </footer> */}
      </div>
    </>
  );
};

export default Header;

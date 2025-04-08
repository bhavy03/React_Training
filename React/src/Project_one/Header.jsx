import { Link } from "react-router-dom"

const Header = () => {
    return (
        <div className="bg-white" style={{ position: 'sticky', top: '0' }} >
            <nav className="w-full px-3 py-1 flex z-10 mt-3 box-border shadow-md">
                <h1 className="font-extrabold text-3xl font-text1">TechHub</h1>
                <main className=" ml-auto space-x-12 flex justify-center my-auto ">
                    <Link to={'/'} className="">Home</Link>
                    <Link to={'/contacts'} className="">Contacts</Link>
                    <Link to={'/#about'} className="">About</Link>
                    <Link to={'/#brands'} className="">Brands</Link>
                    <Link to={'/services'} className="">Services</Link>
                </main>
            </nav>
        </div>
    );
}

export default Header

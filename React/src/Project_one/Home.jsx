
const Home = () => {
    return (
        <>
        <div className="w-full h-screen static custom-bg my-2 px-2 shadow-xl shadow-cyan-500/50 rounded-xl before:content-none bg-no-repeat ">
            <main className="flex flex-col items-center absolute top-1/2 right-0">
                <h1 className="text-6xl font-text1 font-semibold">TechHub</h1>
                <p className="font-text1 ">Solution to
                    all your problems</p>
            </main>
        </div>
        <div className="flex w-full h-52 bg-gradient-to-r from-[#8e9eab] to-[#eef2f3] px-2 justify-around items-center ">
            <img src='../Project_one/assests/3607424.jpg' alt="loading"  className="w-32"/>
            <div className="w-44">
                <p className="">We are your one and only solution to your tech problems. We are the leading tech company</p>
            </div>
        </div>
        </>
    )
}

export default Home

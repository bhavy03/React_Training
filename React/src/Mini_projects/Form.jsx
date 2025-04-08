const New = () => {
    return (
        <div className="h-96 flex align-middle justify-center">
            <div className="mt-10">
                <div className="h-[70vh] w-96  bg-neutral-100 shadow-xl border-solid rounded-3xl">
                    <div className="flex flex-col font-serif">
                        <div className="flex justify-center my-4">
                            Hello Everyone</div>
                        <div className="my-2 mx-2 flex">
                            <div className="flex flex-row">
                                <div className="flex flex-col mx-2">
                                    <p className="my-1">First name</p>
                                    <div className="">
                                        <input type="text"
                                            className="border-zinc-300 border-solid rounded-lg border-2 w-full shadow-lg" />
                                    </div>
                                </div>
                                <div className="ml-8">
                                    <div className="flex flex-col mx-2">
                                        <p className="my-1">Last name</p>
                                        <input type="text"
                                            className="border-zinc-300 border-solid rounded-lg border-2 w-full shadow-lg" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="my-2 mx-4">
                            <p>Mail id</p>
                            <div className="">
                                <input type="text" className="border-zinc-300 border-solid rounded-lg border-2 w-full shadow-lg" />
                            </div>
                        </div>
                        <div className="mx-4 my-2">
                            <p>Password</p>
                            <div>
                                <input type="text" className="border-zinc-300 border-solid rounded-lg border-2 w-full shadow-lg" />
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <hr className="border-zinc-300 border-2 my-14 w-80 " />
                        </div>
                        <div className="flex justify-center">
                            Already have an account ?
                        </div>
                        <a className="flex justify-center underline" href="/">
                            Login
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default New
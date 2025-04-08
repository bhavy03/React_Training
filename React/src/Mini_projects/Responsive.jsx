
const Responsive = () => {
    return (
        <div>
            <div className="flex m-4 h-lvh">
                <div className="ml-3 bg-slate-500">sidebar</div>
                <div className=" xl:flex xl:flex-row xl:flex-1 flex flex-col-reverse">
                    <div className="flex-1 bg-slate-600 flex justify-center h-60">discover</div>
                    <div className="mr-3 bg-slate-700">top charts</div>
                </div>
            </div>
        </div>
    )
}

export default Responsive

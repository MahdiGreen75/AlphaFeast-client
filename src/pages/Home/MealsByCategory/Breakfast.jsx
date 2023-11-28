import useQueryBreakfast from "../../../hooks/AllTheGetRequests/useQueryBreakfast";

const Breakfast = () => {
    const [breakfast, isPending] = useQueryBreakfast();

    if(isPending) {
        return <div className="w-full flex justify-center items-center my-10 min-h-screen">
            <span className="loading loading-spinner loading-lg"></span>
        </div>
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4">
            {
                breakfast.map(item =>
                    <div key={item._id}>
                        <div className="shadow-xl flex flex-col justify-center items-center gap-2 p-5 border m-5 rounded">
                            <div className="w-full h-48"><img className="w-full h-full border-2 rounded" src={item.imgLink} /></div>
                            <h2 className="text-base font-bold">{item.mealTitle}</h2>
                            <p className="flex items-center justify-center">
                                <span className="text-base font-semibold">Price:</span>
                                <span className="font-light text-base">${item.mealPrice}</span>
                            </p>
                            <button className="btn btn-primary">Details</button>
                        </div>
                    </div>)
            }
        </div>
    );
};

export default Breakfast;
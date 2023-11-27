import HeaderTitle from "../../components/HeaderTitle/HeaderTitle";


const MemberShip = () => {
    return (
        <>
            <HeaderTitle header={"Join Our Membership"} headerPara={"Choose a plan that suits you the best"}></HeaderTitle>
            <div className="flex flex-col md:flex-row gap-5 justify-center items-center my-10">
                <div className="card w-auto md:w-72 lg:w-96 glass">
                    <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="car!" /></figure>
                    <div className="card-body">
                        <h2 className="text-center font-bold text-2xl">Silver</h2>
                        <p className="text-center">How to park your car at your garage?</p>
                        <div className="card-actions justify-center">
                            <button className="btn btn-primary">Purchase</button>
                        </div>
                    </div>
                </div>
                <div className="card w-auto md:w-72 lg:w-96 glass">
                    <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="car!" /></figure>
                    <div className="card-body">
                        <h2 className="text-center font-bold text-2xl">Gold</h2>
                        <p className="text-center">How to park your car at your garage?</p>
                        <div className="card-actions justify-center">
                            <button className="btn btn-primary">Purchase</button>
                        </div>
                    </div>
                </div>
                <div className="card w-auto md:w-72 lg:w-96 glass">
                    <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="car!" /></figure>
                    <div className="card-body">
                        <h2 className="text-center font-bold text-2xl">Platinum</h2>
                        <p className="text-center">How to park your car at your garage?</p>
                        <div className="card-actions justify-center">
                            <button className="btn btn-primary">Purchase</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MemberShip;
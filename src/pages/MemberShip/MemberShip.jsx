import { Link } from "react-router-dom";
import HeaderTitle from "../../components/HeaderTitle/HeaderTitle";


const MemberShip = () => {
    return (
        <div className="border-2 p-5 mt-8 rounded-md shadow-xl">
            <HeaderTitle header={"Join Our Membership"} headerPara={"Choose a plan that suits you the best"}></HeaderTitle>
            <div className="flex flex-col md:flex-row gap-5 justify-center items-center my-10">
                <div className="card w-auto md:w-72 lg:w-96 glass bg-slate-500">
                    <div className="card-body">
                        <h2 className="text-center font-bold text-2xl">Silver</h2>
                        <p className="text-center">Choose a silver membeship.</p>
                        <div className="card-actions justify-center">
                            <Link to={`/checkOutPage/silver`}>
                                <button className="btn btn-primary">Purchase</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="card w-auto md:w-72 lg:w-96 glass bg-orange-400">
                    <div className="card-body">
                        <h2 className="text-center font-bold text-2xl">Gold</h2>
                        <p className="text-center">Choose a Gold membeship.</p>
                        <div className="card-actions justify-center">
                            <Link to={`/checkOutPage/gold`}>
                                <button className="btn btn-primary">Purchase</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="card w-auto md:w-72 lg:w-96 glass bg-blue-400">
                    <div className="card-body">
                        <h2 className="text-center font-bold text-2xl">Platinum</h2>
                        <p className="text-center">Choose a Platinum membeship.</p>
                        <div className="card-actions justify-center">
                            <Link to={`/checkOutPage/platinum`}>
                                <button className="btn btn-primary">Purchase</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MemberShip;
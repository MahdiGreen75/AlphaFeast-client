import banner from "../../../assets/banner.jpg"

const Banner = () => {
    return (
        <div className="border border-slate-900 hero min-h-screen mb-5 bg-gradient-to-r from-cyan-500 to-blue-500" style={{ backgroundImage: `url(${banner})` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Welcome to AlphaFeast</h1>
                    <p className="mb-5">Meet you foodie pleasure to us. Get delighted with the best deals.</p>
                </div>
            </div>
        </div>
    );
};

export default Banner;
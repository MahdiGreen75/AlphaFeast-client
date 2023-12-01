

const Banner = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)' }}>
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
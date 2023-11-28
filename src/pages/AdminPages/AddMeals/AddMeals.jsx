

const AddMeals = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
    }

    return (
        <div className="border-2 md:w-[600px] lg:w-[800px] p-8 m-8 shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-3">
                {/* meal title */}
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text">What is title of the meal?</span>
                    </label>
                    <input type="text" placeholder="Meal Title" className="input input-bordered w-full" />
                </div>
                {/* admin name */}
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text">What is your name?</span>
                    </label>
                    <input type="text" placeholder="Your Name" className="input input-bordered w-full" />
                </div>
                {/* admin email */}
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text">What is your email?</span>
                    </label>
                    <input type="text" placeholder="Your Email" className="input input-bordered w-full" />
                </div>
                {/* meal likes */}
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text">Input the primary likes count for the meal?</span>
                    </label>
                    <input type="number" placeholder="Meal Likes Count" className="input input-bordered w-full" />
                </div>`
                {/* upcoming or add to meals */}
                <div>
                    <label htmlFor="meal-type">Choose where you want show this meal?</label>
                    <select id="meal-type" className="select select-bordered w-full max-w-xs ml-4">
                        <option disabled selected>Upcoming meals</option>
                        <option>Add to meals</option>
                    </select>
                </div>`
                {/* meal type */}
                <div>
                    <label htmlFor="meal-type">Choose the meal type?</label>
                    <select id="meal-type" className="select select-bordered w-full max-w-xs ml-4">
                        <option disabled selected>Breakfast</option>
                        <option>Lunch</option>
                        <option>Dinner</option>
                    </select>
                </div>
                {/* meal image */}
                <div>
                    <label htmlFor="meal-img">Choose the meal img</label>
                    <input type="file" id='meal-img' className="file-input file-input-bordered w-full max-w-xs ml-4" />
                </div>
                <div className="divider"></div>
                {/* meal description */}
                <div>
                    <textarea className="textarea textarea-bordered" placeholder="White a description for the meal?"></textarea>
                </div>
                {/* meal review */}
                <div>
                    <textarea className="textarea textarea-bordered" placeholder="Write a review for the meal?"></textarea>
                </div>
                <input type="submit" value="Submit" className="btn btn-primary font-bold" />
            </form>
        </div>
    );
};

export default AddMeals;
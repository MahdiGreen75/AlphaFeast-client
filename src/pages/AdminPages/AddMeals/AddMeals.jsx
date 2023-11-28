import { useForm } from "react-hook-form"
import axios from "axios";
import Swal from "sweetalert2";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
const AddMeals = () => {
    const {
        register,
        handleSubmit,
        reset
    } = useForm()

    const onSubmit = async (data) => {
        // console.log(data);
        const imageFile = { image: data.mealImg[0] }
        //upload image to imagebb then get an url
        const res1 = await axios.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        });
        const imgLink = res1.data.data.display_url;
        const dataObj = {
            imgLink,
            "adminEmail": data.adminEamil,
            "adminName": data.adminName,
            "mealDescription": data.mealDescription,
            "mealLikes": data.mealLikes,
            "mealReview": data.mealReview,
            "mealTitle": data.mealTitle,
            "mealType": data.mealType,
            "upcomingOrAddMeals": data.upcomingOrAddMeals
        }

        const res2 = await axios.post(`http://localhost:5000/meals`, dataObj)
        // console.log(res2.data);
        if (res2.data.insertedId) {
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Your meal is added successfully.",
                showConfirmButton: false,
                timer: 1500
            });
            reset();
        }
    }

    return (
        <div className="border-2 md:w-[600px] lg:w-[800px] p-8 m-8 shadow-2xl">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
                {/* meal title */}
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text">What is title of the meal?</span>
                    </label>
                    <input type="text" {...register("mealTitle")} placeholder="Meal Title" className="input input-bordered w-full" />
                </div>
                {/* admin name */}
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text">What is your name?</span>
                    </label>
                    <input type="text" {...register("adminName")} placeholder="Your Name" className="input input-bordered w-full" />
                </div>
                {/* admin email */}
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text">What is your email?</span>
                    </label>
                    <input type="text" {...register("adminEamil")} placeholder="Your Email" className="input input-bordered w-full" />
                </div>
                {/* meal likes */}
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text">Input the primary likes count for the meal?</span>
                    </label>
                    <input type="number" {...register("mealLikes")} placeholder="Meal Likes Count" className="input input-bordered w-full" />
                </div>`
                {/* upcoming or add to meals */}
                <div>
                    <label htmlFor="meal-type">Choose where you want show this meal?</label>
                    <select id="meal-type" defaultValue={"upcomingMeals"} {...register("upcomingOrAddMeals")} className="select select-bordered w-full max-w-xs ml-4">
                        <option value={"upcomingMeals"}>Upcoming meals</option>
                        <option value={"addToMeals"}>Add to meals</option>
                    </select>
                </div>`
                {/* meal type */}
                <div>
                    <label htmlFor="meal-type">Choose the meal type?</label>
                    <select id="meal-type" defaultValue={"breakfast"} {...register("mealType")} className="select select-bordered w-full max-w-xs ml-4">
                        <option value={"breakfast"}>Breakfast</option>
                        <option value={"lunch"}>Lunch</option>
                        <option value={"dinner"}>Dinner</option>
                    </select>
                </div>
                {/* meal image */}
                <div>
                    <label htmlFor="meal-img">Choose the meal img</label>
                    <input type="file" {...register("mealImg")} id='meal-img' className="file-input file-input-bordered w-full max-w-xs ml-4" />
                </div>
                <div className="divider"></div>
                {/* meal description */}
                <div>
                    <textarea {...register("mealDescription")} className="textarea textarea-bordered" placeholder="White a description for the meal?"></textarea>
                </div>
                {/* meal review */}
                <div>
                    <textarea {...register("mealReview")} className="textarea textarea-bordered" placeholder="Write a review for the meal?"></textarea>
                </div>
                <input type="submit" value="Submit" className="btn btn-primary font-bold" />
            </form>
        </div>
    );
};

export default AddMeals;
/* eslint-disable react/prop-types */
import axios from "axios";
import { AiFillLike, AiOutlineLike } from "react-icons/ai";
import { useState } from "react";

const LikeComponent = ({ id }) => {
    const [like, setLike] = useState(true);

    const handleLikeUnLike = (_id) => {
        setLike(!like);
        console.log(like, _id);
        if (like) {
            console.log("Inside add");
            //get req to add like count
            axios.get(`http://localhost:5000/addLike/${_id}`)
                .then(res => {
                    console.log("Like count increased by 1.", res.data)
                })
        } else {
            console.log("Inside sub");
            //get req to substract like count
            axios.get(`http://localhost:5000/substractLke/${_id}`)
                .then(res => {
                    console.log("Like count decressed by 1.", res.data)
                })
        }
    }


    return (
        <div>
            <button className="btn btn-accent" onClick={() => handleLikeUnLike(id)}>{
                !like ? <AiFillLike></AiFillLike> : <AiOutlineLike></AiOutlineLike>
            }</button>
        </div>
    );
};

export default LikeComponent;
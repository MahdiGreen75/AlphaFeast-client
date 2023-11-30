import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { ImCross } from 'react-icons/im';
import { FormValidationContext } from "../../providers/FormValidationProvider";
import { updateProfile } from "firebase/auth";
import toast, { Toaster } from 'react-hot-toast';
import axios from "axios";

const SignUp = () => {
    const [validataion, setValidation] = useContext(FormValidationContext);
    const { userSignUp, loading } = useContext(AuthContext);


    const onSubmitHandler = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const userName = form.get("userName");
        const picLink = form.get("picLink");
        const email = form.get("email");
        const password = form.get("password");

        // validataion will only happen when user is about login.
        // setvalidation setter should set to "" for UI cached data clean up inside signOut handler.

        //password validation
        if (!email) {
            setValidation("You must provide a valid email.");
            return;
        }
        if (!password) {
            setValidation("You must provide a valid password");
            return;
        }
        const sixCharacterless = /^.{1,6}$/;
        if (sixCharacterless.test(password)) {
            setValidation("Password must be above six characters.");
            return;
        }
        const oneCapitalLetter = /^[^A-Z]*$/;
        if (oneCapitalLetter.test(password)) {
            setValidation("Password must have one capital letter.");
            return;
        }
        const oneSpecialCharacter = /^[^\W_]*$/;
        if (oneSpecialCharacter.test(password)) {
            setValidation("Password must have one special letter.");
            return;
        }

        userSignUp(email, password)
            .then(result => {
                console.log("sign up is successful", result.user);
                setValidation("");
                updateProfile(result.user, {
                    displayName: userName,
                    photoURL: picLink
                }).then(() => {
                    //create user entry in the database
                    axios.get(`http://localhost:5000/isUser/${result.user.email}`)
                        .then(res => {
                            if (res.data.isExists) {
                                console.log("user already exists.");
                            } else {
                                axios.post('http://localhost:5000/users', {
                                    user_name: userName,
                                    user_email: email,
                                    user_img: picLink,
                                    role: "user",
                                    badge: "bronze", // bronze, platinum, silver, gold
                                    user_reviews: [],
                                    requestedMealsId: []
                                }).then(res => {
                                    console.log('User entry registered to the server', res);
                                    toast.success("Sign up Successfull!")
                                    console.log("profile updated successful.")
                                })
                            }
                        })
                }).catch(error => console.error("An Error Occured while updatin your name and profile picture.", error))
            })
            .catch(() => {
                setValidation("Seems like you forgot your password.\nTake your time to recall it.");
                console.error("user sign up error.");
            })
    }

    if (loading) {
        return <div className="flex justify-center items-center my-40 w-full">
            <p className="text-3xl font-semibold text-center">Loading...</p>
        </div>
    }

    return (
        <div className="my-10">
            {/*SignUp Form  */}
            <div className="drop-shadow-2xl flex justify-center mx-auto">
                <div>
                    <div className="h-full w-80 p-5 bg-white border rounded-md shadow-2xl space-y-5">
                        <h1 className="text-center font-semibold text-xl">Sign Up</h1>
                        <form className="space-y-2" onSubmit={onSubmitHandler}>
                            <div>
                                <label htmlFor="userName">
                                    <p className="text-sx font-semibold text-gray-800">Username</p>
                                    <input type="text" name="userName" id="userName" placeholder="Your Name" className="outline-none w-full p-2 rounded-md placeholder:text-gray-300 placeholder:text-sm text-sm required border-2" />
                                </label>
                            </div>
                            <div>
                                <label htmlFor="picLink">
                                    <p className="text-sx font-semibold text-gray-800">Profile Picture Link</p>
                                    <input type="text" name="picLink" id="picLink" placeholder="Your Profile Picture Link" className="outline-none w-full p-2 rounded-md placeholder:text-gray-300 placeholder:text-sm text-sm required border-2" />
                                </label>
                            </div>
                            <div>
                                <label htmlFor="email">
                                    <p className="text-sx font-semibold text-gray-800">User Email</p>
                                    <input type="email" name="email" id="email" placeholder="Your Email" className="outline-none w-full p-2 rounded-md placeholder:text-gray-300 placeholder:text-sm text-sm required border-2" />
                                </label>
                            </div>
                            <div className="">
                                <label htmlFor="password">
                                    <p className="text-sx font-semibold text-gray-800">Password</p>
                                    <input type="password" name="password" id="password" placeholder="Your Password" className="outline-none w-full p-2 rounded-md placeholder:text-gray-300 placeholder:text-sm text-sm border-2" />
                                </label>
                            </div>
                            <input type="submit" value="Register" className="px-4 py-2 
                bg-blue-500 hover:bg-blue-700 
                active:bg-blue-900 duration-500 rounded 
                text-white outline-none w-full "/>
                        </form>
                        <p className="text-sx font-semibold text-gray-800">
                            Already have an account? <Link to={"/login"}>
                                <span className="text-blue-400 hover:text-blue-600 active:text-blue-800 duration-300">Login</span>
                            </Link>
                        </p>
                        <p>
                            {(validataion) && <>
                                <p className="text-center flex gap-1 items-center text-red-300 font-semibold text-xs w-max">
                                    <ImCross></ImCross> <span>{validataion}</span>
                                </p>
                            </>
                            }
                        </p>
                    </div>

                </div>
            </div>
            <div><Toaster /></div>
        </div>
    );
};

export default SignUp;
import { useContext, useRef, useState } from "react";
import { BsEye, BsEyeSlash, BsFacebook, BsGithub, BsGoogle } from "react-icons/bs";
import { Link, useLocation, useNavigate } from "react-router-dom";
import AuthProvider, { AuthContext } from "../Firebase/AuthProvider";
import { Result } from "postcss";
import { GoogleAuthProvider, getAuth, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import app from "../firebase/firebase.config";
import swal from "sweetalert";


const LogIn = () => {
    const [showPassword, setShowPassword] = useState(false);
    const emailRef = useRef(null)

    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();
    const handleGoogleSignIn = () => {
        signInWithPopup(auth, provider)
            .then(()=>{
                swal("Welcome!", "Log In successfully!", "success");
                navigate(location?.state ? location.state : '/');
            })
            .catch(()=>{
                swal("Sorry!", "Try again!", "error");
            })
    }

    const { signIn, user } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    console.log('location i n the login page', location)

    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        setShowPassword(password);
        console.log(email, password);
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log(result.user);
                swal("Welcome!", "Log In successfully!", "success");
                navigate(location?.state ? location.state : '/');
            })
            .catch(error => {
                console.log(error);
                swal("Sorry!", "Try again!", "error");
            })
    }

    const handleResetPassword = () => {
        const email = emailRef.current.value;
        console.log(email);
        if (!email) {
            swal("Sorry!", "Right email please!", "error");
            return;
        } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
            swal("Sorry!", "Valid email please!", "error");
            return;
        }
        sendPasswordResetEmail(auth, email)
            .then(() => {
                swal("Okay!", "Check your email please!", "success");
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                swal("Sorry!", "Valid email please!", "error");
            });
    }



    return (
        <div className="p-14 mx-auto shadow-2xl">
            {user ?
                <div className="py-10 text-center font-bold">
                    <p className="my-3">Welcome to our World</p>
                    <p className="my-3">Name: {user?.displayName}</p>
                    <img src="https://i.ibb.co/FzKkyS3/1e769b3a675977651b76790a90591eb1.jpg" alt="" className="rounded-full mx-auto my-3" />
                    <img src={user?.photoURL} alt="" className="rounded-full mx-auto my-3" />
                    <p className="my-3">Email: {user?.email}</p>

                </div> :
                <>
                    <div className="">
                        <form onSubmit={handleLogin} className="w-full">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-black text-2xl font-semibold">Email</span>
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    ref={emailRef}
                                    placeholder="Email"
                                    className="input input-bordered text-black" required />
                            </div>
                            <div className="form-control relative">
                                <label className="label">
                                    <span className="label-text text-black text-2xl font-semibold">Password</span>
                                </label>
                                <input
                                    type={showPassword ? "text" : "password"}
                                    name="password"
                                    placeholder="Password"
                                    className="input input-bordered  text-black" required />
                                <span className="absolute text-4xl right-2 bottom-10" onClick={() => setShowPassword(!showPassword)}>
                                    {
                                        showPassword ? <BsEye></BsEye> : <BsEyeSlash></BsEyeSlash>
                                    }
                                </span>
                                <label className="label">
                                    <a onClick={handleResetPassword} href="#" className="label-text-alt text-black link link-hover font-semibold">Forgot password?</a>
                                    {/* <a onClick={handleResetPassword} href="#" className="label-text-alt text-black link link-hover font-semibold">Forgot password?</a> */}
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="bg-red-700 font-bold text-center text-black p-3 rounded-lg">Login</button>
                            </div>
                        </form>
                        <p className="font-semibold"> Are you New? Please <Link to="/register" className=""> <span>  Register</span></Link></p>
                    </div>
                    <h3 className="text-center text-3xl font-bold"> Or </h3>
                    <div className="flex justify-center items-center py-3">

                        <Link onClick={handleLogin} className=" gap-2 flex justify-center items-center">
                            <BsGoogle className="text-2xl"></BsGoogle>
                            <button onClick={handleGoogleSignIn} className="p-5 btn">Google</button>
                        </Link>

                    </div>
                </>
            }
        </div>
    );
};

export default LogIn;
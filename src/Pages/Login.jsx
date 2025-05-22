import { useContext, useRef, useState } from "react";
import { Authcontext } from "../Provider/AuthProvider";
import { Link, useNavigate } from "react-router";
import { toast, ToastContainer } from "react-toastify";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../Firebase/Firebase.config";
import loginLottieData from "../assets/Lottie/login.json"
import Lottie from "lottie-react";


const Login = () => {

    
    const {userLogin, setUser} = useContext(Authcontext)
    const [error, setError] = useState('');
    
    const emailRef = useRef();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;


        userLogin(email,password)
        .then(result => {
            const user = result.user;
            setUser(user);
            toast.success('Login Successful!');
            setTimeout(() => {
            navigate('/', { replace: true });
            }, 1500);
            })
            .catch((err)=>{
                setError(err.message);
                toast.error('Login failed! Please check your credentials.');
        })
    }

    const handleForgetPassword = () =>{
        navigate('/forgetpassword')
    
    }
    const googleProvider = new GoogleAuthProvider();
    
    const handleGoogleSignIn = () =>{
        signInWithPopup(auth, googleProvider)
        .then((result)=>{
            setUser(result.user);
            toast.success("Google sign in successful!")
            navigate('/')
        })
        .catch(() => {
            toast.error("Failed to sign in with google!")
        })
    }

    return (
        <div className='min-h-screen flex justify-center items-center bg-indigo-50 px-4 flex-col lg:flex-row-reverse'>

                  {/* ✅ Lottie Animation */}
                <div className="text-center lg:text-left ml-4">
                    <div className="py-6">
                    <div className="text-center lg:text-left w-80">
                        <Lottie animationData={loginLottieData} />
                    </div>
                    </div>
                </div>

            <div className="card bg-base-100 w-full max-w-sm md:max-w-md lg:max-w-lg p-6 md:p-10  shadow-2xl">
                <h2 className='text-2xl md:text-3xl font-bold text-center'>Login Your Account</h2>
                <form onSubmit={handleSubmit} className="card-body">
                    <div className="form-control flex flex-col">
                        <label className="label mb-2">
                            <span className="label-text font-bold">Email</span>
                        </label>
                        <input type="email" placeholder="email" 
                        className="input input-bordered w-full" 
                        name="email" ref={emailRef} required />
                    </div>
                    <div className="form-control flex flex-col">
                        <label className="label mb-2">
                            <span className="label-text font-bold">Password</span>
                        </label>
                        <input type="password" placeholder="password" className="input input-bordered w-full" name="password" required />
                        {error && (
                            <label className='label text-sm text-red-600'>
                                {error}
                            </label>
                        )}
                        <Link onClick={handleForgetPassword}
                        className="label mt-2 font-bold text-amber-600">
                            Forget Password?
                        </Link>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary w-full">Login</button>
                    </div>
                </form>
                <div className='pb-5 pl-5 w-full'>
                  <button onClick={handleGoogleSignIn}
                  className='btn'><img src="https://www.google.com/favicon.ico" alt="Google" className="w-5 h-5"/>Login with Google</button>
                </div>
                <div>
                <p className='text-center font-semibold'>
                    Don't Have Any Account? <Link to="/register" className='text-red-600 underline'>Register Now</Link>
                </p>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Login;
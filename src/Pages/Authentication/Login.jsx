import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { FaGithub, FaGoogle, FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { Helmet } from "react-helmet-async";
import toast from "react-hot-toast";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { loginUser, googleLogin, githubLogin } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [showPassword, setShowPassword] = useState(false);

  const handleSocialLogin = (socialProvider) => {
    socialProvider().then((result) => {
      if (result.user) {
        navigate(location?.state || "/");
      }
    });
  };
  const onSubmit = async (data) => {
    const { email, password } = data;

    const user = await loginUser(email, password);

    if (user) {
      navigate(location?.state || "/");
      toast.success("Login Successful");
    } else {
      const error = await loginUser(email, "wrong_password");
      if (error && error.code === "auth/wrong-password") {
        toast.error("Password is incorrect");
      } else {
        toast.error("Email or password is incorrect");
      }
    }
  };

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="hero min-h-screen">
      <Helmet>
        <title>TravelGo | Login</title>
      </Helmet>
      <div className="hero-content flex-col lg:col">
        <div className="text-center ">
          <h1 className="text-5xl font-bold text-[#008EC4] ">Login now!</h1>
          <p className="py-6">
            Login Now To See Details and Manage Your Profile...
          </p>
        </div>
        <div className="card w-full md:max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter Your Email"
                className="input input-bordered"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span className="text-red-700 text-sm mt-2">
                  This field is required
                </span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>

              <div className="relative w-full">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Enter Your Password"
                  className="input input-bordered pr-10 w-full"
                  {...register("password", { required: true })}
                />
                <span
                  className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer text-[#008EC4]  text-lg"
                  onClick={togglePassword}
                >
                  {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
                </span>
              </div>

              {errors.password && (
                <span className="text-red-700 text-sm mt-2">
                  This field is required
                </span>
              )}
              <label className="label flex justify-start">
                <a
                  href="#"
                  className="label-text-alt link link-hover text-base"
                >
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-[#008EC4] text-white text-lg">
                Login
              </button>
            </div>
            <p>
              Do not Have an Account?{" "}
              <span className="underline font-semibold text-[#008EC4]">
                <Link to="/register">Register Now</Link>
              </span>
            </p>
            <div className="divider">continue with</div>
            <div className="flex gap-3 mx-auto">
              <button
                onClick={() => handleSocialLogin(googleLogin)}
                className="text-xl text-[#008EC4]"
              >
                <FaGoogle />
              </button>
              <button
                onClick={() => handleSocialLogin(githubLogin)}
                className="text-xl text-[#008EC4]"
              >
                <FaGithub />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

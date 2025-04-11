import { FaUser, FaEnvelope, FaLock, FaPhone } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../store/User/userSliceReducers";
import { toast } from "react-toastify";
import { clearError } from "../store/User/userSlice";

const Register = () => {
  const Dispatch = useDispatch();
  const Navigate = useNavigate();

  //fetching state from redux store
  const { isLoading, error, isVerified, tempUser } = useSelector(
    (state) => state.auth
  );

  // console.log(tempUser && tempUser);

  // State hooks for form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
  });

  const [avatar, setAvatar] = useState("/src/assets/profile.jpg"); //default avatar
  formData.avatar = avatar; //set avatar = avatar mean after upload on cloudinary
  //for showing images which user select avatar
  const [preview, setPreview] = useState("/src/assets/profile.jpg");
  // console.log(formData.avatar);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle image file input
  const handleAvatarChange = (e) => {
    // Check if a file is selected
    const reader = new FileReader();

    // Check if the file is an image and has a valid size
    reader.onload = () => {
      if (reader.readyState === 2) {
        setPreview(reader.result);
        setAvatar(reader.result);
      }
    };

    reader.readAsDataURL(e.target.files[0]);
  };

  //Register Form handler
  const registerFormHandler = (e) => {
    e.preventDefault();
    //dispatch for registration
    Dispatch(registerUser(formData));

    if (tempUser) {
      //when register success then clear register data
      setFormData({
        name: "",
        email: "",
        password: "",
        phone: "",
        avatar: "/src/assets/profile.jpg",
      });
    }
  };

  useEffect(() => {
    if (error) {
      toast.error(error); //show error message
      Dispatch(clearError());
    }

    if (tempUser) {
      //if user is temp then navigate to otp page
      Navigate(
        `/register/otp-verification/${tempUser.email}/${tempUser.phone}`
      );
    }

    //if user already verified
    if (isVerified) {
      toast.info("User Already verified");
      Navigate("/");
    }
  }, [error, tempUser, Navigate, Dispatch, isVerified]);

  return (
    <section className="flex flex-col lg:flex-row justify-center items-center text-center text-navText bg-gradient-to-br from-primary via-accent to-primaryLight relative min-h-screen">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-30 z-0" />

      <div className="container px-6 py-12 mt-15 md:mt-13 lg:mt-11 relative z-10 flex flex-col lg:flex-row justify-center items-center xl:w-[80%] w-full">
        {/* Left Side Text Section */}
        <div className="lg:w-1/2 lg:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            Create an Account on <span className="text-accent">Authify</span>
          </h1>
          <p className="text-lg mb-8 text-navText/80 max-w-xl mx-auto">
            Fill in the details to create a new account with Authify.
          </p>
        </div>

        {/* Right Side Form Section */}
        <div className="lg:w-1/2 w-full max-w-md bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-2xl shadow-2xl">
          <form className="space-y-6" onSubmit={registerFormHandler}>
            {/* Name */}
            <div className="relative">
              <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-white/60 text-lg" />
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full pl-12 pr-4 py-3 rounded-md bg-white/10 text-white placeholder-white/60 border border-white/30 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition"
              />
            </div>

            {/* Email */}
            <div className="relative">
              <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-white/60 text-lg" />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full pl-12 pr-4 py-3 rounded-md bg-white/10 text-white placeholder-white/60 border border-white/30 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition"
              />
            </div>

            {/* Password */}
            <div className="relative">
              <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-white/60 text-lg" />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className="w-full pl-12 pr-4 py-3 rounded-md bg-white/10 text-white placeholder-white/60 border border-white/30 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition"
              />
            </div>

            {/* Phone */}
            <div className="relative">
              <FaPhone className="absolute left-4 top-1/2 -translate-y-1/2 text-white/60 text-lg" />
              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="w-full pl-12 pr-4 py-3 rounded-md bg-white/10 text-white placeholder-white/60 border border-white/30 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition"
              />
            </div>

            {/* Avatar */}
            <div className="relative flex items-center">
              <input
                type="file"
                accept="image/*"
                onChange={handleAvatarChange}
                className="hidden"
                id="avatarInput"
              />
              <label
                htmlFor="avatarInput"
                className="w-full pl-4  py-2 rounded-md bg-white/10 text-white cursor-pointer placeholder-white/60 border border-white/30 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition"
              >
                <div className="flex items-center">
                  {preview && (
                    <img
                      src={preview}
                      alt="Avatar Preview"
                      className="w-12 h-12 object-cover rounded-full shadow-md mr-2"
                    />
                  )}
                  <span className="text-white/60"> Avatar</span>
                </div>
              </label>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={isLoading}
              className={`w-full py-3 text-sm bg-accent text-nevText rounded-md font-semibold  transition hover:bg-primary hover:scale-105 shadow-lg hover:text-accent hover:cursor-pointer ${
                isLoading && "opacity-50"
              }`}
            >
              {isLoading && isLoading === true ? "Registering..." : "Register"}
            </button>
          </form>

          <p className="text-sm text-white/70 mt-6">
            Already have an account?{" "}
            <Link
              to="/sign-in"
              className="text-accent underline hover:text-white"
            >
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Register;

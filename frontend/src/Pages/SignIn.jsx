import { FaEnvelope, FaLock } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";

const SignIn = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <section className="flex flex-col lg:flex-row justify-center items-center text-center text-navText bg-gradient-to-br from-primary via-accent to-primaryLight relative min-h-screen">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black opacity-30 z-0" />

      <div className="container px-6 mt-10 py-12 relative z-10 flex flex-col lg:flex-row justify-between items-center w-full lg:w-[85%] xl:w-[65%]">
        {/* Left Side: Text Section */}
        <div className="lg:w-1/2 mb-10 lg:mb-0 text-left max-w-xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight text-center">
            Welcome Back to <span className="text-accent">Authify</span>
          </h1>
          <p className="text-lg text-navText/80 text-center">
            Enter your credentials to securely access your account.
          </p>
        </div>

        {/* Right Side: Login Form */}
        <div className="lg:w-1/2 w-full max-w-md bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-2xl shadow-2xl">
          <form className="space-y-6">
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

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 bg-accent text-nevText rounded-md font-semibold text-lg transition hover:bg-primary hover:scale-105 shadow-lg hover:text-accent cursor-pointer"
            >
              Sign In
            </button>
          </form>

          <p className="text-sm text-white/70 mt-6">
            Don’t have an account?{" "}
            <Link
              to="/sign-up"
              className="text-accent underline hover:text-white"
            >
              Register here
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default SignIn;

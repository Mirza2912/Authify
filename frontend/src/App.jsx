import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import Navbar from "./Components/Navbar";
import OptVerification from "./Pages/OptVerification";

export default function App() {
  return (
    <BrowserRouter>
      <div className="bg-light text-dark min-h-screen relative w-[100%]">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route
            path="/register/otp-verification/:email/:phone"
            element={<OptVerification />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

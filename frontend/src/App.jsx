import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import Navbar from "./Components/Navbar";
import OptVerification from "./Pages/OptVerification";
import EditProfile from "./Pages/EditProfile";
import ChangePassword from "./Pages/ChangePassword";
import UserProfile from "./Pages/UserProfile";

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
          <Route path="/user/profile" element={<UserProfile />} />
          <Route path="/user/edit-profile" element={<EditProfile />} />
          <Route path="/user/change-password" element={<ChangePassword />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

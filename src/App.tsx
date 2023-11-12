import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import Dashboard from "./pages/Dashboard";
import AllTenders from "./components/AllTenders";
import SaavaEngLtd from "./components/SaavaEngLtd";
import IntracomAfricaLtd from "./components/IntracomAfricaLtd";
import DueTenders from "./components/DueTenders";
import AlreadyBidded from "./components/AlreadyBidded";
import LoginWithSSO from "./pages/LoginWithSSO";
import OtpPage from "./pages/OtpPage";
import SignUpPage from "./pages/SignUpPage";

const App = () => {
  return (
    <>
      <NavBar />

      <div className="flex bg-gray-200">
        <div className="flex-none h-full"><Dashboard/></div>
        <div className="flex-1 w-48 h-full">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/login" element={<LoginPage />}></Route>
            <Route path="/loginsso" element={<LoginWithSSO />}></Route>
            <Route path="/otpcodepage" element={<OtpPage />}></Route>
            <Route path="/signup" element={<SignUpPage />}></Route>
            {/* <Route path="/dashboard" element={<Dashboard />}></Route> */}
            <Route path="/alltenders" element={<AllTenders />}></Route>
            <Route path="/saava" element={<SaavaEngLtd />}></Route>
            <Route path="/intracom" element={<IntracomAfricaLtd />}></Route>
            <Route path="/due" element={<DueTenders />}></Route>
            <Route path="/bidded" element={<AlreadyBidded />}></Route>
          </Routes>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default App;

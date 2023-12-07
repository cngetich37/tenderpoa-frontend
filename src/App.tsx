import NavBar from "./components/NavBar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import Footer from "./components/Footer";
import SaavaEngLtd from "./components/SaavaEngLtd";
import IntracomAfricaLtd from "./components/IntracomAfricaLtd";
import DueTenders from "./components/DueTenders";
import AlreadyBidded from "./components/AlreadyBidded";
import OtpPage from "./pages/OtpPage";
import SignUpPage from "./pages/SignUpPage";
import HowToBid from "./components/HowToBid";
import AddTender from "./components/AddTender";
import BenesseLtd from "./components/BenesseLtd";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import ClosedTenders from "./components/ClosedTenders";
import AllOpenTenders from "./components/AllOpenTenders";
import MakeBid from "./components/MakeBid";
const App = () => {
  const isUserSignedIn = !!localStorage.getItem("token");
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/signup" element={<SignUpPage />}></Route>
        <Route path="/howtoBid" element={<HowToBid />}></Route>
        <Route path="/forgot-password" element={<ForgotPassword />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        
        <Route
          path="/reset-password/:token"
          element={<ResetPassword />}
        ></Route>
        <Route path="/otpcodepage" element={<OtpPage />}></Route>
        {isUserSignedIn ? (
          <>
            <Route path="/dashboard" element={<AllOpenTenders />}></Route>
            <Route path="/saava" element={<SaavaEngLtd />}></Route>
            <Route path="/intracom" element={<IntracomAfricaLtd />}></Route>
            <Route path="/due" element={<DueTenders />}></Route>
            <Route path="/bidded" element={<AlreadyBidded />}></Route>
            <Route path="/benesse" element={<BenesseLtd />}></Route>
            <Route path="/closed" element={<ClosedTenders />}></Route>
            <Route path="/addtender" element={<AddTender />}></Route>
            <Route path="/makeBid" element={<MakeBid />}></Route>
          </>
        ) : (
          <>
            <Route path="/addtender" element={<LoginPage />}></Route>
            <Route path="/allopentenders" element={<LoginPage />}></Route>
            <Route path="/closed" element={<LoginPage />}></Route>
            <Route path="/makeBid" element={<LoginPage />}></Route>
          </>
        )}
      </Routes>
      <Footer />
    </>
  );
};

export default App;

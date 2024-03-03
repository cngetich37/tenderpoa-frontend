import NavBar from "./components/NavBar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import Footer from "./components/Footer";
import SaavaEngLtd from "./components/SaavaEngLtd";
import IntracomAfricaLtd from "./components/IntracomAfricaLtd";
import DueTenders from "./components/DueTenders";
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
import MissingPage from "./components/MissingPage";
import BiddedTenders from "./components/Bidded";
const App = () => {
  const isUserSignedIn = !!localStorage.getItem("token");
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/howtoBid" element={<HowToBid />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<MissingPage />} />
        <Route path="/reset-password/:token" element={<ResetPassword />} />
        <Route path="/otpcodepage" element={<OtpPage />} />
        {isUserSignedIn ? (
          <>
            <Route path="/dashboard" element={<AllOpenTenders />} />
            <Route path="/engineering" element={<SaavaEngLtd />} />
            <Route path="/it" element={<IntracomAfricaLtd />} />
            <Route path="/due" element={<DueTenders />} />
            <Route path="/bidded" element={<BiddedTenders />} />
            <Route path="/medical" element={<BenesseLtd />} />
            <Route path="/closed" element={<ClosedTenders />} />
            <Route path="/addtender" element={<AddTender />} />
            <Route path="/makeBid" element={<MakeBid />} />
          </>
        ) : (
          <>
            <Route path="/addtender" element={<LoginPage />} />
            <Route path="/dashboard" element={<LoginPage />} />
            <Route path="/closed" element={<LoginPage />} />
            <Route path="/makeBid" element={<LoginPage />} />
            <Route path="/documents" element={<LoginPage />} />
          </>
        )}
      </Routes>
      <Footer />
    </>
  );
};

export default App;

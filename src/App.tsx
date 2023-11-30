import NavBar from "./components/NavBar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import Footer from "./components/Footer";
import SaavaEngLtd from "./components/SaavaEngLtd";
import IntracomAfricaLtd from "./components/IntracomAfricaLtd";
import DueTenders from "./components/DueTenders";
import AllPendingTenders from "./components/AllPendingTenders";
import AlreadyBidded from "./components/AlreadyBidded";
import LoginWithSSO from "./pages/LoginWithSSO";
import OtpPage from "./pages/OtpPage";
import SignUpPage from "./pages/SignUpPage";
import StepsToBid from "./components/StepsToBid";
import AddTender from "./components/AddTender";
import BenesseLtd from "./components/BenesseLtd";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import ClosedTenders from "./components/ClosedTenders";
const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route
          path="/allpendingtenders"
          element={<AllPendingTenders />}
        ></Route>
        <Route path="/saava" element={<SaavaEngLtd />}></Route>
        <Route path="/intracom" element={<IntracomAfricaLtd />}></Route>
        <Route path="/due" element={<DueTenders />}></Route>
        <Route path="/bidded" element={<AlreadyBidded />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/loginsso" element={<LoginWithSSO />}></Route>
        <Route path="/otpcodepage" element={<OtpPage />}></Route>
        <Route path="/signup" element={<SignUpPage />}></Route>
        <Route path="/addtender" element={<AddTender />}></Route>
        <Route path="/stepstobid" element={<StepsToBid />}></Route>
        <Route path="/benesse" element={<BenesseLtd />}></Route>
        <Route path="/closed" element={<ClosedTenders />}></Route>
        <Route path="/forgot-password" element={<ForgotPassword />}></Route>
        <Route path="/reset-password/:token" element={<ResetPassword />}></Route>
      </Routes>
      <Footer />
    </>
  );
};

export default App;

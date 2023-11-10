import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import Dashboard from "./pages/Dashboard";
import AllTenders from "./components/AllTenders";
import SaavaEngLtd from "./components/SaavaEngLtd";
import IntracomAfricaLtd from "./components/IntracomAfricaLtd";
import DueTenders from "./components/DueTenders";
import AlreadyBidded from "./components/AlreadyBidded";
import LoginWithSSO from "./pages/LoginWithSSO";
import OtpPage from "./pages/OtpPage";

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/loginsso" element={<LoginWithSSO />}></Route>
        <Route path="/otpcodepage" element={<OtpPage />}></Route>
        <Route path="/signup" element={<RegisterPage />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/alltenders" element={<AllTenders />}></Route>
        <Route path="/saava" element={<SaavaEngLtd />}></Route>
        <Route path="/intracom" element={<IntracomAfricaLtd />}></Route>
        <Route path="/due" element={<DueTenders />}></Route>
        <Route path="/bidded" element={<AlreadyBidded />}></Route>
      </Routes>
      <Footer />
    </>
  );
};

export default App;

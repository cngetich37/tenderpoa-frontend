import NavBar from "./components/NavBar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import Footer from "./components/Footer";
import SaavaEngLtd from "./components/SaavaEngLtd";
import IntracomAfricaLtd from "./components/IntracomAfricaLtd";
import DueTenders from "./components/DueTenders";
import AllTenders from "./components/AllTenders";
import AlreadyBidded from "./components/AlreadyBidded";
import LoginWithSSO from "./pages/LoginWithSSO";
import OtpPage from "./pages/OtpPage";
import SignUpPage from "./pages/SignUpPage";
import AddTender from "./components/AddTender";
const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/alltenders" element={<AllTenders />}></Route>
        <Route path="/saava" element={<SaavaEngLtd />}></Route>
        <Route path="/intracom" element={<IntracomAfricaLtd />}></Route>
        <Route path="/due" element={<DueTenders />}></Route>
        <Route path="/bidded" element={<AlreadyBidded />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/loginsso" element={<LoginWithSSO />}></Route>
        <Route path="/addtender" element={<AddTender/>}></Route>
        <Route path="/otpcodepage" element={<OtpPage />}></Route>
        <Route path="/signup" element={<SignUpPage />}></Route>
      </Routes>
      <Footer />
    </>
  );
};

export default App;

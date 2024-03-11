import "./App.css";
import NavbarApp from "./components/Navbar";
import { Login } from "./components/Login";
import Homepage from "./components/Homepage";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Viewprod from "./components/Viewprod";
import Signup from "./components/Signup";
import Profile from "./components/Profile";
import SettingsPage from "./components/Settings";
import ContactUs from "./components/Contact";
import Orders from "./components/Orders";
import Favorites from "./components/Favorites";
import { MaimPage } from "./components/MaimPage";
import shopicon from "../src/imgs/shop-icon.png";
import { Helmet } from "react-helmet";

function App() {
  return (
    <div className="App overflow-hidden">
      <Helmet>
        <link rel="icon" type="image/png" href={shopicon} />
      </Helmet>
      <NavbarApp />
      <div className="   p-0 ">
        <Routes>
          <Route path="/" element={<MaimPage />} />
          <Route path="/shop" element={<Homepage />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Orders" element={<Orders />} />
          <Route path="/Settings" element={<SettingsPage />} />
          <Route path="/Contact" element={<ContactUs />} />
          <Route path="/Product/:productId" element={<Viewprod />} />
          <Route path="/Favorites" element={<Favorites />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;

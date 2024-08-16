import { Outlet } from "react-router-dom";
import Navbar from "../Components/NavBar/Navbar";
import Footer from "../Components/Footer/Footer";
import { useEffect, useState } from "react";
import LoginPopup from "../Components/LoginPopUp/LoginPopup";

const RootLayout = () => {
  const [showLogin, setShowLogin] = useState(false);

  useEffect(() => {
    if (showLogin) {
      document.body.style.overflow = "hidden"; // Disable scrolling
    } else {
      document.body.style.overflow = ""; // Re-enable scrolling
    }

    // Clean up when the component unmounts or showLogin changes
    return () => {
      document.body.style.overflow = "";
    };
  }, [showLogin]);

  return (
    <>
      {showLogin ? <LoginPopup setShowLogin={setShowLogin} /> : <></>}
      <div className="app">
        <Navbar setShowLogin={setShowLogin} />
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default RootLayout;

import { Outlet } from "react-router-dom";
import Navbar from "../Components/NavBar/Navbar";
import Footer from "../Components/Footer/Footer";

const RootLayout = () => {
  return (
    <>
      <div className="app">
        <Navbar />
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default RootLayout;

import { Outlet } from "react-router-dom";
import Navbar from "../Components/NavBar/Navbar";
// import Footer from "../Components/Footer";

const RootLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      {/* <Navbar /> */}
    </>
  );
};

export default RootLayout;

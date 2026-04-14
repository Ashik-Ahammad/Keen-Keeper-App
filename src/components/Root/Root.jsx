import React from "react";
import { Outlet, useNavigation } from "react-router"; 
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { ToastContainer } from "react-toastify";

const Root = () => {

  const navigation = useNavigation();
  const isNavigating = navigation.state === "loading";

  return (
    <div>

      {isNavigating && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-base-100/80 backdrop-blur-sm">
          <span className="loading loading-infinity loading-xl text-info"></span>
        </div>
      )}

      <Navbar></Navbar>
      <Outlet></Outlet>

      <Footer></Footer>
      <ToastContainer />
    </div>
  );
};

export default Root;
import React from "react";
import { Outlet, useNavigation } from "react-router";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { ToastContainer } from "react-toastify";

const Root = () => {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <div>
      <Navbar></Navbar>

      {isLoading ? (
        <div className="flex justify-center items-center min-h-[60vh]">
          <span className="loading loading-bars text-info loading-lg"></span>
        </div>
      ) : (
        <Outlet></Outlet>
      )}

      <Footer></Footer>
      <ToastContainer />
    </div>
  );
};

export default Root;

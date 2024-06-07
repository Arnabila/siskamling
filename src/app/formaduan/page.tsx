import React from "react";
import Navbar from "../components/NavbarFitur";
import Header from "../components/Sidebar";
import FormAduan from "../components/Form";

export default function Index() {
  return (
    <div>
      <Navbar />
      <div className="flex min-h-screen">
        <Header />
        <div className="flex-grow flex justify-center items-center bg-gray-100">
          <FormAduan width="max-w-2xl" height="h-auto" />
        </div>
      </div>
    </div>
  );
}

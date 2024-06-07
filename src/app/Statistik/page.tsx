import React from "react";
import Navbar from "../components/NavbarFiturLogin";
import Header from "../components/Sidebarstatistik";
import DataVisualization from "../components/Databox";

export default function Index() {
  return (
    <>
      <Navbar />
      <div className="flex">
        <Header className="w-1/4" />
        <div className="flex-grow flex justify-center items-center bg-gray-100 p-4">
          <DataVisualization />
        </div>
      </div>
    </>
  );
}

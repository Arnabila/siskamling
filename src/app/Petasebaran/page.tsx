"use client";
import Navbar from "../components/NavbarFitur";
import Header from "../components/Sidebarpeta";
import dynamic from "next/dynamic";
const DynamicMapComponent = dynamic(() => import("./Map"), {
  ssr: false,
});

const MyPage = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <Navbar />
      <div style={{ display: "flex", height: "calc(100vh - 64px)" }}>
        <Header style={{ margin: 0 }} />
        <DynamicMapComponent style={{ margin: 0 }} />
      </div>
    </div>
  );
};

export default MyPage;

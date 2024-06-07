"use client";
import React from "react";
import Link from "next/link";
import { TiThMenu } from "react-icons/ti";
import { IoIosCreate } from "react-icons/io";
import { TbMapSearch } from "react-icons/tb";
import { VscGraphLine } from "react-icons/vsc";
import { Span } from "next/dist/trace";

interface INavbarProps {}

const Navbar: React.FC<INavbarProps> = (props) => {
  const [isSidebarOpen, setSidebarOpen] = React.useState(false);
  const [isModalOpen, setModalOpen] = React.useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };

  return (
    <nav className="bg-[#0C364B] relative z-10">
      <div className="container mx-auto flex items-center justify-between h-16">
        <button
          className="text-xl font-bold text-white"
          aria-controls="sidebarExample"
          onClick={toggleSidebar}
        >
          <TiThMenu />
        </button>
      </div>
      {isSidebarOpen && (
        <div
          id="sidebarExample"
          className="fixed inset-y-0 left-0 bg-[#0C364B] transform transition-transform translate-x-0 z-20 w-64 border-r"
          tabIndex={-1}
        >
          <div className="w-64 p-4">
            <div className="flex justify-between items-center">
              <h5 className="text-xl font-bold text-[#9BD2EF]">Beranda</h5>
              <button
                type="button"
                className="text-white"
                onClick={toggleSidebar}
              >
                ✕
              </button>
            </div>
            <div className="mt-4 space-y-4 text-white font-bold">
              <Navigate
                href="/Petasebaran"
                icon={<TbMapSearch />}
                text="Peta Sebaran"
              />
              <Navigate
                href="/formaduan"
                icon={<IoIosCreate />}
                text="Form Aduan"
              />
              <Navigate href="#" icon={<VscGraphLine />} text="Statistika" />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

interface NavigateProps {
  href: string;
  icon: React.ReactNode;
  text: string;
  onClick?: () => void;
}

const Navigate: React.FC<NavigateProps> = ({ href, icon, text, onClick }) => (
  <Link href={href} legacyBehavior passHref>
    <a
      className="flex items-center hover:bg-[#4B6C7D] focus:outline-none rounded-full p-2"
      onClick={onClick}
      style={{ display: "flex", alignItems: "center" }}
    >
      {icon}
      <span className="ml-2">{text}</span>
    </a>
  </Link>
);

export default Navbar;

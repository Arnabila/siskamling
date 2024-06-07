"use client";
import React from "react";
import Link from "next/link";
import { TiThMenu } from "react-icons/ti";
import { IoIosCreate } from "react-icons/io";
import { TbMapSearch } from "react-icons/tb";
import { VscGraphLine } from "react-icons/vsc";

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
    <nav className="bg-white relative z-10">
      <div className="container mx-auto flex items-center justify-between h-16">
        <button
          className="text-xl font-bold text-[#0C364B]"
          aria-controls="sidebarExample"
          onClick={toggleSidebar}
        >
          <TiThMenu />
        </button>
        <div className="flex-grow flex justify-center">
          <form className="flex" style={{ marginLeft: "600px" }}></form>
        </div>
        <div className="flex items-center space-x-4">
          <button
            className="bg-white text-[#0C364B] px-4 py-2 rounded-full font-extrabold"
            type="button"
            onClick={toggleModal}
          >
            Log In
          </button>
          <Link href="/signup" legacyBehavior passHref>
            <a className="bg-[#0C364B] text-white px-4 py-2 rounded-full font-bold">
              Sign Up
            </a>
          </Link>
        </div>
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
              <Navigate
                href="#"
                icon={<VscGraphLine />}
                text="Statistika"
                onClick={toggleModal}
              />
            </div>
          </div>
        </div>
      )}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center">
          <div className="bg-white bg-opacity-20 w-full h-full absolute top-0 flex items-center justify-center">
            <div className="bg-white rounded-lg overflow-hidden w-[400px]">
              <div className="bg-[#0C364B] rounded-t-lg p-4 flex justify-between">
                <h5
                  className="text-xl font-bold text-white"
                  id="exampleModalLabel"
                >
                  Log In
                </h5>
                <button
                  type="button"
                  className="text-white"
                  onClick={toggleModal}
                >
                  ✕
                </button>
              </div>
              <div className="p-4">
                <form>
                  <div className="mb-4 text-[#0C364B]">
                    <label
                      htmlFor="email-login"
                      className="block text-[#0C364B]"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      className="form-control w-full p-2 border border-gray-300 rounded-full"
                      id="email-login"
                      placeholder="Email"
                    />
                  </div>
                  <div className="mb-4 text-[#0C364B]">
                    <label
                      htmlFor="password-login"
                      className="block text-[#0C364B]"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control w-full p-2 border border-gray-300 rounded-full"
                      id="password-login"
                      placeholder="••••••"
                    />
                    <Link href="/signup" legacyBehavior>
                      <a className="text-[#0C364B] block text-right mt-3">
                        Belum Memiliki Akun? Klik untuk daftar
                      </a>
                    </Link>
                  </div>
                </form>
              </div>
              <div className="bg-[#0C364B] rounded-b-lg p-4">
                <div className="flex justify-end mt-4">
                  <button
                    type="button"
                    className="bg-[#4B6C7D] text-white font-bold px-4 py-2 rounded-full"
                  >
                    Log in
                  </button>
                </div>
              </div>
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

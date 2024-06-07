"use client";

import React from "react";
import Link from "next/link";
import { TbMapSearch } from "react-icons/tb";
import { IoIosCreate } from "react-icons/io";
import { VscGraphLine } from "react-icons/vsc";

interface NavLinkProps {
  href: string;
  text: string;
}

const NavLink: React.FC<NavLinkProps> = ({ href, text }) => (
  <Link href={href} legacyBehavior passHref>
    <a className="flex items-center focus:outline-none rounded-full p-2 text-[#9BD2EF] font-bold">
      {text}
    </a>
  </Link>
);

interface NavigateProps {
  href: string;
  icon: React.ReactNode;
  text: string;
  onClick?: () => void;
}

const Navigate: React.FC<NavigateProps> = ({ href, icon, text, onClick }) => {
  const [isModalOpen, setModalOpen] = React.useState(false);

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };

  const bgClass = text === "Form Aduan" ? "bg-[#4B6C7D]" : "";
  const hoverClass = text === "Form Aduan" ? "" : "hover:bg-[#4B6C7D]";

  return (
    <Link href={href} legacyBehavior passHref>
      <a
        className={`flex items-center focus:outline-none rounded-full p-2 text-white font-bold ${bgClass} ${hoverClass}`}
        onClick={onClick}
        style={{ display: "flex", alignItems: "center" }}
      >
        {icon}
        <span className="ml-2">{text}</span>
      </a>
    </Link>
  );
};

const Header = () => {
  return (
    <div className="flex h-screen">
      <header className="sidebar w-64 bg-[#0C364B] flex flex-col p-4">
        <div className="mt-4 space-y-4">
          <NavLink href="Utama" text="Beranda" />
          <div className="mt-4 space-y-4">
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
      </header>
      <main className="flex-grow bg-gray-100 p-4">
        {/* Main content goes here */}
      </main>
    </div>
  );
};

export default Header;

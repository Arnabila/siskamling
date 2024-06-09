"use client";

import React from "react";
import Link from "next/link";
import { TbMapSearch } from "react-icons/tb";
import { IoIosCreate } from "react-icons/io";
import { VscGraphLine } from "react-icons/vsc";
import { useRouter } from "next/router";

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

  const bgClass = text === "Peta Sebaran" ? "bg-[#4B6C7D]" : "";
  const hoverClass = text === "Peta Sebaran" ? "" : "hover:bg-[#4B6C7D]";

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
      <div className="bg-gray-200 flex flex-col p-4" style={{ width: "250px" }}>
        <div className="mt-8 flex-auto flex flex-col">
          <ul className="p-4 rounded-lg">
            <li className="mb-2 font-semibold text-[#0C364B]">
              <input type="checkbox" name="type" id="curat" className="mr-2" />
              <label htmlFor="curat" className="text-l">
                Curat
              </label>
            </li>
            <li className="mb-2 font-semibold text-[#0C364B]">
              <input
                type="checkbox"
                name="type"
                id="curanmor"
                className="mr-2"
              />
              <label htmlFor="curanmor" className="text-l">
                Curanmor
              </label>
            </li>
            <li className="mb-2 font-semibold text-[#0C364B]">
              <input
                type="checkbox"
                name="type"
                id="penganiayaan"
                className="mr-2"
              />
              <label htmlFor="penganiayaan" className="text-l">
                Penganiayaan
              </label>
            </li>
            <li className="mb-2 font-semibold text-[#0C364B]">
              <input
                type="checkbox"
                name="type"
                id="penipuan"
                className="mr-2"
              />
              <label htmlFor="penipuan" className="text-l">
                Penipuan
              </label>
            </li>
            <li className="mb-2 font-semibold text-[#0C364B]">
              <input
                type="checkbox"
                name="type"
                id="pengeroyokan"
                className="mr-2"
              />
              <label htmlFor="pengeroyokan" className="text-l">
                Pengeroyokan
              </label>
            </li>
            <li className="mb-2 font-semibold text-[#0C364B]">
              <input
                type="checkbox"
                name="type"
                id="pembobolan"
                className="mr-2"
              />
              <label htmlFor="pembobolan" className="text-l">
                Pembobolan
              </label>
            </li>
            <li className="mb-2 font-semibold text-[#0C364B]">
              <input
                type="checkbox"
                name="type"
                id="penipuan2"
                className="mr-2"
              />
              <label htmlFor="penipuan2" className="text-l">
                Penipuan
              </label>
            </li>
            <li className="mb-2 font-semibold text-[#0C364B]">
              <input
                type="checkbox"
                name="type"
                id="lainnya"
                className="mr-2"
              />
              <label htmlFor="lainnya" className="text-l">
                Lainnya
              </label>
            </li>
          </ul>
        </div>
      </div>
      <main className="flex-grow bg-gray-100 p-4"></main>
    </div>
  );
};

export default Header;

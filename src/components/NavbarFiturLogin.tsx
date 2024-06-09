import React from "react";

interface INavbarProps {
  isModalOpen: boolean;
  toggleModal: () => void;
}

const Navbar: React.FC<INavbarProps> = ({ isModalOpen, toggleModal }) => {
  return (
    <nav className="bg-white relative z-10">
      <div className="container mx-auto flex items-center justify-between h-16">
        <a href="#" className="flex items-center">
          <img
            src="/image/logo brand.png"
            alt="Brand Logo"
            className="w-72 h-12"
          />
        </a>
        <div className="flex-grow flex justify-center">
          <form className="flex">{/* Form content goes here */}</form>
        </div>
      </div>
    </nav>
  );
};

interface NavLinkProps {
  href: string;
  icon: React.ReactNode;
  text: string;
  onClick?: () => void;
}

const NavLink: React.FC<NavLinkProps> = ({ href, icon, text, onClick }) => (
  <div className="flex items-center">
    <button className="flex items-center" onClick={onClick}>
      {icon}
      <a href={href} className="text-black font-bold ml-2">
        {text}
      </a>
    </button>
  </div>
);

export default Navbar;

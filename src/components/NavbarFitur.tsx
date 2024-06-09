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
          <form className="flex"></form>
        </div>
        <div className="flex items-center space-x-4">
          <button
            className="bg-white text-[#0C364B] px-4 py-2 rounded-full font-extrabold"
            type="button"
            onClick={toggleModal}
          >
            Log In
          </button>
          <button className="bg-[#0C364B] text-white px-4 py-2 rounded-full font-bold">
            Sign Up
          </button>
        </div>
      </div>
      {isModalOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
          id="exampleModal"
        >
          <div className="bg-white rounded-lg p-4 w-full max-w-md">
            <div className="bg-white rounded-t-lg p-4 flex justify-between">
              <h5 className="text-xl font-bold" id="exampleModalLabel">
                Log In
              </h5>
              <button
                type="button"
                className="text-black"
                onClick={toggleModal}
                aria-label="Close"
              >
                ✕
              </button>
            </div>
            <div className="mt-4">
              <form>
                <div className="mb-4">
                  <label htmlFor="email-login" className="block text-[#0C364B]">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control w-full p-2 border border-gray-300 rounded-full"
                    id="email-login"
                    placeholder="Email"
                  />
                </div>
                <div className="mb-4">
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
                  <a
                    href="sign_up.html"
                    className="text-[#0C364B] block text-right mt-2"
                  >
                    Belum Memiliki Akun? Klik untuk daftar
                  </a>
                </div>
              </form>
            </div>
            <div className="bg-white rounded-b-lg p-4">
              <div className="flex justify-end mt-4">
                <button
                  type="button"
                  className="bg-[#4B6C7D] text-white px-4 py-2 rounded-full"
                >
                  Log in
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
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

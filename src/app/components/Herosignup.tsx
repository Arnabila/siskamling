import React from "react";

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="flex items-center justify-center h-screen bg-white font-poppins"
    >
      <form className="form-signup max-w-md mx-auto">
        <div className="mb-6">
          <label
            htmlFor="nama-sign"
            className="block font-bold text-[#0C364B] text-lg"
          >
            Nama
          </label>
          <input
            type="text"
            className="mt-1 block w-96 p-3 border border-gray-300 rounded-full text-[#0C364B] shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            id="nama-sign"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="email-sign"
            className="block font-bold text-[#0C364B] text-lg"
          >
            Email
          </label>
          <input
            type="text"
            className="mt-1 block w-full p-3 border border-gray-300 rounded-full text-[#0C364B] shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            id="email-sign"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="password-sign"
            className="block font-bold text-[#0C364B] text-lg"
          >
            Password
          </label>
          <input
            type="password"
            className="mt-1 block w-full p-3 border border-gray-300 rounded-full text-[#0C364B] shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            id="password-sign"
            placeholder="••••••"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="repassword-sign"
            className="block font-bold text-[#0C364B] text-lg"
          >
            Re-Password
          </label>
          <input
            type="password"
            className="mt-1 block w-full p-3 border border-gray-300 rounded-full shadow-sm text-[#0C364B] focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            id="repassword-sign"
            placeholder="••••••"
          />
        </div>
        <div className="flex justify-end">
          <button
            type="button"
            className="w-32 py-3 px-6 border border-transparent font-medium rounded-full text-white bg-[#4B6C7D] hover:bg-[#0c364B] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#4B6C7D]"
          >
            Submit
          </button>
        </div>
      </form>
    </section>
  );
};

export default Hero;

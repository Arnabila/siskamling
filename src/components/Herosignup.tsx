"use client";
import React, { useState } from "react";
import firebase from "firebase/app";
import "firebase/auth";

const Hero: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignUp = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        var user = userCredential.user;
        console.log(user);
        // Optionally, you can redirect the user to another page after successful registration
        // window.location.href = "/dashboard";
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        setError(errorMessage);
      });
  };

  return (
    <section
      id="hero"
      className="flex items-center justify-center h-screen bg-white font-poppins"
    >
      <form className="form-signup max-w-md mx-auto">
        <div className="mb-6">
          <label
            htmlFor="email-sign"
            className="block font-bold text-[#0C364B] text-lg"
          >
            Email
          </label>
          <input
            type="email"
            className="mt-1 block w-full p-3 border border-gray-300 rounded-full text-[#0C364B] shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            id="email-sign"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {error && <div className="text-red-500 mb-4">{error}</div>}
        <div className="flex justify-end">
          <button
            type="button"
            onClick={handleSignUp}
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

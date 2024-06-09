import React from "react";

const Footer: React.FC = () => {
  return (
    <section
      id="footer"
      className="border border-black bg-white text-[#0C364B] py-10 h-25 font-poppins font-bold"
    >
      <div className="container mx-auto px-4 h-full">
        <div className="grid grid-cols-2 h-full items-center">
          <div className="flex justify-start items-center">
            <img
              src="/image/Group9.png"
              alt="Logo"
              className="max-w-xs w-1/1"
            />
          </div>
          <div className="flex flex-col justify-center items-end text-right">
            <div style={{ fontSize: "0.75rem" }}>
              <p>Support by</p>
              <p>Institut Teknologi Sepuluh Nopember</p>
              <p>Departemen Teknik Geomatika</p>
              <p>Field Camp Thematic</p>
              <p style={{ fontSize: "0.75rem", marginBottom: "1rem" }}>
                Team 16
              </p>
            </div>
            <img
              src="/image/Group10.png"
              alt="Sponsor Logo"
              className="max-w-xs"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;

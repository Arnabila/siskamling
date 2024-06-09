import React from "react";

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative h-screen bg-[#0C364B] font-poppins">
      <div className="container mx-auto h-full">
        <div className="grid grid-cols-2 h-full items-center">
          <div className="p-4 md">
            <h1 className="text-4xl text-white">Selamat Datang di</h1>
            <h1 className="text-4xl text-white font-bold">SISKAMLING</h1>
            <h1 className="text-4xl text-white font-bold">KLAMPIS NGASEM</h1>
            <h1 className="text-4xl text-white font-bold">SUKOLILO</h1>
            <p className="mt-4 text-white">
              <span className="font-bold">Sistem Keamanan Lingkungan</span>{" "}
              merupakan sebuah website berfungsi sebagai media informasi untuk
              memantau dan melaporkan tindak kriminalitas di Kelurahan Klampis
              Ngasem. Website ini dapat dimanfaatkan oleh masyarakat umum
              sebagai layanan aduan apabila terjadi tindak kriminalitas di
              lingkungan Klampis Ngasem. Harapannya media ini dapat dimanfaatkan
              sebaik mungkin untuk meningkatkan keamanan di lingkungan Klampis
              Ngasem.
            </p>
          </div>
          <div className="flex justify-center">
            <img
              src="/image/KlampisNgasem.png"
              alt="Hero Image"
              className="max-w-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

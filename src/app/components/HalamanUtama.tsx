import React from "react";
import ImgAsset from "../public";

export default function HalamanUtama() {
  return (
    <div className="WebGISHalamanUtama">
      <div className="flex flex-col items-center">
        <div className="w-full h-96 relative">
          <img
            className="w-full h-full object-cover"
            src={ImgAsset.WebGISPetaSebaran_Basemapimage}
            alt="Basemap"
          />
        </div>
        <span className="text-center mt-4 px-6 py-4 text-sm leading-relaxed">
          Siskamling (Sistem Keamanan Lingkungan) merupakan sebuah website
          berfungsi sebagai media informasi untuk memantau dan melaporkan tindak
          kriminalitas di Kelurahan Klampis Ngasem. Website ini dapat
          dimanfaatkan oleh masyarakat umum sebagai layanan aduan apabila
          terjadi tindak kriminalitas di lingkungan Klampis Ngasem. Harapannya
          media ini dapat dimanfaatkan sebaik mungkin untuk meningkatkan
          keamanan di lingkungan Klampis Ngasem.
        </span>
        <span className="text-center mt-2 text-xl font-bold">
          SISKAMLING
          <br />
          KELURAHAN KLAMPIS NGASEM
          <br />
          KECAMATAN SUKOLILO
        </span>
        <span className="text-center mt-2 text-lg">Selamat Datang di</span>
        <img
          className="mt-4"
          src={ImgAsset.WebGISHalamanUtama_Rectangle9}
          alt="Rectangle 9"
        />
        <div className="flex flex-col items-center mt-6">
          <span className="text-center text-sm">
            Support by
            <br />
            Institut Teknologi Sepuluh Nopember
            <br />
            Departemen Teknik Geomatika
            <br />
            Field Camp Thematic
            <br />
            Team 16
          </span>
          <div className="flex mt-4 space-x-4">
            <img
              className="w-20 h-20"
              src={ImgAsset.WebGISHalamanUtama_WhatsAppImage20221206at1033}
              alt="WhatsApp"
            />
            <img
              className="w-20 h-20"
              src={ImgAsset.WebGISHalamanUtama_logo1}
              alt="Logo 1"
            />
            <img
              className="w-20 h-20"
              src={ImgAsset.WebGISHalamanUtama_LogoITS1355x2191}
              alt="Logo ITS"
            />
          </div>
        </div>
        <div className="mt-6">
          <span className="text-blue-500 cursor-pointer">Log in</span>
        </div>
        <div className="mt-4 flex flex-col items-center">
          <div className="w-10 h-10 relative">
            <img
              className="absolute inset-0"
              src={ImgAsset.WebGISHalamanUtama_Vector}
              alt="Vector"
            />
            <img
              className="absolute inset-0"
              src={ImgAsset.WebGISHalamanUtama_Vector_1}
              alt="Vector 1"
            />
          </div>
          <div className="mt-4">
            <span className="text-blue-500 cursor-pointer">Sign up</span>
          </div>
        </div>
        <img
          className="mt-6"
          src={ImgAsset.WebGISSignIn_MenuVertical}
          alt="Menu Vertical"
        />
        <img
          className="mt-4"
          src={ImgAsset.WebGISHalamanUtamalogin_image2}
          alt="Login Image"
        />
        <img
          className="mt-4"
          src={ImgAsset.WebGISSignIn_GmailLogo}
          alt="Gmail Logo"
        />
        <img
          className="mt-4"
          src={ImgAsset.WebGISHalamanUtama_Rectangle23}
          alt="Rectangle 23"
        />
        <span className="mt-4 text-lg font-semibold">Statistik</span>
        <span className="text-center mt-4 px-6 py-4 text-sm leading-relaxed">
          Support by
          <br />
          Institut Teknologi Sepuluh Nopember
          <br />
          Geomatics Engineering
          <br />
          Field Camp Thematic
          <br />
          Team 16
        </span>
        <div className="w-full h-64 bg-gray-200 mt-6" />
        <div className="flex flex-col items-center mt-4 space-y-4">
          <div className="flex flex-col items-center">
            <div className="w-64 h-64 bg-gray-200 relative">
              <img
                className="absolute inset-0"
                src={ImgAsset.WebGISHalamanUtama_WhatsAppImage20221206at1033}
                alt="WhatsApp"
              />
              <img
                className="absolute inset-0"
                src={ImgAsset.WebGISHalamanUtama_logo1}
                alt="Logo 1"
              />
              <img
                className="absolute inset-0"
                src={ImgAsset.WebGISHalamanUtama_LogoITS1355x2191}
                alt="Logo ITS"
              />
            </div>
          </div>
        </div>
        <span className="mt-6 text-lg font-semibold">Beranda</span>
        <span className="mt-2 text-lg font-semibold">Peta Sebaran</span>
        <span className="mt-2 text-lg font-semibold">Form Aduan</span>
        <img
          className="mt-4"
          src={ImgAsset.WebGISFormAduan_Graph}
          alt="Graph"
        />
        <img
          className="mt-4"
          src={ImgAsset.WebGISStatistik_Create}
          alt="Create"
        />
        <img
          className="mt-4"
          src={ImgAsset.WebGISFormAduan_MapMarker}
          alt="Map Marker"
        />
        <span className="mt-6 text-lg font-semibold">Siskamling</span>
        <div className="mt-6 flex flex-col items-center">
          <span className="text-lg font-semibold">Beri kami masukan!</span>
          <span className="text-blue-500 cursor-pointer">Kirimkan saran</span>
          <img
            className="mt-4"
            src={ImgAsset.WebGISSignIn_GmailLogo_1}
            alt="Gmail Logo"
          />
        </div>
      </div>
    </div>
  );
}

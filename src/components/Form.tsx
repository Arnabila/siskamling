"use client";

import React, { useState } from "react";

const FormAduan = ({ width = "max-w-lg", height = "min-h-screen" }) => {
  const [showOptionalLabel, setShowOptionalLabel] = useState(false);

  const handleJenisChange = (event) => {
    setShowOptionalLabel(event.target.value === "Lainnya");
  };

  return (
    <div
      className={`w-full flex justify-center items-center ${height} bg-gray-100`}
    >
      <form className={`w-full ${width} bg-gray-100`}>
        <div className="mb-4">
          <label htmlFor="nama" className="block text-[#0C364B] font-bold mb-2">
            Nama
          </label>
          <input
            type="text"
            id="nama"
            className="text-[#0C364B] w-full px-3 py-2 border border-gray-300 rounded-full focus:outline-none focus:border-[#0C364B]"
            placeholder="Nama"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="nomor"
            className="block text-[#0C364B] font-bold mb-2"
          >
            Nomor Telepon
          </label>
          <input
            type="number"
            id="nomor"
            className="text-[#0C364B] w-full px-3 py-2 border border-gray-300 rounded-full focus:outline-none focus:border-[#0C364B]"
            placeholder="Nomor Telepon"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="Jenis"
            className="block text-[#0C364B] font-bold mb-2"
          >
            Jenis Kejadian
          </label>
          <select
            id="Jenis"
            className="text-[#0C364B] w-full px-3 py-2 border border-gray-300 rounded-full focus:outline-none focus:border-[#0C364B]"
            onChange={handleJenisChange}
          >
            <option value="Jenis Kejadian">Jenis Kejadian</option>
            <option value="Curat">Curian Berat</option>
            <option value="Curanmor">Curian Kendaraan Bermotor</option>
            <option value="Penganiayaan">Penganiayaan</option>
            <option value="Pengeroyokan">Pengeroyokan</option>
            <option value="Pembobolan">Pembobolan</option>
            <option value="Penipuan">Penipuan</option>
            <option value="Lainnya">Lainnya</option>
          </select>
        </div>
        {showOptionalLabel && (
          <div className="mb-4">
            <label
              htmlFor="optional-label"
              className="block text-[#0C364B] font-bold mb-2"
            >
              Jenis Kejadian Lainnya
            </label>
            <input
              type="text"
              id="optional-label"
              className="text-[#0C364B] w-full px-3 py-2 border border-gray-300 rounded-full focus:outline-none focus:border-[#0C364B]"
              placeholder="Jenis Kejadian Lainnya"
            />
          </div>
        )}
        <div className="mb-4">
          <label
            htmlFor="lokasi"
            className="block text-[#0C364B] font-bold mb-2"
          >
            Lokasi Kejadian
          </label>
          <input
            type="text"
            id="lokasi"
            className="text-[#0C364B] w-full px-3 py-2 border border-gray-300 rounded-full focus:outline-none focus:border-[#0C364B]"
            placeholder="Lokasi Kejadian"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="deskripsi"
            className="block text-[#0C364B] font-bold mb-2"
          >
            Deskripsi Singkat
          </label>
          <input
            type="text"
            id="deskripsi"
            className="text-[#0C364B] w-full px-3 py-2 border border-gray-300 rounded-full focus:outline-none focus:border-[#0C364B]"
            placeholder="Deskripsi Singkat"
          />
        </div>
        <div className="mb-4 text-right">
          <button
            type="button"
            className="bg-[#4B6C7D] text-white px-4 py-2 rounded-full hover:bg-[#0C364B] focus:outline-none"
            style={{ width: "100px" }}
          >
            Kirim
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormAduan;

import React from "react";

const AdditionalSidebar = () => (
  <div className="w-64 bg-gray-700 text-white p-4">
    <h2 className="text-xl font-bold mb-4">Peta Sebaran</h2>
    <ul className="space-y-2">
      <li>
        <label className="inline-flex items-center">
          <input type="radio" className="form-radio text-blue-600" name="type" value="curat" />
          <span className="ml-2">Curat</span>
        </label>
      </li>
      <li>
        <label className="inline-flex items-center">
          <input type="radio" className="form-radio text-blue-600" name="type" value="curanmor" />
          <span className="ml-2">Curanmor</span>
        </label>
      </li>
      <li>
        <label className="inline-flex items-center">
          <input type="radio" className="form-radio text-blue-600" name="type" value="penganiayaan" />
          <span className="ml-2">Penganiayaan</span>
        </label>
      </li>
      <li>
        <label className="inline-flex items-center">
          <input type="radio" className="form-radio text-blue-600" name="type" value="penipuan" />
          <span className="ml-2">Penipuan</span>
        </label>
      </li>
      <li>
        <label className="inline-flex items-center">
          <input type="radio" className="form-radio text-blue-600" name="type" value="pengeroyokan" />
          <span className="ml-2">Pengeroyokan</span>
        </label>
      </li>
      <li>
        <label className="inline-flex items-center">
          <input type="radio" className="form-radio text-blue-600" name="type" value="pembobolan" />
          <span className="ml-2">Pembobolan</span>
        </label>
      </li>
      <li>
        <label className="inline-flex items-center">
          <input type="radio" className="form-radio text-blue-600" name="type" value="penipuan2" />
          <span className="ml-2">Penipuan</span>
        </label>
      </li>
    </ul>
  </div>
);

export default AdditionalSidebar;

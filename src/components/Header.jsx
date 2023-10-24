import React from "react";

const Header = ({ handleOpneModal }) => {
  return (
    <header className="flex justify-between p-2">
      <h1 className="text-[40px] font-bold">Usuarios</h1>
      <button onClick={handleOpneModal} className="bg-[#555A88] text-slate-50 p-2 px-4 font-semibold">
        + Crear nuevo usuario
      </button>
    </header>
  );
};

export default Header;

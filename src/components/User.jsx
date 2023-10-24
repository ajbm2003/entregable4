import React from "react";
import { IconEdit, IconTrash, IconUser } from "@tabler/icons-react";

const User = ({ info, deleteUser, handleClickUpdate }) => {
  return (
    <article className="border-2 p-2 rounded-lg">
      <div className="p-4 grid gap-1">
        <h5 className="text-[23px] font-semibold flex gap-1">
          <IconUser/> {info.first_name} {info.last_name}
        </h5>
        <p className="text-[#D3D3D3] text-[13px]">CORREO</p>
        <p>{info.email}</p>
        <p className="text-[#D3D3D3] text-[13px]">CUMPLEAÑOS</p>
        <p>{info.birthday}</p>
      </div>
      <div className="flex justify-end border-t-[2px] p-3 gap-3">
        <button onClick={() => deleteUser(info.id)}>
          <IconTrash className="bg-red-500 rounded-md text-white p-1 hover:bg-red-700"/>
        </button>
        <button onClick={()=>handleClickUpdate(info)}>
          <IconEdit className="rounded-md border-2 text-[#D3D3D3] p-0.5 hover:bg-amber-300" />
        </button>
      </div>
    </article>
  );
};

export default User;

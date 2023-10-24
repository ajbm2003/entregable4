import React from "react";
import { IconCircleX } from "@tabler/icons-react";
import { useForm } from "react-hook-form";

const Modal = ({ errors, isShowModal, handleCloseModal, handleSubmit, register, submit, userToEdit }) => {

  return (
    <section
      className={`fixed top-0 bottom-0 left-0 right-0 px-3 flex justify-center items-center bg-black/30 transition-all ${
        isShowModal ? "visible opacity-100" : "invisible opacity-0"
      }`}
    >
      <form
        onSubmit={handleSubmit(submit)}
        className="bg-white p-3 rounded-md grid gap-3 w-[min(100%,_270px)] relative"
      >
        <h2 className='text-center text-lg font-semiboldclassName="font-light" '>
          {userToEdit?"Editar usuario" :"Nuevo usuario"}
        </h2>
        <button
          onClick={handleCloseModal}
          type="button"
          className="text-red-500 absolute right-0 hover:text-red-700 transition-colors"
        >
          <IconCircleX />
        </button>
        <div className="grid gap-2">
          <label className="font-light" htmlFor="email">
            Email
          </label>
          <input
            className="outline-none border px-2 py-1"
            id="email"
            type="email"
            maxLength="150"
            {...register("email",  {
              required:{
              value:true,
              message: "Este campo es necesario",
            },
              minLength:{
              value: 3,
              message:"El minimo tamaño de este es de 3 caracteres."}
          })}
          />
          {errors.email && (
            <span className="text-xs text-red-500">{errors.email.message}</span>
          )}
        </div>
        <div className="grid gap-2">
          <label className="font-light" htmlFor="first_name">
            Nombre
          </label>
          <input
            className="outline-none border px-2 py-1"
            id="first_name"
            type="text"
            maxLength="25"
            {...register("first_name", {required:{
              value:true,
              message: "Este campo es necesario",
            },
            minLength:{
              value: 3,
              message:"El minimo tamaño de este es de 3 caracteres."}
          })}
          />
           {errors.first_name && (
            <span className="text-xs text-red-500">{errors.first_name.message}</span>
          )}
        </div>
        <div className="grid gap-2">
          <label className="font-light" htmlFor="last_name">
            Apellido
          </label>
          <input
            className="outline-none border px-2 py-1"
            id="last_name"
            type="text"
            maxLength="25"
            {...register("last_name", {required:{
              value:true,
              message: "Este campo es necesario",
            },
            minLength:{
              value: 3,
              message:"El minimo tamaño de este es de 3 caracteres."}
          })}
          />
          {errors.last_name && (
            <span className="text-xs text-red-500">{errors.last_name.message}</span>
          )}
        </div>
        <div className="grid gap-2">
          <label className="font-light" htmlFor="password">
            Contranseña
          </label>
          <input
            className="outline-none border px-2 py-1"
            id="password"
            type="text"
            maxLength="25"
            {...register("password", {required:{
              value:true,
              message: "Este campo es necesario",
            },
            minLength:{
              value: 3,
              message:"El minimo tamaño de este es de 3 caracteres."}
          })}
          />
          {errors.password && (
            <span className="text-xs text-red-500">{errors.password.message}</span>
          )}
        </div>
        <div className="grid gap-2">
          <label className="font-light" htmlFor="birthday">
            Cumpleaños
          </label>
          <input
            className="outline-none border px-2 py-1"
            id="birthday"
            type="date"
            {...register("birthday",
              {required:{
                value:true,
                message: "Este campo es necesario",
              },
            })}
          />
          {errors.birthday && (
            <span className="text-xs text-red-500">{errors.birthday.message}</span>
          )

          }
        </div>
        <button
          className="bg-[#555A88] text-slate-50 p-2 px-4 font-semibold"
          type="submit"
        >
          {userToEdit?"Editar ususario" :"Agregar nuevo usuario"}
        </button>
      </form>
    </section>
  );
};

export default Modal;

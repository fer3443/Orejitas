"use client";

import clsx from "clsx";
import Link from "next/link";
import React from "react";
import {
  IoCloseOutline,
  IoPersonOutline,
  IoSearchOutline,
  IoHeart,
  IoLogInOutline,
  IoLogOutOutline,
  IoLogoIonic,
  IoPeopleOutline,
} from "react-icons/io5";
import { MdOutlinePets } from "react-icons/md";
import { CgSearchFound } from "react-icons/cg";
import { FaHeartCircleExclamation } from "react-icons/fa6";
import { useUiStore } from "@/store";

export const Sidebar = () => {
  const isSideMenuOpen = useUiStore((state) => state.isSideMenuOpen);
  const closeSideMenu = useUiStore((state) => state.closeSideMenu);
  return (
    <div>
      {/*Background black*/}
      {isSideMenuOpen && (
        <div className="fixed top-0 left-0 w-screen h-screen z-10 bg-black opacity-30" />
      )}
      {/*bg blur */}
      {isSideMenuOpen && (
        <div className="fade-in fixed top-0 left-0 w-screen h-screen z-10 backdrop-filter backdrop-blur-sm" onClick={closeSideMenu} />
      )}
      {/* Sidemenu */}
      <nav className={clsx("fixed p-5 right-0 top-0 w-[350px] h-screen bg-white z-20 shadow-2xl transform transition-all duration-300",
        {
          "translate-x-full": !isSideMenuOpen
        }
      )}>
        <IoCloseOutline
          size={35}
          className="absolute top-5 right-5 cursor-pointer"
          onClick={() => closeSideMenu()}
        />

        <div className="relative mt-14">
          <IoSearchOutline size={20} className="absolute top-2 left-2" />
          <input
            type="text"
            placeholder="Buscar"
            className="w-full bg-gray-50 rounded pl-10 py-1 pr-10 border-b-2 border-turquoise-200 focus:outline-none focus:border-turquoise-500"
          />
        </div>

        {/* Menu */}
        <div className="mt-4 flex flex-col h-full gap-y-4">
          <Link
            href={"/profile"}
            className="flex items-center p-2 hover:bg-turquoise-100 rounded transition-all"
          >
            <IoPersonOutline size={20} />
            <span className="ml-3">Perfil</span>
          </Link>
          <Link
            href={"/pets"}
            className="flex items-center p-2 hover:bg-turquoise-100 rounded transition-all"
          >
            <MdOutlinePets size={20} />
            <span className="ml-3">Todos</span>
          </Link>
          <Link
            href={"/pets/adoption"}
            className="flex items-center p-2 hover:bg-turquoise-100 rounded transition-all"
          >
            <IoHeart size={20} />
            <span className="ml-3">En adopción</span>
          </Link>
          <Link
            href={"/pets/found"}
            className="flex items-center p-2 hover:bg-turquoise-100 rounded transition-all"
          >
            <CgSearchFound size={20} />
            <span className="ml-3">Encontrados</span>
          </Link>
          <Link
            href={"/pets/losts"}
            className="flex items-center p-2 hover:bg-turquoise-100 rounded transition-all"
          >
            <FaHeartCircleExclamation size={20} />
            <span className="ml-3">Perdidos</span>
          </Link>
          <Link
            href={"/pets/losts"}
            className="flex items-center p-2 hover:bg-turquoise-100 rounded transition-all"
          >
            <IoLogInOutline size={20} />
            <span className="ml-3">Ingresar</span>
          </Link>
          {/* <Link
          href={"/pets/losts"}
          className="flex items-center p-2 hover:bg-turquoise-100 rounded transition-all"
        >
          <IoLogOutOutline size={20} />
          <span className="ml-3">Salir</span>
        </Link> */}

          <div className="w-full h-px bg-turquoise-300 my-5" />
          <Link
            href={"/admin"}
            className="flex items-center p-2 hover:bg-turquoise-100 rounded transition-all"
          >
            <IoLogoIonic size={20} />
            <span className="ml-3">Administración</span>
          </Link>
          <Link
            href={"/users"}
            className="flex items-center p-2 hover:bg-turquoise-100 rounded transition-all"
          >
            <IoPeopleOutline size={20} />
            <span className="ml-3">Usuarios</span>
          </Link>
        </div>
      </nav>
    </div>
  );
};

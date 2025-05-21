"use client";

import { useUiStore } from "@/store";
import Link from "next/link";
import React from "react";
import { FaRegUser } from "react-icons/fa6";

export const TopMenu = () => {
  const openMenu = useUiStore((state) => state.openSideMenu);
  return (
    <nav className="flex justify-between items-center my-3 px-5 w-full ">
      {/*Logo */}
      <div>
        <Link href="/">
          <span>Orejitas</span>
        </Link>
      </div>

      {/*Center Menu*/}
      <ul className="hidden sm:flex items-center space-x-4">
        <li>
          <Link
            href="/species/cat"
            className="p-2 rounded antialiased transition-all hover:bg-gray-100"
          >
            Gatos
          </Link>
        </li>
        <li>
          <Link
            href="/species/dog"
            className="p-2 rounded antialiased transition-all hover:bg-gray-100"
          >
            Perros
          </Link>
        </li>
        <li>
          <Link
            href="/species/other"
            className="p-2 rounded antialiased transition-all hover:bg-gray-100"
          >
            Otros
          </Link>
        </li>
      </ul>

      {/*Right Menu*/}

      <ul className="flex items-center space-x-4">
        <li>
          <Link href="/auth/login">
            <FaRegUser
              className="p-2 rounded antialiased transition-all hover:bg-gray-100"
              size={35}
            />
          </Link>
        </li>
        <li>
          <button className="py-2 px-4 border rounded-xl bg-linear-to-b/decreasing from-cyan-500 to-blue-500 cursor-pointer" onClick={() => openMenu()}>
            Menu
          </button>
        </li>
      </ul>
    </nav>
  );
};

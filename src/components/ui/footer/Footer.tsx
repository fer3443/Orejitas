import { titleFont } from "@/config/fonts";
import Link from "next/link";
import React from "react";

export const Footer = () => {
  return (
    <footer className="flex justify-around text-xs mb-5 gap-4">
      <ul className="flex items-center gap-4">
        <li>
          <Link href={"/"} className="hover:underline hover:text-turquoise-500">
            <span className={`${titleFont.className} font-semibold`}>
              Orejitas
            </span>
          </Link>
        </li>
        <li>
          <Link href={"/about"} className="hover:underline hover:text-turquoise-500">A cerca de</Link>
        </li>
        <li>
          <Link href={"/"} className="hover:underline hover:text-turquoise-500">Contacto</Link>
        </li>
      </ul>
      <p>
        Fernando Arroyo R. | Todos los derechos reservados.{" "}
        <span>© {new Date().getFullYear()}</span>
      </p>
    </footer>
  );
};

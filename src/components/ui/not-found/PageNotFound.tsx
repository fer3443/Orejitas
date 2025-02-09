import Image from "next/image";
import Link from "next/link";
import React from "react";

export const PageNotFound = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row h-[800px] justify-center items-center align-middle">
      <div className="text-center px-5 mx-5">
        <h1 className="antialiased text-9xl">404</h1>
        <h2 className="font-semibold text-xl">Ups! nada por aquí. La pagina que buscas no exite</h2>
        <p className="font-light">
          Puedes regresar al inicio haciendo click{" "}
          <Link href="/" className="font-semibold hover:underline transition-all">
            aqui
          </Link>
        </p>
      </div>
      <div className="px-5 mx-5">
      <Image
        src={"/Orejitas-logo.png"}
        width={550}
        height={550}
        alt="Orejitas Logo 404"
        className="h-auto p-5"
        priority
      />
      </div>
    </div>
  );
};

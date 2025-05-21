import { MobileSlideShow, SlideShow } from "@/components";
import { titleFont } from "@/config/fonts";
import { Gender, Species } from "@/interface";
import { initialData } from "@/seed/seed";
import clsx from "clsx";
import { notFound } from "next/navigation";
import { IoHeartOutline } from "react-icons/io5";

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function PetPage({ params }: Props) {
  const { slug } = await params;

  const pet = initialData.pets.find((item) => item.slug === slug);

  const label: Record<Species, string> = {
    cat: "Felino",
    dog: "Canino",
    other: "Otro",
  };

  const labelGender: Record<Gender, string> = {
    F: "Hembra",
    M: "Macho",
    O: "Otro",
  };
  if (!pet) {
    notFound();
  }

  return (
    <div className="container mx-auto mt-5 mb-6 grid grid-cols-1 md:grid-cols-3 gap-6 text-turquoise-900">      
      <div className="col-span-1 md:col-span-2">
      {/* Mobile SlideShow */}
      <MobileSlideShow name={pet.name} images={pet.petImage} className="block md:hidden"/>
      {/* Desktop Slideshow */}
        <SlideShow name={pet.name} images={pet.petImage} className="hidden md:block" />
      </div>
      {/* Description */}
      <div className="px-4 md:px-0 col-span-1 md:col-span-1 flex flex-col gap-3">
        <h1 className="antialiased text-xl">
          Hola mi nombre es <span className="font-bold">{pet.name}!</span>
        </h1>
        <h3 className="text-lg font-normal">Mis datos:</h3>
        <ul className="flex flex-col gap-2 font-ligth">
          <li className="flex items-center gap-x-1">
            <IoHeartOutline />
            Edad:<span>{pet.age}</span>
          </li>
          <li className="flex items-center gap-x-1">
            <IoHeartOutline />
            Especie: <span>{`${label[pet.specie]}`}</span>
          </li>
          <li className="flex items-center gap-x-1">
            <IoHeartOutline />
            Genero: <span>{`${labelGender[pet.gender]}`}</span>
          </li>
          <li className="flex items-center gap-x-1">
            <IoHeartOutline />
            Estado:
            <span
              className={clsx("font-semibold", {
                "text-red-500": pet.status === "perdido",
                "text-green-500": pet.status === "encontrado",
                "text-turquoise-950": pet.status === "adopción",
              })}
            >
              {pet.status}
            </span>
          </li>
          <li className="flex items-center gap-x-1">
            <IoHeartOutline />
            Ubicación: <span>{pet.location}</span>
          </li>
        </ul>
        <h3 className={`${titleFont.className} text-lg font-normal`}>
          A cerca de mi:
        </h3>
        <p>{pet.description}</p>
      </div>

      {/* Datos usuario */}
    </div>
  );
}

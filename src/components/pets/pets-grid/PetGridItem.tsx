import { Pet } from "@/interface";
import Image from "next/image";
import Link from "next/link";

interface Props {
  pet: Pet;
}

export const PetGridItem = ({ pet }: Props) => {
  return (
    <div className="rounded-md overflow-hidden fade-in">
      <Link href={`/pet/${pet.slug}`}>
        <Image
          src={`${pet.petImage[0]}`}
          alt={pet.name}
          className="w-full h-[250px] object-cover"
          width={500}
          height={500}
        />
      </Link>
      <div className="p-4 flex flex-col">
        <Link
          className="font-semibold hover:underline hover:text-turquoise-500 capitalize"
          href={`/pet/${pet.slug}`}
        >
          {pet.name}
        </Link>
        <span className="font-medium capitalize">{pet.status}</span>
      </div>
    </div>
  );
};

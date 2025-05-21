import { Pet } from "@/interface";
import { PetGridItem } from "./PetGridItem";

interface Props {
  pets: Pet[]
}

export const PetsGrid = ({pets}:Props) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-5">
      {
        pets.map((pet, index) => (
          <PetGridItem key={index} pet={pet}/>
        ))
      }
    </div>
  )
}

import { PetsGrid, Title } from "@/components";
import { Species } from "@/interface";
import { initialData } from "@/seed/seed";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{
    id: Species;
  }>;
}

export default async function SpeciesPage({ params }: Props) {
  const { id } = await params;

  const pets = initialData.pets;
  const data = pets.filter((item) => item.specie === id);

  const label:Record<Species, string> = {
    "dog":"los perritos",
    "cat":"los gatitos",
    "other": "otras especies"
  }

  return (
    <div className="container mx-auto px-2 relative">
      <Title title="Aqui te presentamos a" subtitle={`${(label)[id]} `} />
      <PetsGrid pets={data} />
    </div>
  );
}

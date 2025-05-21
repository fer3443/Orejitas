import { PetsGrid, Title } from "@/components";
import { initialData } from "@/seed/seed";

const pets = initialData.pets

export default function HomePage() {
  return (
   <main className="container mx-auto px-2 relative">
    {/* <div className="bg-[url(/wave.svg)] h-[50dvh] absolute top-0 left-0 w-full bg-no-repeat"/> */}
    <Title title="Orejitas" subtitle="Tu nuevo amigo te espera"/>
    <PetsGrid pets={pets}/>
   </main>
  );
}

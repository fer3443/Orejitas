import { notFound } from "next/navigation";

interface Props {
  params: Promise<{
    id:string;
  }>
}

export default async function SpeciesPage({params}:Props) {
  const {id} = await params;

  return (
    <div>
      <h1>Species Page {id}</h1>
    </div>
  );
}
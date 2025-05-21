interface Props {
  params:Promise<{id:string}>
}

export default async function ProfilePage({params}:Props) {
  const {id} = await params;
  return (
    <div>
      <h1>Hello Page {id}</h1>
    </div>
  );
}
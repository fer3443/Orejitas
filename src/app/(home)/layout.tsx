
export default function HomeLayout({
 children
}: {
 children: React.ReactNode;
}) {
  return (
    <div className="bg-turquoise-100 min-h-screen">
     {children}
    </div>
  );
}
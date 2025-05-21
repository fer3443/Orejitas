
export default function AuthLayout({
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
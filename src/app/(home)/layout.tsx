import { TopMenu } from "@/components";

export default function HomeLayout({
 children
}: {
 children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen">
      <TopMenu/>
     {children}
    </div>
  );
}
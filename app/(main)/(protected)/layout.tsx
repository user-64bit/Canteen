import { Navbar } from "./_components/Navbar";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function MarketingPage({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  if (!session?.user) redirect("/join");

  return (
    <div className="min-h-screen">
      <div className={`flex flex-col justify-center px-[10%] bg-[#f9f9fb]`}>
        <Navbar />
        <div className="">{children}</div>
      </div>
    </div>
  );
}

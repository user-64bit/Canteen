"use client";

import Image from "next/image";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import { BackgroundBeams } from "@/components/ui/background-beams";
import { Button } from "@/components/ui/button";

import { Handshake } from "lucide-react";

export default function MarketingPage() {
  const router = useRouter();
  const session = useSession();

  if (session.data?.user) router.push("/home");

  return (
    <>
      <div className="flex justify-center items-center h-screen gap-x-6 dark:bg-black bg-white">
        <div className="">
          <Image
            src={"/canteen-dark.png"}
            className="dark:block hidden scale-125"
            width={400}
            height={400}
            alt="not found"
          />
          <Image
            src={"/canteen.png"}
            className="block dark:hidden scale-125"
            width={400}
            height={400}
            alt="not found"
          />
        </div>
        <div className="flex flex-col">
          <div className="text-center dark:text-white">
            <span className="text-4xl font-bold">Join Passionate Students</span>
            <br />
            <span className="text-4xl font-bold">Just Like You</span>
          </div>
          <div className="flex flex-col gap-y-2 pt-10">
            <Button
              onClick={() => router.push("/join")}
              className="z-[99999]"
              size={"lg"}
            >
              <span className="mr-1">Join Us</span>{" "}
              <Handshake className="w-5 h-5 mt-1" />
            </Button>
          </div>
        </div>
        <BackgroundBeams />
      </div>
    </>
  );
}

"use client";

import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";

import { cn } from "@/lib/utils";

import { Info } from "lucide-react";

type NavigationTab = {
  title: string;
  value: string;
  icon?: React.ReactNode;
  path?: string;
};

export const Navigation = ({
  navigationTabs,
}: {
  navigationTabs: NavigationTab[];
}) => {
  const router = useRouter();
  const pathname = usePathname();
  const [active, setActive] = useState<NavigationTab | null>(() => {
    return navigationTabs.find((tab) => tab.path === pathname) || null;
  });

  return (
    <>
      <div className={"flex flex-col"}>
        {navigationTabs.map((navigationTab, _) => (
          <div
            key={navigationTab.title}
            className={cn(
              "flex items-center px-4 py-2 gap-x-4 text-gray-500",
              active &&
                active.value === navigationTab.value &&
                "bg-gray-200 dark:bg-gray-200/10 rounded-lg ease-in-out text-black dark:text-white font-bold",
            )}
            role="button"
            onClick={() => {
              setActive(navigationTab);
              router.push(navigationTab.path as string);
            }}
          >
            {navigationTab.icon ? navigationTab.icon : <Info />}
            <span className="block">{navigationTab.title}</span>
          </div>
        ))}
      </div>
    </>
  );
};

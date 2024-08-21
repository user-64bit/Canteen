"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Info } from "lucide-react";

type Tab = {
  title: string;
  value: string;
  icon?: React.ReactNode;
};

export const Tabs = ({ tabs }: { tabs: Tab[] }) => {
  const [active, setActive] = useState<Tab>(tabs?.[0]);
  return (
    <>
      <div
        className={cn(
          "flex justify-center items-center overflow-auto sm:overflow-visible no-visible-scrollbar max-w-full w-full",
        )}
      >
        {tabs.map((tab, _) => (
          <div
            key={tab.title}
            className={cn(
              "flex flex-col justify-center items-center px-8 py-2 rounded-full",
              active.value === tab.value &&
                "bg-gray-200 dark:bg-gray-200/10 rounded-lg ease-in-out",
            )}
            role="button"
            onClick={() => {
              setActive(tab);
            }}
          >
            {tab.icon ? tab.icon : <Info className="w-4 h-4" />}
            <span className="block text-black dark:text-white">
              {tab.title}
            </span>
          </div>
        ))}
      </div>
    </>
  );
};
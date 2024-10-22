"use client";

import { getLatestUpdateAction } from "@/actions/discover";
import { Eye } from "lucide-react";
import { useEffect, useState } from "react";

export const Discover = ({
  opportunities,
  posts,
}: {
  opportunities: any[];
  posts: any[];
}) => {
  const [latestOpportunities, setLatestOpportunities] = useState<any[]>(
    opportunities ?? [],
  );
  const [latestPosts, setLatestPosts] = useState<any[]>(posts ?? []);

  useEffect(() => {
    setLatestOpportunities(opportunities ?? []);
    setLatestPosts(posts ?? []);
  }, [opportunities, posts]);
  if (latestOpportunities.length === 0 && latestPosts.length === 0) {
    return <div className="border px-5">No data</div>;
  }
  return (
    <>
      <div className="flex flex-col gap-y-5">
        <div className="border rounded-lg px-5">
          <span className="font-semibold text-sm text-slate-500">
            Latest Opportunities
          </span>
          <ul>
            {latestOpportunities.map((opportunity) => (
              <div className="py-1" role="button" onClick={() => {}}>
                <li className="flex gap-x-2 items-center justify-between pb-2">
                  <p className="font-semibold text-sm hover:underline">
                    {opportunity.title.slice(0, 30) + "..."}
                  </p>
                  <p className="text-sm text-slate-400 flex items-center gap-x-2">
                    <Eye className="w-4 h-4 text-slate-400" />
                    {opportunity.views}
                  </p>
                </li>
              </div>
            ))}
          </ul>
        </div>
        <div className="border rounded-lg px-5">
          <span className="font-semibold text-sm text-slate-500">
            Latest Posts
          </span>
          <ul>
            {latestPosts.map((post) => (
              <div className="py-1" role="button" onClick={() => {}}>
                <li className="flex gap-x-2 items-center justify-between pb-2">
                  <p className="font-semibold text-sm hover:underline">
                    {post.title.slice(0, 30) + "..."}
                  </p>
                  <p className="text-sm text-slate-400 flex items-center gap-x-2">
                    <Eye className="w-4 h-4 text-slate-400" />
                    {post.views}
                  </p>
                </li>
              </div>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

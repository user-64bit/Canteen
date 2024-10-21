"use server";

import db from "@/db";

export const createOpportunityAction = async ({
  title,
  description,
  tags,
}: {
  title: string;
  description: string;
  tags: string[];
}) => {
  const opportunity = await db.opportunity.create({
    data: {
      title,
      description,
      tags: {
        create: tags.map((tag) => ({ name: tag })),
      },
    },
  });
  return opportunity;
};

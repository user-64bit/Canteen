"use server";

import db from "@/db";

export const getUniversityPosts = async ({ email }: { email: string }) => {
  const universityName = await db.user.findFirst({
    where: {
      email: email,
    },
    select: {
      university: true,
    },
  });
  const posts = await db.post.findMany({
    where: {
      author: {
        university: universityName?.university?.trim(),
      },
    },
    orderBy: {
      createdAt: "desc",
    },
    include: {
      author: {
        select: {
          university: true,
          image: true,
        },
      },
      likes: {
        where: {
          userId: email,
        },
        select: {
          id: true,
        },
      },
      comments: {
        select: {
          id: true,
        },
      },
      _count: {
        select: {
          likes: true,
        },
      },
    },
  });
  const transformedPost = posts.map((post) => ({
    ...post,
    hasLiked: post.likes.length > 0,
    totalLikes: post._count,
    totalComments: post.comments,
    likes: undefined,
    _count: undefined,
  }));
  return transformedPost;
};

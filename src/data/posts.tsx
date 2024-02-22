import { queryOptions } from "@tanstack/react-query";

export type TPost = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

async function fetchPosts(): Promise<TPost[]> {
  return new Promise((resolve, reject) => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => resolve(data))
      .catch((error) => reject(error));
  });
}

export const postsQueryOptions = () =>
  queryOptions({
    queryKey: ["posts"],
    queryFn: () => fetchPosts(),
  });

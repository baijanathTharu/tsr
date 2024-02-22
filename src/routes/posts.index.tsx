import { Link, createFileRoute } from "@tanstack/react-router";
import { postsQueryOptions } from "../data/posts";
import { useSuspenseQuery } from "@tanstack/react-query";

export const Route = createFileRoute("/posts/")({
  component: () => <Posts />,
  loader: (opts) => {
    return opts.context.queryClient.ensureQueryData(postsQueryOptions());
  },
  pendingComponent: () => <div>Loading...</div>,
});

function Posts() {
  const { data } = useSuspenseQuery(postsQueryOptions());
  console.log("Posts", data);

  return (
    <div>
      <ul>
        {data?.map((post) => (
          <li key={post.id}>
            <Link params={{ postId: post.id.toString() }} to="/posts/$postId">
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

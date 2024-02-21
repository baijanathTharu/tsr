import { Link, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/posts/")({
  component: () => (
    <div>
      <ul>
        <li>
          <Link params={{ postId: "1" }} to="/posts/$postId">
            Post One
          </Link>
        </li>
        <li>
          <Link params={{ postId: "2" }} to="/posts/$postId">
            Post Two
          </Link>
        </li>
      </ul>
    </div>
  ),
});

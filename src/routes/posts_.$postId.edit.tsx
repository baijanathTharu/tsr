import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/posts/$postId/edit")({
  component: PostEdit,
});

function PostEdit() {
  const { postId } = Route.useParams();

  return (
    <div>
      Hello /posts/$postId/edit!
      <div>Edit the post with id: {postId}</div>
    </div>
  );
}

import { PostSidebar } from "@/components/post-sidebar";
import { Outlet, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/posts")({
  component: () => (
    <div>
      <PostSidebar>
        <Outlet />
      </PostSidebar>
    </div>
  ),
});

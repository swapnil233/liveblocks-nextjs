import { RoomProvider } from "@/liveblocks.config";
import Editor from "@/components/Editor";
import { ClientSideSuspense } from "@liveblocks/react";

export default function Page() {
  return (
    <RoomProvider
      id="my-room"
      initialPresence={{
        cursor: null,
      }}
    >
      <ClientSideSuspense fallback="Loading...">
        {() => <Editor />}
      </ClientSideSuspense>
    </RoomProvider>
  );
}

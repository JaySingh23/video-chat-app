import { useSocket } from "@/context/socket"
import { useEffect } from "react";

export default function Home() {
  const socket = useSocket();

  useEffect(() => {
    socket?.on("connect", () => {
      console.log(`Connected to the server with id ${socket.id}`);
    })
  }, [socket]);

  return (
    <h1>Welcome</h1>
  )
}

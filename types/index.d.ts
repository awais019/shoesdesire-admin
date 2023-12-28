import { Socket } from "socket.io-client";

declare module "@heroicons/*";

declare module "#app" {
  interface NuxtApp {
    $socket: Socket;
  }
}

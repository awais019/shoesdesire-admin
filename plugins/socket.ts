import io from "socket.io-client";

export default defineNuxtPlugin((nuxtApp) => {
  const { socketURL } = useRuntimeConfig().public;
  const socket = io(socketURL, {
    autoConnect: false,
  });

  nuxtApp.provide("socket", socket);
});

import useUserStore from "~/stores/user";
import type { Conversation, Message } from "~/types/message";

export const useMessage = () => {
  const { baseURL } = useRuntimeConfig().public;
  const userStore = useUserStore();

  function getConversationsList() {
    return useFetch<{
      message: string;
      data: Conversation[];
    }>("/messages/conversations/list", {
      headers: {
        "x-auth-token": userStore.token as string,
      },
      baseURL,
    });
  }

  function getConversation(userId: string) {
    return useFetch<{
      message: string;
      data: Conversation;
    }>(`/messages/${userId}`, {
      headers: {
        "x-auth-token": userStore.token as string,
      },
      baseURL,
    });
  }

  function getMessages(conversationId: string) {
    return useFetch<{
      message: string;
      data: Message[];
    }>(`/messages/${conversationId}/messages`, {
      headers: {
        "x-auth-token": userStore.token as string,
      },
      baseURL,
    });
  }

  return { getConversationsList, getConversation, getMessages };
};

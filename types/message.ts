export type Message = {
  id: string;
  conversationId: string;
  message: string;
  sender: string;
  created_at: string;
  updated_at: string;
};

export type Conversation = {
  id: string;
  Participant: {
    id: string;
    first_name: string;
    last_name: string;
    image: string;
  };
  Message: Message | null;
  unreadCount: number;
};

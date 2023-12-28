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
    firstName: string;
    lastName: string;
  };
  Message: Message | null;
  unreadCount: number;
};

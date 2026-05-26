import { createChatHandler } from "@/lib/api/chat-handler";

export const runtime = "edge";

export const POST = createChatHandler("/api/agent");

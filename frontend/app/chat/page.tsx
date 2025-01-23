/** @format */

"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

type Message = {
 id: number;
 role: "user" | "assistant";
 content: string;
};

const initialMessages: Message[] = [
 { id: 1, role: "assistant", content: "Hello! How can I assist you today?" },
 { id: 2, role: "user", content: "Hi there! I have a question about your services." },
 {
  id: 3,
  role: "assistant",
  content: "Of course! Id be happy to help. What would you like to know about our services?",
 },
];

export default function Chat() {
 const [messages, setMessages] = useState<Message[]>(initialMessages);
 const [input, setInput] = useState("");
 const [isTyping, setIsTyping] = useState(false);

 const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  if (input.trim() === "") return;

  const userMessage: Message = {
   id: messages.length + 1,
   role: "user",
   content: input.trim(),
  };

  setMessages((prev) => [...prev, userMessage]);
  setInput("");
  setIsTyping(true);

  // Simulate AI response
  setTimeout(() => {
   const aiMessage: Message = {
    id: messages.length + 2,
    role: "assistant",
    content: `Thank you for your message: "${input.trim()}". How else can I help you?`,
   };
   setMessages((prev) => [...prev, aiMessage]);
   setIsTyping(false);
  }, 1000 + Math.random() * 2000); // Random delay between 1-3 seconds
 };

 return (
  <div>
   <Card>
    <CardHeader>
     <CardTitle>Chat with AI Assistant</CardTitle>
    </CardHeader>
    <CardContent>
     <ScrollArea className="h-[60vh] pr-4">
      {messages.map((m) => (
       <div
        key={m.id}
        className={`mb-4 flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
       >
        <div
         className={`flex items-start gap-2 ${m.role === "user" ? "flex-row-reverse" : "flex-row"}`}
        >
         <Avatar>
          <AvatarFallback>{m.role === "user" ? "U" : "AI"}</AvatarFallback>
          <AvatarImage
           src={
            m.role === "user"
             ? "/placeholder.svg?height=40&width=40"
             : "/placeholder.svg?height=40&width=40"
           }
          />
         </Avatar>
         <div
          className={`rounded-lg p-2 ${
           m.role === "user" ? "bg-primary text-primary-foreground" : "bg-muted"
          }`}
         >
          {m.content}
         </div>
        </div>
       </div>
      ))}
      {isTyping && (
       <div className="flex justify-start mb-4">
        <div className="flex items-start gap-2">
         <Avatar>
          <AvatarFallback>AI</AvatarFallback>
          <AvatarImage src="/placeholder.svg?height=40&width=40" />
         </Avatar>
         <div className="rounded-lg p-2 bg-muted">AI is typing...</div>
        </div>
       </div>
      )}
     </ScrollArea>
    </CardContent>
    <CardFooter>
     <form onSubmit={handleSubmit} className="flex w-full space-x-2">
      <Input
       value={input}
       onChange={(e) => setInput(e.target.value)}
       placeholder="Type your message..."
       className="flex-grow"
      />
      <Button type="submit" disabled={isTyping}>
       Send
      </Button>
     </form>
    </CardFooter>
   </Card>
  </div>
 );
}

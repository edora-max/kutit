import { Search, Send } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const conversations = [
  { id: 1, name: "Jane Cherop", lastMessage: "See you at the library!", time: "10m", unread: 2, online: true },
  { id: 2, name: "David Kipchoge", lastMessage: "Thanks for the notes 📚", time: "1h", unread: 0, online: true },
  { id: 3, name: "Mary Jepkorir", lastMessage: "Let's meet tomorrow?", time: "3h", unread: 1, online: false },
  { id: 4, name: "John Kibet", lastMessage: "Good luck with your exam!", time: "1d", unread: 0, online: false },
];

const messages = [
  { id: 1, text: "Hey! How are you?", sent: false, time: "10:30 AM" },
  { id: 2, text: "I'm good! Just studying for the exam", sent: true, time: "10:32 AM" },
  { id: 3, text: "Same here! Want to study together?", sent: false, time: "10:35 AM" },
  { id: 4, text: "Sure! See you at the library in 30 mins?", sent: true, time: "10:36 AM" },
  { id: 5, text: "Perfect! See you there 📚", sent: false, time: "10:37 AM" },
];

const Chats = () => {
  const [selectedChat, setSelectedChat] = useState(conversations[0]);

  return (
    <div className="w-full h-full flex">
      {/* Conversations List */}
      <div className="w-full md:w-80 border-r border-border sunken bg-card">
        <div className="p-4 border-b border-border/50">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search conversations..."
              className="pl-9 rounded-xl sunken border-border/50"
            />
          </div>
        </div>

        <div className="overflow-y-auto h-[calc(100%-5rem)] scrollable-content">
          {conversations.map((conv) => (
            <div
              key={conv.id}
              onClick={() => setSelectedChat(conv)}
              className={`p-4 border-b border-border/50 cursor-pointer transition-all ${
                selectedChat.id === conv.id ? 'bg-primary/5' : 'hover:bg-muted/30'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className="relative">
                  <Avatar className="h-12 w-12 neumorphic">
                    <AvatarImage src="" />
                    <AvatarFallback className="bg-gradient-to-br from-primary to-accent text-primary-foreground">
                      {conv.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  {conv.online && (
                    <div className="absolute bottom-0 right-0 w-3 h-3 bg-accent rounded-full border-2 border-card" />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="font-semibold text-sm truncate">{conv.name}</h4>
                    <span className="text-xs text-muted-foreground">{conv.time}</span>
                  </div>
                  <p className="text-xs text-muted-foreground truncate">{conv.lastMessage}</p>
                </div>
                {conv.unread > 0 && (
                  <div className="w-5 h-5 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center font-medium">
                    {conv.unread}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Chat Window */}
      <div className="hidden md:flex flex-col flex-1">
        {/* Chat Header */}
        <div className="h-16 border-b border-border/50 px-6 flex items-center gap-3 neumorphic bg-card/50">
          <Avatar className="h-10 w-10 neumorphic">
            <AvatarImage src="" />
            <AvatarFallback className="bg-gradient-to-br from-primary to-accent text-primary-foreground">
              {selectedChat.name.split(' ').map(n => n[0]).join('')}
            </AvatarFallback>
          </Avatar>
          <div>
            <h3 className="font-semibold text-sm">{selectedChat.name}</h3>
            <p className="text-xs text-muted-foreground">
              {selectedChat.online ? 'Online' : 'Offline'}
            </p>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4 scrollable-content">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex ${msg.sent ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`max-w-[70%] ${msg.sent ? 'order-2' : 'order-1'}`}>
                <div
                  className={`p-3 rounded-2xl sunken ${
                    msg.sent
                      ? 'bg-primary text-primary-foreground rounded-br-sm'
                      : 'bg-card border border-border/50 rounded-bl-sm'
                  }`}
                >
                  <p className="text-sm">{msg.text}</p>
                </div>
                <p className="text-xs text-muted-foreground mt-1 px-2">
                  {msg.time}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Message Input */}
        <div className="p-4 border-t border-border/50 neumorphic bg-card/50">
          <div className="flex items-center gap-2">
            <Input
              placeholder="Type a message..."
              className="flex-1 rounded-xl sunken border-border/50"
            />
            <Button size="icon" className="rounded-xl neumorphic-hover bg-primary">
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chats;

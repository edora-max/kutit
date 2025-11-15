import { Home, MessageSquare, Heart, MessageCircle, User } from "lucide-react";
import { NavLink } from "@/components/NavLink";
import { cn } from "@/lib/utils";

const navItems = [
  { title: "Feed", url: "/", icon: Home },
  { title: "Forums", url: "/forums", icon: MessageSquare },
  { title: "Welfare", url: "/welfare", icon: Heart },
  { title: "Chats", url: "/chats", icon: MessageCircle },
  { title: "Profile", url: "/profile", icon: User },
];

export const BottomNav = () => {
  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 h-16 border-t border-border bg-card/80 backdrop-blur-lg neumorphic z-50">
      <div className="flex items-center justify-around h-full px-2">
        {navItems.map((item) => (
          <NavLink
            key={item.url}
            to={item.url}
            end
          >
            {({ isActive }) => (
              <div
                className={cn(
                  "flex flex-col items-center justify-center gap-1 px-3 py-2 rounded-xl transition-all neumorphic-hover",
                  isActive && "bg-primary/10"
                )}
              >
                <item.icon 
                  className={cn(
                    "h-5 w-5 transition-colors",
                    isActive ? "text-primary" : "text-muted-foreground"
                  )} 
                />
                <span 
                  className={cn(
                    "text-xs font-medium transition-colors",
                    isActive ? "text-primary" : "text-muted-foreground"
                  )}
                >
                  {item.title}
                </span>
              </div>
            )}
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

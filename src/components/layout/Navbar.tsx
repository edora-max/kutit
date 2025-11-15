import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useSidebar } from "@/components/ui/sidebar";

export const Navbar = () => {
  const { toggleSidebar } = useSidebar();

  return (
    <nav className="h-16 border-b border-border bg-card/50 backdrop-blur-sm neumorphic flex items-center justify-between px-4 md:px-6 sticky top-0 z-50">
      <div className="flex items-center gap-3">
        <Button
          variant="ghost"
          size="icon"
          onClick={toggleSidebar}
          className="md:flex hidden neumorphic-hover rounded-xl"
        >
          <Menu className="h-5 w-5" />
        </Button>
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-xl neumorphic bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-lg">K</span>
          </div>
          <span className="font-semibold text-lg bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            KUTIT
          </span>
        </div>
      </div>
      
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="sm" className="rounded-xl neumorphic-hover hidden md:flex">
          Community
        </Button>
        <div className="w-10 h-10 rounded-xl neumorphic bg-accent/20 cursor-pointer transition-all hover:scale-105">
          <div className="w-full h-full rounded-xl bg-gradient-to-br from-accent to-primary" />
        </div>
      </div>
    </nav>
  );
};

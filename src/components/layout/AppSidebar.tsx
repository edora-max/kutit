import { Home, MessageSquare, Users, Heart, MessageCircle, User } from "lucide-react";
import { NavLink } from "@/components/NavLink";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";

const menuItems = [
  { title: "Feed", url: "/", icon: Home },
  { title: "Forums", url: "/forums", icon: MessageSquare },
  { title: "Welfare", url: "/welfare", icon: Heart },
  { title: "Chats", url: "/chats", icon: MessageCircle },
  { title: "Profile", url: "/profile", icon: User },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const isCollapsed = state === "collapsed";

  return (
    <Sidebar 
      collapsible="icon"
      className="border-r border-border neumorphic hidden md:flex"
    >
      <SidebarContent className="pt-4">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild className="neumorphic-hover">
                    <NavLink 
                      to={item.url}
                      end
                      className="flex items-center gap-3 px-3 py-2 rounded-xl transition-all"
                      activeClassName="bg-primary/10 text-primary font-medium"
                    >
                      <item.icon className="h-5 w-5" />
                      {!isCollapsed && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}

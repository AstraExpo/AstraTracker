import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  CheckSquare,
  Repeat,
  Target,
  CalendarClock,
  FolderKanban,
  Wallet,
  ListTodo,
  Calendar,
  Sun,
  Moon,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "./../ui/sidebar";
import { useTheme } from "@/hooks/use--theme";
import { Button } from "../ui/button";

const navItems = [
  { title: "Analytics", url: "/", icon: LayoutDashboard },
  { title: "Tasks", url: "/tasks", icon: CheckSquare },
  { title: "Events", url: "/events", icon: Calendar },
  { title: "Todos", url: "/todos", icon: ListTodo },
  { title: "Habits", url: "/habits", icon: Repeat },
  { title: "Goals", url: "/goals", icon: Target },
  { title: "Plans", url: "/plans", icon: CalendarClock },
  { title: "Projects", url: "/projects", icon: FolderKanban },
  { title: "Finances", url: "/finances", icon: Wallet },
];

export function AppSidebar() {
  const { theme, toggleTheme } = useTheme();
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>Astra Tracker</SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Menu</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navItems.map((item) => (
                <SidebarMenuItem key={item.url}>
                  <SidebarMenuButton
                    tooltip={item.title}
                    isActive={false}
                    render={
                      <NavLink to={item.url} end={item.url === "/"}>
                        <item.icon />
                        <span>{item.title}</span>
                      </NavLink>
                    }
                  />
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <Button variant="ghost" size="icon" onClick={toggleTheme}>
          {theme === "dark" ? (
            <Sun className="h-4 w-4" />
          ) : (
            <Moon className="h-4 w-4" />
          )}
        </Button>
      </SidebarFooter>
    </Sidebar>
  );
}

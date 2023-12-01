import {
  LogOut,
  Settings,
  User,
  ChevronDown,
  AlignJustify,
  X,
} from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useSidebar } from "@/context/SidebarContext";
import { Link } from "react-router-dom";

const Header = () => {
  const { isSidebarOpen, toggleSidebar } = useSidebar();

  return (
    <nav className="fixed top-0 z-50 w-full bg-[#5D71FF] border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
      <div className="px-3 py-5 lg:px-5 lg:pl-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-start rtl:justify-end">
            <Link to="/" className="flex ms-2 md:me-24">
              {/* <img
                src="https://flowbite.com/docs/images/logo.svg"
                className="h-8 me-3"
                alt="FlowBite Logo"
              /> */}
              <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap text-white">
                Flow-Bite
              </span>
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <div className="items-center ms-3 hidden sm:flex">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <div className="flex items-center gap-4 cursor-pointer">
                    <Avatar>
                      <AvatarImage
                        src="https://github.com/shadcn.png"
                        alt="user photo"
                      />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <ChevronDown className="h-6 w-6 text-white" />
                  </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-60 ">
                  <DropdownMenuLabel>
                    <p
                      className="text-sm text-gray-900 dark:text-white"
                      role="none"
                    >
                      Neil Sims
                    </p>
                    <p
                      className="text-sm font-medium text-gray-900 truncate dark:text-gray-300"
                      role="none"
                    >
                      neil.sims@flowbite.com
                    </p>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator className="bg-gray-200" />
                  <DropdownMenuGroup>
                    <DropdownMenuItem>
                      <User className="mr-4 h-4 w-4" />
                      <span>Profile</span>
                      <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Settings className="mr-4 h-4 w-4" />
                      <span>Settings</span>
                      <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                    </DropdownMenuItem>
                  </DropdownMenuGroup>

                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Log out</span>
                    <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <div className="md:hidden">
              <button
                data-drawer-target="logo-sidebar"
                data-drawer-toggle="logo-sidebar"
                aria-controls="logo-sidebar"
                type="button"
                className="inline-flex items-center p-2 text-sm text-gray-500 rounded-full   focus:outline-none bg-[#7E8DFF]"
                onClick={toggleSidebar}
              >
                {isSidebarOpen ? (
                  <AlignJustify className="w-5 h-5 text-white" />
                ) : (
                  <X className="w-5 h-5 text-white" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;

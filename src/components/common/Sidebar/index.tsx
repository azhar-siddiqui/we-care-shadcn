import * as React from "react";
import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { LayoutDashboard } from "lucide-react";
import { useSidebar } from "@/context/SidebarContext";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";

interface SidebarProps {
  children?: React.ReactNode;
}
const Sidebar: React.FC<SidebarProps> = ({ children }) => {
  const { isSidebarOpen } = useSidebar();
  return (
    <>
      <aside
        id="logo-sidebar"
        className={`fixed top-0 left-0 z-40 w-[300px] h-screen pt-20 transition-transform shadow-2xl ${
          isSidebarOpen ? "-translate-x-full" : ""
        }  bg-white border-r-2 border-gray-300 md:translate-x-0 dark:bg-gray-800 dark:border-gray-700`}
        aria-label="Sidebar"
      >
        <div className="h-full pb-4 overflow-y-auto bg-white dark:bg-gray-800 pt-4">
          <ul className="space-y-2 font-medium">
            <li className="p-2 bg-[#E4E6EA] hover:bg-[#d6d7db] mx-3 rounded-md flex items-center gap-2 group transition-all cursor-pointer md:hidden">
              <Avatar>
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  className="h-10 w-10 rounded-lg"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-[#242E6F] text-sm font-semibold">
                  Randy Smith
                </p>
                <p className="text-[#7F85AA] text-sm font-normal">
                  Lead Developer
                </p>
              </div>
            </li>
            <li>
              <div className="w-full">
                <Accordion type="single" collapsible>
                  <AccordionItem value="item-1" className="border-b-0">
                    <AccordionTrigger className="px-3 hover:no-underline">
                      <div className="flex items-center gap-4">
                        <LayoutDashboard className="h-5 w-5" />
                        <span>Patient Details</span>
                      </div>
                    </AccordionTrigger>
                    <ul className="dark:text-[#5D71FF] dark:hover:bg-gray-700">
                      <li>
                        <Link to="patient-entry">
                          <AccordionContent className="ms-16 py-2 hover:text-blue-400 text-base text-[#223354] transition-all">
                            Patent Entry
                          </AccordionContent>
                        </Link>
                      </li>
                      <li>
                        <Link to="patient-list">
                          <AccordionContent className="ms-16 py-2 hover:text-blue-400 text-base text-[#223354] transition-all">
                            Patent list
                          </AccordionContent>
                        </Link>
                      </li>
                    </ul>
                  </AccordionItem>
                </Accordion>
              </div>
            </li>
          </ul>
        </div>
      </aside>

      <div className="p-4 mt-6 md:ml-[300px]">
        <div className="p-4 rounded-lg dark:border-gray-700 mt-14">
          {children}
        </div>
      </div>
    </>
  );
};

export default Sidebar;

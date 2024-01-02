import { AiOutlineHome } from "react-icons/ai";
import { BsPeople } from "react-icons/bs";
import { TiContacts } from "react-icons/ti";
import { FiMail } from "react-icons/fi";

import { createContext, useState } from "react";
import { useUserRole } from "@/middlewares/AdminMiddleware";
import { useEffect } from "react";
// import { icon } from "@fortawesome/fontawesome-svg-core";

const initialValue = { isCollapsed: false };

const SidebarContext = createContext(initialValue);

const SidebarProvider = ({ children }) => {
  const [isCollapsed, setCollapse] = useState(window.innerWidth > 1024 ? false : true);
  const userRole = useUserRole();

  const sidebarItems = userRole==='eb'? [
    {
      name: "Profile",
      href: "/eb",
      icon: AiOutlineHome,
    },
    {
      name: "Approve Events",
      href: "/eb/approveEvents",
      icon: FiMail,
    },
    {
      name: "Upcomming events",
      href: "/eb/upcommingEvents",
      icon: TiContacts,
    },
  ]: [
    {
      name: "Profile",
      href: "/ob",
      icon: AiOutlineHome,
    },
    {
      name: "Add Events",
      href: "/ob/addEvent",
      icon: BsPeople,
    },
    {
      name: "Proposed Events",
      href: "/ob/proposedEvents",
      icon: FiMail,
    },
    {
      name: "Approved Events",
      href: "/ob/approvedEvents",
      icon: TiContacts,
    },
  ];

  const toggleSidebarcollapse = () => {
    setCollapse((prevState) => !prevState);
  };

  useEffect(() => {
    const handleResize = () => {
      setCollapse(window.innerWidth > 1024 ? false : true);
    };

    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", handleResize);
      }
    };
  }, []);

  return (
    <SidebarContext.Provider value={{ isCollapsed, toggleSidebarcollapse,sidebarItems }}>
      {children}
    </SidebarContext.Provider>
  );
};

export { SidebarContext, SidebarProvider };


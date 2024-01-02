import { BiLogOut } from "react-icons/bi";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

import Link from "next/link";
import Image from "next/image";
import { useContext } from "react";
import { SidebarContext } from "@/context/SidebarContext";
import { usePathname } from "next/navigation";
import { useClerk } from "@clerk/clerk-react";
import { useRouter } from "next/navigation";

const Sidebar = () => {

  const pathname = usePathname();
  const { signOut } = useClerk();
  const router = useRouter();

  const { isCollapsed, toggleSidebarcollapse, sidebarItems } = useContext(SidebarContext);

  return (
    <div className="sidebar__wrapper">
      <button className='hidden sm:flex btn text-white bg-sky-500' onClick={toggleSidebarcollapse}>
        {isCollapsed ? <MdKeyboardArrowRight /> : <MdKeyboardArrowLeft />}
      </button>

      <aside className="sidebar" data-collapse={isCollapsed}>
        <ul className="sidebar__list">

          {sidebarItems.map(({ name, href, icon: Icon }) => {
            return (
              <li className="sidebar__item bg-slate-100" key={name}>
                <Link
                  className={`sidebar__link ${pathname === href ? "bg-sky-500 text-white" : "hover:bg-slate-200"
                    }`}
                  href={href}
                >
                  <span className="sidebar__icon">
                    <Icon />
                  </span>
                  <span className="sidebar__name">{name}</span>
                </Link>
              </li>
            );
          })}
        </ul>

        <button className="flex gap-2 items-center mb-4 py-[0.8rem] px-[1rem] bg-slate-200 rounded-xl hover:text-white hover:bg-red-400" onClick={() => signOut(() => router.push("/"))}>
          <span className="sidebar__icon"> <BiLogOut /> </span>
          <span className={isCollapsed ? 'hidden' : 'block'}>Sign out</span>
        </button>

      </aside>
    </div>

  );
};

export default Sidebar;


"use client";
import Image from "next/image";
import logo from "../public/icons/LOGO.svg";
import Link from "next/link";
import { SidebarLinks } from "@/constants";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const pathname = usePathname();
  return (
    <aside className="w-[270px] hidden md:flex flex-col bg-dark-1">
      <div className="py-7 px-10">
        <Link href="/">
          <Image src={logo} alt="Podcast Logo" />
        </Link>
      </div>
      <div className="flex flex-col gap-3 mt-3">
        {SidebarLinks.map(({ label, url, imgSrc }, i) => {
          const isActive = pathname === url;
          return (
            <Link
              href={url}
              key={i}
              className={`flex items-center gap-4 py-3 px-10 text-16 ${
                isActive
                  ? "text-light-1 rounded-r-sm border-r-4 border-r-orange-1 bg-active-gradient"
                  : "text-light-3"
              }`}
            >
              <Image
                src={imgSrc}
                alt={label}
                className={isActive ? "opacity-100" : "opacity-40"}
              />
              {label}
            </Link>
          );
        })}
      </div>
    </aside>
  );
};

export default Sidebar;

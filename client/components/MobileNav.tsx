"use client";
import Image from "next/image";
import Link from "next/link";
import { SidebarLinks } from "@/constants";
import { usePathname } from "next/navigation";

const MobileNav = () => {
  const pathname = usePathname();
  return (
    <aside className="fixed w-full min-h-[79px] left-0 bottom-0 md:hidden flex justify-center bg-dark-1">
      {SidebarLinks.map(({ label, url, imgSrc }, i) => {
        const isActive = pathname === url;
        return (
          <Link
            href={url}
            key={i}
            className={`flex-1 flex flex-col items-center justify-center gap-2 p-3 ${
              isActive
                ? "text-light-1 font-bold rounded-b-sm border-b-4 border-b-orange-1 bg-active-gradient"
                : "text-light-3"
            }`}
          >
            <Image
              src={imgSrc}
              alt={label}
              className={`size-7 ${isActive ? "opacity-100" : "opacity-40"}`}
            />
            <span className="inline-flex text-[10px]">{label}</span>
          </Link>
        );
      })}
    </aside>
  );
};

export default MobileNav;

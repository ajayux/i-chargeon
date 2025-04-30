"use client";
import Link from "next/link";
import { Heading } from "../Heading";
import { Img } from "../Img";
import { usePathname } from "next/navigation";

function HeaderNavItem({ href, title }) {
  const pathname = usePathname();
  return (
    <Link href={href} className="group relative z-0">
      <Heading
        size="heading4xl"
        as="h6"
        className={`text-[20px] font-semibold uppercase tracking-[2px] hover:text-base1 transition-all duration-300 ${
          pathname === href ? "text-base1" : "text-white"
        }`}
      >
        {title}
      </Heading>
      <Img
        src="img_settings.svg"
        alt="Settings"
        width={18}
        height={18}
        className={`w-[18px] h-[18px] absolute top-full left-0 right-0 mx-auto transition-all duration-300 ${
          pathname === href ? "block" : "hidden"
        }`}
      />
    </Link>
  );
}

export default function Header({ ...props }) {
  return (
    <header
      {...props}
      className={`${props.className} w-full h-auto absolute z-10 top-0 left-0 right-0 block bg-linear-to-b from-black via-70% via-black/50 to-transparent`}
    >
      <div className="container">
        <div className="w-full lg:h-[100px] 2xl:h-[120px] flex flex-wrap items-center justify-between gap-[10px] relative z-0 before:content-[''] before:block before:absolute before:z-0 before:bottom-0 before:left-0 before:right-0 before:w-full before:h-[1px] before:bg-white/20">
          <Link href={"/"} className="w-auto">
            <Img
              src="img_header_logo.svg"
              alt="Headerlogo"
              width={228}
              height={66}
              className="w-[228px] h-auto object-contain block"
            />
          </Link>
          <ul className="flex flex-wrap gap-[72px] text-[20px] font-semibold uppercase tracking-[2.00px] text-green-400 lg:gap-5 md:gap-5">
            <li>
              <HeaderNavItem title={"Home"} href={"/"} />
            </li>
            <li>
              <HeaderNavItem title={"About"} href={"#"} />
            </li>
            <li>
              <HeaderNavItem title={"Contact"} href={"#"} />
            </li>
          </ul>
          <div className="flex gap-3 self-center">
            <Link href="#">
              <Img
                src="img_facebook.svg"
                width={38}
                height={38}
                alt="Facebook"
                className="h-[38px] w-[38px]"
              />
            </Link>
            <Link href="#">
              <Img
                src="img_lock.svg"
                width={38}
                height={38}
                alt="Lock"
                className="h-[38px] w-[38px]"
              />
            </Link>
            <Link href="#">
              <Img
                src="img_info.svg"
                width={38}
                height={38}
                alt="Info"
                className="h-[38px] w-[38px]"
              />
            </Link>
            <Link href="#">
              <Img
                src="img_inbox.svg"
                width={38}
                height={38}
                alt="Inbox"
                className="h-[38px] w-[38px]"
              />
            </Link>
            <Link href="#">
              <Img
                src="img_close.svg"
                width={38}
                height={38}
                alt="Close"
                className="h-[38px] w-[38px]"
              />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

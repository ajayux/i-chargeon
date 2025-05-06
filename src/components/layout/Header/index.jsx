"use client";
import Link from "next/link";
import { Heading } from "../Heading";
import { Img } from "../Img";
import { usePathname } from "next/navigation";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const socialmedia = [
  {
    href: "#",
    alt: "facebook",
    image: "img_facebook.svg",
  },
  {
    href: "#",
    alt: "youtube",
    image: "img_lock.svg",
  },
  {
    href: "#",
    alt: "info",
    image: "img_info.svg",
  },
  {
    href: "#",
    alt: "inbox",
    image: "img_inbox.svg",
  },
  {
    href: "#",
    alt: "close",
    image: "img_close.svg",
  },
];

function HeaderNavItem({ href, title }) {
  const pathname = usePathname();
  return (
    <Link href={href} className="group relative z-0">
      <Heading
        as="h6"
        className={`3xl:text-[20px] 2xl:text-[16px] xl:text-[13px] lg:text-[12px] sm:text-[12px] text-[20px] font-semibold tracking-[2px] uppercase hover:text-base1 transition-all duration-300 ${
          pathname === href ? "text-base1" : "text-black sm:text-white"
        }`}
      >
        {title}
      </Heading>
      <Img
        src="img_settings.svg"
        alt="Settings"
        width={18}
        height={18}
        className={`w-[12px] sm:w-[8px] xl:w-[12px] 3xl:w-[18px] aspect-square absolute top-[6px] sm:top-full -left-[15px] sm:left-0 sm:right-0 mx-auto transition-all duration-300 ${
          pathname === href ? "block" : "hidden"
        }`}
      />
    </Link>
  );
}

export default function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const isScrollingDown = currentScrollPos > prevScrollPos;

      // Show header at the top of the page or when scrolling up
      setIsVisible(currentScrollPos < 10 || !isScrollingDown);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  return (
    <AnimatePresence>
      <motion.header
        initial={{ y: 0 }}
        animate={{ y: isVisible ? 0 : -120 }}
        transition={{ duration: 0.6 }}
        className={`w-full h-(--header-y) fixed z-10 top-0 left-0 right-0 block bg-linear-to-b from-black via-70% via-black/50 to-transparent [--header-y:70px] lg:[--header-y:80px] xl:[--header-y:90px] 2xl:[--header-y:100px] 3xl:[--header-y:120px] ${
          prevScrollPos > 10 ? "bg-black/60 backdrop-blur-[50px]" : "bg-transparent"
        }`}
      >
        {/* <header className="w-full h-(--header-y) absolute z-10 top-0 left-0 right-0 block bg-linear-to-b from-black via-70% via-black/50 to-transparent [--header-y:70px] lg:[--header-y:80px] xl:[--header-y:90px] 2xl:[--header-y:100px] 3xl:[--header-y:120px]"> */}
        <div className="container">
          <div className="w-full h-(--header-y) flex flex-wrap items-center justify-between gap-[10px] relative z-0 before:content-[''] before:block before:absolute before:z-0 before:bottom-0 before:left-0 before:right-0 before:w-full before:h-[1px] before:bg-white/20">
            <Link href={"/"} className="w-auto">
              <Img
                src="img_header_logo.svg"
                alt="Headerlogo"
                width={228}
                height={66}
                className="w-[120px] xl:w-[155px] 3xl:w-[228px] h-auto object-contain block hover:scale-105 transition-transform duration-300"
              />
            </Link>
            <ul className="flex flex-wrap gap-[10px] lg:gap-[20px] xl:gap-[50px] 3xl:gap-[70px] max-sm:hidden">
              <li>
                <HeaderNavItem title={"Home"} href={"/"} />
              </li>
              <li>
                <HeaderNavItem title={"About"} href={"/about"} />
              </li>
              <li>
                <HeaderNavItem title={"Contact"} href={"/contact"} />
              </li>
            </ul>
            <div className="flex self-center gap-[4px] lg:gap-[6px] xl:gap-[8px] 3xl:gap-[13px] max-sm:hidden">
              {socialmedia.map((item, index) => (
                <a
                  key={`socialmedia-${index}`}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="social"
                  className="transition-transform duration-300 hover:scale-95"
                >
                  <Img
                    src={item.image}
                    alt={item.alt}
                    width={38}
                    height={38}
                    className="w-[22px] xl:w-[26px] 3xl:w-[38px] aspect-square rounded-full transition-all duration-300 hover:[filter:brightness(0)_saturate(100%)_invert(69%)_sepia(37%)_saturate(643%)_hue-rotate(62deg)_brightness(91%)_contrast(83%)]"
                  />
                </a>
              ))}
            </div>

            <div className="sm:hidden">
              <Sheet className="sm:hidden">
                <SheetTrigger className="flex">
                  <Menu className="size-8 text-white m-auto" />
                </SheetTrigger>
                <SheetContent className="bg-white backdrop-blur-[30px]">
                  <SheetHeader>
                    <SheetTitle className="sr-only">site navigation</SheetTitle>
                    <SheetDescription className="sr-only">
                      chose one to navigate
                    </SheetDescription>
                    <ul className="flex flex-col [&>li]:max-sm:m-[15px] my-[15px]">
                      <li>
                        <HeaderNavItem title={"Home"} href={"/"} />
                      </li>
                      <li>
                        <HeaderNavItem title={"About"} href={"/about"} />
                      </li>
                      <li>
                        <HeaderNavItem title={"Contact"} href={"/contact"} />
                      </li>
                    </ul>
                  </SheetHeader>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
        {/* </header> */}
      </motion.header>
    </AnimatePresence>
  );
}

"use client"

import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, Menu } from "lucide-react";

const navLinks = [
  { title: "Home", href: "#" },
  { title: "About Us", href: "#AboutUs" },
  { title: "Coordinators", href: "#Bod" },
  { title: "Events", href: "#Events" },
  { title: "Contact", href: "#Socials" },
];

type Props = {
  title: string;
  href: string;
}

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const toggleMenu = () => {
    setOpen((prevOpen) => !prevOpen);
  };
  const menuVars = {
    initial: {
      scaleY: 0,
    },
    animate: {
      scaleY: 1,
      transition: {
        duration: 0.5,
        ease: [0.12, 0, 0.39, 0],
      },
    },
    exit: {
      scaleY: 0,
      transition: {
        delay: 0.5,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };
  const containerVars = {
    initial: {
      transition: {
        staggerChildren: 0.09,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.09,
        staggerDirection: 1,
      },
    },
  };

  return (
    <header className="z-50">
      <nav className="flex justify-between items-center py-8 lg:py-4 px-2">
        <div className="lg:flex hidden gap-12 text-md text-xl font-sans font-bold text-zinc-400">
          <Link href="#">
            Home
          </Link>
          <Link href="#AboutUs">
            About Us
          </Link>
          <Link href="#Coordinators">Coordinators</Link>
          <Link href="#Events">Events</Link>
          <Link href="#Contacts">Contact</Link>
        </div>
        <div
          className="cursor-pointer justify-end lg:hidden text-md text-black dark:text-white"
          onClick={toggleMenu}
        >
          <Menu size={30} />
        </div>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.div
            variants={menuVars}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed left-0 top-0 w-full h-screen origin-top bg-blue-400 text-black p-10"
          >
            <div className="flex h-full flex-col">
              <div className="flex justify-end">
                <p
                  className="cursor-pointer text-md text-black"
                  onClick={toggleMenu}
                >
                  <X size={30} />
                </p>
              </div>
              <motion.div
                variants={containerVars}
                initial="initial"
                animate="open"
                exit="initial"
                className="flex flex-col h-full justify-center font-lora items-center gap-4 "
              >
                {navLinks.map((link, index) => {
                  return (
                    <div className="overflow-hidden">
                      <MobileNavLink
                        key={index}
                        title={link.title}
                        href={link.href}
                      />
                    </div>
                  );
                })}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
const mobileLinkVars = {
  initial: {
    y: "30vh",
    transition: {
      duration: 0.5,
      ease: [0.37, 0, 0.63, 1],
    },
  },
  open: {
    y: 0,
    transition: {
      ease: [0, 0.55, 0.45, 1],
      duration: 0.7,
    },
  },
};
const MobileNavLink = ({ title, href } : Props) => {
  return (
    <motion.div
      variants={mobileLinkVars}
      className="text-5xl uppercase text-black"
    >
      <Link href={href}>{title}</Link>
    </motion.div>
  );
};
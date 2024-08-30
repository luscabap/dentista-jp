"use client";

import { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { MenuItens } from "../MenuItens";
import { AnimatePresence } from "framer-motion";
import { Logo } from "../Logo";

export const Header = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const toggleMenuIsOpen = () => {
    setMenuIsOpen(previewValue => !previewValue);
  }

  return (
    <header className="bg-slate-600 flex justify-between items-center rounded-b-lg p-4 relative">
      <Logo />
      <AnimatePresence>
        {
          menuIsOpen && <MenuItens />
        }
      </AnimatePresence>

      <CiMenuBurger size={25} onClick={toggleMenuIsOpen} className="text-white"/>
    </header>
  )
}
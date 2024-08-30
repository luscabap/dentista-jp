import { menuItens } from "@/data/menuItens";
import Link from "next/link";
import { motion } from "framer-motion";

export const MenuItens = () => {
  return (
    <motion.nav
      className="absolute flex flex-col items-center justify-center right-0 top-16 w-1/3 origin-top"
      initial={{ scaleY: 0 }}
      animate={{ scaleY: 1 }}
      exit={{ scaleY: 0 }}
      transition={{ duration: 0.3 }}
    >
      <ul className="flex flex-col items-center justify-center bg-slate-600 w-full rounded-lg gap-6">
        {menuItens.map((item) => (
          <Link key={item.id} href={`/${item.slug}`}>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1}}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, delay: 0.3 }}
            >
              {item.text}
            </motion.span>
          </Link>
        ))}
      </ul>
    </motion.nav>
  );
};

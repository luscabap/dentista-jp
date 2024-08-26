import { menuItens } from "@/data/menuItens";
import Link from "next/link";

export const MenuItens = () => {

  return (
    <nav className="absolute flex flex-col items-center justify-center right-0 top-16 w-1/3">
      <ul className="flex flex-col items-center justify-center bg-slate-600 w-full rounded-lg gap-6">
        {
          menuItens.map(item => <Link key={item.id} href={`/${item.slug}`}>{item.text}</Link>)
        }
      </ul> 
    </nav>
  );
};

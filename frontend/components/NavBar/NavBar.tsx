"use client";
import Logo from "@/utils/Logo";
import {
  House,
  LayoutList,
  ShoppingCart,
  Store,
  UserRound,
  Warehouse,
} from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import Link from "next/link";

const navbarItems = [
  { name: "Home", icon: <House size={28} />, link: "/" },
  { name: "Category", icon: <LayoutList size={28} /> , link: "/category"},
  { name: "Shop", icon: <Store size={28} /> , link: "/shop"},
  { name: "Store", icon: <Warehouse size={28} /> , link: "/store"},
  { name: "Order", icon: <ShoppingCart size={28} /> , link: "/order"},
];

const NavBar = () => {
  return (
    <>
      <div className="w-full h-auto p-2 pb-1 backdrop-blur-md bg-white/60 shadow-3xl fixed z-[90]">
        <div className="w-full h-auto pb-2 sm:border-b-1 sm:border-b">
          <div className="container m-auto flex justify-between items-center ">
            <div className="w-[280px] h-auto pr-4">
              <Logo />
            </div>
            <div className=" w-full items-center hidden sm:flex">
              <Input
                type="search"
                placeholder="Search In 'MADE IN BANGLADESH'"
                className="rounded-r-none outline-none ring-0 md:h-11 text-sm"
              />
              <Button
                className="rounded-l-none bg-defult-button hover:bg-defult-button/90 md:h-11 md:px-5"
                type="submit"
              >
                Search
              </Button>
            </div>
            <div className="w-[250px] h-auto flex justify-end items-center gap-2 pl-4">
              <ShoppingCart size={28} />
              <Button className="sm:h-auto h-11 md:h-11 bg-gray-50 hover:bg-gray-100 text-gray-800 border shadow-none">
                <UserRound size={28} /> Login
              </Button>
            </div>
          </div>
        </div>
        <div className=" w-full items-center flex sm:hidden border-b-1 border-b pb-2">
          <Input
            type="search"
            placeholder="Search In 'MADE IN BANGLADESH'"
            className="rounded-r-none outline-none ring-0 h-11"
          />
          <Button
            className="rounded-l-none bg-defult-button hover:bg-defult-button/90 h-11 px-5"
            type="submit"
          >
            Search
          </Button>
        </div>

        <div className="container m-auto w-full h-auto flex justify-between items-center p-1  ">
          <nav className="overflow-auto  hiddenScrollBar border-b-1 border-b-gray-800">
            <ul className="flex gap-1 sm:gap-4">
              {navbarItems.map((item, index) => (
                <Link href={item.link} key={index} className="w-full" passHref>
                <li
                
                  className="flex items-center gap-2 p-2 pb-1 cursor-pointer hover:border-b-2 hover:border-gray-600/90 transition-all duration-300 border-b-2 border-transparent  sm:px-3 "
                >
                  {item.icon}

                  {item.name}
                </li></Link>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default NavBar;

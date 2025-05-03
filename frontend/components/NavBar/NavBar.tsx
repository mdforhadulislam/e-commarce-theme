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
import Image from "next/image";
import { useState } from "react";

const navbarItems = [
  { name: "Home", icon: <House size={28} />, link: "/" },
  { name: "Category", icon: <LayoutList size={28} />, link: "/category" },
  { name: "Shop", icon: <Store size={28} />, link: "/shop" },
  { name: "Store", icon: <Warehouse size={28} />, link: "/store" },
  { name: "Order", icon: <ShoppingCart size={28} />, link: "/order" },
];

const trendingProducts = [
  {
    name: "Stainless Steel Electric Kettle",
    image: "/kettle.png",
    count: 470,
  },
  {
    name: "Xiaomi Enchen Boost Trimmer",
    image: "/trimmer.png",
    count: 1040,
  },
];

const trendingSearches = [
  "magic condom",
  "fan",
  "g shock",
  "portable",
  "free shipping",
];

const NavBar = () => {
    const [showSarchResult, setShowSarchResult] = useState(false);


  return (
    <div className="w-full h-auto p-2 pb-1 backdrop-blur-md bg-white/60 shadow-3xl fixed z-[90]">
      <div className="w-full h-auto pb-2 sm:border-b-1 sm:border-b">
        <div className="container m-auto flex justify-between items-center ">
          <div className="w-[280px] h-auto pr-4">
            <Logo />
          </div>

          {/* Desktop Search Bar */}
          <div className="w-full items-center hidden sm:flex relative">
            <Input
              type="search"
              placeholder="Search In 'MADE IN BANGLADESH'"
              className="rounded-r-none outline-none ring-0 md:h-11 text-sm" onChange={()=>{setShowSarchResult(true)}}
            />
            <Button
              className="rounded-l-none bg-defult-button hover:bg-defult-button/90 md:h-11 md:px-5"
              type="submit"
            >
              Search
            </Button>

            {/* Trending Dropdown */}
            {showSarchResult && <div className="absolute left-0 w-[100%] top-12 bg-white border shadow-xl p-4 z-50">
              <h4 className="font-semibold mb-2">Trending Products</h4>
              <div className="flex gap-4 mb-4">
                {trendingProducts.map((product, i) => (
                  <div
                    key={i}
                    className="border p-2 rounded shadow hover:shadow-md transition"
                  >
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={50}
                      height={50}
                      className="object-contain"
                    />
                    <p className="text-sm truncate">{product.name}</p>
                    <span className="text-xs text-gray-500">
                      {product.count}
                    </span>
                  </div>
                ))}
              </div>
              <h4 className="font-semibold mb-2">Trending Search</h4>
              <ul className="space-y-1">
                {trendingSearches.map((term, i) => (
                  <li
                    key={i}
                    className="text-sm hover:underline cursor-pointer"
                  >
                    🔍 {term}
                  </li>
                ))}
              </ul>
            </div>}
            
          </div>

          {/* Right side buttons */}
          <div className="w-[250px] h-auto flex justify-end items-center gap-2 pl-4">
            <ShoppingCart size={28} />
            <Button className="sm:h-auto h-11 md:h-11 bg-gray-50 hover:bg-gray-100 text-gray-800 border shadow-none">
              <UserRound size={28} /> Login
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Search */}
      <div className="w-full items-center flex sm:hidden border-b-1 border-b pb-2 relative">
        <Input
          type="search"
          placeholder="Search In 'MADE IN BANGLADESH'"
          className="rounded-r-none outline-none ring-0 h-11" onChange={()=>{setShowSarchResult(true)}}
        />
        <Button
          className="rounded-l-none bg-defult-button hover:bg-defult-button/90 h-11 px-5"
          type="submit"
        >
          Search
        </Button>

        {/* Mobile Dropdown */}
        {showSarchResult && <div className="absolute left-0 w-[100%] top-12 bg-white border shadow-xl p-4 z-50">
          <h4 className="font-semibold mb-2">Trending Products</h4>
          <div className="flex gap-4 mb-4">
            {trendingProducts.map((product, i) => (
              <div
                key={i}
                className="border p-2 rounded shadow hover:shadow-md transition"
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  width={50}
                  height={50}
                  className="object-contain"
                />
                <p className="text-sm truncate">{product.name}</p>
                <span className="text-xs text-gray-500">{product.count}</span>
              </div>
            ))}
          </div>
          <h4 className="font-semibold mb-2">Trending Search</h4>
          <ul className="space-y-1">
            {trendingSearches.map((term, i) => (
              <li key={i} className="text-sm hover:underline cursor-pointer">
                🔍 {term}
              </li>
            ))}
          </ul>
        </div>}
      </div>

      {/* Navigation Links */}
      <div className="container m-auto w-full h-auto flex justify-between items-center p-1">
        <nav className="overflow-auto hiddenScrollBar border-b-1 border-b-gray-800">
          <ul className="flex gap-1 sm:gap-4">
            {navbarItems.map((item, index) => (
              <Link href={item.link} key={index} passHref>
                <li className="flex items-center gap-2 p-2 pb-1 cursor-pointer hover:border-b-2 hover:border-gray-600/90 transition-all duration-300 border-b-2 border-transparent sm:px-3">
                  {item.icon}
                  {item.name}
                </li>
              </Link>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
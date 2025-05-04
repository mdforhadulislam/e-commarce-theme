"use client";
import Logo from "@/utils/Logo";
import { ThemeToggle } from "@/utils/ThemeToggle";
import {
  House,
  LayoutList,
  ShieldHalf,
  ShoppingCart,
  SquareUserRound,
  Store,
  UserRound,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

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

const navBar = [
  {
    name: "Home",
    icon: <House size={28} />,
    link: "/",
    subNavItem: [
      {
        name: "Home",
        icon: <House size={28} />,
        link: "/",
        description:
          "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
      {
        name: "About",
        icon: <ShieldHalf size={28} />,
        link: "/about",
        description:
          "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
      {
        name: "Contact",
        icon: <SquareUserRound size={28} />,
        link: "/contact",
        description:
          "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
    ],
  },
  {
    name: "Category",
    icon: <LayoutList size={28} />,
    link: "/category",
    subNavItem: [
      {
        name: "Category",
        icon: <LayoutList size={28} />,
        link: "/category",
        description:
          "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
      {
        name: "About",
        icon: <ShieldHalf size={28} />,
        link: "/about",
        description:
          "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
      {
        name: "Contact",
        icon: <SquareUserRound size={28} />,
        link: "/contact",
        description:
          "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
      {
        name: "Contact",
        icon: <SquareUserRound size={28} />,
        link: "/contact",
        description:
          "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
      {
        name: "Contact",
        icon: <SquareUserRound size={28} />,
        link: "/contact",
        description:
          "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
      {
        name: "Contact",
        icon: <SquareUserRound size={28} />,
        link: "/contact",
        description:
          "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
      {
        name: "Contact",
        icon: <SquareUserRound size={28} />,
        link: "/contact",
        description:
          "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
      {
        name: "Contact",
        icon: <SquareUserRound size={28} />,
        link: "/contact",
        description:
          "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
      {
        name: "Contact",
        icon: <SquareUserRound size={28} />,
        link: "/contact",
        description:
          "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
      {
        name: "Contact",
        icon: <SquareUserRound size={28} />,
        link: "/contact",
        description:
          "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
    ],
  },
  {
    name: "Shop",
    icon: <Store size={28} />,
    link: "/shop",
    subNavItem: [
      {
        name: "Shop",
        icon: <Store size={28} />,
        link: "/shop",
        description:
          "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
      {
        name: "About",
        icon: <ShieldHalf size={28} />,
        link: "/about",
        description:
          "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
      {
        name: "Contact",
        icon: <SquareUserRound size={28} />,
        link: "/contact",
        description:
          "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
      {
        name: "Contact",
        icon: <SquareUserRound size={28} />,
        link: "/contact",
        description:
          "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
      {
        name: "Contact",
        icon: <SquareUserRound size={28} />,
        link: "/contact",
        description:
          "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
      {
        name: "Contact",
        icon: <SquareUserRound size={28} />,
        link: "/contact",
        description:
          "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
      {
        name: "Contact",
        icon: <SquareUserRound size={28} />,
        link: "/contact",
        description:
          "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
    ],
  },
  { name: "Order", icon: <ShoppingCart size={28} />, link: "/order" },
];

const NavBar = () => {
  const [showSarchResult, setShowSarchResult] = useState(false);

  return (
    <div className="w-full h-auto p-2 pb-1 backdrop-blur-md bg-white/60 dark:bg-black/10 shadow-3xl dark:shadow-3xl fixed z-[90]">
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
              className="rounded-r-none outline-none ring-0 md:h-11 text-sm dark:bg-white dark:border dark:border-white dark:text-black"
              onChange={() => {
                setShowSarchResult(true);
              }}
            />
            <Button
              className="rounded-l-none dark:bg-defult-button dark:text-white dark:hover:bg-defult-button/90 bg-defult-button hover:bg-defult-button/90 md:h-11 md:px-5"
              type="submit"
            >
              Search
            </Button>

            {/* Trending Dropdown */}
            {showSarchResult && (
              <div className="absolute left-0 w-[100%] top-12 bg-white border shadow-xl p-4 z-50">
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
              </div>
            )}
          </div>

          {/* Right side buttons */}
          <div className="w-[250px] h-auto flex justify-end items-center gap-2 pl-4">
            <ShoppingCart size={28} />
            <Button className="sm:h-auto h-11 md:h-11 bg-gray-50 hover:bg-gray-100 text-gray-800 border shadow-none">
              <UserRound size={28} /> Login
            </Button>

            <ThemeToggle />
          </div>
        </div>
      </div>

      {/* Mobile Search */}
      <div className="w-full items-center flex sm:hidden border-b-1 border-b pb-2 relative">
        <Input
          type="search"
          placeholder="Search In 'MADE IN BANGLADESH'"
          className="rounded-r-none outline-none ring-0 h-11 dark:bg-white dark:border dark:border-white dark:text-black"
          onChange={() => {
            setShowSarchResult(true);
          }}
        />
        <Button
          className="rounded-l-none dark:bg-defult-button dark:text-white dark:hover:bg-defult-button/90 bg-defult-button hover:bg-defult-button/90 h-11 px-5"
          type="submit"
        >
          Search
        </Button>

        {/* Mobile Dropdown */}
        {showSarchResult && (
          <div className="absolute left-0 w-[100%] top-12 bg-white border shadow-xl p-4 z-50">
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
          </div>
        )}
      </div>

      {/* Navigation Links */}
      <div className="w-full flex justify-left h-auto border-b border-b-gray-100 border-b-1">
        <NavigationMenu className="conrainer m-auto h-auto flex justify-start items-center p-1 ">
          <NavigationMenuList className="w-full overflow-auto hiddenScrollBar border-b-1 border-b-gray-100 flex gap-2 justify-start">
            {navBar.map((item, index) => {
              if (item.name === "Order")
                return (
                  <NavigationMenuItem key={index}>
                    <Link href={item.link} legacyBehavior passHref>
                      <NavigationMenuLink
                        className={
                          "dark:border-b-1 dark:border-b-transparent dark:hover:border-b-white group h-9 w-max items-center justify-center px-4 py-2 text-sm font-medium transition-colors border-b-2 border-transparent hover:border-gray-500 hover:text-neutral-900  focus:text-neutral-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[state=open]:text-neutral-900 data-[state=open]:bg-neutral-100/50 data-[state=open]:hover:bg-neutral-100 data-[state=open]:focus:bg-neutral-100  dark:hover:bg-[#000000]/50 dark:hover:text-neutral-50 dark:focus:bg-neutral-800 dark:focus:text-neutral-50 dark:data-[state=open]:text-neutral-50 dark:data-[state=open]:bg-neutral-800/50 dark:data-[state=open]:hover:bg-neutral-800 dark:data-[state=open]:focus:bg-neutral-800 flex gap-2"
                        }
                      >
                        {item.icon} {item.name}
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                );

              return (
                <NavigationMenuItem key={index}>
                  <NavigationMenuTrigger className="flex gap-2  dark:border-b-1 dark:border-b-[#121212] dark:hover:border-b-white">
                    {item.icon} {item.name}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-6 w-[310px] h-[450px] sm:h-[600px] md:h-[750px] lg:h-auto  overflow-auto scrollbar sm:w-[400px] md:w-[500px] lg:grid-cols-[.75fr_1fr]">
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <a
                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                            href="/"
                          >
                            <Logo />
                            <div className="mb-2 mt-4 text-lg font-medium uppercase">
                              {item.name}
                            </div>
                            <p className="text-sm leading-tight text-muted-foreground">
                              We create and supply craft items, Nakshi Kantha,
                              decorative items, handmade jewelry, and cottage
                              products.
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      {item.subNavItem?.map((subItem, subIndex) => (
                        <div key={subIndex} className="flex gap-1 items-center">
                          <div>{subItem.icon} </div>
                          <ListItem href={subItem.link} title={subItem.name}>
                            {subItem.description}
                          </ListItem>
                        </div>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              );
            })}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  );
};

export default NavBar;

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

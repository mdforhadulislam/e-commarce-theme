import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/NavBar/NavBar";
import FooterBar from "@/components/FooterBar/FooterBar";
import { ThemProviderContext } from "@/context/ThemContext";

export const metadata: Metadata = {
  title: "e-commarce theam",
  description: ``,
  keywords: " ",
  icons: ["/icon.png"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="dark:bg-[#121212] bg-[#f5f5f5] text-[#121212] dark:text-[#f5f5f5]">
        <ThemProviderContext>
        <main>
          <NavBar />
          <div className="w-full h-[170px] sm:h-[106px] md:h-[114px] lg:h-[118px] transtition-all duration-300 ease-in-out">

          </div>
          {children}
          <FooterBar />
        </main>
        </ThemProviderContext>
      </body>
    </html>
  );
}

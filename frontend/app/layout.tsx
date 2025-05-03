import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/NavBar/NavBar";
import FooterBar from "@/components/FooterBar/FooterBar";

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
    <html lang="en">
      <body>
        <main>
          <NavBar />
          {children}
          <FooterBar />
        </main>
      </body>
    </html>
  );
}

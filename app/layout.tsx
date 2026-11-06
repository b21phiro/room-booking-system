import type { Metadata } from "next";
import { Roboto_Flex } from "next/font/google";
import "./globals.css";

const roboto = Roboto_Flex({
  subsets: ["latin"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "Room booking",
  description: "Book a room for your meeting or whatever.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="sv"
      className={`${roboto.variable} h-full antialiased`}
    >
      <body>
        {children}
      </body>
    </html>
  );
}

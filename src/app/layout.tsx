import type { Metadata } from "next";
import StyledComponentsRegistry from "@/lib/registry";
import { Inter } from "next/font/google";
import "./global.css"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "RATER",
  description: "Conheça o RATER",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}

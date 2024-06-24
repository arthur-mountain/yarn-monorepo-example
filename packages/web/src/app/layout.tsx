import type { PropsWithChildren } from "react";
import { inter } from "@/styles/fonts";
import "@/styles/globals.css";

export { globalsMetadata as metadata } from "@/metadata";

const RootLayout = ({ children }: Readonly<PropsWithChildren>) => {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
};

export default RootLayout;

import type { Metadata } from "next";
import "./globals.scss";

export const metadata: Metadata = {
  title: "Folderion",
  description: "Pseudo folder for Orion browser",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://unpkg.com/mvp.css" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}

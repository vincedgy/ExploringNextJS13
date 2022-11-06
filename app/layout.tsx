import Link from "next/link";
import React from "react";
import "../styles/output.css"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="bg-gray-900 text-gray-100 antialiased">
      <head>
        <title>My NextJS v13</title>
      </head>
      <body>
        <header>
          <nav>
            <Link href="/"> Home </Link>
            <Link href="/notes"> Notes </Link>
          </nav>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}

import React from "react";
import "../styles/output.css";
import NavLink from "./nav-link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head>
        <title>My NextJS v13</title>
      </head>
      <body>
        <header className="border-b p-4">
          <nav className="space-x-4">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/notes">Notes</NavLink>
          </nav>
        </header>
        <main className="p-4">
            {children}
        </main>
      </body>
    </html>
  );
}

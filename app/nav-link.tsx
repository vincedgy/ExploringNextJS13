"use client";

import Link from "next/link";
import React from "react";

import { useSelectedLayoutSegment } from "next/navigation";

export default function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  let segment = useSelectedLayoutSegment() || "";
  let active = href === `/${segment}`;
  return (
    <Link className={active ? "underline" : ""} href={href}>
      {children}
    </Link>
  );
}

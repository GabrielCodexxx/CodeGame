"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="border-b bg-background">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="text-xl font-bold hover:text-primary transition-colors"
        >
          Mini Coding Game
        </Link>

        <div className="flex items-center gap-6">
          <Link
            href="/"
            className={`text-sm hover:text-primary transition-colors ${
              pathname === "/" ? "text-primary" : "text-muted-foreground"
            }`}
          >
            Problems
          </Link>
          <Link
            href="/progress"
            className={`text-sm hover:text-primary transition-colors ${
              pathname === "/progress" ? "text-primary" : "text-muted-foreground"
            }`}
          >
            Progress
          </Link>
        </div>
      </div>
    </nav>
  );
} 
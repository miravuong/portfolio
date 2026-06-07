import type { Metadata } from "next";
import Link from "next/link";
import ThemeToggle from "./theme-toggle";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mirabel Vuong",
  description: "Personal website of Mirabel Vuong",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="min-h-full flex flex-col">
        <nav className="border-b border-foreground/10 px-6 py-4">
          <div className="max-w-2xl mx-auto flex items-center justify-between">
            <div className="flex gap-6">
              <Link href="/" className="text-foreground hover:opacity-60">
                About
              </Link>
              <Link
                href="/projects"
                className="text-foreground hover:opacity-60"
              >
                Projects
              </Link>
            </div>
            <ThemeToggle />
          </div>
        </nav>
        <main className="flex-1 px-6 py-10">
          <div className="max-w-2xl mx-auto">{children}</div>
        </main>
      </body>
    </html>
  );
}

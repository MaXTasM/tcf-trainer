import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TCF Trainer",
  description: "TCF preparation with interactive flashcards and drills",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={`${inter.className} min-h-screen bg-slate-100`}>
        {/* Header nav */}
        <header className="border-b bg-white">
          <nav className="mx-auto flex max-w-4xl items-center justify-between px-4 py-3">
            <span className="text-lg font-semibold text-blue-600">
              TCF Trainer
            </span>
            <div className="flex gap-4 text-sm text-slate-700">
              <Link href="/" className="hover:text-blue-600">
                mock exams
              </Link>
              <Link href="/questions" className="hover:text-blue-600">
                questions
              </Link>
              <Link href="/learning" className="hover:text-blue-600">
                learning
              </Link>
              <Link href="/profile" className="hover:text-blue-600">
                sign in
              </Link>
            </div>
          </nav>
        </header>

        {/* Page contents */}
        <main className="mx-auto max-w-4xl px-4 py-6">{children}</main>
      </body>
    </html>
  );
}
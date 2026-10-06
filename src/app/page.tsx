import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Fynza - Free E-commerce Seller Tools",
  description: "Free calculators for TikTok Shop, Etsy, and more",
};

export default function Home() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center bg-zinc-50 px-6 py-24 dark:bg-zinc-950">
      <div className="w-full max-w-2xl">
        <h1 className="text-3xl font-semibold text-zinc-900 dark:text-zinc-50">
          Fynza - Free E-commerce Seller Tools
        </h1>
        <p className="mt-2 text-zinc-600 dark:text-zinc-400">
          Free calculators for TikTok Shop, Etsy, and more
        </p>
        <ul className="mt-8 divide-y divide-zinc-200 dark:divide-zinc-800">
          <li className="py-4">
            <Link href="/tiktok" className="font-medium text-zinc-900 underline underline-offset-4 dark:text-zinc-50">
              TikTok Shop Profit Calculator
            </Link>
          </li>
          <li className="py-4">
            <span className="font-medium text-zinc-400 dark:text-zinc-600">
              Etsy Fee Calculator - coming soon
            </span>
          </li>
        </ul>
        <footer className="mt-16 text-sm text-zinc-500 dark:text-zinc-400">
          Contact:{" "}
          <a href="mailto:contact@fynza.store" className="underline underline-offset-2">
            contact@fynza.store
          </a>
        </footer>
      </div>
    </main>
  );
}
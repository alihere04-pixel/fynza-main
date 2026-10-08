import type { Metadata } from "next";
import Link from "next/link";

const DESCRIPTION =
  "The page you're looking for doesn't exist or has been moved. Find free calculators for TikTok Shop and Etsy at Fynza.";

export const metadata: Metadata = {
  title: "404 — Page Not Found",
  description: DESCRIPTION,
  robots: { index: false, follow: false },
  alternates: { canonical: "https://fynza.store" },
  openGraph: {
    title: "404 — Page Not Found",
    description: DESCRIPTION,
    url: "https://fynza.store",
    siteName: "Fynza",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "404 — Page Not Found",
    description: DESCRIPTION,
  },
};

export default function NotFound() {
  return (
    <main className="flex min-h-[60vh] flex-col items-center justify-center px-4 py-20 text-center">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "404 — Page Not Found",
            url: "https://fynza.store",
            description: "Page not found",
          }),
        }}
      />
      <h1 className="text-4xl font-bold text-gray-900">404 — Page not found</h1>
      <p className="mt-4 max-w-md text-gray-600">
        {"The page you're looking for doesn't exist or has been moved."}
      </p>
      <nav className="mt-8 flex flex-wrap items-center justify-center gap-4">
        <Link
          href="/"
          className="rounded-lg bg-orange-600 px-5 py-2.5 font-medium text-white hover:bg-orange-700"
        >
          Home
        </Link>
        <Link
          href="/tiktok"
          className="rounded-lg border border-gray-300 px-5 py-2.5 font-medium text-gray-900 hover:bg-gray-100"
        >
          TikTok Calculator
        </Link>
        <Link
          href="/etsy"
          className="rounded-lg border border-gray-300 px-5 py-2.5 font-medium text-gray-900 hover:bg-gray-100"
        >
          Etsy Calculator
        </Link>
      </nav>
      <p className="mt-6 text-sm text-gray-500">
        Questions? Contact{" "}
        <a
          href="mailto:contact@fynza.store"
          className="text-orange-600 underline hover:text-orange-700"
        >
          contact@fynza.store
        </a>
      </p>
    </main>
  );
}

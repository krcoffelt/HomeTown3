import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-muted px-6 py-24">
      <div className="text-center">
        <p className="text-4xl font-bold text-foreground">404</p>
        <h1 className="mt-4 text-2xl font-bold text-foreground">Oops! Page not found</h1>
        <Link href="/" className="mt-6 inline-block text-sm font-medium text-foreground underline underline-offset-4">
          Return to Home
        </Link>
      </div>
    </main>
  );
}

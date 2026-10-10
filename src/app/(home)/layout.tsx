import Link from "next/link";

export default function HomeLayout({children}: {children: React.ReactNode}) {
  return (
    <>
      <header className="text-xl leading-16 font-bold">
        <Link href="/">nextjs-template</Link>
      </header>
      <main className="bg-neutral-1000/40 min-h-screen py-10 md:py-20">
        <div className="max-w-1180px px-4 md:px-6">{children}</div>
      </main>
      <footer className="text-center leading-16 opacity-70">nextjs-template</footer>
    </>
  );
}

import Link from "next/link";

export default function HomeLayout({children}: {children: React.ReactNode}) {
  return (
    <>
      <header className="text-xl leading-16 font-bold">
        <Link href="/">nextjs-template</Link>
      </header>
      <main className="bg-neutral-1000/40 min-h-screen py-10 md:py-20">{children}</main>
      <footer className="text-center leading-16 opacity-70">nextjs-template</footer>
    </>
  );
}

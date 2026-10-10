export default function HomeLayout({children}: {children: React.ReactNode}) {
  return (
    <main className="bg-neutral-1000/40 min-h-screen py-10 md:py-20">
      <div className="max-w-1180px px-4 md:px-6">{children}</div>
    </main>
  );
}

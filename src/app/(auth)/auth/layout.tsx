export default function AuthLayout({children}: {children: React.ReactNode}) {
  return <main className="bg-neutral-1000/40 min-h-screen py-10 md:py-20">{children}</main>;
}

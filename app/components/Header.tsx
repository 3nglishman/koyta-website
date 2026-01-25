import Link from "next/link";

export default function Header() {
  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-white shadow">
      <div className="flex gap-6">
        <Link href="/">Home</Link>
        <Link href="/mission">Mission</Link>
        <Link href="/volunteer">Volunteer</Link>
      </div>
      <Link href="/donate" className="font-semibold text-[#c41e7f]">
        Donate
      </Link>
    </nav>
  );
}

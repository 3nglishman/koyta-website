// app/components/Header.tsx
import Link from "next/link";

export default function Header() {
  return (
    <nav className="flex justify-between items-center px-6 py-3 bg-white shadow-sm">
      <div className="flex gap-6 text-sm font-medium text-gray-700">
        <Link href="/" className="hover:text-[#c41e7f]">Home</Link>
        <Link href="/mission" className="hover:text-[#c41e7f]">Our Mission</Link>
        <Link href="/volunteer" className="hover:text-[#c41e7f]">Volunteer</Link>
      </div>
      <Link
        href="/donate"
        className="text-[#c41e7f] font-semibold hover:underline"
      >
        Donate
      </Link>
    </nav>
  );
}

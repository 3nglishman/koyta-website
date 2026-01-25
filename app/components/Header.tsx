import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full bg-white border-b">
      {/* THIS CONTAINER MUST MATCH HERO WIDTH */}
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-10 text-sm font-medium text-gray-700">
          <Link href="/" className="hover:text-[#c41e7f]">Home</Link>
          <Link href="/volunteer" className="hover:text-[#c41e7f]">Volunteer</Link>
          <Link href="/mission" className="hover:text-[#c41e7f]">Our Mission</Link>
        </div>

        <Link
          href="/donate"
          className="text-sm font-semibold text-[#8a6b4f] hover:text-[#c41e7f]"
        >
          Donate Here
        </Link>
      </nav>
    </header>
  );
}

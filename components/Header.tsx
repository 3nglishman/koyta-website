import Link from 'next/link';

export default function Header() {
  return (
    <header className="w-full bg-white border-b-2 border-[#c41e7f]">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Left Navigation */}
        <div className="flex gap-8">
          <Link href="/" className="text-gray-800 hover:text-[#c41e7f] font-medium">
            Home
          </Link>
          <Link href="/volunteer" className="text-gray-800 hover:text-[#c41e7f] font-medium">
            Volunteer
          </Link>
          <Link href="/our-mission" className="text-gray-800 hover:text-[#c41e7f] font-medium">
            Our Mission
          </Link>
        </div>

        {/* Right Navigation */}
        <Link 
          href="/donate" 
          className="text-gray-800 hover:text-[#c41e7f] font-medium"
        >
          Donate Here
        </Link>
      </nav>
    </header>
  );
}

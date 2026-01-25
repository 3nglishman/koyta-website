import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full bg-[#cc007e] text-white py-12 px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        
        {/* Legal Notice Column */}
        <div>
          <h3 className="text-[#cca300] text-xl font-bold mb-4">Legal Notice</h3>
          <div className="space-y-3 text-sm leading-relaxed">
            <p>
              Koyta Hope & Rift Initiative is a nonprofit organization legally incorporated in Canada under the Canada Not-for-profit Corporations Act (CNCA).
            </p>
            <p>Legal Name: Koyta Hope & Rift Initiative</p>
            <Link 
              href="https://ised-isde.canada.ca/cc/lgcy/fdrlCrpDtls.html?corpId=14113086&V_TOKEN=null&crpNm=&crpNmbr=1747730-9&bsNmbr=" 
              target="_blank"
              className="inline-block underline hover:text-[#cca300]"
            >
              Corporation Number: 1747730-9
            </Link>
          </div>
        </div>

        {/* Contact Column */}
        <div>
          <h3 className="text-[#cca300] text-xl font-bold mb-4">Contact</h3>
          <div className="space-y-1 text-sm">
            <p>Koyta Hope & Rift Initiative</p>
            <p>201-46078 Bole Ave,</p>
            <p>Chilliwack, BC V2P 2V8</p>
            <p className="pt-2">Phone: 1 (672) 890 2090</p>
            <p>Email: <a href="mailto:info@koyta.org" className="underline hover:text-[#cca300]">info@koyta.org</a></p>
          </div>
        </div>

        {/* Navigation Column */}
        <div>
          <h3 className="text-[#cca300] text-xl font-bold mb-4">Navigation</h3>
          <ul className="space-y-1 text-sm">
            <li><Link href="/" className="hover:text-[#cca300]">Home</Link></li>
            <li><Link href="/about" className="hover:text-[#cca300]">About</Link></li>
            <li><Link href="/services" className="hover:text-[#cca300]">Services</Link></li>
            <li><Link href="/get-involved" className="hover:text-[#cca300]">Get Involved</Link></li>
            <li><Link href="/contact" className="hover:text-[#cca300]">Contact</Link></li>
            <li><Link href="/legal-notice" className="hover:text-[#cca300]">Legal Notice</Link></li>
            <li><Link href="/privacy-policy" className="hover:text-[#cca300]">Privacy Policy</Link></li>
          </ul>
        </div>

        {/* Social Media Column */}
        <div>
          <h3 className="text-[#cca300] text-xl font-bold mb-4">Social media</h3>
          <ul className="space-y-1 text-sm">
            <li>
              <a href="https://facebook.com/koyta" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-[#cca300]">
                <span>📘</span> Facebook
              </a>
            </li>
            <li>
              <a href="https://x.com/koyta" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-[#cca300]">
                <span>✖️</span> X
              </a>
            </li>
            <li>
              <a href="https://instagram.com/koyta" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-[#cca300]">
                <span>📷</span> Instagram
              </a>
            </li>
          </ul>
        </div>

      </div>
    </footer>
  );
}

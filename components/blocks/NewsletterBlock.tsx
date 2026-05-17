'use client';

import { useEffect, useState } from 'react';

export default function NewsletterBlock() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="w-full bg-[#faf0f6] py-8 px-6">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-6">
        <div className="md:w-1/3 text-center md:text-left">
          <h2 className="text-2xl font-bold text-[#cc007e] mb-2">Stay Connected</h2>
          <p className="text-gray-600 text-sm">Get updates on our work in Kenya — straight to your inbox.</p>
        </div>
        <div className="md:w-2/3 w-full">
          {mounted && (
            <iframe
              width="100%"
              height="340"
              src="https://2860e11e.sibforms.com/serve/MUIFAI7zyaIomdii1Htm8MR9yaJZWTob9pBDoA6CXOYB7isnzrzNsk36Amw_tU1pX6ONyWWpYhEwrgreMfz6WehtU86XbV2x562OwCvZn_sIbmEn9WLmd3YTYx6Kh-9GrUzxqseE2Z1KbBB6ErbBV0Ha6-ea3TBbnubFgDtVPdBG5eK357c-ehJlHUZuXadYWa9W0mVvPiPUIfxiWg=="
              frameBorder="0"
              scrolling="no"
              allowFullScreen
              style={{ display: 'block' }}
            />
          )}
        </div>
      </div>
    </section>
  );
}

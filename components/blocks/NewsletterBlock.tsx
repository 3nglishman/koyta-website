export default function NewsletterBlock() {
  return (
    <section className="w-full bg-[#faf0f6] py-12 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-2xl font-bold text-[#cc007e] mb-2">Stay Connected</h2>
        <p className="text-gray-600 mb-6">Get updates on our work in Kenya — straight to your inbox.</p>
        <iframe
          width="100%"
          height="340"
          src="https://2860e11e.sibforms.com/serve/MUIFAI7zyaIomdii1Htm8MR9yaJZWTob9pBDoA6CXOYB7isnzrzNsk36Amw_tU1pX6ONyWWpYhEwrgreMfz6WehtU86XbV2x562OwCvZn_sIbmEn9WLmd3YTYx6Kh-9GrUzxqseE2Z1KbBB6ErbBV0Ha6-ea3TBbnubFgDtVPdBG5eK357c-ehJlHUZuXadYWa9W0mVvPiPUIfxiWg=="
          frameBorder="0"
          scrolling="auto"
          allowFullScreen
          style={{display: 'block', maxWidth: '600px', margin: '0 auto'}}
        />
      </div>
    </section>
  );
}

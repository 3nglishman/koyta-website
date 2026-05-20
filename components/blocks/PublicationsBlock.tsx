import Image from "next/image";
import Link from "next/link";

const DIRECTUS_URL = "https://cms.koyta.org";

type Publication = {
  number: string;
  title: string;
  description: string;
  image?: string;
  pdf_url?: string;
  live: boolean;
};

type PublicationsBlockProps = {
  heading?: string;
  series_label?: string;
  publications?: Publication[];
  zeffy_url?: string;
};

const DEFAULT_PUBLICATIONS: Publication[] = [
  {
    number: "01",
    title: "The Tea Picker's Hands",
    description:
      "A story of land, labour, and what happens when someone decides to change the ending. The Kipsigis people of Kericho County — who they are, what was taken, and why it still matters.",
    image: "4994278e-a03a-4795-9b38-29afc17523c6",
    pdf_url:
      "https://cms.koyta.org/assets/c797dc59-707f-4425-999b-081fc7ae8508.pdf",
    live: true,
  },
  {
    number: "02",
    title: "The Man in the New Clothes",
    description:
      "How a friendship between a truck driver in Canada and a barber in Kamagomon is quietly changing everything.",
    live: false,
  },
  {
    number: "03",
    title: "The Rising",
    description:
      "Inside the Kamagomon Community Hub — and what it means for the valley and the people rebuilding it.",
    live: false,
  },
];

export default function PublicationsBlock({
  heading = "The Kipsigis Story",
  series_label = "A series of five publications by Koyta Hope & Rift Initiative",
  publications = DEFAULT_PUBLICATIONS,
  zeffy_url = "https://www.zeffy.com/en-CA/donation-form/pamoja-tunainuka-tena-rising-together-in-the-rift-valley",
}: PublicationsBlockProps) {
  const [hero, ...rest] = publications;

  return (
    <section className="w-full py-12 px-6 bg-white">
      <div className="max-w-6xl mx-auto">

        {/* Section header */}
        <div className="flex items-baseline gap-4 border-b-2 border-[#CC007E] pb-3 mb-8">
          <h2 className="font-sans text-xs font-bold tracking-widest uppercase text-[#CC007E]">
            {heading}
          </h2>
          <span className="font-serif text-xs italic text-gray-400">
            {series_label}
          </span>
        </div>

        {/* Grid — hero left, two smaller cards right */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* Hero card */}
          {hero && (
            <div className="md:col-span-2 border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-200">
              {hero.image && (
                <div className="relative w-full h-56 md:h-72">
                  <Image
                    src={`${DIRECTUS_URL}/assets/${hero.image}`}
                    alt={hero.title}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              <div className="p-6">
                <span className="block font-sans text-xs font-bold tracking-widest uppercase text-[#CC007E] mb-2">
                  {hero.number} · Publication One
                </span>
                <h3 className="font-serif text-2xl font-bold text-gray-900 mb-3">
                  {hero.title}
                </h3>
                <p className="font-serif text-sm text-gray-600 leading-relaxed mb-5">
                  {hero.description}
                </p>
                {hero.pdf_url && (
                  <a
                    href={hero.pdf_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-[#CC007E] text-white font-sans text-xs font-bold tracking-widest uppercase px-6 py-3 hover:bg-[#a80068] transition-colors duration-200"
                  >
                    Download &amp; Read
                  </a>
                )}
              </div>
            </div>
          )}

          {/* Coming soon cards */}
          <div className="flex flex-col gap-6">
            {rest.map((pub) => (
              <div
                key={pub.number}
                className="border border-gray-200 overflow-hidden opacity-60 flex-1"
              >
                <div className="w-full h-24 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-gray-300"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6v6l4 2m6-2a10 10 0 11-20 0 10 10 0 0120 0z"
                    />
                  </svg>
                </div>
                <div className="p-4">
                  <span className="block font-sans text-xs font-bold tracking-widest uppercase text-[#CC007E] mb-1">
                    {pub.number} · Coming Soon
                  </span>
                  <h3 className="font-serif text-base font-bold text-gray-800 mb-2">
                    {pub.title}
                  </h3>
                  <p className="font-serif text-xs text-gray-500 leading-relaxed mb-3">
                    {pub.description}
                  </p>
                  <span className="inline-block border border-gray-300 text-gray-400 font-sans text-xs font-bold tracking-widest uppercase px-4 py-2 cursor-default">
                    Coming Soon
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Footer row */}
        <div className="mt-6 pt-4 border-t border-gray-200 flex items-center justify-between flex-wrap gap-3">
          <span className="font-sans text-xs italic text-gray-400">
            Five publications. One story. Updated as each is released.
          </span>
          <a
            href={zeffy_url}
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans text-xs font-bold tracking-wide text-[#CC007E] hover:underline"
          >
            Support this work →
          </a>
        </div>

      </div>
    </section>
  );
}

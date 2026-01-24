import Link from 'next/link';

interface HeroBlockProps {
  content: {
    heading?: string;
    subheading?: string;
    cta_text?: string;
    cta_link?: string;
  };
}

export default function HeroBlock({ content }: HeroBlockProps) {
  const { heading, subheading, cta_text, cta_link } = content || {};

  return (
    <section className="bg-[#c41e7f] text-white py-20 px-6 text-center">
      {heading && (
        <h1 className="text-4xl md:text-6xl font-bold mb-4">{heading}</h1>
      )}
      {subheading && (
        <p className="text-xl md:text-2xl mb-8 opacity-90">{subheading}</p>
      )}
      {cta_text && cta_link && (
        <Link
          href={cta_link}
          className="inline-block bg-white text-[#c41e7f] font-semibold px-8 py-4 rounded-full hover:bg-gray-100 transition-colors"
        >
          {cta_text}
        </Link>
      )}
    </section>
  );
}

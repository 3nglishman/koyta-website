import Link from "next/link";

type CTABlockProps = {
  title?: string;
  subtitle?: string;
  button_url?: string;
  link?: string;
  Download_Now?: string;
};

export default function CTABlock({ title, subtitle, button_url, link, Download_Now }: CTABlockProps) {
  if (!title && !subtitle) return null;
  return (
    <section className="bg-[#c41e7f] text-white py-16 px-6 text-center">
      {title && <h2 className="text-4xl font-bold mb-4">{title}</h2>}
      {subtitle && <p className="text-xl mb-8">{subtitle}</p>}
      {(button_url || link) && (
        <Link
          href={button_url || link || ""}
          className="inline-block bg-white text-[#c41e7f] font-bold px-10 py-4 rounded-full hover:bg-gray-100"
        >
          {Download_Now || "Download Now"}
        </Link>
      )}
    </section>
  );
}

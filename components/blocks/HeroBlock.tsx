import Image from "next/image";

const DIRECTUS_URL = "https://cms.koyta.org";

export default function HeroBlock(block: any) {
  const title = block.title || block.heading;
  const subtitle = block.subtitle || block.tagline;
  const image = block.image;

  if (!image) return null;

  return (
    <section className="relative w-full">
      <Image
        src={`${DIRECTUS_URL}/assets/${image}`}
        alt={title || ""}
        width={1920}
        height={600}
        className="w-full h-auto"
        priority
      />
      {(title || subtitle) && (
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
          {title && <h1 className="text-5xl font-bold">{title}</h1>}
          {subtitle && <p className="text-2xl mt-2">{subtitle}</p>}
        </div>
      )}
    </section>
  );
}

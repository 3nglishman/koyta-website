import Image from "next/image";

const DIRECTUS_URL = "https://cms.koyta.org";

export default function HeroBlock(block: any) {
  const title = block.title || block.heading;
  const subtitle = block.subtitle || block.tagline;
  const image = block.image;

  if (!image) return null;

  return (
    <section className="relative w-full">
      <div className="relative w-full" style={{ aspectRatio: '1920/600' }}>
        <Image
          src={`${DIRECTUS_URL}/assets/${image}`}
          alt={title || ""}
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
      </div>
      {(title || subtitle) && (
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
          {title && <h1 className="text-5xl font-bold">{title}</h1>}
          {subtitle && <p className="text-2xl mt-2">{subtitle}</p>}
        </div>
      )}
    </section>
  );
}

import Image from "next/image";
import Link from "next/link";

const DIRECTUS_URL = "https://cms.koyta.org";

type ImageBlockProps = {
  image?: string;
  caption?: string;
  link?: string;
};

export default function ImageBlock({ image, caption, link }: ImageBlockProps) {
  if (!image) return null;

  const imageElement = (
    <div className="relative w-full" style={{ aspectRatio: '1920/1080' }}>
      <Image
        src={`${DIRECTUS_URL}/assets/${image}`}
        alt={caption || ""}
        fill
        className="object-cover"
        sizes="100vw"
        priority={false}
      />
    </div>
  );

  return (
    <section className="w-full">
      {link ? (
        <Link href={link} className="block">
          {imageElement}
        </Link>
      ) : (
        imageElement
      )}
      {caption && (
        <p className="text-center text-sm text-gray-500 mt-4">{caption}</p>
      )}
    </section>
  );
}

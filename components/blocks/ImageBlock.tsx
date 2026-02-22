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
    <Image
      src={`${DIRECTUS_URL}/assets/${image}`}
      alt={caption || ""}
      width={1920}
      height={1080}
      className="w-full h-auto"
      priority={false}
    />
  );
  return (
    <section className="w-full">
      <div className="relative w-full">
        {link ? (
          <Link href={link} className="block">
            {imageElement}
          </Link>
        ) : (
          imageElement
        )}
      </div>
      {caption && (
        <p className="text-center text-sm text-gray-500 mt-4">{caption}</p>
      )}
    </section>
  );
}

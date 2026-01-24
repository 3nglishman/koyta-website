import Image from "next/image";

const DIRECTUS_URL = "https://cms.koyta.org";

type ImageBlockProps = {
  image?: string;
  caption?: string;
};

export default function ImageBlock({ image, caption }: ImageBlockProps) {
  if (!image) return null;

  return (
    <section className="w-full">
      <div className="relative w-full">
        <Image
          src={`${DIRECTUS_URL}/assets/${image}`}
          alt={caption || ""}
          width={1920}
          height={1080}
          className="w-full h-auto"
          priority={false}
        />
      </div>

      {caption && (
        <p className="text-center text-sm text-gray-500 mt-4">
          {caption}
        </p>
      )}
    </section>
  );
}

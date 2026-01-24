import Image from "next/image";

const DIRECTUS_URL = "https://cms.koyta.org";

type ImageBlockProps = {
  image?: string;
  caption?: string;
};

export default function ImageBlock({ image, caption }: ImageBlockProps) {
  if (!image) return null;

  return (
    <section className="w-full py-16">
      <div className="relative w-full h-[70vh] max-h-[900px]">
        <Image
          src={`${DIRECTUS_URL}/assets/${image}`}
          alt={caption || ""}
          fill
          className="object-cover"
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

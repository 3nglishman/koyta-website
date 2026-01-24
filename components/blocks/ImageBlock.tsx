import Image from "next/image";

const DIRECTUS_URL = "https://cms.koyta.org";

type ImageBlockProps = {
  image?: string;
  caption?: string;
};

export default function ImageBlock({ image, caption }: ImageBlockProps) {
  if (!image) return null;

  return (
    <section className="w-full py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="relative w-full aspect-[16/9]">
          <Image
            src={`${DIRECTUS_URL}/assets/${image}`}
            alt={caption || ""}
            fill
            className="object-cover rounded-lg"
            sizes="100vw"
          />
        </div>

        {caption && (
          <p className="text-center text-sm text-gray-500 mt-4">
            {caption}
          </p>
        )}
      </div>
    </section>
  );
}

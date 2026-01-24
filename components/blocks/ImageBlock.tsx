import Image from "next/image";

const DIRECTUS_URL = "https://cms.koyta.org";

type ImageBlockProps = {
  image?: string;
  caption?: string;
};

export default function ImageBlock({ image, caption }: ImageBlockProps) {
  if (!image) return null;

  return (
    <section className="w-full py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <Image
          src={`${DIRECTUS_URL}/assets/${image}`}
          alt={caption || ""}
          width={1600}
          height={900}
          className="rounded-lg w-full h-auto"
        />
        {caption && (
          <p className="text-center text-sm text-gray-500 mt-4">
            {caption}
          </p>
        )}
      </div>
    </section>
  );
}

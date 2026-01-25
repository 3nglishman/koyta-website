import Image from "next/image";

const DIRECTUS_URL = "https://cms.koyta.org";

type ImageTextBlockProps = {
  image?: string;
  title?: string;
  subtitle?: string;
  content?: string;
  imagePosition?: "left" | "right"; // Which side the image should be on
};

export default function ImageTextBlock({ 
  image, 
  title, 
  subtitle, 
  content,
  imagePosition = "left" 
}: ImageTextBlockProps) {
  if (!image && !content) return null;

  return (
    <section className="w-full py-12 md:py-16 px-6">
      <div className={`max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center ${
        imagePosition === "right" ? "md:grid-flow-dense" : ""
      }`}>
        
        {/* Image Side */}
        {image && (
          <div className={`relative w-full ${imagePosition === "right" ? "md:col-start-2" : ""}`}>
            <Image
              src={`${DIRECTUS_URL}/assets/${image}`}
              alt={title || ""}
              width={800}
              height={600}
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        )}

        {/* Text Side */}
        <div className={`${imagePosition === "right" ? "md:col-start-1 md:row-start-1" : ""}`}>
          {subtitle && (
            <p className="text-[#cca300] text-lg md:text-xl font-medium mb-2">
              {subtitle}
            </p>
          )}
          
          {title && (
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#cc007e] mb-6">
              {title}
            </h2>
          )}
          
          {content && (
            <div 
              className="prose prose-lg max-w-none text-gray-700"
              dangerouslySetInnerHTML={{ __html: content }}
            />
          )}
        </div>

      </div>
    </section>
  );
}

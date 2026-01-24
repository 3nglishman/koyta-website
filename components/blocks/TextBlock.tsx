type TextBlockProps = {
  title?: string;
  subtitle?: string;
  content?: string;
};

export default function TextBlock({ title, subtitle, content }: TextBlockProps) {
  if (!title && !subtitle && !content) return null;

  return (
    <section className="w-full py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {title && (
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#cc007e] text-center mb-4">
            {title}
          </h2>
        )}
        {subtitle && (
          <p className="text-xl md:text-2xl lg:text-3xl text-[#cca300] text-center mb-10">
            {subtitle}
          </p>
        )}
        {content && (
          <div 
            className="prose prose-lg md:prose-xl lg:prose-2xl mx-auto text-[#333333] leading-relaxed [&_h1]:text-4xl [&_h2]:text-3xl [&_h3]:text-2xl [&_p]:text-lg md:[&_p]:text-xl [&_p]:text-[#333333]"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        )}
      </div>
    </section>
  );
}


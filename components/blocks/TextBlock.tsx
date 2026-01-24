type TextBlockProps = {
  title?: string;
  subtitle?: string;
  content?: string;
};

export default function TextBlock({ title, subtitle, content }: TextBlockProps) {
  if (!title && !subtitle && !content) return null;

  return (
    <section className="w-full py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {title && (
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#c41e7f] text-center mb-4">
            {title}
          </h2>
        )}
        {subtitle && (
          <p className="text-xl md:text-2xl lg:text-3xl text-gray-600 text-center mb-10">
            {subtitle}
          </p>
        )}
        {content && (
          <div 
            className="prose prose-lg md:prose-xl lg:prose-2xl max-w-none text-gray-800 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        )}
      </div>
    </section>
  );
}

type TextBlockProps = {
  title?: string;
  subtitle?: string;
  content?: string;
};

export default function TextBlock({ title, subtitle, content }: TextBlockProps) {
  if (!content && !title && !subtitle) return null;

  return (
    <section className="w-full py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {title && (
          <h2 className="text-3xl md:text-4xl font-bold text-[#c41e7f] mb-6 text-center">
            {title}
          </h2>
        )}

        {subtitle && (
          <p className="text-xl text-center mb-10">
            {subtitle}
          </p>
        )}

        {content && (
          <div
            className="prose prose-lg max-w-none mx-auto"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        )}
      </div>
    </section>
  );
}

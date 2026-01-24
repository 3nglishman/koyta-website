type TextBlockProps = {
  title?: string;
  subtitle?: string;
  content?: string;
};

export default function TextBlock({ title, subtitle, content }: TextBlockProps) {
  if (!content && !title && !subtitle) return null;

  return (
    <section className="w-full py-16 px-6">
      <div className="max-w-4xl mx-auto">
        {title && (
          <h2 className="text-3xl font-bold text-[#c41e7f] mb-4 text-center">
            {title}
          </h2>
        )}

        {subtitle && (
          <p className="text-xl text-center mb-8">
            {subtitle}
          </p>
        )}

        {content && (
          <div
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        )}
      </div>
    </section>
  );
}

type TextBlockProps = {
  title?: string;
  content?: string;
};

export default function TextBlock({ title, content }: TextBlockProps) {
  if (!content && !title) return null;

  return (
    <section className="w-full py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {title && (
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#c41e7f] mb-8">
            {title}
          </h2>
        )}

        {content && (
          <div
            className="prose prose-lg max-w-none text-gray-800 prose-p:leading-relaxed prose-p:mb-5"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        )}
      </div>
    </section>
  );
}

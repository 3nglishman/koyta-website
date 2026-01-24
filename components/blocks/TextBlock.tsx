type TextBlockProps = {
  heading?: string;
  content?: string;
};

export default function TextBlock({ heading, content }: TextBlockProps) {
  if (!heading && !content) return null;

  return (
    <section className="w-full py-20 px-6">
      <div className="max-w-5xl mx-auto">
        {heading && (
          <h2 className="text-3xl font-bold text-[#c41e7f] text-center mb-10">
            {heading}
          </h2>
        )}

        {content && (
          <div
            className="prose prose-lg mx-auto text-gray-800"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        )}
      </div>
    </section>
  );
}

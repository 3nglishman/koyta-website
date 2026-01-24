type TextBlockProps = {
  heading?: string;
  content?: string;
};

export default function TextBlock({ heading, content }: TextBlockProps) {
  if (!heading && !content) return null;

  return (
    <section className="w-full py-24 px-6 bg-[#faf8f5]">
      <div className="max-w-7xl mx-auto text-center">
        {heading && (
          <h2 className="text-4xl md:text-5xl font-bold text-[#c41e7f] mb-10">
            {heading}
          </h2>
        )}

        {content && (
          <div
            className="text-xl md:text-2xl leading-relaxed text-gray-800 max-w-5xl mx-auto"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        )}
      </div>
    </section>
  );
}

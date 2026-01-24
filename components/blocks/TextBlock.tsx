type TextBlockProps = {
  heading?: string;
  body?: string;
};

export default function TextBlock({ heading, body }: TextBlockProps) {
  if (!heading && !body) return null;

  return (
    <section className="w-full py-20 px-8">
      {heading && (
        <h2 className="text-3xl font-bold text-[#c41e7f] text-center mb-10">
          {heading}
        </h2>
      )}

      {body && (
        <div className="prose prose-lg max-w-none mx-auto text-center">
          {body}
        </div>
      )}
    </section>
  );
}

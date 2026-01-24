type TextBlockProps = {
  content?: string;
};

export default function TextBlock({ content }: TextBlockProps) {
  if (!content) return null;

  return (
    <section className="max-w-4xl mx-auto py-12 px-6">
      <div
        className="prose prose-lg max-w-none"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </section>
  );
}

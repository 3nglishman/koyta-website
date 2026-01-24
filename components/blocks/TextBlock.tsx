export default function TextBlock({ content, title }: any) {
  if (!content && !title) return null;

  return (
   <section className="w-full py-16 px-6">
  <div className="max-w-6xl mx-auto">
        {title && (
          <h2 className="text-3xl font-bold text-[#c41e7f] mb-6 text-center">
            {title}
          </h2>
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

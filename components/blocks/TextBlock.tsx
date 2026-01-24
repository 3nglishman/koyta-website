export default function TextBlock(block: any) {
  const title = block.title || block.heading;
  const body = block.content || block.body;

  if (!title && !body) return null;

  return (
    <section className="py-16 px-6 max-w-4xl mx-auto text-center">
      {title && (
        <h2 className="text-3xl font-bold text-[#c41e7f] mb-6">
          {title}
        </h2>
      )}
      {body && (
        <div className="prose prose-lg mx-auto">
          {body}
        </div>
      )}
    </section>
  );
}

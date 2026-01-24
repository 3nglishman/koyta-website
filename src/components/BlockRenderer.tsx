import HeroBlock from './blocks/HeroBlock';

interface Block {
  id: number;
  block_type: string;
  content: any;
  sort: number | null;
}

export default function BlockRenderer({ block }: { block: Block }) {
  switch (block.block_type) {
    case 'hero':
      return <HeroBlock content={block.content} />;
    case 'text':
      return (
        <section className="py-16 px-6 max-w-4xl mx-auto">
          {block.content?.heading && (
            <h2 className="text-3xl font-bold text-[#c41e7f] mb-4">{block.content.heading}</h2>
          )}
          {block.content?.body && (
            <div className="prose prose-lg">{block.content.body}</div>
          )}
        </section>
      );
    case 'cta':
      return (
        <section className="bg-[#c41e7f] text-white py-16 px-6 text-center">
          {block.content?.heading && (
            <h2 className="text-3xl font-bold mb-4">{block.content.heading}</h2>
          )}
          {block.content?.description && (
            <p className="text-xl mb-8">{block.content.description}</p>
          )}
        </section>
      );
    default:
      return null;
  }
}

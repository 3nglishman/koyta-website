import IconGridBlock from "./blocks/IconGridBlock";
import ImageBlock from "./blocks/ImageBlock";
import HeroBlock from "./blocks/HeroBlock";
import TextBlock from "./blocks/TextBlock";

interface Block {
  id: number;
  block_type: string;
  content: any;
  sort: number | null;
}

export default function BlockRenderer({ block }: { block: Block }) {
  switch (block.block_type) {
    case "hero":
      return <HeroBlock content={block.content} />;

    case "text":
      return <TextBlock content={block.content} />;

    case "image":
      return <ImageBlock {...block.content} />;

    case "icon_grid":
      return <IconGridBlock {...block.content} />;

    case "cta":
      return (
        <section className="bg-[#c41e7f] text-white py-16 px-6 text-center">
          {block.content?.heading && (
            <h2 className="text-3xl font-bold mb-4">
              {block.content.heading}
            </h2>
          )}
          {block.content?.description && (
            <p className="text-xl mb-8">
              {block.content.description}
            </p>
          )}
        </section>
      );

    default:
      return (
        <pre style={{ padding: 20 }}>
          Unsupported block type: {block.block_type}
          {JSON.stringify(block, null, 2)}
        </pre>
      );
  }
}

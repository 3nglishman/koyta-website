import CTABlock from "./blocks/CTABlock";
import IconGridBlock from "./blocks/IconGridBlock";
import ImageBlock from "./blocks/ImageBlock";
import HeroBlock from "./blocks/HeroBlock";
import TextBlock from "./blocks/TextBlock";
import SpacerBlock from "./blocks/SpacerBlock";
import DividerBlock from "./blocks/DividerBlock";

export default function BlockRenderer({ block }: { block: any }) {
  switch (block.block_type) {
    case "hero":
      return <HeroBlock {...block} />;

    case "text":
      return <TextBlock {...block} />;

    case "image":
      return <ImageBlock {...block} />;

    case "icon_grid": {
      // Parse JSON content if it's a string
      let parsedContent = block.content;
      if (typeof block.content === 'string') {
        try {
          // Strip HTML tags if present
          const cleanContent = block.content.replace(/<[^>]*>/g, '').trim();
          parsedContent = JSON.parse(cleanContent);
        } catch (e) {
          console.error('Failed to parse icon_grid content:', e);
          return null;
        }
      }
      return <IconGridBlock heading={block.title} {...parsedContent} />;
    }

    case "cta":
      return <CTABlock {...block} />;

    case "spacer":
      return <SpacerBlock {...block} />;

    case "divider":
      return <DividerBlock />;

    default:
      return null;
  }
}

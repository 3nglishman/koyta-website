import CTABlock from "./blocks/CTABlock";
import IconGridBlock from "./blocks/IconGridBlock";
import ImageBlock from "./blocks/ImageBlock";
import HeroBlock from "./blocks/HeroBlock";
import TextBlock from "./blocks/TextBlock";
import SpacerBlock from "./blocks/SpacerBlock";
import DividerBlock from "./blocks/DividerBlock";
import ImageTextBlock from "./blocks/ImageTextBlock";
import FormBlock from "./blocks/FormBlock";
import NewsletterBlock from "./blocks/NewsletterBlock";
import PublicationsBlock from "./blocks/PublicationsBlock";

export default function BlockRenderer({ block }: { block: any }) {
  switch (block.block_type) {
    case "hero":
      return <HeroBlock {...block} />;
    case "text":
      return <TextBlock {...block} />;
    case "image":
      return <ImageBlock {...block} />;
    case "image_text":
      return <ImageTextBlock {...block} />;
    case "form":
      return <FormBlock {...block} />;
    case "newsletter":
      return <NewsletterBlock />;
    case "icon_grid": {
      let parsedContent = block.content;
      if (typeof block.content === 'string') {
        try {
          let cleanContent = block.content
            .replace(/<[^>]*>/g, '')
            .replace(/&nbsp;/g, ' ')
            .replace(/&amp;/g, '&')
            .replace(/&lt;/g, '<')
            .replace(/&gt;/g, '>')
            .replace(/&quot;/g, '"')
            .trim();
          parsedContent = JSON.parse(cleanContent);
        } catch (e) {
          console.error('Failed to parse icon_grid content:', e, block.content);
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
    case "publications":
      return <PublicationsBlock {...block} />;
    default:
      return null;
  }
}

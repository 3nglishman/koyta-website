import CTABlock from "./blocks/CTABlock";
import IconGridBlock from "./blocks/IconGridBlock";
import ImageBlock from "./blocks/ImageBlock";
import HeroBlock from "./blocks/HeroBlock";
import TextBlock from "./blocks/TextBlock";

export default function BlockRenderer({ block }: { block: any }) {
  switch (block.block_type) {
    case "hero":
      return <HeroBlock {...block} />;

    case "text":
      return <TextBlock {...block} />;

    case "image":
      return <ImageBlock {...block} />;

    case "icon_grid":
      return <IconGridBlock {...block} />;

    case "cta":
      return <CTABlock {...block} />;

    default:
      return null;
  }
}

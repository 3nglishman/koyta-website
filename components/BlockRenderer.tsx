import SpacerBlock from "./blocks/SpacerBlock";
import DividerBlock from "./blocks/DividerBlock";
import HeroBlock from "./blocks/HeroBlock";
import TextBlock from "./blocks/TextBlock";
import ImageBlock from "./blocks/ImageBlock";
import IconGridBlock from "./blocks/IconGridBlock";
import CTABlock from "./blocks/CTABlock";

type M2ABlock = {
  id: number;
  collection: string;
  item: any;
};

export default function BlockRenderer({ block }: { block: M2ABlock }) {
  const data = block.item;

  if (!data) return null;

  switch (block.collection) {
    case "hero_blocks":
      return <HeroBlock content={data} />;

    case "text_blocks":
      return <TextBlock content={data} />;

    case "image_blocks":
      return <ImageBlock {...data} />;

    case "icon_grid_blocks":
      return <IconGridBlock {...data} />;

    case "cta_blocks":
      return <CTABlock {...data} />;
    
    case "spacer":
      return <SpacerBlock {...block} />;

    case "divider":
      return <DividerBlock />;
    
    default:
      return null;
  }
}

import HeroBlock from "./blocks/HeroBlock";
import TextBlock from "./blocks/TextBlock";
import ImageBlock from "./blocks/ImageBlock";
import CTABlock from "./blocks/CTABlock";
import IconGridBlock from "./blocks/IconGridBlock";

export default function BlockRenderer({ block }: any) {
  const { collection, item } = block;

  switch (collection) {
    case "hero_blocks":
      return <HeroBlock content={item} />;

    case "text_blocks":
      return <TextBlock content={item} />;

    case "image_blocks":
      return <ImageBlock {...item} />;

    case "cta_blocks":
      return <CTABlock {...item} />;

    case "icon_grid_blocks":
      return <IconGridBlock {...item} />;

    default:
      return null;
  }
}

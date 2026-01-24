export default function BlockRenderer({ block }: { block: any }) {
  const data = block.item;

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

    default:
      return null;
  }
}

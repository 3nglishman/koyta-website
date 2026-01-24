export const dynamic = "force-dynamic";

import BlockRenderer from "@/components/BlockRenderer";

const DIRECTUS_URL = "https://cms.koyta.org";

async function getHomepage() {
  const res = await fetch(
    `${DIRECTUS_URL}/items/Pages?filter[slug][_eq]=home&fields=*,blocks.collection,blocks.item.*&deep=blocks.item`,
    { cache: "no-store" }
  );

  const json = await res.json();
  return json.data?.[0] ?? null;
}

export default async function HomePage() {
  const page = await getHomepage();
  if (!page) return null;

  return (
    <main>
      {page.blocks?.map((block: any) => (
        <BlockRenderer key={block.id} block={block} />
      ))}
    </main>
  );
}

export const dynamic = 'force-dynamic';
import BlockRenderer from "@/components/BlockRenderer";

const DIRECTUS_URL = "https://cms.koyta.org";

async function getHomepage() {
  const res = await fetch(
    "https://cms.koyta.org/items/Pages?filter[slug][_eq]=home&fields=id,title,slug,status,blocks.id,blocks.block_type,blocks.content,blocks.sort,blocks.image,blocks.title,blocks.subtitle",
    { cache: "no-store" }
  );

  const json = await res.json();
  return json.data?.[0] ?? null;
}

export default async function HomePage() {
  const page = await getHomepage();
  
  if (!page) {
    return (
      <main style={{ padding: 40 }}>
        <h1>Page not found</h1>
        <p>Could not load homepage data from Directus</p>
      </main>
    );
  }

  if (!page.blocks || page.blocks.length === 0) {
    return (
      <main style={{ padding: 40 }}>
        <h1>No blocks found</h1>
        <p>Page exists but has no blocks</p>
      </main>
    );
  }

  return (
    <main>
      {page.blocks
        ?.sort((a: any, b: any) => (a.sort ?? 0) - (b.sort ?? 0))
        .map((block: any) => (
          <BlockRenderer key={block.id} block={block} />
        ))}
    </main>
  );
}

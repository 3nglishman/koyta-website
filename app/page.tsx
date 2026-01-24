export const dynamic = 'force-dynamic';
import BlockRenderer from "@/components/BlockRenderer";

const DIRECTUS_URL = "https://cms.koyta.org";

async function getHomepage() {
  const res = await fetch(
   `${DIRECTUS_URL}/items/Pages?filter[slug][_eq]=home&deep[blocks]=*&fields=*,blocks.*`,
    { cache: "no-store" }
  );
  const json = await res.json();
  return json.data?.[0];
}

export default async function HomePage() {
  const page = await getHomepage();
  if (!page) return null;

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

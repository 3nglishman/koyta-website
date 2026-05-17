export const dynamic = 'force-dynamic';
import BlockRenderer from "@/components/BlockRenderer";

const DIRECTUS_URL = "https://cms.koyta.org";

async function getHomepage() {
    try {
          const res = await fetch(
                  `${DIRECTUS_URL}/items/Pages?filter[slug][_eq]=home&fields=id,title,slug,status,blocks.id,blocks.block_type,blocks.content,blocks.sort,blocks.image,blocks.title,blocks.subtitle,blocks.link,blocks.Download_Now`,
            { cache: "no-store" }
                );
          const json = await res.json();
          return json.data?.[0] ?? null;
    } catch (error) {
          console.error("Failed to fetch from Directus CMS:", error);
          return null;
    }
}

export default async function HomePage() {
    const page = await getHomepage();

  if (!page) {
        return (
                <main style={{ padding: 40 }}>
                          <h1>Coming Back Soon</h1>
                        <p>We are experiencing a temporary issue. Please check back shortly.</p>
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
          </main>main>
        );
}</h1>

export const dynamic = 'force-dynamic';
export const dynamicParams = true;
export const runtime = 'nodejs';

import BlockRenderer from '@/components/BlockRenderer';

const DIRECTUS_URL = "https://cms.koyta.org";

async function getPage(slug: string) {
  try {
    const res = await fetch(
      `${DIRECTUS_URL}/items/Pages?filter[slug][_eq]=${slug}&fields=id,title,slug,status,blocks.id,blocks.block_type,blocks.content,blocks.sort,blocks.image,blocks.title,blocks.subtitle`,
      { cache: 'no-store' }
    );
    
    if (!res.ok) {
      return null;
    }
    
    const json = await res.json();
    return json.data?.[0] || null;
  } catch (error) {
    return null;
  }
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = await getPage(slug);

  if (!page) {
    return (
      <main style={{ padding: 40 }}>
        <h1>Page not found</h1>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#faf8f5]">
      {page.blocks?.map((block: any) => (
        <BlockRenderer key={block.id} block={block} />
      ))}
    </main>
  );
}

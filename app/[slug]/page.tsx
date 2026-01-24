export const dynamic = 'force-dynamic';
export const dynamicParams = true;
export const runtime = 'nodejs';

const DIRECTUS_URL = "https://cms.koyta.org";

async function getPage(slug: string) {
  try {
    const res = await fetch(
      `${DIRECTUS_URL}/items/Pages?filter[slug][_eq]=${slug}&fields=id,title,slug,status,blocks.id,blocks.block_type,blocks.content,blocks.sort`,
      { cache: 'no-store' }
    );
    
    if (!res.ok) {
      console.error('Fetch failed:', res.status, res.statusText);
      return null;
    }
    
    const json = await res.json();
    return json.data?.[0] || null;
  } catch (error) {
    console.error('Error fetching page:', error);
    return null;
  }
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = await getPage(slug);

 if (!page) {
  return (
    <main style={{ padding: 40 }}>
      <h1>Page exists but data blocked</h1>
      <pre>{JSON.stringify(page, null, 2)}</pre>
    </main>
  );
}

  return (
    <main className="min-h-screen bg-[#faf8f5] px-6 py-12">
      <div className="max-w-4xl mx-auto">
       <h1 className="text-4xl font-bold mb-6">
  {page.title ?? page.slug}
</h1>

        {/* TEMP DEBUG OUTPUT */}
        <pre className="bg-white p-4 rounded shadow text-sm overflow-x-auto">
          {JSON.stringify(page.blocks, null, 2)}
        </pre>
      </div>
    </main>
  );
}

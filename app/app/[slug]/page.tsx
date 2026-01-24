export const dynamic = 'force-dynamic';

const DIRECTUS_URL = "https://cms.koyta.org";

async function getPage(slug: string) {
  const res = await fetch(
  `${DIRECTUS_URL}/items/Pages?filter[slug][_eq]=${slug}&filter[status][_eq]=published&fields=*,blocks.*`,
  { cache: 'no-store' }
);

  const json = await res.json();
  return json.data?.[0] || null;
}

export default async function Page({ params }: { params: { slug: string } }) {
  const page = await getPage(params.slug);

  if (!page) {
    return <h1>404 – Page not found</h1>;
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

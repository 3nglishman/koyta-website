export const dynamic = 'force-dynamic';

import Image from "next/image";
import Link from "next/link";

const DIRECTUS_URL = "https://cms.koyta.org";

async function getHomepage() {
  try {
    const res = await fetch(`${DIRECTUS_URL}/items/HomePage`, {
      next: { revalidate: 60 },
    });
    
    if (!res.ok) {
      throw new Error(`Failed to fetch: ${res.status}`);
    }
    
    const json = await res.json();
    
    // Handle both array and single object responses
    if (Array.isArray(json.data)) {
      return json.data[0] || {};
    }
    
    return json.data || {};
  } catch (error) {
    console.error('Error fetching homepage:', error);
    return {}; // Return empty object as fallback
  }
}

function getImageUrl(imageId: string) {
  return `${DIRECTUS_URL}/assets/${imageId}`;
}

export default async function Home() {
  const data = await getHomepage();
  
  // If no data, show a fallback message
  if (!data || Object.keys(data).length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Loading content...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#faf8f5]">
      {/* Top Navigation */}
      <nav className="flex justify-between items-center px-6 py-3 bg-white shadow-sm">
        <div className="flex gap-6 text-sm font-medium text-gray-700">
          <Link href="/" className="hover:text-[#c41e7f]">Home</Link>
          <Link href="/volunteer" className="hover:text-[#c41e7f]">Volunteer</Link>
          <Link href="/mission" className="hover:text-[#c41e7f]">Our Mission</Link>
        </div>
        <Link 
          href="/donate" 
          className="text-[#c41e7f] font-semibold hover:underline"
        >
          Donate Here
        </Link>
      </nav>

      {/* Header Banner with Site Title and Tagline */}
      {data.heart_image && (
        <header className="relative w-full">
          <Image 
            src={getImageUrl(data.heart_image)}
            alt={data.site_title || "Koyta Hope & Rift Initiative"}
            width={1920}
            height={200}
            className="w-full h-auto"
            priority
          />
          {data.site_title && (
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
              <h1 className="text-4xl md:text-6xl font-bold mb-2">{data.site_title}</h1>
              {data.tagline && (
                <p className="text-xl md:text-2xl font-light italic">{data.tagline}</p>
              )}
            </div>
          )}
        </header>
      )}

      {/* Gift Section */}
      <section className="w-full bg-white py-12 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#c41e7f] mb-6">
            Your Gift Has a Journey
          </h2>
          {data.hero_description && (
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              {data.hero_description}
            </p>
          )}
        </div>
        {data.Gift_image && (
          <div className="mt-8">
            <Image 
              src={getImageUrl(data.Gift_image)}
              alt="Your Gift Journey"
              width={1920}
              height={400}
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        )}
      </section>

      {/* Mission Section */}
      <section className="w-full bg-[#faf8f5] py-12 px-6">
        <div className="max-w-6xl mx-auto">
          {data.mission_title && (
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-6 text-gray-800">
              {data.mission_title}
            </h2>
          )}
          {data.mission_description && (
            <p className="text-lg text-center text-gray-700 leading-relaxed mb-10 max-w-3xl mx-auto">
              {data.mission_description}
            </p>
          )}
          {data.hero_image && (
            <Image 
              src={getImageUrl(data.hero_image)}
              alt="Mission in Action"
              width={1920}
              height={600}
              className="w-full h-auto rounded-lg shadow-xl"
            />
          )}
        </div>
      </section>

      {/* Projects Section */}
      <section className="w-full bg-white py-12 px-6">
        <div className="max-w-6xl mx-auto">
          {data.projects_heading && (
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-[#c41e7f]">
              {data.projects_heading}
            </h2>
          )}
          {data.Project_Image && (
            <Image 
              src={getImageUrl(data.Project_Image)}
              alt="Our Projects"
              width={1920}
              height={400}
              className="w-full h-auto rounded-lg shadow-lg"
            />
          )}
        </div>
      </section>

      {/* Our Vision Section */}
      {data.Our_Vision && (
        <section className="w-full bg-[#faf8f5] py-12 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-800">
              Our Vision
            </h2>
            <div className="prose prose-lg mx-auto text-gray-700">
              {data.Our_Vision}
            </div>
          </div>
        </section>
      )}

      {/* Call to Action */}
      <section className="bg-[#c41e7f] py-16 px-6 text-center text-white">
        <h2 className="text-4xl font-bold mb-4">Ready to Make a Difference?</h2>
        <p className="text-xl mb-10 max-w-2xl mx-auto opacity-90">
          Your donation creates real, trackable change in the lives of families 
          who are working hard to build a better future.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/donate"
            className="inline-block bg-white text-[#c41e7f] font-bold px-12 py-4 rounded-full hover:bg-gray-100 transition-colors text-lg"
          >
            Donate Now
          </Link>
          <Link 
            href="/mission"
            className="inline-block bg-transparent border-2 border-white text-white font-bold px-12 py-4 rounded-full hover:bg-white hover:text-[#c41e7f] transition-colors text-lg"
          >
            Learn More
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-300 py-10 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          <div>
            <h4 className="text-white font-bold text-lg mb-3">Koyta Hope & Rift Initiative</h4>
            <p className="text-sm leading-relaxed">
              A Canadian federally-incorporated nonprofit dedicated to reversing 
              generational harm and restoring dignity in Kipsigis communities.
            </p>
            <p className="text-xs mt-3 text-gray-500">Corporation No. 1747730-9</p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-3">Quick Links</h4>
            <div className="flex flex-col gap-2 text-sm">
              <Link href="/mission" className="hover:text-white">Our Mission</Link>
              <Link href="/volunteer" className="hover:text-white">Volunteer</Link>
              <Link href="/donate" className="hover:text-white">Donate</Link>
            </div>
          </div>
          <div>
            <h4 className="text-white font-bold mb-3">Contact</h4>
            <p className="text-sm">rolly@koyta.org</p>
            <p className="text-sm mt-2">Chilliwack, BC, Canada</p>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} Koyta Hope & Rift Initiative. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

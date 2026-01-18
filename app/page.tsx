import Image from "next/image";
import Link from "next/link";

const DIRECTUS_URL = "https://cms.koyta.org";

async function getHomepage() {
  const res = await fetch(`${DIRECTUS_URL}/items/HomePage`, {
    next: { revalidate: 60 }, // Revalidate every 60 seconds
  });
  const json = await res.json();
  return json.data;
}

function getImageUrl(imageId: string) {
  return `${DIRECTUS_URL}/assets/${imageId}`;
}

export default async function Home() {
  const data = await getHomepage();

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

      {/* Header Banner - Heart Image (contains logo, title, tagline, heart) */}
      {data.heart_image && (
        <header className="w-full">
          <Image 
            src={getImageUrl(data.heart_image)}
            alt={data.site_title || "Koyta Hope & Rift Initiative"}
            width={1920}
            height={200}
            className="w-full h-auto"
            priority
          />
        </header>
      )}

      {/* Gift Section Image */}
      {data.Gift_image && (
        <section className="w-full">
          <Image 
            src={getImageUrl(data.Gift_image)}
            alt="Your Gift Has a Journey"
            width={1920}
            height={400}
            className="w-full h-auto"
          />
        </section>
      )}

      {/* Hero Image */}
      {data.hero_image && (
        <section className="w-full">
          <Image 
            src={getImageUrl(data.hero_image)}
            alt="Communities asking for a hand up"
            width={1920}
            height={600}
            className="w-full h-auto"
          />
        </section>
      )}

      {/* Projects Image */}
      {data.Project_Image && (
        <section className="w-full">
          <Image 
            src={getImageUrl(data.Project_Image)}
            alt="Our Mission Critical Projects"
            width={1920}
            height={400}
            className="w-full h-auto"
          />
        </section>
      )}

      {/* Call to Action */}
      <section className="bg-[#c41e7f] py-12 px-6 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">Ready to Make a Difference?</h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
          Your donation creates real, trackable change in the lives of families 
          who are working hard to build a better future.
        </p>
        <Link 
          href="/donate"
          className="inline-block bg-white text-[#c41e7f] font-bold px-10 py-4 rounded-full hover:bg-gray-100 transition-colors"
        >
          Donate Now
        </Link>
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

import Hero from '@/components/Hero';

export default function CataloguesPage() {
  return (
    <main>
      <Hero
        title="Catalogues"
        subtitle="Download our latest product catalogues and brochures"
      />
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Product Catalogue 2024</h3>
              <p className="text-gray-600 mb-4">
                Comprehensive guide to our complete product range.
              </p>
              <button className="text-gray-900 font-medium hover:underline">
                Download PDF →
              </button>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Collections Brochure</h3>
              <p className="text-gray-600 mb-4">
                Explore our latest design collections and inspirations.
              </p>
              <button className="text-gray-900 font-medium hover:underline">
                Download PDF →
              </button>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Technical Catalogue</h3>
              <p className="text-gray-600 mb-4">
                Detailed technical specifications and installation guides.
              </p>
              <button className="text-gray-900 font-medium hover:underline">
                Download PDF →
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}


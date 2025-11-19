import Hero from '@/components/Hero';

export default function ShowerEnclosuresPage() {
  return (
    <main>
      <Hero
        title="Shower Enclosures"
        subtitle="Elegant shower enclosures for modern bathrooms"
      />
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Shower Enclosures</h3>
              <p className="text-gray-600">
                Premium shower enclosures designed to enhance your bathroom space with style and functionality.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}


import Hero from '@/components/Hero';

export default function UrinalsPage() {
  return (
    <main>
      <Hero
        title="Urinals"
        subtitle="Efficient urinal solutions for commercial and residential use"
      />
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Urinal</h3>
              <p className="text-gray-600">
                High-quality urinals designed for efficiency and hygiene.
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Covers for Urinals</h3>
              <p className="text-gray-600">
                Protective covers to maintain hygiene and cleanliness.
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Urinal Divisions</h3>
              <p className="text-gray-600">
                Privacy divisions for urinal installations.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}


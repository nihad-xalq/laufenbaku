import Hero from '@/components/Hero';

export default function ShowersPage() {
  return (
    <main>
      <Hero
        title="Showers"
        subtitle="Premium shower solutions for your bathroom"
      />
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Bath-shower Columns</h3>
              <p className="text-gray-600">
                Complete shower systems combining functionality and modern design.
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Shower Sets</h3>
              <p className="text-gray-600">
                Comprehensive shower solutions with all necessary components.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}


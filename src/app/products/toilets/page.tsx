import Hero from '@/components/Hero';

export default function ToiletsPage() {
  return (
    <main>
      <Hero
        title="Toilets"
        subtitle="Modern and efficient toilet solutions"
      />
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Wall-hung WCs</h3>
              <p className="text-gray-600">
                Space-saving wall-mounted toilets with modern design.
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Floorstanding WCs</h3>
              <p className="text-gray-600">
                Classic floor-mounted toilets with timeless appeal.
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Close-coupled WCs</h3>
              <p className="text-gray-600">
                Compact solutions combining tank and bowl seamlessly.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}


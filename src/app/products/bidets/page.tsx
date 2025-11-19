import Hero from '@/components/Hero';

export default function BidetsPage() {
  return (
    <main>
      <Hero
        title="Bidets"
        subtitle="Premium bidet solutions for modern bathrooms"
      />
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Floorstanding Bidets</h3>
              <p className="text-gray-600">
                Classic floor-mounted bidets with timeless elegance.
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Wall-hung Bidets</h3>
              <p className="text-gray-600">
                Modern wall-mounted bidets for contemporary bathroom designs.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}


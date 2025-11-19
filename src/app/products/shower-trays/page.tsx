import Hero from '@/components/Hero';

export default function ShowerTraysPage() {
  return (
    <main>
      <Hero
        title="Shower Trays"
        subtitle="Durable and stylish shower tray solutions"
      />
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Shower Trays</h3>
              <p className="text-gray-600">
                High-quality shower trays in various sizes and materials.
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Complements for Shower Trays</h3>
              <p className="text-gray-600">
                Accessories and complements to complete your shower installation.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}


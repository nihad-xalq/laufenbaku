import Hero from '@/components/Hero';

export default function InstallationSystemsPage() {
  return (
    <main>
      <Hero
        title="Installation Systems"
        subtitle="Professional installation systems for toilets and bathrooms"
      />
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Flush Plates</h3>
              <p className="text-gray-600">
                Modern flush plates with various designs and functionalities.
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Systems for Toilet</h3>
              <p className="text-gray-600">
                Complete installation systems for wall-hung and floorstanding toilets.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}


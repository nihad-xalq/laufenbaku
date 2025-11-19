import Hero from '@/components/Hero';

export default function SpecialArticlesPage() {
  return (
    <main>
      <Hero
        title="Special Articles"
        subtitle="Specialized bathroom solutions for unique requirements"
      />
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">School Washbasins</h3>
              <p className="text-gray-600">
                Durable and hygienic washbasins designed for educational facilities.
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Sinks</h3>
              <p className="text-gray-600">
                Functional sink solutions for various commercial and residential applications.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}


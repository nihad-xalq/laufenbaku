import Hero from '@/components/Hero';

export default function WashbasinsPage() {
  return (
    <main>
      <Hero
        title="Washbasins"
        subtitle="Elegant washbasins for every bathroom style"
      />
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Wall-hung Washbasins</h3>
              <p className="text-gray-600">
                Modern wall-mounted solutions for contemporary bathrooms.
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Vanity Washbasins</h3>
              <p className="text-gray-600">
                Integrated solutions combining style and functionality.
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Washbasin Bowls</h3>
              <p className="text-gray-600">
                Standalone bowls for versatile installation options.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}


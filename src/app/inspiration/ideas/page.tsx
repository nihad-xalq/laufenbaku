import Hero from '@/components/Hero';

export default function IdeasPage() {
  return (
    <main>
      <Hero
        title="Ideas"
        subtitle="Creative design ideas and bathroom inspirations"
      />
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Modern Minimalism</h3>
              <p className="text-gray-600">
                Clean lines and simple elegance for contemporary spaces.
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Luxury Design</h3>
              <p className="text-gray-600">
                Premium materials and sophisticated styling.
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Sustainable Living</h3>
              <p className="text-gray-600">
                Eco-friendly solutions for the modern bathroom.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}


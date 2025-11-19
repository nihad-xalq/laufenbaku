import Hero from '@/components/Hero';

export default function BathtubsPage() {
  return (
    <main>
      <Hero
        title="Bathtubs"
        subtitle="Luxurious bathtubs for ultimate relaxation"
      />
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Bathtubs</h3>
              <p className="text-gray-600">
                Premium bathtubs in various styles and sizes for your perfect bathroom.
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Neck Cushions</h3>
              <p className="text-gray-600">
                Comfortable neck cushions to enhance your bathing experience.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}


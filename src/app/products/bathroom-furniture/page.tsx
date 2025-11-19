import Hero from '@/components/Hero';

export default function BathroomFurniturePage() {
  return (
    <main>
      <Hero
        title="Bathroom Furniture"
        subtitle="Functional and stylish bathroom furniture solutions"
      />
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Vanity Units</h3>
              <p className="text-gray-600">
                Elegant vanity units combining storage and style for modern bathrooms.
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Drawer Elements</h3>
              <p className="text-gray-600">
                Functional drawer elements to maximize storage and organization.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}


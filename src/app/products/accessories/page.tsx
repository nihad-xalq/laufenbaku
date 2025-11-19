import Hero from '@/components/Hero';

export default function AccessoriesPage() {
  return (
    <main>
      <Hero
        title="Accessories"
        subtitle="Complete your bathroom with premium accessories"
      />
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Decoration</h3>
              <p className="text-gray-600">
                Decorative accessories to enhance your bathroom aesthetics.
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Shelves</h3>
              <p className="text-gray-600">
                Functional and stylish shelves for bathroom organization.
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Lights</h3>
              <p className="text-gray-600">
                Premium lighting solutions to illuminate your bathroom space.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}


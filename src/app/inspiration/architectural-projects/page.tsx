import Hero from '@/components/Hero';

export default function ArchitecturalProjectsPage() {
  return (
    <main>
      <Hero
        title="Architectural Projects"
        subtitle="Stunning projects featuring LAUFEN products"
      />
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Featured Projects</h3>
              <p className="text-gray-600">
                Explore our portfolio of architectural projects showcasing LAUFEN's premium bathroom solutions in various settings.
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Case Studies</h3>
              <p className="text-gray-600">
                Learn how architects and designers have integrated LAUFEN products into their projects.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}


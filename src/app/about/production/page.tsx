import Hero from '@/components/Hero';

export default function ProductionPage() {
  return (
    <main>
      <Hero
        title="Production"
        subtitle="Our manufacturing excellence and production facilities"
      />
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Manufacturing Excellence</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              LAUFEN's production facilities combine traditional craftsmanship with modern 
              manufacturing technologies. Our state-of-the-art factories ensure consistent quality 
              and precision in every product we create.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              We maintain strict quality control standards throughout the production process, from 
              raw material selection to final inspection. Our commitment to excellence is reflected 
              in every detail of our products.
            </p>
          </div>
        </div>
      </section>
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Quality Control</h3>
              <p className="text-gray-600">
                Rigorous testing and quality assurance at every stage of production.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Innovation</h3>
              <p className="text-gray-600">
                Continuous investment in new technologies and production methods.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Sustainability</h3>
              <p className="text-gray-600">
                Eco-friendly production processes and resource-efficient manufacturing.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Craftsmanship</h3>
              <p className="text-gray-600">
                Skilled artisans and precision engineering for exceptional results.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}


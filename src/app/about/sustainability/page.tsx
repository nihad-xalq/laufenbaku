import Hero from '@/components/Hero';

export default function SustainabilityPage() {
  return (
    <main>
      <Hero
        title="Sustainability"
        subtitle="Our commitment to environmental responsibility and sustainable practices"
      />
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Sustainability Mission</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              At LAUFEN, sustainability is at the core of everything we do. We are committed to 
              reducing our environmental impact while maintaining the highest standards of quality 
              and design. Our sustainability initiatives span from production processes to product 
              lifecycle management.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              We continuously work towards carbon neutrality, implement water-saving technologies, 
              and use sustainable materials wherever possible. Our products are designed for longevity, 
              reducing the need for replacement and minimizing waste.
            </p>
          </div>
        </div>
      </section>
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Carbon Neutral</h3>
              <p className="text-gray-600">
                Working towards carbon-neutral production processes.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Water Conservation</h3>
              <p className="text-gray-600">
                Products designed to minimize water consumption.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Sustainable Materials</h3>
              <p className="text-gray-600">
                Using eco-friendly and recycled materials.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}


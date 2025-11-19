import Hero from '@/components/Hero';

export default function AboutPage() {
  return (
    <main>
      <Hero
        title="About LAUFEN"
        subtitle="Craftsmanship, innovation, and sustainability since 1892"
      />
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Since 1892, we at LAUFEN have enabled bathroom experiences for both body and soul. 
              Today, we offer a holistic bathroom culture that emphasises sustainability, excellent 
              design, innovation, and technological leadership, all stemming from a long tradition 
              of high-quality craftsmanship.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Our brand's personality reflects a symbiosis of design, quality, and functionality. 
              As a premium brand under the Roca umbrella, we are proud to be one of the world's 
              leading manufacturers, supported by a global distribution network.
            </p>
          </div>
        </div>
      </section>
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Sustainability</h3>
              <p className="text-gray-600">
                Committed to environmental responsibility and sustainable practices.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Company</h3>
              <p className="text-gray-600">
                Learn more about our company history and values.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Production</h3>
              <p className="text-gray-600">
                Discover our manufacturing processes and quality standards.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}


import Hero from '@/components/Hero';

export default function ServicesPage() {
  return (
    <main>
      <Hero
        title="Services"
        subtitle="Comprehensive support and resources for your bathroom projects"
      />
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-8 bg-gray-50 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Contact</h3>
              <p className="text-gray-600">
                Get in touch with our team for personalized assistance and support.
              </p>
            </div>
            <div className="p-8 bg-gray-50 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Catalogues</h3>
              <p className="text-gray-600">
                Download our latest product catalogues and brochures.
              </p>
            </div>
            <div className="p-8 bg-gray-50 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Spare Parts</h3>
              <p className="text-gray-600">
                Find and order spare parts for your LAUFEN products.
              </p>
            </div>
            <div className="p-8 bg-gray-50 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Certificates</h3>
              <p className="text-gray-600">
                Access product certificates and declarations.
              </p>
            </div>
            <div className="p-8 bg-gray-50 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Download Centre</h3>
              <p className="text-gray-600">
                Download technical documents, CAD files, and resources.
              </p>
            </div>
            <div className="p-8 bg-gray-50 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">BIM</h3>
              <p className="text-gray-600">
                Access Building Information Modeling resources.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}


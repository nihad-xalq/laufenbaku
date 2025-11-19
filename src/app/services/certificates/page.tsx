import Hero from '@/components/Hero';

export default function CertificatesPage() {
  return (
    <main>
      <Hero
        title="Certificates"
        subtitle="Access product certificates and declarations"
      />
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Quality Certificates</h3>
              <p className="text-gray-600 mb-4">
                ISO certifications and quality assurance documents.
              </p>
              <button className="text-gray-900 font-medium hover:underline">
                View Certificates →
              </button>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Environmental Declarations</h3>
              <p className="text-gray-600 mb-4">
                Environmental Product Declarations (EPD) and sustainability certifications.
              </p>
              <button className="text-gray-900 font-medium hover:underline">
                View Declarations →
              </button>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Safety Standards</h3>
              <p className="text-gray-600 mb-4">
                Compliance certificates for international safety standards.
              </p>
              <button className="text-gray-900 font-medium hover:underline">
                View Standards →
              </button>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Warranty Information</h3>
              <p className="text-gray-600 mb-4">
                Warranty terms and conditions for all LAUFEN products.
              </p>
              <button className="text-gray-900 font-medium hover:underline">
                View Warranty →
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}


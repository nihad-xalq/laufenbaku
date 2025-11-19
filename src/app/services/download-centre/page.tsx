import Hero from '@/components/Hero';

export default function DownloadCentrePage() {
  return (
    <main>
      <Hero
        title="Download Centre"
        subtitle="Download technical documents, CAD files, and resources"
      />
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">CAD Files</h3>
              <p className="text-gray-600 mb-4">
                Download 2D and 3D CAD drawings for all products.
              </p>
              <button className="text-gray-900 font-medium hover:underline">
                Browse CAD Files →
              </button>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Technical Data Sheets</h3>
              <p className="text-gray-600 mb-4">
                Detailed technical specifications and installation instructions.
              </p>
              <button className="text-gray-900 font-medium hover:underline">
                Browse Data Sheets →
              </button>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Installation Guides</h3>
              <p className="text-gray-600 mb-4">
                Step-by-step installation and maintenance guides.
              </p>
              <button className="text-gray-900 font-medium hover:underline">
                Browse Guides →
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}


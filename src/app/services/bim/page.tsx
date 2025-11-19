import Hero from '@/components/Hero';

export default function BIMPage() {
  return (
    <main>
      <Hero
        title="BIM"
        subtitle="Building Information Modeling resources and files"
      />
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">BIM Objects Library</h3>
              <p className="text-gray-600 mb-6">
                Access our comprehensive library of BIM objects for all LAUFEN products. Our BIM files 
                include detailed product information, dimensions, and specifications to streamline your 
                design and planning process.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <button className="bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors">
                  Browse BIM Objects
                </button>
                <button className="border border-gray-900 text-gray-900 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors">
                  Download BIM Library
                </button>
              </div>
            </div>
            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Supported Formats</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Revit (.rfa, .rvt)</li>
                <li>• ArchiCAD (.gsm)</li>
                <li>• IFC (.ifc)</li>
                <li>• DWG (.dwg)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}


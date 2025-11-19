import Hero from '@/components/Hero';

export default function SparePartsPage() {
  return (
    <main>
      <Hero
        title="Spare Parts"
        subtitle="Find and order spare parts for your LAUFEN products"
      />
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Order Spare Parts</h3>
              <p className="text-gray-600 mb-6">
                Search for spare parts by product model number or browse by category. Our comprehensive 
                spare parts service ensures your LAUFEN products continue to perform at their best.
              </p>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Product Model Number
                  </label>
                  <input
                    type="text"
                    placeholder="Enter model number"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
                  />
                </div>
                <button className="bg-gray-900 text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition-colors">
                  Search Parts
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}


import Hero from '@/components/Hero';

export default function PressAreaPage() {
  return (
    <main>
      <Hero
        title="Press Area"
        subtitle="Media resources, press releases, and company news"
      />
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Press Releases</h3>
              <p className="text-gray-600 mb-6">
                Stay updated with our latest company news, product launches, and announcements.
              </p>
              <button className="text-gray-900 font-medium hover:underline">
                View All Press Releases →
              </button>
            </div>
            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Media Kit</h3>
              <p className="text-gray-600 mb-6">
                Download high-resolution images, logos, and brand guidelines for media use.
              </p>
              <button className="text-gray-900 font-medium hover:underline">
                Download Media Kit →
              </button>
            </div>
            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Contact Press Office</h3>
              <p className="text-gray-600 mb-4">
                For media inquiries, interviews, or press information, please contact:
              </p>
              <p className="text-gray-600">
                <strong>Email:</strong> press@laufen.com<br />
                <strong>Phone:</strong> +1 (555) 123-4569
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}


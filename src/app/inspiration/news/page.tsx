import Hero from '@/components/Hero';

export default function NewsPage() {
  return (
    <main>
      <Hero
        title="News"
        subtitle="Latest updates and announcements from LAUFEN"
      />
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            <article className="border-b border-gray-200 pb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Latest News</h2>
              <p className="text-gray-600 leading-relaxed">
                Stay informed about our latest product launches, events, and company updates.
              </p>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}


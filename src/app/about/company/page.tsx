import Hero from '@/components/Hero';

export default function CompanyPage() {
  return (
    <main>
      <Hero
        title="Company"
        subtitle="Learn about LAUFEN's history, values, and global presence"
      />
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">About LAUFEN</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Since 1892, LAUFEN has been a leading manufacturer of premium bathroom products. 
              Founded in Switzerland, we have built a reputation for exceptional craftsmanship, 
              innovative design, and uncompromising quality.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              As part of the Roca Group, we benefit from a global network while maintaining our 
              unique brand identity and Swiss heritage. Our products are distributed worldwide, 
              bringing premium bathroom experiences to customers across the globe.
            </p>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Our Values</h3>
            <ul className="text-gray-600 space-y-2">
              <li>• Excellence in craftsmanship and design</li>
              <li>• Innovation and technological leadership</li>
              <li>• Sustainability and environmental responsibility</li>
              <li>• Customer satisfaction and service</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}


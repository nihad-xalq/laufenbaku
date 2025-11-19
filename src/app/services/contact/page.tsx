import Hero from "@/components/Hero";

export default function ContactPage() {
  return (
    <main>
      <Hero
        title="Contact"
        subtitle="Get in touch with our team for personalized assistance and support"
      />
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Customer Service
              </h3>
              <p className="text-gray-600 mb-4">
                Our dedicated customer service team is here to help you with any
                questions or concerns.
              </p>
              <p className="text-gray-600">
                <strong>Email:</strong> customer.service@laufen.com
                <br />
                <strong>Phone:</strong> +1 (555) 123-4567
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Sales Inquiries
              </h3>
              <p className="text-gray-600 mb-4">
                For sales inquiries, product information, or to schedule a
                consultation.
              </p>
              <p className="text-gray-600">
                <strong>Email:</strong> sales@laufen.com
                <br />
                <strong>Phone:</strong> +1 (555) 123-4568
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

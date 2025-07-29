import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | Pureluxe Beauty',
  description: 'Learn how Pureluxe Beauty protects your personal data and privacy when you use our services.',
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
              Privacy Policy
            </h1>
            
            <div className="prose prose-lg max-w-none">
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  1. Introduction
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Pureluxe Beauty respects your privacy and is committed to protecting your personal data. 
                  This privacy policy will inform you as to how we look after your personal data when you 
                  visit our website (regardless of where you visit it from) and tell you about your privacy 
                  rights and how the law protects you. We are dedicated to maintaining the confidentiality 
                  and security of your information while providing you with exceptional beauty products and services.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  2. Data We Collect About You
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  We may collect, use, store and transfer different kinds of personal data about you, 
                  including but not limited to:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li><strong>Identity Data:</strong> first name, last name, username or similar identifier.</li>
                  <li><strong>Contact Data:</strong> billing address, delivery address, email address, and telephone numbers.</li>
                  <li><strong>Financial Data:</strong> bank account and payment card details (processed securely through our payment partners).</li>
                  <li><strong>Transaction Data:</strong> details about payments to and from you and other details of beauty products and services you have purchased from us.</li>
                  <li><strong>Communication Data:</strong> your preferences for receiving marketing communications and any correspondence with our customer service team.</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  3. How We Use Your Personal Data
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  We will only use your personal data when the law allows us to. Most commonly, 
                  we will use your personal data in the following circumstances:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>To process and fulfill your beauty product orders and service bookings</li>
                  <li>To communicate with you about your orders, appointments, and inquiries</li>
                  <li>To provide customer support and respond to your questions</li>
                  <li>To manage our relationship with you and improve our services</li>
                  <li>To send you relevant beauty tips, product recommendations, and promotional offers (only with your consent)</li>
                  <li>To comply with legal obligations and protect our business interests</li>
                </ul>
                <p className="text-gray-600 leading-relaxed mt-4">
                  <strong>Important:</strong> Your data is used solely for communication and order processing purposes. 
                  We do not sell, rent, or share your personal information with third-party companies for their marketing purposes.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  4. Disclosures of Your Personal Data
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  We may share your personal data with trusted external third parties only when necessary 
                  for business operations, including:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Delivery services for shipping your beauty products</li>
                  <li>Payment processing services to handle secure transactions</li>
                  <li>Customer service platforms to provide support</li>
                  <li>Legal authorities when required by law</li>
                </ul>
                <p className="text-gray-600 leading-relaxed mt-4">
                  All third-party partners are carefully selected and required to maintain the same level 
                  of data protection as we do. They are only permitted to process your data for the specific 
                  purposes outlined and are prohibited from using it for any other purpose.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  5. Data Security
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  We have implemented appropriate security measures to prevent your personal data from being 
                  accidentally lost, used or accessed in an unauthorized way, altered or disclosed. Our security 
                  measures include encrypted data transmission, secure servers, and regular security audits. 
                  Access to your personal data is limited to authorized personnel who need it to perform their duties.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  6. Data Retention
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  We will only retain your personal data for as long as necessary to fulfill the purposes 
                  we collected it for, including for the purposes of satisfying any legal, accounting, or 
                  reporting requirements. Typically, we retain customer data for up to 7 years after your 
                  last interaction with us, unless a longer retention period is required by law.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  7. Your Legal Rights
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Under certain circumstances, you have rights under data protection laws in relation 
                  to your personal data, including:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>The right to request access to your personal data</li>
                  <li>The right to request correction of inaccurate data</li>
                  <li>The right to request erasure of your personal data</li>
                  <li>The right to request transfer of your personal data</li>
                  <li>The right to withdraw consent for marketing communications</li>
                  <li>The right to object to processing of your personal data</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  8. Third-Party Links
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Our website may include links to third-party websites, social media platforms, and applications. 
                  Clicking on those links may allow third parties to collect or share data about you. We do not 
                  control these third-party websites and are not responsible for their privacy statements. 
                  We encourage you to read the privacy policies of any third-party sites you visit.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  9. WhatsApp Communication
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  When you contact us through WhatsApp for product inquiries or customer support, your messages 
                  and contact information are subject to WhatsApp&apos;s privacy policy in addition to ours. We use 
                  WhatsApp communications solely for customer service purposes and do not share this information 
                  with third parties.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  10. Changes to the Privacy Policy
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  We reserve the right to update this privacy policy at any time to reflect changes in our 
                  practices or legal requirements. We will notify you of any significant changes by posting 
                  the new privacy policy on this page and updating the &quot;Last Updated&quot; date below. We encourage 
                  you to review this policy periodically.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  11. Contact Us
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  If you have any questions about this privacy policy, wish to exercise your rights, 
                  or have concerns about how we handle your personal data, please contact us:
                </p>
                <div className="bg-pink-50 p-6 rounded-lg">
                  <p className="text-gray-700 mb-2">
                    <strong>Email:</strong> help@pureluxebeauti.com
                  </p>
                  <p className="text-gray-700 mb-2">
                    <strong>WhatsApp:</strong> Available through our website contact form
                  </p>
                  <p className="text-gray-700">
                    <strong>Response Time:</strong> We aim to respond to all privacy-related inquiries within 48 hours
                  </p>
                </div>
              </section>

              <div className="border-t pt-6 mt-8">
                <p className="text-sm text-gray-500 text-center">
                  Last Updated: {new Date().toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
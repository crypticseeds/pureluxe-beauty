import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service | Pureluxe Beauty',
  description: 'Read the terms and conditions for using Pureluxe Beauty services and purchasing our premium beauty products.',
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
              Terms of Service
            </h1>
            
            <div className="prose prose-lg max-w-none">
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  1. Introduction
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Welcome to Pureluxe Beauty, a leading retailer in the premium beauty and skincare industry. 
                  By accessing our website, mobile application, or using our services, you agree to these 
                  Terms and Conditions, which are designed to ensure a smooth and secure shopping experience 
                  for all our customers. These terms govern your use of our platform and the purchase of our 
                  beauty products and services.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  2. General Conditions
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  We reserve the right to refuse service to anyone for any reason at any time. This includes 
                  but is not limited to situations involving fraudulent activity, violation of these terms, 
                  or behavior that may harm other customers or our business operations.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  You understand that your content (including personal information, reviews, and communications) 
                  may be transferred unencrypted and involve transmissions over various networks. We implement 
                  security measures to protect your data, but you acknowledge the inherent risks of internet 
                  communication.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  3. Products and Services
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Pureluxe Beauty offers a comprehensive range of premium beauty and skincare products, 
                  including but not limited to:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                  <li>Skincare products (serums, creams, cleansers, treatments)</li>
                  <li>Beauty services (facials, consultations, treatments)</li>
                  <li>Body care products and accessories</li>
                  <li>Professional beauty consultations and advice</li>
                </ul>
                <p className="text-gray-600 leading-relaxed">
                  While we strive for accuracy in all product information, occasionally there may be 
                  information on our site that contains typographical errors, inaccuracies, or omissions 
                  related to product descriptions, pricing, promotions, offers, and availability. We reserve 
                  the right to correct such errors and update information as needed.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  4. Pricing and Payment
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  All prices are displayed in Nigerian Naira (₦) and are subject to change without notice. 
                  We reserve the right to modify prices at any time, though price changes will not affect 
                  orders already confirmed and paid for.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  We accept various payment methods, including:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                  <li>Credit and debit cards</li>
                  <li>Mobile payments and digital wallets</li>
                  <li>Bank transfers</li>
                  <li>Other secure payment methods as available</li>
                </ul>
                <p className="text-gray-600 leading-relaxed">
                  All payments are processed through secure payment gateways to ensure the safety of your 
                  financial information. By providing payment information, you represent that you are 
                  authorized to use the payment method.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  5. Shipping and Delivery
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  We deliver across Nigeria and select locations in West Africa. Shipping costs and delivery 
                  times vary based on:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                  <li>Delivery location and distance</li>
                  <li>Product size, weight, and special handling requirements</li>
                  <li>Selected shipping method</li>
                  <li>Current demand and seasonal factors</li>
                </ul>
                <p className="text-gray-600 leading-relaxed">
                  While we strive to meet estimated delivery times, we are not liable for any delays in 
                  delivery caused by factors beyond our control, including but not limited to weather 
                  conditions, transportation issues, or customs delays for international shipments.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  6. Return and Refund Policy
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Eligible beauty products can be returned within our specified return period for exchange 
                  or refund, subject to our Return Policy. Returned items must be:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                  <li>Unused and in original condition</li>
                  <li>In original packaging with all seals intact</li>
                  <li>Accompanied by proof of purchase</li>
                  <li>Returned within the specified time frame</li>
                </ul>
                <p className="text-gray-600 leading-relaxed">
                  Some beauty items may not be returnable due to health protection, hygiene reasons, or 
                  the nature of the product. Please refer to our detailed Return Policy for complete 
                  information on returns and refunds.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  7. User Comments and Feedback
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  We welcome and encourage user reviews, comments, and feedback about our products and 
                  services. Users may post comments and other content as long as the content is not:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                  <li>Illegal, obscene, threatening, or defamatory</li>
                  <li>Invasive of privacy or infringing of intellectual property rights</li>
                  <li>Injurious to third parties or containing false information</li>
                  <li>Spam, promotional content, or unrelated to our products/services</li>
                  <li>Discriminatory or hateful in nature</li>
                </ul>
                <p className="text-gray-600 leading-relaxed">
                  We reserve the right to remove any content that violates these guidelines and to 
                  terminate accounts of users who repeatedly violate our community standards.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  8. Personal Information
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Your submission of personal information through our website, mobile app, or in-store 
                  is governed by our Privacy Policy. We are committed to protecting your privacy and 
                  handling your personal data responsibly. Please review our Privacy Policy to understand 
                  how we collect, use, and protect your information.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  9. Errors, Inaccuracies, and Omissions
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Occasionally there may be information on our website or in our communications that 
                  contains typographical errors, inaccuracies, or omissions that may relate to product 
                  descriptions, pricing, promotions, offers, product shipping charges, transit times, 
                  and availability. We reserve the right to correct any errors, inaccuracies, or omissions, 
                  and to change or update information or cancel orders if any information is inaccurate 
                  at any time without prior notice (including after you have submitted your order).
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  10. Prohibited Uses
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  In addition to other prohibitions as set forth in these Terms of Service, you are 
                  prohibited from using our site or services:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                  <li>For any unlawful purpose or to solicit others to perform unlawful acts</li>
                  <li>To violate any international, federal, provincial, or state regulations, laws, or ordinances</li>
                  <li>To infringe upon or violate our intellectual property rights or the intellectual property rights of others</li>
                  <li>To harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate</li>
                  <li>To submit false or misleading information</li>
                  <li>To upload or transmit viruses or any other type of malicious code</li>
                  <li>To collect or track personal information of others</li>
                  <li>To spam, phish, pharm, pretext, spider, crawl, or scrape</li>
                  <li>For any obscene or immoral purpose</li>
                  <li>To interfere with or circumvent security features of our service</li>
                </ul>
                <p className="text-gray-600 leading-relaxed">
                  We reserve the right to terminate your use of our service for violating any of these 
                  prohibited uses.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  11. Intellectual Property
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  All content on our website, including but not limited to text, graphics, logos, images, 
                  product descriptions, and software, is the property of Pureluxe Beauty or its content 
                  suppliers and is protected by intellectual property laws. You may not reproduce, 
                  distribute, or create derivative works from our content without explicit written permission.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  12. Limitation of Liability
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Pureluxe Beauty shall not be liable for any direct, indirect, incidental, special, 
                  consequential, or punitive damages resulting from your use of our products or services, 
                  even if we have been advised of the possibility of such damages. Our total liability 
                  to you for any claim shall not exceed the amount you paid for the specific product 
                  or service giving rise to the claim.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  13. Changes to Terms and Conditions
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  We reserve the right to update, change, or replace any part of these Terms and Conditions 
                  by posting updates and changes to our website. It is your responsibility to check this 
                  page periodically for changes. Your continued use of or access to our website following 
                  the posting of any changes constitutes acceptance of those changes.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  14. Governing Law
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  These Terms and Conditions and any separate agreements whereby we provide you services 
                  shall be governed by and construed in accordance with the laws of Nigeria. Any disputes 
                  arising from these terms shall be resolved in the appropriate courts of Lagos State, Nigeria.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  15. Contact Information
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Questions about these Terms and Conditions should be sent to us at:
                </p>
                <div className="bg-pink-50 p-6 rounded-lg">
                  <p className="text-gray-700 mb-2">
                    <strong>Email:</strong> info@pureluxebeauty.com
                  </p>
                  <p className="text-gray-700 mb-2">
                    <strong>Phone:</strong> +234 906 613 0009
                  </p>
                  <p className="text-gray-700 mb-2">
                    <strong>Address:</strong> No 23, MTN Office Samulus Plaza, Plot 5 A. I. T. Rd, Alagbado, Lagos, Nigeria
                  </p>
                  <p className="text-gray-700">
                    <strong>WhatsApp:</strong> Available through our website contact form
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
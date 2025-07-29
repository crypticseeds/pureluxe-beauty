import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Return Policy | Pureluxe Beauty',
  description: 'Learn about Pureluxe Beauty return and refund policy for beauty products and services.',
}

export default function ReturnsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
              Return Policy
            </h1>
            
            <div className="prose prose-lg max-w-none">
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  Return Window
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Our refund and returns policy lasts 7 days. If 7 days have passed since your purchase, 
                  we can't offer you a full refund or exchange. We understand that beauty products are 
                  personal, so we've designed our policy to give you adequate time to evaluate your purchase.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  Return Eligibility
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  To be eligible for a return, your beauty product must meet the following conditions:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Item must be unused and in the same condition that you received it</li>
                  <li>Must be in the original packaging with all seals intact</li>
                  <li>Include all original accessories, instructions, and documentation</li>
                  <li>Must have a receipt or proof of purchase</li>
                </ul>
                <p className="text-gray-600 leading-relaxed mt-4">
                  <strong>Important:</strong> Please do not send your purchase back to the manufacturer. 
                  All returns must be processed through Pureluxe Beauty directly.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  Refund Policy
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  We do not offer refunds or accept returns and/or exchanges except for the following circumstances:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Items damaged at the point of delivery</li>
                  <li>Lost parcels during transit</li>
                  <li>Items that are defective upon arrival</li>
                </ul>
                <p className="text-gray-600 leading-relaxed mt-4">
                  We urge you to carefully inspect your package upon delivery to ensure the beauty products 
                  are intact and undamaged. In the unlikely event that the item(s) ordered is damaged, 
                  please <strong>DO NOT accept the item(s)</strong> and contact us within 24 hours by 
                  telephone or email.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  Lost Parcels
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Where your parcel is lost in transit, you will be notified promptly of this development 
                  as soon as we become aware of it. Upon such notification, we will proceed immediately to 
                  rectify the issue. If after 5 working days from the date you were notified your parcel 
                  still cannot be found, a full refund will be paid into your bank account or original 
                  method of payment.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  Return Process
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Once your return is received and inspected by our quality team, we will send you an 
                  email to notify you that we have received your returned item. We will also notify you 
                  of the approval or rejection of your refund within 2-3 business days.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  If you are approved, then your refund will be processed, and a credit will automatically 
                  be applied to your account or original method of payment, within 5-7 business days.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  Late or Missing Refunds
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  If you haven't received a refund yet, please follow these steps:
                </p>
                <ol className="list-decimal pl-6 text-gray-600 space-y-2">
                  <li>First check your bank account again</li>
                  <li>Contact your credit card company - it may take some time before your refund is officially posted</li>
                  <li>Contact your bank - there is often some processing time before a refund is posted</li>
                  <li>If you've done all of this and still haven't received your refund, please contact us</li>
                </ol>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  Sale Items
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Only regular priced beauty products may be refunded. Sale items, promotional products, 
                  and discounted items cannot be refunded unless they arrive damaged or defective.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  Exchanges
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  We only replace items if they are defective or damaged upon arrival. If you need to 
                  exchange a beauty product for the same item due to damage or defect, please contact us 
                  immediately. We do not offer exchanges for different products or shades.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  Gift Returns
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  <strong>Items marked as gifts:</strong> If the item was marked as a gift when purchased 
                  and shipped directly to you, you'll receive a gift credit for the value of your return. 
                  Once the returned item is received, a gift certificate will be mailed to you.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  <strong>Items not marked as gifts:</strong> If the item wasn't marked as a gift when 
                  purchased, or the gift giver had the order shipped to themselves to give to you later, 
                  we will send a refund to the gift giver and they will find out about your return.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  Shipping Returns
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  To return your beauty product, you should mail your product to:
                </p>
                <div className="bg-pink-50 p-6 rounded-lg mb-4">
                  <p className="text-gray-700 font-medium">
                    <strong>Pureluxe Beauty Returns Department</strong><br />
                    No 23, MTN Office Samulus Plaza, Plot 5 A. I. T. Rd<br />
                    Alagbado, Lagos<br />
                    Nigeria
                  </p>
                </div>
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
                  <p className="text-yellow-800">
                    <strong>Important Return Shipping Information:</strong>
                  </p>
                  <ul className="list-disc pl-6 text-yellow-700 mt-2 space-y-1">
                    <li>You will be responsible for paying for your own shipping costs for returning your item</li>
                    <li>Shipping costs are non-refundable</li>
                    <li>If you receive a refund, the cost of return shipping will be deducted from your refund</li>
                    <li>Depending on where you live, the time it may take for your exchanged product to reach you may vary</li>
                  </ul>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  If you are returning expensive beauty items, you may consider using a trackable shipping 
                  service or purchasing shipping insurance. We don't guarantee that we will receive your 
                  returned item if sent without tracking.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  Beauty Services Returns
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Due to the nature of beauty services (facials, treatments, consultations), these cannot 
                  be returned once performed. However, if you are unsatisfied with a service, please contact 
                  us within 24 hours and we will work with you to address your concerns.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  Need Help?
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Contact us for questions related to refunds and returns:
                </p>
                <div className="bg-pink-50 p-6 rounded-lg">
                  <p className="text-gray-700 mb-2">
                    <strong>Email:</strong> info@pureluxebeauty.com
                  </p>
                  <p className="text-gray-700 mb-2">
                    <strong>Phone:</strong> +234 906 613 0009
                  </p>
                  <p className="text-gray-700 mb-2">
                    <strong>WhatsApp:</strong> Available through our website contact form
                  </p>
                  <p className="text-gray-700">
                    <strong>Response Time:</strong> We aim to respond to all return-related inquiries within 24 hours
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
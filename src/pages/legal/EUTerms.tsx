interface EUTermsProps {
  onNavigate: (page: string) => void;
}

const EUTerms = ({ onNavigate }: EUTermsProps) => {
  return (
    <div className="max-w-4xl mx-auto px-5 py-12">
      <div className="bg-white border border-gray-200 rounded-2xl shadow-lg p-8">
        <div className="mb-8">
          <span className="text-3xl">🇪🇺</span>
          <h1 className="text-3xl font-bold text-gray-900 mt-2">Terms & Conditions</h1>
          <p className="text-sm text-gray-600 mt-2">European Union</p>
          <p className="text-xs text-gray-500 mt-1">Last Updated: January 2025</p>
        </div>

        <div className="prose prose-sm max-w-none">
          <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-3">1. Agreement to Terms</h2>
          <p className="text-gray-700 mb-4">
            By accessing and using this job posting platform ("Service"), you agree to be bound by these Terms & Conditions
            and all applicable laws and regulations of the European Union and your country of residence. If you do not agree
            with any of these terms, you are prohibited from using this Service.
          </p>

          <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-3">2. Service Description</h2>
          <p className="text-gray-700 mb-4">
            Our Service connects customers seeking tradespeople and professionals with qualified service providers throughout
            the European Union. We facilitate the initial connection but are not party to any agreement between customers and
            service providers.
          </p>

          <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-3">3. User Obligations</h2>
          <p className="text-gray-700 mb-2">When using our Service, you agree to:</p>
          <ul className="list-disc pl-6 text-gray-700 mb-4">
            <li>Provide accurate and truthful information</li>
            <li>Not impersonate any person or entity</li>
            <li>Not post misleading or fraudulent job requests</li>
            <li>Comply with all applicable EU and national laws</li>
            <li>Not use the Service for any unlawful purpose</li>
            <li>Respect the rights of other users and service providers</li>
          </ul>

          <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-3">4. Data Protection (GDPR)</h2>
          <p className="text-gray-700 mb-4">
            We process your personal data in strict accordance with the General Data Protection Regulation (GDPR) (EU) 2016/679.
            Please refer to our Privacy Policy for detailed information about how we collect, use, and protect your personal data,
            including your rights under GDPR.
          </p>

          <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-3">5. Quote Process</h2>
          <p className="text-gray-700 mb-4">
            Once you submit a job posting, your details will be shared with up to 3 relevant professionals in your region.
            We aim to facilitate quotes within 24-48 hours. However, we do not guarantee that you will receive quotes, nor do
            we endorse or guarantee the quality of work from any service provider.
          </p>

          <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-3">6. Payment and Pricing</h2>
          <p className="text-gray-700 mb-4">
            Job posting through our platform is free for customers. Any financial arrangements, including pricing and payment
            terms, are strictly between you and the service provider you choose to work with. We are not responsible for any
            disputes regarding payment or pricing. Prices are quoted in Euros (EUR) unless otherwise stated.
          </p>

          <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-3">7. Consumer Rights (EU Consumer Protection)</h2>
          <p className="text-gray-700 mb-4">
            As an EU consumer, you have specific rights under EU Consumer Protection Directives, including:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-4">
            <li>Right to clear and transparent information</li>
            <li>Right to fair contract terms</li>
            <li>Protection against unfair commercial practices</li>
            <li>Right to effective remedies</li>
          </ul>
          <p className="text-gray-700 mb-4">
            Nothing in these Terms & Conditions affects your statutory rights under EU consumer protection law.
          </p>

          <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-3">8. Limitation of Liability</h2>
          <p className="text-gray-700 mb-4">
            To the extent permitted by applicable EU and national laws, we shall not be liable for any indirect, incidental,
            special, consequential, or punitive damages resulting from your use of the Service. We do not accept liability for
            the quality, safety, or legality of work performed by service providers.
          </p>
          <p className="text-gray-700 mb-4">
            This limitation does not apply to liability that cannot be excluded or limited under mandatory EU consumer protection law.
          </p>

          <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-3">9. Cross-Border Services</h2>
          <p className="text-gray-700 mb-4">
            Our Service operates across EU member states. When engaging with service providers in different EU countries,
            you acknowledge that different national regulations may apply to the services provided.
          </p>

          <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-3">10. Intellectual Property</h2>
          <p className="text-gray-700 mb-4">
            All content on this platform, including text, graphics, logos, and software, is the property of Job Post Platform
            or its licensors and is protected by EU and international intellectual property laws.
          </p>

          <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-3">11. Dispute Resolution</h2>
          <p className="text-gray-700 mb-4">
            In accordance with EU Regulation on Online Dispute Resolution, EU consumers can access the European Commission's
            online dispute resolution platform at: <a href="https://ec.europa.eu/consumers/odr" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">https://ec.europa.eu/consumers/odr</a>
          </p>

          <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-3">12. Termination</h2>
          <p className="text-gray-700 mb-4">
            We reserve the right to terminate or suspend your access to the Service for any breach of these Terms & Conditions,
            subject to applicable consumer protection laws in your jurisdiction.
          </p>

          <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-3">13. Governing Law and Jurisdiction</h2>
          <p className="text-gray-700 mb-4">
            These Terms & Conditions are governed by EU law and the laws of your country of residence. Any disputes shall be
            subject to the jurisdiction of the courts in your country of residence, in accordance with EU consumer protection rules.
          </p>

          <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-3">14. Changes to Terms</h2>
          <p className="text-gray-700 mb-4">
            We reserve the right to modify these Terms & Conditions at any time. Significant changes will be notified to you
            in advance. Your continued use of the Service after changes are posted constitutes acceptance of the modified terms.
          </p>

          <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-3">15. Contact Information</h2>
          <p className="text-gray-700 mb-4">
            If you have any questions about these Terms & Conditions, please contact us at:
          </p>
          <p className="text-gray-700 mb-2">
            <strong>Email:</strong> legal-eu@jobpostplatform.com<br />
            <strong>Address:</strong> Job Post Platform EU, Brussels, Belgium
          </p>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-200">
          <button
            onClick={() => onNavigate('job-post-eu')}
            className="px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-all"
          >
            ← Back to EU Form
          </button>
        </div>
      </div>
    </div>
  );
};

export default EUTerms;

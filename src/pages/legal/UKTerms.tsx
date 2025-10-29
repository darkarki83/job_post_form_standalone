interface UKTermsProps {
  onNavigate: (page: string) => void;
}

const UKTerms = ({ onNavigate }: UKTermsProps) => {
  return (
    <div className="max-w-4xl mx-auto px-5 py-12">
      <div className="bg-white border border-gray-200 rounded-2xl shadow-lg p-8">
        <div className="mb-8">
          <span className="text-3xl">🇬🇧</span>
          <h1 className="text-3xl font-bold text-gray-900 mt-2">Terms & Conditions</h1>
          <p className="text-sm text-gray-600 mt-2">United Kingdom</p>
          <p className="text-xs text-gray-500 mt-1">Last Updated: January 2025</p>
        </div>

        <div className="prose prose-sm max-w-none">
          <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-3">1. Agreement to Terms</h2>
          <p className="text-gray-700 mb-4">
            By accessing and using this job posting platform ("Service"), you agree to be bound by these Terms & Conditions
            and all applicable laws and regulations of the United Kingdom. If you do not agree with any of these terms,
            you are prohibited from using this Service.
          </p>

          <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-3">2. Service Description</h2>
          <p className="text-gray-700 mb-4">
            Our Service connects customers seeking tradespeople and professionals with qualified service providers throughout
            the United Kingdom. We facilitate the initial connection but are not party to any agreement between customers and
            service providers.
          </p>

          <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-3">3. User Obligations</h2>
          <p className="text-gray-700 mb-2">When using our Service, you agree to:</p>
          <ul className="list-disc pl-6 text-gray-700 mb-4">
            <li>Provide accurate and truthful information</li>
            <li>Not impersonate any person or entity</li>
            <li>Not post misleading or fraudulent job requests</li>
            <li>Comply with all applicable UK laws and regulations</li>
            <li>Not use the Service for any unlawful purpose</li>
          </ul>

          <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-3">4. Data Protection</h2>
          <p className="text-gray-700 mb-4">
            We process your personal data in accordance with the UK General Data Protection Regulation (UK GDPR) and the
            Data Protection Act 2018. Please refer to our Privacy Policy for detailed information about how we collect,
            use, and protect your personal data.
          </p>

          <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-3">5. Quote Process</h2>
          <p className="text-gray-700 mb-4">
            Once you submit a job posting, your details will be shared with up to 3 relevant tradespeople or service providers.
            We aim to facilitate quotes within 24-48 hours. However, we do not guarantee that you will receive quotes, nor do
            we endorse or guarantee the quality of work from any service provider.
          </p>

          <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-3">6. Payment and Pricing</h2>
          <p className="text-gray-700 mb-4">
            Job posting through our platform is free for customers. Any financial arrangements, including pricing and payment
            terms, are strictly between you and the service provider you choose to work with. We are not responsible for any
            disputes regarding payment or pricing. All prices quoted by tradespeople are in British Pounds Sterling (GBP).
          </p>

          <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-3">7. Limitation of Liability</h2>
          <p className="text-gray-700 mb-4">
            To the fullest extent permitted by UK law, we shall not be liable for any indirect, incidental, special,
            consequential, or punitive damages resulting from your use of the Service. We do not accept liability for the
            quality, safety, or legality of work performed by service providers.
          </p>

          <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-3">8. Consumer Rights</h2>
          <p className="text-gray-700 mb-4">
            Nothing in these Terms & Conditions affects your statutory rights under UK consumer protection law, including
            the Consumer Rights Act 2015. You may have additional rights that cannot be excluded or limited by these terms.
          </p>

          <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-3">9. Intellectual Property</h2>
          <p className="text-gray-700 mb-4">
            All content on this platform, including text, graphics, logos, and software, is the property of Job Post Platform
            or its licensors and is protected by UK and international copyright laws.
          </p>

          <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-3">10. Termination</h2>
          <p className="text-gray-700 mb-4">
            We reserve the right to terminate or suspend your access to the Service immediately, without prior notice, for
            any breach of these Terms & Conditions or for any other reason at our sole discretion.
          </p>

          <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-3">11. Governing Law</h2>
          <p className="text-gray-700 mb-4">
            These Terms & Conditions are governed by and construed in accordance with the laws of England and Wales.
            Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts of
            England and Wales.
          </p>

          <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-3">12. Changes to Terms</h2>
          <p className="text-gray-700 mb-4">
            We reserve the right to modify these Terms & Conditions at any time. Changes will be effective immediately
            upon posting. Your continued use of the Service after changes are posted constitutes acceptance of the modified terms.
          </p>

          <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-3">13. Contact Information</h2>
          <p className="text-gray-700 mb-4">
            If you have any questions about these Terms & Conditions, please contact us at:
          </p>
          <p className="text-gray-700 mb-2">
            <strong>Email:</strong> legal-uk@jobpostplatform.com<br />
            <strong>Address:</strong> Job Post Platform UK Ltd, London, United Kingdom
          </p>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-200">
          <button
            onClick={() => onNavigate('job-post-uk')}
            className="px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-all"
          >
            ← Back to UK Form
          </button>
        </div>
      </div>
    </div>
  );
};

export default UKTerms;

interface UKPrivacyProps {
  onNavigate: (page: string) => void;
}

const UKPrivacy = ({ onNavigate }: UKPrivacyProps) => {
  return (
    <div className="max-w-4xl mx-auto px-5 py-12">
      <div className="bg-white border border-gray-200 rounded-2xl shadow-lg p-8">
        <div className="mb-8">
          <span className="text-3xl">🇬🇧</span>
          <h1 className="text-3xl font-bold text-gray-900 mt-2">Privacy Policy</h1>
          <p className="text-sm text-gray-600 mt-2">United Kingdom - UK GDPR Compliant</p>
          <p className="text-xs text-gray-500 mt-1">Last Updated: January 2025</p>
        </div>

        <div className="prose prose-sm max-w-none">
          <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-3">1. Introduction</h2>
          <p className="text-gray-700 mb-4">
            Job Post Platform UK Ltd ("we", "our", "us") is committed to protecting your privacy and personal data.
            This Privacy Policy explains how we collect, use, store, and protect your personal information in compliance
            with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.
          </p>

          <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-3">2. Data Controller</h2>
          <p className="text-gray-700 mb-4">
            Job Post Platform UK Ltd is the data controller responsible for your personal data. Our Information Commissioner's
            Office (ICO) registration details are available upon request.
          </p>

          <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-3">3. Information We Collect</h2>
          <p className="text-gray-700 mb-2">We collect the following types of personal data:</p>
          <ul className="list-disc pl-6 text-gray-700 mb-4">
            <li><strong>Contact Information:</strong> First name, email address, phone number</li>
            <li><strong>Location Data:</strong> Town/city, postcode, region (England, Scotland, Wales, Northern Ireland)</li>
            <li><strong>Job Details:</strong> Trade required, job title, description, budget estimate</li>
            <li><strong>Photos:</strong> Optional images you upload related to your job</li>
            <li><strong>Technical Data:</strong> IP address, browser type, device information, cookies</li>
            <li><strong>Marketing Preferences:</strong> Your consent for marketing communications</li>
          </ul>

          <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-3">4. Legal Basis for Processing</h2>
          <p className="text-gray-700 mb-2">We process your personal data based on the following legal grounds:</p>
          <ul className="list-disc pl-6 text-gray-700 mb-4">
            <li><strong>Contract Performance:</strong> To provide our job posting service</li>
            <li><strong>Consent:</strong> For marketing communications (you can withdraw at any time)</li>
            <li><strong>Legitimate Interests:</strong> To improve our services and prevent fraud</li>
            <li><strong>Legal Obligation:</strong> To comply with UK laws and regulations</li>
          </ul>

          <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-3">5. How We Use Your Information</h2>
          <p className="text-gray-700 mb-2">We use your personal data to:</p>
          <ul className="list-disc pl-6 text-gray-700 mb-4">
            <li>Connect you with up to 3 relevant UK tradespeople or service providers</li>
            <li>Send you quotes and communications from matched professionals</li>
            <li>Improve our platform and user experience</li>
            <li>Send marketing communications (only if you've given consent)</li>
            <li>Comply with legal obligations and prevent fraud</li>
            <li>Respond to your enquiries and provide customer support</li>
          </ul>

          <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-3">6. Data Sharing</h2>
          <p className="text-gray-700 mb-2">We share your personal data with:</p>
          <ul className="list-disc pl-6 text-gray-700 mb-4">
            <li><strong>Tradespeople:</strong> Up to 3 vetted UK professionals who can provide quotes for your job</li>
            <li><strong>Service Providers:</strong> Third parties who help us operate our platform (e.g., hosting, email services)</li>
            <li><strong>Legal Requirements:</strong> When required by UK law or to protect our rights</li>
          </ul>
          <p className="text-gray-700 mb-4">
            We do not sell your personal data to third parties. All service providers are required to protect your data
            in accordance with UK GDPR.
          </p>

          <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-3">7. International Transfers</h2>
          <p className="text-gray-700 mb-4">
            Your personal data is primarily stored and processed within the United Kingdom. If we transfer data outside
            the UK, we ensure appropriate safeguards are in place, such as Standard Contractual Clauses or adequacy decisions.
          </p>

          <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-3">8. Data Retention</h2>
          <p className="text-gray-700 mb-4">
            We retain your personal data for as long as necessary to provide our services and comply with legal obligations:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-4">
            <li><strong>Job Posting Data:</strong> 24 months from your last interaction</li>
            <li><strong>Marketing Consent:</strong> Until you withdraw consent</li>
            <li><strong>Legal Records:</strong> As required by UK law (typically 6-7 years)</li>
          </ul>

          <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-3">9. Your Rights Under UK GDPR</h2>
          <p className="text-gray-700 mb-2">You have the following rights:</p>
          <ul className="list-disc pl-6 text-gray-700 mb-4">
            <li><strong>Right of Access:</strong> Request a copy of your personal data</li>
            <li><strong>Right to Rectification:</strong> Correct inaccurate or incomplete data</li>
            <li><strong>Right to Erasure:</strong> Request deletion of your personal data ("right to be forgotten")</li>
            <li><strong>Right to Restrict Processing:</strong> Limit how we use your data</li>
            <li><strong>Right to Data Portability:</strong> Receive your data in a structured format</li>
            <li><strong>Right to Object:</strong> Object to processing based on legitimate interests</li>
            <li><strong>Right to Withdraw Consent:</strong> Withdraw marketing consent at any time</li>
            <li><strong>Right to Lodge a Complaint:</strong> Complain to the ICO (ico.org.uk)</li>
          </ul>

          <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-3">10. Security Measures</h2>
          <p className="text-gray-700 mb-4">
            We implement appropriate technical and organisational measures to protect your personal data, including:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-4">
            <li>Encryption of data in transit and at rest (SSL/TLS)</li>
            <li>Regular security assessments and penetration testing</li>
            <li>Access controls and authentication measures</li>
            <li>Staff training on data protection</li>
            <li>Secure data backup and disaster recovery procedures</li>
          </ul>

          <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-3">11. Cookies</h2>
          <p className="text-gray-700 mb-4">
            We use cookies and similar technologies to improve your experience. You can control cookies through your
            browser settings. For detailed information, please see our Cookie Policy.
          </p>

          <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-3">12. Children's Privacy</h2>
          <p className="text-gray-700 mb-4">
            Our Service is not intended for individuals under 18 years of age. We do not knowingly collect personal
            data from children.
          </p>

          <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-3">13. Changes to This Policy</h2>
          <p className="text-gray-700 mb-4">
            We may update this Privacy Policy from time to time. We will notify you of significant changes by email
            or through our platform.
          </p>

          <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-3">14. Contact Us</h2>
          <p className="text-gray-700 mb-4">
            To exercise your rights or for any privacy-related questions:
          </p>
          <p className="text-gray-700 mb-4">
            <strong>Data Protection Officer:</strong><br />
            Email: dpo-uk@jobpostplatform.com<br />
            Address: Job Post Platform UK Ltd, London, United Kingdom<br />
            Phone: +44 (0) 20 XXXX XXXX
          </p>
          <p className="text-gray-700 mb-4">
            <strong>Supervisory Authority:</strong><br />
            Information Commissioner's Office (ICO)<br />
            Website: www.ico.org.uk<br />
            Helpline: 0303 123 1113
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

export default UKPrivacy;

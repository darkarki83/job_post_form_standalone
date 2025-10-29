interface EUPrivacyProps {
  onNavigate: (page: string) => void;
}

const EUPrivacy = ({ onNavigate }: EUPrivacyProps) => {
  return (
    <div className="max-w-4xl mx-auto px-5 py-12">
      <div className="bg-white border border-gray-200 rounded-2xl shadow-lg p-8">
        <div className="mb-8">
          <span className="text-3xl">🇪🇺</span>
          <h1 className="text-3xl font-bold text-gray-900 mt-2">Privacy Policy</h1>
          <p className="text-sm text-gray-600 mt-2">European Union - GDPR Compliant</p>
          <p className="text-xs text-gray-500 mt-1">Last Updated: January 2025</p>
        </div>

        <div className="prose prose-sm max-w-none">
          <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-3">1. Introduction</h2>
          <p className="text-gray-700 mb-4">
            Job Post Platform EU ("we", "our", "us") is committed to protecting your privacy and personal data. This Privacy
            Policy explains how we collect, use, store, and protect your personal information in full compliance with the
            General Data Protection Regulation (GDPR) (EU) 2016/679.
          </p>

          <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-3">2. Data Controller</h2>
          <p className="text-gray-700 mb-4">
            Job Post Platform EU is the data controller responsible for your personal data. Our company is registered in
            Brussels, Belgium, and we operate throughout the European Union.
          </p>

          <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-3">3. Personal Data We Collect</h2>
          <p className="text-gray-700 mb-2">We collect the following categories of personal data:</p>
          <ul className="list-disc pl-6 text-gray-700 mb-4">
            <li><strong>Identity Data:</strong> First name</li>
            <li><strong>Contact Data:</strong> Email address, phone number</li>
            <li><strong>Location Data:</strong> Town/city, postcode, country within the EU</li>
            <li><strong>Job Information:</strong> Trade required, job title, description, budget estimate (in EUR)</li>
            <li><strong>Visual Data:</strong> Optional photographs you upload</li>
            <li><strong>Technical Data:</strong> IP address, browser type, device information</li>
            <li><strong>Usage Data:</strong> How you interact with our platform</li>
            <li><strong>Marketing Data:</strong> Your preferences for receiving marketing communications</li>
          </ul>

          <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-3">4. Legal Basis for Processing (Article 6 GDPR)</h2>
          <p className="text-gray-700 mb-2">We process your personal data based on the following legal grounds:</p>
          <ul className="list-disc pl-6 text-gray-700 mb-4">
            <li><strong>Performance of a Contract (Art. 6(1)(b)):</strong> To provide our job matching service</li>
            <li><strong>Consent (Art. 6(1)(a)):</strong> For marketing communications and optional data processing</li>
            <li><strong>Legitimate Interests (Art. 6(1)(f)):</strong> To improve our services, prevent fraud, and ensure security</li>
            <li><strong>Legal Obligation (Art. 6(1)(c)):</strong> To comply with EU and national legal requirements</li>
          </ul>

          <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-3">5. How We Use Your Personal Data</h2>
          <p className="text-gray-700 mb-2">We process your personal data for the following purposes:</p>
          <ul className="list-disc pl-6 text-gray-700 mb-4">
            <li>To connect you with up to 3 relevant professionals in your EU region</li>
            <li>To facilitate communication and quotes from service providers</li>
            <li>To improve and personalize our platform</li>
            <li>To send service-related notifications</li>
            <li>To send marketing communications (only with your explicit consent)</li>
            <li>To comply with legal obligations</li>
            <li>To prevent fraud and ensure platform security</li>
            <li>To provide customer support</li>
          </ul>

          <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-3">6. Data Sharing and Recipients</h2>
          <p className="text-gray-700 mb-2">We share your personal data with:</p>
          <ul className="list-disc pl-6 text-gray-700 mb-4">
            <li><strong>Service Providers:</strong> Up to 3 vetted professionals in your region who can quote for your job</li>
            <li><strong>Technical Service Providers:</strong> EU-based or GDPR-compliant providers for hosting, email, and analytics</li>
            <li><strong>Payment Processors:</strong> If applicable (with appropriate safeguards)</li>
            <li><strong>Legal Authorities:</strong> When required by EU or national law</li>
          </ul>
          <p className="text-gray-700 mb-4">
            We do <strong>not</strong> sell your personal data to third parties. All data processors are bound by
            Data Processing Agreements (DPAs) in accordance with Article 28 GDPR.
          </p>

          <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-3">7. International Data Transfers</h2>
          <p className="text-gray-700 mb-4">
            Your personal data is primarily stored and processed within the European Economic Area (EEA). If we transfer
            data outside the EEA, we ensure adequate protection through:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-4">
            <li>European Commission's Standard Contractual Clauses (SCCs)</li>
            <li>Adequacy decisions under Article 45 GDPR</li>
            <li>Binding Corporate Rules or other approved mechanisms</li>
          </ul>

          <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-3">8. Data Retention (Article 5(1)(e) GDPR)</h2>
          <p className="text-gray-700 mb-4">
            We retain your personal data only for as long as necessary:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-4">
            <li><strong>Active Job Postings:</strong> Duration of service provision plus 24 months</li>
            <li><strong>Marketing Consent:</strong> Until you withdraw consent</li>
            <li><strong>Legal Compliance:</strong> As required by EU or national law (typically 6-10 years for financial records)</li>
            <li><strong>Legitimate Interests:</strong> Up to 3 years for business improvement purposes</li>
          </ul>

          <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-3">9. Your Rights Under GDPR</h2>
          <p className="text-gray-700 mb-2">You have the following rights under GDPR:</p>
          <ul className="list-disc pl-6 text-gray-700 mb-4">
            <li><strong>Right of Access (Art. 15):</strong> Request a copy of your personal data</li>
            <li><strong>Right to Rectification (Art. 16):</strong> Correct inaccurate or incomplete data</li>
            <li><strong>Right to Erasure (Art. 17):</strong> Request deletion of your data ("right to be forgotten")</li>
            <li><strong>Right to Restrict Processing (Art. 18):</strong> Limit how we process your data</li>
            <li><strong>Right to Data Portability (Art. 20):</strong> Receive your data in a machine-readable format</li>
            <li><strong>Right to Object (Art. 21):</strong> Object to processing based on legitimate interests or direct marketing</li>
            <li><strong>Right to Withdraw Consent (Art. 7(3)):</strong> Withdraw consent at any time</li>
            <li><strong>Right Not to Be Subject to Automated Decision-Making (Art. 22):</strong> Including profiling</li>
          </ul>
          <p className="text-gray-700 mb-4">
            To exercise these rights, contact us at: <strong>dpo-eu@jobpostplatform.com</strong>. We will respond within
            one month as required by Article 12(3) GDPR.
          </p>

          <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-3">10. Right to Lodge a Complaint</h2>
          <p className="text-gray-700 mb-4">
            You have the right to lodge a complaint with your national Data Protection Authority (DPA). A list of EU DPAs
            is available at: <a href="https://edpb.europa.eu/about-edpb/about-edpb/members_en" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">https://edpb.europa.eu</a>
          </p>

          <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-3">11. Security Measures (Article 32 GDPR)</h2>
          <p className="text-gray-700 mb-4">
            We implement appropriate technical and organisational measures to ensure data security:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-4">
            <li>Encryption of data in transit (TLS/SSL) and at rest</li>
            <li>Pseudonymization where appropriate</li>
            <li>Regular security assessments and audits</li>
            <li>Access controls and authentication</li>
            <li>Staff training on GDPR compliance</li>
            <li>Incident response and breach notification procedures</li>
            <li>Secure backup and disaster recovery</li>
          </ul>

          <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-3">12. Data Breach Notification</h2>
          <p className="text-gray-700 mb-4">
            In the event of a personal data breach that poses a risk to your rights and freedoms, we will notify you and
            the relevant supervisory authority within 72 hours as required by Article 33 and 34 GDPR.
          </p>

          <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-3">13. Cookies and Tracking</h2>
          <p className="text-gray-700 mb-4">
            We use cookies and similar technologies in accordance with the ePrivacy Directive. You can manage cookie
            preferences through your browser settings. For detailed information, see our Cookie Policy.
          </p>

          <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-3">14. Children's Privacy</h2>
          <p className="text-gray-700 mb-4">
            Our Service is not intended for individuals under 16 years of age (or the age of digital consent in your
            country). We do not knowingly collect personal data from children.
          </p>

          <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-3">15. Automated Decision-Making</h2>
          <p className="text-gray-700 mb-4">
            We do not use automated decision-making or profiling that produces legal or similarly significant effects
            under Article 22 GDPR.
          </p>

          <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-3">16. Changes to This Privacy Policy</h2>
          <p className="text-gray-700 mb-4">
            We may update this Privacy Policy to reflect changes in our practices or legal requirements. Significant
            changes will be communicated to you via email or prominent notice on our platform.
          </p>

          <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-3">17. Contact Information</h2>
          <p className="text-gray-700 mb-4">
            <strong>Data Controller:</strong><br />
            Job Post Platform EU<br />
            Brussels, Belgium<br />
            Email: info-eu@jobpostplatform.com
          </p>
          <p className="text-gray-700 mb-4">
            <strong>Data Protection Officer (DPO):</strong><br />
            Email: dpo-eu@jobpostplatform.com<br />
            Phone: +32 (0) 2 XXX XXXX
          </p>
          <p className="text-gray-700 mb-4">
            <strong>EU Representative (if applicable):</strong><br />
            As required by Article 27 GDPR
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

export default EUPrivacy;

interface USPrivacyProps {
  onNavigate: (page: string) => void;
}

const USPrivacy = ({ onNavigate }: USPrivacyProps) => {
  return (
    <div className="max-w-4xl mx-auto px-5 py-12">
      <div className="bg-white border border-gray-200 rounded-2xl shadow-lg p-8">
        <div className="mb-8">
          <span className="text-3xl">🇺🇸</span>
          <h1 className="text-3xl font-bold text-gray-900 mt-2">Privacy Policy</h1>
          <p className="text-sm text-gray-600 mt-2">United States & International - CCPA Compliant</p>
          <p className="text-xs text-gray-500 mt-1">Last Updated: January 2025</p>
        </div>

        <div className="prose prose-sm max-w-none">
          <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-3">1. Introduction</h2>
          <p className="text-gray-700 mb-4">
            Job Post Platform Inc. ("we", "us", "our", "Company") is committed to protecting your privacy. This Privacy Policy
            explains how we collect, use, disclose, and safeguard your personal information when you use our services. We
            comply with applicable U.S. federal and state privacy laws, including the California Consumer Privacy Act (CCPA).
          </p>

          <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-3">2. Information We Collect</h2>
          <p className="text-gray-700 mb-2">We collect the following categories of personal information:</p>

          <h3 className="text-lg font-semibold text-gray-900 mt-4 mb-2">A. Information You Provide</h3>
          <ul className="list-disc pl-6 text-gray-700 mb-4">
            <li><strong>Contact Information:</strong> First name, email address, phone number</li>
            <li><strong>Location Information:</strong> City, ZIP code, state, country</li>
            <li><strong>Job Details:</strong> Trade/service needed, job title, description, budget range</li>
            <li><strong>Photos:</strong> Images you voluntarily upload</li>
            <li><strong>Communications:</strong> Messages, inquiries, feedback</li>
          </ul>

          <h3 className="text-lg font-semibold text-gray-900 mt-4 mb-2">B. Information Collected Automatically</h3>
          <ul className="list-disc pl-6 text-gray-700 mb-4">
            <li><strong>Device Information:</strong> IP address, browser type, operating system</li>
            <li><strong>Usage Data:</strong> Pages viewed, time spent, clicks, interactions</li>
            <li><strong>Cookies:</strong> See our Cookie Policy for details</li>
            <li><strong>Location Data:</strong> Approximate location from IP address</li>
          </ul>

          <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-3">3. How We Use Your Information</h2>
          <p className="text-gray-700 mb-2">We use your personal information for the following purposes:</p>
          <ul className="list-disc pl-6 text-gray-700 mb-4">
            <li>To provide and maintain our services</li>
            <li>To connect you with up to 3 qualified service providers</li>
            <li>To communicate with you about your job requests</li>
            <li>To send service-related notifications</li>
            <li>To improve our platform and user experience</li>
            <li>To detect and prevent fraud</li>
            <li>To comply with legal obligations</li>
            <li>To send marketing communications (with your consent)</li>
            <li>To analyze usage patterns and trends</li>
          </ul>

          <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-3">4. How We Share Your Information</h2>
          <p className="text-gray-700 mb-2">We may share your personal information with:</p>
          <ul className="list-disc pl-6 text-gray-700 mb-4">
            <li><strong>Service Providers:</strong> Up to 3 qualified professionals who can quote on your job</li>
            <li><strong>Service Vendors:</strong> Third-party companies that help us operate (hosting, analytics, email services)</li>
            <li><strong>Business Partners:</strong> With your consent for specific purposes</li>
            <li><strong>Legal Authorities:</strong> When required by law or to protect our rights</li>
            <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
          </ul>
          <p className="text-gray-700 mb-4">
            <strong>We do not sell your personal information to third parties.</strong>
          </p>

          <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-3">5. Your Privacy Rights</h2>

          <h3 className="text-lg font-semibold text-gray-900 mt-4 mb-2">California Residents (CCPA Rights)</h3>
          <p className="text-gray-700 mb-2">If you are a California resident, you have the following rights:</p>
          <ul className="list-disc pl-6 text-gray-700 mb-4">
            <li><strong>Right to Know:</strong> Request information about personal information we've collected about you</li>
            <li><strong>Right to Delete:</strong> Request deletion of your personal information</li>
            <li><strong>Right to Opt-Out:</strong> Opt out of the sale of personal information (we don't sell your data)</li>
            <li><strong>Right to Non-Discrimination:</strong> Not be discriminated against for exercising these rights</li>
            <li><strong>Right to Correct:</strong> Request correction of inaccurate personal information</li>
            <li><strong>Right to Limit:</strong> Limit use and disclosure of sensitive personal information</li>
          </ul>
          <p className="text-gray-700 mb-4">
            To exercise these rights, contact us at: <strong>privacy@jobpostplatform.com</strong> or call <strong>1-888-XXX-XXXX</strong>
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mt-4 mb-2">Other State Privacy Rights</h3>
          <p className="text-gray-700 mb-4">
            Residents of Virginia, Colorado, Connecticut, Utah, and other states with comprehensive privacy laws may have
            similar rights. Contact us to exercise applicable rights in your state.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mt-4 mb-2">General Rights (All Users)</h3>
          <ul className="list-disc pl-6 text-gray-700 mb-4">
            <li>Access your personal information</li>
            <li>Correct inaccurate information</li>
            <li>Request deletion of your data</li>
            <li>Opt out of marketing communications</li>
            <li>Withdraw consent where processing is based on consent</li>
          </ul>

          <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-3">6. Data Retention</h2>
          <p className="text-gray-700 mb-4">
            We retain your personal information for as long as necessary to:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-4">
            <li><strong>Active Users:</strong> Duration of service use plus 24 months</li>
            <li><strong>Legal Requirements:</strong> As required by law (typically 7 years for business records)</li>
            <li><strong>Marketing:</strong> Until you unsubscribe or object</li>
            <li><strong>Dispute Resolution:</strong> As needed to resolve disputes and enforce agreements</li>
          </ul>

          <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-3">7. Data Security</h2>
          <p className="text-gray-700 mb-4">
            We implement reasonable security measures to protect your personal information:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-4">
            <li>Encryption of data in transit (SSL/TLS)</li>
            <li>Secure data storage with encryption at rest</li>
            <li>Access controls and authentication</li>
            <li>Regular security assessments</li>
            <li>Employee training on data privacy</li>
            <li>Incident response procedures</li>
          </ul>
          <p className="text-gray-700 mb-4">
            However, no method of transmission over the Internet or electronic storage is 100% secure. While we strive to
            protect your personal information, we cannot guarantee absolute security.
          </p>

          <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-3">8. Cookies and Tracking Technologies</h2>
          <p className="text-gray-700 mb-4">
            We use cookies and similar tracking technologies to enhance your experience. You can control cookies through
            your browser settings. For more information, see our Cookie Policy.
          </p>

          <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-3">9. Third-Party Links</h2>
          <p className="text-gray-700 mb-4">
            Our Service may contain links to third-party websites. We are not responsible for the privacy practices of these
            sites. We encourage you to review their privacy policies.
          </p>

          <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-3">10. Children's Privacy</h2>
          <p className="text-gray-700 mb-4">
            Our Service is not directed to individuals under 18. We do not knowingly collect personal information from children.
            If you believe we have collected information from a child, please contact us immediately.
          </p>

          <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-3">11. Do Not Track Signals</h2>
          <p className="text-gray-700 mb-4">
            We do not currently respond to "Do Not Track" (DNT) signals from web browsers. However, you can control cookies
            and tracking through your browser settings.
          </p>

          <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-3">12. International Users</h2>
          <p className="text-gray-700 mb-4">
            Our services are primarily operated in the United States. If you access our Service from outside the U.S., your
            information may be transferred to, stored, and processed in the United States. By using the Service, you consent
            to such transfer.
          </p>

          <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-3">13. Nevada Residents</h2>
          <p className="text-gray-700 mb-4">
            Nevada residents have the right to opt out of the sale of their personal information. We do not sell personal
            information. If you have questions, contact us at privacy@jobpostplatform.com.
          </p>

          <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-3">14. Changes to This Privacy Policy</h2>
          <p className="text-gray-700 mb-4">
            We may update this Privacy Policy from time to time. We will notify you of material changes by posting the new
            Privacy Policy on this page and updating the "Last Updated" date. We may also send you an email notification.
          </p>

          <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-3">15. Contact Us</h2>
          <p className="text-gray-700 mb-4">
            If you have questions or concerns about this Privacy Policy or our practices:
          </p>
          <p className="text-gray-700 mb-4">
            <strong>Job Post Platform Inc.</strong><br />
            Email: privacy@jobpostplatform.com<br />
            Phone: 1-888-XXX-XXXX<br />
            Address: 123 Main Street, Suite 100, New York, NY 10001, USA
          </p>
          <p className="text-gray-700 mb-4">
            <strong>California Privacy Rights:</strong><br />
            Email: ccpa@jobpostplatform.com<br />
            Toll-Free: 1-888-XXX-CCPA
          </p>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-200">
          <button
            onClick={() => onNavigate('job-post-us')}
            className="px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-all"
          >
            ← Back to USA Form
          </button>
        </div>
      </div>
    </div>
  );
};

export default USPrivacy;

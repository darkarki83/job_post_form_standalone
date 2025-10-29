interface USTermsProps {
  onNavigate: (page: string) => void;
}

const USTerms = ({ onNavigate }: USTermsProps) => {
  return (
    <div className="max-w-4xl mx-auto px-5 py-12">
      <div className="bg-white border border-gray-200 rounded-2xl shadow-lg p-8">
        <div className="mb-8">
          <span className="text-3xl">🇺🇸</span>
          <h1 className="text-3xl font-bold text-gray-900 mt-2">Terms of Service</h1>
          <p className="text-sm text-gray-600 mt-2">United States & International</p>
          <p className="text-xs text-gray-500 mt-1">Last Updated: January 2025</p>
        </div>

        <div className="prose prose-sm max-w-none">
          <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-3">1. Acceptance of Terms</h2>
          <p className="text-gray-700 mb-4">
            By accessing or using Job Post Platform ("Service", "Platform", "we", "us", "our"), you agree to be bound by
            these Terms of Service ("Terms"). If you do not agree to these Terms, you may not access or use the Service.
            These Terms constitute a legally binding agreement between you and Job Post Platform Inc.
          </p>

          <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-3">2. Description of Service</h2>
          <p className="text-gray-700 mb-4">
            Job Post Platform is an online marketplace that connects customers seeking services with qualified professionals
            and contractors. We act as an intermediary to facilitate connections and do not provide the actual services
            ourselves. We are not a party to any agreement between you and service providers.
          </p>

          <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-3">3. Eligibility</h2>
          <p className="text-gray-700 mb-4">
            You must be at least 18 years old and have the legal capacity to enter into binding contracts to use this Service.
            By using the Service, you represent and warrant that you meet these requirements.
          </p>

          <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-3">4. User Obligations and Conduct</h2>
          <p className="text-gray-700 mb-2">You agree to:</p>
          <ul className="list-disc pl-6 text-gray-700 mb-4">
            <li>Provide accurate, current, and complete information</li>
            <li>Maintain the security of your account</li>
            <li>Not impersonate any person or entity</li>
            <li>Not post false, misleading, or fraudulent job requests</li>
            <li>Not use the Service for any unlawful purpose</li>
            <li>Not harass, abuse, or harm other users or service providers</li>
            <li>Not attempt to circumvent, disable, or interfere with the Service</li>
            <li>Comply with all applicable federal, state, and local laws</li>
          </ul>

          <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-3">5. Quote and Matching Process</h2>
          <p className="text-gray-700 mb-4">
            Upon submitting a job request, your information will be shared with up to 3 qualified professionals. We aim to
            connect you with providers within 24 hours. However, we do not guarantee:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-4">
            <li>That you will receive any quotes</li>
            <li>The quality, timeliness, or legality of services provided</li>
            <li>The accuracy of quotes or estimates</li>
            <li>That service providers are properly licensed or insured</li>
          </ul>

          <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-3">6. Fees and Payment</h2>
          <p className="text-gray-700 mb-4">
            Posting jobs on our Platform is currently free for customers. All pricing, payment terms, and financial
            arrangements are made directly between you and the service provider. We are not responsible for any payment
            disputes. Prices are quoted in US Dollars (USD) unless otherwise stated.
          </p>

          <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-3">7. Independent Contractors</h2>
          <p className="text-gray-700 mb-4">
            Service providers on our Platform are independent contractors, not employees or agents of Job Post Platform.
            We do not control their work, methods, or schedules. You agree that any contract for services is made directly
            with the service provider, not with us.
          </p>

          <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-3">8. Disclaimer of Warranties</h2>
          <p className="text-gray-700 mb-4 uppercase font-semibold">
            THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED,
            INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR
            NON-INFRINGEMENT.
          </p>
          <p className="text-gray-700 mb-4">
            We do not warrant that:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-4">
            <li>The Service will meet your requirements</li>
            <li>The Service will be uninterrupted, timely, secure, or error-free</li>
            <li>Service providers are qualified, licensed, or insured</li>
            <li>Any information obtained through the Service is accurate or reliable</li>
          </ul>

          <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-3">9. Limitation of Liability</h2>
          <p className="text-gray-700 mb-4 uppercase font-semibold">
            TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL JOB POST PLATFORM, ITS OFFICERS, DIRECTORS,
            EMPLOYEES, OR AGENTS BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES,
            INCLUDING WITHOUT LIMITATION, LOSS OF PROFITS, DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES.
          </p>
          <p className="text-gray-700 mb-4">
            Our total liability to you for all claims arising from or related to the Service shall not exceed $100 USD or
            the amount you paid us in the past 12 months, whichever is greater.
          </p>

          <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-3">10. Indemnification</h2>
          <p className="text-gray-700 mb-4">
            You agree to indemnify, defend, and hold harmless Job Post Platform and its officers, directors, employees,
            and agents from any claims, damages, losses, liabilities, and expenses (including attorneys' fees) arising from:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-4">
            <li>Your use of the Service</li>
            <li>Your violation of these Terms</li>
            <li>Your violation of any rights of another party</li>
            <li>Your interactions with service providers</li>
          </ul>

          <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-3">11. Arbitration Agreement and Class Action Waiver</h2>
          <p className="text-gray-700 mb-4">
            <strong>PLEASE READ THIS SECTION CAREFULLY.</strong> It affects your legal rights, including your right to file
            a lawsuit in court.
          </p>
          <p className="text-gray-700 mb-4">
            You and Job Post Platform agree that any dispute arising out of or relating to these Terms or the Service will
            be resolved through binding arbitration, rather than in court, except that you may assert claims in small claims
            court if your claims qualify.
          </p>
          <p className="text-gray-700 mb-4 uppercase font-semibold">
            YOU AND JOB POST PLATFORM AGREE THAT EACH MAY BRING CLAIMS AGAINST THE OTHER ONLY IN YOUR OR ITS INDIVIDUAL
            CAPACITY AND NOT AS A PLAINTIFF OR CLASS MEMBER IN ANY PURPORTED CLASS OR REPRESENTATIVE PROCEEDING.
          </p>

          <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-3">12. Intellectual Property</h2>
          <p className="text-gray-700 mb-4">
            The Service and its entire contents, features, and functionality are owned by Job Post Platform and are protected
            by United States and international copyright, trademark, and other intellectual property laws.
          </p>

          <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-3">13. Privacy and Data Protection</h2>
          <p className="text-gray-700 mb-4">
            Your use of the Service is subject to our Privacy Policy. We comply with applicable privacy laws, including CCPA
            (California Consumer Privacy Act) and other state privacy regulations. Please review our Privacy Policy for
            information about how we collect and use your personal information.
          </p>

          <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-3">14. Termination</h2>
          <p className="text-gray-700 mb-4">
            We may terminate or suspend your access to the Service immediately, without prior notice or liability, for any
            reason, including breach of these Terms. Upon termination, your right to use the Service will cease immediately.
          </p>

          <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-3">15. Governing Law</h2>
          <p className="text-gray-700 mb-4">
            These Terms shall be governed by and construed in accordance with the laws of the State of Delaware, United States,
            without regard to its conflict of law provisions.
          </p>

          <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-3">16. Changes to Terms</h2>
          <p className="text-gray-700 mb-4">
            We reserve the right to modify these Terms at any time. If we make material changes, we will provide notice
            through the Service or by other means. Your continued use of the Service after changes are posted constitutes
            acceptance of the modified Terms.
          </p>

          <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-3">17. Severability</h2>
          <p className="text-gray-700 mb-4">
            If any provision of these Terms is held to be invalid or unenforceable, that provision shall be enforced to the
            maximum extent possible, and the remaining provisions shall remain in full force and effect.
          </p>

          <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-3">18. Contact Information</h2>
          <p className="text-gray-700 mb-4">
            For questions about these Terms of Service, contact us at:
          </p>
          <p className="text-gray-700 mb-2">
            <strong>Job Post Platform Inc.</strong><br />
            Email: legal@jobpostplatform.com<br />
            Address: 123 Main Street, Suite 100, New York, NY 10001, USA<br />
            Phone: +1 (888) XXX-XXXX
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

export default USTerms;

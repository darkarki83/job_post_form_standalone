/**
 * Analytics utility functions
 * For tracking user behavior, device info, and marketing attribution
 */

// Extract UTM parameters from URL
export function extractUTMParams(url?: string): {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_term?: string;
  utm_content?: string;
} | undefined {
  const urlString = url || window.location.href;
  const urlObj = new URL(urlString);
  const params = urlObj.searchParams;

  const utmSource = params.get('utm_source');
  const utmMedium = params.get('utm_medium');
  const utmCampaign = params.get('utm_campaign');
  const utmTerm = params.get('utm_term');
  const utmContent = params.get('utm_content');

  // Only return if at least one UTM parameter exists
  if (!utmSource && !utmMedium && !utmCampaign && !utmTerm && !utmContent) {
    return undefined;
  }

  const utm: any = {};
  if (utmSource) utm.utm_source = utmSource;
  if (utmMedium) utm.utm_medium = utmMedium;
  if (utmCampaign) utm.utm_campaign = utmCampaign;
  if (utmTerm) utm.utm_term = utmTerm;
  if (utmContent) utm.utm_content = utmContent;

  return utm;
}

// Store UTM parameters in sessionStorage for attribution
export function storeUTMParams(): void {
  const utm = extractUTMParams();
  if (utm) {
    sessionStorage.setItem('utm_params', JSON.stringify(utm));
  }
}

// Get stored UTM parameters (for attribution on later pages)
export function getStoredUTMParams(): {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_term?: string;
  utm_content?: string;
} | undefined {
  const stored = sessionStorage.getItem('utm_params');
  return stored ? JSON.parse(stored) : undefined;
}

// Detect device type
export function detectDevice(): 'mobile' | 'desktop' | 'tablet' {
  const ua = navigator.userAgent;

  if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
    return 'tablet';
  }
  if (/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)) {
    return 'mobile';
  }
  return 'desktop';
}

// Detect browser
export function detectBrowser(): string {
  const ua = navigator.userAgent;

  if (ua.indexOf('Firefox') > -1) return 'Firefox';
  if (ua.indexOf('SamsungBrowser') > -1) return 'Samsung Internet';
  if (ua.indexOf('Opera') > -1 || ua.indexOf('OPR') > -1) return 'Opera';
  if (ua.indexOf('Trident') > -1) return 'Internet Explorer';
  if (ua.indexOf('Edge') > -1) return 'Edge';
  if (ua.indexOf('Edg') > -1) return 'Edge Chromium';
  if (ua.indexOf('Chrome') > -1) return 'Chrome';
  if (ua.indexOf('Safari') > -1) return 'Safari';

  return 'Unknown';
}

// Detect operating system
export function detectOS(): string {
  const ua = navigator.userAgent;

  if (ua.indexOf('Win') > -1) return 'Windows';
  if (ua.indexOf('Mac') > -1) return 'MacOS';
  if (ua.indexOf('Linux') > -1) return 'Linux';
  if (ua.indexOf('Android') > -1) return 'Android';
  if (ua.indexOf('like Mac') > -1) return 'iOS';

  return 'Unknown';
}

// Derive traffic source from referrer
export function deriveSource(referrer?: string): string {
  const ref = referrer || document.referrer;

  if (!ref) return 'direct';

  const refLower = ref.toLowerCase();

  if (refLower.includes('google.')) return 'google';
  if (refLower.includes('facebook.') || refLower.includes('fb.')) return 'facebook';
  if (refLower.includes('twitter.') || refLower.includes('t.co')) return 'twitter';
  if (refLower.includes('linkedin.')) return 'linkedin';
  if (refLower.includes('instagram.')) return 'instagram';
  if (refLower.includes('youtube.')) return 'youtube';
  if (refLower.includes('bing.')) return 'bing';
  if (refLower.includes('yahoo.')) return 'yahoo';

  return 'referral';
}

// Get comprehensive metadata for tracking
export function getTrackingMetadata() {
  return {
    source: deriveSource(),
    device: detectDevice(),
    browser: detectBrowser(),
    os: detectOS(),
  };
}

// Get session ID (or create if doesn't exist)
export function getOrCreateSessionId(): string {
  let sessionId = sessionStorage.getItem('analytics_session_id');

  if (!sessionId) {
    sessionId = `sess-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    sessionStorage.setItem('analytics_session_id', sessionId);
  }

  return sessionId;
}

// Get request ID (for tracing)
export function generateRequestId(): string {
  return `req-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}

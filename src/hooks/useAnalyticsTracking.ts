import { useEffect, useCallback } from 'react';
import { useAnalytics } from '../contexts/AnalyticsContext';
import {
  extractUTMParams,
  getStoredUTMParams,
  storeUTMParams,
  getTrackingMetadata,
  generateRequestId,
} from '../utils/analytics';

/**
 * Hook for tracking analytics events
 */
export function useAnalyticsTracking() {
  const { trackEvent } = useAnalytics();

  // Store UTM parameters on mount (if present in URL)
  useEffect(() => {
    storeUTMParams();
  }, []);

  /**
   * Track form view
   * Call this when a form page loads
   */
  const trackFormView = useCallback((region?: 'UK' | 'EU' | 'US') => {
    trackEvent({
      eventType: 'form_view',
      postId: null,
      userId: null,
      requestId: generateRequestId(),
      utm: extractUTMParams() || getStoredUTMParams(),
      referrer: document.referrer || undefined,
      metadata: {
        ...getTrackingMetadata(),
        ...(region && { region }),
      },
    });
  }, [trackEvent]);

  /**
   * Track form submit
   * Call this when a job post is successfully submitted
   */
  const trackFormSubmit = useCallback((postId: string, region?: 'UK' | 'EU' | 'US') => {
    trackEvent({
      eventType: 'form_submit',
      postId,
      userId: null,
      requestId: generateRequestId(),
      utm: getStoredUTMParams(), // Use stored UTM from initial page load
      referrer: window.location.href,
      metadata: {
        ...getTrackingMetadata(),
        ...(region && { region }),
      },
    });
  }, [trackEvent]);

  /**
   * Track email verification
   * Call this when user verifies their email
   */
  const trackEmailVerified = useCallback((postId: string) => {
    trackEvent({
      eventType: 'email_verified',
      postId,
      userId: null,
      requestId: generateRequestId(),
      utm: getStoredUTMParams(),
      referrer: document.referrer || undefined,
      metadata: {
        ...getTrackingMetadata(),
        source: 'email',
      },
    });
  }, [trackEvent]);

  /**
   * Track post approved by admin
   * Call this when admin approves a post
   */
  const trackPostApproved = useCallback((postId: string) => {
    trackEvent({
      eventType: 'post_approved',
      postId,
      userId: null, // In future: get from admin user
      requestId: generateRequestId(),
      metadata: {
        ...getTrackingMetadata(),
        source: 'admin',
      },
    });
  }, [trackEvent]);

  /**
   * Track post deleted by admin
   * Call this when admin deletes a post
   */
  const trackPostDeleted = useCallback((postId: string) => {
    trackEvent({
      eventType: 'post_deleted',
      postId,
      userId: null, // In future: get from admin user
      requestId: generateRequestId(),
      metadata: {
        ...getTrackingMetadata(),
        source: 'admin',
      },
    });
  }, [trackEvent]);

  return {
    trackFormView,
    trackFormSubmit,
    trackEmailVerified,
    trackPostApproved,
    trackPostDeleted,
  };
}

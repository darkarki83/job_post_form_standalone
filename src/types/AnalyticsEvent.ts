export type EventType =
  | "form_view"
  | "form_submit"
  | "email_open"
  | "email_verified"
  | "quote_received"
  | "post_approved"
  | "post_deleted";

export interface AnalyticsEventV1 {
  eventId: string;            // unique
  eventType: EventType;

  // Context
  postId?: string | null;     // optional for events outside post context
  userId?: string | null;     // null until logged in

  // Session & Tracking
  sessionId: string;          // anonymous session before/after login
  requestId?: string;         // trace through backend/workers

  // Marketing Attribution
  utm?: {
    utm_source?: string;      // google, facebook, twitter
    utm_medium?: string;      // cpc, email, social
    utm_campaign?: string;    // campaign name
    utm_term?: string;        // keyword
    utm_content?: string;     // ad variant
  };
  referrer?: string;          // full URL of previous page

  // Device & Source
  metadata?: {
    source?: string;          // google / direct / referral / meta / etc.
    device?: "mobile" | "desktop" | "tablet" | string;
    browser?: string;         // Chrome, Firefox, Safari
    os?: string;              // Windows, MacOS, iOS, Android
    country?: string;         // UK, US, etc.
    ip?: string;              // IP address (for fraud detection)
  };

  createdAt: string;          // ISO 8601
}

# Analytics & Event Tracking System

## Overview
Comprehensive analytics system for tracking user behavior, marketing attribution, conversion funnels, and performance metrics across the job posting platform.

## Purpose

### Why Track Analytics?

1. **Marketing ROI**: Which campaigns bring the most job posts?
2. **Conversion Optimization**: Where do users drop off in the funnel?
3. **User Behavior**: How do users interact with the platform?
4. **Device Optimization**: Should we optimize for mobile or desktop?
5. **Fraud Detection**: Identify suspicious patterns via IP/session analysis

---

## Event Types

### User Journey Events

#### `form_view`
**When**: User opens the job post form page
**Context**: No postId yet (null)
**Use**: Track how many people start the process

```javascript
{
  eventType: "form_view",
  postId: null,  // No post created yet
  sessionId: "sess-abc123",
  utm: { utm_source: "google", utm_campaign: "plumber-ads" }
}
```

#### `form_submit`
**When**: User successfully submits job post
**Context**: postId now exists
**Use**: Measure form completion rate

```javascript
{
  eventType: "form_submit",
  postId: "job-001",  // Post just created
  sessionId: "sess-abc123",  // Same session as form_view
  utm: { utm_source: "google" }  // Carry over attribution
}
```

#### `email_open`
**When**: User opens verification email
**Context**: Tracked via email tracking pixel
**Use**: Email engagement metrics

```javascript
{
  eventType: "email_open",
  postId: "job-001",
  sessionId: "sess-abc123",
  metadata: { source: "email", device: "mobile" }
}
```

#### `email_verified`
**When**: User clicks verification link in email
**Context**: Email is now verified
**Use**: Email verification conversion rate

```javascript
{
  eventType: "email_verified",
  postId: "job-001",
  sessionId: "sess-abc123"
}
```

### Admin Events

#### `post_approved`
**When**: Admin approves a job post
**Context**: Post moves to "active" status
**Use**: Admin activity metrics

```javascript
{
  eventType: "post_approved",
  postId: "job-001",
  sessionId: "admin-sess-001",
  metadata: { source: "admin" }
}
```

#### `post_deleted`
**When**: Admin deletes a job post
**Context**: Post removed for spam/violation
**Use**: Quality control metrics

---

## Key Fields Explained

### Core Tracking

**`eventId`** - Unique identifier
- Format: `evt-{timestamp}-{random}`
- Use: Deduplicate events

**`sessionId`** - User session tracking
- **Critical**: Same session across entire user journey
- Tracks: `form_view` → `form_submit` → `email_verified`
- Generated: On first page load
- Persists: Across pages, even after login
- Storage: Browser localStorage or cookie

**`requestId`** - Backend tracing
- Unique per API request
- Correlates: Frontend → Backend → Email Service → Database
- Use: Debug issues across microservices
- Example: Trace why email wasn't sent

### Marketing Attribution

**`utm` parameters** - Campaign tracking

```typescript
utm: {
  utm_source: "google",           // Traffic source
  utm_medium: "cpc",              // Medium (cpc, email, social, organic)
  utm_campaign: "plumber-winter", // Campaign name
  utm_term: "emergency plumber",  // Keyword (for PPC)
  utm_content: "ad-variant-a"     // Ad variant (A/B testing)
}
```

**Example URL with UTM**:
```
https://yoursite.com/uk/post-job?utm_source=google&utm_medium=cpc&utm_campaign=plumber-winter-2025&utm_term=emergency+plumber&utm_content=ad-variant-a
```

**`referrer`** - Previous page URL
- Full URL where user came from
- Example: `https://google.com/search?q=find+plumber`
- Use: Understand traffic sources

### Device & Technical Data

**`metadata.source`** - High-level traffic source
- `google` - From Google search/ads
- `facebook` - From Facebook/Meta
- `direct` - Typed URL directly
- `referral` - From another website
- `email` - From email link

**`metadata.device`** - Device type
- `mobile`, `desktop`, `tablet`
- Use: Optimize UI for most-used device

**`metadata.browser`** - Browser name
- Chrome, Firefox, Safari, Edge
- Use: Debug browser-specific issues

**`metadata.os`** - Operating system
- Windows, MacOS, iOS, Android
- Use: Platform-specific optimization

**`metadata.country`** - User location
- Derived from IP address
- Use: Geographic analytics

**`metadata.ip`** - IP address
- Use: Fraud detection, geo-location
- **Privacy**: Hash or anonymize for GDPR

---

## Complete User Journey Example

### Scenario: John finds plumber via Google Ad

**Step 1: Sees Google Ad** (External)
```
User clicks ad:
https://yoursite.com/uk/post-job?utm_source=google&utm_medium=cpc&utm_campaign=plumber-winter-2025
```

**Step 2: Views Form** → Event Tracked
```javascript
{
  eventId: "evt-001",
  eventType: "form_view",
  postId: null,  // No post yet
  userId: null,  // Anonymous
  sessionId: "sess-john-123",  // Generated
  utm: {
    utm_source: "google",
    utm_medium: "cpc",
    utm_campaign: "plumber-winter-2025"
  },
  referrer: "https://google.com/search",
  metadata: {
    source: "google",
    device: "mobile",
    country: "UK"
  },
  createdAt: "2025-10-28T10:15:00Z"
}
```

**Step 3: Fills & Submits Form** → Event Tracked
```javascript
{
  eventId: "evt-002",
  eventType: "form_submit",
  postId: "job-001",  // Post created!
  userId: null,  // Still anonymous
  sessionId: "sess-john-123",  // SAME SESSION
  utm: {  // SAME UTM - attribution preserved
    utm_source: "google",
    utm_medium: "cpc",
    utm_campaign: "plumber-winter-2025"
  },
  referrer: "https://yoursite.com/uk/post-job",
  metadata: {
    source: "google",
    device: "mobile",
    country: "UK"
  },
  createdAt: "2025-10-28T10:22:00Z"
}
```

**Step 4: Opens Verification Email** → Event Tracked
```javascript
{
  eventId: "evt-003",
  eventType: "email_open",
  postId: "job-001",
  userId: null,
  sessionId: "sess-john-123",  // SAME SESSION
  metadata: {
    source: "email",
    device: "mobile"
  },
  createdAt: "2025-10-28T10:25:00Z"
}
```

**Step 5: Clicks Verification Link** → Event Tracked
```javascript
{
  eventId: "evt-004",
  eventType: "email_verified",
  postId: "job-001",
  userId: null,
  sessionId: "sess-john-123",  // SAME SESSION
  metadata: {
    source: "email",
    device: "mobile"
  },
  createdAt: "2025-10-28T10:26:00Z"
}
```

**Step 6: Admin Approves Post** → Event Tracked
```javascript
{
  eventId: "evt-005",
  eventType: "post_approved",
  postId: "job-001",
  userId: null,
  sessionId: "admin-sess-001",  // Different session (admin)
  metadata: {
    source: "admin",
    device: "desktop"
  },
  createdAt: "2025-10-28T14:30:00Z"
}
```

### Analysis from this Journey

**Conversion Funnel**:
```
form_view (10:15) → form_submit (10:22) → email_open (10:25) → email_verified (10:26) → post_approved (14:30)
   7 min to submit      3 min to open      1 min to verify      4h to approve
```

**Marketing Attribution**:
- Source: Google CPC
- Campaign: plumber-winter-2025
- Device: Mobile
- Cost: £2.50 (from Google Ads)
- ROI: Job post created (lead value: £50)

---

## Analytics Queries & Reports

### 1. Conversion Funnel

**Question**: How many users complete the full journey?

```javascript
// MongoDB Aggregation
db.analyticsevents.aggregate([
  { $match: { eventType: { $in: ["form_view", "form_submit", "email_verified"] } } },
  { $group: {
      _id: "$eventType",
      count: { $sum: 1 }
  }}
])

// Result:
// form_view: 1000
// form_submit: 400  (40% conversion)
// email_verified: 320  (80% of submissions)
```

**Insights**:
- 60% abandon the form (optimize form UX!)
- 20% don't verify email (send reminder emails)

### 2. Campaign Performance

**Question**: Which campaign brings the most job posts?

```javascript
db.analyticsevents.aggregate([
  { $match: { eventType: "form_submit" } },
  { $group: {
      _id: "$utm.utm_campaign",
      posts: { $sum: 1 },
      devices: { $push: "$metadata.device" }
  }},
  { $sort: { posts: -1 } }
])

// Result:
// plumber-winter-2025: 150 posts (mostly mobile)
// electrician-facebook-ads: 80 posts (mostly desktop)
// builder-organic: 50 posts
```

**Insights**:
- Google plumber campaign is best performer
- Invest more budget in plumber ads
- Optimize mobile experience

### 3. User Journey Timeline

**Question**: What's the typical time from view to submit?

```javascript
// Group events by sessionId and calculate time diff
db.analyticsevents.aggregate([
  { $match: { sessionId: "sess-john-123" } },
  { $sort: { createdAt: 1 } },
  { $group: {
      _id: "$sessionId",
      events: { $push: { type: "$eventType", time: "$createdAt" } }
  }}
])
```

**Insights**:
- Average: 7 minutes from view to submit
- Users who take >15 minutes rarely complete
- Add urgency messaging to forms

### 4. Device Analysis

**Question**: Should we prioritize mobile or desktop?

```javascript
db.analyticsevents.aggregate([
  { $match: { eventType: "form_submit" } },
  { $group: {
      _id: "$metadata.device",
      count: { $sum: 1 }
  }}
])

// Result:
// mobile: 65%
// desktop: 30%
// tablet: 5%
```

**Insights**:
- Most users on mobile - optimize mobile UI
- Test form on all mobile browsers

---

## Implementation Guide

### Frontend Integration

#### 1. Track Form View
```typescript
// When user lands on form page
useEffect(() => {
  trackEvent({
    eventType: 'form_view',
    postId: null,
    sessionId: getOrCreateSessionId(),
    utm: extractUTMParams(window.location.search),
    referrer: document.referrer,
    metadata: {
      device: detectDevice(),
      browser: detectBrowser(),
      source: deriveSource(document.referrer)
    }
  });
}, []);
```

#### 2. Track Form Submit
```typescript
// When form is submitted successfully
const handleSubmit = async (formData) => {
  const response = await createJobPost(formData);

  trackEvent({
    eventType: 'form_submit',
    postId: response.postId,  // From API response
    sessionId: getSessionId(),  // Same session!
    utm: getStoredUTM(),  // Preserved from form_view
    metadata: { /* ... */ }
  });
};
```

#### 3. Track Email Verification
```typescript
// When user clicks verification link
const verifyEmail = async (token) => {
  const response = await verifyEmailToken(token);

  trackEvent({
    eventType: 'email_verified',
    postId: response.postId,
    sessionId: getSessionId(),
    metadata: { source: 'email', /* ... */ }
  });
};
```

### Backend Integration

#### Event API Endpoint
```typescript
// POST /api/analytics/event
router.post('/analytics/event', async (req, res) => {
  const event: AnalyticsEventV1 = {
    eventId: generateEventId(),
    eventType: req.body.eventType,
    postId: req.body.postId || null,
    userId: req.user?.userId || null,  // From auth
    sessionId: req.body.sessionId,
    requestId: req.headers['x-request-id'],
    utm: req.body.utm,
    referrer: req.body.referrer,
    metadata: {
      ...req.body.metadata,
      ip: req.ip,  // Server-side IP capture
      country: await getCountryFromIP(req.ip)
    },
    createdAt: new Date().toISOString()
  };

  await AnalyticsEvent.create(event);
  res.status(201).json({ success: true });
});
```

---

## Privacy & GDPR Compliance

### Data Retention
- Keep events for **2 years** (use MongoDB TTL index)
- After 2 years: Auto-delete or anonymize

### User Rights
- **Right to Access**: Provide all events for user's sessionId/userId
- **Right to Erasure**: Delete/anonymize events on request
- **Right to Portability**: Export events in JSON format

### Anonymization
```javascript
// Anonymize IP addresses
const anonymizeIP = (ip) => {
  // 192.168.1.100 → 192.168.1.0
  return ip.split('.').slice(0, 3).join('.') + '.0';
};

// Hash sessionId for privacy
const hashSession = (sessionId) => {
  return crypto.createHash('sha256').update(sessionId).digest('hex');
};
```

---

## Benefits Summary

### Business Intelligence
- ✅ Know which marketing channels work
- ✅ Optimize ad spend based on ROI
- ✅ Understand user behavior patterns

### Product Optimization
- ✅ Find and fix drop-off points
- ✅ A/B test improvements
- ✅ Optimize for mobile vs desktop

### Technical Insights
- ✅ Debug issues via requestId tracing
- ✅ Detect fraud patterns
- ✅ Monitor system performance

### Compliance
- ✅ GDPR-compliant data handling
- ✅ User data portability
- ✅ Automatic data retention

---

This analytics system provides complete visibility into user behavior and marketing performance!

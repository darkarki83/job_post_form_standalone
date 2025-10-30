# Database Schema - Job Post Platform

## Overview
This platform uses a **lead-first approach**: Job posts can be created anonymously (without user account), then converted to registered users later.

## Collections

### 1. JobPosts Collection

```javascript
{
  "_id": {
    "$oid": "68be46b7a9bb000c9f466a0c"
  },
  "postId": "jP7xkM1agRqGYBopzN7Hxyu",          // Unique post ID
  "userId": null,                                 // NULL initially, filled when user registers/claims
  "tenantId": "g1oGfzFv6xJoPYTSuhyq2e",          // Optional: if multi-tenant platform

  // Job Details
  "title": "Plumber Needed for Bathroom Renovation",
  "description": "Looking for an experienced plumber...",
  "trade": "Plumber",                             // Electrician, Builder, Carpenter, etc.

  // Location
  "location": {
    "city": "London",
    "postcode": "SW1A 1AA",
    "region": "UK",                               // UK, EU, US
    "coordinates": {                              // Optional: for map display
      "lat": 51.5074,
      "lng": -0.1278
    }
  },

  // Budget
  "budget": {
    "type": "fixed",                              // "fixed" or "hourly"
    "amount": 2500,
    "currency": "GBP"
  },

  // Contact Information (stored even without user account)
  "contact": {
    "name": "John Smith",
    "email": "john.smith@example.com",
    "countryCode": "+44",
    "phoneNumber": "+44 20 7123 4567"
  },

  // Verification & Status
  "emailVerified": false,                         // Email verification status
  "verificationToken": "abc123xyz789",            // Token sent in verification email
  "verificationTokenExpiry": {
    "$date": "2025-10-31T10:30:00.000Z"
  },
  "verifiedAt": null,                             // When email was verified

  "status": "pending",                            // "pending" | "active" | "completed" | "cancelled"
  "approvedBy": null,                             // Admin userId who approved
  "approvedAt": null,                             // When approved

  // User Conversion Tracking
  "userCreatedFromPost": false,                   // TRUE when user registers and claims this post
  "claimedAt": null,                              // When user claimed this post

  // Images/Attachments
  "images": [
    {
      "url": "https://storage.example.com/jobs/jP7xkM1agRqGYBopzN7Hxyu/img1.jpg",
      "fileId": "fileId123",
      "name": "bathroom-photo.jpg",
      "isPublic": true,
      "_id": {
        "$oid": "68c7b2f8a96b9c2e90c16e3f"
      }
    }
  ],

  // Legal Compliance
  "agreedToTerms": true,
  "termsVersion": "UK-v1.0",                      // Which T&C version they agreed to
  "agreedToDataProcessing": true,

  // Lead Source Tracking
  "source": {
    "type": "web_form",                           // "web_form" | "api" | "import"
    "formVersion": "UK",                          // UK, EU, US form
    "referrer": "https://google.com",
    "utmSource": null,
    "utmMedium": null,
    "utmCampaign": null
  },

  // Metadata
  "meta": {
    "createdAt": {
      "$date": "2025-10-28T10:30:00.000Z"
    },
    "createdBy": "anonymous",                     // "anonymous" or userId
    "updatedAt": {
      "$date": "2025-10-28T10:30:00.000Z"
    },
    "updatedBy": "system",
    "ipAddress": "192.168.1.1",                   // For fraud detection
    "userAgent": "Mozilla/5.0..."                 // For analytics
  },

  "__v": 0
}
```

---

### 2. Users Collection

```javascript
{
  "_id": {
    "$oid": "68be46b7a9bb000c9f466a0b"
  },
  "userId": "7vxkP1egRqGYBopzN7Hyju",
  "tenantId": "g1oGfzFv6xJoPYTSuhyq2e",

  // Personal Information
  "firstName": "John",
  "lastName": "Smith",
  "email": "john.smith@example.com",
  "countryCode": "+44",
  "phoneNumber": "+44 20 7123 4567",

  // User Types & Roles
  "userTypes": ["CLIENT"],                        // "CLIENT" | "VENDOR" | Both
  "authority": ["USER"],                          // "USER" | "ADMIN" | "SUPER_ADMIN"
  "isSuperAdmin": false,

  // Account Status
  "approved": true,
  "emailVerified": true,
  "phoneVerified": false,

  // Profile
  "avatar": {
    "url": "https://storage.example.com/users/7vxkP1egRqGYBopzN7Hyju/avatar.jpg",
    "fileId": "aCbLtfonXuFYp3KbQBDaDK",
    "name": "avatar.jpg",
    "isPublic": true,
    "_id": {
      "$oid": "68c7b2f8a96b9c2e90c16e3e"
    }
  },

  // Preferences
  "agreeForCommercialEmail": false,
  "agreeToTerms": true,
  "termsVersion": "v1.0",

  // Account Creation Context
  "registrationSource": "job_post_claim",         // How they signed up
  "originalPostId": "jP7xkM1agRqGYBopzN7Hxyu",   // The post that led them to register

  // Authentication (if using password auth)
  "passwordHash": "$2b$10$...",                   // Hashed password
  "lastLogin": {
    "$date": "2025-10-28T15:00:00.000Z"
  },

  // For Vendors (Tradespeople)
  "vendorProfile": {
    "companyName": "Smith Plumbing Services",
    "trades": ["Plumber", "Heating Engineer"],
    "yearsExperience": 15,
    "certifications": ["Gas Safe", "City & Guilds"],
    "serviceAreas": ["London", "Surrey"],
    "bio": "Professional plumber with 15 years experience...",
    "website": "https://smithplumbing.example.com"
  },

  // Related Data
  "jobPosts": [                                   // Posts created by this user
    "jP7xkM1agRqGYBopzN7Hxyu"
  ],
  "agents": [],                                   // Team members/employees
  "services": [],                                 // Services offered (if vendor)

  // Metadata
  "meta": {
    "createdAt": {
      "$date": "2025-10-28T12:00:00.000Z"
    },
    "createdBy": "system",
    "updatedAt": {
      "$date": "2025-10-28T12:00:00.000Z"
    },
    "updatedBy": "system"
  },

  "__v": 0
}
```

---

### 3. AdminActions Collection (Audit Trail)

```javascript
{
  "_id": {
    "$oid": "68c7b2f8a96b9c2e90c16e4a"
  },
  "actionId": "action-001",
  "adminUserId": "admin-001",
  "adminName": "Admin User",

  // Target Information
  "targetType": "JobPost",                    // "JobPost" only (User actions for future)
  "targetId": "jP7xkM1agRqGYBopzN7Hxyu",
  "targetTitle": "Plumber Needed for Bathroom Renovation",

  // Action Details
  "action": "approved",                       // "approved" | "deleted" | "status_changed"
  "reason": "Verified contact details and email confirmed",

  // Change Tracking
  "details": {
    "oldValue": "pending",
    "newValue": "active"
  },

  // Metadata
  "meta": {
    "createdAt": {
      "$date": "2025-10-28T14:30:00.000Z"
    },
    "ipAddress": "192.168.1.100",             // Optional: Admin's IP
    "userAgent": "Mozilla/5.0...",            // Optional: Admin's browser
    "sessionId": "session-xyz789"             // Optional: Admin's session
  },

  "__v": 0
}
```

**Action Types** (Job Posts only):
- **approved**: Admin approved a pending job post (status: pending → active)
- **deleted**: Admin deleted a job post
- **status_changed**: Admin changed job post status (e.g., active → completed)

**Important Notes**:
- Actions are **immutable** - cannot be edited or deleted once created
- Provides complete audit trail for compliance (GDPR, legal requirements)
- Automatically logged by the system when admin performs actions
- User-related actions will be added in future when user management is implemented

---

### 4. AnalyticsEvents Collection (Tracking & Attribution)

```javascript
{
  "_id": {
    "$oid": "68c7b2f8a96b9c2e90c16e5b"
  },
  "eventId": "evt-001",
  "eventType": "form_submit",              // What happened

  // Context
  "postId": "jP7xkM1agRqGYBopzN7Hxyu",    // null if event not related to post
  "userId": null,                           // null for anonymous users

  // Session & Request Tracking
  "sessionId": "sess-abc123xyz",            // Track user journey across events
  "requestId": "req-def456uvw",             // Trace through backend/workers

  // Marketing Attribution (UTM Parameters)
  "utm": {
    "utm_source": "google",                 // Traffic source
    "utm_medium": "cpc",                    // Marketing medium (cpc, email, social)
    "utm_campaign": "plumber-london-2025",  // Campaign name
    "utm_term": "emergency plumber",        // Keyword (for PPC)
    "utm_content": "ad-variant-a"          // Ad variant (A/B testing)
  },

  "referrer": "https://google.com/search?q=find+plumber+london",  // Previous page URL

  // Device & Technical Metadata
  "metadata": {
    "source": "google",                     // google / facebook / direct / referral
    "device": "mobile",                     // mobile / desktop / tablet
    "browser": "Chrome",                    // Browser name
    "os": "Android",                        // Operating system
    "country": "UK",                        // User country (from IP)
    "ip": "192.168.1.50"                   // IP address (for fraud detection)
  },

  "createdAt": {
    "$date": "2025-10-28T10:25:00.000Z"
  },

  "__v": 0
}
```

**Event Types**:
- **form_view**: User opened the job post form
- **form_submit**: User submitted a job post
- **email_open**: User opened verification email
- **email_verified**: User clicked verification link
- **quote_received**: Job post received a quote (future)
- **post_approved**: Admin approved the post
- **post_deleted**: Admin deleted the post

**Use Cases**:
- **Conversion Funnel**: Track `form_view` → `form_submit` → `email_verified` → `post_approved`
- **Marketing ROI**: Which campaigns bring the most job posts?
- **User Journey**: See full path from first visit to completed job
- **Device Optimization**: Are mobile users abandoning forms more?
- **Fraud Detection**: Identify suspicious patterns via IP/session

**Important Notes**:
- Events are **immutable** - cannot be edited once created
- High volume collection - use indexes for performance
- Consider data retention policy (e.g., keep 2 years)
- GDPR compliance: anonymize/delete user data on request

---

## Workflow: Lead to User Conversion

### Phase 1: Anonymous Job Post Creation
```javascript
// User submits form
POST /api/job-posts

{
  userId: null,                    // Not registered yet
  emailVerified: false,
  status: "pending",
  contact: {
    email: "john@example.com",
    name: "John Smith"
  }
  // ... other fields
}

// System sends verification email
```

### Phase 2: Email Verification
```javascript
// User clicks link in email
GET /api/verify-email/:token

// Updates post:
{
  emailVerified: true,
  verifiedAt: "2025-10-28T10:35:00Z",
  status: "pending"                // Still pending admin approval
}
```

### Phase 3: Admin Approval
```javascript
// Admin approves in admin panel
PATCH /api/admin/job-posts/:postId

{
  status: "active",
  approvedBy: "adminUserId123",
  approvedAt: "2025-10-28T11:00:00Z"
}
```

### Phase 4: User Registration (Optional - Lead Conversion)
```javascript
// Later, user wants to manage their post
// Email sent: "Create account to manage your job post"
// User clicks "Create Account"

POST /api/auth/register-from-post

{
  postId: "jP7xkM1agRqGYBopzN7Hxyu",
  password: "securePassword123"
}

// System creates User:
{
  userId: "7vxkP1egRqGYBopzN7Hyju",
  email: "john@example.com",      // From job post
  firstName: "John",               // From job post
  lastName: "Smith",               // From job post
  userTypes: ["CLIENT"],
  registrationSource: "job_post_claim",
  originalPostId: "jP7xkM1agRqGYBopzN7Hxyu"
}

// Updates JobPost:
{
  userId: "7vxkP1egRqGYBopzN7Hyju",  // Now linked!
  userCreatedFromPost: true,
  claimedAt: "2025-10-28T14:00:00Z"
}
```

---

## Database Indexes

### JobPosts Collection
```javascript
db.jobposts.createIndex({ "postId": 1 }, { unique: true })
db.jobposts.createIndex({ "userId": 1 })
db.jobposts.createIndex({ "contact.email": 1 })
db.jobposts.createIndex({ "status": 1 })
db.jobposts.createIndex({ "emailVerified": 1 })
db.jobposts.createIndex({ "meta.createdAt": -1 })
db.jobposts.createIndex({ "trade": 1 })
db.jobposts.createIndex({ "location.region": 1 })
db.jobposts.createIndex({ "verificationToken": 1 }, { sparse: true })

// Compound indexes
db.jobposts.createIndex({ "status": 1, "emailVerified": 1 })
db.jobposts.createIndex({ "userId": 1, "status": 1 })
```

### Users Collection
```javascript
db.users.createIndex({ "userId": 1 }, { unique: true })
db.users.createIndex({ "email": 1 }, { unique: true })
db.users.createIndex({ "phoneNumber": 1 })
db.users.createIndex({ "userTypes": 1 })
db.users.createIndex({ "meta.createdAt": -1 })
```

### AdminActions Collection
```javascript
db.adminactions.createIndex({ "actionId": 1 }, { unique: true })
db.adminactions.createIndex({ "adminUserId": 1 })
db.adminactions.createIndex({ "targetType": 1 })
db.adminactions.createIndex({ "targetId": 1 })
db.adminactions.createIndex({ "action": 1 })
db.adminactions.createIndex({ "meta.createdAt": -1 })

// Compound indexes for common queries
db.adminactions.createIndex({ "targetType": 1, "targetId": 1 })
db.adminactions.createIndex({ "adminUserId": 1, "meta.createdAt": -1 })
db.adminactions.createIndex({ "action": 1, "meta.createdAt": -1 })
```

### AnalyticsEvents Collection
```javascript
db.analyticsevents.createIndex({ "eventId": 1 }, { unique: true })
db.analyticsevents.createIndex({ "eventType": 1 })
db.analyticsevents.createIndex({ "postId": 1 })
db.analyticsevents.createIndex({ "userId": 1 })
db.analyticsevents.createIndex({ "sessionId": 1 })
db.analyticsevents.createIndex({ "createdAt": -1 })

// Marketing attribution indexes
db.analyticsevents.createIndex({ "utm.utm_source": 1 })
db.analyticsevents.createIndex({ "utm.utm_campaign": 1 })
db.analyticsevents.createIndex({ "metadata.source": 1 })
db.analyticsevents.createIndex({ "metadata.device": 1 })

// Compound indexes for analytics queries
db.analyticsevents.createIndex({ "eventType": 1, "createdAt": -1 })
db.analyticsevents.createIndex({ "sessionId": 1, "createdAt": 1 })  // User journey
db.analyticsevents.createIndex({ "postId": 1, "eventType": 1 })     // Post funnel
db.analyticsevents.createIndex({ "utm.utm_campaign": 1, "eventType": 1, "createdAt": -1 })  // Campaign performance

// TTL index - auto-delete events older than 2 years (optional)
db.analyticsevents.createIndex({ "createdAt": 1 }, { expireAfterSeconds: 63072000 })
```

---

## Benefits of This Approach

### 1. **Low Barrier to Entry**
- Users can post jobs without creating account
- Reduces form abandonment
- Captures more leads

### 2. **Lead Nurturing**
- Collect contact info first
- Send verification email (first touchpoint)
- Send "create account" email later (conversion opportunity)
- Track conversion rate: anonymous posts → registered users

### 3. **Flexibility**
- Post exists independently of user account
- User can create account anytime
- Multiple posts can be claimed by same user
- Can transfer post ownership

### 4. **Data Quality**
- Email verification ensures valid contact
- Admin approval prevents spam
- User registration adds accountability

---

## TypeScript Interfaces (for Backend)

```typescript
interface JobPost {
  _id?: ObjectId;
  postId: string;
  userId: string | null;              // NULL for anonymous posts
  tenantId?: string;

  title: string;
  description: string;
  trade: string;

  location: {
    city: string;
    postcode: string;
    region: 'UK' | 'EU' | 'US';
    coordinates?: {
      lat: number;
      lng: number;
    };
  };

  budget: {
    type: 'fixed' | 'hourly';
    amount: number;
    currency: string;
  };

  contact: {
    name: string;
    email: string;
    countryCode: string;
    phoneNumber: string;
  };

  emailVerified: boolean;
  verificationToken?: string;
  verificationTokenExpiry?: Date;
  verifiedAt?: Date;

  status: 'pending' | 'active' | 'completed' | 'cancelled';
  approvedBy?: string;
  approvedAt?: Date;

  userCreatedFromPost: boolean;
  claimedAt?: Date;

  images?: Array<{
    url: string;
    fileId: string;
    name: string;
    isPublic: boolean;
    _id?: ObjectId;
  }>;

  agreedToTerms: boolean;
  termsVersion: string;
  agreedToDataProcessing: boolean;

  source: {
    type: 'web_form' | 'api' | 'import';
    formVersion: 'UK' | 'EU' | 'US';
    referrer?: string;
    utmSource?: string;
    utmMedium?: string;
    utmCampaign?: string;
  };

  meta: {
    createdAt: Date;
    createdBy: string;
    updatedAt: Date;
    updatedBy: string;
    ipAddress?: string;
    userAgent?: string;
  };

  __v?: number;
}

interface User {
  _id?: ObjectId;
  userId: string;
  tenantId?: string;

  firstName: string;
  lastName: string;
  email: string;
  countryCode: string;
  phoneNumber: string;

  userTypes: Array<'CLIENT' | 'VENDOR'>;
  authority: Array<'USER' | 'ADMIN' | 'SUPER_ADMIN'>;
  isSuperAdmin: boolean;

  approved: boolean;
  emailVerified: boolean;
  phoneVerified: boolean;

  avatar?: {
    url: string;
    fileId: string;
    name: string;
    isPublic: boolean;
    _id?: ObjectId;
  };

  agreeForCommercialEmail: boolean;
  agreeToTerms: boolean;
  termsVersion: string;

  registrationSource?: 'job_post_claim' | 'direct' | 'vendor_signup';
  originalPostId?: string;

  passwordHash?: string;
  lastLogin?: Date;

  vendorProfile?: {
    companyName?: string;
    trades?: string[];
    yearsExperience?: number;
    certifications?: string[];
    serviceAreas?: string[];
    bio?: string;
    website?: string;
  };

  jobPosts: string[];
  agents: any[];
  services: any[];

  meta: {
    createdAt: Date;
    createdBy: string;
    updatedAt: Date;
    updatedBy: string;
  };

  __v?: number;
}

interface AdminAction {
  _id?: ObjectId;
  actionId: string;
  adminUserId: string;
  adminName: string;

  targetType: 'JobPost';                // Currently only JobPost (User for future)
  targetId: string;
  targetTitle?: string;                 // Job title for display

  action: 'approved' | 'deleted' | 'status_changed';
  reason?: string;

  details?: {
    oldValue?: any;
    newValue?: any;
  };

  meta: {
    createdAt: Date;
    ipAddress?: string;                 // Optional: Admin's IP
    userAgent?: string;                 // Optional: Admin's browser
    sessionId?: string;                 // Optional: Admin's session
  };

  __v?: number;
}

type EventType =
  | "form_view"
  | "form_submit"
  | "email_open"
  | "email_verified"
  | "quote_received"
  | "post_approved"
  | "post_deleted";

interface AnalyticsEventV1 {
  _id?: ObjectId;
  eventId: string;
  eventType: EventType;

  // Context
  postId?: string | null;                 // null if event not related to post
  userId?: string | null;                 // null for anonymous users

  // Session & Request Tracking
  sessionId: string;                      // Anonymous session before/after login
  requestId?: string;                     // Trace through backend/workers

  // Marketing Attribution (UTM Parameters)
  utm?: {
    utm_source?: string;                  // google, facebook, twitter
    utm_medium?: string;                  // cpc, email, social
    utm_campaign?: string;                // Campaign name
    utm_term?: string;                    // Keyword
    utm_content?: string;                 // Ad variant
  };

  referrer?: string;                      // Full URL of previous page

  // Device & Technical Metadata
  metadata?: {
    source?: string;                      // google / direct / referral / meta
    device?: "mobile" | "desktop" | "tablet" | string;
    browser?: string;                     // Chrome, Firefox, Safari
    os?: string;                          // Windows, MacOS, iOS, Android
    country?: string;                     // UK, US, etc.
    ip?: string;                          // IP address (for fraud detection)
  };

  createdAt: Date;                        // ISO 8601

  __v?: number;
}
```

---

## API Endpoints Summary

```
# Public Endpoints
POST   /api/job-posts                    # Create anonymous job post
GET    /api/verify-email/:token          # Verify email from link
POST   /api/auth/register-from-post      # Convert lead to user

# User Endpoints (Authenticated)
GET    /api/my-job-posts                 # User's posts
PATCH  /api/job-posts/:postId            # Update own post
DELETE /api/job-posts/:postId            # Delete own post
POST   /api/job-posts/:postId/claim      # Claim anonymous post

# Admin Endpoints (Admin Only)
GET    /api/admin/job-posts                   # All posts (with filters)
PATCH  /api/admin/job-posts/:postId           # Update any post
DELETE /api/admin/job-posts/:postId           # Delete any post
POST   /api/admin/job-posts/:postId/approve   # Approve post
GET    /api/admin/users                       # All users (future)

# Admin Actions (Audit Trail)
GET    /api/admin/actions                     # Get all admin actions (paginated)
GET    /api/admin/actions/target/:targetId    # Get actions for specific job post
GET    /api/admin/actions/admin/:adminId      # Get actions by specific admin
POST   /api/admin/actions                     # Create action (internal - auto-logged)

# Analytics Events (Tracking)
POST   /api/analytics/event                   # Track event (called by frontend)
GET    /api/admin/analytics/events            # Get all events (admin only, paginated)
GET    /api/admin/analytics/funnel/:postId    # Get conversion funnel for post
GET    /api/admin/analytics/sessions/:sessionId  # Get all events in session (user journey)
GET    /api/admin/analytics/campaigns         # Campaign performance report
GET    /api/admin/analytics/dashboard         # Analytics dashboard data
```

**Notes**:
- Admin actions are automatically created when admins perform operations
- Analytics events are tracked automatically on frontend actions (form views, submits, etc.)
- Use proper authentication/authorization for all admin endpoints

This schema supports your lead generation strategy while maintaining data integrity, full audit trail, comprehensive analytics, and allowing for future growth!

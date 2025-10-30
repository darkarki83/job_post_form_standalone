# Email Verification Flow Documentation

## Overview
This document explains how email verification works in the job posting system and how it relates to the admin approval process.

## Two-Stage Approval System

### Stage 1: Email Verification (User Action)
**When**: User submits a job post
**Status**: `verified: false`, `status: 'pending'`

1. User fills out job post form and submits
2. System creates job post with `verified: false`
3. Verification email is sent to user's email address
4. User clicks verification link in email
5. System updates post to `verified: true`

**Purpose**: Ensures the user owns the email address and can be contacted

### Stage 2: Admin Approval (Admin Action)
**When**: After email is verified
**Status**: `verified: true`, `status: 'pending'`

1. Admin reviews the verified job post
2. Admin clicks "Approve" button
3. Status changes from `pending` to `active`
4. Job post becomes visible to tradespeople

**Purpose**: Manual quality control and spam prevention

## Status Flow

```
┌─────────────────┐
│ User Submits    │
│ verified: false │
│ status: pending │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│ User Verifies   │
│ Email          │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│ Email Verified  │
│ verified: true  │
│ status: pending │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│ Admin Approves  │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│ Job Active      │
│ verified: true  │
│ status: active  │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│ Job Completed   │
│ verified: true  │
│ status: completed│
└─────────────────┘
```

## Admin Panel Features

### Statistics Dashboard
The admin panel shows 5 key metrics:

1. **Total Posts**: All job posts in the system
2. **Not Verified**: Posts where email is not verified (`verified: false`)
3. **Pending**: Verified posts waiting for admin approval (`verified: true` && `status: pending`)
4. **Active**: Approved and live posts (`status: active`)
5. **Completed**: Finished jobs (`status: completed`)

### Filters
- **All**: Show all job posts
- **Not Verified**: Show only posts with unverified emails
- **Pending**: Show only verified posts waiting for approval
- **Active**: Show only approved, active posts
- **Completed**: Show only completed jobs

### Visual Indicators

#### Verification Badges
Each job post shows its verification status:
- ✓ **Email Verified** (blue badge): Email has been verified
- ✗ **Not Verified** (red badge): Email not yet verified

#### Approve Button Behavior
- **Verified Posts**: Green "Approve" button is clickable
- **Unverified Posts**: Gray "Approve" button is disabled with tooltip explaining: "Cannot approve: Email not verified"

## Mock Data Examples

The system includes 5 sample job posts:

1. **job-001**: ✓ Verified, Pending approval
2. **job-002**: ✓ Verified, Active (already approved)
3. **job-003**: ✗ NOT Verified, Pending (cannot be approved yet)
4. **job-004**: ✓ Verified, Completed
5. **job-005**: ✗ NOT Verified, Pending (cannot be approved yet)

## Why This Two-Stage System?

### Security Benefits
1. **Email Validation**: Ensures contact information is real and working
2. **Spam Prevention**: Prevents automated spam submissions
3. **Quality Control**: Admin can review posts before they go live
4. **User Accountability**: Users must have access to the email they provide

### User Experience Benefits
1. **Clear Process**: Users understand they need to verify email first
2. **No Fake Emails**: Reduces wasted time for tradespeople contacting fake emails
3. **Professional Platform**: Shows the platform is well-moderated

## Future Enhancements

### Automatic Actions
- Auto-delete unverified posts after 24-48 hours
- Send reminder emails for unverified posts
- Auto-approve verified posts from trusted users

### Admin Tools
- Bulk approve multiple verified posts
- Manually mark email as verified (in case of issues)
- Resend verification email
- View verification timestamp

### Analytics
- Track verification rates
- Time between submission and verification
- Time between verification and approval

## Integration Points

### When Building Real Backend

**Email Verification Endpoint**:
```typescript
POST /api/verify-email/:token
// Sets verified: true for the job post
```

**Admin Approval Endpoint**:
```typescript
PATCH /api/admin/job-posts/:id/status
// Requires: verified === true
// Changes: status to 'active'
```

**Form Submission**:
```typescript
POST /api/job-posts
// Creates post with verified: false
// Triggers verification email
// Returns: "Please check your email to verify"
```

## Best Practices

### For Admins
1. Always check the "Not Verified" filter first to monitor verification rates
2. Only approve posts with verified emails (system enforces this)
3. Delete spam posts even if verified
4. Review contact information looks legitimate

### For Development
1. Never allow approving unverified posts (UI prevents this)
2. Always show verification status clearly
3. Provide helpful error messages
4. Log verification and approval actions for audit trail

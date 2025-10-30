# Admin Actions Log - Audit Trail System

## Overview
The Admin Actions Log provides a complete audit trail of all administrative actions performed in the system. This ensures accountability, compliance, and transparency for all admin operations.

## Features

### 1. Automatic Action Logging
Every admin action is automatically logged with:
- **Who**: Admin user ID and name
- **What**: Action type (approved, rejected, deleted, status_changed, created)
- **When**: Timestamp of the action
- **Where**: Target type (JobPost or User) and target ID
- **Why**: Reason for the action
- **Details**: Old and new values for the change

### 2. Action Types

#### Job Post Actions
- **approved**: Admin approved a pending job post
- **rejected**: Admin rejected a job post
- **deleted**: Admin deleted a job post
- **status_changed**: Admin changed job post status
- **created**: Job post was created

#### User Actions
- **approved**: Admin approved a vendor account
- **deleted**: Admin deleted a user account
- **status_changed**: Admin changed user status

### 3. Admin Dashboard Features

#### Statistics Cards
- **Total Actions**: All logged actions
- **Approved**: Count of approval actions
- **Deleted**: Count of deletion actions
- **Status Changes**: Count of status change actions

#### Filtering System
- **Search**: Search by target name, admin name, or reason
- **Target Type Filter**: Filter by JobPost or User
- **Action Type Filter**: Filter by All, Approved, Deleted

#### Timeline View
Beautiful chronological timeline showing:
- Color-coded action badges
- Action icons for visual recognition
- Complete action details
- Old → New value changes
- Timestamp and action ID

## Architecture

### TypeScript Interface
```typescript
interface AdminAction {
  actionId: string;
  adminUserId: string;
  adminName: string;
  targetType: 'JobPost' | 'User';
  targetId: string;
  targetTitle?: string;
  action: 'approved' | 'rejected' | 'deleted' | 'status_changed' | 'created';
  reason?: string;
  details?: {
    oldValue?: any;
    newValue?: any;
  };
  createdAt: string;
}
```

### Context Provider
**AdminActionsContext** provides:
- `actions`: Array of all admin actions
- `loading`: Loading state
- `error`: Error state
- `addAction()`: Add new action to log
- `getActionsByTargetId()`: Get all actions for specific target
- `getActionsByAdminId()`: Get all actions by specific admin

### Automatic Logging
Admin actions are automatically logged in **JobPostContext**:

```typescript
// When admin approves a post
updateJobPostStatus(id, 'active', 'Verified and approved');
// Automatically creates log entry

// When admin deletes a post
deleteJobPost(id, 'Spam content');
// Automatically creates log entry
```

## File Structure

```
src/
├── types/
│   └── AdminAction.ts                 # TypeScript interface
├── data/
│   └── mockAdminActions.json          # 7 sample actions
├── contexts/
│   └── AdminActionsContext.tsx        # Context provider
├── pages/
│   └── admin/
│       └── AdminActionsLog.tsx        # Main page component
└── components/
    └── admin/
        └── AdminLayout.tsx            # Updated with Actions Log nav
```

## Usage

### Accessing the Log
1. Go to Admin Panel
2. Click "Actions Log" in the navigation
3. View complete audit trail

### Understanding the Timeline
Each action entry shows:
- **Icon Badge**: Visual indicator of action type
  - ✓ Green = Approved
  - ✗ Red = Rejected/Deleted
  - ↻ Blue = Status Changed
  - + Gray = Created

- **Action Details**:
  - Admin who performed the action
  - Action type badge
  - Target type (JobPost or User)
  - Target name/title

- **Reason**: Why the action was taken
- **Value Changes**: Before and after values
- **Timestamp**: When the action occurred
- **Action ID**: Unique identifier for tracking

## Mock Data Examples

The system includes 7 sample admin actions:

1. **Approved** electrician job post
2. **Status changed** plumber job to pending
3. **Deleted** spam roofing job
4. **Status changed** carpentry job to completed
5. **Rejected** duplicate plumbing post
6. **Approved** vendor user account
7. **Deleted** fraudulent user account

## Integration with JobPostContext

The JobPostContext automatically logs actions when:

### Status Updates
```typescript
updateJobPostStatus('job-001', 'active', 'Verified contact info');
```
Creates log entry:
- Action: `approved` (if pending → active)
- Reason: "Verified contact info"
- Details: `{ oldValue: 'pending', newValue: 'active' }`

### Deletions
```typescript
deleteJobPost('job-002', 'Duplicate post');
```
Creates log entry:
- Action: `deleted`
- Reason: "Duplicate post"
- Details: `{ oldValue: 'active', newValue: 'deleted' }`

## Benefits

### 1. **Accountability**
- Every admin action is tracked
- Know who made what change and when
- Reason required for sensitive actions

### 2. **Compliance**
- GDPR/legal requirement for data changes
- Audit trail for regulatory compliance
- Prove due diligence in disputes

### 3. **Debugging**
- Track down when/why something changed
- Identify patterns (e.g., one admin deletes more posts)
- Historical record of system state

### 4. **Transparency**
- Admins know their actions are logged
- Reduces abuse of admin privileges
- Build trust with stakeholders

### 5. **Analytics**
- How many posts are approved vs rejected?
- Which admins are most active?
- Common reasons for deletions

## Future Enhancements

### Real-time Features
- Live updates when other admins take actions
- WebSocket/polling for real-time log
- Notifications for critical actions

### Advanced Filtering
- Date range picker
- Admin user filter
- Multiple action type selection
- Export filtered results

### Enhanced Details
- IP address of admin
- User agent/device info
- Geolocation of action
- Related actions (e.g., all actions on one job)

### Reporting
- Generate PDF/CSV reports
- Weekly/monthly summaries
- Admin activity metrics
- Compliance reports

### Undo/Revert
- Ability to undo certain actions
- Restore deleted items
- Rollback status changes

### Alerts
- Email notifications for sensitive actions
- Slack/Teams integration
- Real-time alerts for suspicious patterns

## Backend Integration

When implementing the real backend:

### Database Schema (MongoDB)
```javascript
{
  _id: ObjectId,
  actionId: "action-123",
  adminUserId: "admin-001",
  adminName: "Admin User",
  targetType: "JobPost",
  targetId: "job-123",
  targetTitle: "Plumber Needed",
  action: "approved",
  reason: "Verified contact",
  details: {
    oldValue: "pending",
    newValue: "active"
  },
  meta: {
    ipAddress: "192.168.1.1",
    userAgent: "Mozilla/5.0...",
    sessionId: "session-123"
  },
  createdAt: ISODate("2025-10-30T10:00:00Z")
}
```

### API Endpoints
```
GET  /api/admin/actions              # Get all actions (paginated)
GET  /api/admin/actions/:id          # Get specific action
GET  /api/admin/actions/target/:id   # Get actions for target
GET  /api/admin/actions/admin/:id    # Get actions by admin
POST /api/admin/actions              # Create action (internal)
```

### Middleware
```typescript
// Automatic logging middleware
const logAdminAction = (action, target, reason) => {
  const logEntry = {
    actionId: generateId(),
    adminUserId: req.user.userId,
    adminName: req.user.name,
    targetType: target.type,
    targetId: target.id,
    targetTitle: target.title,
    action: action,
    reason: reason,
    details: {
      oldValue: target.oldValue,
      newValue: target.newValue
    },
    meta: {
      ipAddress: req.ip,
      userAgent: req.headers['user-agent'],
      sessionId: req.session.id
    },
    createdAt: new Date()
  };

  await AdminAction.create(logEntry);
};
```

## Security Considerations

1. **Immutable Logs**: Actions cannot be edited or deleted once created
2. **Admin Only**: Only admins can view the actions log
3. **Sensitive Data**: Mask sensitive info (passwords, tokens) in details
4. **Retention Policy**: Define how long to keep logs (1-7 years)
5. **Access Control**: Log who views the audit log itself

## Testing

### Test Cases
- ✓ Action is logged when post is approved
- ✓ Action is logged when post is deleted
- ✓ Action includes correct admin info
- ✓ Action includes reason
- ✓ Details show old and new values
- ✓ Timestamp is accurate
- ✓ Actions can be filtered by type
- ✓ Actions can be searched

---

This audit trail system ensures full accountability and compliance for your job posting platform!

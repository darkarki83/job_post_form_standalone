# Admin Panel Documentation

## Overview
A professional admin panel for managing job posts with a clean, organized architecture.

## Features

### Job Posts Management
- **View all job posts** in a comprehensive table view
- **Filter by status**: All, Pending, Active, Completed
- **Search functionality**: Search by title, trade, or location
- **Statistics dashboard**: Real-time stats showing total posts and breakdown by status
- **Status management**: Approve pending posts, mark as completed
- **Delete functionality**: Remove job posts with confirmation
- **Verified badge**: Visual indicator for verified posts

## Architecture

### File Structure
```
src/
├── data/
│   └── mockJobPosts.json          # Mock data (5 sample job posts)
├── types/
│   └── JobPost.ts                 # TypeScript interfaces
├── contexts/
│   └── JobPostContext.tsx         # Context provider for job posts
├── components/
│   └── admin/
│       └── AdminLayout.tsx        # Admin panel layout wrapper
└── pages/
    └── admin/
        └── AdminJobPosts.tsx      # Main job posts listing page
```

### Context Provider Pattern
The admin panel uses React Context for state management:

**JobPostContext** provides:
- `jobPosts`: Array of all job posts
- `loading`: Loading state
- `error`: Error state
- `getJobPostById(id)`: Retrieve specific post
- `updateJobPostStatus(id, status)`: Update post status
- `deleteJobPost(id)`: Remove a post

### Routes
- `/admin/job-posts` - Main admin dashboard

Access via the "Admin" link in the header navigation.

## Data Structure

### JobPost Interface
```typescript
{
  id: string;
  title: string;
  description: string;
  trade: string;
  location: {
    city: string;
    postcode: string;
  };
  budget: {
    type: 'fixed' | 'hourly';
    amount: number;
    currency: string;
  };
  contact: {
    name: string;
    email: string;
    phone: string;
  };
  status: 'pending' | 'active' | 'completed';
  createdAt: string;
  verified: boolean;
}
```

## How to Use

### Accessing the Admin Panel
1. Click the "Admin" button in the header
2. View the dashboard with statistics and job posts table

### Managing Job Posts

#### Approve Pending Posts
- Click "Approve" on any pending job post
- Status changes to "Active"

#### Complete Active Posts
- Click "Complete" on any active job post
- Status changes to "Completed"

#### Delete Posts
- Click "Delete" on any job post
- Confirm the deletion in the popup dialog

### Filtering and Search
- Use the status filter buttons to show specific statuses
- Type in the search box to filter by title, trade, or location

## Future Enhancements

### Potential Features
- User authentication for admin access
- Real API integration (replace mock data)
- Export functionality (CSV, PDF)
- Bulk operations
- Job post editing
- Analytics and reporting
- Email notifications
- Image galleries for job posts

### Backend Integration
To connect to a real API:
1. Update `JobPostContext.tsx` to fetch from your API endpoint
2. Add authentication middleware
3. Implement error handling and retry logic
4. Add pagination for large datasets

## Development

### Mock Data
Sample data is stored in `src/data/mockJobPosts.json` with 5 example job posts covering different trades and statuses.

### TypeScript
Fully typed with TypeScript for type safety and better developer experience.

### Styling
Uses Tailwind CSS for responsive, professional UI design.

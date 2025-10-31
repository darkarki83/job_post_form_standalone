# Job Post Form - Standalone Application

A professional job posting platform with multi-region support (UK, EU, US), admin panel, and comprehensive analytics tracking.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Type checking
npm run type-check
```

## 📋 Features

### User Features
- ✅ Multi-region job post forms (UK, EU, US)
- ✅ Email verification system
- ✅ Photo upload support
- ✅ GDPR-compliant consent flows
- ✅ Mobile-responsive design

### Admin Features
- ✅ Job posts management panel
- ✅ Email verification status tracking
- ✅ Admin actions audit trail
- ✅ Comprehensive analytics dashboard
- ✅ Campaign performance tracking

### Analytics Features
- ✅ UTM campaign tracking
- ✅ Device/browser/OS detection
- ✅ Conversion funnel metrics
- ✅ Traffic source attribution
- ✅ Real-time event logging
- ✅ 25 mock events for demo

## 📊 View Analytics Dashboard

1. Run `npm run dev`
2. Click **"Admin"** → **"Analytics"**
3. See 25 realistic events with full metrics!

**See:** [docs/QUICK_START_ANALYTICS.md](docs/QUICK_START_ANALYTICS.md)

## 📚 Documentation

All documentation is in the **[docs/](docs/)** folder:

### Quick Start Guides
- **[docs/QUICK_START_ANALYTICS.md](docs/QUICK_START_ANALYTICS.md)** - 3-step guide to view analytics
- **[docs/HOW_TO_VIEW_ANALYTICS.md](docs/HOW_TO_VIEW_ANALYTICS.md)** - Detailed user guide

### Complete Documentation
- **[docs/README.md](docs/README.md)** - Documentation index
- **[docs/ANALYTICS_SUMMARY.md](docs/ANALYTICS_SUMMARY.md)** - Analytics overview
- **[docs/DATABASE_SCHEMA.md](docs/DATABASE_SCHEMA.md)** - MongoDB schema
- **[docs/DEPLOYMENT_OPTIONS.md](docs/DEPLOYMENT_OPTIONS.md)** - Deployment strategies

## 🗂️ Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── admin/          # Admin panel components
│   └── JobPostForm/    # Form-specific components
├── contexts/           # React Context providers
│   ├── AnalyticsContext.tsx
│   ├── JobPostContext.tsx
│   └── AdminActionsContext.tsx
├── hooks/              # Custom React hooks
│   ├── useAnalyticsTracking.ts
│   └── useJobPostForm.ts
├── pages/              # Page components
│   ├── JobPostFormUK.tsx
│   ├── JobPostFormEU.tsx
│   ├── JobPostFormUS.tsx
│   └── admin/          # Admin pages
├── types/              # TypeScript type definitions
├── data/               # Mock data files
└── utils/              # Utility functions

docs/                   # All documentation
dist/                   # Production build output
```

## 🛠️ Tech Stack

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool & dev server
- **Tailwind CSS** - Styling
- **React Context API** - State management

## 📈 Analytics Dashboard

The analytics dashboard shows:
- **Key Metrics:** Views, Submits, Verified, Conversion Rates
- **Device Breakdown:** Mobile/Desktop/Tablet distribution
- **Traffic Sources:** Google, Facebook, Direct, etc.
- **Campaign Performance:** UTM tracking with conversion rates
- **Recent Events:** Real-time activity timeline

**Mock Data:** 25 realistic events across 5 campaigns

## 🔐 Admin Panel

Access the admin panel:
1. Click **"Admin"** link in header
2. Navigate between:
   - **Job Posts** - Manage submissions
   - **Actions Log** - View audit trail
   - **Analytics** - Track performance

## 🗄️ Database Schema

Ready for MongoDB deployment with:
- **JobPosts** collection
- **Users** collection
- **AdminActions** collection
- **AnalyticsEvents** collection

**See:** [docs/DATABASE_SCHEMA.md](docs/DATABASE_SCHEMA.md)

## 🚀 Deployment

### ⭐ Recommended: Firebase
- **Cost**: $5-15/month ($60-180/year)
- **Timeline**: 7-10 days
- **Best for**: Fast launch, low cost, zero maintenance

**See:** [docs/FIREBASE_RECOMMENDATION.md](docs/FIREBASE_RECOMMENDATION.md)

### Other Options:
1. **Custom Backend** - 3-4 weeks, $60-100/month, full control
2. **Supabase** - 10-14 days, $25-60/month, PostgreSQL

**Compare:** [docs/DEPLOYMENT_OPTIONS.md](docs/DEPLOYMENT_OPTIONS.md)

## 📝 Next Steps

### For Development:
- Connect to real backend (replace localStorage with API)
- Set up MongoDB database
- Configure email service
- Deploy to production

### For Marketing:
- View analytics dashboard
- Review campaign performance
- Optimize conversion funnel
- A/B test form variations

## 📖 Learn More

- [React Documentation](https://react.dev/)
- [Vite Documentation](https://vite.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)

## 📄 License

See project documentation for details.

---

**Quick Links:**
- [View Analytics](docs/QUICK_START_ANALYTICS.md)
- [Firebase Recommendation](docs/FIREBASE_RECOMMENDATION.md) ⭐ **Deployment Guide**
- [Database Schema](docs/DATABASE_SCHEMA.md)
- [All Documentation](docs/README.md)

# How to View Analytics Dashboard

## Quick Start

1. **Start the development server:**
   ```bash
   npm run dev
   ```

2. **Open your browser** to the local URL (usually `http://localhost:5173`)

3. **Navigate to Admin Analytics:**
   - Click **"Admin"** link in the header (purple link on the right)
   - Click **"Analytics"** button in the admin navigation

## What You'll See

The dashboard includes **25 realistic events** showing:
- 15 form views
- 7 form submissions  
- 5 email verifications
- 3 admin approvals

### Interactive Features

**Time Range Filters:**
- 24 Hours - Recent events
- 7 Days - Default view (shows all mock data)
- 30 Days - Monthly view
- All Time - Everything

**Metrics:**
- Form Views, Submits, Verified
- Conversion Rate (46.7%)
- Verification Rate (71.4%)

**Charts:**
- Device Breakdown (Mobile 52%, Desktop 28%, Tablet 8%)
- Traffic Sources (Google 36%, Facebook 24%, Direct 16%)
- Campaign Performance Table
- Recent Events Timeline

## Testing Live Tracking

1. Open a form (UK/EU/US)
2. Check browser console: `📊 Analytics Event Tracked: form_view`
3. Fill and submit → See `form_submit` and `email_verified`
4. Go to Admin > Analytics to see your events

See QUICK_START_ANALYTICS.md for detailed testing guide.

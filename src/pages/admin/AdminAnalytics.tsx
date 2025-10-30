import { useState, useMemo } from 'react';
import { useAnalytics } from '../../contexts/AnalyticsContext';
import AdminLayout from '../../components/admin/AdminLayout';

interface AdminAnalyticsProps {
  onNavigate: (page: string) => void;
}

const AdminAnalytics = ({ onNavigate }: AdminAnalyticsProps) => {
  const { events, loading, error } = useAnalytics();
  const [timeRange, setTimeRange] = useState<'24h' | '7d' | '30d' | 'all'>('7d');

  // Filter events by time range
  const filteredEvents = useMemo(() => {
    if (timeRange === 'all') return events;

    const now = new Date();
    const cutoff = new Date();

    if (timeRange === '24h') {
      cutoff.setHours(now.getHours() - 24);
    } else if (timeRange === '7d') {
      cutoff.setDate(now.getDate() - 7);
    } else if (timeRange === '30d') {
      cutoff.setDate(now.getDate() - 30);
    }

    return events.filter(e => new Date(e.createdAt) >= cutoff);
  }, [events, timeRange]);

  // Calculate metrics
  const metrics = useMemo(() => {
    const formViews = filteredEvents.filter(e => e.eventType === 'form_view').length;
    const formSubmits = filteredEvents.filter(e => e.eventType === 'form_submit').length;
    const emailVerified = filteredEvents.filter(e => e.eventType === 'email_verified').length;

    const conversionRate = formViews > 0 ? (formSubmits / formViews) * 100 : 0;
    const verificationRate = formSubmits > 0 ? (emailVerified / formSubmits) * 100 : 0;

    // Device breakdown
    const devices = filteredEvents.reduce((acc, e) => {
      const device = e.metadata?.device || 'unknown';
      acc[device] = (acc[device] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    // Source breakdown
    const sources = filteredEvents.reduce((acc, e) => {
      const source = e.metadata?.source || e.utm?.utm_source || 'direct';
      acc[source] = (acc[source] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    // Campaign performance
    const campaigns = filteredEvents.reduce((acc, e) => {
      const campaignName = e.utm?.utm_campaign;
      if (campaignName) {
        if (!acc[campaignName]) {
          acc[campaignName] = { views: 0, submits: 0 };
        }
        const campaign = acc[campaignName];
        if (campaign) {
          if (e.eventType === 'form_view') campaign.views++;
          if (e.eventType === 'form_submit') campaign.submits++;
        }
      }
      return acc;
    }, {} as Record<string, { views: number; submits: number }>);

    return {
      formViews,
      formSubmits,
      emailVerified,
      conversionRate,
      verificationRate,
      devices,
      sources,
      campaigns,
    };
  }, [filteredEvents]);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleString('en-GB', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  if (loading) {
    return (
      <AdminLayout onNavigate={onNavigate}>
        <div className="flex items-center justify-center h-64">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading analytics...</p>
          </div>
        </div>
      </AdminLayout>
    );
  }

  if (error) {
    return (
      <AdminLayout onNavigate={onNavigate}>
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <p className="text-red-800">{error}</p>
        </div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout onNavigate={onNavigate}>
      <div className="space-y-6">
        {/* Page Header */}
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Analytics Dashboard</h2>
            <p className="mt-2 text-sm text-gray-600">
              Track user behavior and marketing performance
            </p>
          </div>

          {/* Time Range Filter */}
          <div className="flex gap-2">
            <button
              onClick={() => setTimeRange('24h')}
              className={`px-4 py-2 rounded-md text-sm font-medium ${
                timeRange === '24h'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              24 Hours
            </button>
            <button
              onClick={() => setTimeRange('7d')}
              className={`px-4 py-2 rounded-md text-sm font-medium ${
                timeRange === '7d'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              7 Days
            </button>
            <button
              onClick={() => setTimeRange('30d')}
              className={`px-4 py-2 rounded-md text-sm font-medium ${
                timeRange === '30d'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              30 Days
            </button>
            <button
              onClick={() => setTimeRange('all')}
              className={`px-4 py-2 rounded-md text-sm font-medium ${
                timeRange === 'all'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              All Time
            </button>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-5">
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <p className="text-sm font-medium text-gray-500">Form Views</p>
              <p className="mt-1 text-3xl font-semibold text-gray-900">{metrics.formViews}</p>
            </div>
          </div>
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <p className="text-sm font-medium text-gray-500">Form Submits</p>
              <p className="mt-1 text-3xl font-semibold text-blue-600">{metrics.formSubmits}</p>
            </div>
          </div>
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <p className="text-sm font-medium text-gray-500">Email Verified</p>
              <p className="mt-1 text-3xl font-semibold text-green-600">{metrics.emailVerified}</p>
            </div>
          </div>
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <p className="text-sm font-medium text-gray-500">Conversion Rate</p>
              <p className="mt-1 text-3xl font-semibold text-purple-600">
                {metrics.conversionRate.toFixed(1)}%
              </p>
            </div>
          </div>
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <p className="text-sm font-medium text-gray-500">Verification Rate</p>
              <p className="mt-1 text-3xl font-semibold text-orange-600">
                {metrics.verificationRate.toFixed(1)}%
              </p>
            </div>
          </div>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Device Breakdown */}
          <div className="bg-white shadow rounded-lg p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Traffic by Device</h3>
            <div className="space-y-3">
              {Object.entries(metrics.devices).map(([device, count]) => {
                const percentage = (count / filteredEvents.length) * 100;
                return (
                  <div key={device}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="capitalize font-medium">{device}</span>
                      <span className="text-gray-600">{count} ({percentage.toFixed(1)}%)</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-blue-600 h-2 rounded-full"
                        style={{ width: `${percentage}%` }}
                      ></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Source Breakdown */}
          <div className="bg-white shadow rounded-lg p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Traffic Sources</h3>
            <div className="space-y-3">
              {Object.entries(metrics.sources)
                .sort((a, b) => b[1] - a[1])
                .slice(0, 5)
                .map(([source, count]) => {
                  const percentage = (count / filteredEvents.length) * 100;
                  return (
                    <div key={source}>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="capitalize font-medium">{source}</span>
                        <span className="text-gray-600">{count} ({percentage.toFixed(1)}%)</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-green-600 h-2 rounded-full"
                          style={{ width: `${percentage}%` }}
                        ></div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>

        {/* Campaign Performance */}
        {Object.keys(metrics.campaigns).length > 0 && (
          <div className="bg-white shadow rounded-lg overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200">
              <h3 className="text-lg font-medium text-gray-900">Campaign Performance</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Campaign</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Views</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Submits</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Conversion Rate</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {Object.entries(metrics.campaigns).map(([campaign, stats]) => {
                    const rate = stats.views > 0 ? (stats.submits / stats.views) * 100 : 0;
                    return (
                      <tr key={campaign}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{campaign}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{stats.views}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{stats.submits}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-green-600">{rate.toFixed(1)}%</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Recent Events */}
        <div className="bg-white shadow rounded-lg overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200">
            <h3 className="text-lg font-medium text-gray-900">Recent Events</h3>
          </div>
          <div className="divide-y divide-gray-200">
            {filteredEvents.slice(0, 10).map((event) => (
              <div key={event.eventId} className="px-6 py-4 hover:bg-gray-50">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                        event.eventType === 'form_view' ? 'bg-gray-100 text-gray-800' :
                        event.eventType === 'form_submit' ? 'bg-blue-100 text-blue-800' :
                        event.eventType === 'email_verified' ? 'bg-green-100 text-green-800' :
                        'bg-purple-100 text-purple-800'
                      }`}>
                        {event.eventType.replace('_', ' ').toUpperCase()}
                      </span>
                      {event.utm?.utm_campaign && (
                        <span className="text-xs text-gray-500">
                          Campaign: {event.utm.utm_campaign}
                        </span>
                      )}
                    </div>
                    <div className="mt-1 flex items-center gap-4 text-xs text-gray-500">
                      <span>Device: {event.metadata?.device || 'unknown'}</span>
                      <span>Source: {event.metadata?.source || event.utm?.utm_source || 'direct'}</span>
                      {event.postId && <span>Post: {event.postId}</span>}
                    </div>
                  </div>
                  <div className="text-sm text-gray-500">
                    {formatDate(event.createdAt)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminAnalytics;

import { useState } from 'react';
import { useAdminActions } from '../../contexts/AdminActionsContext';
import { AdminAction } from '../../types/AdminAction';
import AdminLayout from '../../components/admin/AdminLayout';

interface AdminActionsLogProps {
  onNavigate: (page: string) => void;
}

const AdminActionsLog = ({ onNavigate }: AdminActionsLogProps) => {
  const { actions, loading, error } = useAdminActions();
  const [filter, setFilter] = useState<'all' | AdminAction['action']>('all');
  const [targetTypeFilter, setTargetTypeFilter] = useState<'all' | AdminAction['targetType']>('all');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredActions = actions.filter(action => {
    const matchesActionFilter = filter === 'all' || action.action === filter;
    const matchesTargetTypeFilter = targetTypeFilter === 'all' || action.targetType === targetTypeFilter;
    const matchesSearch =
      action.targetTitle?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      action.adminName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      action.reason?.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesActionFilter && matchesTargetTypeFilter && matchesSearch;
  });

  const getActionBadgeColor = (action: AdminAction['action']) => {
    switch (action) {
      case 'approved':
        return 'bg-green-100 text-green-800';
      case 'rejected':
        return 'bg-red-100 text-red-800';
      case 'deleted':
        return 'bg-red-100 text-red-800';
      case 'status_changed':
        return 'bg-blue-100 text-blue-800';
      case 'created':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getActionIcon = (action: AdminAction['action']) => {
    switch (action) {
      case 'approved':
        return '✓';
      case 'rejected':
        return '✗';
      case 'deleted':
        return '🗑';
      case 'status_changed':
        return '↻';
      case 'created':
        return '+';
      default:
        return '•';
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
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
            <p className="mt-4 text-gray-600">Loading admin actions...</p>
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
        <div>
          <h2 className="text-3xl font-bold text-gray-900">Admin Actions Log</h2>
          <p className="mt-2 text-sm text-gray-600">
            Audit trail of all admin actions in the system
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-4">
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-500">Total Actions</p>
                  <p className="mt-1 text-3xl font-semibold text-gray-900">{actions.length}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-500">Approved</p>
                  <p className="mt-1 text-3xl font-semibold text-green-600">
                    {actions.filter(a => a.action === 'approved').length}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-500">Deleted</p>
                  <p className="mt-1 text-3xl font-semibold text-red-600">
                    {actions.filter(a => a.action === 'deleted').length}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-500">Status Changes</p>
                  <p className="mt-1 text-3xl font-semibold text-blue-600">
                    {actions.filter(a => a.action === 'status_changed').length}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Filters and Search */}
        <div className="bg-white shadow rounded-lg p-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Search by target, admin, or reason..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div className="flex gap-2 flex-wrap">
              <select
                value={targetTypeFilter}
                onChange={(e) => setTargetTypeFilter(e.target.value as 'all' | AdminAction['targetType'])}
                className="px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="all">All Types</option>
                <option value="JobPost">Job Posts</option>
                <option value="User">Users</option>
              </select>
              <button
                onClick={() => setFilter('all')}
                className={`px-4 py-2 rounded-md text-sm font-medium ${
                  filter === 'all'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                All Actions
              </button>
              <button
                onClick={() => setFilter('approved')}
                className={`px-4 py-2 rounded-md text-sm font-medium ${
                  filter === 'approved'
                    ? 'bg-green-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Approved
              </button>
              <button
                onClick={() => setFilter('deleted')}
                className={`px-4 py-2 rounded-md text-sm font-medium ${
                  filter === 'deleted'
                    ? 'bg-red-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Deleted
              </button>
            </div>
          </div>
        </div>

        {/* Actions Timeline */}
        <div className="bg-white shadow rounded-lg overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200">
            <h3 className="text-lg font-medium text-gray-900">
              Activity Timeline ({filteredActions.length} actions)
            </h3>
          </div>
          <div className="divide-y divide-gray-200">
            {filteredActions.length === 0 ? (
              <div className="px-6 py-12 text-center">
                <p className="text-gray-500">No actions found</p>
              </div>
            ) : (
              filteredActions.map((action) => (
                <div key={action.actionId} className="px-6 py-4 hover:bg-gray-50">
                  <div className="flex items-start gap-4">
                    {/* Icon */}
                    <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-lg ${getActionBadgeColor(action.action)}`}>
                      {getActionIcon(action.action)}
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <p className="text-sm font-medium text-gray-900">
                            <span className="font-semibold">{action.adminName}</span>
                            {' '}
                            <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${getActionBadgeColor(action.action)}`}>
                              {action.action.replace('_', ' ').toUpperCase()}
                            </span>
                            {' '}
                            <span className="text-gray-600">a {action.targetType}</span>
                          </p>

                          <p className="mt-1 text-sm text-gray-900">
                            <span className="font-medium">{action.targetTitle || action.targetId}</span>
                          </p>

                          {action.reason && (
                            <p className="mt-1 text-sm text-gray-600">
                              <span className="font-medium">Reason:</span> {action.reason}
                            </p>
                          )}

                          {action.details && (action.details.oldValue || action.details.newValue) && (
                            <div className="mt-2 text-xs text-gray-500 bg-gray-50 rounded px-3 py-2 inline-block">
                              {action.details.oldValue && (
                                <span>
                                  <span className="font-medium">From:</span> {JSON.stringify(action.details.oldValue)}
                                </span>
                              )}
                              {action.details.oldValue && action.details.newValue && ' → '}
                              {action.details.newValue && (
                                <span>
                                  <span className="font-medium">To:</span> {JSON.stringify(action.details.newValue)}
                                </span>
                              )}
                            </div>
                          )}
                        </div>

                        {/* Timestamp */}
                        <div className="flex-shrink-0 ml-4 text-right">
                          <p className="text-sm text-gray-500">
                            {formatDate(action.createdAt)}
                          </p>
                          <p className="text-xs text-gray-400 mt-1">
                            ID: {action.actionId}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminActionsLog;

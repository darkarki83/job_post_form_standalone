export interface AdminAction {
  actionId: string;
  adminUserId: string;
  adminName: string;
  targetType: 'JobPost' | 'User';
  targetId: string;
  targetTitle?: string; // Job title or User name for display
  action: 'approved' | 'rejected' | 'deleted' | 'status_changed' | 'created';
  reason?: string;
  details?: {
    oldValue?: any;
    newValue?: any;
  };
  createdAt: string;
}

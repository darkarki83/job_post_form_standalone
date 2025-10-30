import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { AdminAction } from '../types/AdminAction';
import mockAdminActionsData from '../data/mockAdminActions.json';

interface AdminActionsContextType {
  actions: AdminAction[];
  loading: boolean;
  error: string | null;
  addAction: (action: Omit<AdminAction, 'actionId' | 'createdAt'>) => void;
  getActionsByTargetId: (targetId: string) => AdminAction[];
  getActionsByAdminId: (adminUserId: string) => AdminAction[];
}

const AdminActionsContext = createContext<AdminActionsContextType | undefined>(undefined);

export const AdminActionsProvider = ({ children }: { children: ReactNode }) => {
  const [actions, setActions] = useState<AdminAction[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Simulate API call with a small delay
    const fetchActions = async () => {
      try {
        setLoading(true);
        await new Promise(resolve => setTimeout(resolve, 300));
        setActions(mockAdminActionsData as AdminAction[]);
        setError(null);
      } catch (err) {
        setError('Failed to load admin actions');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchActions();
  }, []);

  const addAction = (action: Omit<AdminAction, 'actionId' | 'createdAt'>) => {
    const newAction: AdminAction = {
      ...action,
      actionId: `action-${Date.now()}`,
      createdAt: new Date().toISOString(),
    };

    setActions(prevActions => [newAction, ...prevActions]);
  };

  const getActionsByTargetId = (targetId: string): AdminAction[] => {
    return actions.filter(action => action.targetId === targetId);
  };

  const getActionsByAdminId = (adminUserId: string): AdminAction[] => {
    return actions.filter(action => action.adminUserId === adminUserId);
  };

  const value: AdminActionsContextType = {
    actions,
    loading,
    error,
    addAction,
    getActionsByTargetId,
    getActionsByAdminId,
  };

  return (
    <AdminActionsContext.Provider value={value}>
      {children}
    </AdminActionsContext.Provider>
  );
};

export const useAdminActions = (): AdminActionsContextType => {
  const context = useContext(AdminActionsContext);
  if (context === undefined) {
    throw new Error('useAdminActions must be used within an AdminActionsProvider');
  }
  return context;
};

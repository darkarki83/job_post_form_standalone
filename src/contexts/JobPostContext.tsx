import { createContext, useContext, useState, useEffect, ReactNode, useCallback, useMemo } from 'react';
import { JobPost } from '../types/JobPost';
import mockJobPostsData from '../data/mockJobPosts.json';
import { useAdminActions } from './AdminActionsContext';

interface JobPostContextType {
  jobPosts: JobPost[];
  loading: boolean;
  error: string | null;
  getJobPostById: (id: string) => JobPost | undefined;
  updateJobPostStatus: (id: string, status: JobPost['status'], reason?: string) => void;
  deleteJobPost: (id: string, reason?: string) => void;
}

const JobPostContext = createContext<JobPostContextType | undefined>(undefined);

export const JobPostProvider = ({ children }: { children: ReactNode }) => {
  const [jobPosts, setJobPosts] = useState<JobPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { addAction } = useAdminActions();

  useEffect(() => {
    // Simulate API call with a small delay
    const fetchJobPosts = async () => {
      try {
        setLoading(true);
        // In a real app, this would be an API call
        await new Promise(resolve => setTimeout(resolve, 500));
        setJobPosts(mockJobPostsData as JobPost[]);
        setError(null);
      } catch (err) {
        setError('Failed to load job posts');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchJobPosts();
  }, []);

  const getJobPostById = useCallback((id: string): JobPost | undefined => {
    return jobPosts.find(post => post.id === id);
  }, [jobPosts]);

  const updateJobPostStatus = useCallback((id: string, status: JobPost['status'], reason?: string) => {
    const post = jobPosts.find(p => p.id === id);
    if (!post) return;

    const oldStatus = post.status;

    setJobPosts(prevPosts =>
      prevPosts.map(p =>
        p.id === id ? { ...p, status } : p
      )
    );

    // Log admin action
    addAction({
      adminUserId: 'admin-001', // In real app, get from auth context
      adminName: 'Admin User',
      targetType: 'JobPost',
      targetId: id,
      targetTitle: post.title,
      action: oldStatus === 'pending' && status === 'active' ? 'approved' : 'status_changed',
      reason: reason || `Status changed from ${oldStatus} to ${status}`,
      details: {
        oldValue: oldStatus,
        newValue: status,
      },
    });
  }, [jobPosts, addAction]);

  const deleteJobPost = useCallback((id: string, reason?: string) => {
    const post = jobPosts.find(p => p.id === id);
    if (!post) return;

    setJobPosts(prevPosts => prevPosts.filter(p => p.id !== id));

    // Log admin action
    addAction({
      adminUserId: 'admin-001', // In real app, get from auth context
      adminName: 'Admin User',
      targetType: 'JobPost',
      targetId: id,
      targetTitle: post.title,
      action: 'deleted',
      reason: reason || 'Job post deleted',
      details: {
        oldValue: post.status,
        newValue: 'deleted',
      },
    });
  }, [jobPosts, addAction]);

  const value: JobPostContextType = useMemo(() => ({
    jobPosts,
    loading,
    error,
    getJobPostById,
    updateJobPostStatus,
    deleteJobPost,
  }), [jobPosts, loading, error, getJobPostById, updateJobPostStatus, deleteJobPost]);

  return (
    <JobPostContext.Provider value={value}>
      {children}
    </JobPostContext.Provider>
  );
};

export const useJobPosts = (): JobPostContextType => {
  const context = useContext(JobPostContext);
  if (context === undefined) {
    throw new Error('useJobPosts must be used within a JobPostProvider');
  }
  return context;
};

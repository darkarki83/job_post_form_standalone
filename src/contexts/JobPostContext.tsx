import { createContext, useContext, useState, useEffect, ReactNode, useMemo } from 'react';
import { JobPost } from '../types/JobPost';
import mockJobPostsData from '../data/mockJobPosts.json';

interface JobPostContextType {
  jobPosts: JobPost[];
  loading: boolean;
  error: string | null;
  getJobPostById: (id: string) => JobPost | undefined;
  updateJobPostStatus: (id: string, status: JobPost['status']) => void;
  deleteJobPost: (id: string) => void;
}

const JobPostContext = createContext<JobPostContextType | undefined>(undefined);

export const JobPostProvider = ({ children }: { children: ReactNode }) => {
  const [jobPosts, setJobPosts] = useState<JobPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

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

  const getJobPostById = (id: string): JobPost | undefined => {
    return jobPosts.find(post => post.id === id);
  };

  const updateJobPostStatus = (id: string, status: JobPost['status']) => {
    setJobPosts(prevPosts =>
      prevPosts.map(post =>
        post.id === id ? { ...post, status } : post
      )
    );
  };

  const deleteJobPost = (id: string) => {
    setJobPosts(prevPosts => prevPosts.filter(post => post.id !== id));
  };

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

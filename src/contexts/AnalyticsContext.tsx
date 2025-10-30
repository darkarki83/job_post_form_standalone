import { createContext, useContext, useState, useEffect, ReactNode, useCallback } from 'react';
import { AnalyticsEventV1 } from '../types/AnalyticsEvent';
import mockAnalyticsEventsData from '../data/mockAnalyticsEvents.json';

interface AnalyticsContextType {
  events: AnalyticsEventV1[];
  loading: boolean;
  error: string | null;
  trackEvent: (eventData: Omit<AnalyticsEventV1, 'eventId' | 'createdAt' | 'sessionId'> & { sessionId?: string }) => void;
  getEventsByPostId: (postId: string) => AnalyticsEventV1[];
  getEventsBySession: (sessionId: string) => AnalyticsEventV1[];
}

const AnalyticsContext = createContext<AnalyticsContextType | undefined>(undefined);

export const AnalyticsProvider = ({ children }: { children: ReactNode }) => {
  const [events, setEvents] = useState<AnalyticsEventV1[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Load mock events and any stored events from localStorage
    const loadEvents = async () => {
      try {
        setLoading(true);

        // Load mock events
        const mockEvents = mockAnalyticsEventsData as AnalyticsEventV1[];

        // Load any events from localStorage (tracked in current session)
        const storedEvents = localStorage.getItem('analytics_events');
        const localEvents: AnalyticsEventV1[] = storedEvents ? JSON.parse(storedEvents) : [];

        // Combine and sort by date
        const allEvents = [...mockEvents, ...localEvents].sort(
          (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );

        setEvents(allEvents);
        setError(null);
      } catch (err) {
        setError('Failed to load analytics events');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadEvents();
  }, []);

  const trackEvent = useCallback((eventData: Omit<AnalyticsEventV1, 'eventId' | 'createdAt' | 'sessionId'> & { sessionId?: string }) => {
    // Generate event ID
    const eventId = `evt-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;

    // Get or create session ID
    const sessionId = eventData.sessionId || getOrCreateSessionId();

    // Create the full event
    const newEvent: AnalyticsEventV1 = {
      ...eventData,
      eventId,
      sessionId,
      createdAt: new Date().toISOString(),
    };

    // Add to state
    setEvents(prevEvents => [newEvent, ...prevEvents]);

    // Store in localStorage (simulating backend until we have one)
    const storedEvents = localStorage.getItem('analytics_events');
    const localEvents: AnalyticsEventV1[] = storedEvents ? JSON.parse(storedEvents) : [];
    localEvents.push(newEvent);
    localStorage.setItem('analytics_events', JSON.stringify(localEvents));

    // In production, this would send to backend:
    // await fetch('/api/analytics/event', { method: 'POST', body: JSON.stringify(newEvent) });

    console.log('📊 Analytics Event Tracked:', newEvent);
  }, []);

  const getEventsByPostId = useCallback((postId: string): AnalyticsEventV1[] => {
    return events.filter(event => event.postId === postId);
  }, [events]);

  const getEventsBySession = useCallback((sessionId: string): AnalyticsEventV1[] => {
    return events.filter(event => event.sessionId === sessionId);
  }, [events]);

  const value: AnalyticsContextType = {
    events,
    loading,
    error,
    trackEvent,
    getEventsByPostId,
    getEventsBySession,
  };

  return (
    <AnalyticsContext.Provider value={value}>
      {children}
    </AnalyticsContext.Provider>
  );
};

export const useAnalytics = (): AnalyticsContextType => {
  const context = useContext(AnalyticsContext);
  if (context === undefined) {
    throw new Error('useAnalytics must be used within an AnalyticsProvider');
  }
  return context;
};

// Helper function to get or create session ID
function getOrCreateSessionId(): string {
  let sessionId = sessionStorage.getItem('analytics_session_id');

  if (!sessionId) {
    sessionId = `sess-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    sessionStorage.setItem('analytics_session_id', sessionId);
  }

  return sessionId;
}

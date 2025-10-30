export interface JobPost {
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

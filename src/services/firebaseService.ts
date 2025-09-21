import { 
  collection, 
  addDoc, 
  getDocs, 
  getDoc,
  query, 
  orderBy, 
  where,
  updateDoc,
  doc,
  Timestamp,
  DocumentData 
} from 'firebase/firestore';
import { db } from '@/firebase';

export interface LeadSubmission {
  id?: string;
  name: string;
  email: string;
  phone: string;
  company: string;
  designation: string;
  city: string;
  state: string;
  businessType: string;
  monthlyBudget: string;
  interestedServices: string[];
  currentChallenges: string;
  timeframe: string;
  referralSource: string;
  timestamp: Timestamp;
  submittedAt: string;
  trigger: string;
  offerType: string;
  status: 'new' | 'contacted' | 'qualified' | 'proposal' | 'closed' | 'rejected';
  priority: 'low' | 'medium' | 'high' | 'urgent';
  lastContact?: string;
  notes: Array<{
    text: string;
    timestamp: string;
    author: string;
  }>;
  leadScore?: number;
  source: 'lead-capture-modal';
}

export interface ContactSubmission {
  id?: string;
  name: string;
  email: string;
  phone?: string;
  company?: string;
  service?: string;
  budget?: string;
  message: string;
  timestamp: Timestamp;
  submittedAt: string;
  status: 'new' | 'responded' | 'closed';
  source: 'contact-form' | 'contact-page';
}

export interface NewsletterSubmission {
  id?: string;
  email: string;
  phone?: string;
  name?: string;
  timestamp: Timestamp;
  submittedAt: string;
  status: 'active' | 'unsubscribed';
  source: 'newsletter';
  page: string;
}

export interface TraditionalMarketingSubmission {
  id?: string;
  name: string;
  email: string;
  phone: string;
  company?: string;
  serviceType?: string;
  preferredPackage?: string;
  targetLocations?: string;
  campaignDetails: string;
  timestamp: Timestamp;
  submittedAt: string;
  status: 'new' | 'contacted' | 'qualified' | 'proposal' | 'closed';
  source: 'traditional-marketing' | 'traditional-marketing-page';
}

export interface InfluencerSubmission {
  id?: string;
  name: string;
  email: string;
  phone: string;
  city: string;
  primaryPlatform: string;
  followerCount: string;
  socialMediaLinks: {
    instagram?: string;
    youtube?: string;
    linkedin?: string;
    twitter?: string;
  };
  niche: string;
  contentType: string;
  portfolio?: string;
  experience: string;
  availability: string;
  bio: string;
  timestamp: Timestamp;
  submittedAt: string;
  status: 'new' | 'verified' | 'approved' | 'rejected';
  source: 'influencers' | 'influencers-page';
}

export interface FreelancerSubmission {
  id?: string;
  name: string;
  email: string;
  phone: string;
  location: string;
  primarySkill: string;
  experience: string;
  additionalSkills: string[];
  portfolio: string;
  hourlyRate: string;
  workSamples?: string;
  availability: string;
  startDate: string;
  about: string;
  timestamp: Timestamp;
  submittedAt: string;
  status: 'new' | 'verified' | 'approved' | 'rejected';
  source: 'freelancers' | 'freelancers-page';
}

const COLLECTIONS = {
  LEADS: 'leads',
  CONTACTS: 'contacts',
  NEWSLETTER: 'newsletter',
  TRADITIONAL_MARKETING: 'traditional_marketing',
  INFLUENCERS: 'influencers',
  FREELANCERS: 'freelancers'
} as const;

const addSubmission = async (
  collectionName: string, 
  data: Record<string, unknown>
): Promise<string> => {
  try {
    const cleanData = Object.fromEntries(
      Object.entries(data).filter(([_, value]) => value !== undefined)
    );

    const docRef = await addDoc(collection(db, collectionName), {
      ...cleanData,
      timestamp: Timestamp.now(),
      submittedAt: new Date().toISOString()
    });
    return docRef.id;
  } catch (error) {
    console.error(`Error adding ${collectionName} submission:`, error);
    throw error;
  }
};

const getSubmissions = async <T>(
  collectionName: string,
  orderByField: string = 'timestamp'
): Promise<T[]> => {
  try {
    const q = query(
      collection(db, collectionName), 
      orderBy(orderByField, 'desc')
    );
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    } as T));
  } catch (error) {
    console.error(`Error fetching ${collectionName} submissions:`, error);
    throw error;
  }
};

export const addLeadSubmission = async (data: Omit<LeadSubmission, 'id' | 'timestamp' | 'submittedAt'>): Promise<string> => {
  return addSubmission(COLLECTIONS.LEADS, data);
};

export const getLeadSubmissions = async (): Promise<LeadSubmission[]> => {
  return getSubmissions<LeadSubmission>(COLLECTIONS.LEADS);
};

// Contact submissions
export const addContactSubmission = async (data: Omit<ContactSubmission, 'id' | 'timestamp' | 'submittedAt'>): Promise<string> => {
  return addSubmission(COLLECTIONS.CONTACTS, data);
};

export const getContactSubmissions = async (): Promise<ContactSubmission[]> => {
  return getSubmissions<ContactSubmission>(COLLECTIONS.CONTACTS);
};

// Newsletter submissions
export const addNewsletterSubmission = async (data: Omit<NewsletterSubmission, 'id' | 'timestamp' | 'submittedAt'>): Promise<string> => {
  return addSubmission(COLLECTIONS.NEWSLETTER, data);
};

export const getNewsletterSubmissions = async (): Promise<NewsletterSubmission[]> => {
  return getSubmissions<NewsletterSubmission>(COLLECTIONS.NEWSLETTER);
};

// Traditional marketing submissions
export const addTraditionalMarketingSubmission = async (data: Omit<TraditionalMarketingSubmission, 'id' | 'timestamp' | 'submittedAt'>): Promise<string> => {
  return addSubmission(COLLECTIONS.TRADITIONAL_MARKETING, data);
};

export const getTraditionalMarketingSubmissions = async (): Promise<TraditionalMarketingSubmission[]> => {
  return getSubmissions<TraditionalMarketingSubmission>(COLLECTIONS.TRADITIONAL_MARKETING);
};

// Influencer submissions
export const addInfluencerSubmission = async (data: Omit<InfluencerSubmission, 'id' | 'timestamp' | 'submittedAt'>): Promise<string> => {
  return addSubmission(COLLECTIONS.INFLUENCERS, data);
};

export const getInfluencerSubmissions = async (): Promise<InfluencerSubmission[]> => {
  return getSubmissions<InfluencerSubmission>(COLLECTIONS.INFLUENCERS);
};

// Freelancer submissions
export const addFreelancerSubmission = async (data: Omit<FreelancerSubmission, 'id' | 'timestamp' | 'submittedAt'>): Promise<string> => {
  return addSubmission(COLLECTIONS.FREELANCERS, data);
};

export const getFreelancerSubmissions = async (): Promise<FreelancerSubmission[]> => {
  return getSubmissions<FreelancerSubmission>(COLLECTIONS.FREELANCERS);
};

// Get all submissions for admin dashboard
export const getAllSubmissions = async () => {
  try {
    const [leads, contacts, newsletter, traditionalMarketing, influencers, freelancers] = await Promise.all([
      getLeadSubmissions(),
      getContactSubmissions(),
      getNewsletterSubmissions(),
      getTraditionalMarketingSubmissions(),
      getInfluencerSubmissions(),
      getFreelancerSubmissions()
    ]);

    return {
      leads,
      contacts,
      newsletter,
      traditionalMarketing,
      influencers,
      freelancers,
      total: leads.length + contacts.length + newsletter.length + traditionalMarketing.length + influencers.length + freelancers.length
    };
  } catch (error) {
    console.error('Error fetching all submissions:', error);
    throw error;
  }
};

// Update functions for lead management
export const updateLeadStatus = async (
  leadId: string, 
  status: LeadSubmission['status']
): Promise<void> => {
  try {
    const leadRef = doc(db, COLLECTIONS.LEADS, leadId);
    await updateDoc(leadRef, {
      status,
      lastContact: new Date().toISOString(),
      updatedAt: Timestamp.now()
    });
  } catch (error) {
    console.error('Error updating lead status:', error);
    throw error;
  }
};

export const updateLeadPriority = async (
  leadId: string, 
  priority: LeadSubmission['priority']
): Promise<void> => {
  try {
    const leadRef = doc(db, COLLECTIONS.LEADS, leadId);
    await updateDoc(leadRef, {
      priority,
      updatedAt: Timestamp.now()
    });
  } catch (error) {
    console.error('Error updating lead priority:', error);
    throw error;
  }
};

export const addLeadNote = async (
  leadId: string,
  note: {
    text: string;
    timestamp: string;
    author: string;
  }
): Promise<void> => {
  try {
    const leadRef = doc(db, COLLECTIONS.LEADS, leadId);
    const leadDoc = await getDoc(leadRef);
    
    if (leadDoc.exists()) {
      const currentData = leadDoc.data() as LeadSubmission;
      const updatedNotes = [...(currentData.notes || []), note];
      
      await updateDoc(leadRef, {
        notes: updatedNotes,
        updatedAt: Timestamp.now()
      });
    } else {
      throw new Error('Lead not found');
    }
  } catch (error) {
    console.error('Error adding lead note:', error);
    throw error;
  }
};
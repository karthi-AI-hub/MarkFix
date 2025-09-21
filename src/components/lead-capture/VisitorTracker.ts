import { useEffect, useState } from 'react';

interface VisitorData {
  sessionId: string;
  userId?: string;
  timestamp: string;
  userAgent: string;
  referrer: string;
  currentPage: string;
  screenResolution: string;
  deviceType: 'mobile' | 'tablet' | 'desktop';
  browser: string;
  os: string;
  location?: {
    country?: string;
    city?: string;
    ip?: string;
  };
  timeOnPage: number;
  scrollDepth: number;
  clicksCount: number;
  pagesVisited: string[];
  exitIntent: boolean;
  isReturningVisitor: boolean;
}

interface LeadScore {
  score: number;
  factors: string[];
  likelihood: 'low' | 'medium' | 'high' | 'very-high';
}

export class VisitorTracker {
  private static instance: VisitorTracker;
  private visitorData: VisitorData;
  private startTime: number;
  private scrollTimeout: NodeJS.Timeout | null = null;
  private clickCount = 0;
  private maxScroll = 0;

  private constructor() {
    this.startTime = Date.now();
    this.visitorData = this.initializeVisitorData();
    this.setupEventListeners();
    this.trackPageView();
  }

  public static getInstance(): VisitorTracker {
    if (!VisitorTracker.instance) {
      VisitorTracker.instance = new VisitorTracker();
    }
    return VisitorTracker.instance;
  }

  private initializeVisitorData(): VisitorData {
    const sessionId = this.getOrCreateSessionId();
    const isReturning = this.checkReturningVisitor();
    
    return {
      sessionId,
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent,
      referrer: document.referrer,
      currentPage: window.location.pathname,
      screenResolution: `${screen.width}x${screen.height}`,
      deviceType: this.detectDeviceType(),
      browser: this.detectBrowser(),
      os: this.detectOS(),
      timeOnPage: 0,
      scrollDepth: 0,
      clicksCount: 0,
      pagesVisited: [window.location.pathname],
      exitIntent: false,
      isReturningVisitor: isReturning
    };
  }

  private getOrCreateSessionId(): string {
    let sessionId = sessionStorage.getItem('markfix_session_id');
    if (!sessionId) {
      sessionId = Date.now().toString(36) + Math.random().toString(36).substr(2);
      sessionStorage.setItem('markfix_session_id', sessionId);
    }
    return sessionId;
  }

  private checkReturningVisitor(): boolean {
    const hasVisited = localStorage.getItem('markfix_visitor_id');
    if (!hasVisited) {
      const visitorId = Date.now().toString(36) + Math.random().toString(36).substr(2);
      localStorage.setItem('markfix_visitor_id', visitorId);
      return false;
    }
    return true;
  }

  private detectDeviceType(): 'mobile' | 'tablet' | 'desktop' {
    const width = window.innerWidth;
    if (width <= 768) return 'mobile';
    if (width <= 1024) return 'tablet';
    return 'desktop';
  }

  private detectBrowser(): string {
    const userAgent = navigator.userAgent;
    if (userAgent.includes('Chrome')) return 'Chrome';
    if (userAgent.includes('Firefox')) return 'Firefox';
    if (userAgent.includes('Safari')) return 'Safari';
    if (userAgent.includes('Edge')) return 'Edge';
    return 'Unknown';
  }

  private detectOS(): string {
    const userAgent = navigator.userAgent;
    if (userAgent.includes('Windows')) return 'Windows';
    if (userAgent.includes('Mac')) return 'macOS';
    if (userAgent.includes('Linux')) return 'Linux';
    if (userAgent.includes('Android')) return 'Android';
    if (userAgent.includes('iOS')) return 'iOS';
    return 'Unknown';
  }

  private setupEventListeners(): void {
    // Track scroll depth
    window.addEventListener('scroll', this.handleScroll.bind(this));
    
    // Track clicks
    document.addEventListener('click', this.handleClick.bind(this));
    
    // Track mouse movement for exit intent
    document.addEventListener('mouseleave', this.handleMouseLeave.bind(this));
    
    // Track page visibility changes
    document.addEventListener('visibilitychange', this.handleVisibilityChange.bind(this));
    
    // Track before unload
    window.addEventListener('beforeunload', this.handleBeforeUnload.bind(this));
  }

  private handleScroll(): void {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = Math.round((scrollTop / documentHeight) * 100);
    
    this.maxScroll = Math.max(this.maxScroll, scrollPercent);
    this.visitorData.scrollDepth = this.maxScroll;
    
    // Debounce scroll tracking
    if (this.scrollTimeout) {
      clearTimeout(this.scrollTimeout);
    }
    this.scrollTimeout = setTimeout(() => {
      this.updateVisitorData();
    }, 1000);
  }

  private handleClick(): void {
    this.clickCount++;
    this.visitorData.clicksCount = this.clickCount;
    this.updateVisitorData();
  }

  private handleMouseLeave(event: MouseEvent): void {
    if (event.clientY <= 0) {
      this.visitorData.exitIntent = true;
      this.triggerExitIntent();
    }
  }

  private handleVisibilityChange(): void {
    if (document.hidden) {
      this.updateTimeOnPage();
      this.saveVisitorData();
    }
  }

  private handleBeforeUnload(): void {
    this.updateTimeOnPage();
    this.saveVisitorData();
  }

  private updateTimeOnPage(): void {
    this.visitorData.timeOnPage = Math.round((Date.now() - this.startTime) / 1000);
  }

  private updateVisitorData(): void {
    this.updateTimeOnPage();
    // Update in memory, save to storage periodically
  }

  private saveVisitorData(): void {
    try {
      const visitors = JSON.parse(localStorage.getItem('markfix_visitors') || '[]');
      const existingIndex = visitors.findIndex((v: VisitorData) => v.sessionId === this.visitorData.sessionId);
      
      if (existingIndex >= 0) {
        visitors[existingIndex] = this.visitorData;
      } else {
        visitors.push(this.visitorData);
      }
      
      localStorage.setItem('markfix_visitors', JSON.stringify(visitors));
    } catch (error) {
      console.error('Error saving visitor data:', error);
    }
  }

  private trackPageView(): void {
    // Send page view to analytics
    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      if (typeof window !== 'undefined' && (window as any).gtag) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (window as any).gtag('event', 'page_view', {
          page_title: document.title,
          page_location: window.location.href,
          page_path: window.location.pathname
        });
      }
    } catch (error) {
      console.log('Analytics tracking error:', error);
    }
  }

  private triggerExitIntent(): void {
    // Trigger exit intent modal or action
    const event = new CustomEvent('exitIntent', {
      detail: { visitorData: this.visitorData }
    });
    window.dispatchEvent(event);
  }

  public calculateLeadScore(): LeadScore {
    const factors: string[] = [];
    let score = 0;

    // Time on site (max 30 points)
    if (this.visitorData.timeOnPage > 300) { // 5+ minutes
      score += 30;
      factors.push('High engagement time');
    } else if (this.visitorData.timeOnPage > 120) { // 2+ minutes
      score += 20;
      factors.push('Moderate engagement time');
    } else if (this.visitorData.timeOnPage > 30) { // 30+ seconds
      score += 10;
      factors.push('Some engagement time');
    }

    // Scroll depth (max 20 points)
    if (this.visitorData.scrollDepth > 80) {
      score += 20;
      factors.push('High content engagement');
    } else if (this.visitorData.scrollDepth > 50) {
      score += 15;
      factors.push('Moderate content engagement');
    } else if (this.visitorData.scrollDepth > 25) {
      score += 10;
      factors.push('Some content engagement');
    }

    // Click interactions (max 15 points)
    if (this.visitorData.clicksCount > 10) {
      score += 15;
      factors.push('High interaction level');
    } else if (this.visitorData.clicksCount > 5) {
      score += 10;
      factors.push('Moderate interaction level');
    } else if (this.visitorData.clicksCount > 2) {
      score += 5;
      factors.push('Some interaction');
    }

    // Page visits (max 15 points)
    if (this.visitorData.pagesVisited.length > 5) {
      score += 15;
      factors.push('Explored multiple pages');
    } else if (this.visitorData.pagesVisited.length > 3) {
      score += 10;
      factors.push('Visited several pages');
    } else if (this.visitorData.pagesVisited.length > 1) {
      score += 5;
      factors.push('Visited multiple pages');
    }

    // Device type (max 10 points)
    if (this.visitorData.deviceType === 'desktop') {
      score += 10;
      factors.push('Desktop user (business context)');
    } else if (this.visitorData.deviceType === 'tablet') {
      score += 5;
      factors.push('Tablet user');
    }

    // Referrer (max 10 points)
    if (this.visitorData.referrer.includes('linkedin.com')) {
      score += 10;
      factors.push('LinkedIn referral (professional)');
    } else if (this.visitorData.referrer.includes('google.com')) {
      score += 8;
      factors.push('Google search (intent-driven)');
    } else if (this.visitorData.referrer.includes('facebook.com')) {
      score += 5;
      factors.push('Facebook referral');
    }

    // Returning visitor bonus
    if (this.visitorData.isReturningVisitor) {
      score += 10;
      factors.push('Returning visitor');
    }

    // Determine likelihood
    let likelihood: 'low' | 'medium' | 'high' | 'very-high' = 'low';
    if (score >= 80) likelihood = 'very-high';
    else if (score >= 60) likelihood = 'high';
    else if (score >= 40) likelihood = 'medium';

    return { score, factors, likelihood };
  }

  public getVisitorData(): VisitorData {
    this.updateTimeOnPage();
    return { ...this.visitorData };
  }

  public updatePageVisit(page: string): void {
    if (!this.visitorData.pagesVisited.includes(page)) {
      this.visitorData.pagesVisited.push(page);
    }
    this.visitorData.currentPage = page;
    this.saveVisitorData();
  }
}

// React Hook for using visitor tracking
export const useVisitorTracking = () => {
  const [visitorData, setVisitorData] = useState<VisitorData | null>(null);
  const [leadScore, setLeadScore] = useState<LeadScore | null>(null);

  useEffect(() => {
    const tracker = VisitorTracker.getInstance();
    
    // Update visitor data every 30 seconds
    const interval = setInterval(() => {
      const data = tracker.getVisitorData();
      const score = tracker.calculateLeadScore();
      setVisitorData(data);
      setLeadScore(score);
    }, 30000);

    // Initial update
    const data = tracker.getVisitorData();
    const score = tracker.calculateLeadScore();
    setVisitorData(data);
    setLeadScore(score);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return { visitorData, leadScore };
};

export default VisitorTracker;
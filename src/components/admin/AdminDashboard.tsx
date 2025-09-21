import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { 
  Download, 
  Search, 
  Eye, 
  Phone, 
  Mail, 
  MapPin, 
  Building, 
  Calendar,
  Users,
  TrendingUp,
  FileText,
  MessageSquare,
  Star,
  LogOut,
  Briefcase,
  UserCheck,
  BookOpen
} from "lucide-react";
import { toast } from "sonner";
import { signOutAdmin } from '@/services/authService';
import { 
  getAllSubmissions,
  LeadSubmission,
  ContactSubmission,
  NewsletterSubmission,
  TraditionalMarketingSubmission,
  InfluencerSubmission,
  FreelancerSubmission
} from '@/services/firebaseService';
import LeadManagementDashboard from '@/components/lead-capture/LeadManagementDashboard';

interface AdminDashboardStats {
  totalSubmissions: number;
  leads: number;
  contacts: number;
  newsletter: number;
  traditionalMarketing: number;
  influencers: number;
  freelancers: number;
}

const AdminDashboard: React.FC = () => {
  const [stats, setStats] = useState<AdminDashboardStats>({
    totalSubmissions: 0,
    leads: 0,
    contacts: 0,
    newsletter: 0,
    traditionalMarketing: 0,
    influencers: 0,
    freelancers: 0
  });
  
  const [allData, setAllData] = useState<{
    leads: LeadSubmission[];
    contacts: ContactSubmission[];
    newsletter: NewsletterSubmission[];
    traditionalMarketing: TraditionalMarketingSubmission[];
    influencers: InfluencerSubmission[];
    freelancers: FreelancerSubmission[];
  }>({
    leads: [],
    contacts: [],
    newsletter: [],
    traditionalMarketing: [],
    influencers: [],
    freelancers: []
  });

  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedItem, setSelectedItem] = useState<Record<string, unknown> | null>(null);

  useEffect(() => {
    loadAllData();
  }, []);

  const loadAllData = async () => {
    try {
      setLoading(true);
      const data = await getAllSubmissions();
      
      setAllData(data);
      setStats({
        totalSubmissions: data.total,
        leads: data.leads.length,
        contacts: data.contacts.length,
        newsletter: data.newsletter.length,
        traditionalMarketing: data.traditionalMarketing.length,
        influencers: data.influencers.length,
        freelancers: data.freelancers.length
      });
    } catch (error) {
      console.error('Error loading data:', error);
      toast.error('Failed to load dashboard data');
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      await signOutAdmin();
      toast.success('Logged out successfully');
    } catch (error) {
      console.error('Logout error:', error);
      toast.error('Failed to logout');
    }
  };

  const exportData = (data: unknown[], filename: string) => {
    if (!data.length) return;
    
    const firstItem = data[0] as Record<string, unknown>;
    const headers = Object.keys(firstItem).filter(key => key !== 'timestamp');
    const csvData = data.map(item => {
      const record = item as Record<string, unknown>;
      return headers.map(header => {
        const value = record[header];
        if (Array.isArray(value)) return value.join('; ');
        if (typeof value === 'object' && value !== null) return JSON.stringify(value);
        return String(value || '');
      });
    });
    
    const csvContent = [headers, ...csvData]
      .map(row => row.map(cell => `"${String(cell).replace(/"/g, '""')}"`).join(','))
      .join('\n');
    
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${filename}-${new Date().toISOString().split('T')[0]}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    toast.success(`${filename} exported successfully`);
  };

  const renderSubmissionCard = (item: Record<string, unknown>, type: string) => {
    const id = String(item.id || Math.random());
    const name = String(item.name || '');
    const email = String(item.email || '');
    const phone = String(item.phone || '');
    const company = String(item.company || '');
    const status = String(item.status || '');
    const submittedAt = String(item.submittedAt || '');

    return (
      <Card key={id} className="hover:shadow-md transition-shadow">
        <CardContent className="p-4">
          <div className="flex justify-between items-start mb-3">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <h3 className="font-semibold text-lg">{name || email}</h3>
                <Badge variant="outline">{type}</Badge>
                {status && (
                  <Badge variant={
                    status === 'new' ? 'default' :
                    status === 'active' ? 'default' :
                    status === 'closed' || status === 'unsubscribed' ? 'secondary' :
                    status === 'approved' || status === 'verified' ? 'default' :
                    'destructive'
                  }>
                    {status}
                  </Badge>
                )}
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-muted-foreground" />
                  <span>{email}</span>
                </div>
                {phone && (
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-muted-foreground" />
                    <span>{phone}</span>
                  </div>
                )}
                {company && (
                  <div className="flex items-center gap-2">
                    <Building className="h-4 w-4 text-muted-foreground" />
                    <span>{company}</span>
                  </div>
                )}
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <span>{submittedAt ? new Date(submittedAt).toLocaleDateString() : 'N/A'}</span>
                </div>
              </div>
            </div>
            
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline" size="sm" onClick={() => setSelectedItem(item)}>
                  <Eye className="h-4 w-4" />
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle>{type} Details - {name || email}</DialogTitle>
                </DialogHeader>
                <div className="space-y-4">
                  {Object.entries(item).map(([key, value]) => {
                    if (key === 'id' || key === 'timestamp') return null;
                    return (
                      <div key={key} className="grid grid-cols-3 gap-4">
                        <div className="font-medium capitalize">{key.replace(/([A-Z])/g, ' $1')}</div>
                        <div className="col-span-2">
                          {Array.isArray(value) ? (
                            <div className="flex flex-wrap gap-1">
                              {value.map((item, index) => (
                                <Badge key={index} variant="secondary">{String(item)}</Badge>
                              ))}
                            </div>
                          ) : typeof value === 'object' && value !== null ? (
                            <pre className="text-xs bg-gray-100 p-2 rounded">{JSON.stringify(value, null, 2)}</pre>
                          ) : (
                            <span>{String(value || 'N/A')}</span>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </CardContent>
      </Card>
    );
  };

  const filterData = (data: Record<string, unknown>[]) => {
    if (!searchTerm) return data;
    return data.filter(item => 
      Object.values(item).some(value => 
        String(value).toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center gap-4">
              <img src="/logo.png" alt="MarkFix" className="h-8 w-auto" />
              <h1 className="text-2xl font-bold">Admin Dashboard</h1>
            </div>
            <Button onClick={handleLogout} variant="outline">
              <LogOut className="h-4 w-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Submissions</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.totalSubmissions}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Lead Captures</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.leads}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Contact Forms</CardTitle>
              <MessageSquare className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.contacts}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Newsletter Signups</CardTitle>
              <Mail className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.newsletter}</div>
            </CardContent>
          </Card>
        </div>

        {/* Search */}
        <div className="mb-6">
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search all submissions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        {/* Tabs for different submission types */}
        <Tabs defaultValue="lead-management" className="space-y-4">
          <TabsList className="grid w-full grid-cols-7">
            <TabsTrigger value="lead-management">
              <TrendingUp className="h-4 w-4 mr-2" />
              Lead Management
            </TabsTrigger>
            <TabsTrigger value="leads">
              <Users className="h-4 w-4 mr-2" />
              Leads ({stats.leads})
            </TabsTrigger>
            <TabsTrigger value="contacts">
              <MessageSquare className="h-4 w-4 mr-2" />
              Contacts ({stats.contacts})
            </TabsTrigger>
            <TabsTrigger value="newsletter">
              <Mail className="h-4 w-4 mr-2" />
              Newsletter ({stats.newsletter})
            </TabsTrigger>
            <TabsTrigger value="traditional">
              <FileText className="h-4 w-4 mr-2" />
              Traditional ({stats.traditionalMarketing})
            </TabsTrigger>
            <TabsTrigger value="influencers">
              <Star className="h-4 w-4 mr-2" />
              Influencers ({stats.influencers})
            </TabsTrigger>
            <TabsTrigger value="freelancers">
              <Briefcase className="h-4 w-4 mr-2" />
              Freelancers ({stats.freelancers})
            </TabsTrigger>
          </TabsList>

          <TabsContent value="lead-management" className="space-y-4">
            <LeadManagementDashboard />
          </TabsContent>

          <TabsContent value="leads" className="space-y-4">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold">Lead Captures</h2>
              <Button onClick={() => exportData(allData.leads, 'leads')} variant="outline">
                <Download className="h-4 w-4 mr-2" />
                Export CSV
              </Button>
            </div>
            <div className="space-y-4">
              {filterData(allData.leads).map(lead => renderSubmissionCard(lead, 'Lead'))}
            </div>
          </TabsContent>

          <TabsContent value="contacts" className="space-y-4">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold">Contact Form Submissions</h2>
              <Button onClick={() => exportData(allData.contacts, 'contacts')} variant="outline">
                <Download className="h-4 w-4 mr-2" />
                Export CSV
              </Button>
            </div>
            <div className="space-y-4">
              {filterData(allData.contacts).map(contact => renderSubmissionCard(contact, 'Contact'))}
            </div>
          </TabsContent>

          <TabsContent value="newsletter" className="space-y-4">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold">Newsletter Subscriptions</h2>
              <Button onClick={() => exportData(allData.newsletter, 'newsletter')} variant="outline">
                <Download className="h-4 w-4 mr-2" />
                Export CSV
              </Button>
            </div>
            <div className="space-y-4">
              {filterData(allData.newsletter).map(newsletter => renderSubmissionCard(newsletter, 'Newsletter'))}
            </div>
          </TabsContent>

          <TabsContent value="traditional" className="space-y-4">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold">Traditional Marketing</h2>
              <Button onClick={() => exportData(allData.traditionalMarketing, 'traditional-marketing')} variant="outline">
                <Download className="h-4 w-4 mr-2" />
                Export CSV
              </Button>
            </div>
            <div className="space-y-4">
              {filterData(allData.traditionalMarketing).map(item => renderSubmissionCard(item, 'Traditional Marketing'))}
            </div>
          </TabsContent>

          <TabsContent value="influencers" className="space-y-4">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold">Influencer Applications</h2>
              <Button onClick={() => exportData(allData.influencers, 'influencers')} variant="outline">
                <Download className="h-4 w-4 mr-2" />
                Export CSV
              </Button>
            </div>
            <div className="space-y-4">
              {filterData(allData.influencers).map(influencer => renderSubmissionCard(influencer, 'Influencer'))}
            </div>
          </TabsContent>

          <TabsContent value="freelancers" className="space-y-4">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold">Freelancer Applications</h2>
              <Button onClick={() => exportData(allData.freelancers, 'freelancers')} variant="outline">
                <Download className="h-4 w-4 mr-2" />
                Export CSV
              </Button>
            </div>
            <div className="space-y-4">
              {filterData(allData.freelancers).map(freelancer => renderSubmissionCard(freelancer, 'Freelancer'))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminDashboard;
import React, { useState, useEffect, useCallback } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { 
  Download, 
  Search, 
  Filter, 
  Phone, 
  Mail, 
  MapPin, 
  Building, 
  Calendar,
  TrendingUp,
  Users,
  Eye,
  Edit,
  Trash2,
  Star,
  MessageSquare
} from "lucide-react";
import { toast } from "sonner";
import { 
  updateLeadStatus as firebaseUpdateLeadStatus, 
  updateLeadPriority as firebaseUpdateLeadPriority, 
  addLeadNote as firebaseAddLeadNote 
} from '@/services/firebaseService';

interface LeadNote {
  text: string;
  timestamp: string;
  author: string;
}

interface Lead {
  id: string;
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
  timestamp: string;
  submittedAt: string;
  trigger: string;
  offerType: string;
  status: 'new' | 'contacted' | 'qualified' | 'proposal' | 'closed' | 'rejected';
  priority: 'low' | 'medium' | 'high' | 'urgent';
  notes: LeadNote[];
  lastContact?: string;
  nextFollowUp?: string;
  leadScore?: number;
}

interface VisitorData {
  sessionId: string;
  timestamp: string;
  timeOnPage: number;
  scrollDepth: number;
  clicksCount: number;
  pagesVisited: string[];
  deviceType: string;
  browser: string;
  referrer: string;
  isReturningVisitor: boolean;
}

const LeadManagementDashboard: React.FC = () => {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [visitors, setVisitors] = useState<VisitorData[]>([]);
  const [filteredLeads, setFilteredLeads] = useState<Lead[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [priorityFilter, setPriorityFilter] = useState<string>('all');
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);
  const [newNote, setNewNote] = useState('');

  useEffect(() => {
    const loadData = () => {
      loadLeads();
      loadVisitors();
    };
    loadData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const filterData = () => {
      filterLeads();
    };
    filterData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [leads, searchTerm, statusFilter, priorityFilter]);

  const loadLeads = () => {
    try {
      const storedLeads = JSON.parse(localStorage.getItem('markfix_leads') || '[]');
      // Add default status and priority if not present
      const enrichedLeads = storedLeads.map((lead: Lead) => ({
        ...lead,
        status: lead.status || 'new',
        priority: lead.priority || calculatePriority(lead),
        notes: lead.notes || [],
        leadScore: lead.leadScore || calculateLeadScore(lead)
      }));
      setLeads(enrichedLeads);
    } catch (error) {
      console.error('Error loading leads:', error);
      toast.error('Error loading leads data');
    }
  };

  const loadVisitors = () => {
    try {
      const storedVisitors = JSON.parse(localStorage.getItem('markfix_visitors') || '[]');
      setVisitors(storedVisitors);
    } catch (error) {
      console.error('Error loading visitors:', error);
    }
  };

  const calculatePriority = (lead: Lead): 'low' | 'medium' | 'high' | 'urgent' => {
    let score = 0;
    
    // Budget scoring
    if (lead.monthlyBudget === 'above-500k') score += 4;
    else if (lead.monthlyBudget === '250k-500k') score += 3;
    else if (lead.monthlyBudget === '100k-250k') score += 2;
    else if (lead.monthlyBudget === '50k-100k') score += 1;
    
    // Timeframe scoring
    if (lead.timeframe === 'immediately') score += 3;
    else if (lead.timeframe === '1-week') score += 2;
    else if (lead.timeframe === '1-month') score += 1;
    
    // Service count scoring
    score += Math.min(lead.interestedServices.length, 3);
    
    if (score >= 8) return 'urgent';
    if (score >= 6) return 'high';
    if (score >= 3) return 'medium';
    return 'low';
  };

  const calculateLeadScore = (lead: Lead): number => {
    let score = 0;
    
    // Budget weight (40%)
    const budgetScores: { [key: string]: number } = {
      'above-500k': 40,
      '250k-500k': 35,
      '100k-250k': 30,
      '50k-100k': 25,
      '25k-50k': 15,
      'under-25k': 10
    };
    score += budgetScores[lead.monthlyBudget] || 0;
    
    // Timeframe weight (20%)
    const timeframeScores: { [key: string]: number } = {
      'immediately': 20,
      '1-week': 15,
      '1-month': 10,
      '3-months': 5,
      'planning': 2
    };
    score += timeframeScores[lead.timeframe] || 0;
    
    // Business type weight (15%)
    const businessScores: { [key: string]: number } = {
      'large-enterprise': 15,
      'medium-enterprise': 12,
      'small-business': 8,
      'startup': 10,
      'agency': 12,
      'ecommerce': 10,
      'saas': 13
    };
    score += businessScores[lead.businessType] || 5;
    
    // Services count weight (15%)
    score += Math.min(lead.interestedServices.length * 3, 15);
    
    // Complete profile weight (10%)
    const fieldsCompleted = [
      lead.company, lead.designation, lead.city, 
      lead.currentChallenges, lead.referralSource
    ].filter(field => field && field.trim() !== '').length;
    score += (fieldsCompleted / 5) * 10;
    
    return Math.round(score);
  };

  const filterLeads = () => {
    let filtered = leads;
    
    if (searchTerm) {
      filtered = filtered.filter(lead => 
        lead.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        lead.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        lead.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
        lead.phone.includes(searchTerm)
      );
    }
    
    if (statusFilter !== 'all') {
      filtered = filtered.filter(lead => lead.status === statusFilter);
    }
    
    if (priorityFilter !== 'all') {
      filtered = filtered.filter(lead => lead.priority === priorityFilter);
    }
    
    // Sort by lead score and timestamp
    filtered.sort((a, b) => {
      if (a.leadScore !== b.leadScore) {
        return (b.leadScore || 0) - (a.leadScore || 0);
      }
      return new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime();
    });
    
    setFilteredLeads(filtered);
  };

  const updateLeadStatus = async (leadId: string, status: Lead['status']) => {
    try {
      await firebaseUpdateLeadStatus(leadId, status);
      const updatedLeads = leads.map(lead => 
        lead.id === leadId ? { ...lead, status, lastContact: new Date().toISOString() } : lead
      );
      setLeads(updatedLeads);
      
    //   toast.success('Lead status updated');
    } catch (error) {
      console.error('Error updating lead status:', error);
      toast.error('Failed to update lead status');
    }
  };

  const updateLeadPriority = async (leadId: string, priority: Lead['priority']) => {
    try {
      await firebaseUpdateLeadPriority(leadId, priority);
      const updatedLeads = leads.map(lead => 
        lead.id === leadId ? { ...lead, priority } : lead
      );
      setLeads(updatedLeads);
      
    //   toast.success('Lead priority updated');
    } catch (error) {
      console.error('Error updating lead priority:', error);
      toast.error('Failed to update lead priority');
    }
  };

  const addNote = async (leadId: string) => {
    if (!newNote.trim()) return;
    
    const note: LeadNote = {
      text: newNote,
      timestamp: new Date().toISOString(),
      author: 'Admin'
    };
    
    try {
      // Update in Firebase
      await firebaseAddLeadNote(leadId, note);
      
      // Update local state
      const updatedLeads = leads.map(lead => 
        lead.id === leadId 
          ? { ...lead, notes: [...(lead.notes || []), note] }
          : lead
      );
      
      setLeads(updatedLeads);
      setNewNote('');
      toast.success('Note added');
    } catch (error) {
      console.error('Error adding note:', error);
      toast.error('Failed to add note');
    }
  };

  const exportLeads = (format: 'csv' | 'excel') => {
    const headers = [
      'Name', 'Email', 'Phone', 'Company', 'Designation', 'City', 'State',
      'Business Type', 'Monthly Budget', 'Interested Services', 'Challenges',
      'Timeframe', 'Referral Source', 'Status', 'Priority', 'Lead Score',
      'Submitted Date', 'Last Contact'
    ];
    
    const csvData = filteredLeads.map(lead => [
      lead.name,
      lead.email,
      lead.phone,
      lead.company,
      lead.designation,
      lead.city,
      lead.state,
      lead.businessType,
      lead.monthlyBudget,
      lead.interestedServices.join('; '),
      lead.currentChallenges,
      lead.timeframe,
      lead.referralSource,
      lead.status,
      lead.priority,
      lead.leadScore,
      new Date(lead.timestamp).toLocaleDateString(),
      lead.lastContact ? new Date(lead.lastContact).toLocaleDateString() : 'Never'
    ]);
    
    const csvContent = [headers, ...csvData]
      .map(row => row.map(cell => `"${cell}"`).join(','))
      .join('\n');
    
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `markfix-leads-${new Date().toISOString().split('T')[0]}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    toast.success('Leads exported successfully');
  };

  const getStatusColor = (status: Lead['status']) => {
    const colors = {
      new: 'bg-blue-100 text-blue-800',
      contacted: 'bg-yellow-100 text-yellow-800',
      qualified: 'bg-green-100 text-green-800',
      proposal: 'bg-purple-100 text-purple-800',
      closed: 'bg-emerald-100 text-emerald-800',
      rejected: 'bg-red-100 text-red-800'
    };
    return colors[status] || 'bg-gray-100 text-gray-800';
  };

  const getPriorityColor = (priority: Lead['priority']) => {
    const colors = {
      low: 'bg-gray-100 text-gray-800',
      medium: 'bg-blue-100 text-blue-800',
      high: 'bg-orange-100 text-orange-800',
      urgent: 'bg-red-100 text-red-800'
    };
    return colors[priority];
  };

  const getLeadScoreColor = (score: number) => {
    if (score >= 80) return 'text-emerald-600 font-bold';
    if (score >= 60) return 'text-green-600 font-semibold';
    if (score >= 40) return 'text-yellow-600';
    return 'text-gray-600';
  };

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Lead Management Dashboard</h1>
        <p className="text-muted-foreground">Manage and track your potential customers</p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Leads</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{leads.length}</div>
            <p className="text-xs text-muted-foreground">
              +{leads.filter(l => new Date(l.timestamp) > new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)).length} this week
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">High Priority</CardTitle>
            <Star className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {leads.filter(l => l.priority === 'high' || l.priority === 'urgent').length}
            </div>
            <p className="text-xs text-muted-foreground">
              Need immediate attention
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">New Leads</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {leads.filter(l => l.status === 'new').length}
            </div>
            <p className="text-xs text-muted-foreground">
              Awaiting first contact
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Conversion Rate</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {leads.length > 0 ? Math.round((leads.filter(l => l.status === 'closed').length / leads.length) * 100) : 0}%
            </div>
            <p className="text-xs text-muted-foreground">
              Closed deals ratio
            </p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="leads" className="space-y-4">
        <TabsList>
          <TabsTrigger value="leads">Leads</TabsTrigger>
          <TabsTrigger value="visitors">Visitors</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>

        <TabsContent value="leads" className="space-y-4">
          {/* Filters and Search */}
          <Card>
            <CardHeader>
              <CardTitle>Lead Management</CardTitle>
              <CardDescription>Search, filter, and manage your leads</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col md:flex-row gap-4 mb-4">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Search leads..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-8"
                    />
                  </div>
                </div>
                
                <Select value={statusFilter} onValueChange={setStatusFilter}>
                  <SelectTrigger className="w-40">
                    <SelectValue placeholder="Status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Status</SelectItem>
                    <SelectItem value="new">New</SelectItem>
                    <SelectItem value="contacted">Contacted</SelectItem>
                    <SelectItem value="qualified">Qualified</SelectItem>
                    <SelectItem value="proposal">Proposal</SelectItem>
                    <SelectItem value="closed">Closed</SelectItem>
                    <SelectItem value="rejected">Rejected</SelectItem>
                  </SelectContent>
                </Select>
                
                <Select value={priorityFilter} onValueChange={setPriorityFilter}>
                  <SelectTrigger className="w-40">
                    <SelectValue placeholder="Priority" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Priority</SelectItem>
                    <SelectItem value="urgent">Urgent</SelectItem>
                    <SelectItem value="high">High</SelectItem>
                    <SelectItem value="medium">Medium</SelectItem>
                    <SelectItem value="low">Low</SelectItem>
                  </SelectContent>
                </Select>
                
                <Button onClick={() => exportLeads('csv')} variant="outline">
                  <Download className="h-4 w-4 mr-2" />
                  Export CSV
                </Button>
              </div>

              {/* Leads Table */}
              <div className="space-y-4">
                {filteredLeads.map((lead) => (
                  <Card key={lead.id} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-4">
                      <div className="flex justify-between items-start mb-3">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <h3 className="font-semibold text-lg">{lead.name}</h3>
                            <Badge className={getStatusColor(lead.status)}>
                              {lead.status}
                            </Badge>
                            <Badge className={getPriorityColor(lead.priority)}>
                              {lead.priority}
                            </Badge>
                            <span className={`text-sm ${getLeadScoreColor(lead.leadScore || 0)}`}>
                              Score: {lead.leadScore || 0}
                            </span>
                          </div>
                          
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                            <div className="flex items-center gap-2">
                              <Mail className="h-4 w-4 text-muted-foreground" />
                              <a href={`mailto:${lead.email}`} className="text-blue-600 hover:underline">
                                {lead.email}
                              </a>
                            </div>
                            <div className="flex items-center gap-2">
                              <Phone className="h-4 w-4 text-muted-foreground" />
                              <a href={`tel:${lead.phone}`} className="text-blue-600 hover:underline">
                                {lead.phone}
                              </a>
                            </div>
                            <div className="flex items-center gap-2">
                              <Building className="h-4 w-4 text-muted-foreground" />
                              <span>{lead.company}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <MapPin className="h-4 w-4 text-muted-foreground" />
                              <span>{lead.city}, {lead.state}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Calendar className="h-4 w-4 text-muted-foreground" />
                              <span>{new Date(lead.timestamp).toLocaleDateString()}</span>
                            </div>
                            <div className="text-muted-foreground">
                              Budget: {lead.monthlyBudget}
                            </div>
                          </div>
                          
                          <div className="mt-2">
                            <p className="text-sm text-muted-foreground">
                              Services: {lead.interestedServices.join(', ')}
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex gap-2">
                          <Dialog>
                            <DialogTrigger asChild>
                              <Button variant="outline" size="sm" onClick={() => setSelectedLead(lead)}>
                                <Eye className="h-4 w-4" />
                              </Button>
                            </DialogTrigger>
                            <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                              <DialogHeader>
                                <DialogTitle>Lead Details - {lead.name}</DialogTitle>
                              </DialogHeader>
                              {selectedLead && (
                                <div className="space-y-4">
                                  <div className="grid grid-cols-2 gap-4 text-sm">
                                    <div><strong>Email:</strong> {selectedLead.email}</div>
                                    <div><strong>Phone:</strong> {selectedLead.phone}</div>
                                    <div><strong>Company:</strong> {selectedLead.company}</div>
                                    <div><strong>Designation:</strong> {selectedLead.designation}</div>
                                    <div><strong>Business Type:</strong> {selectedLead.businessType}</div>
                                    <div><strong>Budget:</strong> {selectedLead.monthlyBudget}</div>
                                    <div><strong>Timeframe:</strong> {selectedLead.timeframe}</div>
                                    <div><strong>Referral:</strong> {selectedLead.referralSource}</div>
                                  </div>
                                  
                                  <div>
                                    <strong>Interested Services:</strong>
                                    <div className="flex flex-wrap gap-1 mt-1">
                                      {selectedLead.interestedServices.map(service => (
                                        <Badge key={service} variant="secondary">{service}</Badge>
                                      ))}
                                    </div>
                                  </div>
                                  
                                  <div>
                                    <strong>Current Challenges:</strong>
                                    <p className="text-sm mt-1">{selectedLead.currentChallenges}</p>
                                  </div>
                                  
                                  <div>
                                    <strong>Notes:</strong>
                                    <div className="space-y-2 mt-2">
                                      {selectedLead.notes?.map((note, index) => (
                                        <div key={index} className="bg-gray-50 p-2 rounded text-sm">
                                          <p>{note.text}</p>
                                          <p className="text-xs text-muted-foreground mt-1">
                                            {note.author} - {new Date(note.timestamp).toLocaleString()}
                                          </p>
                                        </div>
                                      ))}
                                    </div>
                                    
                                    <div className="flex gap-2 mt-2">
                                      <Input
                                        placeholder="Add a note..."
                                        value={newNote}
                                        onChange={(e) => setNewNote(e.target.value)}
                                        onKeyPress={(e) => e.key === 'Enter' && addNote(selectedLead.id)}
                                      />
                                      <Button onClick={() => addNote(selectedLead.id)}>
                                        <MessageSquare className="h-4 w-4" />
                                      </Button>
                                    </div>
                                  </div>
                                </div>
                              )}
                            </DialogContent>
                          </Dialog>
                          
                          <Select onValueChange={(value) => updateLeadStatus(lead.id, value as Lead['status'])}>
                            <SelectTrigger className="w-32">
                              <SelectValue placeholder="Update Status" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="new">New</SelectItem>
                              <SelectItem value="contacted">Contacted</SelectItem>
                              <SelectItem value="qualified">Qualified</SelectItem>
                              <SelectItem value="proposal">Proposal</SelectItem>
                              <SelectItem value="closed">Closed</SelectItem>
                              <SelectItem value="rejected">Rejected</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
                
                {filteredLeads.length === 0 && (
                  <div className="text-center py-8 text-muted-foreground">
                    No leads found matching your criteria.
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="visitors" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Website Visitors</CardTitle>
              <CardDescription>Track visitor behavior and engagement</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {visitors.map((visitor, index) => (
                  <Card key={visitor.sessionId} className="p-4">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
                      <div>
                        <strong>Session ID:</strong> {visitor.sessionId.slice(-8)}
                      </div>
                      <div>
                        <strong>Time on Site:</strong> {Math.round(visitor.timeOnPage / 60)}m {visitor.timeOnPage % 60}s
                      </div>
                      <div>
                        <strong>Scroll Depth:</strong> {visitor.scrollDepth}%
                      </div>
                      <div>
                        <strong>Clicks:</strong> {visitor.clicksCount}
                      </div>
                      <div>
                        <strong>Device:</strong> {visitor.deviceType}
                      </div>
                      <div>
                        <strong>Browser:</strong> {visitor.browser}
                      </div>
                      <div>
                        <strong>Pages:</strong> {visitor.pagesVisited.length}
                      </div>
                      <div>
                        <strong>Returning:</strong> {visitor.isReturningVisitor ? 'Yes' : 'No'}
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Lead Sources</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {Object.entries(
                    leads.reduce((acc, lead) => {
                      acc[lead.referralSource] = (acc[lead.referralSource] || 0) + 1;
                      return acc;
                    }, {} as Record<string, number>)
                  ).map(([source, count]) => (
                    <div key={source} className="flex justify-between">
                      <span>{source || 'Unknown'}</span>
                      <Badge variant="secondary">{count}</Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Budget Distribution</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {Object.entries(
                    leads.reduce((acc, lead) => {
                      acc[lead.monthlyBudget] = (acc[lead.monthlyBudget] || 0) + 1;
                      return acc;
                    }, {} as Record<string, number>)
                  ).map(([budget, count]) => (
                    <div key={budget} className="flex justify-between">
                      <span>{budget}</span>
                      <Badge variant="secondary">{count}</Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default LeadManagementDashboard;
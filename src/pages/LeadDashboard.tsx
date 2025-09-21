import React, { useEffect } from 'react';
import LeadManagementDashboard from '@/components/lead-capture/LeadManagementDashboard';

const LeadDashboard: React.FC = () => {
  useEffect(() => {
    document.title = 'Lead Management Dashboard - MarkFix';
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <LeadManagementDashboard />
    </div>
  );
};

export default LeadDashboard;
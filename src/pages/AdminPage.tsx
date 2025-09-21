import React from 'react';
import ProtectedAdminRoute from '@/components/admin/ProtectedAdminRoute';
import AdminDashboard from '@/components/admin/AdminDashboard';

const AdminPage: React.FC = () => {
  return (
    <ProtectedAdminRoute>
      <AdminDashboard />
    </ProtectedAdminRoute>
  );
};

export default AdminPage;
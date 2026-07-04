import { ReactNode } from 'react';
import AdminDashboard from './(user-management)/Admin';
import CustomerDashboard from './(user-management)/Customer';
import Dashboard from './page';

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  const isAdmin = false;

  if (isAdmin) {
    return (
      <div className="w-full px-5 flex">
        <AdminDashboard />
        <div className="">{children}</div>
      </div>
    );
  } else {
    return (
      <div className="w-full px-5 flex">
        <CustomerDashboard />
        <div className="w-flex flex-col w-full h-[600px] my-10 shadow rounded-xl hover:shadow-lg">
          {children}
        </div>
      </div>
    );
  }
};

export default DashboardLayout;

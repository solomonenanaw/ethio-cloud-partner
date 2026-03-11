import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  Users, 
  Package, 
  CreditCard, 
  Settings, 
  Bell, 
  Search,
  Plus,
  TrendingUp,
  DollarSign,
  Activity,
  MoreVertical,
  LogOut
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  AreaChart,
  Area 
} from 'recharts';
import { toast } from 'sonner';

const data = [
  { name: 'Jan', revenue: 4000, clients: 24 },
  { name: 'Feb', revenue: 3000, clients: 13 },
  { name: 'Mar', revenue: 2000, clients: 98 },
  { name: 'Apr', revenue: 2780, clients: 39 },
  { name: 'May', revenue: 1890, clients: 48 },
  { name: 'Jun', revenue: 2390, clients: 38 },
  { name: 'Jul', revenue: 3490, clients: 43 },
];

const Dashboard = ({ onLogout }: { onLogout: () => void }) => {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 hidden lg:flex flex-col">
        <div className="p-6">
          <div className="flex items-center space-x-2 text-primary">
            <Package className="w-8 h-8" />
            <span className="text-xl font-bold">Partner Hub</span>
          </div>
        </div>
        
        <nav className="flex-1 px-4 space-y-1">
          {[
            { name: 'Overview', icon: LayoutDashboard, id: 'overview' },
            { name: 'Clients', icon: Users, id: 'clients' },
            { name: 'Cloud Plans', icon: Package, id: 'plans' },
            { name: 'Billing', icon: CreditCard, id: 'billing' },
            { name: 'Settings', icon: Settings, id: 'settings' },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors text-left ${
                activeTab === item.id 
                  ? 'bg-primary/10 text-primary' 
                  : 'text-gray-500 hover:bg-gray-100'
              }`}
            >
              <item.icon size={20} />
              <span className="font-medium">{item.name}</span>
            </button>
          ))}
        </nav>

        <div className="p-4 border-t border-gray-100">
          <button 
            onClick={onLogout}
            className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-red-500 hover:bg-red-50 transition-colors"
          >
            <LogOut size={20} />
            <span className="font-medium">Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        {/* Header */}
        <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-8 sticky top-0 z-10">
          <div className="flex items-center flex-1 max-w-md">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input 
                type="text" 
                placeholder="Search clients or orders..." 
                className="w-full pl-10 pr-4 py-2 bg-gray-100 border-none rounded-lg focus:ring-2 focus:ring-primary/20 text-sm"
              />
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <button className="p-2 text-gray-400 hover:text-gray-600 relative">
              <Bell size={20} />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white" />
            </button>
            <div className="h-8 w-px bg-gray-200 mx-2" />
            <div className="flex items-center space-x-3">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-bold text-gray-900">Abebe Kebede</p>
                <p className="text-xs text-gray-500">Premium Partner</p>
              </div>
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold">
                AK
              </div>
            </div>
          </div>
        </header>

        <div className="p-8">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Welcome back, Abebe</h1>
              <p className="text-gray-500">Here's what's happening with your cloud business today.</p>
            </div>
            <Button onClick={() => toast.success('Starting new service wizard')}>
              <Plus className="mr-2 w-4 h-4" /> New Service
            </Button>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {[
              { label: 'Total Revenue', value: 'ETB 145,200', change: '+12.5%', icon: DollarSign, color: 'text-green-600', bg: 'bg-green-100' },
              { label: 'Active Clients', value: '124', change: '+8.2%', icon: Users, color: 'text-blue-600', bg: 'bg-blue-100' },
              { label: 'Cloud Usage', value: '84%', change: '+2.4%', icon: Activity, color: 'text-orange-600', bg: 'bg-orange-100' },
              { label: 'Earnings (MTD)', value: 'ETB 24,500', change: '+15.3%', icon: TrendingUp, color: 'text-purple-600', bg: 'bg-purple-100' },
            ].map((stat, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                <div className="flex justify-between items-start mb-4">
                  <div className={`p-3 rounded-lg ${stat.bg} ${stat.color}`}>
                    <stat.icon size={24} />
                  </div>
                  <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded">
                    {stat.change}
                  </span>
                </div>
                <p className="text-sm text-gray-500 font-medium mb-1">{stat.label}</p>
                <h3 className="text-2xl font-bold text-gray-900">{stat.value}</h3>
              </div>
            ))}
          </div>

          {/* Charts Row */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
            <div className="lg:col-span-2 bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-bold text-gray-900">Revenue Performance</h3>
                <select className="bg-gray-50 border-none text-sm rounded-lg focus:ring-0">
                  <option>Last 7 Days</option>
                  <option>Last 30 Days</option>
                </select>
              </div>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={data}>
                    <defs>
                      <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.1}/>
                        <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f3f4f6" />
                    <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#9ca3af', fontSize: 12}} />
                    <YAxis axisLine={false} tickLine={false} tick={{fill: '#9ca3af', fontSize: 12}} />
                    <Tooltip 
                      contentStyle={{borderRadius: '8px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)'}}
                    />
                    <Area type="monotone" dataKey="revenue" stroke="#3b82f6" strokeWidth={3} fillOpacity={1} fill="url(#colorRevenue)" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
              <h3 className="font-bold text-gray-900 mb-6">Recent Activity</h3>
              <div className="space-y-6">
                {[
                  { user: 'Biniyam T.', action: 'Purchased Enterprise Cloud', time: '2 mins ago', amount: 'ETB 4,500' },
                  { user: 'Selam A.', action: 'Upgraded Storage Plan', time: '1 hour ago', amount: 'ETB 1,200' },
                  { user: 'Desta G.', action: 'New Partner Registration', time: '3 hours ago', amount: 'ETB 0' },
                  { user: 'Mulugeta H.', action: 'Renewal Processed', time: '5 hours ago', amount: 'ETB 2,800' },
                  { user: 'Kidist W.', action: 'Support Ticket Resolved', time: '1 day ago', amount: 'ETB 0' },
                ].map((activity, idx) => (
                  <div key={idx} className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-xs font-bold text-gray-600">
                        {activity.user.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <p className="text-sm font-bold text-gray-900">{activity.user}</p>
                        <p className="text-xs text-gray-500">{activity.action}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-xs font-medium text-gray-900">{activity.amount !== 'ETB 0' ? activity.amount : ''}</p>
                      <p className="text-[10px] text-gray-400 uppercase">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Button variant="ghost" className="w-full mt-6 text-sm text-primary">View All Activity</Button>
            </div>
          </div>

          {/* Client Table Section */}
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
            <div className="p-6 border-b border-gray-100 flex items-center justify-between">
              <h3 className="font-bold text-gray-900">Active Service Deployments</h3>
              <Button variant="outline" size="sm">Download CSV</Button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-gray-50 text-gray-500 text-xs uppercase font-medium">
                  <tr>
                    <th className="px-6 py-4">Client Name</th>
                    <th className="px-6 py-4">Service Type</th>
                    <th className="px-6 py-4">Status</th>
                    <th className="px-6 py-4">Billing Date</th>
                    <th className="px-6 py-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {[
                    { name: 'Abyssinia Bank', service: 'Managed Hosting', status: 'Healthy', date: 'Oct 24, 2024' },
                    { name: 'Lucy Insurance', service: 'Private Cloud', status: 'Active', date: 'Oct 22, 2024' },
                    { name: 'Addis Softwares', service: 'Database Cluster', status: 'Updating', date: 'Oct 15, 2024' },
                    { name: 'Ethio Export', service: 'Storage S3', status: 'Healthy', date: 'Oct 10, 2024' },
                  ].map((row, idx) => (
                    <tr key={idx} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4">
                        <span className="text-sm font-bold text-gray-900">{row.name}</span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-sm text-gray-600">{row.service}</span>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex items-center px-2 py-1 rounded-full text-[10px] font-bold uppercase ${
                          row.status === 'Healthy' || row.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'
                        }`}>
                          {row.status}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-sm text-gray-500">{row.date}</span>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <button className="text-gray-400 hover:text-gray-600">
                          <MoreVertical size={16} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
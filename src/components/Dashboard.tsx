import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import TicketList from './TicketList';
import NewTicketModal from './NewTicketModal';
import { LogOut, Plus, LayoutDashboard } from 'lucide-react';

export default function Dashboard() {
  const { user, logout } = useAuth();
  const [isNewTicketModalOpen, setIsNewTicketModalOpen] = useState(false);

  const handleNewTicket = (ticketData: {
    title: string;
    description: string;
    priority: 'low' | 'medium' | 'high';
  }) => {
    // In a real application, this would make an API call to create the ticket
    console.log('New ticket:', ticketData);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <LayoutDashboard className="w-8 h-8 text-indigo-600" />
              <span className="ml-2 text-xl font-semibold text-gray-900">
                Support Dashboard
              </span>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-gray-700">Welcome, {user?.username}</span>
              <button
                onClick={logout}
                className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg transition-colors"
              >
                <LogOut className="w-5 h-5" />
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Support Tickets</h1>
          <button
            onClick={() => setIsNewTicketModalOpen(true)}
            className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg transition-colors"
          >
            <Plus className="w-5 h-5" />
            New Ticket
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-medium text-gray-900">Open Tickets</h3>
            <p className="text-3xl font-bold text-indigo-600 mt-2">3</p>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-medium text-gray-900">In Progress</h3>
            <p className="text-3xl font-bold text-yellow-600 mt-2">2</p>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-medium text-gray-900">Closed Today</h3>
            <p className="text-3xl font-bold text-green-600 mt-2">5</p>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-medium text-gray-900">Avg Response</h3>
            <p className="text-3xl font-bold text-gray-900 mt-2">2.4h</p>
          </div>
        </div>

        <TicketList />
      </main>

      <NewTicketModal
        isOpen={isNewTicketModalOpen}
        onClose={() => setIsNewTicketModalOpen(false)}
        onSubmit={handleNewTicket}
      />
    </div>
  );
}
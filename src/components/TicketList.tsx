import React from 'react';
import { Ticket } from '../types';
import { Clock, AlertCircle, CheckCircle } from 'lucide-react';

const mockTickets: Ticket[] = [
  {
    id: '1',
    title: 'Cannot access email',
    description: 'Unable to log into email client since this morning',
    status: 'open',
    priority: 'high',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: '2',
    title: 'Printer not working',
    description: 'Network printer is offline',
    status: 'in-progress',
    priority: 'medium',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

const priorityColors = {
  low: 'bg-green-100 text-green-800',
  medium: 'bg-yellow-100 text-yellow-800',
  high: 'bg-red-100 text-red-800',
};

const statusIcons = {
  open: <AlertCircle className="w-5 h-5 text-red-500" />,
  'in-progress': <Clock className="w-5 h-5 text-yellow-500" />,
  closed: <CheckCircle className="w-5 h-5 text-green-500" />,
};

export default function TicketList() {
  return (
    <div className="space-y-4">
      {mockTickets.map((ticket) => (
        <div
          key={ticket.id}
          className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow"
        >
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <div className="flex items-center gap-3">
                {statusIcons[ticket.status]}
                <h3 className="text-lg font-semibold text-gray-900">
                  {ticket.title}
                </h3>
              </div>
              <p className="mt-2 text-gray-600">{ticket.description}</p>
            </div>
            <span
              className={`px-3 py-1 rounded-full text-sm font-medium ${
                priorityColors[ticket.priority]
              }`}
            >
              {ticket.priority}
            </span>
          </div>
          <div className="mt-4 flex items-center justify-between text-sm text-gray-500">
            <span>Created: {ticket.createdAt.toLocaleDateString()}</span>
            <span>Last updated: {ticket.updatedAt.toLocaleDateString()}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
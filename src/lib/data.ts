import { Case, Notification, SupportService, Grievance } from '@/lib/types';
import { subDays, format } from 'date-fns';

const now = new Date('2024-07-26T12:00:00.000Z'); // Using a fixed date to prevent hydration errors

export const mockCases: Case[] = [
  {
    id: 'CASE-001',
    victimName: 'Anjali Sharma',
    firNumber: 'FIR-2023-12345',
    status: 'Disbursed',
    date: format(subDays(now, 5), 'yyyy-MM-dd'),
    assignedOfficer: 'Insp. R. Singh',
    district: 'North District',
    lastUpdate: format(subDays(now, 2), 'yyyy-MM-dd'),
    amount: 50000,
  },
  {
    id: 'CASE-002',
    victimName: 'Priya Kumari',
    firNumber: 'FIR-2023-67890',
    status: 'Approved',
    date: format(subDays(now, 15), 'yyyy-MM-dd'),
    assignedOfficer: 'SI M. Gupta',
    district: 'South District',
    lastUpdate: format(subDays(now, 4), 'yyyy-MM-dd'),
    amount: 75000,
  },
  {
    id: 'CASE-003',
    victimName: 'Sunita Devi',
    firNumber: 'FIR-2023-11223',
    status: 'Pending',
    date: format(subDays(now, 25), 'yyyy-MM-dd'),
    assignedOfficer: 'Insp. A. Verma',
    district: 'East District',
    lastUpdate: format(subDays(now, 10), 'yyyy-MM-dd'),
    amount: 100000,
  },
  {
    id: 'CASE-004',
    victimName: 'Geeta Singh',
    firNumber: 'FIR-2023-44556',
    status: 'Rejected',
    date: format(subDays(now, 40), 'yyyy-MM-dd'),
    assignedOfficer: 'Insp. R. Singh',
    district: 'West District',
    lastUpdate: format(subDays(now, 30), 'yyyy-MM-dd'),
    amount: 60000,
  },
  {
    id: 'CASE-005',
    victimName: 'Meena Patel',
    firNumber: 'FIR-2023-77889',
    status: 'Pending',
    date: format(subDays(now, 60), 'yyyy-MM-dd'),
    assignedOfficer: 'SI M. Gupta',
    district: 'North District',
    lastUpdate: format(subDays(now, 55), 'yyyy-MM-dd'),
    amount: 85000,
  },
];

export const mockNotifications: Notification[] = [
  {
    id: 'NOTIF-001',
    title: 'Payment Disbursed',
    description: 'Payment for case CASE-001 has been successfully disbursed.',
    date: format(subDays(now, 2), 'PP'),
    read: false,
  },
  {
    id: 'NOTIF-002',
    title: 'Case Approved',
    description: 'Your case CASE-002 has been approved. Disbursement is in progress.',
    date: format(subDays(now, 4), 'PP'),
    read: false,
  },
  {
    id: 'NOTIF-003',
    title: 'Document Request',
    description: 'Please upload the missing documents for case CASE-003.',
    date: format(subDays(now, 7), 'PP'),
    read: true,
  },
];

export const mockSupportServices: SupportService[] = [
  {
    id: 'SUPPORT-001',
    name: 'National Legal Services Authority (NALSA)',
    type: 'Legal Aid',
    contact: '15100',
    description: 'Provides free legal services to the weaker sections of the society.',
    location: 'Nationwide',
  },
  {
    id: 'SUPPORT-002',
    name: 'Jagori Grameen',
    type: 'NGO',
    contact: 'contact@jagorigrameen.org',
    description: 'Works on issues of violence against women, health, and education.',
    location: 'Himachal Pradesh',
  },
  {
    id: 'SUPPORT-003',
    name: 'Majlis Legal Centre',
    type: 'Legal Aid',
    contact: '022-2666-2394',
    description: 'A forum for women\'s rights discourse and legal initiatives.',
    location: 'Mumbai',
  },
];

export const mockGrievances: Grievance[] = [
    {
        id: 'GRV-001',
        caseId: 'CASE-003',
        subject: 'Delay in case processing',
        status: 'In Progress',
        date: format(subDays(now, 5), 'yyyy-MM-dd'),
    },
    {
        id: 'GRV-002',
        caseId: 'CASE-001',
        subject: 'Incorrect disbursement amount',
        status: 'Resolved',
        date: format(subDays(now, 20), 'yyyy-MM-dd'),
    }
]

export type Case = {
  id: string;
  victimName: string;
  firNumber: string;
  status: 'Pending' | 'Approved' | 'Disbursed' | 'Rejected';
  date: string;
  assignedOfficer: string;
  district: string;
  lastUpdate: string;
  amount: number;
};

export type Notification = {
  id: string;
  title: string;
  description: string;
  date: string;
  read: boolean;
};

export type SupportService = {
  id: string;
  name: string;
  type: 'Legal Aid' | 'NGO';
  contact: string;
  description: string;
  location: string;
};

export type Grievance = {
  id: string;
  caseId: string;
  subject: string;
  description?: string;
  status: 'Open' | 'In Progress' | 'Resolved';
  date: string;
};

export type InterCasteMarriage = {
  id: string;
  applicantName1: string;
  applicantName2: string;
  marriageCertificate: string;
  status: 'Submitted' | 'Verified' | 'Approved' | 'Disbursed';
  date: string;
  amount: number;
};

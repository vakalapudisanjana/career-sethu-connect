
export interface User {
  id: string;
  name: string;
  email: string;
  class: string;
  stream?: string;
  preferences?: UserPreferences;
}

export interface UserPreferences {
  stream: string;
  interestedCourses: string[];
  preferredLocation: string;
  budgetRange: string;
  reservationCategory: string;
}

export interface Course {
  id: string;
  name: string;
  duration: string;
  eligibility: string;
  description: string;
  scope: string;
  syllabus: string[];
  fees: string;
  careerPaths: string[];
  entranceExams: string[];
  stream: string;
}

export interface College {
  id: string;
  name: string;
  location: string;
  type: 'Government' | 'Private';
  courses: string[];
  fees: string;
  cutoffRank: number;
  seatsAvailable: number;
  reservationQuota: {
    general: number;
    sc: number;
    st: number;
    bc: number;
    ews: number;
  };
}

export interface Notification {
  id: string;
  title: string;
  description: string;
  date: string;
  type: 'exam' | 'deadline' | 'announcement';
  isRead: boolean;
}

export interface ExamResult {
  examName: string;
  rank: number;
  reservationCategory: string;
  eligibleColleges: College[];
}


import { Course, College, Notification } from '../types';

export const mockCourses: Course[] = [
  {
    id: '1',
    name: 'Computer Science Engineering',
    duration: '4 years',
    eligibility: '12th with PCM, 60% marks',
    description: 'Study of computer systems, programming, and computational thinking',
    scope: 'Software development, AI/ML, cybersecurity, data science',
    syllabus: ['Programming', 'Data Structures', 'Algorithms', 'Database Systems', 'Computer Networks'],
    fees: '2-8 Lakhs per year',
    careerPaths: ['Software Engineer', 'Data Scientist', 'Product Manager', 'Tech Consultant'],
    entranceExams: ['JEE Main', 'JEE Advanced', 'EAMCET'],
    stream: 'Science'
  },
  {
    id: '2',
    name: 'MBBS',
    duration: '5.5 years',
    eligibility: '12th with PCB, 50% marks',
    description: 'Bachelor of Medicine and Bachelor of Surgery',
    scope: 'Medical practice, research, healthcare administration',
    syllabus: ['Anatomy', 'Physiology', 'Biochemistry', 'Pathology', 'Medicine', 'Surgery'],
    fees: '5-25 Lakhs per year',
    careerPaths: ['Doctor', 'Surgeon', 'Medical Researcher', 'Healthcare Administrator'],
    entranceExams: ['NEET'],
    stream: 'Science'
  },
  {
    id: '3',
    name: 'Bachelor of Commerce',
    duration: '3 years',
    eligibility: '12th with any stream',
    description: 'Study of commerce, accounting, and business principles',
    scope: 'Finance, banking, accounting, business management',
    syllabus: ['Accounting', 'Economics', 'Business Studies', 'Statistics', 'Taxation'],
    fees: '50K-3 Lakhs per year',
    careerPaths: ['Chartered Accountant', 'Financial Analyst', 'Bank Manager', 'Business Consultant'],
    entranceExams: ['DU JAT', 'IPU CET'],
    stream: 'Commerce'
  },
  {
    id: '4',
    name: 'Bachelor of Arts in Psychology',
    duration: '3 years',
    eligibility: '12th with any stream',
    description: 'Study of human behavior and mental processes',
    scope: 'Clinical psychology, counseling, research, HR',
    syllabus: ['General Psychology', 'Developmental Psychology', 'Social Psychology', 'Research Methods'],
    fees: '40K-2 Lakhs per year',
    careerPaths: ['Psychologist', 'Counselor', 'HR Specialist', 'Researcher'],
    entranceExams: ['BHU UET', 'DU JAT'],
    stream: 'Arts'
  }
];

export const mockColleges: College[] = [
  {
    id: '1',
    name: 'JNTU Hyderabad',
    location: 'Hyderabad, Telangana',
    type: 'Government',
    courses: ['Computer Science', 'Electronics', 'Mechanical', 'Civil'],
    fees: '₹50,000/year',
    cutoffRank: 5000,
    seatsAvailable: 180,
    reservationQuota: {
      general: 40,
      sc: 15,
      st: 7,
      bc: 27,
      ews: 10
    }
  },
  {
    id: '2',
    name: 'BITS Pilani Hyderabad',
    location: 'Hyderabad, Telangana',
    type: 'Private',
    courses: ['Computer Science', 'Electronics', 'Mechanical', 'Chemical'],
    fees: '₹4,50,000/year',
    cutoffRank: 1500,
    seatsAvailable: 120,
    reservationQuota: {
      general: 50,
      sc: 15,
      st: 7,
      bc: 20,
      ews: 8
    }
  },
  {
    id: '3',
    name: 'NIT Warangal',
    location: 'Warangal, Telangana',
    type: 'Government',
    courses: ['Computer Science', 'Electronics', 'Mechanical', 'Civil', 'Chemical'],
    fees: '₹1,25,000/year',
    cutoffRank: 2000,
    seatsAvailable: 200,
    reservationQuota: {
      general: 42,
      sc: 15,
      st: 7,
      bc: 25,
      ews: 11
    }
  },
  {
    id: '4',
    name: 'IIIT Hyderabad',
    location: 'Hyderabad, Telangana',
    type: 'Government',
    courses: ['Computer Science', 'Electronics'],
    fees: '₹2,00,000/year',
    cutoffRank: 800,
    seatsAvailable: 80,
    reservationQuota: {
      general: 45,
      sc: 15,
      st: 7,
      bc: 23,
      ews: 10
    }
  },
  {
    id: '5',
    name: 'CBIT Hyderabad',
    location: 'Hyderabad, Telangana',
    type: 'Private',
    courses: ['Computer Science', 'Electronics', 'Information Technology'],
    fees: '₹2,50,000/year',
    cutoffRank: 8000,
    seatsAvailable: 150,
    reservationQuota: {
      general: 48,
      sc: 15,
      st: 7,
      bc: 22,
      ews: 8
    }
  }
];

export const mockNotifications: Notification[] = [
  {
    id: '1',
    title: 'EAMCET 2024 Registration Open',
    description: 'Register for TS EAMCET 2024. Last date: March 15, 2024',
    date: '2024-02-20',
    type: 'exam',
    isRead: false
  },
  {
    id: '2',
    title: 'NEET Application Deadline Approaching',
    description: 'Complete your NEET application before March 7, 2024',
    date: '2024-02-25',
    type: 'deadline',
    isRead: false
  },
  {
    id: '3',
    title: 'New Engineering Colleges Added',
    description: '15 new engineering colleges added to Telangana counseling',
    date: '2024-02-18',
    type: 'announcement',
    isRead: true
  }
];

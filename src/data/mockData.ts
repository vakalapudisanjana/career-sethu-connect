
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
    courses: ['Computer Science Engineering', 'Mechanical Engineering', 'Electrical Engineering'],
    fees: '1.5 Lakhs per year',
    cutoffRank: 2500,
    seatsAvailable: 180,
    reservationQuota: {
      general: 50,
      sc: 15,
      st: 7,
      bc: 27,
      ews: 10
    }
  },
  {
    id: '2',
    name: 'Osmania Medical College',
    location: 'Hyderabad, Telangana',
    type: 'Government',
    courses: ['MBBS', 'BDS'],
    fees: '25,000 per year',
    cutoffRank: 150,
    seatsAvailable: 250,
    reservationQuota: {
      general: 50,
      sc: 15,
      st: 7,
      bc: 27,
      eus: 10
    }
  },
  {
    id: '3',
    name: 'Loyola Academy',
    location: 'Secunderabad, Telangana',
    type: 'Private',
    courses: ['Bachelor of Commerce', 'Bachelor of Arts', 'BBA'],
    fees: '1.2 Lakhs per year',
    cutoffRank: 5000,
    seatsAvailable: 300,
    reservationQuota: {
      general: 85,
      sc: 5,
      st: 2,
      bc: 8,
      ews: 0
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

// 1.1 Faculty-Led Research Projects
export const phdResearchProjects = [
  {
    id: 1,
    title: 'AI for Renewable Energy Systems',
    role: 'PI',
    status: 'Active',
    funding: '₨1.5M',
    description: 'AI-based optimization for renewable energy systems.',
    department: 'Electrical Engineering',
    category: 'HEC Funded',
    duration: '2 years',
    startDate: '2024-01-15',
    endDate: '2025-12-31',
    supervisor: 'Dr. Usman Malik',
    teamSize: 4,
    publications: ['Paper 1', 'Paper 2']
  },
  // ... more projects
];

// 1.2 Research Assistantship Positions
export const phdAssistantships = [
  {
    id: 1,
    title: 'Senior Research Assistant - AI for Healthcare',
    type: 'Senior Research Assistant',
    department: 'Computer Science',
    status: 'Available',
    supervisor: 'Dr. Ali Khan',
    stipend: 'PKR 60,000-100,000/month',
    duration: '2-4 years',
    description: 'Leading research team, supervising junior researchers',
    requirements: ['PhD completed or nearing completion', 'Strong publication record']
  },
  // ... more assistantships
];

// 1.3 HEC Indigenous PhD Fellowship
export const hecFellowship = {
  name: 'HEC Indigenous PhD Fellowship',
  stipend: 'PKR 50,000-60,000/month',
  researchGrant: 'PKR 100,000/year',
  thesisGrant: 'PKR 150,000',
  duration: '5 years',
  eligibility: {
    education: 'MS/MPhil (18 years)',
    cgpa: '3.0/4.0',
    gatGeneral: '50%',
    gatSubject: '60%',
    ageLimit: '40 years'
  }
};

// ============================================================
// SECTION 2: THESIS & PUBLICATIONS
// ============================================================

// 2.1 PhD Thesis Database
export const phdTheses = [
  {
    id: 1,
    title: 'Deep Learning for Medical Image Analysis',
    author: 'Ali Raza',
    supervisor: 'Dr. Sana Khan',
    department: 'Computer Science',
    year: '2024',
    researchArea: 'Deep Learning',
    keywords: ['Medical Imaging', 'Deep Learning', 'Healthcare'],
    abstract: 'This thesis explores deep learning applications...',
    doi: '10.1234/phd.2024.001',
    citations: 45,
    status: 'Completed'
  },
  // ... more theses
];

// 2.2 Publications
export const phdPublications = [
  {
    id: 1,
    title: 'Deep Learning for Medical Image Analysis',
    authors: 'Dr. Sana Khan, Ali Raza',
    journal: 'IEEE Transactions on Medical Imaging',
    year: '2024',
    impact: '4.5',
    type: 'Journal',
    citations: 45,
    status: 'Published',
    doi: '10.1109/TMI.2024.1234567'
  },
  // ... more publications
];

// 2.3 Thesis Submission Process
export const thesisSubmissionProcess = {
  steps: [
    'Complete all coursework (18 credit hours)',
    'Pass Comprehensive/GAT examination',
    'Complete research work',
    'Publish required papers',
    'Write thesis (5-7 chapters)',
    'Plagiarism check (Turnitin - below 19%)',
    'Supervisor approval',
    'Departmental review committee approval',
    'External evaluation (2 international experts)',
    'Internal evaluation (3 local experts)',
    'Incorporate feedback/revisions',
    'Final submission'
  ],
  format: {
    wordLimit: '80,000-120,000 words',
    font: 'Times New Roman 12pt',
    spacing: 'Double spacing',
    margin: 'Left 1.5", Right 1", Top 1", Bottom 1"'
  }
};

// ============================================================
// SECTION 3: RESEARCH & TRAVEL GRANTS
// ============================================================

// 3.1 National Grants
export const nationalGrants = [
  {
    id: 1,
    name: 'NRPU Research Grant',
    agency: 'HEC',
    maxAmount: 'PKR 20-50 Million',
    duration: '2-3 years',
    focus: 'Basic & Applied Research',
    deadline: '2024-12-10',
    status: 'Open'
  },
  // ... more grants
];

// 3.2 International Grants
export const internationalGrants = [
  {
    id: 1,
    name: 'Fulbright-HEC PhD Scholarship',
    agency: 'USAID/HEC',
    amount: '$50,000/year',
    duration: '3-5 years',
    country: 'USA',
    deadline: '2024-11-30',
    status: 'Open'
  },
  // ... more grants
];

// 3.3 Travel Grants
export const travelGrants = [
  {
    id: 1,
    name: 'HEC Travel Grant Program',
    amount: 'PKR 300,000',
    coverage: 'Airfare, registration, accommodation',
    eligibility: 'PhD scholars with accepted papers',
    deadline: 'Apply 60 days before travel'
  },
  // ... more grants
];

// ============================================================
// SECTION 4: CONFERENCES
// ============================================================

export const conferences = [
  {
    id: 1,
    title: 'IEEE International Conference on Power Systems',
    type: 'International',
    location: 'USA',
    date: '2024-12-15',
    deadline: '2024-10-15',
    ranking: 'A',
    acceptanceRate: '20%',
    website: 'www.ieee-conference.com'
  },
  // ... more conferences
];

// ============================================================
// SECTION 5: STARTUP FUNDING
// ============================================================

export const startupFunding = [
  {
    id: 1,
    program: 'National Innovation Fund',
    organization: 'HEC',
    amount: 'PKR 5-20 Million',
    stage: 'Seed/Early',
    focus: 'Tech Innovation',
    deadline: '2024-12-15'
  },
  // ... more funding
];

// ============================================================
// SECTION 6: ACTIVITIES
// ============================================================

export const phdActivities = [
  {
    id: 1,
    title: 'Weekly PhD Research Seminar',
    schedule: 'Every Thursday, 3:00-5:00 PM',
    format: '1-2 PhD scholars present',
    duration: '30 min presentation + 15 min Q&A',
    audience: 'Faculty, PhD scholars, MS students'
  },
  // ... more activities
];

// ============================================================
// SECTION 7: SCHOLARSHIPS
// ============================================================

export const phdScholarships = [
  {
    id: 1,
    name: 'HEC Indigenous PhD Fellowship',
    amount: 'PKR 50,000-60,000/month',
    duration: '5 years',
    eligibility: 'MS/MPhil, CGPA ≥ 3.0, GAT ≥ 50%',
    deadline: '2024-12-15',
    status: 'Available'
  },
  // ... more scholarships
];

// ============================================================
// SECTION 8: RESOURCES
// ============================================================

export const phdResources = [
  // Grant Application Forms
  { id: 1, title: 'HEC NRPU Application Form', type: 'Form', category: 'Grants' },
  { id: 2, title: 'PhD Thesis Template', type: 'Template', category: 'Thesis' },
  // ... more resources
];

// ============================================================
// SECTION 9: FEEDBACK
// ============================================================

export const feedbackCategories = [
  'Academic Feedback',
  'Supervisor Evaluation',
  'Research Progress',
  'Course Evaluation',
  'Lab Facilities',
  'Library Services',
  'IT Services',
  'Student Services'
];

export const feedbackForms = {
  supervisorEvaluation: {
    fields: [
      'Availability for meetings',
      'Quality of supervision',
      'Research guidance',
      'Feedback on writing',
      'Career development',
      'Mentorship'
    ],
    scale: '1-5 (1=Poor, 5=Excellent)'
  }
};

// ============================================================
// SECTION 10: STATS
// ============================================================

export const phdStatsData = [
  { label: 'Active Research', value: '12', change: '+3 this semester' },
  { label: 'Publications', value: '89', change: '+12 this year' },
  { label: 'Research Grants', value: 'PKR 84M', change: '8 active grants' },
  { label: 'Citations', value: '1,247', change: '+234 this year' }
];

// ============================================================
// SECTION 11: ANNOUNCEMENTS
// ============================================================

export const phdAnnouncementsData = [
  {
    id: 1,
    title: '🔬 International Research Symposium 2025',
    description: 'International Research Symposium scheduled for 15-17 December 2025. PhD scholars invited.',
    date: 'June 10, 2025'
  },
  // ... more announcements
];

// ============================================================
// SECTION 12: RESEARCH AREAS & GROUPS
// ============================================================

export const phdResearchAreas = [
  { id: 1, name: 'Artificial Intelligence', icon: '🤖', description: 'ML, NLP, Computer Vision' },
  // ... more areas
];

export const phdResearchGroups = [
  { id: 1, name: 'Center for AI Research (CAIR)', director: 'Dr. Ali Khan', members: 12 },
  // ... more groups
];
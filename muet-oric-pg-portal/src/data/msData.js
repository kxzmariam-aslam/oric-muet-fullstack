// ============================================================
// MASTER'S STUDENT DATA - COMPLETE
// ============================================================

// 1. Research Projects
export const researchProjects = [
  { 
    id: 1, 
    title: 'AI for Healthcare Systems', 
    supervisor: 'Dr. Ali Khan', 
    department: 'Computer Science', 
    status: 'Open',
    type: 'Research Assistantship',
    deadline: '2024-12-15',
    description: 'Developing AI models for medical image analysis and diagnosis.',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&h=200&fit=crop'
  },
  { 
    id: 2, 
    title: 'Machine Learning in NLP', 
    supervisor: 'Dr. Sana Ahmed', 
    department: 'Computer Science', 
    status: 'Open',
    type: 'Research Project',
    deadline: '2024-11-30',
    description: 'Natural Language Processing for Urdu language understanding.',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=400&h=200&fit=crop'
  },
  { 
    id: 3, 
    title: 'Renewable Energy Optimization', 
    supervisor: 'Dr. Usman Malik', 
    department: 'Electrical Engineering', 
    status: 'Open',
    type: 'Research Project',
    deadline: '2024-12-20',
    description: 'Optimizing solar energy systems using machine learning.',
    image: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=400&h=200&fit=crop'
  },
  { 
    id: 4, 
    title: 'Blockchain for Supply Chain', 
    supervisor: 'Dr. Fatima Noor', 
    department: 'Computer Science', 
    status: 'Open',
    type: 'Research Assistantship',
    deadline: '2024-12-10',
    description: 'Blockchain-based traceability for agricultural supply chains.',
    image: 'https://images.unsplash.com/photo-1639322537228-f710d846310a?w=400&h=200&fit=crop'
  },
  { 
    id: 5, 
    title: 'IoT in Agriculture', 
    supervisor: 'Dr. Ahmed Raza', 
    department: 'Electronics', 
    status: 'Open',
    type: 'Research Project',
    deadline: '2024-12-20',
    description: 'IoT sensors for smart farming and crop monitoring.',
    image: 'https://images.unsplash.com/photo-1586771107445-d3ca888129ce?w=400&h=200&fit=crop'
  },
];

// 2. Research Assistantships
export const assistantshipsData = [
  { 
    id: 1, 
    title: 'Research Assistant - AI for Healthcare', 
    department: 'Computer Science', 
    status: 'Available',
    supervisor: 'Dr. Ali Khan',
    stipend: '₨45,000/month',
    description: 'Assist in AI research for medical imaging projects.'
  },
  { 
    id: 2, 
    title: 'Research Assistant - Renewable Energy', 
    department: 'Electrical Engineering', 
    status: 'Available',
    supervisor: 'Dr. Usman Malik',
    stipend: '₨40,000/month',
    description: 'Research support for solar energy optimization.'
  },
];

// 3. Thesis Data
export const thesisData = {
  title: 'Deep Learning for Medical Image Analysis',
  supervisor: 'Dr. Sana Khan',
  status: 'In Progress',
  progress: 70,
  startDate: '2024-01-15',
  expectedCompletion: '2025-06-30'
};

// 4. Publications
export const publications = [
  { 
    id: 1, 
    title: 'Deep Learning for Medical Image Analysis', 
    authors: 'Ali Raza, Dr. Sana Khan',
    journal: 'IEEE Transactions on Medical Imaging', 
    year: '2024', 
    impact: '4.5',
    type: 'Journal',
    citations: 45,
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&h=200&fit=crop'
  },
  { 
    id: 2, 
    title: 'AI in Healthcare: A Review', 
    authors: 'Sara Ahmed, Dr. Usman Malik',
    journal: 'Nature Medicine', 
    year: '2023', 
    impact: '5.2',
    type: 'Journal',
    citations: 89,
    image: 'https://images.unsplash.com/photo-1504813184591-01572f98c85f?w=400&h=200&fit=crop'
  },
  { 
    id: 3, 
    title: 'Optimization of Solar Energy Systems', 
    authors: 'Ali Raza, Dr. Usman Malik',
    conference: 'ICAI 2024', 
    year: '2024',
    type: 'Conference',
    citations: 12,
    image: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=400&h=200&fit=crop'
  },
];

// 5. Grants Data
export const grantsData = [
  { 
    id: 1, 
    title: 'NRPU Research Grant - Tier 2', 
    amount: '₨500,000', 
    deadline: '2024-12-10', 
    provider: 'HEC',
    eligibility: 'Faculty, PhD Students',
    status: 'Open',
    description: 'Funding for innovative research projects in engineering.'
  },
  { 
    id: 2, 
    title: 'HEC Travel Grant', 
    amount: '₨200,000', 
    deadline: '2024-11-30', 
    provider: 'HEC',
    eligibility: 'All Students',
    status: 'Open',
    description: 'Travel support for conference presentations.'
  },
  { 
    id: 3, 
    title: 'International Collaboration Grant', 
    amount: '$10,000', 
    deadline: '2024-12-01', 
    provider: 'British Council',
    eligibility: 'Faculty',
    status: 'Open',
    description: 'Funding for international research partnerships.'
  },
];

// 6. Conferences
export const conferencesData = [
  { 
    id: 1, 
    title: 'International Conference on AI & Data Science', 
    type: 'International', 
    date: 'Dec 15-17, 2024', 
    location: 'Islamabad, Pakistan',
    speakers: 20,
    registrationDeadline: '2024-11-30',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=200&fit=crop'
  },
  { 
    id: 2, 
    title: 'National Research Symposium', 
    type: 'National', 
    date: 'Nov 20-21, 2024', 
    location: 'Jamshoro, Sindh',
    speakers: 15,
    registrationDeadline: '2024-11-10',
    image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=400&h=200&fit=crop'
  },
  { 
    id: 3, 
    title: 'IEEE Big Data Conference', 
    type: 'International', 
    date: 'Nov 15-18, 2024', 
    location: 'Dubai, UAE',
    speakers: 25,
    registrationDeadline: '2024-10-30',
    image: 'https://images.unsplash.com/photo-1551818255-e6e10975bc17?w=400&h=200&fit=crop'
  },
];

// 7. Startup Funding
export const startupsData = [
  { 
    id: 1, 
    title: 'AI-Powered HealthTech Solution', 
    founder: 'Ali Raza', 
    team: 4, 
    funding: '₨500,000',
    status: 'Open',
    deadline: '2024-12-15',
    description: 'AI-based diagnostic tool for early disease detection.'
  },
  { 
    id: 2, 
    title: 'Renewable Energy Startup', 
    founder: 'Sara Ahmed', 
    team: 3, 
    funding: '₨1,000,000',
    status: 'Open',
    deadline: '2024-11-30',
    description: 'Solar energy solutions for rural communities.'
  },
];

// 8. Activities
export const activitiesData = [
  { 
    id: 1, 
    title: 'MUET Research Expo 2024', 
    type: 'Exhibition', 
    date: 'Nov 5-6, 2024', 
    location: 'MUET Main Campus',
    participants: 200,
    description: 'Annual research exhibition showcasing innovative projects.',
    image: 'https://images.unsplash.com/photo-1560523159-4a9692d222ef?w=400&h=200&fit=crop'
  },
  { 
    id: 2, 
    title: 'Innovation Hackathon 2024', 
    type: 'Competition', 
    date: 'Oct 20-22, 2024', 
    location: 'ORIC Hall',
    participants: 50,
    description: '48-hour hackathon for tech innovation.',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&h=200&fit=crop'
  },
  { 
    id: 3, 
    title: 'Cultural Day 2024', 
    type: 'Event', 
    date: 'Nov 15, 2024', 
    location: 'MUET Ground',
    participants: 500,
    description: 'Cultural celebration and student engagement.',
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=400&h=200&fit=crop'
  },
];

// 9. Scholarships
export const scholarshipsData = [
  { 
    id: 1, 
    title: 'HEC PhD Scholarship Program', 
    amount: '₨1.5M/year', 
    deadline: '2024-12-15', 
    provider: 'HEC',
    status: 'Available',
    eligibility: 'PhD Students',
    description: 'Full funding for PhD research in priority areas.'
  },
  { 
    id: 2, 
    title: 'USAID Merit Scholarship', 
    amount: 'Full Tuition + Stipend', 
    deadline: '2024-11-30', 
    provider: 'USAID',
    status: 'Applied',
    eligibility: "Bachelor's Students",
    description: 'Merit-based scholarship for talented students.'
  },
  { 
    id: 3, 
    title: 'British Council Research Fellowship', 
    amount: '$10,000', 
    deadline: '2024-12-01', 
    provider: 'British Council',
    status: 'Available',
    eligibility: 'PhD Students',
    description: 'Research fellowship for international collaboration.'
  },
];

// 10. Resources
export const resourcesData = [
  { id: 1, title: 'MS Thesis Template', type: 'Template', category: 'Thesis', size: '245 KB', downloads: 120 },
  { id: 2, title: 'Research Grant Application Form', type: 'Form', category: 'Grants', size: '78 KB', downloads: 180 },
  { id: 3, title: 'Research Ethics Guidelines', type: 'Guide', category: 'Ethics', size: '890 KB', downloads: 95 },
  { id: 4, title: 'Research Proposal Template', type: 'Template', category: 'Proposal', size: '156 KB', downloads: 200 },
  { id: 5, title: 'Academic Writing Handbook', type: 'Guide', category: 'Writing', size: '3.5 MB', downloads: 150 },
];

// 11. Announcements
export const announcementsData = [
  {
    id: 1,
    title: '🔬 Research Symposium 2025',
    description: 'Annual MUET Research Symposium scheduled for 28 July 2025. Faculty and PhD scholars are invited to submit abstracts by 20 June.',
    date: 'June 5, 2025'
  },
  {
    id: 2,
    title: '📚 New CPD Batch: Research Methodology',
    description: 'A new batch of the Research Methodology and Academic Writing CPD course starts July 1. Register through ORIC before June 25.',
    date: 'June 2, 2025'
  },
  {
    id: 3,
    title: '📋 Annual Self-Assessment Scorecard Open',
    description: 'HEC ORIC Annual Self-Assessment Scorecard for FY 2024-25 is now open. All units must submit their Self-Assessment scores by 30th November 2025.',
    date: 'June 2, 2025'
  }
];

// 12. Research Areas
export const researchAreas = [
  { id: 1, name: 'Artificial Intelligence', icon: '🤖', description: 'Machine Learning, NLP, Computer Vision' },
  { id: 2, name: 'Cyber Security', icon: '🔒', description: 'Network Security, Cryptography' },
  { id: 3, name: 'Green Energy', icon: '🌱', description: 'Solar, Wind, Smart Grids' },
  { id: 4, name: 'Healthcare Technologies', icon: '🏥', description: 'Medical Imaging, Telemedicine' },
  { id: 5, name: 'Sustainable Agriculture', icon: '🌾', description: 'Precision Farming, IoT' },
];

// 13. Research Groups
export const researchGroups = [
  { id: 1, name: 'Center for AI Research (CAIR)', director: 'Dr. Ali Khan', members: 12 },
  { id: 2, name: 'Energy Research Center (ERC)', director: 'Dr. Usman Malik', members: 8 },
  { id: 3, name: 'Communication & Signal Processing Lab', director: 'Dr. Sana Ahmed', members: 10 },
];

// 14. Stats
export const statsData = [
  { label: 'Active Projects', value: '47', change: '+5 this semester', icon: '🔬' },
  { label: 'Publications', value: '138', change: '+22 from last year', icon: '📄' },
  { label: 'Research Grants', value: 'PKR 84M', change: '12 active grants', icon: '💰' },
  { label: 'Researchers', value: '312', change: 'Faculty and scholars', icon: '👨‍🔬' },
];
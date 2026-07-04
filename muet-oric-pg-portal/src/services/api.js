const API_URL = 'http://localhost:5000/api';

// ============================================================
// ✅ AUTH APIs
// ============================================================

// ✅ Login User
export const loginUser = async (email, password) => {
  try {
    const response = await fetch(`${API_URL}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('❌ Login error:', error);
    return { success: false, message: 'Network error. Please check your connection.' };
  }
};

// ✅ Register User
export const registerUser = async (userData) => {
  try {
    const response = await fetch(`${API_URL}/auth/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userData)
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('❌ Register error:', error);
    return { success: false, message: 'Network error. Please check your connection.' };
  }
};

// ✅ Get Current User
export const getCurrentUser = async (token) => {
  try {
    const response = await fetch(`${API_URL}/auth/me`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('❌ Get user error:', error);
    return { success: false, message: 'Network error' };
  }
};

// ============================================================
// ✅ DASHBOARD APIs
// ============================================================

// ✅ Get Dashboard Stats
export const getDashboardStats = async () => {
  try {
    const response = await fetch(`${API_URL}/dashboard/stats`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('❌ Stats error:', error);
    return { success: false, stats: {} };
  }
};

// ============================================================
// ✅ PROJECTS APIs
// ============================================================

// ✅ Get All Projects
export const getProjects = async () => {
  try {
    const response = await fetch(`${API_URL}/projects`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('❌ Projects error:', error);
    return { success: false, projects: [] };
  }
};

// ✅ Get Single Project
export const getProjectById = async (id) => {
  try {
    const response = await fetch(`${API_URL}/projects/${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('❌ Project error:', error);
    return { success: false, project: null };
  }
};

// ✅ Create Project
export const createProject = async (projectData) => {
  try {
    const response = await fetch(`${API_URL}/projects`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(projectData)
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('❌ Create project error:', error);
    return { success: false, message: 'Network error' };
  }
};

// ✅ Update Project
export const updateProject = async (id, projectData) => {
  try {
    const response = await fetch(`${API_URL}/projects/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(projectData)
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('❌ Update project error:', error);
    return { success: false, message: 'Network error' };
  }
};

// ✅ Delete Project
export const deleteProject = async (id) => {
  try {
    const response = await fetch(`${API_URL}/projects/${id}`, {
      method: 'DELETE'
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('❌ Delete project error:', error);
    return { success: false, message: 'Network error' };
  }
};

// ============================================================
// ✅ GRANTS APIs
// ============================================================

// ✅ Get All Grants
export const getGrants = async () => {
  try {
    const response = await fetch(`${API_URL}/grants`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('❌ Grants error:', error);
    return { success: false, grants: [] };
  }
};

// ✅ Get Single Grant
export const getGrantById = async (id) => {
  try {
    const response = await fetch(`${API_URL}/grants/${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('❌ Grant error:', error);
    return { success: false, grant: null };
  }
};

// ✅ Create Grant
export const createGrant = async (grantData) => {
  try {
    const response = await fetch(`${API_URL}/grants`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(grantData)
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('❌ Create grant error:', error);
    return { success: false, message: 'Network error' };
  }
};

// ============================================================
// ✅ CONFERENCES APIs
// ============================================================

// ✅ Get All Conferences
export const getConferences = async () => {
  try {
    const response = await fetch(`${API_URL}/conferences`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('❌ Conferences error:', error);
    return { success: false, conferences: [] };
  }
};

// ✅ Create Conference
export const createConference = async (conferenceData) => {
  try {
    const response = await fetch(`${API_URL}/conferences`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(conferenceData)
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('❌ Create conference error:', error);
    return { success: false, message: 'Network error' };
  }
};

// ============================================================
// ✅ SCHOLARSHIPS APIs
// ============================================================

// ✅ Get All Scholarships
export const getScholarships = async () => {
  try {
    const response = await fetch(`${API_URL}/scholarships`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('❌ Scholarships error:', error);
    return { success: false, scholarships: [] };
  }
};

// ✅ Create Scholarship
export const createScholarship = async (scholarshipData) => {
  try {
    const response = await fetch(`${API_URL}/scholarships`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(scholarshipData)
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('❌ Create scholarship error:', error);
    return { success: false, message: 'Network error' };
  }
};

// ============================================================
// ✅ FEEDBACK APIs
// ============================================================

//  Submit Feedback
export const submitFeedback = async (feedbackData) => {
  try {
    const response = await fetch(`${API_URL}/feedback`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(feedbackData)
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('❌ Feedback error:', error);
    return { success: false, message: 'Network error' };
  }
};

//Get All Feedback
export const getFeedback = async () => {
  try {
    const response = await fetch(`${API_URL}/feedback`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('❌ Get feedback error:', error);
    return { success: false, feedback: [] };
  }
};

// ============================================================
//  TEST CONNECTION
// ============================================================

// Test Backend Connection
export const testConnection = async () => {
  try {
    const response = await fetch(`${API_URL}/test`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('❌ Connection error:', error);
    return null;
  }
};
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AuthProvider, AuthContext } from './context/AuthContext';
import LoginPage from './components/Pages/LoginPage';
import MSDashboardPage from './components/Dashboard/MSDashboardPage';
import PhDDashboardPage from './components/Dashboard/PhDDashboardPage';
import ProfilePage from './components/Pages/ProfilePage';
import SettingsPage from './components/Pages/SettingsPage';

// ✅ Import all 9 pages
import ResearchProjectsPage from './components/Pages/ResearchProjectsPage';
import ThesisPapersPage from './components/Pages/ThesisPapersPage';
import GrantsFundingPage from './components/Pages/GrantsFundingPage';
import ConferencesPage from './components/Pages/ConferencesPage';
import StartupFundingPage from './components/Pages/StartupFundingPage';
import ActivitiesPage from './components/Pages/ActivitiesPage';
import ScholarshipsPage from './components/Pages/ScholarshipsPage';
import ResourcesPage from './components/Pages/ResourcesPage';
import FeedbackPage from './components/Pages/FeedbackPage';

import { useContext } from 'react';

const ProtectedRoute = ({ children, requiredRole }) => {
  const { isAuthenticated, loading, user } = useContext(AuthContext);

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center text-oric-navy text-lg">Loading...</div>;
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  if (requiredRole && user?.role !== requiredRole) {
    return <Navigate to={`/${user?.role}-dashboard`} replace />;
  }

  return children;
};

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Toaster position="top-right" />
        <Routes>
          {/* Auth Route */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<Navigate to="/login" replace />} />

          {/* Dashboard Routes */}
          <Route path="/masters-dashboard" element={
            <ProtectedRoute requiredRole="masters">
              <MSDashboardPage />
            </ProtectedRoute>
          } />
          <Route path="/phd-dashboard" element={
            <ProtectedRoute requiredRole="phd">
              <PhDDashboardPage />
            </ProtectedRoute>
          } />

          {/* ✅ 9 Pages Routes */}
          <Route path="/research-projects" element={
            <ProtectedRoute>
              <ResearchProjectsPage />
            </ProtectedRoute>
          } />
          <Route path="/thesis-papers" element={
            <ProtectedRoute>
              <ThesisPapersPage />
            </ProtectedRoute>
          } />
          <Route path="/grants-funding" element={
            <ProtectedRoute>
              <GrantsFundingPage />
            </ProtectedRoute>
          } />
          <Route path="/conferences" element={
            <ProtectedRoute>
              <ConferencesPage />
            </ProtectedRoute>
          } />
          <Route path="/startup-funding" element={
            <ProtectedRoute>
              <StartupFundingPage />
            </ProtectedRoute>
          } />
          <Route path="/activities" element={
            <ProtectedRoute>
              <ActivitiesPage />
            </ProtectedRoute>
          } />
          <Route path="/scholarships" element={
            <ProtectedRoute>
              <ScholarshipsPage />
            </ProtectedRoute>
          } />
          <Route path="/resources" element={
            <ProtectedRoute>
              <ResourcesPage />
            </ProtectedRoute>
          } />
          <Route path="/feedback" element={
            <ProtectedRoute>
              <FeedbackPage />
            </ProtectedRoute>
          } />

          {/* User Routes */}
          <Route path="/profile" element={
            <ProtectedRoute>
              <ProfilePage />
            </ProtectedRoute>
          } />
          <Route path="/settings" element={
            <ProtectedRoute>
              <SettingsPage />
            </ProtectedRoute>
          } />

          {/* PhD Only Route */}
          <Route path="/supervision" element={
            <ProtectedRoute requiredRole="phd">
              <div className="min-h-screen flex items-center justify-center text-oric-navy text-xl">Supervision Page</div>
            </ProtectedRoute>
          } />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
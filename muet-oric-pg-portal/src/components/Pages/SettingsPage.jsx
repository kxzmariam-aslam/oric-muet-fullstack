import { useState, useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import MainLayout from '../Layout/MainLayout';
import { Shield, Key, Save, Eye, EyeOff } from 'lucide-react';
import toast from 'react-hot-toast';

const SettingsPage = () => {
  const { user } = useContext(AuthContext);
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!oldPassword || !newPassword || !confirmPassword) {
      toast.error('Please fill all fields');
      return;
    }
    
    if (newPassword !== confirmPassword) {
      toast.error('New passwords do not match!');
      return;
    }
    
    if (newPassword.length < 6) {
      toast.error('Password must be at least 6 characters');
      return;
    }
    
    if (oldPassword === newPassword) {
      toast.error('New password must be different from current password');
      return;
    }
    
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setOldPassword('');
      setNewPassword('');
      setConfirmPassword('');
      toast.success('Password changed successfully!');
    }, 1500);
  };

  return (
    <MainLayout>
      <div className="max-w-3xl mx-auto">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-oric-navy flex items-center gap-2">
            <Shield size={28} className="text-oric-royal" />
            Settings
          </h1>
          <p className="text-gray-500 text-sm mt-1">Manage your account security</p>
        </div>

        <div className="bg-white rounded-oric shadow-oric border border-gray-100 overflow-hidden">
          <div className="px-4 sm:px-6 py-4 bg-gradient-to-r from-oric-light-blue/30 to-white border-b border-gray-100">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-oric-royal rounded-lg">
                <Key className="text-white" size={20} />
              </div>
              <div>
                <h2 className="text-lg font-semibold text-oric-navy">Change Password</h2>
                <p className="text-sm text-gray-500">Update your account password</p>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="p-4 sm:p-6 space-y-5">
            <div>
              <label className="block text-sm font-medium text-oric-dark-gray mb-1.5">Current Password</label>
              <div className="relative">
                <input
                  type={showOldPassword ? 'text' : 'password'}
                  value={oldPassword}
                  onChange={(e) => setOldPassword(e.target.value)}
                  className="w-full pl-4 pr-10 py-2.5 border border-gray-300 rounded-oric-sm focus:ring-2 focus:ring-oric-royal outline-none transition-all"
                  placeholder="Enter your current password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowOldPassword(!showOldPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-oric-navy"
                >
                  {showOldPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-oric-dark-gray mb-1.5">New Password</label>
              <div className="relative">
                <input
                  type={showNewPassword ? 'text' : 'password'}
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  className="w-full pl-4 pr-10 py-2.5 border border-gray-300 rounded-oric-sm focus:ring-2 focus:ring-oric-royal outline-none transition-all"
                  placeholder="Enter new password (min 6 characters)"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowNewPassword(!showNewPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-oric-navy"
                >
                  {showNewPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-oric-dark-gray mb-1.5">Confirm New Password</label>
              <div className="relative">
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full pl-4 pr-10 py-2.5 border border-gray-300 rounded-oric-sm focus:ring-2 focus:ring-oric-royal outline-none transition-all"
                  placeholder="Confirm your new password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-oric-navy"
                >
                  {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
              {confirmPassword && newPassword && confirmPassword !== newPassword && (
                <p className="mt-1 text-xs text-oric-danger">❌ Passwords do not match</p>
              )}
              {confirmPassword && newPassword && confirmPassword === newPassword && (
                <p className="mt-1 text-xs text-oric-success">✅ Passwords match</p>
              )}
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-2.5 bg-oric-royal text-white rounded-oric-sm hover:bg-oric-blue transition-all duration-300 font-medium disabled:opacity-50"
            >
              <Save size={18} />
              {isLoading ? 'Changing...' : 'Change Password'}
            </button>
          </form>

          <div className="px-4 sm:px-6 py-4 bg-gradient-to-r from-oric-gold/10 to-oric-light-blue/20 border-t border-gray-100">
            <div className="flex items-start gap-2">
              <div className="p-1 bg-oric-gold/20 rounded-full mt-0.5">
                <span className="text-oric-gold text-xs">⚠️</span>
              </div>
              <div>
                <p className="text-xs text-gray-600">
                  <strong className="text-oric-navy">Password Requirements:</strong><br />
                  • Minimum 6 characters<br />
                  • At least one uppercase letter<br />
                  • At least one number
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 bg-white rounded-oric shadow-oric border border-gray-100 p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-oric-light-blue rounded-lg">
              <Shield size={20} className="text-oric-royal" />
            </div>
            <div>
              <p className="text-sm font-medium text-oric-navy">Account Security</p>
              <p className="text-xs text-gray-500">
                Logged in as: <span className="font-medium text-oric-dark-gray">{user?.email}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default SettingsPage;
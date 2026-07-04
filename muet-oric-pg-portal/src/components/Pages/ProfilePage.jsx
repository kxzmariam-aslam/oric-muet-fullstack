import { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import MainLayout from '../Layout/MainLayout';
import { User, Mail, Phone, MapPin, Briefcase, Calendar, Edit2, Save, Award } from 'lucide-react';
import toast from 'react-hot-toast';

const ProfilePage = () => {
  const { user } = useContext(AuthContext);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: user?.name || '',
    phone: '+92 300 1234567',
    location: 'Jamshoro, Sindh',
  });

  const handleSave = () => {
    setIsEditing(false);
    toast.success('Profile updated successfully!');
  };

  return (
    <MainLayout>
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-oric shadow-oric border border-gray-100 overflow-hidden">
          <div className="bg-gradient-to-r from-oric-navy via-oric-blue to-oric-royal px-6 py-8">
            <div className="flex items-center gap-5">
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-lg">
                <span className="text-3xl font-bold text-oric-navy">
                  {user?.name?.charAt(0) || 'U'}
                </span>
              </div>
              <div className="text-white">
                <h1 className="text-2xl font-bold">{user?.name}</h1>
                <p className="text-oric-light-blue mt-1 flex items-center gap-2">
                  <Award size={16} />
                  {user?.roleName}
                </p>
                <p className="text-sm text-oric-light-blue/70 mt-1">{user?.email}</p>
              </div>
            </div>
          </div>

          <div className="p-6">
            <div className="flex justify-between items-center mb-6 pb-3 border-b border-gray-200">
              <h2 className="text-xl font-semibold text-oric-navy flex items-center gap-2">
                <User size={20} className="text-oric-royal" />
                Profile Information
              </h2>
              <button
                onClick={() => isEditing ? handleSave() : setIsEditing(true)}
                className="flex items-center gap-2 px-4 py-2 text-sm bg-oric-royal text-white rounded-oric-sm hover:bg-oric-blue transition-all duration-300"
              >
                {isEditing ? <Save size={16} /> : <Edit2 size={16} />}
                {isEditing ? 'Save Changes' : 'Edit Profile'}
              </button>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 bg-oric-gray rounded-oric-sm">
                <User className="text-oric-royal mt-1" size={20} />
                <div className="flex-1">
                  <label className="text-sm text-gray-500">Full Name</label>
                  {isEditing ? (
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full px-4 py-2 border border-gray-300 rounded-oric-sm focus:ring-2 focus:ring-oric-royal mt-1"
                    />
                  ) : (
                    <p className="font-medium text-oric-dark-gray">{formData.name}</p>
                  )}
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-oric-gray rounded-oric-sm">
                <Mail className="text-oric-royal mt-1" size={20} />
                <div className="flex-1">
                  <label className="text-sm text-gray-500">Email Address</label>
                  <p className="font-medium text-oric-dark-gray">{user?.email}</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-oric-gray rounded-oric-sm">
                <Phone className="text-oric-royal mt-1" size={20} />
                <div className="flex-1">
                  <label className="text-sm text-gray-500">Phone Number</label>
                  {isEditing ? (
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full px-4 py-2 border border-gray-300 rounded-oric-sm focus:ring-2 focus:ring-oric-royal mt-1"
                    />
                  ) : (
                    <p className="font-medium text-oric-dark-gray">{formData.phone}</p>
                  )}
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-oric-gray rounded-oric-sm">
                <MapPin className="text-oric-royal mt-1" size={20} />
                <div className="flex-1">
                  <label className="text-sm text-gray-500">Location</label>
                  {isEditing ? (
                    <input
                      type="text"
                      value={formData.location}
                      onChange={(e) => setFormData({...formData, location: e.target.value})}
                      className="w-full px-4 py-2 border border-gray-300 rounded-oric-sm focus:ring-2 focus:ring-oric-royal mt-1"
                    />
                  ) : (
                    <p className="font-medium text-oric-dark-gray">{formData.location}</p>
                  )}
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-oric-gray rounded-oric-sm">
                <Briefcase className="text-oric-royal mt-1" size={20} />
                <div className="flex-1">
                  <label className="text-sm text-gray-500">Department</label>
                  <p className="font-medium text-oric-dark-gray">{user?.department || 'Computer Systems Engineering'}</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-oric-gray rounded-oric-sm">
                <Calendar className="text-oric-royal mt-1" size={20} />
                <div className="flex-1">
                  <label className="text-sm text-gray-500">Member Since</label>
                  <p className="font-medium text-oric-dark-gray">2024</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default ProfilePage;
import React, { useState } from 'react';
import MainLayout from '../Layout/MainLayout';
import { MessageSquare, Star, Send, User, Mail, Calendar, ChevronRight } from 'lucide-react';
import toast from 'react-hot-toast';

const FeedbackPage = () => {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [feedback, setFeedback] = useState({
    name: '',
    email: '',
    category: 'general',
    message: '',
  });

  const categories = [
    { value: 'general', label: 'General Feedback' },
    { value: 'research', label: 'Research Support' },
    { value: 'grants', label: 'Grants & Funding' },
    { value: 'events', label: 'Events & Activities' },
    { value: 'suggestions', label: 'Suggestions' },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (rating === 0) {
      toast.error('Please give a rating');
      return;
    }
    toast.success('Thank you for your feedback!');
    setFeedback({ name: '', email: '', category: 'general', message: '' });
    setRating(0);
  };

  return (
    <MainLayout>
      <div className="space-y-6 max-w-6xl mx-auto">
        <div>
          <h1 className="text-2xl font-bold text-oric-navy flex items-center gap-2">
            <MessageSquare size={28} className="text-oric-royal" />
            Feedback System
          </h1>
          <p className="text-gray-500 text-sm mt-1">Share your feedback to help us improve</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Feedback Form */}
          <div className="lg:col-span-2 bg-white rounded-2xl shadow-oric border border-gray-100 p-6">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-oric-dark-gray mb-1">Your Name</label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                  <input
                    type="text"
                    value={feedback.name}
                    onChange={(e) => setFeedback({...feedback, name: e.target.value})}
                    className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-oric-sm focus:ring-2 focus:ring-oric-royal outline-none text-sm"
                    placeholder="Enter your name"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-oric-dark-gray mb-1">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                  <input
                    type="email"
                    value={feedback.email}
                    onChange={(e) => setFeedback({...feedback, email: e.target.value})}
                    className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-oric-sm focus:ring-2 focus:ring-oric-royal outline-none text-sm"
                    placeholder="Enter your email"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-oric-dark-gray mb-1">Category</label>
                <select
                  value={feedback.category}
                  onChange={(e) => setFeedback({...feedback, category: e.target.value})}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-oric-sm focus:ring-2 focus:ring-oric-royal outline-none text-sm"
                >
                  {categories.map((cat) => (
                    <option key={cat.value} value={cat.value}>{cat.label}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-oric-dark-gray mb-1">Your Feedback</label>
                <textarea
                  value={feedback.message}
                  onChange={(e) => setFeedback({...feedback, message: e.target.value})}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-oric-sm focus:ring-2 focus:ring-oric-royal outline-none text-sm min-h-[120px]"
                  placeholder="Share your feedback, suggestions, or concerns..."
                  required
                />
              </div>

              <button
                type="submit"
                className="flex items-center gap-2 bg-oric-royal text-white px-6 py-2.5 rounded-oric-sm hover:bg-oric-blue transition font-medium"
              >
                <Send size={18} /> Submit Feedback
              </button>
            </form>
          </div>

          {/* Right Column */}
          <div className="space-y-4">
            {/* Rating Card */}
            <div className="bg-white rounded-2xl shadow-oric border border-gray-100 p-6 text-center">
              <p className="text-sm font-medium text-oric-dark-gray mb-3">Rate Your Experience</p>
              <div className="flex justify-center gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    onClick={() => setRating(star)}
                    onMouseEnter={() => setHoverRating(star)}
                    onMouseLeave={() => setHoverRating(0)}
                    className="text-3xl transition-all"
                  >
                    <span className={star <= (hoverRating || rating) ? 'text-oric-gold' : 'text-gray-300'}>
                      ★
                    </span>
                  </button>
                ))}
              </div>
              <p className="text-sm text-gray-500 mt-2">
                {rating > 0 ? `You rated ${rating} stars` : 'Click to rate'}
              </p>
            </div>

            {/* Recent Feedback */}
            <div className="bg-white rounded-2xl shadow-oric border border-gray-100 p-6">
              <h3 className="text-sm font-semibold text-oric-navy mb-3">Recent Feedback</h3>
              <div className="space-y-3">
                <div className="p-3 bg-oric-gray rounded-oric-sm">
                  <div className="flex items-center gap-1 text-oric-gold text-sm">★★★★★</div>
                  <p className="text-sm text-oric-dark-gray mt-1">Great platform! Very helpful for research.</p>
                  <p className="text-xs text-gray-400 mt-1">2 hours ago</p>
                </div>
                <div className="p-3 bg-oric-gray rounded-oric-sm">
                  <div className="flex items-center gap-1 text-oric-gold text-sm">★★★★☆</div>
                  <p className="text-sm text-oric-dark-gray mt-1">More resources needed for PhD students.</p>
                  <p className="text-xs text-gray-400 mt-1">1 day ago</p>
                </div>
                <div className="p-3 bg-oric-gray rounded-oric-sm">
                  <div className="flex items-center gap-1 text-oric-gold text-sm">★★★★★</div>
                  <p className="text-sm text-oric-dark-gray mt-1">Excellent support from ORIC team!</p>
                  <p className="text-xs text-gray-400 mt-1">3 days ago</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default FeedbackPage;
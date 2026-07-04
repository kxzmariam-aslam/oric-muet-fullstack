/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // ✅ Sidebar Colors
        'sidebar-bg': '#0A2463',
        'sidebar-text': '#FFFFFF',
        'sidebar-icon': '#87CEEB',
        'sidebar-active': '#1E3A8A',
        
        // ✅ Existing ORIC Colors
        'oric-navy': '#0A2463',
        'oric-dark-navy': '#061B4A',
        'oric-blue': '#1E3A8A',
        'oric-royal': '#2563EB',
        'oric-light-blue': '#DBEAFE',
        'oric-gold': '#F59E0B',
        'oric-dark-gold': '#D97706',
        'oric-success': '#10B981',
        'oric-danger': '#EF4444',
        'oric-gray': '#F3F4F6',
        'oric-dark-gray': '#1F2937',
        'oric-text': '#6B7280',
      },
      borderRadius: {
        'oric': '12px',
        'oric-sm': '8px',
      },
      boxShadow: {
        'oric': '0 1px 3px rgba(0, 0, 0, 0.08)',
        'oric-lg': '0 4px 12px rgba(0, 0, 0, 0.1)',
        'oric-hover': '0 4px 16px rgba(37, 99, 235, 0.15)',
      }
    },
  },
  plugins: [],
}
import { useState, useEffect } from 'react';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  // Toggle dark mode
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // Mock AI-generated content
  const mockMealPlan = [
    { meal: "Breakfast", description: "Greek yogurt with berries & granola", calories: "350 kcal" },
    { meal: "Lunch", description: "Grilled chicken salad with avocado dressing", calories: "420 kcal" },
    { meal: "Dinner", description: "Baked salmon with quinoa and roasted veggies", calories: "500 kcal" },
    { meal: "Snack", description: "Almonds and dark chocolate", calories: "200 kcal" },
  ];

  const mockWorkouts = [
    { name: "Morning Stretch", duration: "10 mins", type: "Yoga" },
    { name: "HIIT Blast", duration: "20 mins", type: "Cardio" },
    { name: "Strength Builder", duration: "30 mins", type: "Strength" },
    { name: "Evening Wind-Down", duration: "15 mins", type: "Stretch" },
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-opacity-80 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <svg className="w-8 h-8 text-emerald-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
            </svg>
            <span className="text-xl font-bold bg-gradient-to-r from-emerald-600 to-blue-500 bg-clip-text text-transparent">MyWellnessAI</span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8">
            {['home', 'features', 'pricing', 'contact'].map((item) => (
              <button 
                key={item}
                onClick={() => setActiveSection(item)}
                className={`capitalize transition-all hover:text-emerald-600 ${activeSection === item ? 'text-emerald-600 font-medium' : ''}`}
              >
                {item}
              </button>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <button 
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              {darkMode ? (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              )}
            </button>
            
            <button className="hidden md:block px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white transition-colors">
              Get Started
            </button>

            {/* Mobile menu button */}
            <button 
              className="md:hidden p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
            <nav className="flex flex-col p-4 space-y-4">
              {['home', 'features', 'pricing', 'contact'].map((item) => (
                <button 
                  key={item}
                  onClick={() => {
                    setActiveSection(item);
                    setMobileMenuOpen(false);
                  }}
                  className={`capitalize py-2 transition-all hover:text-emerald-600 ${activeSection === item ? 'text-emerald-600 font-medium' : ''}`}
                >
                  {item}
                </button>
              ))}
              <button className="mt-4 px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white transition-colors">
                Get Started
              </button>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      {activeSection === 'home' && (
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 opacity-50"></div>
          
          <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
                  Your Personalized <span className="bg-gradient-to-r from-emerald-600 to-blue-500 bg-clip-text text-transparent">AI Wellness Hub</span>
                </h1>
                <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-lg">
                  Transform your wellness journey with intelligent, personalized plans for fitness, nutrition, and mental health — all powered by AI.
                </p>
                <div className="flex flex-wrap gap-4">
                  <button className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all">
                    Start Free Trial
                  </button>
                  <button className="px-6 py-3 border border-emerald-600 text-emerald-600 dark:text-emerald-400 dark:border-emerald-400 rounded-lg hover:bg-emerald-50 dark:hover:bg-gray-800 transition-all">
                    Learn More
                  </button>
                </div>
              </div>
              
              <div className="relative">
                <div className="aspect-video rounded-xl overflow-hidden shadow-2xl transform rotate-1 scale-100 hover:rotate-0 hover:scale-105 transition-all duration-300">
                  <img src="https://picsum.photos/800/450 " alt="Wellness AI interface" className="w-full h-full object-cover" />
                </div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-500 rounded-full blur-xl opacity-50 animate-pulse"></div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Features Section */}
      {activeSection === 'features' && (
        <section id="features" className="py-16 md:py-24 bg-white dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Smart Features for Holistic Wellness</h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Discover how MyWellnessAI personalizes every aspect of your wellness journey with cutting-edge technology.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Feature Card 1 */}
              <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100 dark:border-gray-700">
                <div className="w-12 h-12 rounded-lg bg-emerald-100 dark:bg-emerald-900 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">AI Wellness Profile Builder</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Complete a quick quiz about your health metrics, goals, and preferences. Our AI creates a personalized wellness blueprint tailored just for you.
                </p>
                <ul className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
                  <li className="flex items-center">
                    <svg className="w-4 h-4 mr-2 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Custom health assessments
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 mr-2 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Goal tracking roadmap
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 mr-2 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Adaptive learning system
                  </li>
                </ul>
              </div>

              {/* Feature Card 2 */}
              <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100 dark:border-gray-700">
                <div className="w-12 h-12 rounded-lg bg-emerald-100 dark:bg-emerald-900 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Smart Meal Planner</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Get customized meal plans that adapt to your taste, allergies, and nutritional needs. Includes grocery lists and recipe suggestions.
                </p>
                <ul className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
                  <li className="flex items-center">
                    <svg className="w-4 h-4 mr-2 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Dietary preference adaptation
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 mr-2 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Grocery list generator
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 mr-2 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Recipe visualization
                  </li>
                </ul>
              </div>

              {/* Feature Card 3 */}
              <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100 dark:border-gray-700">
                <div className="w-12 h-12 rounded-lg bg-emerald-100 dark:bg-emerald-900 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Home Workout Generator</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Generate custom workouts based on your goals and available equipment. No gym required unless preferred.
                </p>
                <ul className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
                  <li className="flex items-center">
                    <svg className="w-4 h-4 mr-2 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Video demonstration support
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 mr-2 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Progress tracking
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 mr-2 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Body type adaptation
                  </li>
                </ul>
              </div>

              {/* Feature Card 4 */}
              <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100 dark:border-gray-700">
                <div className="w-12 h-12 rounded-lg bg-emerald-100 dark:bg-emerald-900 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Habit & Mood Tracker</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Track daily habits, mood, energy levels, and more. Get personalized nudges when motivation drops.
                </p>
                <ul className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
                  <li className="flex items-center">
                    <svg className="w-4 h-4 mr-2 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Daily check-ins
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 mr-2 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Motivation reminders
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 mr-2 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Visual progress reports
                  </li>
                </ul>
              </div>

              {/* Feature Card 5 */}
              <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100 dark:border-gray-700">
                <div className="w-12 h-12 rounded-lg bg-emerald-100 dark:bg-emerald-900 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">AI Voice/Chat Coach</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Ask questions anytime and get instant guidance. Whether it's workout advice or meal suggestions, your AI coach is always available.
                </p>
                <ul className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
                  <li className="flex items-center">
                    <svg className="w-4 h-4 mr-2 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Instant voice/text interaction
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 mr-2 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Wellness tips on demand
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 mr-2 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Encouragement & accountability
                  </li>
                </ul>
              </div>

              {/* Feature Card 6 */}
              <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100 dark:border-gray-700">
                <div className="w-12 h-12 rounded-lg bg-emerald-100 dark:bg-emerald-900 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Digital Wellness Store</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Access exclusive digital products like AI-generated cookbooks, habit journals, and curated wellness resources.
                </p>
                <ul className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
                  <li className="flex items-center">
                    <svg className="w-4 h-4 mr-2 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    AI-generated guides
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 mr-2 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Curated product recommendations
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 mr-2 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Affiliate partner integrations
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Pricing Section */}
      {activeSection === 'pricing' && (
        <section id="pricing" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Flexible Plans for Every Journey</h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Choose the plan that best fits your wellness goals and unlock premium features designed to accelerate your progress.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {/* Basic Plan */}
              <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100 dark:border-gray-700">
                <h3 className="text-xl font-bold mb-2">Basic</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">Perfect for getting started</p>
                <div className="mb-6">
                  <span className="text-3xl font-bold">$0</span>
                  <span className="text-gray-600 dark:text-gray-400"> / month</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 mr-2 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    AI Wellness Profile
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 mr-2 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Smart Meal Suggestions
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 mr-2 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Home Workouts
                  </li>
                  <li className="flex items-center text-gray-400">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                    Habit & Mood Tracking
                  </li>
                  <li className="flex items-center text-gray-400">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                    AI Voice Coach
                  </li>
                  <li className="flex items-center text-gray-400">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                    Digital Wellness Store
                  </li>
                </ul>
                <button className="w-full py-3 px-4 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
                  Get Started Free
                </button>
              </div>

              {/* Pro Plan - Highlighted */}
              <div className="bg-gradient-to-br from-emerald-600 to-blue-600 rounded-xl p-1 shadow-xl relative">
                <div className="bg-white dark:bg-gray-800 rounded-lg p-8">
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-yellow-400 dark:bg-yellow-500 text-black text-xs font-bold uppercase px-4 py-1 rounded-full shadow-lg">
                    Most Popular
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Pro</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">Everything you need to thrive</p>
                  <div className="mb-6">
                    <span className="text-3xl font-bold text-gray-900 dark:text-white">$9.99</span>
                    <span className="text-gray-600 dark:text-gray-400"> / month</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center">
                      <svg className="w-5 h-5 mr-2 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Full AI Wellness Profile
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 mr-2 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Custom Meal Plans
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 mr-2 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Personalized Workouts
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 mr-2 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Habit & Mood Tracking
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 mr-2 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      AI Voice/Chat Coach
                    </li>
                    <li className="flex items-center text-gray-400">
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                      Digital Wellness Store Access
                    </li>
                  </ul>
                  <button className="w-full py-3 px-4 bg-gradient-to-r from-emerald-600 to-blue-600 text-white rounded-lg hover:opacity-90 transition-opacity">
                    Upgrade to Pro
                  </button>
                </div>
              </div>

              {/* Premium Plan */}
              <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100 dark:border-gray-700">
                <h3 className="text-xl font-bold mb-2">Premium</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">For serious wellness enthusiasts</p>
                <div className="mb-6">
                  <span className="text-3xl font-bold">$19.99</span>
                  <span className="text-gray-600 dark:text-gray-400"> / month</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 mr-2 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                      All Pro Features
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 mr-2 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                      Advanced Analytics
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 mr-2 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                      Priority AI Support
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 mr-2 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                      Exclusive Content Library
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 mr-2 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                      Digital Wellness Store Access
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 mr-2 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                      Early Access to New Features
                  </li>
                </ul>
                <button className="w-full py-3 px-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg transition-colors">
                  Go Premium
                </button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Contact Section */}
      {activeSection === 'contact' && (
        <section id="contact" className="py-16 md:py-24 bg-white dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in Touch</h2>
                <p className="text-lg text-gray-600 dark:text-gray-400">
                  Have questions or feedback? We'd love to hear from you!
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-8">
                  <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <svg className="w-6 h-6 mr-3 mt-1 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <div>
                        <h4 className="font-medium mb-1">Email</h4>
                        <p className="text-gray-600 dark:text-gray-400">support@mywellnessai.com</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <svg className="w-6 h-6 mr-3 mt-1 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <div>
                        <h4 className="font-medium mb-1">Phone</h4>
                        <p className="text-gray-600 dark:text-gray-400">+1 (555) 123-4567</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <svg className="w-6 h-6 mr-3 mt-1 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <div>
                        <h4 className="font-medium mb-1">Address</h4>
                        <p className="text-gray-600 dark:text-gray-400">123 Wellness Way<br />San Francisco, CA 94105<br />United States</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8">
                    <h4 className="font-medium mb-3">Follow Us</h4>
                    <div className="flex space-x-4">
                      <a href="#" className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                        </svg>
                      </a>
                      <a href="#" className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.054 10.054 0 01-3.127 1.195 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                        </svg>
                      </a>
                      <a href="#" className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.15 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.646.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.74 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.74 0 12c0 3.26.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.74 24 12 24c3.26 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.687.073-4.948 0-3.26-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.26 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                        </svg>
                      </a>
                      <a href="#" className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5V8z" />
                          <path d="M13.5 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5V8zM22.02 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-8">
                  <h3 className="text-xl font-semibold mb-6">Send Us a Message</h3>
                  
                  <form className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
                      <input 
                        type="text" 
                        id="name" 
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all"
                        placeholder="Your name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                      <input 
                        type="email" 
                        id="email" 
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all"
                        placeholder="your@email.com"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium mb-1">Subject</label>
                      <input 
                        type="text" 
                        id="subject" 
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all"
                        placeholder="How can we help?"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
                      <textarea 
                        id="message" 
                        rows="5" 
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all"
                        placeholder="Your message here..."
                      ></textarea>
                    </div>
                    
                    <button 
                      type="submit"
                      className="w-full py-3 px-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg transition-colors"
                    >
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 pt-12 pb-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <svg className="w-6 h-6 text-emerald-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
                <span className="text-xl font-bold bg-gradient-to-r from-emerald-500 to-blue-400 bg-clip-text text-transparent">MyWellnessAI</span>
              </div>
              <p className="text-sm mb-4">
                Empowering your wellness journey with personalized AI-powered solutions for fitness, nutrition, and mental health.
              </p>
              <div className="flex space-x-3">
                <a href="#" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-emerald-600 transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-emerald-600 transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.054 10.054 0 01-3.127 1.195 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-emerald-600 transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.15 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.646.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.74 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.74 0 12c0 3.26.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.74 24 12 24c3.26 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.687.073-4.948 0-3.26-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.26 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><button onClick={() => setActiveSection('home')} className="hover:text-emerald-400 transition-colors">Home</button></li>
                <li><button onClick={() => setActiveSection('features')} className="hover:text-emerald-400 transition-colors">Features</button></li>
                <li><button onClick={() => setActiveSection('pricing')} className="hover:text-emerald-400 transition-colors">Pricing</button></li>
                <li><button onClick={() => setActiveSection('contact')} className="hover:text-emerald-400 transition-colors">Contact</button></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Cookie Policy</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Data Protection</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Newsletter</h4>
              <p className="text-sm mb-4">Subscribe to receive wellness tips, AI updates, and special offers.</p>
              <form className="flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="px-4 py-2 w-full rounded-l-lg border border-gray-700 bg-gray-800 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
                <button 
                  type="submit"
                  className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 rounded-r-lg transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-6 text-center text-sm text-gray-500">
            <p>© {new Date().getFullYear()} MyWellnessAI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

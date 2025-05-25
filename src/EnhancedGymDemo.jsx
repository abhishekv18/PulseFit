import { useEffect, useState } from 'react';
import { FaDumbbell, FaRunning, FaUsers, FaPhoneAlt, FaMapMarkerAlt, FaSun, FaMoon, FaBars, FaTimes, FaStar, FaInstagram, FaFacebook, FaTwitter, FaClock, FaCheckCircle, FaFire, FaHeart, FaTrophy } from 'react-icons/fa';

export default function EnhancedGymDemo() {
  const [isDark, setIsDark] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    document.title = "PulseFit - Transform Your Body";
  }, []);

  const toggleTheme = () => setIsDark(!isDark);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const themeClasses = isDark 
    ? 'bg-gray-900 text-white' 
    : 'bg-gray-50 text-gray-900';

  const sectionBg = isDark 
    ? 'bg-gray-800' 
    : 'bg-white';

  const cardBg = isDark 
    ? 'bg-gray-700' 
    : 'bg-gray-100';

  return (
    <div className={`${themeClasses} font-sans transition-colors duration-500`}>
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 ${isDark ? 'bg-gray-900/95' : 'bg-white/95'} backdrop-blur-md border-b ${isDark ? 'border-gray-700' : 'border-gray-200'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <FaDumbbell className="text-yellow-400 text-2xl mr-2" />
              <span className="font-bold text-xl bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                PulseFit
              </span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {['Home', 'Services', 'Trainers', 'Pricing', 'About', 'Contact'].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
                      activeSection === item.toLowerCase()
                        ? 'text-yellow-400 bg-yellow-400/10'
                        : `${isDark ? 'text-gray-300 hover:text-yellow-400' : 'text-gray-700 hover:text-yellow-600'}`
                    }`}
                    onClick={() => setActiveSection(item.toLowerCase())}
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-full transition-colors duration-300 ${
                  isDark ? 'hover:bg-gray-700' : 'hover:bg-gray-200'
                }`}
              >
                {isDark ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-gray-600" />}
              </button>
              
              <button
                onClick={toggleMenu}
                className="md:hidden p-2 rounded-md"
              >
                {isMenuOpen ? <FaTimes /> : <FaBars />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className={`md:hidden ${isDark ? 'bg-gray-800' : 'bg-white'} border-t ${isDark ? 'border-gray-700' : 'border-gray-200'}`}>
            <div className="px-2 pt-2 pb-3 space-y-1">
              {['Home', 'Services', 'Trainers', 'Pricing', 'About', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    isDark ? 'text-gray-300 hover:text-yellow-400' : 'text-gray-700 hover:text-yellow-600'
                  }`}
                  onClick={() => {
                    setActiveSection(item.toLowerCase());
                    setIsMenuOpen(false);
                  }}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex flex-col items-center justify-center text-center px-4 pt-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-blue-600/20 to-teal-600/20"></div>
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        
        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="mb-8 animate-pulse">
            <FaFire className="text-6xl text-yellow-400 mx-auto mb-4" />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Transform Your
            <span className="block bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent animate-pulse">
              Body & Mind
            </span>
          </h1>
          
          <p className={`text-lg md:text-xl max-w-2xl mx-auto mb-8 leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            Join thousands of fitness enthusiasts who've achieved their dreams with our world-class facilities, expert trainers, and proven methodologies.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button className="px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-black rounded-full text-lg font-semibold hover:scale-105 transform transition-all duration-300 shadow-lg hover:shadow-xl">
              Start Your Journey
            </button>
            <button className={`px-8 py-4 border-2 border-yellow-400 text-yellow-400 rounded-full text-lg font-semibold hover:bg-yellow-400 hover:text-black transition-all duration-300`}>
              Book Free Trial
            </button>
          </div>

          <div className="grid grid-cols-3 gap-8 max-w-md mx-auto">
            {[
              { icon: FaTrophy, label: '500+ Members', color: 'text-yellow-400' },
              { icon: FaFire, label: '10+ Years', color: 'text-orange-500' },
              { icon: FaHeart, label: '24/7 Support', color: 'text-red-500' }
            ].map(({ icon: Icon, label, color }, i) => (
              <div key={i} className="text-center">
                <Icon className={`text-3xl ${color} mx-auto mb-2`} />
                <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className={`py-20 px-4 ${sectionBg}`}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our <span className="text-yellow-400">Services</span>
            </h2>
            <p className={`text-lg ${isDark ? 'text-gray-400' : 'text-gray-600'} max-w-2xl mx-auto`}>
              Comprehensive fitness solutions designed to help you achieve your goals faster than ever before.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                icon: <FaDumbbell size={50} />, 
                title: 'Strength Training', 
                desc: 'State-of-the-art equipment and personalized programs',
                gradient: 'from-blue-500 to-purple-600'
              },
              { 
                icon: <FaRunning size={50} />, 
                title: 'Cardio Zone', 
                desc: 'High-tech cardio equipment with virtual training',
                gradient: 'from-green-500 to-teal-600'
              },
              { 
                icon: <FaUsers size={50} />, 
                title: 'Group Classes', 
                desc: 'Yoga, Zumba, CrossFit and more group activities',
                gradient: 'from-orange-500 to-red-600'
              },
            ].map(({ icon, title, desc, gradient }, i) => (
              <div key={i} className="group relative">
                <div className={`${cardBg} p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border ${isDark ? 'border-gray-600 hover:border-yellow-400/50' : 'border-gray-200 hover:border-yellow-400/50'}`}>
                  <div className={`w-20 h-20 bg-gradient-to-r ${gradient} rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    {icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{title}</h3>
                  <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'} leading-relaxed`}>{desc}</p>
                  <div className="mt-6">
                    <button className="text-yellow-400 font-semibold hover:text-yellow-300 transition-colors">
                      Learn More →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trainers Section */}
      <section id="trainers" className={`py-20 px-4 ${isDark ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Expert <span className="text-yellow-400">Trainers</span>
            </h2>
            <p className={`text-lg ${isDark ? 'text-gray-400' : 'text-gray-600'} max-w-2xl mx-auto`}>
              Learn from certified professionals with years of experience in transforming lives.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Sarah Johnson', specialty: 'Strength & Conditioning', rating: 4.9 },
              { name: 'Mike Chen', specialty: 'CrossFit & HIIT', rating: 4.8 },
              { name: 'Emma Wilson', specialty: 'Yoga & Flexibility', rating: 4.9 }
            ].map(({ name, specialty, rating }, i) => (
              <div key={i} className={`${cardBg} rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2`}>
                <div className="h-64 bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center">
                  <div className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center">
                    <FaUsers className="text-4xl text-white" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{name}</h3>
                  <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'} mb-4`}>{specialty}</p>
                  <div className="flex items-center">
                    <div className="flex text-yellow-400 mr-2">
                      {[...Array(5)].map((_, j) => (
                        <FaStar key={j} className="text-sm" />
                      ))}
                    </div>
                    <span className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{rating}/5</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className={`py-20 px-4 ${sectionBg}`}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Choose Your <span className="text-yellow-400">Plan</span>
            </h2>
            <p className={`text-lg ${isDark ? 'text-gray-400' : 'text-gray-600'} max-w-2xl mx-auto`}>
              Flexible pricing options designed to fit your lifestyle and budget.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { 
                title: 'Basic', 
                price: '₹999', 
                features: ['Gym Access', '1 Trainer Session', 'Locker Facility', 'Basic Nutrition Guide'],
                popular: false,
                gradient: 'from-gray-600 to-gray-700'
              },
              { 
                title: 'Pro', 
                price: '₹1499', 
                features: ['Gym + Cardio Access', '5 Trainer Sessions', 'Group Classes', 'Nutrition Consultation', 'Progress Tracking'],
                popular: true,
                gradient: 'from-yellow-400 to-orange-500'
              },
              { 
                title: 'Elite', 
                price: '₹1999', 
                features: ['All Access Pass', 'Unlimited Sessions', 'Personal Diet Plan', '24/7 Support', 'Guest Passes'],
                popular: false,
                gradient: 'from-purple-600 to-pink-600'
              },
            ].map(({ title, price, features, popular, gradient }, i) => (
              <div key={i} className={`relative ${popular ? 'transform scale-105' : ''}`}>
                {popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                <div className={`${cardBg} p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-2 ${popular ? 'border-yellow-400' : isDark ? 'border-gray-600' : 'border-gray-200'}`}>
                  <div className={`w-16 h-16 bg-gradient-to-r ${gradient} rounded-2xl flex items-center justify-center text-white mb-6 mx-auto`}>
                    <FaDumbbell className="text-2xl" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2 text-center">{title}</h3>
                  <div className="text-center mb-6">
                    <span className="text-4xl font-bold text-yellow-400">{price}</span>
                    <span className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>/month</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {features.map((feature, j) => (
                      <li key={j} className="flex items-center">
                        <FaCheckCircle className="text-green-500 mr-3 flex-shrink-0" />
                        <span className={`${isDark ? 'text-gray-300' : 'text-gray-700'}`}>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button className={`w-full py-3 rounded-full font-semibold transition-all duration-300 ${
                    popular 
                      ? 'bg-gradient-to-r from-yellow-400 to-orange-500 text-black hover:scale-105' 
                      : `border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black`
                  }`}>
                    Get Started
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={`py-20 px-4 ${isDark ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Why Choose <span className="text-yellow-400">PulseFit?</span>
              </h2>
              <p className={`text-lg ${isDark ? 'text-gray-400' : 'text-gray-600'} mb-8 leading-relaxed`}>
                With over a decade of experience in fitness industry, we've helped thousands transform their lives. 
                Our state-of-the-art facility combined with expert guidance makes us the perfect choice for your fitness journey.
              </p>
              <div className="space-y-4">
                {[
                  'Certified Professional Trainers',
                  'Modern Equipment & Facilities',
                  'Flexible Timing & Programs',
                  'Nutrition & Lifestyle Guidance'
                ].map((item, i) => (
                  <div key={i} className="flex items-center">
                    <FaCheckCircle className="text-yellow-400 mr-3" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className={`h-32 ${cardBg} rounded-2xl flex items-center justify-center shadow-lg`}>
                  <FaDumbbell className="text-4xl text-yellow-400" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`py-20 px-4 ${sectionBg}`}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Get In <span className="text-yellow-400">Touch</span>
            </h2>
            <p className={`text-lg ${isDark ? 'text-gray-400' : 'text-gray-600'} max-w-2xl mx-auto`}>
              Ready to start your fitness journey? Contact us today for a free consultation.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              {[
                { icon: <FaPhoneAlt />, title: 'Phone', info: '+91 98765 43210' },
                { icon: <FaMapMarkerAlt />, title: 'Location', info: 'Sector 15, Ghaziabad, UP' },
                { icon: <FaClock />, title: 'Hours', info: 'Mon-Sat: 5AM-11PM, Sun: 6AM-10PM' }
              ].map(({ icon, title, info }, i) => (
                <div key={i} className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-black">
                    {icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{title}</h3>
                    <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{info}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className={`${cardBg} p-8 rounded-3xl shadow-lg`}>
              <h3 className="text-2xl font-bold mb-6">Book Your Free Trial</h3>
              <div className="space-y-4">
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  className={`w-full p-4 rounded-xl border ${isDark ? 'border-gray-600 bg-gray-700' : 'border-gray-300 bg-white'} focus:border-yellow-400 outline-none transition-colors`}
                />
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  className={`w-full p-4 rounded-xl border ${isDark ? 'border-gray-600 bg-gray-700' : 'border-gray-300 bg-white'} focus:border-yellow-400 outline-none transition-colors`}
                />
                <input 
                  type="tel" 
                  placeholder="Your Phone" 
                  className={`w-full p-4 rounded-xl border ${isDark ? 'border-gray-600 bg-gray-700' : 'border-gray-300 bg-white'} focus:border-yellow-400 outline-none transition-colors`}
                />
                <textarea 
                  placeholder="Tell us about your fitness goals..." 
                  rows={4}
                  className={`w-full p-4 rounded-xl border ${isDark ? 'border-gray-600 bg-gray-700' : 'border-gray-300 bg-white'} focus:border-yellow-400 outline-none transition-colors resize-none`}
                />
                <button className="w-full py-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-black rounded-xl font-semibold hover:scale-105 transform transition-all duration-300">
                  Book Free Trial
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-12 px-4 ${isDark ? 'bg-gray-900 border-t border-gray-700' : 'bg-gray-100 border-t border-gray-200'}`}>
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center mb-4">
                <FaDumbbell className="text-yellow-400 text-2xl mr-2" />
                <span className="font-bold text-xl bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                  PulseFit
                </span>
              </div>
              <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'} mb-4`}>
                Transform your body and mind with our world-class fitness programs.
              </p>
              <div className="flex space-x-4">
                {[FaFacebook, FaInstagram, FaTwitter].map((Icon, i) => (
                  <Icon key={i} className="text-xl text-yellow-400 hover:text-yellow-300 transition-colors cursor-pointer" />
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {['About Us', 'Services', 'Trainers', 'Pricing'].map((item, i) => (
                  <li key={i}>
                    <a href="#" className={`${isDark ? 'text-gray-400 hover:text-yellow-400' : 'text-gray-600 hover:text-yellow-600'} transition-colors`}>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-4">Services</h3>
              <ul className="space-y-2">
                {['Personal Training', 'Group Classes', 'Nutrition Plans', 'Online Coaching'].map((item, i) => (
                  <li key={i}>
                    <a href="#" className={`${isDark ? 'text-gray-400 hover:text-yellow-400' : 'text-gray-600 hover:text-yellow-600'} transition-colors`}>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-4">Contact Info</h3>
              <div className="space-y-2">
                <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'} flex items-center`}>
                  <FaMapMarkerAlt className="mr-2" /> Ghaziabad, UP
                </p>
                <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'} flex items-center`}>
                  <FaPhoneAlt className="mr-2" /> +91 98765 43210
                </p>
              </div>
            </div>
          </div>
          
          <div className={`border-t ${isDark ? 'border-gray-700' : 'border-gray-200'} pt-8 text-center`}>
            <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              © {new Date().getFullYear()} PulseFit. All rights reserved. Built with passion for fitness.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}


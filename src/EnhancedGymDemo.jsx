import { useEffect, useState } from 'react';
import { FaDumbbell, FaRunning, FaUsers, FaPhoneAlt, FaMapMarkerAlt, FaSun, FaMoon, FaBars, FaTimes, FaStar, FaInstagram, FaFacebook, FaTwitter, FaClock, FaCheckCircle, FaFire, FaHeart, FaTrophy, FaLeaf, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';
import { motion } from 'framer-motion';
import TestimonialsSection from './TestimonialSections';

export default function EnhancedGymDemo() {
  const [isDark, setIsDark] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
const [showComparison, setShowComparison] = useState(false);

  useEffect(() => {
    document.title = "PulseFit - Transform Your Body";
  }, []);

  const toggleTheme = () => setIsDark(!isDark);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const plans = [
    {
      title: "Basic",
      months: ["1 Month", "3 Months", "5 Months"],
      prices: ["₹999", "₹2500", "₹3600"],
      features: ["Gym Access", "1 Trainer Session", "Locker Facility", "Basic Nutrition Guide"],
      gradient: "from-gray-600 to-gray-700",
      popular: false,
    },
    {
      title: "Pro",
      months: ["1 Month", "3 Months", "5 Months"],
      prices: ["₹1499", "₹3800", "₹5400"],
      features: ["Gym + Cardio Access", "5 Trainer Sessions", "Group Classes", "Nutrition Consultation", "Progress Tracking"],
      gradient: "from-yellow-400 to-orange-500",
      popular: true,
    },
    {
      title: "Elite",
      months: ["1 Month", "3 Months", "5 Months"],
      prices: ["₹1999", "₹4800", "₹6900"],
      features: ["All Access Pass", "Unlimited Sessions", "Personal Diet Plan", "24/7 Support", "Guest Passes"],
      gradient: "from-purple-600 to-pink-600",
      popular: false,
    },
  ];

  const featureList = [
    "Gym Access", "Cardio Access", "Trainer Sessions", "Group Classes",
    "Nutrition Guide", "Personal Diet Plan", "24/7 Support", "Guest Passes"
  ];

  
const trainerIcons = {
  'Strength & Conditioning': <FaDumbbell className="text-4xl text-white" />,
  'CrossFit & HIIT': <FaRunning className="text-4xl text-white" />,
  'Yoga & Flexibility': <FaLeaf className="text-4xl text-white" />
};

const getStars = (rating) => {
  const stars = [];
  const full = Math.floor(rating);
  const hasHalf = rating % 1 >= 0.5;
  for (let i = 0; i < full; i++) stars.push(<FaStar key={i} className="text-yellow-400 text-sm" />);
  if (hasHalf) stars.push(<FaStarHalfAlt key="half" className="text-yellow-400 text-sm" />);
  while (stars.length < 5) stars.push(<FaRegStar  key={`empty-${stars.length}`} className="text-yellow-400 text-sm" />);
  return stars;
};
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
  {/* Gradient overlay */}
  <div className="absolute inset-0 bg-gradient-to-br from-purple-600/30 via-blue-600/30 to-teal-600/30 z-0" />

  {/* Patterned overlay */}
  <div className="absolute inset-0 opacity-10 z-0" style={{
    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.08'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
  }} />

  <motion.div
    className="relative z-10 max-w-4xl mx-auto px-6 py-12 rounded-3xl backdrop-blur-md border border-white/10 bg-white/5 shadow-xl"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
  >
    <motion.div className="mb-8" animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 1.5 }}>
      <FaFire className="text-6xl text-yellow-400 mx-auto mb-4 animate-firePulse" />
    </motion.div>

    <motion.h1
      className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight"
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.8 }}
    >
      Transform Your
      <span className="block bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent animate-text-glow">
        Body & Mind
      </span>
    </motion.h1>

    <p className={`text-lg md:text-xl max-w-2xl mx-auto mb-8 leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
      Join thousands of fitness enthusiasts who've achieved their dreams with our world-class facilities, expert trainers, and proven methodologies.
    </p>

    {/* CTA Buttons */}
    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
      <motion.a
        href="https://wa.me/919876543210"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.05, boxShadow: "0px 0px 12px #facc15" }}
        whileTap={{ scale: 0.95 }}
        className="px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-black rounded-full text-lg font-semibold shadow-lg"
      >
        Join Now
      </motion.a>

     <motion.a
  href="#contact"
  whileHover={{ scale: 1.05 }}
  className="px-8 py-4 border-2 border-yellow-400 text-yellow-400 rounded-full text-lg font-semibold hover:bg-yellow-400 hover:text-black transition-all duration-300 cursor-pointer"
>
  Book Free Trial
</motion.a>
    </div>

    {/* Stats */}
    <div className="grid grid-cols-3 gap-8 max-w-md mx-auto">
      {[
        { icon: FaTrophy, label: '500+ Members', color: 'text-yellow-400' },
        { icon: FaFire, label: '10+ Years', color: 'text-orange-500' },
        { icon: FaHeart, label: '24/7 Support', color: 'text-red-500' },
      ].map(({ icon: Icon, label, color }, i) => (
        <motion.div
          key={i}
          className="text-center"
          whileHover={{ scale: 1.1 }}
          transition={{ type: 'spring', stiffness: 200 }}
        >
          <Icon className={`text-3xl ${color} mx-auto mb-2 drop-shadow`} />
          <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>{label}</p>
        </motion.div>
      ))}
    </div>
  </motion.div>
</section>


      {/* Services Section */}
   <section id="services" className={`py-24 px-4 ${isDark ? 'bg-[#0f172a]' : 'bg-gray-50'}`}>
  <div className="max-w-7xl mx-auto">
    <div className="text-center mb-20">
      <motion.h2
        className="text-4xl md:text-5xl font-extrabold mb-4"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6 }}
      >
        Our <span className="text-yellow-400">Services</span>
      </motion.h2>
      <motion.p
        className={`text-lg ${isDark ? 'text-gray-400' : 'text-gray-600'} max-w-2xl mx-auto`}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        Comprehensive fitness solutions designed to help you achieve your goals faster than ever before.
      </motion.p>
    </div>

    <div className="grid md:grid-cols-3 gap-10">
      {[
        {
          icon: <FaDumbbell size={40} />,
          title: 'Strength Training',
          desc: 'State-of-the-art equipment and personalized programs to build your power and endurance.',
          gradient: 'from-blue-500 to-purple-600',
        },
        {
          icon: <FaRunning size={40} />,
          title: 'Cardio Zone',
          desc: 'Get your heart pumping with our high-tech cardio gear and immersive virtual workouts.',
          gradient: 'from-green-500 to-teal-500',
        },
        {
          icon: <FaUsers size={40} />,
          title: 'Group Classes',
          desc: 'Energizing group workouts including Yoga, Zumba, CrossFit and more.',
          gradient: 'from-orange-500 to-red-500',
        },
      ].map(({ icon, title, desc, gradient }, i) => (
        <motion.div
          key={i}
          className="relative group bg-white/5 backdrop-blur-lg p-8 rounded-3xl shadow-2xl border border-white/10 hover:border-yellow-400/60 transition-all duration-500"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 0.5, delay: i * 0.2 }}
        >
          <div className={`w-16 h-16 bg-gradient-to-tr ${gradient} rounded-2xl flex items-center justify-center text-white shadow-lg mb-6 transform transition-transform group-hover:scale-110`}>
            {icon}
          </div>
          <h3 className="text-2xl font-bold text-white mb-3">{title}</h3>
          <p className={`${isDark ? 'text-gray-300' : 'text-gray-700'} mb-5`}>{desc}</p>
          <button className="text-yellow-400 font-medium hover:text-yellow-300 transition-colors">
            Learn More →
          </button>
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-400 rounded-full group-hover:scale-150 transition-transform duration-300 blur-sm"></div>
        </motion.div>
      ))}
    </div>
  </div>
</section>

      {/* Trainers Section */}
       <section id="trainers" className={`py-24 px-4 relative ${isDark ? 'bg-gray-900' : 'bg-orange-50'}`}>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
            Meet Our <span className="text-yellow-400">Expert Trainers</span>
          </h2>
          <p className={`text-lg ${isDark ? 'text-gray-400' : 'text-gray-600'} max-w-2xl mx-auto animate-slide-up`}>
            Learn from certified professionals with a passion for fitness and real transformation stories.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10 animate-fade-in">
          {[
            { name: 'Sarah Johnson', specialty: 'Strength & Conditioning', rating: 4.9 },
            { name: 'Mike Chen', specialty: 'CrossFit & HIIT', rating: 4.8 },
            { name: 'Emma Wilson', specialty: 'Yoga & Flexibility', rating: 4.9 }
          ].map(({ name, specialty, rating }, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              className={`${cardBg} rounded-3xl overflow-hidden shadow-xl transition-all duration-500`}
            >
              <div className="h-64 bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center">
                <div className="w-28 h-28 bg-white/20 rounded-full flex items-center justify-center">
                  {trainerIcons[specialty]}
                </div>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold mb-2">{name}</h3>
                <p className={`text-sm mb-3 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>{specialty}</p>
                <div className="flex justify-center items-center gap-2">
                  <div className="flex">{getStars(rating)}</div>
                  <span className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{rating}/5</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Optional background pattern or overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-100/30 to-yellow-200/20 dark:from-gray-800/40 dark:to-gray-900/20 z-0"></div>
    </section>

      {/* Pricing Section */}
    
    
  <section id="pricing" className={`py-24 px-4 ${sectionBg}`}>
      <motion.div 
        className="max-w-7xl mx-auto"
        initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
      >
        <div className="text-center mb-16">
          <motion.h2 className="text-4xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
          >
            Flexible <span className="text-yellow-400">Membership Plans</span>
          </motion.h2>
          <motion.p
            className={`text-lg ${isDark ? 'text-gray-400' : 'text-gray-600'} max-w-2xl mx-auto`}
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
          >
            Choose a plan that fits your goals — save more on longer commitments!
          </motion.p>

          <motion.div
            className="mt-6 flex justify-center items-center gap-4"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}
          >
            <label className="text-sm font-medium text-gray-300">Compare Plans</label>
            <input
              type="checkbox"
              className="toggle toggle-warning"
              onChange={() => setShowComparison(!showComparison)}
            />
          </motion.div>
        </div>

        {!showComparison ? (
          <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {plans.map(({ title, months, prices, features, gradient, popular }, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className={`relative ${popular ? 'scale-105' : ''}`}
              >
                {popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
                    Most Popular
                  </div>
                )}
                <div className={`${cardBg} p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-2 ${popular ? 'border-yellow-400' : isDark ? 'border-gray-700' : 'border-gray-200'}`}>
                  <div className={`w-16 h-16 bg-gradient-to-r ${gradient} rounded-2xl flex items-center justify-center text-white mb-6 mx-auto animate-bounce`}>
                    <FaDumbbell className="text-2xl" />
                  </div>
                  <h3 className={`text-2xl font-bold mb-4 text-center bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}>
                    {title}
                  </h3>

                  <div className="grid gap-3 mb-6">
                    {months.map((month, idx) => (
                      <div key={idx} className="flex justify-between items-center px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-sm font-medium text-gray-800 dark:text-gray-300">
                        <span>{month}</span>
                        <span className="text-yellow-400 font-bold">{prices[idx]}</span>
                      </div>
                    ))}
                  </div>

                  <ul className="space-y-3 mb-6">
                    {features.map((feature, j) => (
                      <li key={j} className="flex items-center text-sm">
                        <FaCheckCircle className="text-green-500 mr-2 animate-pulse" />
                        <span className={`${isDark ? 'text-gray-300' : 'text-gray-700'}`}>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button className={`w-full py-3 rounded-full font-semibold transition-all duration-300 mt-4 ${popular ? 'bg-gradient-to-r from-yellow-400 to-orange-500 text-black hover:scale-105' : 'border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black'}`}>
                    Join Now
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <motion.div className="overflow-x-auto" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
            <table className="w-full table-auto border-collapse text-sm text-left shadow-md rounded-xl overflow-hidden">
              <thead>
                <tr className="bg-gray-200 dark:bg-gray-700">
                  <th className="px-6 py-4">Feature</th>
                  <th className="px-6 py-4">Basic</th>
                  <th className="px-6 py-4">Pro</th>
                  <th className="px-6 py-4">Elite</th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-gray-800">
                {featureList.map((feature, i) => (
                  <tr key={i} className="border-b border-gray-200 dark:border-gray-700">
                    <td className="px-6 py-3 font-medium text-gray-800 dark:text-gray-200">{feature}</td>
                    {["Basic", "Pro", "Elite"].map((plan, idx) => {
                      const hasFeature =
                        (plan === "Basic" && ["Gym Access", "Trainer Sessions", "Locker Facility", "Nutrition Guide"].includes(feature)) ||
                        (plan === "Pro" && ["Gym Access", "Cardio Access", "Trainer Sessions", "Group Classes", "Nutrition Guide", "Nutrition Consultation"].includes(feature)) ||
                        plan === "Elite";

                      return (
                        <td key={idx} className="px-6 py-3 text-center">
                          {hasFeature ? <FaCheckCircle className="text-green-500 mx-auto" /> : "-"}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        )}
      </motion.div>
    </section>
 

{/* <section className="py-20 px-4 bg-gradient-to-b from-gray-900 to-gray-800 text-center">
  <h2 className="text-4xl md:text-5xl font-bold mb-12 text-white">
    What Our <span className="text-yellow-400">Members Say</span>
  </h2>
  <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
    {[
      {
        name: "Rohit Sharma",
        feedback:
          "PulseFit changed my life! Trainers are amazing and the environment is super motivating.",
      },
      {
        name: "Priya Verma",
        feedback:
          "Clean space, great machines, and very supportive staff. Love the group classes!",
      },
    ].map(({ name, feedback }) => (
      <div
        key={name}
        className="bg-gray-700/50 backdrop-blur p-8 rounded-3xl text-left shadow-2xl transform hover:scale-[1.02] transition-all duration-300 border border-gray-600"
      >
        <div className="flex items-start space-x-3 mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="w-6 h-6 text-yellow-400"
            viewBox="0 0 16 16"
          >
            <path d="M6.854 1.146a.5.5 0 0 0-.708.708L7.293 3H2.5A1.5 1.5 0 0 0 1 4.5v7A1.5 1.5 0 0 0 2.5 13h5a1.5 1.5 0 0 0 1.5-1.5V4.707l.646.647a.5.5 0 0 0 .708-.708l-1.5-1.5a.498.498 0 0 0-.354-.146z" />
          </svg>
          <p className="text-lg text-yellow-100 leading-relaxed">“{feedback}”</p>
        </div>
        <p className="text-sm text-gray-300 font-semibold mt-2">— {name}</p>
      </div>
    ))}
  </div>
</section> */}
<TestimonialsSection/>
      {/* About Section */}
      {/* <section id="about" className={`py-20 px-4 ${isDark ? 'bg-gray-800' : 'bg-gray-50'}`}>
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
      </section> */}

      <section id="about" className={`py-24 px-6 ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}>
  <div className="max-w-7xl mx-auto">
    <div className="grid md:grid-cols-2 gap-16 items-center">
      
      {/* Text Side */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Why Choose <span className="text-yellow-400">PulseFit?</span>
        </h2>
        <p className={`text-lg ${isDark ? 'text-gray-400' : 'text-gray-600'} mb-8 leading-relaxed`}>
          With over a decade of experience in the fitness industry, we've helped thousands transform their lives. 
          Our state-of-the-art facility, combined with expert guidance, makes us the perfect choice for your fitness journey.
        </p>

        <div className="space-y-4">
          {[
            'Certified Professional Trainers',
            'Modern Equipment & Facilities',
            'Flexible Timing & Programs',
            'Nutrition & Lifestyle Guidance'
          ].map((item, i) => (
            <motion.div
              key={i}
              className="flex items-center bg-opacity-10 rounded-xl px-4 py-3 hover:bg-yellow-50 dark:hover:bg-gray-800 transition"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
            >
              <FaCheckCircle className="text-yellow-400 mr-3 text-xl" />
              <span className={`${isDark ? 'text-white' : 'text-gray-800'} font-medium`}>
                {item}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Icon Cards Side */}


    <motion.div
  className="grid grid-cols-2 gap-6"
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
  {[
    {
      img: '/moddern.webp',
      title: 'Modern Equipment',
      description: 'Train with top-tier machines and technology.',
    },
    {
      img: '/trainer.jpg',
      title: 'Personal Training',
      description: '1-on-1 coaching tailored for your body goals.',
    },
    {
      img: '/class.avif',
      title: 'Group Classes',
      description: 'Energetic sessions like Zumba, HIIT, and Yoga.',
    },
    {
      img: '/nut.jpeg',
      title: 'Nutrition Plans',
      description: 'Custom diets to support your workout regime.',
    },
  ].map((card, i) => (
    <motion.div
      key={i}
      whileHover={{ scale: 1.03 }}
      className="relative group rounded-2xl overflow-hidden shadow-xl cursor-pointer"
    >
      {/* Background Image */}
      <img
        src={card.img}
        alt={card.title}
        className="w-full h-40 object-cover transition-transform duration-300 group-hover:scale-105"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60 backdrop-blur-sm text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-center p-4">
        <h4 className="text-xl font-bold mb-2">{card.title}</h4>
        <p className="text-sm">{card.description}</p>
      </div>

      {/* Static Icon on Top */}
      <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-yellow-400 w-12 h-12 rounded-full flex items-center justify-center text-black shadow-lg z-10">
        <FaDumbbell className="text-xl" />
      </div>
    </motion.div>
  ))}
</motion.div>


    </div>
  </div>
</section>
<section className="relative h-[80vh]">
  <video
    autoPlay
    loop
    muted
    playsInline
    className="absolute top-0 left-0 w-full h-full object-cover"
    src="/3196220-uhd_3840_2160_25fps.mp4"
  />
  <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-center px-4">
    <div>
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Feel the Burn</h2>
      <p className="text-lg text-gray-200 max-w-2xl mx-auto">
        Watch our members in action and experience the energy we bring every day.
      </p>
    </div>
  </div>
</section>

      {/* Contact Section */}
      {/* <section id="contact" className={`py-20 px-4 ${sectionBg}`}>
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
      </section> */}
<section id="contact" className={`py-20 px-4 ${sectionBg}`}>
  <div className="max-w-7xl mx-auto">
    {/* <div className="text-center mb-16">
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
    </div> */}
<div className="text-center mb-16">
  <motion.h2
    className="text-4xl md:text-5xl font-bold mb-4"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    Get In <span className="text-yellow-400">Touch</span>
  </motion.h2>
  <p className={`text-lg ${isDark ? 'text-gray-400' : 'text-gray-600'} max-w-2xl mx-auto`}>
    Ready to start your fitness journey? Contact us today for a free consultation.
  </p>
</div>

{/* Main Grid */}
<div className="grid md:grid-cols-2 gap-12">
  {/* Contact Info */}
  <div className="space-y-8">
    {[
      { icon: <FaPhoneAlt />, title: 'Phone', info: '+91 98765 43210' },
      { icon: <FaMapMarkerAlt />, title: 'Location', info: 'Sector 15, Ghaziabad, UP' },
      { icon: <FaClock />, title: 'Hours', info: 'Mon-Sat: 5AM-11PM, Sun: 6AM-10PM' }
    ].map(({ icon, title, info }, i) => (
      <motion.div
        key={i}
        className="flex items-center space-x-4 p-4 rounded-xl hover:bg-yellow-50 dark:hover:bg-gray-800 transition"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, delay: i * 0.1 }}
      >
        <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-black text-xl">
          {icon}
        </div>
        <div>
          <h3 className="font-semibold text-lg">{title}</h3>
          <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{info}</p>
        </div>
      </motion.div>
    ))}
  </div>

  {/* Form Section */}
  <motion.div
    className={`${cardBg} p-8 rounded-3xl shadow-lg`}
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
  >
    <h3 className="text-2xl font-bold mb-6">Book Your Free Trial</h3>
    <div className="space-y-4">
      {['Your Name', 'Your Email', 'Your Phone'].map((placeholder, i) => (
        <input
          key={i}
          type={placeholder === 'Your Email' ? 'email' : placeholder === 'Your Phone' ? 'tel' : 'text'}
          placeholder={placeholder}
          className={`w-full p-4 rounded-xl border ${isDark ? 'border-gray-600 bg-gray-700 text-white' : 'border-gray-300 bg-white'} focus:border-yellow-400 outline-none transition duration-300 focus:shadow-md`}
        />
      ))}

      <textarea
        placeholder="Tell us about your fitness goals..."
        rows={4}
        className={`w-full p-4 rounded-xl border ${isDark ? 'border-gray-600 bg-gray-700 text-white' : 'border-gray-300 bg-white'} focus:border-yellow-400 outline-none transition duration-300 focus:shadow-md resize-none`}
      />

      <motion.button
        whileHover={{ scale: 1.05, boxShadow: '0px 0px 15px rgba(250, 204, 21, 0.5)' }}
        whileTap={{ scale: 0.95 }}
        className="w-full py-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-black rounded-xl font-semibold transition-all duration-300"
      >
        Book Free Trial
      </motion.button>
    </div>
  </motion.div>
</div>
    {/* Google Map Embed */}
    <div className="mt-16 rounded-2xl overflow-hidden shadow-lg">
      <iframe
        title="PulseFit Gym Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.3826127086684!2d77.31550891508303!3d28.616750391133826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfb7325fa0a1f%3A0x69cfb3ea4565601a!2sSector%2015%2C%20Ghaziabad%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1716640000000"
        width="100%"
        height="300"
        loading="lazy"
        allowFullScreen
        className="w-full h-[300px] border-0"
      ></iframe>
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


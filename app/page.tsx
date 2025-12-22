'use client';

import React, { useState, useEffect } from 'react';
import { ChevronDown, Menu, X, Star, Users, Zap, Code, CheckCircle, Send, MapPin, Phone, Mail, ChevronRight, Globe } from 'lucide-react';

export default function Home() {
  const [language, setLanguage] = useState<'en' | 'ta'>('en');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const content = {
    en: {
      nav: { home: 'Home', services: 'Services', about: 'About', testimonials: 'Testimonials', faq: 'FAQ', contact: 'Contact' },
      hero: {
        title: 'Rising Documentation',
        subtitle: 'Transform Your Knowledge Into Excellence',
        description: 'Comprehensive documentation solutions with modern design, seamless integration, and powerful tools for your success.',
        cta: 'Get Started Now',
        stats: [
          { label: 'Active Users', value: '10K+' },
          { label: 'Documentation Pages', value: '500+' },
          { label: 'Client Satisfaction', value: '99%' },
          { label: 'Uptime', value: '99.9%' }
        ]
      },
      services: {
        title: 'Our Premium Services',
        subtitle: 'Everything you need to excel',
        items: [
          {
            icon: 'code',
            title: 'Technical Documentation',
            description: 'Create and maintain clear, comprehensive technical guides.',
            price: '$29/month',
            features: ['Unlimited Pages', 'Code Highlighting', 'Version Control', 'API Documentation']
          },
          {
            icon: 'users',
            title: 'Team Collaboration',
            description: 'Work together seamlessly with advanced collaboration tools.',
            price: '$49/month',
            features: ['Multi-user Access', 'Real-time Editing', 'Comments & Reviews', 'Permission Management']
          },
          {
            icon: 'zap',
            title: 'Performance Analytics',
            description: 'Track and optimize your documentation performance.',
            price: '$79/month',
            features: ['Usage Analytics', 'Search Insights', 'Performance Metrics', 'Custom Reports']
          },
          {
            icon: 'globe',
            title: 'Global Distribution',
            description: 'Reach audiences worldwide with fast, reliable delivery.',
            price: '$99/month',
            features: ['CDN Integration', 'Multi-language Support', 'SEO Optimization', 'Analytics Dashboard']
          }
        ]
      },
      about: {
        title: 'About Rising Documentation',
        description: 'Founded with a vision to revolutionize how teams create and share knowledge, Rising Documentation has grown into a trusted platform serving thousands of organizations worldwide.',
        founder: 'Shajju',
        founderTitle: 'Founder & CEO',
        founderBio: 'Tech enthusiast with 10+ years of experience in documentation and knowledge management.'
      },
      testimonials: {
        title: 'What Our Clients Say',
        subtitle: 'Real feedback from real users',
        items: [
          {
            text: 'Rising Documentation has completely transformed how our team manages knowledge. The interface is intuitive and the features are powerful!',
            author: 'Sarah Johnson',
            role: 'Project Manager',
            company: 'Tech Corp'
          },
          {
            text: 'The best documentation platform we\'ve used. The collaboration features save us hours every week.',
            author: 'Michael Chen',
            role: 'Tech Lead',
            company: 'Innovation Labs'
          },
          {
            text: 'Outstanding support and continuously improving features. Highly recommended!',
            author: 'Emma Davis',
            role: 'Content Director',
            company: 'Digital Solutions'
          }
        ]
      },
      faq: {
        title: 'Frequently Asked Questions',
        items: [
          {
            question: 'How do I get started?',
            answer: 'Simply sign up for free, create your first project, and start documenting. Our onboarding wizard will guide you through the setup process.'
          },
          {
            question: 'Can I import existing documentation?',
            answer: 'Yes! We support importing from various formats including Markdown, HTML, and Word documents. Use our import tool to get started.'
          },
          {
            question: 'Is there a free plan?',
            answer: 'Yes, we offer a free plan with basic features. Upgrade anytime to access premium features and advanced capabilities.'
          },
          {
            question: 'What about data security?',
            answer: 'We use enterprise-grade encryption, regular backups, and comply with GDPR, CCPA, and other data protection regulations.'
          },
          {
            question: 'How is the billing calculated?',
            answer: 'Billing is per project and based on usage. You can view detailed usage metrics in your dashboard and adjust your plan anytime.'
          },
          {
            question: 'Do you offer API access?',
            answer: 'Yes, our REST API allows you to integrate Rising Documentation with your existing tools and workflows.'
          }
        ]
      },
      contact: {
        title: 'Get In Touch',
        subtitle: 'We\'d love to hear from you',
        form: { name: 'Your Name', email: 'Your Email', message: 'Your Message', send: 'Send Message' },
        info: [
          { icon: 'mail', label: 'Email', value: 'hello@risingdocs.com' },
          { icon: 'phone', label: 'Phone', value: '+1 (555) 123-4567' },
          { icon: 'location', label: 'Address', value: 'San Francisco, CA 94105' }
        ]
      }
    },
    ta: {
      nav: { home: 'முகப்பு', services: 'சேவைகள்', about: 'பற்றி', testimonials: 'பின்னூட்டங்கள்', faq: 'கேள்வி-பதில்', contact: 'தொடர்பு' },
      hero: {
        title: 'Rising Documentation',
        subtitle: 'உங்கள் அறிவை சிறப்புக்கு மாற்றுங்கள்',
        description: 'நவீன வடிவமைப்பு, மென்மையான ஒருங்கிணைப்பு மற்றும் சக்திशালী கருவிகளுடன் ஆவணன தீர்வுகள்.',
        cta: 'இப்போது தொடங்குங்கள்',
        stats: [
          { label: 'செயல்படும் பயனர்கள்', value: '10K+' },
          { label: 'ஆவணப் பக்கங்கள்', value: '500+' },
          { label: 'கிளையன்ட் திருப்தி', value: '99%' },
          { label: 'இயக்க நேரம்', value: '99.9%' }
        ]
      },
      services: {
        title: 'எங்கள் பிரீமியம் சேவைகள்',
        subtitle: 'சிறப்பு அடைய வேண்டியவை',
        items: [
          {
            icon: 'code',
            title: 'தொழில்நுட்ப ஆவணங்கள்',
            description: 'தெளிவான, விரிவான தொழில்நுட்ப வழிகாட்டுதல்களை உருவாக்கவும்.',
            price: '₹2,400/மாস',
            features: ['வரம்பற்ற பக்கங்கள்', 'குறியீடு முன்னிலைப்படுத்தல்', 'பதிப்பு கட்டுப்பாடு', 'API ஆவணங்கள்']
          },
          {
            icon: 'users',
            title: 'குழு ஒத்துழைப்பு',
            description: 'மேம்பட்ட ஒத்துழைப்பு கருவிகளுடன் விரிவாக பணிபுரியுங்கள்.',
            price: '₹4,000/மாส',
            features: ['பல-பயனர் அணுகல்', 'நிஜ-நேர திருத்தம்', 'கருத்து மற்றும் மதிப்பாய்வு', 'அனுமதி நிர்வாகம்']
          },
          {
            icon: 'zap',
            title: 'செயல்திறன் பகுப்பாய்வு',
            description: 'உங்கள் ஆவணப் செயல்திறனைக் கண்டறிந்து மேம்படுத்தவும்.',
            price: '₹6,500/மாס',
            features: ['பயன்பாட்டு பகுப்பாய்வு', 'தேடல் உள்ளீடுகள்', 'செயல்திறன் மெட்ரிக்ஸ்', 'தனிப்பயன் அறிக்கைகள்']
          },
          {
            icon: 'globe',
            title: 'உலகளாவிய விநியோகம்',
            description: 'வேகமான, நம்பகமான விநியோகத்துடன் உலகளாவிய மக்களை அடையுங்கள்.',
            price: '₹8,100/மாס',
            features: ['CDN ஒருங்கிணைப்பு', 'பல-மொழி ஆதரவு', 'SEO மேலாண்மை', 'பகுப்பாய்வு டேஷ்போர்டு']
          }
        ]
      },
      about: {
        title: 'Rising Documentation பற்றி',
        description: 'குழுக்கள் அறிவை உருவாக்கி பகிர்ந்துகொள்ளும் முறையை புரட்டுவதற்கான பார்வையுடன் நிறுவப்பட்ட Rising Documentation உலகளாவிய ஆயிரக்கணக்கான நிறுவனங்கள் நம்பகமான தளமாக வளர்ந்துள்ளது.',
        founder: 'Shajju',
        founderTitle: 'நிறுவனர் & முதல் நிர்வாகி',
        founderBio: 'ஆவணங்கள் மற்றும் அறிவு நிர்வாகத்தில் 10+ ஆண்டுகளின் அனுபவத்தைக் கொண்ட தொழில்நுட்ப ஆர்வலர்.'
      },
      testimonials: {
        title: 'எங்கள் கிளையன்டுகள் என்ன சொல்கிறார்கள்',
        subtitle: 'உண்மையான பயனர்களிடமிருந்து உண்மையான கருத்துக்கள்',
        items: [
          {
            text: 'Rising Documentation எங்கள் குழு அறிவை நிர்வகிக்கும் முறையை முற்றிலுமாக மாற்றிவிட்டது. இন்টারফேஸ் உள்ளுணர்வாகவும் அம்சங்கள் சக்திशালीகவும் உள்ளது!',
            author: 'சாராہ ஜான்சன்',
            role: 'திட்ட பிரबन்ধक்',
            company: 'Tech Corp'
          },
          {
            text: 'நாங்கள் பயன்படுத்திய சிறந்த ஆவண தளம். ஒத்துழைப்பு அம்சங்கள் ஒவ்வொரு வாரமும் மணிநேரங்களைச் சேமிக்கின்றன.',
            author: 'மைக்கேல் செन்',
            role: 'தொழில்நுட்ப தலைமை',
            company: 'Innovation Labs'
          },
          {
            text: 'சிறந்த ஆதரவு மற்றும் தொடர்ந்து மேம்படும் அம்சங்கள். மிகவும் பரிந்துரைக்கப்படுகிறது!',
            author: 'எம்மா டேவிஸ்',
            role: 'உள்ளடக்க இயக்குனர்',
            company: 'Digital Solutions'
          }
        ]
      },
      faq: {
        title: 'அடிக்கடி கேட்கப்படும் கேள்விகள்',
        items: [
          {
            question: 'நான் எப்படி தொடங்குவது?',
            answer: 'வெறுமனே இலவச பதிவு செய்யுங்கள், உங்கள் முதல் திட்டத்தை உருவாக்கவும், மற்றும் ஆவணங்களை தொடங்குங்கள். எங்கள் onboarding மந்திரவாதி உங்களை அமைப்பு செயல்முறையின் மூலம் வழிநடத்துவார்.'
          },
          {
            question: 'இருக்கும் ஆவணங்களை நான் நிறுவ முடியுமா?',
            answer: 'ஆம்! நாங்கள் Markdown, HTML மற்றும் Word ஆவணங்கள் உட்பட பல்வேறு வடிவங்களிலிருந்து இறக்குமதி ஆதரவு செய்கிறோம்.'
          },
          {
            question: 'இலவச திட்டம் உள்ளதா?',
            answer: 'ஆம், நாங்கள் அடிப்படை அம்சங்களுடன் இலவச திட்டத்தை வழங்குகிறோம். பிரீமியம் அம்சங்கள் மற்றும் மேம்பட்ட திறன்களை அணுக எப்போது வேண்டுமானாலும் மேம்படுத்துங்கள்.'
          },
          {
            question: 'தரவு பாதுகாப்பு பற்றி என்ன?',
            answer: 'நாங்கள் நிறுவன-தர குறியாக்கம், வழக்கமான ব்যாக்கআப்கள் மற்றும் GDPR, CCPA மற்றும் பிற தரவு பாதுகாப்பு விதிமுறைகளுடன் இணங்கி செயல்படுகிறோம்.'
          },
          {
            question: 'பில்லிங் எவ்வாறு கணக்கிடப்படுகிறது?',
            answer: 'பில்லிங் ஒரு திட்டத்திற்கு ஒரு திட்டம் மற்றும் பயன்பாட்டு அடிப்படையில் உள்ளது. உங்கள் டேஷ்போர்டில் விரிவான பயன்பாட்டு மெட்ரிக்ஸைக் காணுங்கள்.'
          },
          {
            question: 'நீங்கள் API அணுகல் வழங்குகிறீர்களா?',
            answer: 'ஆம், எங்கள் REST API உங்கள் Rising Documentation ஐ உங்கள் இருக்கும் கருவிகள் மற்றும் பணிப்பாய்ங்களுடன் ஒருங்கிணைக்க அனுமதிக்கிறது.'
          }
        ]
      },
      contact: {
        title: 'நாங்களை தொடர்பு கொள்ளுங்கள்',
        subtitle: 'நாங்கள் உங்களிடமிருந்து கேட்க விரும்புகிறோம்',
        form: { name: 'உங்கள் பெயர்', email: 'உங்கள் மின்னஞ்சல்', message: 'உங்கள் செய்தி', send: 'செய்தி அனுப்பவும்' },
        info: [
          { icon: 'mail', label: 'மின்னஞ்சல்', value: 'hello@risingdocs.com' },
          { icon: 'phone', label: 'தொலைபேசி', value: '+1 (555) 123-4567' },
          { icon: 'location', label: 'முகவரி', value: 'San Francisco, CA 94105' }
        ]
      }
    }
  };

  const t = content[language];

  const getIcon = (iconName: string, className: string) => {
    const iconProps = { className };
    switch (iconName) {
      case 'code':
        return <Code {...iconProps} />;
      case 'users':
        return <Users {...iconProps} />;
      case 'zap':
        return <Zap {...iconProps} />;
      case 'globe':
        return <Globe {...iconProps} />;
      case 'mail':
        return <Mail {...iconProps} />;
      case 'phone':
        return <Phone {...iconProps} />;
      case 'location':
        return <MapPin {...iconProps} />;
      default:
        return null;
    }
  };

  return (
    <div className="w-full bg-white overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold bg-gradient-to-r from-teal-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Rising
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {Object.entries(t.nav).map(([key, label]) => (
                <a
                  key={key}
                  href={`#${key}`}
                  className="text-gray-700 hover:text-transparent hover:bg-gradient-to-r hover:from-teal-600 hover:via-purple-600 hover:to-pink-600 hover:bg-clip-text transition-all"
                >
                  {label}
                </a>
              ))}
            </div>

            {/* Language Toggle & Mobile Menu */}
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setLanguage(language === 'en' ? 'ta' : 'en')}
                className="px-3 py-2 rounded-lg bg-gradient-to-r from-teal-500 to-purple-500 text-white text-sm font-semibold hover:shadow-lg transition-shadow"
              >
                {language === 'en' ? 'தமிழ்' : 'EN'}
              </button>
              
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 text-gray-700"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden pb-4 space-y-2 border-t border-gray-200">
              {Object.entries(t.nav).map(([key, label]) => (
                <a
                  key={key}
                  href={`#${key}`}
                  className="block px-4 py-2 text-gray-700 hover:text-purple-600 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {label}
                </a>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-gradient-to-br from-slate-50 via-cyan-50 to-purple-50">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-teal-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse animation-delay-4000"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-teal-600 via-purple-600 to-pink-600 bg-clip-text text-transparent leading-tight">
              {t.hero.title}
            </h1>
            <p className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6">
              {t.hero.subtitle}
            </p>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              {t.hero.description}
            </p>
            <button className="px-8 py-4 bg-gradient-to-r from-teal-500 via-purple-500 to-pink-500 text-white font-bold rounded-xl hover:shadow-2xl transition-all transform hover:scale-105 flex items-center gap-2 mx-auto">
              {t.hero.cta}
              <ChevronRight size={20} />
            </button>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            {t.hero.stats.map((stat, index) => (
              <div
                key={index}
                className="p-6 bg-white/60 backdrop-blur-xl rounded-2xl border border-white/40 hover:border-purple-300 transition-all hover:shadow-xl transform hover:-translate-y-1"
              >
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-teal-600 to-purple-600 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-sm md:text-base text-gray-600 font-semibold">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-teal-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              {t.services.title}
            </h2>
            <p className="text-xl text-gray-600">
              {t.services.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.services.items.map((service, index) => (
              <div
                key={index}
                className="group h-full rounded-2xl bg-gradient-to-br from-slate-50 to-slate-100 border border-gray-200 p-8 hover:shadow-2xl transition-all transform hover:-translate-y-2 hover:border-purple-300 relative overflow-hidden"
              >
                {/* Gradient Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-teal-50 via-purple-50 to-pink-50 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-teal-500 via-purple-500 to-pink-500 flex items-center justify-center mb-6 group-hover:shadow-lg transition-shadow">
                    {getIcon(service.icon, 'text-white w-7 h-7')}
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-purple-600 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm mb-6">
                    {service.description}
                  </p>
                  
                  <div className="text-3xl font-bold bg-gradient-to-r from-teal-600 to-purple-600 bg-clip-text text-transparent mb-6">
                    {service.price}
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-700">
                        <CheckCircle className="w-4 h-4 text-teal-500 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <button className="w-full py-3 rounded-xl bg-gradient-to-r from-teal-500 to-purple-500 text-white font-semibold hover:shadow-lg transition-all transform hover:scale-105">
                    {language === 'en' ? 'Choose Plan' : 'திட்டத்தை தேர்ந்தெடுக்கவும்'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-cyan-50 to-purple-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Founder Photo Placeholder */}
            <div className="relative">
              <div className="relative w-full aspect-square rounded-2xl overflow-hidden shadow-2xl group">
                <div className="absolute inset-0 bg-gradient-to-br from-teal-400 via-purple-400 to-pink-400 opacity-80"></div>
                <div className="absolute inset-0 flex items-center justify-center text-white">
                  <Users size={120} className="opacity-30" />
                </div>
                {/* Animated Border */}
                <div className="absolute inset-0 border-4 border-transparent group-hover:border-white transition-all rounded-2xl bg-gradient-to-r from-teal-500 via-purple-500 to-pink-500 bg-clip-border opacity-0 group-hover:opacity-100"></div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-teal-300 rounded-full opacity-20 blur-2xl"></div>
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-purple-300 rounded-full opacity-20 blur-2xl"></div>
            </div>

            {/* About Content */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-teal-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                {t.about.title}
              </h2>
              
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                {t.about.description}
              </p>

              {/* Founder Card */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-shadow">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-teal-500 to-purple-500 flex items-center justify-center text-white font-bold text-xl">
                    S
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 text-lg">{t.about.founder}</h3>
                    <p className="text-purple-600 font-semibold">{t.about.founderTitle}</p>
                  </div>
                </div>
                <p className="text-gray-600">
                  {t.about.founderBio}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-teal-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              {t.testimonials.title}
            </h2>
            <p className="text-xl text-gray-600">
              {t.testimonials.subtitle}
            </p>
          </div>

          {/* Testimonials Carousel */}
          <div className="relative">
            <div className="rounded-2xl bg-gradient-to-br from-slate-50 to-slate-100 p-8 md:p-12 border border-gray-200 shadow-xl min-h-72 flex flex-col justify-between">
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-xl md:text-2xl text-gray-800 font-semibold mb-8 italic leading-relaxed">
                "{t.testimonials.items[activeTestimonial].text}"
              </p>

              {/* Author Info */}
              <div>
                <div className="font-bold text-gray-900 text-lg">
                  {t.testimonials.items[activeTestimonial].author}
                </div>
                <div className="text-purple-600 font-semibold">
                  {t.testimonials.items[activeTestimonial].role}
                </div>
                <div className="text-gray-600 text-sm">
                  {t.testimonials.items[activeTestimonial].company}
                </div>
              </div>
            </div>

            {/* Carousel Dots */}
            <div className="flex justify-center gap-3 mt-8">
              {t.testimonials.items.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === activeTestimonial
                      ? 'bg-gradient-to-r from-teal-600 to-purple-600 w-8'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-cyan-50 to-purple-50">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-teal-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              {t.faq.title}
            </h2>
          </div>

          <div className="space-y-4">
            {t.faq.items.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:border-purple-300 transition-all hover:shadow-lg"
              >
                <button
                  onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                  className="w-full px-8 py-6 flex justify-between items-center hover:bg-gradient-to-r hover:from-teal-50 hover:to-purple-50 transition-colors text-left"
                >
                  <span className="font-bold text-gray-900 text-lg pr-4">
                    {item.question}
                  </span>
                  <ChevronDown
                    size={24}
                    className={`flex-shrink-0 text-purple-600 transition-transform ${
                      activeFaq === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {activeFaq === index && (
                  <div className="px-8 py-6 border-t border-gray-100 bg-gradient-to-br from-slate-50 to-slate-100 text-gray-700 leading-relaxed animate-fade-in">
                    {item.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-teal-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              {t.contact.title}
            </h2>
            <p className="text-xl text-gray-600">
              {t.contact.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Contact Info */}
            {t.contact.info.map((info, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-8 border border-gray-200 hover:shadow-lg transition-all hover:border-purple-300"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-teal-500 to-purple-500 flex items-center justify-center mb-6">
                  {getIcon(info.icon, 'text-white w-7 h-7')}
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{info.label}</h3>
                <p className="text-gray-700">{info.value}</p>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="max-w-2xl mx-auto bg-gradient-to-br from-slate-50 via-cyan-50 to-purple-50 rounded-2xl p-8 md:p-12 border border-gray-200">
            <form className="space-y-6">
              <div>
                <input
                  type="text"
                  placeholder={t.contact.form.name}
                  className="w-full px-6 py-4 rounded-xl border border-gray-300 bg-white focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder={t.contact.form.email}
                  className="w-full px-6 py-4 rounded-xl border border-gray-300 bg-white focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all"
                />
              </div>
              <div>
                <textarea
                  placeholder={t.contact.form.message}
                  rows={6}
                  className="w-full px-6 py-4 rounded-xl border border-gray-300 bg-white focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-teal-500 via-purple-500 to-pink-500 text-white font-bold rounded-xl hover:shadow-2xl transition-all transform hover:scale-105 flex items-center justify-center gap-2"
              >
                <Send size={20} />
                {t.contact.form.send}
              </button>
            </form>
          </div>

          {/* Map Placeholder */}
          <div className="mt-16 rounded-2xl overflow-hidden shadow-xl h-96 bg-gradient-to-br from-teal-400 via-purple-400 to-pink-400 flex items-center justify-center">
            <div className="text-white text-center">
              <MapPin size={64} className="mx-auto mb-4 opacity-50" />
              <p className="text-2xl font-bold">San Francisco, CA</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="text-2xl font-bold bg-gradient-to-r from-teal-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
                Rising
              </div>
              <p className="text-gray-400">
                {language === 'en' ? 'Transform your knowledge into excellence.' : 'உங்கள் அறிவை சிறப்புக்கு மாற்றுங்கள்.'}
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">{language === 'en' ? 'Product' : 'தயாரிப்பு'}</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#services" className="hover:text-white transition">{t.nav.services}</a></li>
                <li><a href="#faq" className="hover:text-white transition">{t.nav.faq}</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">{language === 'en' ? 'Company' : 'நிறுவனம்'}</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#about" className="hover:text-white transition">{t.nav.about}</a></li>
                <li><a href="#contact" className="hover:text-white transition">{t.nav.contact}</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">{language === 'en' ? 'Legal' : 'சட்ட'}</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition">{language === 'en' ? 'Privacy' : 'தனியுரிமை'}</a></li>
                <li><a href="#" className="hover:text-white transition">{language === 'en' ? 'Terms' : 'நிபந்தனைகள்'}</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-700 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 Rising Documentation. {language === 'en' ? 'All rights reserved.' : 'அனைத்து உரிமைகளும் உரிமைப்பட்டவை.'}
            </p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white transition">Twitter</a>
              <a href="#" className="text-gray-400 hover:text-white transition">LinkedIn</a>
              <a href="#" className="text-gray-400 hover:text-white transition">GitHub</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Smooth Scroll Style */}
      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }

        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
}

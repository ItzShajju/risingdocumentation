'use client';

import React, { useState, useEffect } from 'react';
import { ChevronDown, Menu, X, Star, Users, Zap, FileText, CheckCircle, Send, MapPin, Phone, Mail, ChevronRight, Globe, ShieldAlert, Award, MessageCircle } from 'lucide-react';

const Logo = ({ className = "w-10 h-10" }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Sun */}
    <circle cx="70" cy="30" r="15" fill="url(#sun-grad)" />
    {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
      <line
        key={angle}
        x1={70 + Math.cos(angle * Math.PI / 180) * 18}
        y1={30 + Math.sin(angle * Math.PI / 180) * 18}
        x2={70 + Math.cos(angle * Math.PI / 180) * 25}
        y2={30 + Math.sin(angle * Math.PI / 180) * 25}
        stroke="#F59E0B"
        strokeWidth="3"
        strokeLinecap="round"
      />
    ))}
    {/* Documents */}
    <rect x="15" y="40" width="20" height="40" rx="2" fill="#334155" />
    <rect x="25" y="30" width="20" height="50" rx="2" fill="#475569" />
    {/* Arrow */}
    <path
      d="M10 85 C 30 80, 50 60, 65 30 L 55 30 L 68 20 L 78 35 L 68 35"
      stroke="url(#arrow-grad)"
      strokeWidth="6"
      strokeLinecap="round"
      fill="none"
    />
    <defs>
      <linearGradient id="sun-grad" x1="70" y1="15" x2="70" y2="45" gradientUnits="userSpaceOnUse">
        <stop stopColor="#FBBF24" />
        <stop offset="1" stopColor="#F59E0B" />
      </linearGradient>
      <linearGradient id="arrow-grad" x1="10" y1="85" x2="70" y2="20" gradientUnits="userSpaceOnUse">
        <stop stopColor="#10B981" />
        <stop offset="1" stopColor="#3B82F6" />
      </linearGradient>
    </defs>
  </svg>
);

export default function Home() {
  const [language, setLanguage] = useState<'en' | 'ta'>('en');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const businessName = "Rising Documentation - Registration Solutions";
  const businessNameTa = "Rising Documentation - பதிவு தீர்வுகள்";

  const content = {
    en: {
      complianceBar: "Private Consultancy Service • Not a Government Portal",
      heroBadge: "Independent Private Service Provider",
      nav: { home: 'Home', services: 'Services', about: 'About', testimonials: 'Feedback', faq: 'FAQ', contact: 'Contact' },
      hero: {
        title: businessName,
        subtitle: 'Professional Documentation Assistance',
        description: 'Reliable guidance for all your legal and property documentation needs in Tirunelveli. We simplify complex procedures with expert assistance.',
        warning: 'We are a private consultancy. we assist you with documentation - we do not provide government services.',
        cta: 'Contact Consultant',
        stats: [
          { label: 'Successful Consultations', value: '1000+' },
          { label: 'Documentation Experts', value: '5+' },
          { label: 'Local Experience', value: '10Y+' },
          { label: 'Happy Clients', value: '98%' }
        ]
      },
      services: {
        title: 'Our Consultancy Services',
        subtitle: 'Expert assistance for your essential documentation',
        items: [
          {
            icon: 'file',
            title: 'Property Registration Assistance',
            description: 'Step-by-step guidance for property registration and legal documentation.',
            badge: 'Consultancy Service',
            features: ['Document Verification', 'Drafting Support', 'Procedural Guidance', 'Local Expertise']
          },
          {
            icon: 'users',
            title: 'Marriage Registration Assistance',
            description: 'Complete support for marriage certificate procedures and document preparation.',
            badge: 'Consultancy Service',
            features: ['Checklist Preparation', 'Form Filling Support', 'Guidance on Venue', 'Document Sorting']
          },
          {
            icon: 'zap',
            title: 'EC Retrieval Assistance',
            description: 'Help in obtaining Encumbrance Certificates and property history reports.',
            badge: 'Consultancy Service',
            features: ['Fast Retrieval Support', 'Digital Copy Assistance', 'Verification Support', 'History Tracking']
          },
          {
            icon: 'globe',
            title: 'Document Copy Assistance',
            description: 'Assistance in getting certified copies of registered documents and deeds.',
            badge: 'Consultancy Service',
            features: ['Application Support', 'Follow-up Guidance', 'Certified Copy Help', 'Old Deed Search']
          }
        ]
      },
      about: {
        title: `About ${businessName}`,
        description: 'Rising Documentation - Registration Solutions is an independent private consultancy led by S. Jameela. Based in Tirunelveli, we provide professional assistance to individuals navigating the complexities of legal documentation. We pride ourselves on transparency, reliability, and local procedural expertise.',
        disclaimer: 'Please note: We are NOT affiliated with any government department. Our fees are for consultancy and assistance services only.',
        founder: 'S. Jameela',
        founderTitle: 'Founder & Lead Consultant',
        founderBio: 'Dedicated professional with extensive experience in documentation procedures and client guidance in Tamil Nadu.'
      },
      testimonials: {
        title: 'Client Feedback',
        subtitle: 'What people say about our guidance',
        items: [
          {
            text: 'The guidance provided was excellent. They made the complex property registration process so much easier for us.',
            author: 'Ravi Kumar',
            role: 'Property Owner',
            company: 'Tirunelveli'
          },
          {
            text: 'Very professional marriage documentation assistance. They knew exactly what we needed and guided us perfectly.',
            author: 'Meena S.',
            role: 'Client',
            company: 'Tenkasi'
          }
        ]
      },
      faq: {
        title: 'Common Questions',
        items: [
          {
            question: 'Are you a government office?',
            answer: 'No. We are a private consultancy service. We assist you in preparing documents and guide you through the process, but official registrations are done only at government offices.'
          },
          {
            question: 'What do your fees cover?',
            answer: 'Our fees are for our professional time and expertise in assisting you with document preparation and guidance. Government fees are separate and paid directly to government departments.'
          },
          {
            question: 'How do you help with property documents?',
            answer: 'We help verify your existing documents, assist in drafting new deeds, and explain the step-by-step procedure required at the Registrar office.'
          }
        ]
      },
      contact: {
        title: 'Consult with Us',
        subtitle: 'Reach out for professional assistance',
        form: { name: 'Your Name', email: 'Your Email', message: 'How can we help you?', send: 'Send Inquiry' },
        info: [
          { icon: 'mail', label: 'Email', value: 'rrisingdocumentation@gmail.com' },
          { icon: 'phone', label: 'Primary Phone', value: '+91 95855 51021' },
          { icon: 'phone', label: 'Alternative Contact', value: '+91 462 358 7069' },
          { icon: 'whatsapp', label: 'WhatsApp Support', value: '+91 95855 51021' },
          {
            icon: 'globe',
            label: 'Bilingual Support',
            value: 'Bilingual support in Tamil and English via direct calls and WhatsApp.'
          }
        ]
      },
      legalSection: {
        title: "⚖️ Legal Disclaimers",
        points: [
          "This is a private consultancy service and NOT a government portal.",
          "We are not affiliated with, endorsed by, or representing any government department.",
          "Government fees (for registration, etc.) must be paid separately to government offices.",
          "We provide guidance and preparation assistance; we do not issue official documents.",
          "Our services are subject to current government rules and regulations."
        ]
      }
    },
    ta: {
      complianceBar: "தனியார் ஆலோசனை சேவை • அரசு தளம் அல்ல",
      heroBadge: "சுயாதீன தனியார் சேவை வழங்குநர்",
      nav: { home: 'முகப்பு', services: 'சேவைகள்', about: 'பற்றி', testimonials: 'பின்னூட்டம்', faq: 'கேள்விகள்', contact: 'தொடர்பு' },
      hero: {
        title: businessNameTa,
        subtitle: 'தொழில்முறை ஆவண ஆலோசனை',
        description: 'திருநெல்வேலியில் உங்கள் சட்ட மற்றும் சொத்து ஆவணத் தேவைகளுக்கான நம்பகமான வழிகாட்டல்.',
        warning: 'நாங்கள் ஒரு தனியார் ஆலோசனை மையம். நாங்கள் ஆவணங்கள் தயாரிப்பதில் உதவுகிறோம் - அரசு சேவைகளை நாங்கள் வழங்குவதில்லை.',
        cta: 'ஆலோசகரைத் தொடர்பு கொள்ள',
        stats: [
          { label: 'வெற்றிகரமான ஆலோசனைகள்', value: '1000+' },
          { label: 'ஆவண நிபுணர்கள்', value: '5+' },
          { label: 'உள்ளூர் அனுபவம்', value: '10Y+' },
          { label: 'திருப்தியடைந்த வாடிக்கையாளர்கள்', value: '98%' }
        ]
      },
      services: {
        title: 'எங்கள் ஆலோசனை சேவைகள்',
        subtitle: 'உங்கள் அத்தியாவசிய ஆவணங்களுக்கான நிபுணர் உதவி',
        items: [
          {
            icon: 'file',
            title: 'சொத்து பதிவு உதவி',
            description: 'சொத்து பதிவு மற்றும் சட்ட ஆவணங்களுக்கான படிப்படியான வழிகாட்டல்.',
            badge: 'ஆலோசனை சேவை',
            features: ['ஆவண சரிபார்ப்பு', 'வரைவு உதவி', 'நடைமுறை வழிகாட்டல்', 'உள்ளூர் நிபுணத்துவம்']
          },
          {
            icon: 'users',
            title: 'திருமண பதிவு உதவி',
            description: 'திருமணச் சான்றிதழ் நடைமுறைகள் மற்றும் ஆவணத் தயாரிப்பிற்கான முழுமையான ஆதரவு.',
            badge: 'ஆலோசனை சேவை',
            features: ['சரிபார்ப்பு பட்டியல்', 'படிவம் நிரப்பும் உதவி', 'இட வழிகாட்டல்', 'ஆவண வரிசைப்படுத்துதல்']
          },
          {
            icon: 'zap',
            title: 'வில்லங்கச் சான்றிதழ் (EC) உதவி',
            description: 'வில்லங்கச் சான்றிதழ்கள் மற்றும் சொத்து வரலாற்று அறிக்கைகளைப் பெறுவதில் உதவி.',
            badge: 'ஆலோசனை சேவை',
            features: ['வேகமான மீட்பு உதவி', 'டிஜிட்டல் நகல் உதவி', 'சரிபார்ப்பு ஆதரவு', 'வரலாறு கண்காணிப்பு']
          },
          {
            icon: 'globe',
            title: 'ஆவண நகல் பெறுதல் உதவி',
            description: 'பதிவு செய்யப்பட்ட ஆவணங்கள் மற்றும் பத்திரங்களின் சான்றளிக்கப்பட்ட நகல்களைப் பெறுவதில் உதவி.',
            badge: 'ஆலோசனை சேவை',
            features: ['விண்ணப்ப ஆதரவு', 'பின்தொடர்தல் வழிகாட்டல்', 'நகல் உதவி', 'பழைய பத்திரத் தேடல்']
          }
        ]
      },
      about: {
        title: `${businessNameTa} பற்றி`,
        description: 'Rising Documentation - பதிவு தீர்வுகள் என்பது எஸ். ஜமீலா தலைமையில் இயங்கும் ஒரு சுயாதீன தனியார் ஆலோசனை மையம். திருநெல்வேலியை அடிப்படையாகக் கொண்டு, ஆவணங்களின் சிக்கல்களைக் கையாளும் நபர்களுக்கு நாங்கள் தொழில்முறை உதவியை வழங்குகிறோம்.',
        disclaimer: 'குறிப்பு: நாங்கள் எந்த அரசுத் துறையுடனும் இணைக்கப்படவில்லை. எங்களின் கட்டணம் ஆலோசனை மற்றும் உதவி சேவைகளுக்காக மட்டுமே.',
        founder: 'எஸ். ஜமீலா',
        founderTitle: 'நிறுவனர் & தலைமை ஆலோசகர்',
        founderBio: 'தமிழ்நாட்டில் ஆவண நடைமுறைகள் மற்றும் வாடிக்கையாளர் வழிகாட்டலில் விரிவான அனுபவம் கொண்ட தொழில்முறை நிபுணர்.'
      },
      testimonials: {
        title: 'வாடிக்கையாளர் பின்னூட்டம்',
        subtitle: 'எங்கள் சேவையைப் பற்றி மக்கள் என்ன சொல்கிறார்கள்',
        items: [
          {
            text: 'வழிகாட்டல் சிறப்பாக இருந்தது. சிக்கலான சொத்துப் பதிவு முறையை அவர்கள் எங்களுக்கு மிகவும் எளிதாக்கினார்கள்.',
            author: 'ரவி குமார்',
            role: 'சொத்து உரிமையாளர்',
            company: 'திருநெல்வேலி'
          },
          {
            text: 'மிகவும் தொழில்முறை திருமண ஆவண உதவி. எங்களுக்கு என்ன தேவை என்பதை அவர்கள் சரியாகத் தெரிந்து கொண்டு வழிநடத்தினார்கள்.',
            author: 'மீனா எஸ்.',
            role: 'வாடிக்கையாளர்',
            company: 'தென்காசி'
          }
        ]
      },
      faq: {
        title: 'பொதுவான கேள்விகள்',
        items: [
          {
            question: 'நீங்கள் ஒரு அரசு அலுவலகமா?',
            answer: 'இல்லை. நாங்கள் ஒரு தனியார் ஆலோசனை சேவை வழங்குகிறோம். ஆவணங்களைத் தயாரிப்பதில் உங்களுக்கு உதவுகிறோம், ஆனால் அதிகாரப்பூர்வ பதிவுகள் அரசு அலுவலகங்களில் மட்டுமே செய்யப்படும்.'
          },
          {
            question: 'உங்களின் கட்டணம் எதை உள்ளடக்கியது?',
            answer: 'எங்கள் கட்டணம் ஆலோசனை மற்றும் ஆவணத் தயாரிப்பு உதவிக்காக மட்டுமே. அரசு கட்டணங்கள் தனித்தனியாக அரசுத் துறைகளுக்கு நேரடியாக செலுத்தப்பட வேண்டும்.'
          }
        ]
      },
      contact: {
        title: 'எங்களை அணுகவும்',
        subtitle: 'தொழில்முறை உதவிக்கு எங்களைத் தொடர்பு கொள்ளுங்கள்',
        form: { name: 'உங்கள் பெயர்', email: 'உங்கள் மின்னஞ்சல்', message: 'நாங்கள் உங்களுக்கு எப்படி உதவ முடியும்?', send: 'தொடர்பு கொள்ள' },
        info: [
          { icon: 'mail', label: 'மின்னஞ்சல்', value: 'rrisingdocumentation@gmail.com' },
          { icon: 'phone', label: 'முதன்மை எண்', value: '+91 95855 51021' },
          { icon: 'phone', label: 'மாற்று எண்', value: '+91 462 358 7069' },
          { icon: 'whatsapp', label: 'WhatsApp உதவி', value: '+91 95855 51021' },
          {
            icon: 'globe',
            label: 'இருமொழி ஆதரவு',
            value: 'நேரடி அழைப்புகள் மற்றும் WhatsApp மூலம் தமிழ் மற்றும் ஆங்கிலத்தில் இருமொழி ஆதரவு.'
          }
        ]
      },
      legalSection: {
        title: "⚖️ சட்ட எச்சரிக்கை",
        points: [
          "இது ஒரு தனியார் ஆலோசனை மையம், அரசு தளம் அல்ல.",
          "நாங்கள் எந்த அரசுத் துறையையும் பிரதிநிதித்துவப்படுத்தவில்லை.",
          "அரசு கட்டணங்கள் நேரடியாக அரசு அலுவலகங்களுக்கு செலுத்தப்பட வேண்டும்.",
          "நாங்கள் ஆலோசனைகளை மட்டுமே வழங்குகிறோம்; அதிகாரப்பூர்வ ஆவணங்களை வழங்குவதில்லை.",
          "அரசின் விதிமுறைகளுக்கு உட்பட்டு எங்கள் சேவைகள் வழங்கப்படும்."
        ]
      }
    }
  };

  const t = content[language];

  const getIcon = (iconName: string, className: string) => {
    const iconProps = { className };
    switch (iconName) {
      case 'file': return <FileText {...iconProps} />;
      case 'users': return <Users {...iconProps} />;
      case 'zap': return <Zap {...iconProps} />;
      case 'globe': return <Globe {...iconProps} />;
      case 'mail': return <Mail {...iconProps} />;
      case 'phone': return <Phone {...iconProps} />;
      case 'location': return <MapPin {...iconProps} />;
      case 'whatsapp': return <MessageCircle {...iconProps} />;
      default: return null;
    }
  };

  return (
    <div className="w-full bg-white overflow-hidden font-sans">
      {/* Compliance Top Bar */}
      <div className="bg-slate-900 text-white text-center py-2 px-4 text-xs sm:text-sm font-semibold sticky top-0 z-[60]">
        {t.complianceBar}
      </div>

      {/* Navigation */}
      <nav className="top-8 w-full bg-white/95 backdrop-blur-md z-50 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-3">
              <Logo className="w-12 h-12" />
              <div className="flex flex-col">
                <div className="text-xl md:text-2xl font-bold text-slate-900 leading-tight">Rising <span className="text-purple-600">Documentation</span></div>
                <div className="text-[10px] text-purple-500 font-bold uppercase tracking-widest leading-none">Registration Solutions</div>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {Object.entries(t.nav).map(([key, label]) => (
                <a key={key} href={`#${key}`} className="text-gray-700 hover:text-purple-600 font-semibold transition-all">
                  {label}
                </a>
              ))}
              <button
                onClick={() => setLanguage(language === 'en' ? 'ta' : 'en')}
                className="px-4 py-2 rounded-xl bg-purple-600 text-white font-bold hover:bg-purple-700 transition-all text-xs"
              >
                {language === 'en' ? 'தமிழ்' : 'English'}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center gap-4">
              <button onClick={() => setLanguage(language === 'en' ? 'ta' : 'en')} className="text-xs font-bold text-purple-700 underline">
                {language === 'en' ? 'தமிழ்' : 'English'}
              </button>
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2 text-gray-700">
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu Dropdown */}
          {mobileMenuOpen && (
            <div className="md:hidden pb-4 space-y-2 border-t border-gray-100 animate-slide-down">
              {Object.entries(t.nav).map(([key, label]) => (
                <a key={key} href={`#${key}`} className="block px-4 py-3 text-gray-700 hover:bg-purple-50 font-medium" onClick={() => setMobileMenuOpen(false)}>
                  {label}
                </a>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <div className="flex justify-center mb-8">
            <Logo className="w-24 h-24 drop-shadow-2xl" />
          </div>
          <div className="inline-block px-4 py-1.5 rounded-full bg-purple-100 text-purple-700 text-sm font-bold mb-6">
            {t.heroBadge}
          </div>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black mb-4 text-slate-900 leading-tight">
            {t.hero.title}
          </h1>
          <p className="text-xl md:text-2xl font-bold text-emerald-600 mb-6 italic underline decoration-emerald-200">
            {t.hero.subtitle}
          </p>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto font-medium">
            {t.hero.description}
          </p>

          {/* Warning Box */}
          <div className="max-w-xl mx-auto mb-10 p-5 bg-amber-50 border-l-8 border-amber-400 rounded-r-2xl flex items-start gap-4 text-left shadow-sm">
            <ShieldAlert className="text-amber-500 flex-shrink-0 mt-1" size={28} />
            <p className="text-amber-900 text-sm font-bold uppercase tracking-tight">
              {t.hero.warning}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="#contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-slate-900 text-white font-bold rounded-2xl hover:bg-purple-700 shadow-xl transition-all transform hover:scale-105 active:scale-95">
              {t.hero.cta}
              <ChevronRight size={20} />
            </a>
            <a href="tel:+919585551021" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-emerald-600 text-white font-bold rounded-2xl hover:bg-emerald-700 shadow-xl transition-all transform hover:scale-105 active:scale-95">
              <Phone size={20} />
              Call Now
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-20">
            {t.hero.stats.map((stat, index) => (
              <div key={index} className="p-6 bg-white shadow-xl rounded-3xl border-b-4 border-purple-500">
                <div className="text-3xl font-black text-slate-900">{stat.value}</div>
                <div className="text-[10px] text-purple-600 font-black uppercase tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black mb-4 text-slate-900 tracking-tight">{t.services.title}</h2>
            <div className="w-24 h-2 bg-emerald-500 mx-auto rounded-full mb-6"></div>
            <p className="text-gray-600 font-bold text-lg">{t.services.subtitle}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {t.services.items.map((service, index) => (
              <div key={index} className="group p-10 bg-slate-50 rounded-[2.5rem] border-2 border-slate-100 hover:border-emerald-400 hover:bg-white hover:shadow-2xl transition-all">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                  <div className="w-20 h-20 rounded-3xl bg-slate-900 flex items-center justify-center text-white flex-shrink-0 group-hover:scale-110 group-hover:bg-emerald-600 transition-all shadow-lg">
                    {getIcon(service.icon, 'w-10 h-10')}
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-700 text-[10px] font-black uppercase mb-4 tracking-widest">
                      {service.badge}
                    </span>
                    <h3 className="text-2xl font-black text-slate-900 mb-3">{service.title}</h3>
                    <p className="text-gray-600 font-medium mb-6 leading-relaxed">{service.description}</p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {service.features.map((f, i) => (
                        <li key={i} className="flex items-center gap-2 text-xs font-bold text-slate-700">
                          <CheckCircle className="text-emerald-500 w-4 h-4" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-900 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
          <Logo className="w-[1000px] h-[1000px] absolute top-[-200px] left-[-200px]" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="bg-white/5 backdrop-blur-lg rounded-[3rem] p-12 text-white border border-white/10 shadow-2xl">
              <h2 className="text-4xl font-black mb-8 italic">{t.about.title}</h2>
              <p className="text-xl leading-relaxed mb-10 text-slate-300 font-medium">{t.about.description}</p>
              <div className="p-6 bg-emerald-500/10 rounded-2xl border-l-8 border-emerald-500">
                <p className="text-base font-bold italic text-emerald-400">"{t.about.disclaimer}"</p>
              </div>
            </div>
            <div className="flex flex-col gap-8">
              <div className="flex items-center gap-8 p-8 bg-white/10 rounded-[2.5rem] border border-white/10">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center text-white text-4xl font-black shadow-2xl">
                  {t.about.founder.charAt(0)}
                </div>
                <div>
                  <h3 className="text-3xl font-black text-white">{t.about.founder}</h3>
                  <p className="text-emerald-400 font-black uppercase text-xs tracking-[0.2em]">{t.about.founderTitle}</p>
                </div>
              </div>
              <div className="bg-white/5 p-8 rounded-[2rem] border-l-8 border-purple-500">
                <p className="text-slate-300 leading-relaxed text-xl italic font-medium">
                  {t.about.founderBio}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Legal Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-amber-50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block p-4 bg-amber-400 text-white rounded-[2rem] mb-8 shadow-xl">
            <ShieldAlert size={40} />
          </div>
          <h2 className="text-4xl font-black mb-12 text-amber-950 uppercase tracking-tighter">{t.legalSection.title}</h2>
          <div className="grid gap-5 text-left">
            {t.legalSection.points.map((point, i) => (
              <div key={i} className="flex gap-5 p-6 bg-white rounded-3xl shadow-md border-2 border-amber-100 transform transition-all hover:scale-[1.02]">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-amber-500 text-white flex items-center justify-center text-sm font-black">{i + 1}</span>
                <p className="text-amber-950 font-black leading-tight">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20">
            <div>
              <h2 className="text-5xl font-black mb-6 text-slate-900 tracking-tighter">{t.contact.title}</h2>
              <div className="w-20 h-2 bg-purple-600 mb-10 rounded-full"></div>
              <p className="text-gray-600 font-bold text-xl mb-12">{t.contact.subtitle}</p>

              <div className="space-y-8">
                {t.contact.info.map((info, idx) => (
                  <div key={idx} className="flex items-start gap-6 group">
                    <div className="w-16 h-16 rounded-2xl bg-slate-50 text-slate-900 flex items-center justify-center flex-shrink-0 group-hover:bg-emerald-600 group-hover:text-white transition-all shadow-sm">
                      {getIcon(info.icon, 'w-8 h-8')}
                    </div>
                    <div>
                      <div className="text-xs text-purple-600 uppercase font-black tracking-widest mb-1">{info.label}</div>
                      <div className="text-slate-900 font-black text-xl md:text-2xl leading-tight">{info.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-emerald-400 to-purple-600 rounded-[3rem] opacity-10 blur-2xl"></div>
              <div className="relative bg-white p-10 md:p-14 rounded-[2.5rem] border-2 border-slate-100 shadow-2xl">
                <form className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase text-slate-500 ml-2">Full Name</label>
                    <input type="text" placeholder={t.contact.form.name} className="w-full px-6 py-4 rounded-2xl border-2 border-slate-100 focus:border-emerald-500 outline-none font-bold placeholder:text-slate-300 transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase text-slate-500 ml-2">Email Address</label>
                    <input type="email" placeholder={t.contact.form.email} className="w-full px-6 py-4 rounded-2xl border-2 border-slate-100 focus:border-emerald-500 outline-none font-bold placeholder:text-slate-300 transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase text-slate-500 ml-2">How can we help?</label>
                    <textarea placeholder={t.contact.form.message} rows={5} className="w-full px-6 py-4 rounded-2xl border-2 border-slate-100 focus:border-emerald-500 outline-none font-bold placeholder:text-slate-300 resize-none transition-all"></textarea>
                  </div>
                  <button className="w-full py-5 bg-slate-900 text-white font-black rounded-2xl hover:bg-emerald-600 shadow-xl active:scale-95 transition-all flex items-center justify-center gap-3 text-lg uppercase tracking-widest">
                    <Send size={24} />
                    {t.contact.form.send}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-12 mb-16 border-b border-slate-800 pb-16">
            <div className="text-center lg:text-left flex items-center gap-4">
              <Logo className="w-16 h-16" />
              <div>
                <div className="text-2xl font-black mb-1 leading-none">{businessName}</div>
                <div className="text-emerald-500 text-[10px] font-black uppercase tracking-[0.3em]">{t.heroBadge}</div>
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-8 text-xs font-black uppercase tracking-widest">
              <a href="#services" className="hover:text-emerald-400 transition-colors">{t.nav.services}</a>
              <a href="#about" className="hover:text-emerald-400 transition-colors">{t.nav.about}</a>
              <a href="#contact" className="hover:text-emerald-400 transition-colors">{t.nav.contact}</a>
            </div>
          </div>
          <div className="text-center">
            <div className="inline-block px-6 py-2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 rounded-full text-[10px] font-black uppercase tracking-widest mb-6">
              ⚠️ Independent Private Service Provider • Not a government portal
            </div>
            <p className="text-slate-500 text-xs font-bold leading-relaxed">
              © 2025 Rising Documentation - Registration Solutions. S. Jameela, Tirunelveli.
              <br />
              Registration solutions and professional document assistance for Tamil Nadu.
            </p>
          </div>
        </div>
      </footer>

      <style jsx global>{`
        @keyframes slide-down {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-slide-down { animation: slide-down 0.3s ease-out; }
        html { scroll-behavior: smooth; }
        body { color: #0f172a; }
      `}</style>
    </div>
  );
}

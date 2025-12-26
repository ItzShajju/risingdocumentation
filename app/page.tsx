'use client';

import React, { useState, useEffect } from 'react';
import { ChevronDown, Menu, X, Star, Users, Zap, FileText, CheckCircle, Send, MapPin, Phone, Mail, ChevronRight, Globe, ShieldAlert, Award, MessageCircle } from 'lucide-react';

const Logo = ({ className = "w-10 h-10", dark = false }: { className?: string, dark?: boolean }) => (
  <svg viewBox="0 0 320 280" className={className} xmlns="http://www.w3.org/2000/svg">
    <defs>
      {/* Light Version Gradients */}
      <linearGradient id="arrowGradLight" x1="0%" y1="100%" x2="100%" y2="0%">
        <stop offset="0%" style={{ stopColor: '#00A859', stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: '#8DC63F', stopOpacity: 1 }} />
      </linearGradient>

      {/* Dark Version Gradients */}
      <linearGradient id="arrowGradDark" x1="0%" y1="100%" x2="100%" y2="px">
        <stop offset="0%" style={{ stopColor: '#F7941E', stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: '#FFF200', stopOpacity: 1 }} />
      </linearGradient>

      <linearGradient id="sunGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" style={{ stopColor: '#FBB03B', stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: '#D4145A', stopOpacity: 0.8 }} />
      </linearGradient>

      <linearGradient id="waveGrad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" style={{ stopColor: '#00A99D', stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: '#3BBEC3', stopOpacity: 1 }} />
      </linearGradient>
    </defs>

    <g transform="translate(10, 10)">
      {/* Documents */}
      <rect x="50" y="80" width="15" height="100" fill={dark ? "#FFFFFF" : "#1B1464"} rx="2" />
      <rect x="75" y="60" width="23" height="120" fill={dark ? "#E6E6E6" : "#2E3192"} rx="2" />
      <rect x="110" y="30" width="60" height="150" fill={dark ? "#CCCCCC" : "#393185"} rx="4" />

      {/* Sun */}
      <g transform="translate(230, 110)">
        <circle r="45" fill="url(#sunGrad)" />
        {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map(deg => {
          if (deg > 270 || deg < 110) return null; // Only show outer rays
          return (
            <path
              key={deg}
              d="M 52,0 L 75,0"
              stroke="#F7941E"
              strokeWidth="5"
              strokeLinecap="round"
              transform={`rotate(${deg})`}
            />
          );
        })}
      </g>

      {/* Main Base Wave */}
      <path
        d="M 10,210 Q 160,180 310,210 L 310,225 Q 160,195 10,225 Z"
        fill="url(#waveGrad)"
      />

      {/* Rising Arrow */}
      <path
        d="M 20,205 C 80,200 160,160 215,60 L 195,75 L 235,20 L 255,85 L 235,75 C 190,165 110,215 20,220 Z"
        fill={dark ? "url(#arrowGradDark)" : "url(#arrowGradLight)"}
      />
    </g>

    {/* Text Section (For use in certain contexts if needed, but we mostly use HTML components for branding) */}
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
          }
        ]
      },
      contact: {
        title: 'Consult with Us',
        subtitle: 'Reach out for professional assistance',
        form: { name: 'Your Name', email: 'Your Email', message: 'How can we help you?', send: 'Send Inquiry' },
        info: [
          { icon: 'mail', label: 'Email', value: 'rrisingdocumentation@gmail.com', href: 'mailto:rrisingdocumentation@gmail.com' },
          { icon: 'phone', label: 'Primary Phone', value: '+91 95855 51021', href: 'tel:+919585551021' },
          { icon: 'phone', label: 'Alternative Contact', value: '+91 462 358 7069', href: 'tel:+914623587069' },
          { icon: 'whatsapp', label: 'WhatsApp Support', value: '+91 95855 51021', href: 'https://wa.me/919585551021' },
          {
            icon: 'location',
            label: 'Office Location',
            value: 'No. 3/1, Near Collectorate, Tirunelveli, Tamil Nadu 627009',
            href: 'https://www.google.com/maps/search/?api=1&query=Rising+Documentation+Tirunelveli+Registration+Solutions'
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
          { icon: 'mail', label: 'மின்னஞ்சல்', value: 'rrisingdocumentation@gmail.com', href: 'mailto:rrisingdocumentation@gmail.com' },
          { icon: 'phone', label: 'முதன்மை எண்', value: '+91 95855 51021', href: 'tel:+919585551021' },
          { icon: 'phone', label: 'மாற்று எண்', value: '+91 462 358 7069', href: 'tel:+914623587069' },
          { icon: 'whatsapp', label: 'WhatsApp உதவி', value: '+91 95855 51021', href: 'https://wa.me/919585551021' },
          {
            icon: 'location',
            label: 'அலுவலக இடம்',
            value: 'வ.எண். 3/1, ஆட்சியர் அலுவலகம் அருகில், திருநெல்வேலி, தமிழ்நாடு 627009',
            href: 'https://www.google.com/maps/search/?api=1&query=Rising+Documentation+Tirunelveli+Registration+Solutions'
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
      <div className="bg-[#1B1464] text-white text-center py-2 px-4 text-xs sm:text-sm font-semibold sticky top-0 z-[60]">
        {t.complianceBar}
      </div>

      {/* Navigation */}
      <nav className="top-8 w-full bg-white/95 backdrop-blur-md z-50 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-24">
            <div className="flex items-center gap-3">
              <Logo className="w-20 h-20" />
              <div className="flex flex-col">
                <div className="text-xl md:text-2xl font-black text-[#1B1464] leading-none tracking-tighter uppercase">RISING</div>
                <div className="text-sm md:text-lg font-black text-[#1B1464] leading-none tracking-tighter uppercase">DOCUMENTATION</div>
                <div className="text-[10px] text-[#00A99D] font-bold uppercase tracking-[0.2em] mt-1 border-t border-[#00A99D] pt-0.5">Registration Solutions</div>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {Object.entries(t.nav).map(([key, label]) => (
                <a key={key} href={`#${key}`} className="text-gray-700 hover:text-[#00A99D] font-black uppercase text-xs tracking-widest transition-all">
                  {label}
                </a>
              ))}
              <button
                onClick={() => setLanguage(language === 'en' ? 'ta' : 'en')}
                className="px-5 py-2.5 rounded-full bg-[#1B1464] text-white font-black hover:bg-[#00A99D] transition-all text-xs tracking-widest"
              >
                {language === 'en' ? 'தமிழ்' : 'English'}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center gap-4">
              <button onClick={() => setLanguage(language === 'en' ? 'ta' : 'en')} className="text-xs font-black text-[#1B1464] underline uppercase tracking-tighter">
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
                <a key={key} href={`#${key}`} className="block px-4 py-4 text-gray-700 hover:bg-slate-50 font-black uppercase text-xs tracking-widest" onClick={() => setMobileMenuOpen(false)}>
                  {label}
                </a>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <div className="flex justify-center mb-10">
            <Logo className="w-40 h-40 md:w-64 md:h-64 drop-shadow-2xl" />
          </div>
          <div className="inline-block px-5 py-2 rounded-full bg-[#E6F4F3] text-[#00A99D] text-xs font-black uppercase tracking-[0.2em] mb-8">
            {t.heroBadge}
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 text-[#1B1464] leading-none tracking-tighter">
            {t.hero.title}
          </h1>
          <p className="text-xl md:text-3xl font-black text-[#00A859] mb-8 italic uppercase tracking-widest">
            {t.hero.subtitle}
          </p>
          <p className="text-xl text-slate-600 mb-12 max-w-3xl mx-auto font-medium leading-relaxed">
            {t.hero.description}
          </p>

          {/* Warning Box */}
          <div className="max-w-2xl mx-auto mb-12 p-6 bg-amber-50 border-l-[10px] border-amber-400 rounded-r-3xl flex items-center gap-6 text-left shadow-lg">
            <div className="bg-amber-400 p-3 rounded-full text-white">
              <ShieldAlert size={32} />
            </div>
            <p className="text-amber-900 text-sm md:text-base font-black uppercase tracking-tight leading-snug">
              {t.hero.warning}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a href="#contact" className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-[#1B1464] text-white font-black rounded-3xl hover:bg-[#00A99D] shadow-2xl transition-all transform hover:scale-105 active:scale-95 uppercase tracking-widest text-sm">
              {t.hero.cta}
              <ChevronRight size={20} />
            </a>
            <a href="https://wa.me/919585551021" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-[#25D366] text-white font-black rounded-3xl hover:bg-[#128C7E] shadow-2xl transition-all transform hover:scale-105 active:scale-95 uppercase tracking-widest text-sm">
              <MessageCircle size={24} />
              WhatsApp Now
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-24">
            {t.hero.stats.map((stat, index) => (
              <div key={index} className="p-8 bg-white shadow-2xl rounded-[2.5rem] border-b-[8px] border-[#00A99D]">
                <div className="text-4xl font-black text-[#1B1464] mb-2">{stat.value}</div>
                <div className="text-[10px] text-[#00A99D] font-black uppercase tracking-[0.2em]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black mb-6 text-[#1B1464] tracking-tighter uppercase">{t.services.title}</h2>
            <div className="w-32 h-3 bg-[#00A859] mx-auto rounded-full mb-8"></div>
            <p className="text-slate-600 font-bold text-xl uppercase tracking-widest leading-relaxed">{t.services.subtitle}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {t.services.items.map((service, index) => (
              <div key={index} className="group p-12 bg-slate-50 rounded-[3rem] border-2 border-slate-100 hover:border-[#00A99D] hover:bg-white hover:shadow-[0_30px_60px_-15px_rgba(0,169,157,0.3)] transition-all">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
                  <div className="w-24 h-24 rounded-[2rem] bg-[#1B1464] flex items-center justify-center text-white flex-shrink-0 group-hover:scale-110 group-hover:bg-[#00A859] transition-all shadow-xl">
                    {getIcon(service.icon, 'w-12 h-12')}
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <span className="inline-block px-5 py-2 rounded-full bg-[#E6F4F3] text-[#00A99D] text-[10px] font-black uppercase mb-6 tracking-[0.2em]">
                      {service.badge}
                    </span>
                    <h3 className="text-3xl font-black text-[#1B1464] mb-4 uppercase tracking-tighter">{service.title}</h3>
                    <p className="text-slate-600 font-medium mb-8 text-lg leading-relaxed">{service.description}</p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {service.features.map((f, i) => (
                        <li key={i} className="flex items-center gap-3 text-sm font-black text-slate-700">
                          <CheckCircle className="text-[#00A859] w-5 h-5" />
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
      <section id="about" className="py-32 px-4 sm:px-6 lg:px-8 bg-[#1B1464] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full opacity-[0.03] pointer-events-none transform scale-150 rotate-12">
          <Logo className="w-full h-full" dark />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="bg-white/5 backdrop-blur-2xl rounded-[4rem] p-16 text-white border border-white/10 shadow-3xl">
              <h2 className="text-5xl font-black mb-10 italic uppercase tracking-tighter">{t.about.title}</h2>
              <p className="text-2xl leading-relaxed mb-12 text-slate-300 font-medium">{t.about.description}</p>
              <div className="p-8 bg-[#00A99D]/20 rounded-3xl border-l-[12px] border-[#00A99D]">
                <p className="text-xl font-bold italic text-[#00A99D]">"{t.about.disclaimer}"</p>
              </div>
            </div>
            <div className="flex flex-col gap-10">
              <div className="flex items-center gap-10 p-10 bg-white/10 rounded-[3rem] border border-white/10">
                <div className="w-28 h-28 rounded-full bg-gradient-to-br from-[#00A859] to-[#8DC63F] flex items-center justify-center text-white text-5xl font-black shadow-2xl">
                  {t.about.founder.charAt(0)}
                </div>
                <div>
                  <h3 className="text-4xl font-black text-white uppercase tracking-tighter">{t.about.founder}</h3>
                  <p className="text-[#00A99D] font-black uppercase text-sm tracking-[0.3em] mt-2">{t.about.founderTitle}</p>
                </div>
              </div>
              <div className="bg-white/5 p-10 rounded-[3rem] border-l-[12px] border-emerald-500 shadow-xl">
                <p className="text-slate-300 leading-relaxed text-2xl italic font-medium">
                  {t.about.founderBio}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-24">
            <div>
              <h2 className="text-5xl md:text-7xl font-black mb-8 text-[#1B1464] tracking-tighter uppercase">{t.contact.title}</h2>
              <div className="w-24 h-3 bg-[#00A99D] mb-12 rounded-full"></div>
              <p className="text-slate-500 font-black text-2xl mb-16 uppercase tracking-widest">{t.contact.subtitle}</p>

              <div className="space-y-10">
                {t.contact.info.map((info, idx) => (
                  <div key={idx} className="flex items-start gap-8 group">
                    <div className="w-20 h-20 rounded-3xl bg-slate-100 text-[#1B1464] flex items-center justify-center flex-shrink-0 group-hover:bg-[#00A859] group-hover:text-white transition-all shadow-md">
                      {getIcon(info.icon, 'w-10 h-10')}
                    </div>
                    <div className="flex-1">
                      <div className="text-xs text-[#00A99D] uppercase font-black tracking-[0.2em] mb-2">{info.label}</div>
                      <a
                        href={info.href}
                        target={info.href?.startsWith('http') ? "_blank" : "_self"}
                        rel="noopener noreferrer"
                        className="text-[#1B1464] font-black text-2xl md:text-3xl leading-tight hover:text-[#00A99D] transition-colors break-words"
                      >
                        {info.value}
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              {/* Real Map Preview Placeholder */}
              <div className="mt-16 rounded-[3rem] overflow-hidden border-4 border-slate-100 shadow-2xl group relative cursor-pointer">
                <a href={t.contact.info.find(i => i.icon === 'location')?.href} target="_blank" rel="noopener noreferrer">
                  <img
                    src="https://maps.googleapis.com/maps/api/staticmap?center=Tirunelveli+Collectorate&zoom=15&size=800x400&maptype=roadmap&markers=color:red%7Clabel:R%7CTirunelveli+Collectorate&key=YOUR_API_KEY_HERE"
                    alt="Tirunelveli Map"
                    className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110 filter grayscale group-hover:grayscale-0"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=800&h=400";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1B1464]/80 to-transparent flex items-end p-10">
                    <div className="text-white">
                      <div className="font-black text-xl uppercase tracking-widest mb-2">View on Google Maps</div>
                      <p className="text-slate-300 font-medium">No. 3/1, Near Collectorate, Tirunelveli</p>
                    </div>
                  </div>
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-8 bg-gradient-to-br from-[#00A99D] to-[#1B1464] rounded-[5rem] opacity-10 blur-[100px]"></div>
              <div className="relative bg-white p-12 md:p-16 rounded-[4rem] border-2 border-slate-50 shadow-[0_50px_100px_-20px_rgba(27,20,100,0.15)]">
                <form className="space-y-8">
                  <div className="space-y-3">
                    <label className="text-xs font-black uppercase text-slate-400 tracking-[0.2em] ml-4">Full Name</label>
                    <input type="text" placeholder={t.contact.form.name} className="w-full px-8 py-5 rounded-3xl bg-slate-50 border-2 border-transparent focus:border-[#00A99D] focus:bg-white outline-none font-black placeholder:text-slate-300 transition-all text-lg" />
                  </div>
                  <div className="space-y-3">
                    <label className="text-xs font-black uppercase text-slate-400 tracking-[0.2em] ml-4">Email Address</label>
                    <input type="email" placeholder={t.contact.form.email} className="w-full px-8 py-5 rounded-3xl bg-slate-50 border-2 border-transparent focus:border-[#00A99D] focus:bg-white outline-none font-black placeholder:text-slate-300 transition-all text-lg" />
                  </div>
                  <div className="space-y-3">
                    <label className="text-xs font-black uppercase text-slate-400 tracking-[0.2em] ml-4">Requirement Details</label>
                    <textarea placeholder={t.contact.form.message} rows={5} className="w-full px-8 py-5 rounded-3xl bg-slate-50 border-2 border-transparent focus:border-[#00A99D] focus:bg-white outline-none font-black placeholder:text-slate-300 resize-none transition-all text-lg"></textarea>
                  </div>
                  <button className="w-full py-6 bg-[#1B1464] text-white font-black rounded-3xl hover:bg-[#00A859] shadow-2xl active:scale-95 transition-all flex items-center justify-center gap-4 text-xl uppercase tracking-[0.2em]">
                    <Send size={28} />
                    {t.contact.form.send}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1B1464] text-white py-24 px-4 overflow-hidden relative">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-16 border-b border-white/10 pb-20 mb-20">
            <div className="text-center lg:text-left flex flex-col items-center lg:items-start gap-6">
              <Logo className="w-32 h-32 md:w-40 md:h-40" dark />
              <div>
                <div className="text-3xl md:text-5xl font-black mb-2 leading-none tracking-tighter uppercase italic">RISING</div>
                <div className="text-lg md:text-2xl font-black mb-1 leading-none tracking-tighter uppercase opacity-80">DOCUMENTATION</div>
                <div className="text-[#00A99D] text-xs font-black uppercase tracking-[0.4em] mt-3 border-t border-[#00A99D]/30 pt-2 text-center lg:text-left">Registration Solutions</div>
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-10 text-xs font-black uppercase tracking-[0.3em] font-mono">
              <a href="#services" className="hover:text-[#00A99D] transition-colors">{t.nav.services}</a>
              <a href="#about" className="hover:text-[#00A99D] transition-colors">{t.nav.about}</a>
              <a href="#contact" className="hover:text-[#00A99D] transition-colors">{t.nav.contact}</a>
            </div>
          </div>
          <div className="text-center">
            <div className="inline-block px-8 py-3 bg-[#00A99D]/10 border border-[#00A99D]/20 text-[#00A99D] rounded-full text-[10px] font-black uppercase tracking-[0.4em] mb-10 shadow-lg">
              ⚠️ Independent Private Service Provider • Not a government portal
            </div>
            <p className="text-slate-400 text-xs font-bold leading-relaxed max-w-2xl mx-auto uppercase tracking-widest opacity-60">
              © 2025 {businessName}.
              <br />
              S. Jameela, Tirunelveli. Registration solutions and professional assistance for Tamil Nadu.
            </p>
          </div>
        </div>
      </footer>

      <style jsx global>{`
        @keyframes slide-down {
          from { opacity: 0; transform: translateY(-30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-slide-down { animation: slide-down 0.4s cubic-bezier(0.16, 1, 0.3, 1); }
        html { scroll-behavior: smooth; }
        body { color: #1e293b; background-color: #ffffff; }
      `}</style>
    </div>
  );
}

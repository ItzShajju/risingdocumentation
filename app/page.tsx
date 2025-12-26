'use client';

import React, { useState, useEffect } from 'react';
import { ChevronDown, Menu, X, Star, Users, Zap, FileText, CheckCircle, Send, MapPin, Phone, Mail, ChevronRight, Globe, ShieldAlert, Award } from 'lucide-react';

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

  const content = {
    en: {
      complianceBar: "Private Consultancy Service • Not a Government Portal",
      heroBadge: "Independent Private Service Provider",
      nav: { home: 'Home', services: 'Services', about: 'About', testimonials: 'Feedback', faq: 'FAQ', contact: 'Contact' },
      hero: {
        title: 'Rising Documentation',
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
        title: 'About Rising Documentation',
        description: 'Rising Documentation is an independent private consultancy led by S. Jameela. Based in Tirunelveli, we provide professional assistance to individuals navigating the complexities of legal documentation. We pride ourselves on transparency, reliability, and local procedural expertise.',
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
          { icon: 'phone', label: 'Phone', value: '95855 51021' },
          { icon: 'location', label: 'Office', value: 'Tirunelveli, Tamil Nadu' }
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
        title: 'Rising Documentation',
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
        title: 'Rising Documentation பற்றி',
        description: 'Rising Documentation என்பது எஸ். ஜமீலா தலைமையில் இயங்கும் ஒரு சுயாதீன தனியார் ஆலோசனை மையம். திருநெல்வேலியை அடிப்படையாகக் கொண்டு, ஆவணங்களின் சிக்கல்களைக் கையாளும் நபர்களுக்கு நாங்கள் தொழில்முறை உதவியை வழங்குகிறோம்.',
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
          { icon: 'phone', label: 'தொலைபேசி', value: '95855 51021' },
          { icon: 'location', label: 'அலுவலகம்', value: 'திருநெல்வேலி, தமிழ்நாடு' }
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
      default: return null;
    }
  };

  return (
    <div className="w-full bg-white overflow-hidden font-sans">
      {/* Compliance Top Bar */}
      <div className="bg-purple-900 text-white text-center py-2 px-4 text-xs sm:text-sm font-semibold sticky top-0 z-[60]">
        {t.complianceBar}
      </div>

      {/* Navigation */}
      <nav className="top-8 w-full bg-white/95 backdrop-blur-md z-50 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex flex-col">
              <div className="text-2xl font-bold text-purple-700">Rising</div>
              <div className="text-[10px] text-gray-500 uppercase tracking-widest leading-none">{t.heroBadge}</div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {Object.entries(t.nav).map(([key, label]) => (
                <a key={key} href={`#${key}`} className="text-gray-700 hover:text-purple-600 font-medium transition-all">
                  {label}
                </a>
              ))}
              <button
                onClick={() => setLanguage(language === 'en' ? 'ta' : 'en')}
                className="px-3 py-1.5 rounded-full border-2 border-purple-600 text-purple-600 font-bold hover:bg-purple-600 hover:text-white transition-all text-xs"
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
                <a key={key} href={`#${key}`} className="block px-4 py-3 text-gray-700 hover:bg-purple-50" onClick={() => setMobileMenuOpen(false)}>
                  {label}
                </a>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-gradient-to-br from-violet-50 to-white">
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <div className="inline-block px-4 py-1.5 rounded-full bg-purple-100 text-purple-700 text-sm font-bold mb-6 animate-bounce">
            {t.heroBadge}
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-slate-900 leading-tight">
            {t.hero.title}
          </h1>
          <p className="text-xl md:text-2xl font-bold text-purple-600 mb-6 italic">
            {t.hero.subtitle}
          </p>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            {t.hero.description}
          </p>

          {/* Warning Box */}
          <div className="max-w-xl mx-auto mb-10 p-4 bg-amber-50 border-l-4 border-amber-400 rounded-r-lg flex items-start gap-4 text-left">
            <ShieldAlert className="text-amber-500 flex-shrink-0 mt-1" size={24} />
            <p className="text-amber-800 text-sm font-semibold uppercase tracking-tight">
              {t.hero.warning}
            </p>
          </div>

          <a href="#contact" className="inline-flex items-center gap-2 px-8 py-4 bg-purple-600 text-white font-bold rounded-xl hover:bg-purple-700 shadow-xl transition-all transform hover:scale-105 active:scale-95">
            {t.hero.cta}
            <ChevronRight size={20} />
          </a>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
            {t.hero.stats.map((stat, index) => (
              <div key={index} className="p-4 bg-white shadow-lg rounded-2xl border border-purple-50">
                <div className="text-2xl font-bold text-purple-700">{stat.value}</div>
                <div className="text-xs text-gray-500 font-medium uppercase">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">{t.services.title}</h2>
            <p className="text-gray-600 font-medium">{t.services.subtitle}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {t.services.items.map((service, index) => (
              <div key={index} className="group p-8 bg-slate-50 rounded-2xl border border-slate-200 hover:border-purple-300 hover:shadow-2xl transition-all">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-xl bg-purple-600 flex items-center justify-center text-white flex-shrink-0 group-hover:rotate-6 transition-transform">
                    {getIcon(service.icon, 'w-8 h-8')}
                  </div>
                  <div className="flex-1">
                    <span className="inline-block px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-[10px] font-bold uppercase mb-2">
                      {service.badge}
                    </span>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{service.title}</h3>
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">{service.description}</p>
                    <ul className="grid grid-cols-2 gap-2">
                      {service.features.map((f, i) => (
                        <li key={i} className="flex items-center gap-2 text-xs text-gray-700">
                          <CheckCircle className="text-green-500 w-3 h-3" />
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
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-purple-600 rounded-3xl p-12 text-white shadow-2xl relative overflow-hidden">
              <FileText className="absolute bottom-[-20px] right-[-20px] w-64 h-64 opacity-10 rotate-12" />
              <h2 className="text-3xl font-bold mb-6">{t.about.title}</h2>
              <p className="text-lg leading-relaxed mb-8 opacity-90">{t.about.description}</p>
              <div className="p-4 bg-white/10 rounded-xl border border-white/20">
                <p className="text-sm font-medium italic mb-0">"{t.about.disclaimer}"</p>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-6 mb-8 p-6 bg-white rounded-2xl shadow-lg border border-purple-50">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center text-white text-3xl font-bold">
                  {t.about.founder.charAt(0)}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">{t.about.founder}</h3>
                  <p className="text-purple-600 font-bold uppercase text-xs tracking-widest">{t.about.founderTitle}</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed text-lg italic border-l-4 border-purple-400 pl-6">
                {t.about.founderBio}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-12">{t.testimonials.title}</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {t.testimonials.items.map((item, i) => (
              <div key={i} className="p-8 bg-slate-50 rounded-2xl relative">
                <Star className="text-yellow-400 w-12 h-12 absolute top-[-24px] right-8 opacity-20" size={48} />
                <p className="text-gray-700 italic mb-6 text-lg">"{item.text}"</p>
                <div className="font-bold text-purple-700">{item.author}</div>
                <div className="text-xs text-gray-500 uppercase tracking-tighter">{item.role}, {item.company}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Legal Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-amber-50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block p-3 bg-amber-400 text-white rounded-full mb-6">
            <ShieldAlert size={32} />
          </div>
          <h2 className="text-3xl font-bold mb-10 text-amber-900">{t.legalSection.title}</h2>
          <div className="grid gap-4 text-left">
            {t.legalSection.points.map((point, i) => (
              <div key={i} className="flex gap-4 p-4 bg-white rounded-xl shadow-sm border border-amber-200">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-amber-500 text-white flex items-center justify-center text-xs font-bold">{i + 1}</span>
                <p className="text-amber-900 font-semibold">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-slate-900">{t.contact.title}</h2>
              <p className="text-gray-600 mb-10">{t.contact.subtitle}</p>
              <div className="space-y-6">
                {t.contact.info.map((info, idx) => (
                  <div key={idx} className="flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center group-hover:bg-purple-600 group-hover:text-white transition-all">
                      {getIcon(info.icon, 'w-6 h-6')}
                    </div>
                    <div>
                      <div className="text-xs text-gray-500 uppercase font-bold">{info.label}</div>
                      <div className="text-slate-900 font-bold text-lg">{info.value}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-12 p-6 bg-slate-900 text-white rounded-2xl relative overflow-hidden">
                <Award className="absolute top-[-10px] right-[-10px] w-24 h-24 opacity-10" />
                <h4 className="font-bold mb-2">Registered Entity</h4>
                <p className="text-sm opacity-80">Proudly serving the Tirunelveli community with transparent and professional documentation consultancy.</p>
              </div>
            </div>
            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200 shadow-xl">
              <form className="space-y-4">
                <input type="text" placeholder={t.contact.form.name} className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-purple-600 outline-none" />
                <input type="email" placeholder={t.contact.form.email} className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-purple-600 outline-none" />
                <textarea placeholder={t.contact.form.message} rows={5} className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-purple-600 outline-none resize-none"></textarea>
                <button className="w-full py-4 bg-purple-600 text-white font-bold rounded-xl hover:bg-purple-700 shadow-lg active:scale-95 transition-all flex items-center justify-center gap-2">
                  <Send size={18} />
                  {t.contact.form.send}
                </button>
              </form>
              <div className="mt-6 text-center">
                <p className="text-[10px] text-gray-500 uppercase font-bold tracking-widest leading-tight">
                  By submitting, you agree to receive a professional consultation call.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-white py-12 px-4 shadow-inner">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
            <div className="text-center md:text-left">
              <div className="text-2xl font-bold mb-1">Rising Documentation</div>
              <div className="text-purple-500 text-xs font-bold uppercase tracking-widest">{t.heroBadge}</div>
            </div>
            <div className="flex gap-6 text-gray-400 text-xs font-bold uppercase">
              <a href="#services" className="hover:text-white">{t.nav.services}</a>
              <a href="#about" className="hover:text-white">{t.nav.about}</a>
              <a href="#contact" className="hover:text-white">{t.nav.contact}</a>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 text-center">
            <div className="inline-block px-4 py-1.5 bg-amber-500/10 border border-amber-500/20 text-amber-500 rounded-full text-[10px] font-bold uppercase mb-4">
              ⚠️ Not affiliated with any government department
            </div>
            <p className="text-gray-500 text-xs">
              © 2025 Rising Documentation. All rights reserved. S. Jameela, Tirunelveli.
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
      `}</style>
    </div>
  );
}

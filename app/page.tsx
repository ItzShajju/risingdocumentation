'use client';

import { useState } from 'react';

export default function Home() {
  const [language, setLanguage] = useState<'en' | 'ta'>('en');

  const content = {
    en: {
      hero: {
        title: 'Rising Documentation',
        subtitle: 'Professional Assistance for',
        highlight: 'Legal Documentation Services',
        tagline: 'Helping you navigate government procedures in Tirunelveli',
        disclaimer: 'We are a private consultancy. We assist you with documentation - we do not provide government services.',
        cta: 'Get Assistance',
        ctaSecondary: 'Our Services',
      },
      about: {
        title: 'About Us',
        description:
          'Rising Documentation is a consultancy based in Tirunelveli. We help clients navigate complex administrative procedures by providing guidance, document preparation assistance, and support throughout government registration processes. We do not represent any government department.',
        owner: 'S. Jameela',
        ownerTitle: 'Founder & Consultant',
        contact: '95855 51021',
        email: 'rrisingdocumentation@gmail.com',
      },
      services: {
        title: 'Our Services',
        subtitle: 'Professional guidance for your documentation needs',
        items: [
          {
            title: 'Property Registration Assistance',
            tamil: 'பத்திர பதிவு உதவி',
            description: 'Guidance and support for property document registration procedures',
            icon: '🏠',
          },
          {
            title: 'Marriage Registration Assistance',
            tamil: 'திருமண பதிவு உதவி',
            description: 'Help with marriage certificate registration process',
            icon: '💍',
          },
          {
            title: 'EC Retrieval Assistance',
            tamil: 'விலங்க சான்று உதவி',
            description: 'Support for obtaining Encumbrance Certificates',
            icon: '📜',
          },
          {
            title: 'Document Copy Assistance',
            tamil: 'ஆவண நகல் உதவி',
            description: 'Help obtaining certified copies of legal documents',
            icon: '📄',
          },
        ],
      },
      process: {
        title: 'How We Help',
        subtitle: 'Simple, step-by-step guidance',
        steps: [
          {
            number: '01',
            title: 'Consultation',
            description: 'Initial consultation to understand your requirements',
          },
          {
            number: '02',
            title: 'Document Preparation',
            description: 'Guide you on required documents and help with preparation',
          },
          {
            number: '03',
            title: 'Registration Support',
            description: 'Accompany and assist during government office visits',
          },
          {
            number: '04',
            title: 'Follow-up',
            description: 'Track progress and ensure documentation is complete',
          },
        ],
      },
      marriageDocs: {
        title: 'Marriage Registration Document Checklist',
        subtitle: 'திருமண பதிவிற்கான ஆவணங்கள்',
        note: 'We help you prepare these documents - actual registration is done at government office',
        required: [
          { en: 'Certificate (சான்றிதழ்)', count: 2 },
          { en: 'Aadhaar (ஆதார்)', count: 2 },
          { en: 'Family Card (குடும்ப அட்டை)', count: 2 },
          { en: 'Witness (சாட்சி)', count: 3 },
          { en: 'Affidavit (பத்திரிக்கை)', count: 2 },
          { en: 'Photo (போட்டோ)', count: 2 },
          { en: 'Location Certificate (நடந்த இடத்திற்கான சான்றிதழ்)', count: 2 },
        ],
      },
      features: {
        title: 'Why Choose Us',
        items: [
          {
            icon: '🤝',
            title: 'Local Expertise',
            description: 'Experienced in Tirunelveli registration procedures',
          },
          {
            icon: '💰',
            title: 'Transparent Pricing',
            description: 'Clear fees disclosed upfront - no hidden charges',
          },
          {
            icon: '🌐',
            title: 'Bilingual Support',
            description: 'Service available in Tamil and English',
          },
          {
            icon: '📋',
            title: 'Complete Guidance',
            description: 'End-to-end support from document prep to submission',
          },
          {
            icon: '⚡',
            title: 'Time-Saving',
            description: 'Help you avoid common mistakes and delays',
          },
          {
            icon: '✓',
            title: 'Professional Service',
            description: 'Dedicated assistance throughout the process',
          },
        ],
      },
      legal: {
        title: 'Legal Disclaimer',
        points: [
          'Rising Documentation is a private consultancy service and is not affiliated with, endorsed by, or representative of any government department or agency.',
          'We provide paid assistance and guidance for documentation procedures. All official registrations are conducted by authorized government offices only.',
          'Government fees are paid directly by clients to government offices. Our consultancy fees are separate and clearly disclosed.',
          'We do not process, approve, or issue any government documents. We only assist in preparation and navigation of procedures.',
          'All services are subject to applicable laws and government office requirements.',
        ],
      },
      cta: {
        title: 'Need Documentation Assistance?',
        subtitle: 'Contact us today for professional guidance',
        button: 'Call for Consultation',
        whatsapp: 'WhatsApp Us',
      },
      footer: {
        rights: '© 2024 Rising Documentation. All rights reserved.',
        tagline: 'Professional assistance for your documentation needs',
        disclaimer: 'Not affiliated with any government department',
      },
    },
    ta: {
      hero: {
        title: 'ரைசிங் டாக்குமென்டேஷன்',
        subtitle: 'தொழில்முறை உதவி',
        highlight: 'சட்ட ஆவண சேவைகளுக்கு',
        tagline: 'திருநெல்வேலியில் அரசு நடைமுறைகளை நீங்கள் கடக்க உதவுகிறோம்',
        disclaimer: 'நாங்கள் ஒரு தனியார் ஆலோசனை நிறுவனம். நாங்கள் ஆவணங்களுக்கு உதவுகிறோம் - அரசு சேவைகளை வழங்கவில்லை.',
        cta: 'உதவி பெறுங்கள்',
        ctaSecondary: 'எங்கள் சேவைகள்',
      },
      about: {
        title: 'எங்களைப் பற்றி',
        description:
          'ரைசிங் டாக்குமென்டேஷன் திருநெல்வேலியை தளமாகக் கொண்ட ஆலோசனை நிறுவனம். வாடிக்கையாளர்கள் சிக்கலான நிர்வாக நடைமுறைகளை கடக்க வழிகாட்டுதல், ஆவண தயாரிப்பு உதவி மற்றும் அரசு பதிவு செயல்முறைகள் முழுவதும் ஆதரவை வழங்குகிறோம். நாங்கள் எந்த அரசு துறையையும் பிரதிநிதித்துவப்படுத்துவதில்லை.',
        owner: 'எஸ். ஜமீலா',
        ownerTitle: 'நிறுவனர் & ஆலோசகர்',
        contact: '95855 51021',
        email: 'rrisingdocumentation@gmail.com',
      },
      services: {
        title: 'எங்கள் சேவைகள்',
        subtitle: 'உங்கள் ஆவண தேவைகளுக்கு தொழில்முறை வழிகாட்டுதல்',
        items: [
          {
            title: 'சொத்து பதிவு உதவி',
            tamil: 'பத்திர பதிவு உதவி',
            description: 'சொத்து ஆவண பதிவு நடைமுறைகளுக்கான வழிகாட்டுதல் மற்றும் ஆதரவு',
            icon: '🏠',
          },
          {
            title: 'திருமண பதிவு உதவி',
            tamil: 'திருமண பதிவு உதவி',
            description: 'திருமண சான்றிதழ் பதிவு செயல்முறைக்கான உதவி',
            icon: '💍',
          },
          {
            title: 'EC மீட்டெடுப்பு உதவி',
            tamil: 'விலங்க சான்று உதவி',
            description: 'விலங்கு சான்றிதழ்களைப் பெறுவதற்கான ஆதரவு',
            icon: '📜',
          },
          {
            title: 'ஆவண நகல் உதவி',
            tamil: 'ஆவண நகல் உதவி',
            description: 'சட்ட ஆவணங்களின் சான்றளிக்கப்பட்ட நகல்களைப் பெற உதவி',
            icon: '📄',
          },
        ],
      },
      process: {
        title: 'நாங்கள் எவ்வாறு உதவுகிறோம்',
        subtitle: 'எளிமையான, படிப்படியான வழிகாட்டுதல்',
        steps: [
          {
            number: '01',
            title: 'ஆலோசனை',
            description: 'உங்கள் தேவைகளைப் புரிந்துகொள்ள ஆரம்ப ஆலோசனை',
          },
          {
            number: '02',
            title: 'ஆவண தயாரிப்பு',
            description: 'தேவையான ஆவணங்கள் குறித்து உங்களுக்கு வழிகாட்டி தயாரிப்புக்கு உதவுக',
          },
          {
            number: '03',
            title: 'பதிவு ஆதரவு',
            description: 'அரசு அலுவலக வருகைகளின் போது உடன்வந்து உதவுக',
          },
          {
            number: '04',
            title: 'பின்தொடர்தல்',
            description: 'முன்னேற்றத்தை கண்காணித்து ஆவணங்கள் முழுமையானதா என உறுதிப்படுத்துக',
          },
        ],
      },
      marriageDocs: {
        title: 'திருமண பதிவு ஆவண பட்டியல்',
        subtitle: 'Marriage Registration Documents',
        note: 'இந்த ஆவணங்களைத் தயாரிக்க நாங்கள் உதவுகிறோம் - உண்மையான பதிவு அரசு அலுவலகத்தில் செய்யப்படுகிறது',
        required: [
          { en: 'சான்றிதழ் (Certificate)', count: 2 },
          { en: 'ஆதார் (Aadhaar)', count: 2 },
          { en: 'குடும்ப அட்டை (Family Card)', count: 2 },
          { en: 'சாட்சி (Witness)', count: 3 },
          { en: 'பத்திரிக்கை (Affidavit)', count: 2 },
          { en: 'போட்டோ (Photo)', count: 2 },
          { en: 'நடந்த இடத்திற்கான சான்றிதழ் (Location Certificate)', count: 2 },
        ],
      },
      features: {
        title: 'எங்களை ஏன் தேர்வு செய்ய வேண்டும்',
        items: [
          {
            icon: '🤝',
            title: 'உள்ளூர் நிபுணத்துவம்',
            description: 'திருநெல்வேலி பதிவு நடைமுறைகளில் அனுபவம்',
          },
          {
            icon: '💰',
            title: 'வெளிப்படையான விலை நிர்ணயம்',
            description: 'தெளிவான கட்டணங்கள் முன்கூட்டியே வெளியிடப்பட்டவை - மறைக்கப்பட்ட கட்டணங்கள் இல்லை',
          },
          {
            icon: '🌐',
            title: 'இருமொழி ஆதரவு',
            description: 'தமிழ் மற்றும் ஆங்கிலத்தில் சேவை கிடைக்கிறது',
          },
          {
            icon: '📋',
            title: 'முழுமையான வழிகாட்டுதல்',
            description: 'ஆவண தயாரிப்பு முதல் சமர்ப்பிப்பு வரை முழுமையான ஆதரவு',
          },
          {
            icon: '⚡',
            title: 'நேரம் சேமிப்பு',
            description: 'பொதுவான தவறுகள் மற்றும் தாமதங்களை தவிர்க்க உதவுகிறோம்',
          },
          {
            icon: '✓',
            title: 'தொழில்முறை சேவை',
            description: 'செயல்முறை முழுவதும் அர்ப்பணிப்புடன் உதவி',
          },
        ],
      },
      legal: {
        title: 'சட்ட மறுப்பு',
        points: [
          'ரைசிங் டாக்குமென்டேஷன் ஒரு தனியார் ஆலோசனை சேவையாகும் மற்றும் எந்த அரசு துறை அல்லது நிறுவனத்துடனும் இணைக்கப்படவில்லை, அங்கீகரிக்கப்படவில்லை அல்லது பிரதிநிதித்துவப்படுத்தவில்லை.',
          'நாங்கள் ஆவண நடைமுறைகளுக்கான கட்டண உதவி மற்றும் வழிகாட்டுதலை வழங்குகிறோம். அனைத்து அதிகாரப்பூர்வ பதிவுகளும் அங்கீகரிக்கப்பட்ட அரசு அலுவலகங்களால் மட்டுமே நடத்தப்படுகின்றன.',
          'அரசு கட்டணங்கள் வாடிக்கையாளர்களால் அரசு அலுவலகங்களுக்கு நேரடியாக செலுத்தப்படுகின்றன. எங்கள் ஆலோசனை கட்டணங்கள் தனியாக உள்ளன மற்றும் தெளிவாக வெளியிடப்படுகின்றன.',
          'நாங்கள் எந்த அரசு ஆவணங்களையும் செயலாக்கவோ, அங்கீகரிக்கவோ அல்லது வெளியிடவோ இல்லை. நாங்கள் தயாரிப்பு மற்றும் நடைமுறைகளை கடப்பதில் மட்டுமே உதவுகிறோம்.',
          'அனைத்து சேவைகளும் பொருந்தக்கூடிய சட்டங்கள் மற்றும் அரசு அலுவலக தேவைகளுக்கு உட்பட்டவை.',
        ],
      },
      cta: {
        title: 'ஆவண உதவி தேவையா?',
        subtitle: 'தொழில்முறை வழிகாட்டுதலுக்கு இன்று எங்களை தொடர்பு கொள்ளுங்கள்',
        button: 'ஆலோசனைக்கு அழைக்கவும்',
        whatsapp: 'WhatsApp செய்யுங்கள்',
      },
      footer: {
        rights: '© 2024 ரைசிங் டாக்குமென்டேஷன். அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.',
        tagline: 'உங்கள் ஆவண தேவைகளுக்கு தொழில்முறை உதவி',
        disclaimer: 'எந்த அரசு துறையுடனும் இணைக்கப்படவில்லை',
      },
    },
  };

  const t = content[language];

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-white to-purple-50">
      {/* Header */}
      <header className="sticky top-0 left-0 right-0 z-50 glass shadow-md border-b border-purple-100">
        <div className="container mx-auto px-4 py-3.5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-full bg-gradient-to-br from-purple-600 to-violet-600 flex items-center justify-center text-white font-bold text-lg shadow-lg">
                R
              </div>
              <div>
                <h2 className="font-bold text-base md:text-lg text-gray-900">Rising Documentation</h2>
                <p className="text-xs text-gray-600">{t.about.contact}</p>
              </div>
            </div>
            <button
              onClick={() => setLanguage(language === 'en' ? 'ta' : 'en')}
              className="btn btn-secondary text-sm px-4 py-2 border-purple-600 text-purple-700 hover:bg-purple-600 hover:text-white"
            >
              {language === 'en' ? 'தமிழ்' : 'English'}
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-24 pb-10" style={{ background: 'var(--gradient-hero)' }}>
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <div className="animate-fadeInUp">
              <h1 className="mb-3">
                {t.hero.title}
              </h1>
              <p className="text-base sm:text-lg mb-2 text-gray-700 font-medium">
                {t.hero.subtitle}
              </p>
              <p className="text-xl sm:text-2xl mb-4 font-bold bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent">
                {t.hero.highlight}
              </p>
              <p className="text-sm sm:text-base text-gray-600 mb-5 max-w-2xl mx-auto leading-relaxed">
                {t.hero.tagline}
              </p>

              {/* Disclaimer */}
              <div className="bg-amber-50 border-l-4 border-amber-500 p-3 mb-6 max-w-2xl mx-auto text-left rounded-r-md shadow-sm">
                <div className="flex items-start gap-2">
                  <span className="text-base flex-shrink-0">⚠️</span>
                  <p className="text-xs sm:text-sm font-medium text-amber-900 leading-snug">
                    {t.hero.disclaimer}
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
                <a href="#contact" className="btn bg-gradient-to-r from-purple-600 to-violet-600 text-white hover:from-purple-700 hover:to-violet-700 shadow-lg">
                  <span>{t.hero.cta}</span>
                  <span>→</span>
                </a>
                <a href="#services" className="btn bg-white text-purple-700 border-2 border-purple-600 hover:bg-purple-50">
                  {t.hero.ctaSecondary}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section bg-white border-y border-gray-200">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center animate-fadeInUp">
            <h2 className="mb-4 bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent">{t.about.title}</h2>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              {t.about.description}
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section bg-gradient-to-br from-purple-50 to-violet-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fadeInUp">
            <h2 className="mb-3 bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent">{t.services.title}</h2>
            <p className="text-sm sm:text-base text-gray-600">{t.services.subtitle}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {t.services.items.map((service, index) => (
              <div
                key={index}
                className="card animate-fadeInUp text-center border-2 border-purple-100 hover:border-purple-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl mb-3 animate-float" style={{ animationDelay: `${index * 0.2}s` }}>
                  {service.icon}
                </div>
                <h3 className="text-base font-bold mb-2 text-gray-900">{service.title}</h3>
                <p className="text-sm text-purple-600 font-semibold mb-2">{service.tamil}</p>
                <p className="text-xs text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Marriage Documents Section */}
      <section className="section bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10 animate-fadeInUp">
              <h2 className="mb-2 bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent">{t.marriageDocs.title}</h2>
              <p className="text-sm sm:text-base text-gray-600 mb-3">{t.marriageDocs.subtitle}</p>
              <div className="bg-blue-50 border-l-4 border-blue-500 p-3 text-left mx-auto max-w-2xl">
                <p className="text-xs sm:text-sm font-medium text-blue-900">ℹ️ {t.marriageDocs.note}</p>
              </div>
            </div>
            <div className="card border-2 border-purple-100">
              <ul className="space-y-3">
                {t.marriageDocs.required.map((doc, index) => (
                  <li
                    key={index}
                    className="flex items-center justify-between p-3 bg-purple-50 rounded-lg shadow-sm animate-slideInLeft hover:bg-purple-100 transition-colors"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <span className="text-sm font-medium text-gray-800">{doc.en}</span>
                    <span className="text-xl font-bold text-purple-600 bg-white px-3 py-1.5 rounded-full">{doc.count}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section bg-gradient-to-br from-violet-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fadeInUp">
            <h2 className="mb-3 bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent">{t.process.title}</h2>
            <p className="text-sm sm:text-base text-gray-600">{t.process.subtitle}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.process.steps.map((step, index) => (
              <div
                key={index}
                className="relative animate-fadeInUp text-center"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-purple-600 to-violet-600 text-white font-bold text-xl mb-3 shadow-lg">
                  {step.number}
                </div>
                <h3 className="text-base font-bold mb-2 text-gray-900">{step.title}</h3>
                <p className="text-xs text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fadeInUp">
            <h2 className="mb-3 bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent">{t.features.title}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {t.features.items.map((feature, index) => (
              <div
                key={index}
                className="card animate-scaleIn border-2 border-purple-100 hover:border-purple-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-purple-600 to-violet-600 flex items-center justify-center text-white font-bold text-lg">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-sm font-bold mb-1.5 text-gray-900">{feature.title}</h3>
                    <p className="text-xs text-gray-600">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Legal Disclaimer Section */}
      <section className="section bg-gradient-to-br from-gray-100 to-gray-200 border-y-4 border-purple-600">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10 animate-fadeInUp">
              <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-purple-600 text-white rounded-full mb-4">
                <span className="text-xl">⚖️</span>
                <h2 className="text-xl font-bold">{t.legal.title}</h2>
              </div>
            </div>
            <div className="card bg-white border-2 border-purple-300 shadow-xl">
              <ul className="space-y-3">
                {t.legal.points.map((point, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 p-3 bg-purple-50 rounded-lg animate-slideInLeft"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold text-xs">
                      {index + 1}
                    </span>
                    <p className="text-xs sm:text-sm text-gray-800 leading-relaxed pt-0.5">{point}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section bg-gradient-to-br from-purple-700 to-violet-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="animate-fadeInUp">
              <h2 className="mb-4 text-white">{t.cta.title}</h2>
              <p className="text-base sm:text-lg mb-6 text-purple-100">{t.cta.subtitle}</p>
              <div className="space-y-5">
                <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
                  <a
                    href="tel:9585551021"
                    className="btn bg-white text-purple-700 hover:bg-purple-50 shadow-xl hover:shadow-2xl font-bold"
                  >
                    <span>📞</span>
                    <span>95855 51021</span>
                  </a>
                  <a
                    href="https://wa.me/919585551021"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn bg-green-500 text-white hover:bg-green-600 shadow-xl hover:shadow-2xl font-bold"
                  >
                    <span>💬</span>
                    <span>{t.cta.whatsapp}</span>
                  </a>
                  <a
                    href="mailto:rrisingdocumentation@gmail.com"
                    className="btn bg-white text-purple-700 hover:bg-purple-50 shadow-xl hover:shadow-2xl font-bold"
                  >
                    <span>✉️</span>
                    <span>Email</span>
                  </a>
                </div>
                <div className="glass-dark p-5 rounded-xl inline-block border border-white/30">
                  <p className="text-base font-semibold mb-1">{t.about.owner}</p>
                  <p className="text-sm text-purple-200 mb-2">{t.about.ownerTitle}</p>
                  <p className="text-sm text-purple-100">{t.about.email}</p>
                  <p className="text-xs text-purple-300 mt-2">📍 Tirunelveli, Tamil Nadu</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-6 border-t-4 border-purple-600">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-600 to-violet-600 flex items-center justify-center text-white font-bold text-lg shadow-lg">
                R
              </div>
              <h3 className="text-lg font-bold">Rising Documentation</h3>
            </div>
            <p className="text-sm text-gray-400 mb-2">{t.footer.tagline}</p>
            <p className="text-xs text-amber-400 font-semibold mb-3">⚠️ {t.footer.disclaimer}</p>
            <div className="text-xs text-gray-500 space-y-1">
              <p>📍 Tirunelveli, Tamil Nadu, India</p>
              <p>{t.footer.rights}</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

import { Language } from './types';

export interface Translations {
  nav: {
    about: string;
    education: string;
    acca: string;
    skills: string;
    projects: string;
    credentials: string;
    contact: string;
    ownerAccess: string;
    ownerMode: string;
    connect: string;
    changeLanguage: string;
  };
  hero: {
    statusBadge: string;
    hiIm: string;
    tagline: string;
    bio: string;
    locationText: string;
    uniText: string;
    accaRegText: string;
    viewProjects: string;
    accaTranscript: string;
    studentId: string;
    viewFullPhoto: string;
    connectWithMe: string;
    metricPapers: string;
    metricPapersSub: string;
    metricUniYear: string;
    metricUniYearSub: string;
    metricStack: string;
    metricStackSub: string;
    metricPlatform: string;
    metricPlatformSub: string;
    verifiedAcademicId: string;
    inspect: string;
  };
  about: {
    badge: string;
    title: string;
    subtitle: string;
    journeyTitle: string;
    p1: string;
    p2: string;
    p3: string;
    dobLabel: string;
    originLabel: string;
    originVal: string;
    pillar1Title: string;
    pillar1Desc: string;
    pillar2Title: string;
    pillar2Desc: string;
    pillar3Title: string;
    pillar3Desc: string;
    pillar4Title: string;
    pillar4Desc: string;
  };
  education: {
    badge: string;
    title: string;
    subtitle: string;
    yearBadge: string;
    activeStatus: string;
    majorTitle: string;
    facultyTitle: string;
    description: string;
    viewIdBtn: string;
    cardTitle: string;
    cardVerified: string;
    institutionLabel: string;
    majorLabel: string;
    groupLabel: string;
    docNumLabel: string;
    pnflLabel: string;
    openDocBtn: string;
  };
  acca: {
    badge: string;
    title: string;
    subtitle: string;
    verifyTranscriptBtn: string;
    regNumLabel: string;
    registeredOn: string;
    syllabusLabel: string;
    completedLabel: string;
    completedSub: string;
    progressLabel: string;
    passedSectionTitle: string;
    roadmapSectionTitle: string;
    verifiedRecord: string;
    completedCheck: string;
    inProgressBadge: string;
    plannedBadge: string;
  };
  skills: {
    badge: string;
    title: string;
    subtitle: string;
    spectrumTitle: string;
  };
  projects: {
    badge: string;
    title: string;
    subtitle: string;
    flagshipBadge: string;
    viewRepo: string;
    liveService: string;
    readArch: string;
    targetSectors: string;
    targetSectorsVal: string;
    currencySupport: string;
    currencySupportVal: string;
    compliance: string;
    complianceVal: string;
    highlightNote: string;
    learnDetails: string;
    code: string;
    techAndConcepts: string;
    close: string;
    filterAll: string;
  };
  credentials: {
    badge: string;
    title: string;
    subtitle: string;
    verifiedRecord: string;
    previewDoc: string;
    downloadDoc: string;
    statusLabel: string;
  };
  contact: {
    badge: string;
    title: string;
    subtitle: string;
    channelsTitle: string;
    telegramTitle: string;
    emailTitle: string;
    locationTitle: string;
    githubTitle: string;
    formTitle: string;
    formSubtitle: string;
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    sendBtn: string;
    redirectingTitle: string;
    redirectingDesc: string;
    sendAnother: string;
  };
  footer: {
    tagline: string;
    allRights: string;
    regNotice: string;
    ownerLogin: string;
    ownerMode: string;
  };
  owner: {
    portalTitle: string;
    unlockedBadge: string;
    editPermsDesc: string;
    protectedDesc: string;
    enterPinTitle: string;
    enterPinDesc: string;
    pinPlaceholder: string;
    incorrectPin: string;
    unlockBtn: string;
    tabPersonal: string;
    tabEducation: string;
    tabAcca: string;
    tabProjects: string;
    tabSkills: string;
    tabSecurity: string;
    saveAll: string;
    lockAndExit: string;
    savedNotice: string;
  };
}

export const TRANSLATIONS: Record<Language, Translations> = {
  // ================= ENGLISH =================
  en: {
    nav: {
      about: "About",
      education: "Education",
      acca: "ACCA",
      skills: "Skills",
      projects: "Projects",
      credentials: "Credentials",
      contact: "Contact",
      ownerAccess: "Owner Access",
      ownerMode: "Owner Mode",
      connect: "Let's Connect",
      changeLanguage: "Language",
    },
    hero: {
      statusBadge: "Open to Financial Analyst, Data Analytics & Fintech Roles",
      hiIm: "Hi, I'm",
      tagline: "Economics & Data Analytics Specialist | ACCA Candidate | Fintech Developer",
      bio: "Undergraduate student at New Uzbekistan University specializing in Economics and Data Analytics, and active ACCA Candidate with successful completions in Financial Reporting (FR) and Financial Accounting (FA). Passionate about combining international accounting standards (IFRS), quantitative economic modeling, and modern full-stack web applications to solve complex business and financial challenges.",
      locationText: "Tashkent, Uzbekistan (Origin: Rishton, Fergana)",
      uniText: "New Uzbekistan University (Year 3)",
      accaRegText: "ACCA Reg: #6827910",
      viewProjects: "View Projects",
      accaTranscript: "ACCA Transcript",
      studentId: "Student ID",
      viewFullPhoto: "View Photo",
      connectWithMe: "Connect:",
      metricPapers: "Papers",
      metricPapersSub: "FR (64%) • FA (65%) • BT Exemption",
      metricUniYear: "Year",
      metricUniYearSub: "Group JED1 • Honors Track",
      metricStack: "IFRS & Analytics",
      metricStackSub: "Excel, Python, Next.js",
      metricPlatform: "Moliya ERP",
      metricPlatformSub: "Live Financial Platform",
      verifiedAcademicId: "Verified Academic ID",
      inspect: "Inspect",
    },
    about: {
      badge: "Profile & Trajectory",
      title: "About Ikhtiyorjon Nabiyev",
      subtitle: "Driven by analytical precision, intellectual curiosity, and a commitment to global excellence in finance and quantitative analytics.",
      journeyTitle: "My Journey & Mission",
      p1: "Originally from Rishton, Fergana, Uzbekistan, I am currently a 3rd-year undergraduate student at New Uzbekistan University in Tashkent, pursuing an intensive degree in Economics and Data Analytics.",
      p2: "Parallel to my academic curriculum, I am an active candidate with the Association of Chartered Certified Accountants (ACCA, UK), having already secured exemptions in Business and Technology (BT), achieved a 65% CBE pass in Financial Accounting (FA), and successfully completed Financial Reporting (FR) with 64%.",
      p3: "What distinguishes my perspective is the intersection between deep financial discipline and modern software engineering. Rather than treating finance as abstract numbers on a spreadsheet, I build interactive digital systems—like Moliya—that automate financial statements, handle dual-currency tracking, and generate real-time business intelligence for decision-makers.",
      dobLabel: "Date of Birth:",
      originLabel: "Origin:",
      originVal: "Rishton, Fergana",
      pillar1Title: "ACCA & IFRS Reporting",
      pillar1Desc: "Comprehensive mastery of international financial reporting standards, consolidated financial statements, accounting principles, and ethical standards.",
      pillar2Title: "Quantitative Economics",
      pillar2Desc: "Strong foundation in econometrics, statistical testing, microeconomic modeling, macroeconomic policy analysis, and financial forecasting.",
      pillar3Title: "Fintech & Web Architecture",
      pillar3Desc: "Translating sophisticated business rules and financial algorithms into fast, intuitive Next.js and React web applications (such as Moliya ERP).",
      pillar4Title: "Global Mindset & Multilingual",
      pillar4Desc: "Multilingual proficiency (Uzbek, English, Russian) enabling collaboration with multinational corporate teams, audit firms, and international institutions.",
    },
    education: {
      badge: "Academic Background",
      title: "Education & University Excellence",
      subtitle: "Studying at New Uzbekistan University, one of the nation's leading institutions focused on global educational standards, rigorous quantitative analytics, and modern economic theory.",
      yearBadge: "3rd Year • Full-time (Kunduzgi)",
      activeStatus: "Status: Active Student",
      majorTitle: "BSc in Economics and Data Analytics",
      facultyTitle: "School of Humanities, Exact and Social Sciences",
      description: "Rigorous academic curriculum covering advanced micro & macroeconomics, econometrics, statistical modeling, data analytics, financial mathematics, and algorithmic problem solving at one of Uzbekistan's premier higher education institutions.",
      viewIdBtn: "View Official Student ID Card",
      cardTitle: "STUDENT IDENTITY CARD",
      cardVerified: "Verified",
      institutionLabel: "Institution:",
      majorLabel: "Major:",
      groupLabel: "Group & Year:",
      docNumLabel: "Card Number:",
      pnflLabel: "JShShIR (PINFL):",
      openDocBtn: "Open Full Size Document",
    },
    acca: {
      badge: "Global Professional Qualification",
      title: "ACCA Journey & Credentials",
      subtitle: "Candidate with the Association of Chartered Certified Accountants (UK). Actively progressing through the globally recognized benchmark for finance professionals and IFRS specialists.",
      verifyTranscriptBtn: "Verify Official ACCA Transcript",
      regNumLabel: "Registration Number",
      registeredOn: "Registered: 10 February 2026",
      syllabusLabel: "Syllabus Track",
      completedLabel: "Completed Papers",
      completedSub: "Applied Knowledge & Skills",
      progressLabel: "Completion Track",
      passedSectionTitle: "Passed & Exempted Examinations",
      roadmapSectionTitle: "Applied Skills & Strategic Professional Roadmap",
      verifiedRecord: "Verified ACCA Record",
      completedCheck: "Completed ✓",
      inProgressBadge: "In Progress",
      plannedBadge: "Planned",
    },
    skills: {
      badge: "Technical & Domain Capabilities",
      title: "Interdisciplinary Skills Matrix",
      subtitle: "Bridging international accounting standards (IFRS), quantitative economic modeling, and modern web application development.",
      spectrumTitle: "Complete Competency Spectrum",
    },
    projects: {
      badge: "Engineering & Case Studies",
      title: "Featured Financial & Tech Projects",
      subtitle: "Real-world systems combining financial mathematics, business logic, and modern software architectures.",
      flagshipBadge: "Flagship Web Service",
      viewRepo: "GitHub Repository",
      liveService: "Launch Live Web Service",
      readArch: "Read System Architecture",
      targetSectors: "Target Sectors",
      targetSectorsVal: "Retail, Factory, Logistics, Agro, Cafe",
      currencySupport: "Currency Support",
      currencySupportVal: "UZS & USD Dual Bookkeeping",
      compliance: "Compliance",
      complianceVal: "IFRS & Local Tax Standards",
      highlightNote: "✓ Implemented automated P&L, balance sheet reconciliations and real-time inventory tracking.",
      learnDetails: "Learn details",
      code: "Code",
      techAndConcepts: "Technologies & Concepts:",
      close: "Close",
      filterAll: "All Projects",
    },
    credentials: {
      badge: "Verification & Records",
      title: "Official Credentials & Transcripts",
      subtitle: "Verified university enrollment documentation, ACCA exam results, and academic proofs.",
      verifiedRecord: "Verified Record",
      previewDoc: "Preview Document",
      downloadDoc: "Download",
      statusLabel: "Date / Status: ",
    },
    contact: {
      badge: "Direct Communication",
      title: "Let's Discuss Opportunities",
      subtitle: "Available for financial analyst roles, data analytics projects, fintech development, or academic research collaborations.",
      channelsTitle: "Contact Channels",
      telegramTitle: "Telegram Direct",
      emailTitle: "Email Address",
      locationTitle: "Location",
      githubTitle: "GitHub Profile",
      formTitle: "Send a Direct Message",
      formSubtitle: "Fill in the details below to initiate email contact directly with Ikhtiyorjon.",
      nameLabel: "Your Full Name",
      namePlaceholder: "John Doe",
      emailLabel: "Your Email Address",
      emailPlaceholder: "john@example.com",
      messageLabel: "Message / Inquiries",
      messagePlaceholder: "Hi Ikhtiyorjon, I would like to discuss...",
      sendBtn: "Send Message to Ikhtiyorjon",
      redirectingTitle: "Opening Your Email Client...",
      redirectingDesc: "Your message draft is being redirected to your default email client. You can also chat directly on Telegram via @ixtiyorjonnabiyev.",
      sendAnother: "Send Another Message",
    },
    footer: {
      tagline: "Economics & Data Analytics • ACCA Candidate",
      allRights: "All rights reserved. Yangi O'zbekiston universiteti.",
      regNotice: "ACCA Candidate • Registration #6827910",
      ownerLogin: "Owner Login",
      ownerMode: "Owner Mode",
    },
    owner: {
      portalTitle: "Owner Management Portal",
      unlockedBadge: "UNLOCKED",
      editPermsDesc: "You have full editing permissions. Visitors have read-only view.",
      protectedDesc: "Protected mode. Enter your Master PIN to edit.",
      enterPinTitle: "Enter Owner Master PIN",
      enterPinDesc: "Only you (Ikhtiyorjon) can modify the portfolio content. Default PIN is 1234.",
      pinPlaceholder: "Enter Master PIN (Default: 1234)",
      incorrectPin: "Incorrect PIN. Try 1234 or your customized code.",
      unlockBtn: "Unlock Owner Editing",
      tabPersonal: "Personal & Bio",
      tabEducation: "University",
      tabAcca: "ACCA Exams",
      tabProjects: "Projects",
      tabSkills: "Skills",
      tabSecurity: "Security & Backup",
      saveAll: "Save All Changes",
      lockAndExit: "Lock & Return to Visitor View",
      savedNotice: "Saved to your browser storage!",
    }
  },

  // ================= O'ZBEKCHA =================
  uz: {
    nav: {
      about: "Men haqimda",
      education: "Ta'lim",
      acca: "ACCA",
      skills: "Ko'nikmalar",
      projects: "Loyihalar",
      credentials: "Hujjatlar",
      contact: "Aloqa",
      ownerAccess: "Egasi kirishi",
      ownerMode: "Egasi rejimi",
      connect: "Bog'lanish",
      changeLanguage: "Til",
    },
    hero: {
      statusBadge: "Moliyaviy tahlilchi, Data Analytics va Fintech bo'yicha ochiq",
      hiIm: "Salom, men",
      tagline: "Iqtisodiyot va ma'lumotlar tahlili mutaxassisi | ACCA nomzodi | Fintech dasturchi",
      bio: "Yangi O'zbekiston universitetida Iqtisodiyot va ma'lumotlar tahlili yo'nalishi bo'yicha 3-kurs talabasi hamda Financial Reporting (FR) va Financial Accounting (FA) imtihonlarini muvaffaqiyatli topshirgan ACCA nomzodi. Xalqaro moliyaviy hisobot standartlari (IFRS), ekonometrik modellashtirish va zamonaviy veb-texnologiyalarni uyg'unlashtirib, murakkab biznes masalalarini hal qilaman.",
      locationText: "Toshkent, O'zbekiston (Tug'ilgan joyi: Rishton, Farg'ona)",
      uniText: "Yangi O'zbekiston universiteti (3-kurs)",
      accaRegText: "ACCA Reg: #6827910",
      viewProjects: "Loyihalarni ko'rish",
      accaTranscript: "ACCA Transkripti",
      studentId: "Talabalik guvohnomasi",
      viewFullPhoto: "Suratni ko'rish",
      connectWithMe: "Bog'lanish:",
      metricPapers: "Fanlar",
      metricPapersSub: "FR (64%) • FA (65%) • BT Exemption",
      metricUniYear: "Kurs",
      metricUniYearSub: "JED1 guruhi • Imtiyozli ta'lim",
      metricStack: "IFRS va Analitika",
      metricStackSub: "Excel, Python, Next.js",
      metricPlatform: "Moliya ERP",
      metricPlatformSub: "Faol moliyaviy veb-xizmat",
      verifiedAcademicId: "Tasdiqlangan talaba guvohnomasi",
      inspect: "Ko'rish",
    },
    about: {
      badge: "Profil va Yo'nalish",
      title: "Ixtiyorjon Nabiyev haqida",
      subtitle: "Tahliliy aniqlik, intellektual qiziqish va moliya hamda miqdoriy tahlilda xalqaro standartlarga intilish.",
      journeyTitle: "Mening yo'lim va maqsadim",
      p1: "Aslim Farg'ona viloyati Rishton tumanidan bo'lib, hozirda Toshkentdagi Yangi O'zbekiston universitetida «Iqtisodiyot va ma'lumotlar tahlili» yo'nalishi bo'yicha 3-kurs bakalavr talabasiman.",
      p2: "Universitet darslari bilan bir qatorda Buyuk Britaniyaning Xalqaro Sertifikatlangan Buxgalterlar Assotsiatsiyasi (ACCA) nomzodiman. Hozirga qadar Business and Technology (BT) bo'yicha imtiyoz (exemption), Financial Accounting (FA) fanidan 65% CBE hamda Financial Reporting (FR) fanidan 64% natija bilan muvaffaqiyatli o'tganman.",
      p3: "Mening asosiy ustunligim — bu chuqur moliyaviy bilimlar va zamonaviy dasturlashning uyg'unligidir. Moliyani shunchaki qog'ozdagi hisobotlar emas, balki «Moliya» kabi avtomatlashtirilgan, ko'p valyutali va real vaqt rejimida biznes tahlil beruvchi aqlli veb-platformalar shaklida ishlab chiqaman.",
      dobLabel: "Tug'ilgan sana:",
      originLabel: "Viloyat / Tuman:",
      originVal: "Rishton, Farg'ona",
      pillar1Title: "ACCA va IFRS Hisoboti",
      pillar1Desc: "Xalqaro moliyaviy hisobot standartlari (IFRS), konsolidatsiyalashgan hisobotlar, buxgalteriya tamoyillari va professional etika bo'yicha chuqur bilim.",
      pillar2Title: "Miqdoriy Iqtisodiyot",
      pillar2Desc: "Ekonometrika, statistik testlar, mikro va makroiqtisodiy modellashtirish, inflyatsiya va valyuta kurslari tahlili.",
      pillar3Title: "Fintech va Veb Arxitektura",
      pillar3Desc: "Murakkab biznes qoidalari va moliyaviy algoritmlarni zamonaviy, qulay Next.js va React veb-ilovalariga (masalan: Moliya tizimi) aylantirish.",
      pillar4Title: "Xalqaro dunyoqarash va Tillar",
      pillar4Desc: "Ko'p tillilik (o'zbek, ingliz, rus tillari) orqali xalqaro korporatsiyalar, audit kompaniyalari va xorijiy hamkorlar bilan erkin ishlash.",
    },
    education: {
      badge: "Akademik Ta'lim",
      title: "Ta'lim va Universitet Yutuqlari",
      subtitle: "Mamlakatimizning ilg'or davlat ta'lim maskanlaridan biri — Yangi O'zbekiston universitetida jahon standartlari asosida bilim olmoqdaman.",
      yearBadge: "3-kurs • Kunduzgi ta'lim",
      activeStatus: "Holati: O'qimoqda (Faol)",
      majorTitle: "Iqtisodiyot va ma'lumotlar tahlili (Bakalavr)",
      facultyTitle: "Gumanitar, aniq va ijtimoiy fanlar maktabi",
      description: "Murakkab mikro va makroiqtisodiyot, ekonometrika, statistik modellashtirish, ma'lumotlar tahlili, moliyaviy matematika va algoritmlarni o'z ichiga olgan mukammal o'quv dasturi.",
      viewIdBtn: "Talabalik guvohnomasini ko'rish",
      cardTitle: "TALABALIK GUVOHNOMASI",
      cardVerified: "Tasdiqlangan",
      institutionLabel: "Muassasa:",
      majorLabel: "Yo'nalish:",
      groupLabel: "Guruh va Kurs:",
      docNumLabel: "Guvohnoma raqami:",
      pnflLabel: "JShShIR:",
      openDocBtn: "Hujjatni to'liq hajmda ochish",
    },
    acca: {
      badge: "Xalqaro Professional Malaka",
      title: "ACCA Bosqichlari va Yutuqlari",
      subtitle: "Buyuk Britaniyaning ACCA xalqaro assotsiatsiyasi nomzodi. Moliya va IFRS standartlari bo'yicha global miqyosda tan olingan imtihonlarni topshirmoqdaman.",
      verifyTranscriptBtn: "Rasmiy ACCA Transkriptini Tekshirish",
      regNumLabel: "Ro'yxatdan o'tish raqami",
      registeredOn: "Ro'yxatdan o'tilgan: 10 Fevral 2026",
      syllabusLabel: "Sillabus yo'nalishi",
      completedLabel: "Muvaffaqiyatli fanlar",
      completedSub: "Amaliy bilim va ko'nikmalar",
      progressLabel: "Dasturning bajarilishi",
      passedSectionTitle: "Topshirilgan va Imtiyoz berilgan Imtihonlar",
      roadmapSectionTitle: "Applied Skills va Strategic Professional Yo'l Xaritasi",
      verifiedRecord: "Tasdiqlangan ACCA hujjati",
      completedCheck: "Yakunlangan ✓",
      inProgressBadge: "Jarayonda",
      plannedBadge: "Rejalashtirilgan",
    },
    skills: {
      badge: "Texnik va Sohaviy Imkoniyatlar",
      title: "Ko'p tarmoqli Ko'nikmalar Matritsasi",
      subtitle: "IFRS moliyaviy hisoboti, ekonometrik modellashtirish va zamonaviy dasturlash chorrahasi.",
      spectrumTitle: "Barcha Ko'nikmalar Ro'yxati",
    },
    projects: {
      badge: "Dasturiy Ishlanmalar",
      title: "Moliyaviy va Texnologik Loyihalar",
      subtitle: "Moliyaviy matematika, biznes mantig'i va zamonaviy veb-arxitekturani mujassam etgan real tizimlar.",
      flagshipBadge: "Asosiy Veb-Xizmat",
      viewRepo: "GitHub Repozitoriyasi",
      liveService: "Veb-Xizmatni Ishga Tushirish",
      readArch: "Tizim Arxitekturasini Ko'rish",
      targetSectors: "Qo'llanish sohalari",
      targetSectorsVal: "Do'kon, Zavod, Logistika, Agro, Restoran",
      currencySupport: "Valyuta tizimi",
      currencySupportVal: "UZS va USD ikkilik hisobi",
      compliance: "Standartlar",
      complianceVal: "IFRS va Mahalliy Soliq Qoidalari",
      highlightNote: "✓ Avtomatlashtirilgan P&L, balans hisoboti va real vaqt ombor qoldiqlari nazorati.",
      learnDetails: "Batafsil ma'lumot",
      code: "Kod",
      techAndConcepts: "Texnologiyalar va Tushunchalar:",
      close: "Yopish",
      filterAll: "Barcha loyihalar",
    },
    credentials: {
      badge: "Tekshirish va Hujjatlar",
      title: "Rasmiy Hujjatlar va Transkriptlar",
      subtitle: "Tasdiqlangan universitet guvohnomasi, ACCA imtihon natijalari va shaxsni tasdiqlovchi rasmiy ma'lumotlar.",
      verifiedRecord: "Tasdiqlangan Hujjat",
      previewDoc: "Hujjatni Ko'rish",
      downloadDoc: "Yuklab Olish",
      statusLabel: "Sana / Holati: ",
    },
    contact: {
      badge: "To'g'ridan-to'g'ri Aloqa",
      title: "Imkoniyatlarni Muhokama Qilamiz",
      subtitle: "Moliyaviy tahlil, ma'lumotlar tahlili (data analytics), fintech dasturlash yoki tadqiqot loyihalari uchun ochiqman.",
      channelsTitle: "Aloqa Kanallari",
      telegramTitle: "To'g'ridan-to'g'ri Telegram",
      emailTitle: "Elektron Pochta",
      locationTitle: "Joylashuv",
      githubTitle: "GitHub Profili",
      formTitle: "Xabar Yuborish",
      formSubtitle: "Ixtiyorjon bilan to'g'ridan-to'g'ri elektron pochta orqali bog'lanish uchun quyidagi shaklni to'ldiring.",
      nameLabel: "To'liq Ismingiz",
      namePlaceholder: "Aziz Rahimov",
      emailLabel: "Elektron Pochta Manzilingiz",
      emailPlaceholder: "aziz@example.com",
      messageLabel: "Xabar / Taklif",
      messagePlaceholder: "Salom Ixtiyorjon, men siz bilan ... bo'yicha gaplashmoqchi edim",
      sendBtn: "Ixtiyorjonga Xabar Yuborish",
      redirectingTitle: "Pochta dasturi ochilmoqda...",
      redirectingDesc: "Xabaringiz elektron pochta dasturingizga yo'naltirilmoqda. Shuningdek, Telegram orqali @ixtiyorjonnabiyev manziliga yozishingiz mumkin.",
      sendAnother: "Boshqa xabar yuborish",
    },
    footer: {
      tagline: "Iqtisodiyot va ma'lumotlar tahlili • ACCA nomzodi",
      allRights: "Barcha huquqlar himoyalangan. Yangi O'zbekiston universiteti.",
      regNotice: "ACCA Nomzodi • Ro'yxat raqami #6827910",
      ownerLogin: "Egasi Kirishi",
      ownerMode: "Egasi Rejimi",
    },
    owner: {
      portalTitle: "Egasi Boshqaruv Paneli",
      unlockedBadge: "OCHILGAN",
      editPermsDesc: "Sizda to'liq tahrirlash huquqi mavjud. Tashrif buyuruvchilar faqat ko'rish rejimida bo'ladi.",
      protectedDesc: "Himoyalangan rejim. Tahrirlash uchun Master PIN-kodni kiriting.",
      enterPinTitle: "Master PIN-kodni Kiriting",
      enterPinDesc: "Faqat siz (Ixtiyorjon) ma'lumotlarni o'zgartira olasiz. Standart PIN: 1234.",
      pinPlaceholder: "PIN-kodni kiriting (Standart: 1234)",
      incorrectPin: "PIN-kod noto'g'ri. 1234 yoki o'zingiz o'rnatgan kodni kiriting.",
      unlockBtn: "Tahrirlashni Ochish",
      tabPersonal: "Shaxsiy va Bio",
      tabEducation: "Universitet",
      tabAcca: "ACCA Imtihonlari",
      tabProjects: "Loyihalar",
      tabSkills: "Ko'nikmalar",
      tabSecurity: "Xavfsizlik va Zaxira",
      saveAll: "Barcha o'zgarishlarni saqlash",
      lockAndExit: "Qulflash va Ko'rish rejimiga qaytish",
      savedNotice: "Brauzer xotirasiga saqlandi!",
    }
  },

  // ================= RUSSIAN =================
  ru: {
    nav: {
      about: "Обо мне",
      education: "Образование",
      acca: "ACCA",
      skills: "Навыки",
      projects: "Проекты",
      credentials: "Документы",
      contact: "Контакты",
      ownerAccess: "Вход владельца",
      ownerMode: "Режим владельца",
      connect: "Связаться",
      changeLanguage: "Язык",
    },
    hero: {
      statusBadge: "Открыт для позиций финансового аналитика, data analytics и fintech",
      hiIm: "Привет, я",
      tagline: "Специалист по экономике и анализу данных | Кандидат ACCA | Fintech-разработчик",
      bio: "Студент 3-го курса Университета «Новый Узбекистан» по специальности «Экономика и анализ данных», активный кандидат ACCA с успешной сдачей экзаменов по Financial Reporting (FR) и Financial Accounting (FA). Объединяю международные стандарты финансовой отчётности (МСФО/IFRS), количественное моделирование и современную веб-разработку.",
      locationText: "Ташкент, Узбекистан (Родом из: Риштан, Фергана)",
      uniText: "Университет «Новый Узбекистан» (3 курс)",
      accaRegText: "Рег. номер ACCA: #6827910",
      viewProjects: "Смотреть проекты",
      accaTranscript: "Транскрипт ACCA",
      studentId: "Студенческий билет",
      viewFullPhoto: "Фотография",
      connectWithMe: "Связь:",
      metricPapers: "Экзаменов",
      metricPapersSub: "FR (64%) • FA (65%) • BT Exemption",
      metricUniYear: "Курс",
      metricUniYearSub: "Группа JED1 • Очное обучение",
      metricStack: "МСФО и Аналитика",
      metricStackSub: "Excel, Python, Next.js",
      metricPlatform: "Moliya ERP",
      metricPlatformSub: "Действующий финансовый сервис",
      verifiedAcademicId: "Подтверждённый студенческий ID",
      inspect: "Просмотр",
    },
    about: {
      badge: "Профиль и Траектория",
      title: "Об Ихтиёржоне Набиеве",
      subtitle: "Стремление к аналитической точности, интеллектуальному развитию и глобальным стандартам в области финансов и количественного анализа.",
      journeyTitle: "Мой путь и миссия",
      p1: "Родом из Риштанского района Ферганской области, в настоящее время я являюсь студентом 3-го курса бакалавриата Университета «Новый Узбекистан» в Ташкенте по направлению «Экономика и анализ данных».",
      p2: "Параллельно с академической программой я являюсь кандидатом Ассоциации дипломированных сертифицированных бухгалтеров (ACCA, Великобритания). Получил освобождение по Business and Technology (BT), сдал Financial Accounting (FA) на 65% CBE и Financial Reporting (FR) на 64%.",
      p3: "Моё ключевое преимущество — объединение глубокой финансовой экспертизы и современной программной инженерии. Я разрабатываю полноценные цифровые системы — такие как «Moliya» — автоматизирующие финансовую отчётность, мультивалютный учёт и аналитику в реальном времени.",
      dobLabel: "Дата рождения:",
      originLabel: "Происхождение:",
      originVal: "Риштан, Фергана",
      pillar1Title: "ACCA и отчётность по МСФО",
      pillar1Desc: "Глубокое знание международных стандартов финансовой отчётности (IFRS), консолидации отчётности, принципов учёта и профессиональной этики.",
      pillar2Title: "Количественная экономика",
      pillar2Desc: "Фундаментальная подготовка по эконометрике, статистическим тестам, микро- и макроэкономическому моделированию и прогнозированию.",
      pillar3Title: "Fintech и веб-архитектура",
      pillar3Desc: "Воплощение сложных бизнес-правил и финансовых алгоритмов в быстрые, масштабируемые веб-приложения на Next.js и React (например, Moliya ERP).",
      pillar4Title: "Глобальное мышление и мультиязычность",
      pillar4Desc: "Свободное владение узбекским, английским и русским языками для эффективной работы в международных корпорациях и консалтинговых фирмах.",
    },
    education: {
      badge: "Академическое Образование",
      title: "Образование и Академические Достижения",
      subtitle: "Обучение в Университете «Новый Узбекистан» — ведущем государственном вузе страны, ориентированном на мировые образовательные стандарты и современную экономику.",
      yearBadge: "3-й курс • Очное отделение",
      activeStatus: "Статус: Активный студент",
      majorTitle: "Бакалавриат: Экономика и анализ данных",
      facultyTitle: "Школа гуманитарных, точных и социальных наук",
      description: "Углублённый учебный план, охватывающий микро- и макроэкономику, эконометрику, статистическое моделирование, финансовую математику и алгоритмический анализ данных.",
      viewIdBtn: "Посмотреть студенческий билет",
      cardTitle: "СТУДЕНЧЕСКИЙ БИЛЕТ",
      cardVerified: "Подтверждён",
      institutionLabel: "Учебное заведение:",
      majorLabel: "Специальность:",
      groupLabel: "Группа и курс:",
      docNumLabel: "Номер билета:",
      pnflLabel: "ПИНФЛ (JShShIR):",
      openDocBtn: "Открыть документ полностью",
    },
    acca: {
      badge: "Международная Квалификация",
      title: "Путь в ACCA и Достижения",
      subtitle: "Кандидат международной профессиональной ассоциации бухгалтеров ACCA (Великобритания). Уверенно прохожу глобальный стандарт финансового мастерства.",
      verifyTranscriptBtn: "Проверить официальный транскрипт ACCA",
      regNumLabel: "Регистрационный номер",
      registeredOn: "Зарегистрирован: 10 февраля 2026",
      syllabusLabel: "Программа экзаменов",
      completedLabel: "Сданные экзамены",
      completedSub: "Applied Knowledge & Skills",
      progressLabel: "Прогресс квалификации",
      passedSectionTitle: "Сданные экзамены и освобождения",
      roadmapSectionTitle: "План экзаменов Applied Skills & Strategic Professional",
      verifiedRecord: "Официальный документ ACCA",
      completedCheck: "Зачтено ✓",
      inProgressBadge: "В процессе",
      plannedBadge: "Запланировано",
    },
    skills: {
      badge: "Технические и Профессиональные Навыки",
      title: "Междисциплинарная Матрица Навыков",
      subtitle: "Синтез финансовой отчётности МСФО, эконометрического моделирования и современной веб-разработки.",
      spectrumTitle: "Полный спектр компетенций",
    },
    projects: {
      badge: "Инженерия и Разработки",
      title: "Финансовые и Технологические Проекты",
      subtitle: "Практические системы, объединяющие финансовую математику, бизнес-логику и передовые веб-архитектуры.",
      flagshipBadge: "Флагманский Веб-Сервис",
      viewRepo: "Репозиторий GitHub",
      liveService: "Открыть Веб-Сервис Онлайн",
      readArch: "Архитектура системы",
      targetSectors: "Целевые сферы",
      targetSectorsVal: "Торговля, Заводы, Логистика, Агро, Рестораны",
      currencySupport: "Валюты",
      currencySupportVal: "Двойной учёт UZS и USD",
      compliance: "Соответствие",
      complianceVal: "Стандарты МСФО и налоговый учёт",
      highlightNote: "✓ Автоматизированные отчёты P&L, баланс, прогнозирование денежных потоков и контроль склада.",
      learnDetails: "Подробнее",
      code: "Код",
      techAndConcepts: "Технологии и концепции:",
      close: "Закрыть",
      filterAll: "Все проекты",
    },
    credentials: {
      badge: "Верификация и Документы",
      title: "Официальные Документы и Транскрипты",
      subtitle: "Подтверждённые документы об обучении в университете, результаты экзаменов ACCA и официальные подтверждения.",
      verifiedRecord: "Верифицированный документ",
      previewDoc: "Просмотр документа",
      downloadDoc: "Скачать",
      statusLabel: "Дата / Статус: ",
    },
    contact: {
      badge: "Прямая Связь",
      title: "Обсудить Возможности Сотрудничества",
      subtitle: "Открыт для предложений по финансовому анализу, data analytics, fintech-разработке и академическим проектам.",
      channelsTitle: "Каналы связи",
      telegramTitle: "Прямой Telegram",
      emailTitle: "Электронная почта",
      locationTitle: "Локация",
      githubTitle: "Профиль GitHub",
      formTitle: "Отправить сообщение",
      formSubtitle: "Заполните форму ниже для прямой отправки сообщения Ихтиёржону по почте.",
      nameLabel: "Ваше имя",
      namePlaceholder: "Иван Иванов",
      emailLabel: "Ваш Email",
      emailPlaceholder: "ivan@example.com",
      messageLabel: "Сообщение / Запрос",
      messagePlaceholder: "Здравствуйте, Ихтиёржон, хотел бы обсудить...",
      sendBtn: "Отправить сообщение",
      redirectingTitle: "Перенаправление в почтовый клиент...",
      redirectingDesc: "Черновик сообщения формируется в вашем почтовом клиенте. Также вы можете написать напрямую в Telegram: @ixtiyorjonnabiyev.",
      sendAnother: "Отправить ещё одно сообщение",
    },
    footer: {
      tagline: "Экономика и анализ данных • Кандидат ACCA",
      allRights: "Все права защищены. Университет «Новый Узбекистан».",
      regNotice: "Кандидат ACCA • Регистрационный номер #6827910",
      ownerLogin: "Вход владельца",
      ownerMode: "Режим владельца",
    },
    owner: {
      portalTitle: "Панель управления владельца",
      unlockedBadge: "ДОСТУП ОТКРЫТ",
      editPermsDesc: "У вас есть полные права на редактирование. Посетители видят сайт в режиме чтения.",
      protectedDesc: "Защищённый режим. Введите мастер-PIN для редактирования.",
      enterPinTitle: "Введите Мастер-PIN",
      enterPinDesc: "Только вы (Ихтиёржон) можете редактировать портфолио. Стандартный PIN: 1234.",
      pinPlaceholder: "Введите PIN (по умолчанию: 1234)",
      incorrectPin: "Неверный PIN. Попробуйте 1234 или ваш код.",
      unlockBtn: "Разблокировать редактирование",
      tabPersonal: "Личные данные и Био",
      tabEducation: "Университет",
      tabAcca: "Экзамены ACCA",
      tabProjects: "Проекты",
      tabSkills: "Навыки",
      tabSecurity: "Безопасность и Бэкап",
      saveAll: "Сохранить все изменения",
      lockAndExit: "Заблокировать и перейти в режим чтения",
      savedNotice: "Сохранено в локальное хранилище браузера!",
    }
  }
};

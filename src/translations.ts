export type Lang = 'en' | 'hi';

export const translations = {
  en: {
    // Navbar
    nav: {
      about: 'About',
      skills: 'Skills',
      projects: 'Projects',
      certifications: 'Certifications',
      timeline: 'Timeline',
      contact: 'Contact',
      resumeSummary: 'Resume Summary',
      subtitle: 'SRM CSE Student',
    },

    // Hero
    hero: {
      openTo: 'Open to Internships & Hackathons',
      verified: 'Verified Profile',
      tagline: 'Building Intelligent Digital Solutions Through Code, AI & Innovation',
      bio: 'I am a highly motivated Computer Science Engineering student at SRM University AP with a strong passion for software development, artificial intelligence, and modern web technologies. I enjoy transforming ideas into impactful digital experiences while solving real-world challenges.',
      viewProjects: 'View Projects',
      exploreSkills: 'Explore Skills',
      resumeCV: 'Resume CV',
      contactMe: 'Contact Me',
      connect: 'Connect:',
    },

    // Metrics
    metrics: {
      cgpa: 'Engineering CGPA',
      cgpaDesc: 'SRM University AP',
      intermediate: 'Intermediate Score',
      intermediateDesc: 'Top Core Excellence',
      certs: 'Earned Certs',
      certsDesc: 'Harvard, Microsoft & SRM',
      hours: 'Developer Hours',
      hoursDesc: 'C, Python, JS & SQL',
    },

    // About
    about: {
      sectionLabel: 'Personal Brand Story',
      sectionTitle: 'Introduction & Core Competence',
      h3: 'A Passionate Technologist Driven by Growth and Practical Execution',
      p1: 'I am currently pursuing my <strong>Bachelor of Technology in Computer Science Engineering at SRM University AP (2025–2029)</strong>. Deeply passionate about the intersections of software architecture, artificial intelligence, and responsive web paradigms, I treat the web as a dynamic tool of utility, optimizing systems for accessibility, modularity, and speed.',
      p2: 'With a background anchored by academic excellence—demonstrated by my outstanding <strong>95.8% Intermediate core score</strong> and my current university GPA metrics of <strong>9.31 CGPA</strong>—I constantly seek avenues to deploy what I absorb. Whether that means building clean structural simulators for power grid organizations or securing certifications from global leaders like Harvard and Microsoft, I move with purpose.',
      card1Title: 'Core Engineering Drive',
      card1Desc: 'Translating complex theoretical data structures and computational patterns into real operational products.',
      card2Title: 'Continuous AI Integration',
      card2Desc: 'Leveraging modern large model tools and context engineering to streamline software development timelines.',
      academicRecord: 'Academic Record',
      srmTitle: 'SRM University AP',
      srmDegree: 'Bachelor of Technology (B.Tech), CSE',
      srmPeriod: '2025 - 2029',
      cgpaLabel: 'CGPA:',
      intTitle: 'Intermediate Board Education',
      intDegree: 'Advanced Mathematical & Scientific Curricula',
      intStatus: 'Completed',
      intScore: 'Cumulative Percentage:',
      courseworkLabel: 'Selected Core Coursework:',
      courses: [
        'Programming Fundamentals',
        'Data Structures',
        'Problem Solving',
        'Web Development',
        'Database Systems',
        'Software Engineering',
        'Artificial Intelligence',
      ],
    },

    // Skills
    skills: {
      sectionLabel: 'Competency Finder',
      sectionTitle: 'Technical Skills & Tools',
      description: 'I believe specialized tools empower developers to craft world-class applications. Use the intelligent search panel below to filter my engineering tools on the fly!',
      searchPlaceholder: 'Search skills (e.g. Python, React, SQL, Git...)',
      clearBtn: 'Clear',
      categories: [
        { name: 'Programming Languages', skills: ['Python', 'C', 'JavaScript', 'HTML5', 'CSS3', 'SQL', 'C#'] },
        { name: 'Web Development', skills: ['Frontend Development', 'Responsive Web Design', 'Bootstrap', 'Tailwind CSS', 'React'] },
        { name: 'Version Control', skills: ['Git', 'GitHub'] },
        { name: 'AI & Productivity', skills: ['ChatGPT', 'Prompt Engineering', 'AI Website Builders', 'AI Productivity Tools'] },
        { name: 'Development Tools', skills: ['VS Code', 'Canva', 'Figma', 'Microsoft Office'] },
        { name: 'Soft Skills', skills: ['Communication', 'Leadership', 'Problem Solving', 'Critical Thinking', 'Adaptability', 'Teamwork', 'Time Management', 'Presentation Skills', 'Analytical Reasoning'] },
      ],
    },

    // Projects
    projects: {
      sectionLabel: 'Proven Products',
      sectionTitle: 'Project Showcase',
      description: 'A comprehensive overview of my software developments ranging from smart grid platforms to standalone utilities. Click any card to launch a simulated system sandbox in a terminal, or review source controls!',
      filterAll: 'All (6)',
      sandboxCLI: 'Sandbox CLI',
      details: 'Details',
      academicDemo: 'Academic Demo',
      projectBreakdown: 'Project breakdown',
      keyFeatures: 'Key Features Engineered:',
      targetStatus: 'Project Target Status:',
      sourceCode: 'Source Code',
      launchSandbox: 'Launch Sandbox',
      consoleTitle: 'Intelligent Console Sandbox',
      executeBtn: 'Execute',
      consolePlaceholder: "Type 'help', 'run', 'tech' or 'exit'...",
      consolePrompt: 'krishnateja@sandbox:~$',
    },

    // Certifications
    certifications: {
      sectionLabel: 'Verified Credentials',
      sectionTitle: 'Academic & Industry Achievements',
      description: 'I am highly committed to structured learning paths. Below are the registered certifications I have earned alongside university programs.',
      verified: 'Verified ✓',
    },

    // Timeline
    timeline: {
      sectionLabel: 'Professional Development',
      sectionTitle: 'Academic & Learning Journey',
    },

    // Contact
    contact: {
      sectionLabel: 'Get In Touch',
      sectionTitle: 'Contact Me',
      description: "I'm always open to discussing internships, software engineering opportunities, hackathons, collaborations, and innovative technology projects. Feel free to connect through the contact form or reach out directly via email, LinkedIn, or GitHub.",
      touchpoints: 'Direct Touch-Points',
      emailLabel: 'Email Channel',
      phoneLabel: 'Phone Contact',
      locationLabel: 'Location Hub',
      location: 'Vijayawada, AP, India',
      transmissionLogs: 'Transmission Logs',
      hide: 'Hide',
      show: 'Show',
      dispatchesLabel: 'My Secure Dispatches:',
      nameLabel: 'Full Name *',
      namePlaceholder: 'e.g. Rachel Adams',
      emailFieldLabel: 'Email Address *',
      emailPlaceholder: 'e.g. adams@comp.com',
      roleLabel: 'My Intent Role',
      roles: ['Technical Recruiter', 'Internship Coordinator', 'Startup Founder', 'Hackathon Judge', 'Peer Student / Say Hello'],
      companyLabel: 'Company / Affiliation',
      companyPlaceholder: 'e.g. OpenAI / SRM AP',
      messageLabel: 'Message Content *',
      messagePlaceholder: "Hi Krishna, review of APTRANSCO looks fantastic! Let's arrange a call...",
      submitBtn: 'Dispatch Verified Networking Transmission',
      submittingBtn: 'Securing Connection Tunnel...',
      successMsg: "Saved locally on this device. For a guaranteed reply, please also email or message Krishna directly using the links provided.",
    },

    // Resume Modal
    resume: {
      savePDF: 'Save PDF / Print',
      professionalStatement: 'Professional Statement',
      bio: 'Highly motivated Computer Science Engineering student at SRM University AP with a strong passion for software development, artificial intelligence, and responsive web systems. Eager to solve real-world problems and deliver structured digital innovations.',
      educationHistory: 'Education History',
      srmTitle: 'SRM UNIVERSITY AP',
      srmPeriod: '2025 – 2029 (Ongoing)',
      srmDegree: 'B.Tech in Computer Science Engineering',
      cgpaLabel: 'Current Cumulative CGPA: 9.31/10.0',
      srmCourses: 'Relevant Modules: Data Structures, Problem Solving, Web Development, Programming Fundamentals, Software Engineering.',
      intTitle: 'INTERMEDIATE BOARD EDUCATION',
      intStatus: 'Completed',
      intStream: 'Advanced Scientific Core Stream',
      intScore: 'Cumulative Outstanding Score: 95.8%',
      skillsTitle: 'Technical Skill Directory',
      projectsTitle: 'Selected Engineering Projects',
      certsTitle: 'Registered Certifications & Achievements',
      printTip: "Tip: Click 'Save PDF / Print' to save this exact page as a pristine standard executive resume profile.",
    },

    // Footer
    footer: {
      copyright: '© 2026. Certified SRM CSE Student Portfolio.',
      crafted: 'Crafted with React, Tailwind CSS 4.0 and Lucide icons. Authorized for technical recruitment and internship assessment.',
    },

    // Sandbox commands
    sandbox: {
      init: (title: string) => `Initializing Virtual Sandbox Node for: [${title.toUpperCase()}]`,
      tunnel: 'Secure HTTPS tunneling... CONNECTED',
      host: 'Host: github.com/krishnakonakala',
      stack: (s: string) => `Active Stack Detected: ${s}`,
      desc: (d: string) => `Description: ${d}`,
      status: (m: string) => `Status indicator: ${m}`,
      helpHint: "Type 'help' or 'run' or 'features' or 'exit' below to test system bindings.",
      helpTitle: 'Command Options Available:',
      helpRun: '  run      - Starts a simulated execution cycle of the project',
      helpFeatures: '  features - Summarizes distinct modular functions coded',
      helpTech: '  tech     - Lists library versions, framework parameters',
      helpClear: '  clear    - Wipes system console buffers',
      helpExit: '  exit     - Terminates virtual port integration',
      runBoot: '> boot --release --target=localhost',
      runLoading: '[INFO] Loading dependencies from repository manifest... DONE',
      runSuccess: '[SUCCESS] App started on port 3000 inside simulated runtime!',
      runStream: (m: string) => `[LIVE-STREAM] Dynamic parameters optimal. System status: ${m}`,
      featuresTitle: 'Feature Modules Coded:',
      techTitle: 'Tech Core Stack:',
      unknownCmd: (c: string) => `Error: command '${c}' undefined in basic sandbox environment.`,
      helpSuggestion: "Write 'help' to review catalog settings.",
    },
  },

  hi: {
    // Navbar
    nav: {
      about: 'परिचय',
      skills: 'कौशल',
      projects: 'परियोजनाएँ',
      certifications: 'प्रमाणपत्र',
      timeline: 'समयरेखा',
      contact: 'संपर्क',
      resumeSummary: 'रेज़्यूमे सारांश',
      subtitle: 'SRM CSE छात्र',
    },

    // Hero
    hero: {
      openTo: 'इंटर्नशिप और हैकाथॉन के लिए उपलब्ध',
      verified: 'सत्यापित प्रोफ़ाइल',
      tagline: 'कोड, AI और नवाचार के माध्यम से बुद्धिमान डिजिटल समाधान निर्मित करना',
      bio: 'मैं SRM विश्वविद्यालय AP में कंप्यूटर साइंस इंजीनियरिंग का अत्यधिक प्रेरित छात्र हूँ, जिसे सॉफ्टवेयर विकास, कृत्रिम बुद्धिमत्ता और आधुनिक वेब तकनीकों के प्रति गहरी रुचि है। मुझे विचारों को प्रभावशाली डिजिटल अनुभवों में बदलना और वास्तविक दुनिया की चुनौतियों को हल करना पसंद है।',
      viewProjects: 'परियोजनाएँ देखें',
      exploreSkills: 'कौशल एक्सप्लोर करें',
      resumeCV: 'रेज़्यूमे CV',
      contactMe: 'संपर्क करें',
      connect: 'जुड़ें:',
    },

    // Metrics
    metrics: {
      cgpa: 'इंजीनियरिंग CGPA',
      cgpaDesc: 'SRM विश्वविद्यालय AP',
      intermediate: 'इंटरमीडिएट स्कोर',
      intermediateDesc: 'शीर्ष उत्कृष्टता',
      certs: 'अर्जित प्रमाणपत्र',
      certsDesc: 'Harvard, Microsoft & SRM',
      hours: 'डेवलपर घंटे',
      hoursDesc: 'C, Python, JS & SQL',
    },

    // About
    about: {
      sectionLabel: 'व्यक्तिगत ब्रांड कहानी',
      sectionTitle: 'परिचय और मुख्य दक्षता',
      h3: 'विकास और व्यावहारिक क्रियान्वयन से प्रेरित एक उत्साही तकनीशियन',
      p1: 'मैं वर्तमान में <strong>SRM विश्वविद्यालय AP में कंप्यूटर साइंस इंजीनियरिंग में B.Tech (2025–2029)</strong> कर रहा हूँ। सॉफ्टवेयर आर्किटेक्चर, आर्टिफिशियल इंटेलिजेंस और रिस्पॉन्सिव वेब के संगम के प्रति गहरी रुचि के साथ, मैं वेब को एक गतिशील उपकरण मानता हूँ।',
      p2: 'शैक्षणिक उत्कृष्टता की नींव पर टिके हुए—<strong>95.8% इंटरमीडिएट स्कोर</strong> और <strong>9.31 CGPA</strong> के साथ—मैं लगातार अर्जित ज्ञान को व्यावहारिक रूप देने के अवसर खोजता रहता हूँ।',
      card1Title: 'मुख्य इंजीनियरिंग उद्देश्य',
      card1Desc: 'जटिल सैद्धांतिक डेटा संरचनाओं और कम्प्यूटेशनल पैटर्न को वास्तविक उत्पादों में बदलना।',
      card2Title: 'निरंतर AI एकीकरण',
      card2Desc: 'सॉफ्टवेयर विकास समयसीमाओं को सुव्यवस्थित करने के लिए आधुनिक AI टूल्स का उपयोग।',
      academicRecord: 'शैक्षणिक रिकॉर्ड',
      srmTitle: 'SRM विश्वविद्यालय AP',
      srmDegree: 'B.Tech, कंप्यूटर साइंस इंजीनियरिंग',
      srmPeriod: '2025 - 2029',
      cgpaLabel: 'CGPA:',
      intTitle: 'इंटरमीडिएट बोर्ड शिक्षा',
      intDegree: 'उन्नत गणित और विज्ञान पाठ्यक्रम',
      intStatus: 'पूर्ण',
      intScore: 'संचयी प्रतिशत:',
      courseworkLabel: 'चयनित मुख्य पाठ्यक्रम:',
      courses: [
        'प्रोग्रामिंग मूल बातें',
        'डेटा स्ट्रक्चर',
        'समस्या समाधान',
        'वेब विकास',
        'डेटाबेस सिस्टम',
        'सॉफ्टवेयर इंजीनियरिंग',
        'कृत्रिम बुद्धिमत्ता',
      ],
    },

    // Skills
    skills: {
      sectionLabel: 'दक्षता खोजक',
      sectionTitle: 'तकनीकी कौशल और उपकरण',
      description: 'मेरा मानना है कि विशेष उपकरण डेवलपर्स को विश्वस्तरीय एप्लिकेशन बनाने में सशक्त बनाते हैं। नीचे दिए गए खोज पैनल का उपयोग करके मेरे इंजीनियरिंग टूल्स को फ़िल्टर करें!',
      searchPlaceholder: 'कौशल खोजें (जैसे Python, React, SQL, Git...)',
      clearBtn: 'साफ करें',
      categories: [
        { name: 'प्रोग्रामिंग भाषाएँ', skills: ['Python', 'C', 'JavaScript', 'HTML5', 'CSS3', 'SQL', 'C#'] },
        { name: 'वेब विकास', skills: ['फ्रंटएंड डेवलपमेंट', 'रिस्पॉन्सिव वेब डिज़ाइन', 'Bootstrap', 'Tailwind CSS', 'React'] },
        { name: 'संस्करण नियंत्रण', skills: ['Git', 'GitHub'] },
        { name: 'AI और उत्पादकता', skills: ['ChatGPT', 'प्रॉम्प्ट इंजीनियरिंग', 'AI वेबसाइट बिल्डर', 'AI उत्पादकता उपकरण'] },
        { name: 'विकास उपकरण', skills: ['VS Code', 'Canva', 'Figma', 'Microsoft Office'] },
        { name: 'नरम कौशल', skills: ['संचार', 'नेतृत्व', 'समस्या समाधान', 'आलोचनात्मक सोच', 'अनुकूलनशीलता', 'टीमवर्क', 'समय प्रबंधन', 'प्रस्तुति कौशल', 'विश्लेषणात्मक तर्क'] },
      ],
    },

    // Projects
    projects: {
      sectionLabel: 'सिद्ध उत्पाद',
      sectionTitle: 'परियोजना प्रदर्शनी',
      description: 'स्मार्ट ग्रिड प्लेटफॉर्म से लेकर स्टैंडअलोन यूटिलिटीज तक मेरे सॉफ्टवेयर विकास का व्यापक अवलोकन। किसी भी कार्ड पर क्लिक करके टर्मिनल सैंडबॉक्स लॉन्च करें!',
      filterAll: 'सभी (6)',
      sandboxCLI: 'सैंडबॉक्स CLI',
      details: 'विवरण',
      academicDemo: 'शैक्षणिक डेमो',
      projectBreakdown: 'परियोजना विवरण',
      keyFeatures: 'मुख्य विशेषताएँ:',
      targetStatus: 'परियोजना लक्ष्य स्थिति:',
      sourceCode: 'सोर्स कोड',
      launchSandbox: 'सैंडबॉक्स लॉन्च करें',
      consoleTitle: 'इंटेलिजेंट कंसोल सैंडबॉक्स',
      executeBtn: 'चलाएँ',
      consolePlaceholder: "'help', 'run', 'tech' या 'exit' टाइप करें...",
      consolePrompt: 'krishnateja@sandbox:~$',
    },

    // Certifications
    certifications: {
      sectionLabel: 'सत्यापित प्रमाण-पत्र',
      sectionTitle: 'शैक्षणिक और उद्योग उपलब्धियाँ',
      description: 'मैं संरचित शिक्षा पथों के प्रति अत्यधिक प्रतिबद्ध हूँ। नीचे विश्वविद्यालय कार्यक्रमों के साथ अर्जित पंजीकृत प्रमाणपत्र हैं।',
      verified: 'सत्यापित ✓',
    },

    // Timeline
    timeline: {
      sectionLabel: 'व्यावसायिक विकास',
      sectionTitle: 'शैक्षणिक और सीखने की यात्रा',
    },

    // Contact
    contact: {
      sectionLabel: 'संपर्क करें',
      sectionTitle: 'संपर्क',
      description: 'मैं हमेशा इंटर्नशिप, सॉफ्टवेयर इंजीनियरिंग अवसरों, हैकाथॉन, सहयोग और नवाचार परियोजनाओं पर चर्चा के लिए तैयार हूँ।',
      touchpoints: 'सीधे संपर्क बिंदु',
      emailLabel: 'ईमेल चैनल',
      phoneLabel: 'फ़ोन संपर्क',
      locationLabel: 'स्थान',
      location: 'विजयवाड़ा, AP, भारत',
      transmissionLogs: 'संचरण लॉग',
      hide: 'छुपाएँ',
      show: 'दिखाएँ',
      dispatchesLabel: 'मेरे सुरक्षित संदेश:',
      nameLabel: 'पूरा नाम *',
      namePlaceholder: 'जैसे Rahul Sharma',
      emailFieldLabel: 'ईमेल पता *',
      emailPlaceholder: 'जैसे rahul@company.com',
      roleLabel: 'मेरी भूमिका',
      roles: ['तकनीकी भर्तीकर्ता', 'इंटर्नशिप समन्वयक', 'स्टार्टअप संस्थापक', 'हैकाथॉन जज', 'सहपाठी / नमस्ते कहें'],
      companyLabel: 'कंपनी / संस्था',
      companyPlaceholder: 'जैसे OpenAI / SRM AP',
      messageLabel: 'संदेश *',
      messagePlaceholder: 'नमस्ते Krishna, APTRANSCO परियोजना शानदार लगी! एक कॉल की व्यवस्था करें...',
      submitBtn: 'सत्यापित नेटवर्किंग संदेश भेजें',
      submittingBtn: 'कनेक्शन स्थापित हो रहा है...',
      successMsg: 'इस डिवाइस पर स्थानीय रूप से सहेजा गया। गारंटीड उत्तर के लिए, कृपया Krishna को सीधे ईमेल या संदेश भेजें।',
    },

    // Resume Modal
    resume: {
      savePDF: 'PDF सहेजें / प्रिंट करें',
      professionalStatement: 'व्यावसायिक विवरण',
      bio: 'SRM विश्वविद्यालय AP में कंप्यूटर साइंस इंजीनियरिंग का अत्यधिक प्रेरित छात्र, सॉफ्टवेयर विकास, AI और रिस्पॉन्सिव वेब सिस्टम के प्रति गहरी रुचि के साथ।',
      educationHistory: 'शैक्षणिक इतिहास',
      srmTitle: 'SRM विश्वविद्यालय AP',
      srmPeriod: '2025 – 2029 (जारी)',
      srmDegree: 'B.Tech कंप्यूटर साइंस इंजीनियरिंग',
      cgpaLabel: 'वर्तमान CGPA: 9.31/10.0',
      srmCourses: 'मुख्य विषय: डेटा स्ट्रक्चर, समस्या समाधान, वेब विकास, प्रोग्रामिंग मूल बातें, सॉफ्टवेयर इंजीनियरिंग।',
      intTitle: 'इंटरमीडिएट बोर्ड शिक्षा',
      intStatus: 'पूर्ण',
      intStream: 'उन्नत वैज्ञानिक मुख्य धारा',
      intScore: 'संचयी उत्कृष्ट स्कोर: 95.8%',
      skillsTitle: 'तकनीकी कौशल निर्देशिका',
      projectsTitle: 'चयनित इंजीनियरिंग परियोजनाएँ',
      certsTitle: 'पंजीकृत प्रमाणपत्र और उपलब्धियाँ',
      printTip: "सुझाव: इस पृष्ठ को पेशेवर PDF के रूप में सहेजने के लिए 'PDF सहेजें / प्रिंट करें' पर क्लिक करें।",
    },

    // Footer
    footer: {
      copyright: '© 2026. प्रमाणित SRM CSE छात्र पोर्टफोलियो।',
      crafted: 'React, Tailwind CSS 4.0 और Lucide आइकन के साथ बनाया गया। तकनीकी भर्ती और इंटर्नशिप मूल्यांकन के लिए अधिकृत।',
    },

    // Sandbox commands
    sandbox: {
      init: (title: string) => `वर्चुअल सैंडबॉक्स नोड प्रारंभ: [${title.toUpperCase()}]`,
      tunnel: 'सुरक्षित HTTPS टनलिंग... कनेक्टेड',
      host: 'होस्ट: github.com/krishnakonakala',
      stack: (s: string) => `सक्रिय स्टैक: ${s}`,
      desc: (d: string) => `विवरण: ${d}`,
      status: (m: string) => `स्थिति: ${m}`,
      helpHint: "'help', 'run', 'features' या 'exit' टाइप करें।",
      helpTitle: 'उपलब्ध कमांड:',
      helpRun: '  run      - परियोजना का सिमुलेटेड निष्पादन चक्र प्रारंभ करें',
      helpFeatures: '  features - कोडेड मॉड्यूलर फ़ंक्शन का सारांश',
      helpTech: '  tech     - लाइब्रेरी संस्करण और फ्रेमवर्क पैरामीटर',
      helpClear: '  clear    - कंसोल बफर साफ करें',
      helpExit: '  exit     - वर्चुअल पोर्ट इंटीग्रेशन समाप्त करें',
      runBoot: '> boot --release --target=localhost',
      runLoading: '[INFO] निर्भरताएँ लोड हो रही हैं... पूर्ण',
      runSuccess: '[SUCCESS] ऐप पोर्ट 3000 पर शुरू हुआ!',
      runStream: (m: string) => `[LIVE-STREAM] सिस्टम स्थिति: ${m}`,
      featuresTitle: 'फ़ीचर मॉड्यूल:',
      techTitle: 'टेक कोर स्टैक:',
      unknownCmd: (c: string) => `त्रुटि: कमांड '${c}' अपरिभाषित है।`,
      helpSuggestion: "सेटिंग्स देखने के लिए 'help' लिखें।",
    },
  },
} as const;

export type Translations = typeof translations.en;
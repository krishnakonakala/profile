/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
// @ts-ignore
import profilePhoto from './assets/images/profile_photo_1781284458998.jpg';
import {
  User,
  GraduationCap,
  Award,
  Code,
  FolderDot,
  Send,
  Linkedin,
  Github,
  Mail,
  Phone,
  MapPin,
  ChevronRight,
  Download,
  Moon,
  Sun,
  Search,
  CheckCircle2,
  Laptop,
  Terminal,
  Layers,
  ArrowRight,
  TrendingUp,
  Clock,
  Sparkles,
  FileText,
  X,
  History,
  Info,
  ShieldCheck
} from 'lucide-react';

// Define Interface for project
interface Project {
  id: number;
  title: string;
  category: "AI & Automation" | "Web Apps" | "Systems";
  github?: string;
  description: string;
  techStack: string[];
  features: string[];
  metrics: string;
  demoUrl?: string;
}

// Define Interface for Certification
interface Certification {
  id: number;
  title: string;
  issuer: string;
  date: string;
  verifyCode?: string;
  verifyLink?: string;
  badgeColor: string;
}

export default function App() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [activeSection, setActiveSection] = useState('home');
  const [skillSearchQuery, setSkillSearchQuery] = useState('');
  const [copiedText, setCopiedText] = useState('');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [resumeOpen, setResumeOpen] = useState(false);
  const [photoFailed, setPhotoFailed] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const [glowPos, setGlowPos] = useState({ x: 50, y: 50 });

  const handleHeroMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = heroRef.current?.getBoundingClientRect();
    if (!rect) return;
    setGlowPos({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };
  const [activeCategory, setActiveCategory] = useState<'All' | 'AI & Automation' | 'Web Apps' | 'Systems'>('All');
  
  // Custom contact submissions
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    role: 'Recruiter',
    company: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [submissionsHistory, setSubmissionsHistory] = useState<any[]>([]);
  const [showHistory, setShowHistory] = useState(false);
  
  // Simulated Interactive CLI / Sandbox States for projects
  const [sandboxProject, setSandboxProject] = useState<number | null>(null);
  const [sandboxInput, setSandboxInput] = useState('');
  const [sandboxOutput, setSandboxOutput] = useState<string[]>([]);

  // Theme Management
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'dark' | 'light' | null;
    const initialTheme = savedTheme || 'dark';
    setTheme(initialTheme);
    if (initialTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    const updatedTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(updatedTheme);
    localStorage.setItem('theme', updatedTheme);
    if (updatedTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  // Load Submissions History
  useEffect(() => {
    const history = localStorage.getItem('portfolio_contact_history');
    if (history) {
      setSubmissionsHistory(JSON.parse(history));
    }
  }, []);

  // Tracking Active section during scrolling
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'certifications', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const triggerCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(label);
    setTimeout(() => setCopiedText(''), 2000);
  };

  // Skill Database
  const skillCategories = [
    {
      name: "Programming Languages",
      icon: <Code className="w-5 h-5 text-indigo-500" />,
      skills: ["Python", "C", "JavaScript", "HTML5", "CSS3", "SQL", "C#"]
    },
    {
      name: "Web Development",
      icon: <Laptop className="w-5 h-5 text-cyan-500" />,
      skills: ["Frontend Development", "Responsive Web Design", "Bootstrap", "Tailwind CSS", "React"]
    },
    {
      name: "Version Control",
      icon: <Github className="w-5 h-5 text-neutral-400" />,
      skills: ["Git", "GitHub"]
    },
    {
      name: "AI & Productivity",
      icon: <Sparkles className="w-5 h-5 text-amber-500" />,
      skills: ["ChatGPT", "Prompt Engineering", "AI Website Builders", "AI Productivity Tools"]
    },
    {
      name: "Development Tools",
      icon: <Layers className="w-5 h-5 text-emerald-500" />,
      skills: ["VS Code", "Canva", "Figma", "Microsoft Office"]
    },
    {
      name: "Soft Skills",
      icon: <User className="w-5 h-5 text-rose-500" />,
      skills: ["Communication", "Leadership", "Problem Solving", "Critical Thinking", "Adaptability", "Teamwork", "Time Management", "Presentation Skills", "Analytical Reasoning"]
    }
  ];

  // Projects Database
  const projectsList: Project[] = [
    {
      id: 1,
      title: "APTRANSCO Future Grid",
      category: "Systems",
      github: "https://github.com/krishnakonakala/aptransco-future-grid.git",
      description: "An innovative technology-driven solution engineered to modernize and optimize future electrical power grid infrastructure through smart digital transformations.",
      techStack: ["HTML", "CSS", "JavaScript", "Modern UI Design", "Responsive Layout", "GitHub"],
      features: [
        "Interactive simulation dashboard tracking real-world grid performance constraints.",
        "Beautiful glassmorphic charts demonstrating prospective load optimization metrics.",
        "Smart alerting protocols for simulated voltage distribution fluctuations.",
        "Highly integrated document archive and resource mapping tools for coordinators."
      ],
      metrics: "Ready for digital transformation scaling audits"
    },
    {
      id: 2,
      title: "Personal Portfolio Website",
      category: "Web Apps",
      github: "https://github.com/krishnakonakala/krishnakonakala.github.io",
      description: "A fully responsive, highly interactive elite portfolio website detailing portfolio components, academic records, certifications, and technical proficiencies.",
      techStack: ["React", "Tailwind CSS", "TypeScript", "Vite", "Motion Engine", "lucide-react"],
      features: [
        "Stunning Vercel & Linear hybrid minimal style elements.",
        "Responsive light/dark scheme toggle with robust state memory storage.",
        "Stateful mock sandbox interface where recruiters can execute simulated terminal demos.",
        "Print-ready layout optimizing standard A4 resumes instantly."
      ],
      metrics: "Optimized 100% desktop & mobile viewport coverage"
    },
    {
      id: 3,
      title: "AI Productivity Tool",
      category: "AI & Automation",
      description: "An artificial intelligence assistant framework designed to automate repetitive coding micro-tasks and elevate personal developer output efficiency.",
      techStack: ["Python", "AI Integration", "Automation Scripts", "Prompt Engineering", "VS Code APIs"],
      features: [
        "Automated markdown summarization tool formatting source files on the fly.",
        "Intelligent contextual code comment writer adapting to structured blocks.",
        "Time management integration keeping developers aligned to standard work sprints."
      ],
      metrics: "Demonstrates AI workflow and productivity automation alignment"
    },
    {
      id: 4,
      title: "Student Management System",
      category: "Systems",
      description: "A robust and secure administrative portal for tracking student records, managing course progress, and summarizing batch performance analytics.",
      techStack: ["Python", "HTML", "CSS", "SQL Database Management", "Local Storage", "CSV Engine"],
      features: [
        "Comprehensive database interaction support for course mapping and grade reporting.",
        "Sophisticated user validation controls securing academic performance spreadsheets.",
        "Dynamic tabular interfaces allowing responsive editing of student profile indices."
      ],
      metrics: "Perfect tool for educational registrar optimization"
    },
    {
      id: 5,
      title: "Weather Application",
      category: "Web Apps",
      description: "An elegant, minimalist meteorological weather tracker summarizing real-time geographical indices and local forecasting variables.",
      techStack: ["JavaScript", "HTML5", "CSS3", "REST Web APIs", "Location Services", "Weather Assets"],
      features: [
        "Dynamic background adjustment that accurately responds to local humidity and time.",
        "Detailed five-day atmospheric pressure and temperature analytics.",
        "Search autocomplete mechanism facilitating rapid city lookups globally."
      ],
      metrics: "Delivers live accurate updates from worldwide servers"
    },
    {
      id: 6,
      title: "To-Do Task Manager",
      category: "Web Apps",
      description: "A task-slicing productivity app implementing priority metrics, color-coded tag sorting, and persistent progress logging indices.",
      techStack: ["JavaScript", "React Rules", "Tailwind CSS", "Local Storage Persistence", "State Checklists"],
      features: [
        "Elegant categorical filters arranging active tasks by professional or academic urgency.",
        "Instant responsive task completion charts plotting immediate productivity indicators.",
        "Local disk persistence backing up active checklists automatically cross-sessions."
      ],
      metrics: "Over 500 tasks tracked and resolved during internal testing phases"
    }
  ];

  // Certifications Database
  const certificationsList: Certification[] = [
    {
      id: 1,
      title: "CS50's Introduction to Programming with Python",
      issuer: "Harvard University (HarvardX)",
      date: "2025",
      verifyCode: "CS50P-HV-25",
      badgeColor: "from-red-500 to-amber-600"
    },
    {
      id: 2,
      title: "Foundational C# with Microsoft",
      issuer: "Microsoft + freeCodeCamp",
      date: "2025",
      verifyCode: "MSFT-F-C-881",
      badgeColor: "from-purple-500 to-indigo-600"
    },
    {
      id: 3,
      title: "Web Development Certification",
      issuer: "SRM University AP",
      date: "2025",
      verifyCode: "SRM-WD-CAP-09",
      badgeColor: "from-blue-500 to-cyan-600"
    },
    {
      id: 4,
      title: "Analytical Reasoning Certification",
      issuer: "SRM University AP",
      date: "2025",
      verifyCode: "SRM-AR-93",
      badgeColor: "from-emerald-500 to-teal-600"
    },
    {
      id: 5,
      title: "Communication Skills Certification",
      issuer: "SRM University AP",
      date: "2025",
      verifyCode: "SRM-COM-12",
      badgeColor: "from-rose-500 to-pink-600"
    },
    {
      id: 6,
      title: "C Programming Certification",
      issuer: "SRM University AP",
      date: "2025",
      verifyCode: "SRM-CP-85",
      badgeColor: "from-orange-500 to-amber-600"
    },
    {
      id: 7,
      title: "Training Hackathon Participation",
      issuer: "Technical Learning Programs AP",
      date: "2025",
      badgeColor: "from-teal-500 to-emerald-600"
    },
    {
      id: 8,
      title: "Internship Selection Certificate",
      issuer: "SRM University Tech Board",
      date: "2025",
      badgeColor: "from-indigo-500 to-sky-600"
    }
  ];

  // Learning Timeline Highlights
  const timelineEvents = [
    {
      id: 1,
      period: "Current Focus (2025 - Present)",
      title: "Computer Science Engineering at SRM University AP",
      subtitle: "B.Tech Journey & Innovation Exploration",
      description: "Maintaining competitive academic records with a stellar CGPA of 9.31. Actively engaging in foundational hackathons, programming workflows, and web product deployment."
    },
    {
      id: 2,
      period: "Early 2025",
      title: "Professional Certification Rush",
      subtitle: "Securing Credentials from Harvard & Microsoft",
      description: "Completed Harvard CS50's Python framework and the Foundational C# program by Microsoft with FreeCodeCamp, alongside core university web modules."
    },
    {
      id: 3,
      period: "Late 2024",
      title: "APTRANSCO Future Grid Construction",
      subtitle: "Translating Advanced Concepts into Practice",
      description: "Developed an interactive web dashboard for monitoring power grids, laying down strong practical blocks in HTML, CSS, and modern user-interaction libraries."
    },
    {
      id: 4,
      period: "2022 - 2024",
      title: "Intermediate Board Examinations",
      subtitle: "Outstanding Academic Foundation",
      description: "Graduated Intermediate Education with a superb cumulative score of 95.8%, reinforcing strong analytical reasoning and logical computation."
    }
  ];

  // Handle Contact Form Submit Page
  const handleContactSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!contactForm.name || !contactForm.email || !contactForm.message) return;

    setFormStatus('submitting');
    setTimeout(() => {
      const newSubmission = {
        ...contactForm,
        id: Date.now(),
        date: new Date().toLocaleDateString() + ' ' + new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      const updatedHistory = [newSubmission, ...submissionsHistory];
      setSubmissionsHistory(updatedHistory);
      localStorage.setItem('portfolio_contact_history', JSON.stringify(updatedHistory));
      
      setFormStatus('success');
      setContactForm({
        name: '',
        email: '',
        role: 'Recruiter',
        company: '',
        message: ''
      });
      setTimeout(() => setFormStatus('idle'), 5000);
    }, 1500);
  };

  // Launch simulated terminal playground for the selected project
  const launchSandbox = (project: Project) => {
    setSandboxProject(project.id);
    setSandboxInput('');
    const techFormatted = project.techStack.join(', ');
    setSandboxOutput([
      `Initializing Virtual Sandbox Node for: [${project.title.toUpperCase()}]`,
      `Secure HTTPS tunneling... CONNECTED`,
      `Host: github.com/krishnakonakala`,
      `Active Stack Detected: ${techFormatted}`,
      `Description: ${project.description}`,
      `Status indicator: ${project.metrics}`,
      `Type 'help' or 'run' or 'features' or 'exit' below to test system bindings.`
    ]);
  };

  const handleSandboxCommand = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const cmd = sandboxInput.trim().toLowerCase();
    if (!cmd) return;

    let response: string[] = [];
    const proj = projectsList.find(p => p.id === sandboxProject);
    
    if (cmd === 'exit') {
      setSandboxProject(null);
      return;
    } else if (cmd === 'help') {
      response = [
        `Command Options Available:`,
        `  run      - Starts a simulated execution cycle of the project`,
        `  features - Summarizes distinct modular functions coded`,
        `  tech     - Lists library versions, framework parameters`,
        `  clear    - Wipes system console buffers`,
        `  exit     - Terminates virtual port integration`
      ];
    } else if (cmd === 'clear') {
      setSandboxOutput([]);
      setSandboxInput('');
      return;
    } else if (cmd === 'run') {
      response = [
        `> boot --release --target=localhost`,
        `[INFO] Loading dependencies from repository manifest... DONE`,
        `[SUCCESS] App started on port 3000 inside simulated runtime!`,
        `[LIVE-STREAM] Dynamic parameters optimal. System status: ${proj?.metrics || 'Active'}`
      ];
    } else if (cmd === 'features') {
      response = [
        `Feature Modules Coded:`,
        ...(proj?.features.map((f, i) => `  * [${i + 1}] ${f}`) || [`No registered lists.`])
      ];
    } else if (cmd === 'tech') {
      response = [
        `Tech Core Stack:`,
        ...(proj?.techStack.map(t => `  > ${t}`) || [])
      ];
    } else {
      response = [
        `Error: command '${cmd}' undefined in basic sandbox environment.`,
        `Write 'help' to review catalog settings.`
      ];
    }

    setSandboxOutput(prev => [...prev, `krishnateja@sandbox:~$ ${sandboxInput}`, ...response]);
    setSandboxInput('');
  };

  const filteredProjects = activeCategory === 'All' 
    ? projectsList 
    : projectsList.filter(p => p.category === activeCategory);

  return (
    <div className={`min-h-screen transition-colors duration-350 bg-neutral-50 text-neutral-950 dark:bg-neutral-950 dark:text-neutral-50 grid-mesh selection:bg-indigo-500/20 selection:text-indigo-500`}>
      
      {/* GLOBAL TOAST copied feedback */}
      {copiedText && (
        <div id="copied-toast" role="status" aria-live="polite" className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-4 py-3 text-sm text-white rounded-xl shadow-xl bg-neutral-900 border border-neutral-800 animate-slide-up">
          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
          <span>Copied <strong className="font-semibold text-emerald-400">{copiedText}</strong> to clipboard</span>
        </div>
      )}

      {/* HEADER NAVBAR */}
      <header id="main-header" className="sticky top-0 z-40 w-full border-b border-neutral-200/50 dark:border-white/5 bg-neutral-50/80 dark:bg-neutral-950/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          
          {/* Logo Brand */}
          <a href="#home" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-neutral-900 dark:bg-white flex items-center justify-center font-mono font-bold text-sm text-white dark:text-black shadow-sm group-hover:scale-105 transition-transform duration-250">
              KT
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-sm tracking-wide group-hover:text-indigo-500 transition-colors duration-250">
                K. Krishna Teja
              </span>
              <span className="text-[10px] text-neutral-500 dark:text-neutral-400 font-mono">
                SRM CSE Student
              </span>
            </div>
          </a>

          {/* Nav Items - Desktop */}
          <nav id="desktop-nav" className="hidden md:flex items-center gap-1 text-sm font-medium">
            {[
              { id: 'about', label: 'About' },
              { id: 'skills', label: 'Skills' },
              { id: 'projects', label: 'Projects' },
              { id: 'certifications', label: 'Certifications' },
              { id: 'experience', label: 'Timeline' },
              { id: 'contact', label: 'Contact' },
            ].map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className={`px-3 py-1.5 rounded-lg transition-colors duration-200 ${
                  activeSection === section.id 
                    ? 'bg-neutral-200/60 dark:bg-neutral-800/80 text-indigo-600 dark:text-indigo-400 font-semibold' 
                    : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-neutral-50 hover:bg-neutral-200/30 dark:hover:bg-neutral-800'
                }`}
              >
                {section.label}
              </a>
            ))}
          </nav>

          {/* Action Tools */}
          <div className="flex items-center gap-3">
            <button
              id="theme-toggle-btn"
              onClick={toggleTheme}
              className="p-2 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-900 dark:hover:bg-neutral-800 text-neutral-700 dark:text-neutral-300 transition-all duration-200 shadow-sm"
              aria-label="Toggle Theme Scheme"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            
            <button
              id="view-resume-btn"
              onClick={() => setResumeOpen(true)}
              className="hidden sm:flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold bg-neutral-900 text-neutral-100 dark:bg-white dark:text-black hover:bg-neutral-800 dark:hover:bg-neutral-200 shadow transition-all duration-200 hover:-translate-y-0.5"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume Summary</span>
            </button>
          </div>
        </div>
      </header>

      {/* PHONE NAVIGATION TABS bar */}
      <div id="mobile-nav-bar" className="md:hidden fixed bottom-4 left-4 right-4 z-40 px-3 py-2.5 rounded-2xl glass-panel shadow-2xl flex justify-around items-center gap-1">
        {[
          { id: 'about', label: 'About', icon: <User className="w-4 h-5" /> },
          { id: 'skills', label: 'Skills', icon: <Code className="w-4 h-5" /> },
          { id: 'projects', label: 'Projects', icon: <FolderDot className="w-4 h-5" /> },
          { id: 'certifications', label: 'Certs', icon: <Award className="w-4 h-5" /> },
          { id: 'contact', label: 'Contact', icon: <Send className="w-4 h-5" /> }
        ].map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={`flex flex-col items-center gap-0.5 px-2 py-1 rounded-xl text-[10px] font-semibold transition-all ${
              activeSection === item.id 
                ? 'text-indigo-600 dark:text-indigo-400 scale-105 font-bold' 
                : 'text-neutral-500 dark:text-neutral-400'
            }`}
          >
            {item.icon}
            <span>{item.label}</span>
          </a>
        ))}
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16 space-y-24 md:space-y-40 pb-28">

        {/* HERO INTRO BLOCK */}
        <section
          id="home"
          ref={heroRef}
          onMouseMove={handleHeroMouseMove}
          className="relative grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center pt-6 md:pt-12 overflow-hidden"
        >

          {/* Mouse-follow glow */}
          <div
            className="hidden lg:block absolute inset-0 pointer-events-none -z-10 transition-opacity duration-500"
            style={{
              background: `radial-gradient(600px circle at ${glowPos.x}% ${glowPos.y}%, rgba(99,102,241,0.08), transparent 60%)`,
            }}
            aria-hidden="true"
          ></div>

          {/* Subtle Background Accent Blurs */}
          <div className="absolute top-10 right-10 w-72 h-72 bg-indigo-500/10 dark:bg-indigo-500/5 rounded-full aurora-blob pointer-events-none -z-10 animate-pulse-slow animate-aurora"></div>
          <div className="absolute bottom-10 left-10 w-80 h-80 bg-cyan-500/10 dark:bg-cyan-500/5 rounded-full aurora-blob pointer-events-none -z-10 animate-pulse-slow"></div>

          <div className="lg:col-span-7 space-y-6 md:space-y-8 text-center lg:text-left">
            
            {/* Status indicator badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-neutral-200 dark:border-neutral-800/80 bg-white/50 dark:bg-neutral-900/40 text-xs font-mono text-neutral-600 dark:text-neutral-400 shadow-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span>Open to Internships & Hackathons</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-neutral-200 dark:border-neutral-800/80 bg-white/50 dark:bg-neutral-900/40 text-xs font-mono text-indigo-600 dark:text-indigo-400 shadow-sm">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Verified Profile</span>
              </div>
            </div>

            {/* Giant Title */}
            <div className="space-y-1 md:space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight font-sans text-neutral-950 dark:text-white leading-tight">
                KONAKALA <span className="text-gradient-accent">KRISHNA TEJA</span>
              </h1>
              <p className="text-lg sm:text-xl font-medium tracking-tight text-neutral-500 dark:text-neutral-400 max-w-xl mx-auto lg:mx-0">
                Building Intelligent Digital Solutions Through Code, AI & Innovation
              </p>
            </div>

            <p className="text-base text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              I am a highly motivated Computer Science Engineering student at SRM University AP with a strong passion for software development, artificial intelligence, and modern web technologies. I enjoy transforming ideas into impactful digital experiences while solving real-world challenges.
            </p>

            {/* CTA action buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3">
              <a 
                href="#projects" 
                className="glow-on-hover inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold bg-indigo-600 text-white hover:bg-indigo-700 hover:shadow-lg hover:shadow-indigo-500/10 transition-all duration-200 hover:-translate-y-0.5"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a 
                href="#skills" 
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold border border-neutral-200 bg-white hover:bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-900 dark:hover:bg-neutral-800 text-neutral-800 dark:text-neutral-200 transition-all duration-200 hover:-translate-y-0.5 shadow-sm"
              >
                <span>Explore Skills</span>
              </a>
              <button 
                onClick={() => setResumeOpen(true)}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold bg-neutral-900/5 hover:bg-neutral-900/10 dark:bg-white/5 dark:hover:bg-white/10 text-neutral-900 dark:text-white transition-all duration-200 hover:-translate-y-0.5"
              >
                <Download className="w-4 h-4" />
                <span>Resume CV</span>
              </button>
              <a 
                href="#contact" 
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-indigo-600 dark:text-indigo-400 hover:underline"
              >
                <span>Contact Me</span>
              </a>
            </div>

            {/* Quick social channel anchors */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4 border-t border-neutral-200/50 dark:border-neutral-800/50 text-xs font-mono text-neutral-500 dark:text-neutral-400 select-none">
              <span className="font-semibold uppercase tracking-wider text-neutral-400">Connect:</span>
              <a 
                href="mailto:konakalakrishnateja01@gmail.com" 
                className="flex items-center gap-1 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                title="Send active email to Krishna"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Email</span>
              </a>
              <a 
                href="https://www.linkedin.com/in/krishna-teja-konakala-995b1432b" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-1 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              >
                <Linkedin className="w-3.5 h-3.5" />
                <span>LinkedIn</span>
              </a>
              <a 
                href="https://github.com/krishnakonakala" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-1 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>
            </div>
          </div>

          {/* Profile Frame with Orbiting Badges */}
          <div className="lg:col-span-5 flex justify-center items-center relative">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full flex items-center justify-center p-3 border-2 border-dashed border-neutral-200/80 dark:border-white/10 ">
              
              {/* Actual Professional photograph container */}
              <div className="w-full h-full rounded-full overflow-hidden border border-neutral-200 dark:border-neutral-800 shadow-2xl relative group bg-neutral-100 dark:bg-neutral-900">
                <img
                  src={profilePhoto}
                  alt="Portrait of Konakala Krishna Teja"
                  width={800}
                  height={1376}
                className="w-full h-full object-cover transition-transform duration-500 select-none"
style={{ objectPosition: "center 20%" }}
                  // @ts-ignore fetchpriority is valid HTML but not yet in React's TS types
                  fetchpriority="high"
                  decoding="async"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    setPhotoFailed(true);
                  }}
                />
                {photoFailed && (
                  <div className="absolute inset-0 w-full h-full flex items-center justify-center bg-indigo-900 text-white font-bold text-6xl">
                    KT
                  </div>
                )}
                
                {/* Tech HUD overlay on hover */}
                <div className="absolute inset-0 bg-neutral-950/60 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center text-white transition-opacity duration-300 p-4 text-center">
                  <div className="p-2 rounded-full bg-indigo-600 mb-2">
                    <Sparkles className="w-5 h-5 text-white" />
                  </div>
                  <span className="font-semibold text-sm">CGPA: 9.31</span>
                  <span className="text-xs text-neutral-300">SRM CSE Undergraduate</span>
                </div>
              </div>

              {/* FLOATING ICON 1: Python */}
              <div className="absolute -top-1 -left-1 w-12 h-12 rounded-2xl glass-panel flex items-center justify-center animate-float shadow-lg group">
                <span className="text-xs font-mono font-bold text-indigo-500 hover:scale-110 duration-150">Py</span>
              </div>

              {/* FLOATING ICON 2: React */}
              <div className="absolute top-1/2 -right-6 w-12 h-12 rounded-2xl glass-panel flex items-center justify-center animate-float-delayed shadow-lg">
                <span className="text-xs font-mono font-bold text-cyan-400">React</span>
              </div>

              {/* FLOATING ICON 3: AI Code */}
              <div className="absolute -bottom-4 right-1/4 w-12 h-12 rounded-2xl glass-panel flex items-center justify-center animate-float shadow-lg">
                <Sparkles className="w-5 h-5 text-amber-500" />
              </div>

              {/* FLOATING ICON 4: JS */}
              <div className="absolute top-1/3 -left-6 w-12 h-12 rounded-2xl glass-panel flex items-center justify-center animate-float-delayed shadow-lg">
                <span className="text-xs font-mono font-bold text-yellow-500">JS</span>
              </div>

              {/* Outer halo */}
              <div className="absolute inset-0 rounded-full border border-indigo-500/10 pointer-events-none scale-110"></div>
            </div>
          </div>
        </section>

        {/* METRICS HUB / ACHIEVEMENT COUNTERS */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {[
            { metric: "9.31", suffix: "", label: "Engineering CGPA", desc: "SRM University AP", icon: <GraduationCap className="text-indigo-500" /> },
            { metric: "95.8", suffix: "%", label: "Intermediate Score", desc: "Top Core Excellence", icon: <Award className="text-amber-500" /> },
            { metric: "10+", suffix: "", label: "Earned Certs", desc: "Harvard, Microsoft & SRM", icon: <CheckCircle2 className="text-emerald-500" /> },
            { metric: "Hundreds", suffix: "+", label: "Developer Hours", desc: "C, Python, JS & SQL", icon: <Clock className="text-cyan-500" /> }
          ].map((item, idx) => (
            <div 
              key={idx} 
              className="p-5 md:p-6 rounded-2xl border border-neutral-200/60 bg-white/70 dark:border-neutral-800/60 dark:bg-neutral-900/40 backdrop-blur-sm shadow-sm hover:border-neutral-300 dark:hover:border-neutral-700 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-3 text-neutral-400">
                <span className="p-2 rounded-xl bg-neutral-100 dark:bg-neutral-800/80">
                  {item.icon}
                </span>
                <span className="text-xs font-mono">0{idx+1}</span>
              </div>
              <div className="space-y-1">
                <div className="text-2xl md:text-3xl font-extrabold font-sans text-neutral-950 dark:text-white">
                  {item.metric}{item.suffix}
                </div>
                <div className="text-xs sm:text-sm font-semibold text-neutral-700 dark:text-neutral-200">
                  {item.label}
                </div>
                <div className="text-[11px] text-neutral-400 dark:text-neutral-500 font-medium">
                  {item.desc}
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* COMPREHENSIVE STORY & ACADEMICS PROFILE */}
        <section id="about" className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16 items-start">
          
          <div className="lg:col-span-12">
            <div className="flex flex-col md:flex-row items-baseline justify-between gap-4 mb-8">
              <div className="space-y-1">
                <div className="text-xs font-mono text-indigo-600 dark:text-indigo-400 uppercase tracking-widest font-semibold flex items-center gap-1.5">
                  <User className="w-3 h-3" />
                  <span>Personal Brand Story</span>
                </div>
                <h2 className="text-2xl md:text-3xl sm:text-4xl font-black tracking-tight text-neutral-950 dark:text-white">
                  Introduction & Core Competence
                </h2>
              </div>
              <div className="h-[2px] flex-grow bg-neutral-200 dark:bg-neutral-800 rounded"></div>
            </div>
          </div>

          {/* Written Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-xl font-bold dark:text-neutral-100 text-neutral-900 leading-tight">
              A Passionate Technologist Driven by Growth and Practical Execution
            </h3>
            <p className="text-neutral-600 dark:text-neutral-300 text-base leading-relaxed">
              I am currently pursuing my <strong>Bachelor of Technology in Computer Science Engineering at SRM University AP (2025–2029)</strong>. Deeply passionate about the intersections of software architecture, artificial intelligence, and responsive web paradigms, I treat the web as a dynamic tool of utility, optimizing systems for accessibility, modularity, and speed.
            </p>
            <p className="text-neutral-600 dark:text-neutral-300 text-base leading-relaxed">
              With a background anchored by academic excellence—demonstrated by my outstanding <strong>95.8% Intermediate core score</strong> and my current university GPA metrics of <strong>9.31 CGPA</strong>—I constantly seek avenues to deploy what I absorb. Whether that means building clean structural simulators for power grid organizations or securing certifications from global leaders like Harvard and Microsoft, I move with purpose.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-xl border border-neutral-100 dark:border-neutral-900 bg-neutral-100/40 dark:bg-neutral-900/40">
                <h4 className="font-semibold text-sm mb-2 text-indigo-600 dark:text-indigo-400">Core Engineering Drive</h4>
                <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed">
                  Translating complex theoretical data structures and computational patterns into real operational products.
                </p>
              </div>
              <div className="p-4 rounded-xl border border-neutral-100 dark:border-neutral-900 bg-neutral-100/40 dark:bg-neutral-900/40">
                <h4 className="font-semibold text-sm mb-2 text-indigo-600 dark:text-indigo-400">Continuous AI Integration</h4>
                <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed">
                  Leveraging modern large model tools and context engineering to streamline software development timelines.
                </p>
              </div>
            </div>
          </div>

          {/* Academic Details Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-2xl glass-panel border border-neutral-200/80 dark:border-neutral-800/80 shadow-md space-y-6">
              <h3 className="text-base font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 flex items-center gap-2">
                <GraduationCap className="w-4 h-4 text-indigo-500" />
                <span>Academic Record</span>
              </h3>

              {/* SRM School */}
              <div className="space-y-2">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-bold text-sm tracking-tight text-neutral-900 dark:text-white">
                      SRM University AP
                    </h4>
                    <p className="text-xs text-neutral-500 dark:text-neutral-400">
                      Bachelor of Technology (B.Tech), CSE
                    </p>
                  </div>
                  <span className="font-mono text-[10px] uppercase font-bold text-indigo-600 dark:text-indigo-400 px-2 py-0.5 rounded bg-indigo-50/50 dark:bg-indigo-950/40">
                    2025 - 2029
                  </span>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <span className="text-neutral-400">CGPA:</span>
                  <span className="font-extrabold text-neutral-900 dark:text-white">9.31 / 10.0</span>
                </div>
              </div>

              {/* Intermediate */}
              <div className="pt-4 border-t border-neutral-200/60 dark:border-neutral-800 space-y-2">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-bold text-sm tracking-tight text-neutral-900 dark:text-white">
                      Intermediate Board Education
                    </h4>
                    <p className="text-xs text-neutral-500 dark:text-neutral-400">
                      Advanced Mathematical & Scientific Curricula
                    </p>
                  </div>
                  <span className="font-mono text-[10px] uppercase font-bold text-neutral-500 dark:text-neutral-400 px-2 py-0.5 rounded bg-neutral-100 dark:bg-neutral-800/50">
                    Completed
                  </span>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <span className="text-neutral-400">Cumulative Percentage:</span>
                  <span className="font-extrabold text-neutral-900 dark:text-white">95.8%</span>
                </div>
              </div>

              {/* Relevant Coursework List */}
              <div className="pt-4 border-t border-neutral-200/60 dark:border-neutral-800 space-y-3">
                <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-400">Selected Core Coursework:</span>
                <div className="flex flex-wrap gap-1.5">
                  {[
                    "Programming Fundamentals",
                    "Data Structures",
                    "Problem Solving",
                    "Web Development",
                    "Database Systems",
                    "Software Engineering",
                    "Artificial Intelligence"
                  ].map((course, i) => (
                    <span 
                      key={i} 
                      className="text-[10px] px-2 py-1 rounded bg-neutral-100 hover:bg-neutral-200/60 dark:bg-neutral-900 dark:hover:bg-neutral-800/80 text-neutral-700 dark:text-neutral-300 font-mono transition-colors"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* INTERACTIVE SKILL MATRIX & FINDER */}
        <section id="skills" className="space-y-6 md:space-y-8">
          
          <div className="flex flex-col md:flex-row items-baseline justify-between gap-4">
            <div className="space-y-1">
              <div className="text-xs font-mono text-indigo-600 dark:text-indigo-400 uppercase tracking-widest font-semibold flex items-center gap-1.5">
                <Code className="w-3 h-3" />
                <span>Competency Finder</span>
              </div>
              <h2 className="text-2xl md:text-3xl sm:text-4xl font-black tracking-tight text-neutral-950 dark:text-white">
                Technical Skills & Tools
              </h2>
            </div>
            <div className="h-[2px] flex-grow bg-neutral-200 dark:bg-neutral-800 rounded"></div>
          </div>

          <p className="text-neutral-500 dark:text-neutral-400 text-sm max-w-2xl leading-relaxed">
            I believe specialized tools empower developers to craft world-class applications. Use the intelligent search panel below to filter my engineering tools on the fly!
          </p>

          {/* Interactive Search Tool */}
          <div className="max-w-md relative">
            <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-neutral-400">
              <Search className="w-4 h-4" />
            </span>
            <input 
              type="text" 
              placeholder="Search skills (e.g. Python, React, SQL, Git...)"
              value={skillSearchQuery}
              onChange={(e) => setSkillSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-neutral-300/85 dark:border-neutral-800/80 bg-white dark:bg-neutral-900/60 font-mono text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all dark:text-white text-neutral-800"
            />
            {skillSearchQuery && (
              <button 
                onClick={() => setSkillSearchQuery('')}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-xs text-neutral-400 hover:text-indigo-500"
              >
                Clear
              </button>
            )}
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((cat, idx) => {
              // Highlight matching skills
              const filteredSkills = cat.skills.filter(s => 
                s.toLowerCase().includes(skillSearchQuery.trim().toLowerCase())
              );
              
              const isCategoryHidden = skillSearchQuery && filteredSkills.length === 0;

              if (isCategoryHidden) return null;

              return (
                <div 
                  key={idx}
                  className="p-5 rounded-2xl border border-neutral-200/70 bg-white/50 dark:border-white/5 dark:bg-neutral-900/20 backdrop-blur-sm shadow-sm hover:translate-y-[-2px] transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="flex items-center gap-2.5 pb-2.5 border-b border-neutral-200/50 dark:border-white/5">
                      <span className="p-1.5 rounded-lg bg-neutral-100 dark:bg-neutral-800/80">
                        {cat.icon}
                      </span>
                      <h3 className="font-bold text-sm tracking-tight text-neutral-900 dark:text-neutral-100 uppercase">
                        {cat.name}
                      </h3>
                    </div>
                    
                    <div className="flex flex-wrap gap-1.5">
                      {cat.skills.map((skill, skIdx) => {
                        const isMatch = skillSearchQuery && skill.toLowerCase().includes(skillSearchQuery.toLowerCase());
                        return (
                          <span 
                            key={skIdx} 
                            className={`text-xs px-2.5 py-1.5 rounded-lg font-mono font-medium transition-all ${
                              isMatch 
                                ? 'bg-indigo-600 text-white font-bold ring-2 ring-indigo-400 shadow-md' 
                                : 'bg-neutral-100 hover:bg-neutral-200/60 dark:bg-neutral-900/60 dark:hover:bg-neutral-800/80 text-neutral-700 dark:text-neutral-300'
                            }`}
                          >
                            {skill}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* COMPREHENSIVE PROJECTS PORTFOLIO */}
        <section id="projects" className="space-y-8">
          
          <div className="flex flex-col md:flex-row items-baseline justify-between gap-4">
            <div className="space-y-1">
              <div className="text-xs font-mono text-indigo-600 dark:text-indigo-400 uppercase tracking-widest font-semibold flex items-center gap-1.5">
                <FolderDot className="w-3 h-3" />
                <span>Proven Products</span>
              </div>
              <h2 className="text-2xl md:text-3xl sm:text-4xl font-black tracking-tight text-neutral-950 dark:text-white">
                Project Showcase
              </h2>
            </div>
            <div className="h-[2px] flex-grow bg-neutral-200 dark:bg-neutral-800 rounded"></div>
          </div>

          <p className="text-neutral-500 dark:text-neutral-400 text-sm max-w-2xl leading-relaxed">
            A comprehensive overview of my software developments ranging from smart grid platforms to standalone utilities. Click any card to launch a simulated system sandbox in a terminal, or review source controls!
          </p>

          {/* Project Filters */}
          <div className="flex flex-wrap gap-2 pt-2">
            {(['All', 'AI & Automation', 'Web Apps', 'Systems'] as const).map((catName) => (
              <button
                key={catName}
                onClick={() => setActiveCategory(catName)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold font-mono transition-all ${
                  activeCategory === catName
                    ? 'bg-neutral-900 text-white dark:bg-white dark:text-black shadow-md'
                    : 'bg-neutral-100 text-neutral-600 dark:bg-neutral-900 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-200'
                }`}
              >
                {catName === 'All' ? 'All (6)' : catName}
              </button>
            ))}
          </div>

          {/* SIMULATED TERMINAL PLAYGROUND (Rendered floating/flexible if active) */}
          {sandboxProject && (
            <div className="p-4 rounded-2xl bg-neutral-950 border border-neutral-800 text-neutral-100 font-mono text-xs shadow-2xl animate-fade-in space-y-4">
              <div className="flex items-center justify-between border-b border-neutral-800 pb-2">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500"></span>
                  <span className="font-semibold text-[10px] text-neutral-400 uppercase tracking-widest ml-2 flex items-center gap-1">
                    <Terminal className="w-3.5 h-3.5 text-indigo-400" />
                    <span>Intelligent Console Sandbox</span>
                  </span>
                </div>
                <button 
                  onClick={() => setSandboxProject(null)}
                  className="text-neutral-500 hover:text-white"
                  title="Close Terminal Sandbox"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Console display logs area */}
              <div className="space-y-1 bg-neutral-950 p-2 rounded max-h-56 overflow-y-auto no-scrollbar scroll-smooth" aria-live="polite" role="log">
                {sandboxOutput.map((log, lIdx) => (
                  <div key={lIdx} className="leading-relaxed whitespace-pre-wrap">
                    {log}
                  </div>
                ))}
              </div>

              {/* Console command submission bar */}
              <form onSubmit={handleSandboxCommand} className="flex gap-2 p-1.5 bg-neutral-900 rounded-xl items-center">
                <span className="text-neutral-500 pl-1">krishnateja@sandbox:~$</span>
                <input 
                  type="text"
                  placeholder="Type 'help', 'run', 'tech' or 'exit'..."
                  value={sandboxInput}
                  onChange={(e) => setSandboxInput(e.target.value)}
                  className="flex-grow bg-transparent text-white border-none focus:outline-none focus:ring-0 text-xs font-mono"
                  autoFocus
                />
                <button 
                  type="submit" 
                  className="px-3 py-1 rounded bg-indigo-600 hover:bg-indigo-700 text-[10px] font-bold text-white transition-colors"
                >
                  Execute
                </button>
              </form>
            </div>
          )}

          {/* Projects Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <div 
                key={project.id}
                className="group relative flex flex-col justify-between p-6 rounded-2xl border border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-900/40 hover:border-indigo-500/50 dark:hover:border-indigo-500/40 transition-all duration-300 shadow-sm hover:shadow-lg"
              >
                <div className="space-y-4">
                  
                  {/* Category badging */}
                  <div className="flex justify-between items-center text-[10px] font-mono tracking-widest uppercase font-bold text-neutral-400">
                    <span>{project.category}</span>
                    <span className="px-2 py-0.5 rounded bg-neutral-100 dark:bg-neutral-800 text-neutral-500">
                      Proj-0{project.id}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-neutral-950 dark:text-neutral-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-normal line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1">
                    {project.techStack.map((tech, idx) => (
                      <span 
                        key={idx} 
                        className="text-[10px] px-2 py-1 bg-neutral-50 dark:bg-neutral-950 text-neutral-600 dark:text-neutral-300 rounded font-mono border border-neutral-200/50 dark:border-white/5"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Interactive Card Action Buttons */}
                <div className="pt-6 mt-6 border-t border-neutral-100 dark:border-neutral-800 flex items-center justify-between">
                  
                  <div className="flex items-center gap-2">
                    {project.github ? (
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="p-2 rounded-lg bg-neutral-100 dark:bg-neutral-850 hover:bg-neutral-200 dark:hover:bg-neutral-800 text-neutral-600 dark:text-neutral-300 transition-all"
                        title="GitHub Code Repository"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    ) : (
                      <span className="text-[10px] font-mono text-neutral-400">Academic Demo</span>
                    )}

                    <button
                      onClick={() => launchSandbox(project)}
                      className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-[10px] font-bold font-mono bg-indigo-50 text-indigo-600 hover:bg-indigo-100 dark:bg-indigo-950/40 dark:text-indigo-400 dark:hover:bg-indigo-950 transition-colors"
                      title="Launch simulated port execution CLI"
                    >
                      <Terminal className="w-3.5 h-3.5" />
                      <span>Sandbox CLI</span>
                    </button>
                  </div>

                  <button
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex items-center gap-0.5 text-xs font-semibold text-neutral-600 dark:text-neutral-300 hover:text-indigo-600 dark:hover:text-indigo-400"
                    title="Read extensive features breakdown"
                  >
                    <span>Details</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* DETAILED PROJECT INFO POPUP SIDE DRAWER */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
            <div className="w-full max-w-lg rounded-2xl glass-panel p-6 border border-neutral-200 dark:border-neutral-800 shadow-2xl relative block animate-slide-up bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white">
              
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-1.5 rounded-lg bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-800 dark:hover:bg-neutral-750 text-neutral-500 hover:text-neutral-950 dark:hover:text-neutral-50 transition-all"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="space-y-4">
                <span className="text-[10px] font-mono font-bold uppercase text-indigo-600 dark:text-indigo-400 tracking-wider">
                  Project breakdown
                </span>

                <h3 className="text-xl font-bold dark:text-white text-neutral-950">
                  {selectedProject.title}
                </h3>

                <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                  {selectedProject.description}
                </p>

                <div className="space-y-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-neutral-400">Key Features Engineered:</span>
                  <ul className="text-xs space-y-1.5 pl-4 list-disc text-neutral-600 dark:text-neutral-300">
                    {selectedProject.features.map((feat, idx) => (
                      <li key={idx}>{feat}</li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-2 pt-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-neutral-400">Project Target Status:</span>
                  <div className="p-3 rounded-xl bg-indigo-50/50 dark:bg-indigo-950/20 border border-indigo-100/30 text-xs font-mono text-indigo-600 dark:text-indigo-300">
                    {selectedProject.metrics}
                  </div>
                </div>

                <div className="pt-4 flex justify-between gap-3 items-center">
                  <div className="flex flex-wrap gap-1">
                    {selectedProject.techStack.slice(0, 3).map((t, i) => (
                      <span key={i} className="text-[10px] px-2 py-0.5 bg-neutral-100 dark:bg-neutral-800 rounded text-neutral-600 dark:text-neutral-400">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-2">
                    {selectedProject.github && (
                      <a 
                        href={selectedProject.github}
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="px-4 py-2 rounded-xl text-xs font-semibold bg-neutral-900 hover:bg-neutral-800 dark:bg-white dark:text-black dark:hover:bg-neutral-200 transition-colors inline-flex items-center gap-1.5"
                      >
                        <Github className="w-3.5 h-3.5" />
                        <span>Source Code</span>
                      </a>
                    )}
                    <button 
                      onClick={() => {
                        setSelectedProject(null);
                        launchSandbox(selectedProject);
                      }}
                      className="px-4 py-2 rounded-xl text-xs font-semibold border border-neutral-200 dark:border-neutral-800 hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors inline-flex items-center gap-1"
                    >
                      <Terminal className="w-3.5 h-3.5" />
                      <span>Launch Sandbox</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* DIRECT CERTIFICATIONS SHIELD */}
        <section id="certifications" className="space-y-8">
          
          <div className="flex flex-col md:flex-row items-baseline justify-between gap-4">
            <div className="space-y-1">
              <div className="text-xs font-mono text-indigo-600 dark:text-indigo-400 uppercase tracking-widest font-semibold flex items-center gap-1.5">
                <Award className="w-3 h-3" />
                <span>Verified Credentials</span>
              </div>
              <h2 className="text-2xl md:text-3xl sm:text-4xl font-black tracking-tight text-neutral-950 dark:text-white">
                Academic & Industry Achievements
              </h2>
            </div>
            <div className="h-[2px] flex-grow bg-neutral-200 dark:bg-neutral-800 rounded"></div>
          </div>

          <p className="text-neutral-500 dark:text-neutral-400 text-sm max-w-2xl leading-relaxed">
            I am highly committed to structured learning paths. Below are the registered certifications I have earned alongside university programs.
          </p>

          {/* Certifications Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {certificationsList.map((cert) => (
              <div 
                key={cert.id}
                className="p-5 rounded-2xl border border-neutral-200/80 bg-white dark:border-neutral-800 dark:bg-neutral-900/30 hover:border-neutral-300 dark:hover:border-neutral-700 transition-all duration-300 shadow-sm flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex justify-between items-start">
                    <span className="p-2 rounded-xl bg-neutral-50 dark:bg-neutral-850">
                      <Award className="w-4 h-4 text-indigo-500" />
                    </span>
                    <span className="text-xs font-mono text-neutral-400">{cert.date}</span>
                  </div>
                  
                  <h3 className="font-bold text-sm tracking-tight text-neutral-900 dark:text-neutral-100 line-clamp-2">
                    {cert.title}
                  </h3>
                  
                  <p className="text-xs font-semibold text-neutral-500 dark:text-neutral-400">
                    {cert.issuer}
                  </p>
                </div>

                <div className="pt-3 border-t border-neutral-100 dark:border-neutral-800 flex items-center justify-between">
                  {cert.verifyCode ? (
                    <button
                      onClick={() => triggerCopy(cert.verifyCode!, "Code")}
                      className="text-[10px] font-mono text-neutral-400 hover:text-indigo-500 dark:hover:text-indigo-400"
                      title="Click to copy registration ID"
                    >
                      ID: {cert.verifyCode}
                    </button>
                  ) : (
                    <span className="text-[10px] font-mono text-neutral-400">-</span>
                  )}
                  
                  <span className="text-[10px] font-bold text-indigo-600 dark:text-indigo-400">Verified ✓</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* TIMELINE METRICS ROW */}
        <section id="experience" className="space-y-8">
          
          <div className="flex flex-col md:flex-row items-baseline justify-between gap-4">
            <div className="space-y-1">
              <div className="text-xs font-mono text-indigo-600 dark:text-indigo-400 uppercase tracking-widest font-semibold flex items-center gap-1.5">
                <TrendingUp className="w-3 h-3" />
                <span>Professional Development</span>
              </div>
              <h2 className="text-2xl md:text-3xl sm:text-4xl font-black tracking-tight text-neutral-950 dark:text-white">
                Academic & Learning Journey
              </h2>
            </div>
            <div className="h-[2px] flex-grow bg-neutral-200 dark:bg-neutral-800 rounded"></div>
          </div>

          {/* Vercel-like Elegant vertical timeline lines */}
          <div className="relative border-l border-neutral-200/80 dark:border-white/5 pl-6 sm:pl-10 ml-2 sm:ml-4 space-y-10">
            {timelineEvents.map((ev) => (
              <div key={ev.id} className="relative group">
                
                {/* Concentric node point */}
                <span className="absolute -left-[31px] sm:-left-[47px] top-1.5 flex h-4 w-4 sm:h-5 sm:w-5 items-center justify-center rounded-full bg-neutral-200 dark:bg-neutral-900 border-2 border-neutral-400 dark:border-neutral-700 ring-4 ring-neutral-50 dark:ring-neutral-950 group-hover:border-indigo-500 transition-colors">
                  <span className="h-1.5 w-1.5 sm:h-2 w-2 rounded-full bg-neutral-500 dark:bg-neutral-400 group-hover:bg-indigo-500 transition-colors"></span>
                </span>

                <div className="space-y-2">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="font-mono text-[11px] font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-widest bg-indigo-50/50 dark:bg-indigo-950/40 px-2 py-0.5 rounded">
                      {ev.period}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-extrabold tracking-tight text-neutral-950 dark:text-white">
                    {ev.title}
                  </h3>

                  <p className="text-xs font-bold text-neutral-400 uppercase tracking-wider">
                    {ev.subtitle}
                  </p>

                  <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-3xl leading-relaxed">
                    {ev.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* RECRUITER CONTACT REGISTRATION */}
        <section id="contact" className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          <div className="lg:col-span-12">
            <div className="flex flex-col md:flex-row items-baseline justify-between gap-4 mb-2">
              <div className="space-y-1">
                <div className="text-xs font-mono text-indigo-600 dark:text-indigo-400 uppercase tracking-widest font-semibold flex items-center gap-1.5">
                  <Send className="w-3 h-3" />
                  <span>Interactive Connection</span>
                </div>
                <h2 className="text-2xl md:text-3xl sm:text-4xl font-black tracking-tight text-neutral-950 dark:text-white">
                  Let's Build Together
                </h2>
              </div>
              <div className="h-[2px] flex-grow bg-neutral-200 dark:bg-neutral-800 rounded"></div>
            </div>
            <p className="text-sm text-neutral-500 dark:text-neutral-400 max-w-2xl mt-1 leading-normal">
              Whether you are an industry recruiter, startup founder, technical coordinator, or hackathon teammate, feel free to send a message below. It's saved on this device for your reference — for a guaranteed response, please also reach out via email, phone, or LinkedIn.
            </p>
          </div>

          {/* Social Channels Details */}
          <div className="lg:col-span-4 space-y-6">
            <div className="p-6 rounded-2xl border border-neutral-200 dark:border-neutral-800/80 bg-white dark:bg-neutral-900/30 space-y-6">
              <h3 className="font-bold text-sm tracking-wide uppercase text-neutral-400">
                Direct Touch-Points
              </h3>
              
              <div className="space-y-4">
                
                {/* Email link */}
                <div className="flex items-start gap-3">
                  <span className="p-2 rounded-xl bg-indigo-50/50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400">
                    <Mail className="w-4 h-4" />
                  </span>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs text-neutral-400 uppercase tracking-wider font-semibold">Email Channel</div>
                    <button 
                      onClick={() => triggerCopy("konakalakrishnateja01@gmail.com", "Email")}
                      className="text-sm font-bold truncate text-neutral-900 hover:text-indigo-500 dark:text-neutral-100 dark:hover:text-indigo-400 font-mono text-left w-full block"
                      title="Copy email link to clipboard"
                    >
                      konakalakrishnateja01@gmail.com
                    </button>
                  </div>
                </div>

                {/* Telephone */}
                <div className="flex items-start gap-3">
                  <span className="p-2 rounded-xl bg-orange-50/50 dark:bg-orange-950/40 text-orange-500 dark:text-orange-400">
                    <Phone className="w-4 h-4" />
                  </span>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs text-neutral-400 uppercase tracking-wider font-semibold">Phone Contact</div>
                    <button
                      onClick={() => triggerCopy("+919392101400", "Phone")}
                      className="text-sm font-bold text-neutral-900 hover:text-indigo-500 dark:text-neutral-100 dark:hover:text-indigo-400 font-mono text-left block w-full"
                      title="Copy contact number to clipboard"
                    >
                      +91 9392101400
                    </button>
                  </div>
                </div>

                {/* Geography */}
                <div className="flex items-start gap-3">
                  <span className="p-2 rounded-xl bg-emerald-50/50 dark:bg-emerald-950/40 text-emerald-500 dark:text-emerald-400">
                    <MapPin className="w-4 h-4" />
                  </span>
                  <div>
                    <div className="text-xs text-neutral-400 uppercase tracking-wider font-semibold">Location Hub</div>
                    <p className="text-sm font-bold dark:text-neutral-100 text-neutral-900">
                      Vijayawada, AP, India
                    </p>
                  </div>
                </div>
              </div>

              {/* Submissions review tray toggle */}
              {submissionsHistory.length > 0 && (
                <div className="pt-4 border-t border-neutral-100 dark:border-neutral-800">
                  <button
                    onClick={() => setShowHistory(!showHistory)}
                    className="w-full flex items-center justify-between text-xs font-mono text-neutral-400 hover:text-indigo-500 p-2 rounded-lg bg-neutral-150 dark:bg-neutral-850"
                  >
                    <span className="flex items-center gap-1.5 select-none">
                      <History className="w-3.5 h-3.5" />
                      <span>Transmission Logs ({submissionsHistory.length})</span>
                    </span>
                    <span>{showHistory ? 'Hide' : 'Show'}</span>
                  </button>
                </div>
              )}
            </div>

            {/* Simulated Transmission history render */}
            {showHistory && submissionsHistory.length > 0 && (
              <div className="p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-950/70 max-h-48 overflow-y-auto space-y-3 no-scrollbar animate-fade-in">
                <span className="text-[10px] uppercase font-bold text-neutral-400 font-mono">My Secure Dispatches:</span>
                {submissionsHistory.map((sub) => (
                  <div key={sub.id} className="p-2.5 rounded-lg bg-white dark:bg-neutral-900 border border-neutral-100 dark:border-neutral-800 text-[11px] space-y-1">
                    <div className="flex justify-between text-neutral-500 font-mono text-[9px]">
                      <span>{sub.role} @ {sub.company || 'Direct'}</span>
                      <span>{sub.date}</span>
                    </div>
                    <div className="font-bold dark:text-neutral-200">{sub.name}</div>
                    <p className="text-neutral-600 dark:text-neutral-400 line-clamp-2">{sub.message}</p>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Connect Dispatcher Form */}
          <div className="lg:col-span-8 p-6 sm:p-8 rounded-2xl glass-panel border border-neutral-200 dark:border-neutral-800 shadow-md">
            <form onSubmit={handleContactSubmit} className="space-y-4">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Full name input */}
                <div className="space-y-1.5">
                  <label className="text-[10px] font-mono tracking-widest uppercase font-bold text-neutral-400">Full Name *</label>
                  <input 
                    type="text"
                    required
                    placeholder="e.g. Rachel Adams"
                    value={contactForm.name}
                    onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
                    className="w-full px-3.5 py-2 rounded-xl text-xs sm:text-sm border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 bg-white/70 dark:border-neutral-800 dark:bg-neutral-950 dark:text-white"
                  />
                </div>

                {/* Email address */}
                <div className="space-y-1.5">
                  <label className="text-[10px] font-mono tracking-widest uppercase font-bold text-neutral-400">Email Address *</label>
                  <input 
                    type="email"
                    required
                    placeholder="e.g. adams@comp.com"
                    value={contactForm.email}
                    onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
                    className="w-full px-3.5 py-2 rounded-xl text-xs sm:text-sm border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 bg-white/70 dark:border-neutral-800 dark:bg-neutral-950 dark:text-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Role dropdown */}
                <div className="space-y-1.5">
                  <label className="text-[10px] font-mono tracking-widest uppercase font-bold text-neutral-400">My Intent Role</label>
                  <select
                    value={contactForm.role}
                    onChange={(e) => setContactForm({...contactForm, role: e.target.value})}
                    className="w-full px-3 py-2 rounded-xl text-xs sm:text-sm border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 bg-white dark:border-neutral-800 dark:bg-neutral-950 dark:text-white"
                  >
                    <option value="Recruiter">Technical Recruiter</option>
                    <option value="Coordinated Mentor">Internship Coordinator</option>
                    <option value="Startup Founder">Startup Founder</option>
                    <option value="Hackathon Judge">Hackathon Judge</option>
                    <option value="Peer">Peer Student / Say Hello</option>
                  </select>
                </div>

                {/* Company name */}
                <div className="space-y-1.5">
                  <label className="text-[10px] font-mono tracking-widest uppercase font-bold text-neutral-400">Company / Affiliation</label>
                  <input 
                    type="text"
                    placeholder="e.g. OpenAI / SRM AP"
                    value={contactForm.company}
                    onChange={(e) => setContactForm({...contactForm, company: e.target.value})}
                    className="w-full px-3.5 py-2 rounded-xl text-xs sm:text-sm border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 bg-white/70 dark:border-neutral-800 dark:bg-neutral-950 dark:text-white"
                  />
                </div>
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <label className="text-[10px] font-mono tracking-widest uppercase font-bold text-neutral-400">Message Content *</label>
                <textarea 
                  required
                  rows={4}
                  placeholder="Hi Krishna, review of APTRANSCO looks fantastic! Let's arrange a call..."
                  value={contactForm.message}
                  onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
                  className="w-full px-3.5 py-2 rounded-xl text-xs sm:text-sm border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 bg-white/70 dark:border-neutral-800 dark:bg-neutral-950 dark:text-white"
                />
              </div>

              {/* Submit button inside form */}
              <div className="pt-2">
                {formStatus === 'success' ? (
                  <div className="p-3.5 bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-400 rounded-xl text-xs font-semibold flex items-center gap-2 border border-emerald-500/20 shadow-inner">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                    <span>Saved locally on this device. For a guaranteed reply, please also email or message Krishna directly using the links provided.</span>
                  </div>
                ) : (
                  <button 
                    type="submit"
                    disabled={formStatus === 'submitting'}
                    className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl text-xs sm:text-sm font-semibold bg-neutral-950 text-white dark:bg-white dark:text-black hover:bg-neutral-900 dark:hover:bg-neutral-100 shadow transition-all duration-200"
                  >
                    {formStatus === 'submitting' ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-indigo-400 border-t-transparent rounded-full animate-spin"></span>
                        <span>Securing Connection Tunnel...</span>
                      </span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Dispatch Verified Networking Transmission</span>
                      </>
                    )}
                  </button>
                )}
              </div>
            </form>
          </div>
        </section>
      </main>

      {/* DETAILED PRINTABLE RESUME CV MODAL */}
      {resumeOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/70 backdrop-blur-sm overflow-y-auto">
          <div className="w-full max-w-3xl rounded-2xl border-2 border-neutral-200 dark:border-neutral-800 bg-white text-neutral-950 p-6 sm:p-10 shadow-2xl relative block animate-slide-up no-print">
            
            {/* Modal Controls */}
            <div className="absolute top-4 right-4 flex items-center gap-2 no-print">
              <button
                onClick={() => window.print()}
                className="p-2 rounded-xl bg-neutral-100 hover:bg-neutral-200 transition-colors uppercase font-mono text-[10px] font-bold text-neutral-700 flex items-center gap-1.5 border"
                title="Trigger print styles to save as professional PDF"
              >
                <Download className="w-3.5 h-3.5 text-indigo-500" />
                <span>Save PDF / Print</span>
              </button>
              <button 
                onClick={() => setResumeOpen(false)}
                className="p-1.5 rounded-lg bg-neutral-100 hover:bg-neutral-200 text-neutral-500 hover:text-neutral-950 transition-all"
                title="Return to primary app view"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Printable Frame Area */}
            <div className="space-y-6 text-left selection:bg-neutral-100 selection:text-black">
              
              {/* Header printable block */}
              <div className="border-b-2 border-neutral-800 pb-5 space-y-2">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline">
                  <h2 className="text-3xl font-extrabold tracking-tight font-sans text-black">
                    KONAKALA KRISHNA TEJA
                  </h2>
                  <span className="text-[11px] font-mono text-neutral-500 uppercase tracking-widest font-bold">
                    Computer Science Undergraduate
                  </span>
                </div>
                <p className="text-xs text-neutral-600 font-medium">
                  Vijayawada, Andhra Pradesh, India | +91 9392101400 | konakalakrishnateja01@gmail.com
                </p>
                <p className="text-[11px] font-mono text-neutral-500">
                  LinkedIn: linkedin.com/in/krishna-teja-konakala-995b1432b | GitHub: github.com/krishnakonakala
                </p>
              </div>

              {/* Profile summary printable block */}
              <div className="space-y-2">
                <h3 className="text-xs uppercase tracking-wider font-extrabold text-neutral-500 border-b border-neutral-200 pb-1">
                  Professional Statement
                </h3>
                <p className="text-xs text-neutral-700 leading-relaxed">
                  Highly motivated Computer Science Engineering student at SRM University AP with a strong passion for software development, artificial intelligence, and responsive web systems. Eager to solve real-world problems and deliver structured digital innovations.
                </p>
              </div>

              {/* Education printable block */}
              <div className="space-y-3">
                <h3 className="text-xs uppercase tracking-wider font-extrabold text-neutral-500 border-b border-neutral-200 pb-1">
                  Education History
                </h3>
                
                <div className="space-y-1 text-xs">
                  <div className="flex justify-between font-bold text-black">
                    <span>SRM UNIVERSITY AP</span>
                    <span>2025 – 2029 (Ongoing)</span>
                  </div>
                  <div className="flex justify-between text-[11px] text-neutral-600">
                    <span>B.Tech in Computer Science Engineering</span>
                    <span>Current Cumulative CGPA: 9.31/10.0</span>
                  </div>
                  <p className="text-[10px] text-neutral-500">
                    Relevant Modules: Data Structures, Problem Solving, Web Development, Programming Fundamentals, Software Engineering.
                  </p>
                </div>

                <div className="space-y-1 text-xs pt-1 border-t border-dashed border-neutral-100">
                  <div className="flex justify-between font-bold text-black">
                    <span>INTERMEDIATE BOARD EDUCATION</span>
                    <span>Completed</span>
                  </div>
                  <div className="flex justify-between text-[11px] text-neutral-600">
                    <span>Advanced Scientific Core Stream</span>
                    <span>Cumulative Outstanding Score: 95.8%</span>
                  </div>
                </div>
              </div>

              {/* Skills printable block */}
              <div className="space-y-2">
                <h3 className="text-xs uppercase tracking-wider font-extrabold text-neutral-500 border-b border-neutral-200 pb-1">
                  Technical Skill Directory
                </h3>
                <div className="grid grid-cols-2 gap-x-6 gap-y-1 text-xs pl-2">
                  <div className="space-x-1.5"><strong className="font-bold">Languages:</strong><span className="text-neutral-700">Python, C, JavaScript, HTML5, CSS3, SQL, C#</span></div>
                  <div className="space-x-1.5"><strong className="font-bold">Web Ops:</strong><span className="text-neutral-700">Frontend, Responsive Layout, Bootstrap, Tailwind, React</span></div>
                  <div className="space-x-1.5"><strong className="font-bold">AI Workflow:</strong><span className="text-neutral-700">Prompting, AI Agents, Builder suites, Productivity tools</span></div>
                  <div className="space-x-1.5"><strong className="font-bold">Tools:</strong><span className="text-neutral-700">VS Code, Git, GitHub, Figma, Canva</span></div>
                </div>
              </div>

              {/* Outstanding Projects printable block */}
              <div className="space-y-3">
                <h3 className="text-xs uppercase tracking-wider font-extrabold text-neutral-500 border-b border-neutral-200 pb-1">
                  Selected Engineering Projects
                </h3>

                <div className="space-y-1 text-xs">
                  <div className="flex justify-between font-bold text-black">
                    <span>APTRANSCO Future Grid</span>
                    <span>HTML, CSS, JS, Dashboard UI</span>
                  </div>
                  <p className="text-[11px] text-neutral-700 leading-normal">
                    Designed an optimized digital simulation portal for future power grid analysis. Outlined user status controls and active loading visualizations.
                  </p>
                </div>

                <div className="space-y-1 text-xs pt-1">
                  <div className="flex justify-between font-bold text-black">
                    <span>AI Productivity Tool</span>
                    <span>Python, Automation Scripts, AI APIs</span>
                  </div>
                  <p className="text-[11px] text-neutral-700 leading-normal">
                    Formulated scripts to generate contextual file summaries and streamline personal coding micro-tasks automatically.
                  </p>
                </div>
              </div>

              {/* Certifications and achievements printable block */}
              <div className="space-y-2">
                <h3 className="text-xs uppercase tracking-wider font-extrabold text-neutral-500 border-b border-neutral-200 pb-1">
                  Registered Certifications & Achievements
                </h3>
                <ul className="text-[11px] list-disc pl-4 space-y-1 text-neutral-700">
                  <li>Harvard CS50's Introduction to Programming with Python (HarvardX)</li>
                  <li>Foundational C# with Microsoft (freeCodeCamp Partnership)</li>
                  <li>Core Web Development, C Programming & Analytical Reasoning Certifications — SRM University AP</li>
                  <li>Over 10 active certificates earned under technical selection and hackathon programs</li>
                </ul>
              </div>

              {/* Bottom Print Disclaimer */}
              <div className="pt-4 border-t border-dashed border-neutral-250 text-center text-[10px] text-neutral-400 no-print flex items-center justify-center gap-1">
                <Info className="w-3 h-3 text-indigo-500" />
                <span>Tip: Click 'Save PDF / Print' to save this exact page as a pristine standard executive resume profile.</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* FOOTER METADATA */}
      <footer id="main-footer" className="w-full border-t border-neutral-200/50 dark:border-white/5 bg-neutral-100 dark:bg-neutral-950 py-12 text-center text-xs text-neutral-500 dark:text-neutral-400 space-y-4">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left space-y-1 text-center sm:text-left">
            <span className="font-semibold text-neutral-900 dark:text-white block sm:inline mr-2">Konakala Krishna Teja</span>
            <span>© 2026. Certified SRM CSE Student Portfolio.</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="mailto:konakalakrishnateja01@gmail.com" className="hover:text-indigo-500 transition-colors" title="Send Email">Email Channel</a>
            <span>•</span>
            <a href="https://www.linkedin.com/in/krishna-teja-konakala-995b1432b" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-500 transition-colors">LinkedIn</a>
            <span>•</span>
            <a href="https://github.com/krishnakonakala" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-500 transition-colors">GitHub</a>
          </div>
        </div>
        <p className="text-[10px] text-neutral-400 dark:text-neutral-500">
          Crafted with React, Tailwind CSS 4.0 and Lucide icons. Authorized for technical recruitment and internship assessment.
        </p>
      </footer>
    </div>
  );
}

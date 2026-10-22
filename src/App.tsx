import { useState, useEffect } from 'react';
import { ChevronDown, Cloud, Database, Headset, Mail, Phone, Menu, Linkedin, ShieldCheck, Rocket, ExternalLink, X } from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isVisible, setIsVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  useEffect(() => {
    setIsVisible(true);

    const handleScroll = () => {
      const sections = ['hero', 'summary', 'experience', 'projects', 'skills', 'education', ...(papers.length > 0 ? ['papers'] : []), ...(certifications.length > 0 ? ['certifications'] : []), 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const summary = "IT Support & Cloud Engineer with 1 year of experience in technical support, incident management, and root cause analysis, handling 45+ daily cases across 3 operational systems. Expertise in AWS, Linux, Terraform, Docker, Azure DevOps CI/CD, Python, SQL, and cloud infrastructure automation, demonstrated through the consolidation of 5 separate deployment processes into a centralized CI/CD pipeline. Delivered data analytics projects processing 13 million records using Databricks and PySpark; currently pursuing an MSc in Computer Science at Coventry University.";

  const experience = [
    {
      company: "Coventry University",
      role: "Student Ambassador",
      location: "Coventry, UK",
      dates: "2026 – Present",
      highlights: [
        "Delivered one-to-one and group guidance to prospective and incoming students on university IT systems, account setup, enrolment processes, and digital platform navigation, simplifying technical information for non-technical users."
      ]
    },
    {
      company: "Asda",
      role: "Customer Service Colleague",
      location: "Coventry, UK",
      dates: "2026 – Present",
      highlights: [
        "Executed customer-facing retail operations across point-of-sale (POS) transactions, online order fulfilment, inventory replenishment, and in-store issue resolution, maintaining accurate service delivery and operational coordination."
      ]
    },
    {
      company: "Tech Mahindra",
      role: "Technical Support Associate",
      location: "Pune, India",
      dates: "Jul 2024 – Jul 2025",
      highlights: [
        "Managed 45+ daily technical support cases through Salesforce ticketing queues, investigating service issues across 3 operational systems to maintain accurate case tracking and timely resolution.",
        "Diagnosed recurring operational faults through root cause analysis, isolated a common process failure across unrelated cases, and escalated documented findings to eliminate repeat incidents.",
        "Coordinated incident escalations with cross-functional support teams and management, documenting troubleshooting steps, case histories, and resolution updates to accelerate issue resolution.",
        "Ranked among the top 3 of approximately 40 Technical Support Associates within 8 months, demonstrating strong case management, troubleshooting accuracy, and service delivery performance."
      ]
    }
  ];

  const projects = [
    {
      title: "DevSecOps CI/CD Pipeline Automation & AWS Security",
      subtitle: "MSc Dissertation · Coventry University",
      category: "DevSecOps & Cloud Security",
      introduction: "Engineering an automated DevSecOps pipeline using Terraform, Docker, and AWS to provision cloud infrastructure and deploy containerized applications, with security checks built into every stage.",
      problem: "Cloud deployments are often provisioned and released without consistent security validation, leaving misconfigurations and exposed secrets undetected until late in the delivery cycle.",
      objective: "Automate infrastructure provisioning and application deployment on AWS while embedding security validation directly into the CI/CD workflow.",
      methodology: [
        "Provisioned AWS cloud infrastructure with Terraform and deployed containerized applications using Docker.",
        "Integrated 4 automated security checks, including secret detection and CIS Benchmark compliance.",
        "Added infrastructure-as-code (IaC) security validation and vulnerability scanning with Checkov and tfsec to identify misconfigurations and strengthen AWS deployment security."
      ],
      results: [
        "An automated pipeline that provisions infrastructure and deploys containers with 4 security checks enforced in the workflow.",
        "Misconfigurations in IaC identified before deployment through Checkov and tfsec scanning."
      ],
      conclusion: "Shows how shifting security left in the CI/CD pipeline strengthens AWS deployments without slowing delivery."
    },
    {
      title: "AWS Cloud Infrastructure Deployment & CI/CD Automation",
      subtitle: "MSc Group Project · 5-member Agile team",
      category: "Cloud & DevOps",
      introduction: "Provisioned and secured AWS infrastructure and centralized release processes in an Azure DevOps CI/CD pipeline within a 5-member Agile development team.",
      problem: "Five separate deployment processes made releases inconsistent and troubleshooting slow.",
      objective: "Standardize deployments into a single pipeline with monitoring and clear documentation.",
      methodology: [
        "Provisioned AWS EC2 instances and configured IAM permissions, security groups, IP addressing, and SSH access to Linux servers.",
        "Consolidated 5 separate deployment processes into a centralized Azure DevOps CI/CD pipeline.",
        "Integrated Amazon CloudWatch monitoring and standardized deployment documentation."
      ],
      results: [
        "5 deployment processes unified into one centralized pipeline.",
        "Streamlined releases and troubleshooting through CloudWatch monitoring and standardized documentation."
      ],
      conclusion: "Centralizing deployment and monitoring made releases repeatable and easier to debug for the whole team."
    },
    {
      title: "Big Data Engineering, Machine Learning & Analytics",
      subtitle: "MSc Project · Databricks & Apache Spark",
      category: "Data Engineering & ML",
      introduction: "Processed 13 million flight records through Databricks and Apache Spark and evaluated machine learning models on the cleaned data.",
      problem: "Raw flight data at large scale contained quality issues that needed to be resolved before reliable predictive analytics was possible.",
      objective: "Build a data engineering workflow that turns raw records into a validated dataset and compare machine learning models on it.",
      methodology: [
        "Transformed 13 million raw records into 2.8 million usable records through data cleansing, transformation, and quality validation.",
        "Evaluated 5 machine learning models using Spark MLlib.",
        "Visualized performance insights in Tableau."
      ],
      results: [
        "2.8 million validated records produced from 13 million raw records.",
        "Identified data quality limitations and recommended improvements to strengthen predictive analytics."
      ],
      conclusion: "Demonstrated that data quality work drives model reliability at scale."
    }
  ];

  const skillCategories = [
    {
      icon: Cloud,
      title: 'Cloud Computing',
      skills: ['AWS (EC2, S3, RDS, VPC, IAM)', 'AWS Lambda & API Gateway', 'Amazon CloudWatch', 'Cloud Infrastructure', 'Networking', 'Security Groups']
    },
    {
      icon: Rocket,
      title: 'DevOps & Automation',
      skills: ['Azure DevOps', 'CI/CD Pipelines', 'GitHub Actions', 'Terraform', 'Docker', 'Git', 'Infrastructure as Code (IaC)', 'Checkov', 'tfsec', 'CIS Benchmarks']
    },
    {
      icon: Database,
      title: 'Programming & Data Analytics',
      skills: ['Python', 'Pandas', 'SQL', 'PySpark', 'Apache Spark', 'Spark MLlib', 'Databricks', 'Power BI', 'Tableau', 'Data Cleaning', 'Data Transformation']
    },
    {
      icon: Headset,
      title: 'IT Support & Networking',
      skills: ['Windows', 'Linux', 'TCP/IP', 'DNS', 'VPN', 'SSH', 'Salesforce Ticketing', 'Incident Management', 'Technical Troubleshooting', 'Root Cause Analysis', 'IT Documentation']
    }
  ];

  const education = [
    {
      school: "Coventry University",
      degree: "Master of Science (MSc) in Computer Science",
      location: "Coventry, UK",
      dates: "Jan 2026 – Jan 2027 (Expected)",
      details: ""
    },
    {
      school: "Modern College of Business Administration, India",
      degree: "Bachelor's Degree · First Class",
      location: "Pune, India",
      dates: "2021 – 2024",
      details: ""
    }
  ];
  const papers: { title: string; publication: string; year: string; link: string }[] = [];

  const certifications: { title: string; platform: string; description: string; link: string }[] = [
    { title: "AWS Certified Cloud Practitioner", platform: "Amazon Web Services · In Progress, Expected December 2026", description: "", link: "" },
    { title: "Microsoft Power BI Data Analyst", platform: "Coursera · 2026", description: "", link: "" },
    { title: "Master in Cloud Architecture", platform: "Fortune Cloud", description: "", link: "" }
  ];

  return (
    <div className="min-h-screen bg-cream overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-cream/95 backdrop-blur-md border-b border-brown/20">
        <div className="max-w-6xl mx-auto px-6 py-4">

          <div className="relative flex items-center justify-center">

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center justify-center gap-5 lg:gap-8 flex-shrink-0">
              {[
                { id: 'hero', label: 'Home' },
                { id: 'summary', label: 'Summary' },
                { id: 'experience', label: 'Experience' },
                { id: 'projects', label: 'Projects' },
                { id: 'skills', label: 'Skills' },
                { id: 'education', label: 'Education' },
                ...(papers.length > 0 ? [{ id: 'papers', label: 'Papers' }] : []),
                ...(certifications.length > 0 ? [{ id: 'certifications', label: 'Certifications' }] : []),
                { id: 'contact', label: 'Contact' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-light tracking-wide transition-colors duration-300 ${activeSection === item.id
                    ? "text-black font-medium"
                    : "text-brown hover:text-black"
                    }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile Hamburger */}
            <button
              className="absolute right-0 md:hidden text-black"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>

          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 flex flex-col space-y-4 border-t border-brown/20 pt-4">

              {[
                { id: 'hero', label: 'Home' },
                { id: 'summary', label: 'Summary' },
                { id: 'experience', label: 'Experience' },
                { id: 'projects', label: 'Projects' },
                { id: 'skills', label: 'Skills' },
                { id: 'education', label: 'Education' },
                ...(papers.length > 0 ? [{ id: 'papers', label: 'Papers' }] : []),
                ...(certifications.length > 0 ? [{ id: 'certifications', label: 'Certifications' }] : []),
                { id: 'contact', label: 'Contact' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    scrollToSection(item.id)
                    setMobileMenuOpen(false)
                  }}
                  className="text-left text-brown hover:text-black transition"
                >
                  {item.label}
                </button>
              ))}

            </div>
          )}

        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="pt-32 pb-20 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <div className={`text-center transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>

            <div className="mb-12">
              <img
                src="images/image.png"
                alt="Anushka Anil Yadav"
                className="w-36 h-36 rounded-full mx-auto mb-6 object-cover border-4 border-brown/30 shadow-lg"
              />
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-display text-black mb-6 tracking-wide leading-tight break-words">
              ANUSHKA ANIL YADAV
            </h1>
            <div className="text-lg text-brown mb-2 font-light tracking-widest">
              IT Support & Cloud Engineer · AWS · DevOps · SQL
            </div>
            <div className="text-sm uppercase tracking-[0.18em] sm:tracking-[0.3em] text-brown/80 mb-1">
              COVENTRY, UK
            </div>
            <div className="w-24 h-0.5 bg-brown mx-auto mb-10"></div>
            <p className="text-lg text-brown mb-10 max-w-4xl mx-auto leading-relaxed font-light">
              {summary}
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button
                onClick={() => scrollToSection('experience')}
                className="bg-black text-white px-10 py-4 font-light tracking-wide hover:bg-brown transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                🚀 VIEW EXPERIENCE
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="border border-black text-black px-10 py-4 font-light tracking-wide hover:bg-black hover:text-white transition-all duration-300"
              >
                📬 CONTACT
              </button>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-16 text-center">
            {[
              { label: 'DAILY SUPPORT CASES', value: '45+', detail: 'Across 3 Operational Systems' },
              { label: 'DEPLOYMENT PROCESSES UNIFIED', value: '5', detail: 'Into One Azure DevOps Pipeline' },
              { label: 'RECORDS PROCESSED', value: '13M', detail: 'Databricks & Apache Spark' }
            ].map((stat, index) => (
              <div key={index} className="bg-white p-6 rounded-sm shadow-sm border border-brown/10">
                <div className="text-xs tracking-widest text-brown/70 mb-2">{stat.label}</div>
                <div className="text-3xl font-display text-black mb-1">{stat.value}</div>
                <div className="text-sm text-brown font-light">{stat.detail}</div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <ChevronDown
              className="w-6 h-6 text-brown/60 mx-auto animate-bounce cursor-pointer hover:text-black transition-colors"
              onClick={() => scrollToSection('summary')}
            />
          </div>
        </div>
      </section>

      {/* Summary Section */}
      <section id="summary" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display text-black mb-8 tracking-wide leading-tight break-words">SUMMARY</h2>
            <p className="text-lg text-brown max-w-3xl mx-auto font-light">
              IT support and cloud engineer combining incident management experience with AWS, DevOps automation, and data analytics.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                icon: Headset,
                title: 'IT Support & Incident Management',
                detail: 'Handled 45+ daily cases in Salesforce across 3 systems, using root cause analysis to eliminate repeat incidents and ranking top 3 of ~40 associates.'
              },
              {
                icon: Cloud,
                title: 'Cloud & DevOps',
                detail: 'Provision AWS infrastructure with Terraform and Docker, and consolidated 5 deployment processes into a centralized Azure DevOps CI/CD pipeline.'
              },
              {
                icon: ShieldCheck,
                title: 'DevSecOps & Data',
                detail: 'Embed Checkov, tfsec, and CIS Benchmark checks in pipelines, and process large datasets with Databricks and PySpark.'
              }
            ].map((card, index) => (
              <div key={index} className="bg-cream p-8 rounded-sm shadow-sm border border-brown/10 text-center">
                <div className="w-14 h-14 bg-black mx-auto mb-6 flex items-center justify-center">
                  <card.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-display text-black mb-4 tracking-wide">{card.title.toUpperCase()}</h3>
                <p className="text-brown leading-relaxed font-light">{card.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display text-black mb-8 tracking-wide leading-tight break-words">WORK EXPERIENCE</h2>
            <div className="w-16 h-0.5 bg-brown mx-auto mb-8"></div>
            <p className="text-lg text-brown max-w-3xl mx-auto font-light">
              Technical support, incident management, and service delivery experience.
            </p>
          </div>
          <div className="space-y-10">
            {experience.map((role, index) => (
              <div key={index} className="bg-white p-8 rounded-sm shadow-sm border border-brown/10">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-display text-black tracking-wide">{role.role}</h3>
                    <p className="text-brown font-medium">{role.company}</p>
                  </div>
                  <div className="text-sm text-brown/80 font-light mt-2 md:mt-0">
                    {role.location} · {role.dates}
                  </div>
                </div>
                <ul className="space-y-3">
                  {role.highlights.map((highlight, i) => (
                    <li key={i} className="text-brown leading-relaxed font-light flex items-start">
                      <span className="text-brown mr-3">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display text-black mb-8 tracking-wide leading-tight break-words">PROJECTS</h2>
            <div className="w-16 h-0.5 bg-brown mx-auto mb-8"></div>
            <p className="text-lg text-brown max-w-2xl mx-auto font-light">
              MSc projects in DevSecOps, AWS infrastructure, CI/CD automation, and big data analytics.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-cream p-6 rounded-sm hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
                onClick={() => setSelectedProject(index)}
              >
                <div className="mb-3">
                  <span className="text-xs font-medium text-brown bg-white px-3 py-1 tracking-wide">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-xl font-display text-black mb-3 tracking-wide leading-tight">
                  {project.title}
                </h3>
                <p className="text-sm text-brown mb-4 font-light">
                  {project.subtitle}
                </p>
                <p className="text-brown leading-relaxed font-light text-sm line-clamp-3">
                  {project.introduction}
                </p>

              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-brown font-light">
              Interested in detailed methodology or technical documentation?
              <button
                onClick={() => scrollToSection('contact')}
                className="text-black ml-1 font-regular italic"
              >
                Reach out for comprehensive project details.
              </button>
            </p>
          </div>
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject !== null && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white max-w-4xl max-h-[90vh] overflow-y-auto rounded-sm">
            <div className="sticky top-0 bg-white border-b border-brown/20 p-6 flex items-center justify-between">
              <h2 className="text-2xl font-display text-black tracking-wide">
                {projects[selectedProject].title}
              </h2>
              <button
                onClick={() => setSelectedProject(null)}
                className="text-brown hover:text-black transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="p-6 space-y-8">
              <div>
                <span className="text-sm font-medium text-brown bg-cream px-3 py-1 tracking-wide">
                  {projects[selectedProject].category}
                </span>
                <p className="text-brown font-light mt-2">
                  {projects[selectedProject].subtitle}
                </p>
              </div>

              <div>
                <h3 className="text-lg font-display text-black mb-3 tracking-wide">INTRODUCTION</h3>
                <p className="text-brown leading-relaxed font-light">
                  {projects[selectedProject].introduction}
                </p>
              </div>

              <div>
                <h3 className="text-lg font-display text-black mb-3 tracking-wide">PROBLEM STATEMENT</h3>
                <p className="text-brown leading-relaxed font-light">
                  {projects[selectedProject].problem}
                </p>
              </div>

              <div>
                <h3 className="text-lg font-display text-black mb-3 tracking-wide">OBJECTIVE</h3>
                <p className="text-brown leading-relaxed font-light">
                  {projects[selectedProject].objective}
                </p>
              </div>

              <div>
                <h3 className="text-lg font-display text-black mb-3 tracking-wide">METHODOLOGY</h3>
                <ul className="space-y-2">
                  {projects[selectedProject].methodology.map((item, index) => (
                    <li key={index} className="text-brown leading-relaxed font-light flex items-start">
                      <span className="text-brown mr-3">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-display text-black mb-3 tracking-wide">RESULTS</h3>
                <ul className="space-y-2">
                  {projects[selectedProject].results.map((item, index) => (
                    <li key={index} className="text-brown leading-relaxed font-light flex items-start">
                      <span className="text-brown mr-3">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-display text-black mb-3 tracking-wide">CONCLUSION</h3>
                <p className="text-brown leading-relaxed font-light">
                  {projects[selectedProject].conclusion}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Skills Section */}
      <section id="skills" className="py-24 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display text-black mb-8 tracking-wide leading-tight break-words">SKILLS</h2>
            <div className="w-16 h-0.5 bg-brown mx-auto mb-8"></div>
            <p className="text-lg text-brown max-w-2xl mx-auto font-light">
              Cloud, DevOps, data analytics, and IT support expertise
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillCategories.map((category, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-black mx-auto mb-8 flex items-center justify-center">
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-display text-black mb-6 tracking-wide">{category.title.toUpperCase()}</h3>
                <ul className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <li key={skillIndex} className="text-sm text-brown font-light">
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section id="education" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display text-black mb-6 tracking-wide leading-tight break-words">EDUCATION</h2>
            <div className="w-16 h-0.5 bg-brown mx-auto mb-6"></div>
          </div>
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div key={index} className="bg-cream p-8 rounded-sm shadow-sm border border-brown/10">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-display text-black tracking-wide">{edu.school}</h3>
                    <p className="text-brown font-medium">{edu.degree}</p>
                  </div>
                  {(edu.location || edu.dates) && (
                    <div className="text-sm text-brown/80 font-light mt-2 md:mt-0">
                      {edu.location}{edu.location && edu.dates ? ' · ' : ''}{edu.dates}
                    </div>
                  )}
                </div>
                {edu.details && (
                  <p className="text-brown leading-relaxed font-light">
                    {edu.details}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Papers Published Section */}
      {papers.length > 0 && (
      <section id="papers" className="py-24 bg-cream">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display text-black mb-6 tracking-wide leading-tight break-words">PAPERS PUBLISHED</h2>
            <div className="w-16 h-0.5 bg-brown mx-auto mb-6"></div>
            <p className="text-lg text-brown max-w-2xl mx-auto font-light">
              Research and publications in AI, machine learning, and technology.
            </p>
          </div>
          <div className="space-y-8">
            {papers.map((paper, index) => (
              <div key={index} className="bg-white p-8 rounded-sm shadow-sm border border-brown/10">
                <h3 className="text-xl font-display text-black tracking-wide mb-2">{paper.title}</h3>
                <p className="text-brown font-medium mb-2">{paper.publication} · {paper.year}</p>
                <a
                  href={paper.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brown font-light hover:text-black transition-colors hover:underline inline-flex items-center"
                >
                  View Paper <ExternalLink className="w-4 h-4 ml-2 inline-block" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
      )}

      {/* Certifications Section */}
      {certifications.length > 0 && (
      <section id="certifications" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display text-black mb-6 tracking-wide leading-tight break-words">CERTIFICATIONS</h2>
            <div className="w-16 h-0.5 bg-brown mx-auto mb-6"></div>
          </div>
          <div className="space-y-8">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-cream p-8 rounded-sm shadow-sm border border-brown/10">
                <h3 className="text-2xl font-display text-black tracking-wide">{cert.title}</h3>
                <p className="text-brown font-medium">{cert.platform}</p>
                {cert.description && <p className="text-brown leading-relaxed font-light">{cert.description}</p>}
                {cert.link && (
                  <a href={cert.link} target="_blank" rel="noopener noreferrer" className="text-brown leading-relaxed font-light hover:text-black transition-colors hover:underline">
                    View Certificate <ExternalLink className="w-4 h-4 ml-2 inline-block" />
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      )}
      {/* Contact Section */}
      <section id="contact" className="py-24 bg-black text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display mb-8 tracking-wide leading-tight break-words">CONTACT</h2>
            <div className="w-16 h-0.5 bg-brown mx-auto mb-8"></div>
            <p className="text-xl text-white/80 max-w-3xl mx-auto font-light">
              Let's discuss IT support, cloud engineering, DevOps, or data opportunities.
            </p>
          </div>

          <div className="flex flex-col items-center space-y-8 max-w-md mx-auto">
            <div className="flex items-center">
              <Phone className="w-6 h-6 text-brown mr-6" />
              <a
                href="tel:+447352668008"
                className="text-white/80 font-light hover:text-white transition-colors"
              >
                +44 7352 668008
              </a>
            </div>
            <div className="flex items-center">
              <Linkedin className="w-6 h-6 text-brown mr-6" />
              <a
                href="https://www.linkedin.com/in/anushka-anil-yadav-4a7991225/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 font-light hover:text-white transition-colors"
              >
                LinkedIn
              </a>
            </div>
            <div className="flex items-center">
              <Mail className="w-6 h-6 text-brown mr-6" />
              <a
                href="mailto:yadavanushka1918@gmail.com"
                className="text-white/80 font-light hover:text-white transition-colors"
              >
                yadavanushka1918@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brown text-white/80 py-8">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="font-light tracking-wide">
            © 2026 Anushka Anil Yadav · IT Support & Cloud Engineering.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;

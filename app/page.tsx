'use client';

import { motion } from 'motion/react';
import { Map, ArrowUpRight, Github, Mail, Globe, Layers, Database, Compass, ChevronRight, Shield, Code, Server, Award, BookOpen } from 'lucide-react';
import Image from 'next/image';

const WEB_MAPS = [
  { id: '1', title: 'NYC Reference Map', date: 'May 1, 2026', tags: ['NYC', 'Reference'], color: 'from-blue-500/20 to-teal-500/10', link: 'https://arcg.is/mSmvD1' },
  { id: '2', title: 'Farmingdale Basemap', date: 'Apr 21, 2026', tags: ['Basemap', 'Farmingdale'], color: 'from-emerald-500/20 to-teal-500/10', link: 'https://arcg.is/1rmSCH0' },

  { id: '4', title: 'Multivariate Map', date: 'Apr 17, 2026', tags: ['Multivariate', 'Analysis'], color: 'from-indigo-500/20 to-purple-500/10', link: 'https://arcg.is/1bjeTD0' },
  { id: '5', title: 'USA Drought Map', date: 'Apr 7, 2026', tags: ['Environment', 'USA'], color: 'from-orange-500/20 to-red-500/10', link: 'https://arcg.is/1mnD5y' },
  { id: '6', title: 'New York City Robbery Map', date: 'Apr 2, 2026', tags: ['Crime', 'NYC'], color: 'from-red-500/20 to-rose-500/10', link: 'https://arcg.is/0a1TfS' },
  { id: '7', title: 'USA Counties Median Household Income', date: 'Mar 24, 2026', tags: ['Demographics', 'Income'], color: 'from-green-500/20 to-emerald-500/10', link: 'https://arcg.is/GjnPe0' },
 
  { id: '9', title: 'Lake District National Park', date: 'Feb 26, 2026', tags: ['Parks', 'International'], color: 'from-teal-500/20 to-emerald-500/10', link: 'https://arcg.is/1bqSPO1' },
  { id: '10', title: 'India States and Union Territories', date: 'Feb 16, 2026', tags: ['India', 'Boundaries'], color: 'from-orange-500/20 to-amber-500/10', link: 'https://arcg.is/1OuCPq0' },
  
  { id: '13', title: 'Indonesia Population', date: 'Feb 4, 2026', tags: ['Population', 'Indonesia'], color: 'from-fuchsia-500/20 to-pink-500/10', link: 'https://arcg.is/0XP0b01' },
  
  
  { id: '16', title: 'NYC Demographic Analysis', date: 'Nov 18, 2025', tags: ['Demographics', 'NYC'], color: 'from-sky-500/20 to-blue-500/10', link: 'https://arcg.is/0n88eH0' },
  { id: '17', title: 'Ukraine Battle Map', date: 'Nov 6, 2025', tags: ['Ukraine', 'International'], color: 'from-amber-500/20 to-yellow-500/10', link: 'https://arcg.is/0unzWT0' },
  
  { id: '19', title: ' Areas of Influence', date: 'Oct 10, 2025', tags: ['Areas of Influence', 'Analysis'], color: 'from-blue-500/20 to-cyan-500/10', link: 'https://arcg.is/1LvrLm1' },
 
 
  { id: '23', title: 'Detroit Demographic Analysis', date: 'Sep 9, 2025', tags: ['Demographics', 'Detroit'], color: 'from-rose-500/20 to-red-500/10', link: 'https://arcg.is/mbfzT0' },
];

const IT_PROJECTS = [
  {
    title: 'OpenMD - Senior Capstone',
    role: 'Project Manager',
    date: 'Spring 2026',
    description: 'Led end-to-end Agile execution in Jira for a scalable healthcare platform. Implemented Supabase Row-Level Security (RLS), role-based access control (RBAC), and token-based invite onboarding to protect HIPAA-sensitive data.',
    tags: ['Next.js', 'React', 'PostgreSQL', 'Supabase', 'Jira']
  },
  {
    title: 'Security Risk Assessment Project',
    role: 'Farmingdale State College',
    date: 'Fall 2025',
    description: 'Conducted security risk assessment documenting 47 security gaps, mapping findings to NIST CSF and SOC 2. Created detailed risk register with severity ratings and prioritized mitigation strategies.',
    tags: ['NIST CSF', 'SOC 2', 'Risk Assessment']
  },
  {
    title: 'Vulnerability Assessment Lab',
    role: 'Farmingdale State College',
    date: 'Spring 2025',
    description: 'Performed vulnerability assessments using Nmap, OpenVAS, and Wireshark to support security analysis. Identified 23 critical/high-severity vulnerabilities.',
    tags: ['Nmap', 'OpenVAS', 'Wireshark']
  }
];

const SKILLS = {
  Programming: ['Python', 'Java', 'R', 'SQL', 'PHP', 'JavaScript', 'HTML/CSS', 'Perl'],
  Networking: ['TCP/IP', 'DNS', 'HTTP/HTTPS', 'OSI Model', 'Windows Server', 'Linux/Unix'],
  Tools: ['Nmap', 'Wireshark', 'OpenVAS', 'Burp Suite', 'Splunk', 'Hash cat', 'John the Ripper', 'ArcGIS Pro', 'JIRA'],
  Cybersecurity: ['Vulnerability Assessment', 'Incident Response', 'NIST CSF, SOC & ISO concepts', 'GRC', 'Security Documentation'],
};

const CERTIFICATIONS = [
  { name: 'CompTIA Security+', date: 'April 2026' },
  { name: 'Career Essentials in Cybersecurity (Microsoft & LinkedIn)', date: 'February 2026' },
  { name: 'Google Cybersecurity Certificate (Coursera)', date: 'October 2023' },
  { name: 'Google Data Analytics Professional Certificate (Coursera)', date: 'May 2023' },
];

export default function Portfolio() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16 md:py-32 space-y-32">
      
      {/* Navigation / Header */}
      <motion.nav 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-wrap items-center justify-between gap-4"
      >
        <div className="font-heading font-bold text-2xl tracking-tight text-white">Rasel Islam</div>
        <div className="flex items-center space-x-6 text-sm text-zinc-400 font-medium">
          <a href="#maps" className="hover:text-zinc-50 transition-colors">ArcGIS Maps</a>
          <a href="#projects" className="hover:text-zinc-50 transition-colors">IT Projects</a>
          <a href="#skills" className="hover:text-zinc-50 transition-colors">Skills</a>
          <a href="#resume" className="hover:text-zinc-50 transition-colors">Resume</a>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
        className="max-w-4xl space-y-8 pt-8"
      >
        <div className="flex flex-wrap gap-3">
            <div className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/20 text-blue-300 px-3 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase">
            <Shield className="w-4 h-4" />
            <span>Cybersecurity</span>
            </div>
            <div className="inline-flex items-center space-x-2 bg-purple-500/10 border border-purple-500/20 text-purple-300 px-3 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase">
            <Code className="w-4 h-4" />
            <span>Information Systems</span>
            </div>
            <div className="inline-flex items-center space-x-2 bg-teal-500/10 border border-teal-500/20 text-teal-300 px-3 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase">
            <Map className="w-4 h-4" />
            <span>ArcGIS Pro & Online</span>
            </div>
        </div>
        
        <h1 className="font-heading text-5xl md:text-7xl font-bold tracking-tighter leading-[1.1] text-white">
          Securing systems & <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-sky-400">mapping data</span>.
        </h1>
        
        <p className="text-zinc-400 text-lg md:text-xl leading-relaxed max-w-2xl font-light">
          Hi, I&apos;m Rasel Islam. I am a Computer Programming and Information Systems student at Farmingdale State College, specializing in web development, cybersecurity, and interactive geospatial analysis using ArcGIS.
        </p>

        <div className="flex flex-wrap items-center gap-4 pt-4">
          <a 
            href="#projects"
            className="inline-flex items-center justify-center space-x-2 bg-zinc-50 text-zinc-950 px-6 py-3 rounded-full font-semibold text-sm transition-transform hover:scale-105 active:scale-95"
          >
            <span>View IT Projects</span>
            <ChevronRight className="w-4 h-4" />
          </a>
          <a 
            href="#maps"
            className="inline-flex items-center justify-center space-x-2 bg-zinc-800 text-white px-6 py-3 rounded-full font-semibold text-sm transition-transform hover:scale-105 active:scale-95 hover:bg-zinc-700"
          >
            <Map className="w-4 h-4" />
            <span>View ArcGIS Maps</span>
          </a>
          <a 
            href="https://linkedin.com/in/raselslam29" 
            target="_blank" 
            rel="noreferrer"
            className="inline-flex items-center justify-center p-3 text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-full transition-colors"
          >
            <Globe className="w-5 h-5" />
          </a>
        </div>
      </motion.section>

      {/* ArcGIS Web Maps Section */}
      <section id="maps" className="space-y-12">
        <div className="space-y-4">
          <div className="inline-flex items-center space-x-2 text-teal-400 mb-2">
             <Map className="w-5 h-5" />
             <span className="font-bold tracking-widest uppercase text-sm">ArcGIS Online</span>
          </div>
          <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-tight text-white">Spatial Data Visualizations</h2>
          <p className="text-zinc-400 max-w-xl text-lg font-light">An extensive collection of Web Maps ranging from demographic analyses to global conservation views.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {WEB_MAPS.map((map, index) => (
            <motion.a
              href={map.link}
              target={map.link !== '#' ? "_blank" : undefined}
              rel={map.link !== '#' ? "noreferrer" : undefined}
              key={map.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.4, delay: (index % 3) * 0.1 }}
              className="group block relative p-6 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-zinc-700 transition-colors overflow-hidden"
            >
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${map.color} blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
              
              <div className="relative z-10 space-y-4">
                <div className="flex justify-between items-start">
                  <div className="p-2 bg-zinc-800 rounded-lg text-teal-400">
                    <Map className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-medium text-zinc-500 tabular-nums">{map.date}</span>
                </div>
                
                <div>
                    <h3 className="font-heading text-lg font-bold tracking-tight text-zinc-100 group-hover:text-teal-400 transition-colors line-clamp-2 pr-6">
                      {map.title}
                    </h3>
                    <ArrowUpRight className="absolute right-6 top-1/2 -translate-y-1/2 w-5 h-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-teal-400" />
                </div>

                <div className="flex flex-wrap gap-2 pt-2 mt-auto">
                  {map.tags.map(tag => (
                    <span key={tag} className="text-[10px] font-semibold px-2 py-1 rounded bg-zinc-800 text-zinc-400">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </section>

      {/* IT Projects Section */}
      <section id="projects" className="space-y-12">
        <div className="space-y-4">
          <div className="inline-flex items-center space-x-2 text-purple-400 mb-2">
             <Code className="w-5 h-5" />
             <span className="font-bold tracking-widest uppercase text-sm">Experience</span>
          </div>
          <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-tight text-white">IT & Cybersecurity Projects</h2>
          <p className="text-zinc-400 max-w-xl text-lg font-light">Academic and capstone initiatives focused on secure architecture, risk assessment, and agile methodologies.</p>
        </div>

        <div className="space-y-6">
          {IT_PROJECTS.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className="p-6 md:p-8 rounded-3xl bg-zinc-900 border border-zinc-800 flex flex-col md:flex-row gap-6 md:items-start"
            >
               <div className="md:w-1/3 space-y-2">
                  <h3 className="font-heading text-xl font-bold text-white">{project.title}</h3>
                  <p className="text-sm font-medium text-zinc-400">{project.role}</p>
                  <p className="text-xs text-zinc-500">{project.date}</p>
               </div>
               <div className="md:w-2/3 space-y-4">
                  <p className="text-zinc-300 leading-relaxed font-light">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs font-medium px-2 py-1 rounded-md bg-zinc-800 text-zinc-300">
                      {tag}
                    </span>
                  ))}
                  </div>
               </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="space-y-12">
        <div className="space-y-4">
           <div className="inline-flex items-center space-x-2 text-blue-400 mb-2">
             <Layers className="w-5 h-5" />
             <span className="font-bold tracking-widest uppercase text-sm">Expertise</span>
          </div>
          <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-tight text-white">Technical Skills Summary</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {Object.entries(SKILLS).map(([category, items], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800"
            >
              <h3 className="font-bold text-white mb-4 flex items-center space-x-2">
                {category === 'Programming' && <Code className="w-4 h-4 text-zinc-400" />}
                {category === 'Networking' && <Server className="w-4 h-4 text-zinc-400" />}
                {category === 'Tools' && <Compass className="w-4 h-4 text-zinc-400" />}
                {category === 'Cybersecurity' && <Shield className="w-4 h-4 text-zinc-400" />}
                <span>{category}</span>
              </h3>
              <ul className="space-y-2">
                {items.map(item => (
                  <li key={item} className="text-sm text-zinc-400 font-light flex items-center space-x-2">
                    <span className="w-1 h-1 rounded-full bg-zinc-700" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Resume/Education Section */}
      <section id="resume" className="space-y-12">
        <div className="space-y-4">
           <div className="inline-flex items-center space-x-2 text-rose-400 mb-2">
             <BookOpen className="w-5 h-5" />
             <span className="font-bold tracking-widest uppercase text-sm">Background</span>
          </div>
          <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-tight text-white">Education & Certifications</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
                <div className="p-6 rounded-2xl bg-zinc-900 border border-zinc-800 space-y-4">
                    <div className="flex items-start justify-between">
                        <div>
                            <h3 className="font-bold text-white text-lg">Farmingdale State College</h3>
                            <p className="text-sm text-zinc-400">BS in Computer Programming and Information Systems</p>
                        </div>
                        <span className="text-xs font-medium px-2 py-1 bg-zinc-800 text-zinc-300 rounded">May 2026</span>
                    </div>
                    <ul className="text-sm text-zinc-400 font-light space-y-1">
                        <li><span className="font-medium text-zinc-300">GPA:</span> 3.93/4</li>
                        <li><span className="font-medium text-zinc-300">Honors:</span> President&apos;s List (Fall &apos;24, Spring &apos;25, Fall &apos;25)</li>
                    </ul>
                </div>
                <div className="p-6 rounded-2xl bg-zinc-900 border border-zinc-800 space-y-4">
                    <div className="flex items-start justify-between">
                        <div>
                            <h3 className="font-bold text-white text-lg">Nassau Community College</h3>
                            <p className="text-sm text-zinc-400">AAS in Information Technology</p>
                        </div>
                        <span className="text-xs font-medium px-2 py-1 bg-zinc-800 text-zinc-300 rounded">May 2024</span>
                    </div>
                    <ul className="text-sm text-zinc-400 font-light space-y-1">
                        <li><span className="font-medium text-zinc-300">GPA:</span> 3.84/4 (Magna Cum Laude)</li>
                    </ul>
                </div>
            </div>

            <div className="p-6 rounded-2xl bg-zinc-900 border border-zinc-800 h-full">
                <h3 className="font-bold text-white text-lg mb-6 flex items-center gap-2">
                    <Award className="w-5 h-5 text-zinc-400" />
                    Certifications
                </h3>
                <div className="space-y-6">
                    {CERTIFICATIONS.map(cert => (
                        <div key={cert.name} className="flex justify-between items-start gap-4">
                            <p className="text-sm text-zinc-300 font-medium">{cert.name}</p>
                            <span className="text-xs text-zinc-500 whitespace-nowrap">{cert.date}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 text-center space-y-8 rounded-3xl bg-zinc-900/50 border border-zinc-800">
        <div className="space-y-4 max-w-2xl mx-auto px-6">
          <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-tight text-white">Let&apos;s Connect</h2>
          <p className="text-zinc-400 text-lg font-light">Levittown, NY &bull; 516-828-0692</p>
        </div>
        
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a 
            href="mailto:Studyrasel1@gmail.com"
            className="inline-flex items-center justify-center space-x-2 bg-teal-600 hover:bg-teal-500 text-white px-8 py-4 rounded-full font-bold transition-colors"
          >
            <Mail className="w-5 h-5" />
            <span>Email Me</span>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="pt-12 pb-6 border-t border-zinc-900 text-center text-zinc-500 text-sm flex flex-col md:flex-row items-center justify-between font-light">
        <p>© {new Date().getFullYear()} Rasel Islam. All rights reserved.</p>
        <p className="mt-2 md:mt-0">Powered by ArcGIS & Next.js</p>
      </footer>

    </div>
  );
}

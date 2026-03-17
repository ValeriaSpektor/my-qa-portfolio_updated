import { motion } from 'motion/react';
import { Section, SectionHeading } from './ui/Section';
import { CheckSquare, Database, Wrench, GitMerge, FileText, Globe } from 'lucide-react';

export function Skills() {
  const skillCategories = [
    {
      title: "Testing Types",
      icon: <CheckSquare size={24} />,
      skills: ["Functional Testing", "Regression Testing", "Smoke Testing", "Sanity Testing", "Exploratory Testing"]
    },
    {
      title: "API & Data",
      icon: <Database size={24} />,
      skills: ["REST API Testing", "Postman", "JSON Validation", "SQL Queries", "Log Analysis"]
    },
    {
      title: "Tools",
      icon: <Wrench size={24} />,
      skills: ["Jira", "Confluence", "Postman", "Charles Proxy", "DevTools"]
    },
    {
      title: "Processes",
      icon: <GitMerge size={24} />,
      skills: ["Agile Methodology", "Scrum", "Risk-Based Testing", "Requirement Analysis", "Release Validation"]
    },
    {
      title: "Documentation",
      icon: <FileText size={24} />,
      skills: ["Test Cases", "Checklists", "Bug Reports", "Test Reports", "Test Plans"]
    },
    {
      title: "Languages",
      icon: <Globe size={24} />,
      skills: ["Russian (Native)", "English (B1)", "Hebrew (C1)"]
    }
  ];

  return (
    <Section id="skills" className="bg-white">
      <SectionHeading 
        title="Technical Skills & Expertise" 
        subtitle="A comprehensive toolkit for ensuring software quality across different layers of the application."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[minmax(180px,auto)]">
        {skillCategories.map((category, index) => {
          // Make some cards span 2 columns or rows for a bento effect
          const isLarge = index === 0 || index === 3;
          const isWide = index === 1;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className={`group p-6 rounded-3xl border border-slate-200 hover:border-primary-500 hover:shadow-lg transition-all duration-300 bg-white flex flex-col ${
                isLarge ? 'md:col-span-2 lg:col-span-2 lg:row-span-2' : ''
              } ${
                isWide ? 'md:col-span-2 lg:col-span-2' : ''
              }`}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-2xl bg-slate-50 text-slate-600 group-hover:bg-primary-50 group-hover:text-primary-600 transition-colors">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-dark-900">{category.title}</h3>
              </div>
              
              <ul className={`gap-3 ${isLarge || isWide ? 'grid sm:grid-cols-2' : 'space-y-3'}`}>
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="flex items-center gap-3 text-slate-600 bg-slate-50 p-3 rounded-xl">
                    <div className="w-2 h-2 rounded-full bg-primary-400 shrink-0" />
                    <span className="font-medium text-sm">{skill}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}

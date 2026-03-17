import { motion } from 'motion/react';
import { Section, SectionHeading } from './ui/Section';
import { Briefcase, Calendar } from 'lucide-react';

export function Experience() {
  const experiences = [
    {
      id: 1,
      company: "Imperia Leads",
      role: "QA Engineer / QA Team Lead",
      period: "Oct 2025 – Mar 2026",
      responsibilities: [
        "Led QA activities for a high-load CRM system, ensuring stability and performance.",
        "Performed functional, integration, and regression testing of web applications.",
        "Tested REST APIs using Postman and validated JSON responses against specifications.",
        "Analyzed logs, metrics, and SQL data to identify and isolate complex defects.",
        "Created and maintained comprehensive test documentation.",
        "Collaborated closely with developers, analysts, and product managers to refine requirements.",
        "Participated in release validation and overall quality control processes."
      ]
    },
    {
      id: 2,
      company: "WowPlaces",
      role: "QA Engineer",
      period: "Jun 2025 – Sep 2025",
      responsibilities: [
        "Conducted thorough functional testing of a dynamic web platform.",
        "Validated user workflows and complex business logic.",
        "Prepared detailed regression scenarios and test documentation.",
        "Reported and tracked defects efficiently using Jira.",
        "Performed API checks and validated server responses for frontend integration."
      ]
    },
    {
      id: 3,
      company: "Chatbot Studio AI",
      role: "QA Engineer / QA Team Lead",
      period: "Oct 2024 – Jan 2025",
      responsibilities: [
        "Implemented structured QA processes for innovative AI assistant projects.",
        "Tested conversational flows, edge cases, and voice interactions.",
        "Verified speech recognition accuracy and personalization logic.",
        "Created and maintained specialized testing documentation for AI behaviors."
      ]
    },
    {
      id: 4,
      company: "Chatbot Studio AI",
      role: "QA Engineer",
      period: "Jun 2024 – Oct 2024",
      responsibilities: [
        "Developed and executed detailed test cases for AI assistants.",
        "Reported defects clearly and performed rigorous retesting after fixes.",
        "Analyzed project requirements and prepared comprehensive testing scenarios."
      ]
    },
    {
      id: 5,
      company: "Antara LLC",
      role: "QA Engineer",
      period: "Jan 2024 – May 2024",
      responsibilities: [
        "Executed 200+ manual test cases for various web applications.",
        "Performed REST API testing with Postman to ensure backend reliability.",
        "Conducted regular regression testing cycles before major releases.",
        "Created detailed bug reports and collaborated directly with developers for resolution."
      ]
    },
    {
      id: 6,
      company: "Tehnosoft LLC",
      role: "QA Engineer Intern",
      period: "Sep 2023 – Nov 2023",
      responsibilities: [
        "Tested the mobile application “Adventure and Life” across different devices.",
        "Prepared foundational test cases and testing checklists.",
        "Performed network and stress testing using Charles Proxy.",
        "Reported bugs and collaborated with the development team to improve app stability."
      ]
    }
  ];

  return (
    <Section id="experience" className="bg-slate-50">
      <SectionHeading 
        title="Professional Experience" 
        subtitle="My career journey, highlighting roles where I've driven quality and established robust testing practices."
      />

      <div className="max-w-5xl mx-auto relative py-10">
        {/* Central Vertical Line for Desktop */}
        <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-slate-200 -translate-x-1/2 hidden md:block"></div>
        {/* Left Vertical Line for Mobile */}
        <div className="absolute left-4 top-0 bottom-0 w-1 bg-slate-200 md:hidden"></div>

        <div className="space-y-16">
          {experiences.map((exp, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className={`relative flex flex-col md:flex-row items-center justify-between w-full ${
                  isEven ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 w-5 h-5 -translate-x-[10px] md:-translate-x-1/2 rounded-full bg-primary-500 ring-4 ring-white z-10 shadow-sm"></div>

                {/* Empty Space for the other side on desktop */}
                <div className="hidden md:block w-[45%]"></div>

                {/* Content Card */}
                <div className="w-full md:w-[45%] pl-12 md:pl-0">
                  <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg border border-slate-100 hover:shadow-xl transition-shadow relative group">
                    {/* Connecting line to dot (desktop) */}
                    <div className={`hidden md:block absolute top-6 w-8 h-px bg-slate-200 ${
                      isEven ? '-left-8' : '-right-8'
                    }`}></div>

                    <div className="flex flex-col gap-4 mb-6">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <div className="flex items-center gap-2 text-sm font-bold text-primary-600 bg-primary-50 px-3 py-1.5 rounded-full w-fit">
                          <Calendar size={16} />
                          {exp.period}
                        </div>
                        <div className="text-lg font-bold text-dark-900">
                          {exp.company}
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-dark-900 flex items-center gap-2">
                        <Briefcase size={20} className="text-slate-400" />
                        {exp.role}
                      </h3>
                    </div>

                    <ul className="space-y-3">
                      {exp.responsibilities.map((resp, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-slate-600">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary-400 mt-2 shrink-0" />
                          <span className="leading-relaxed text-sm">{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}

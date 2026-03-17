import { motion } from 'motion/react';
import { Section, SectionHeading } from './ui/Section';
import { Target, Search, Users, ShieldCheck } from 'lucide-react';

export function About() {
  const highlights = [
    {
      icon: <Target className="text-primary-600" size={24} />,
      title: "Quality Focused",
      description: "Dedicated to ensuring software meets the highest standards of reliability and user experience."
    },
    {
      icon: <Search className="text-primary-600" size={24} />,
      title: "Analytical Mindset",
      description: "Strong ability to analyze complex business logic, identify edge cases, and uncover hidden defects."
    },
    {
      icon: <ShieldCheck className="text-primary-600" size={24} />,
      title: "Comprehensive Testing",
      description: "Expertise in functional, regression, smoke, sanity, exploratory, and API testing methodologies."
    },
    {
      icon: <Users className="text-primary-600" size={24} />,
      title: "Collaborative",
      description: "Effective communicator who works closely with developers, PMs, and stakeholders to resolve issues."
    }
  ];

  return (
    <Section id="about" className="bg-slate-50">
      <SectionHeading 
        title="About Me" 
        subtitle="A dedicated QA professional with a passion for delivering flawless software products."
      />
      
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl font-bold mb-4 text-dark-900">
            Bridging the gap between development and user expectations.
          </h3>
          <div className="space-y-4 text-lg text-slate-600 leading-relaxed">
            <p>
              I am a QA Engineer with over 2 years of hands-on experience specializing in manual testing of web and mobile applications. My professional journey has allowed me to work across diverse domains, including high-load CRM systems, innovative AI products, and complex web platforms.
            </p>
            <p>
              My approach to Quality Assurance goes beyond simply finding bugs. I believe in structured testing, thorough requirement analysis, and taking ownership of product quality. I meticulously create and maintain test documentation, ensuring that every feature is validated against business logic and edge cases.
            </p>
            <p>
              Whether I am validating REST APIs with Postman, analyzing SQL data and logs, or executing comprehensive regression cycles, my goal remains the same: to provide confidence in the software we release and ensure a seamless experience for the end-user.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative rounded-2xl overflow-hidden h-[500px] shadow-2xl border border-slate-200"
        >
          <img 
            src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80" 
            alt="QA Professional at work" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 to-transparent flex flex-col justify-end p-8">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-xl text-white">
              <h4 className="text-xl font-bold mb-2 flex items-center gap-2">
                <ShieldCheck className="text-primary-400" size={24} />
                Quality Focused
              </h4>
              <p className="text-slate-200 text-sm leading-relaxed">
                Dedicated to ensuring software meets the highest standards of reliability and user experience through meticulous testing methodologies.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}

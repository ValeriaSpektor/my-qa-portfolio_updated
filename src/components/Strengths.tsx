import { motion } from 'motion/react';
import { Section, SectionHeading } from './ui/Section';
import { BrainCircuit, Eye, MessageSquare, Layers, FileSignature, Users } from 'lucide-react';

export function Strengths() {
  const strengths = [
    {
      icon: <BrainCircuit size={28} />,
      title: "Strong Analytical Mindset",
      description: "Ability to break down complex systems, understand underlying business logic, and anticipate potential failure points."
    },
    {
      icon: <Eye size={28} />,
      title: "Attention to Detail",
      description: "Meticulous approach to testing, ensuring no edge case is overlooked and UI/UX matches design specifications perfectly."
    },
    {
      icon: <MessageSquare size={28} />,
      title: "Clear Bug Reporting",
      description: "Creating highly structured, reproducible, and developer-friendly bug reports that minimize back-and-forth communication."
    },
    {
      icon: <Layers size={28} />,
      title: "AI & CRM Experience",
      description: "Proven track record of testing complex domains including high-load CRM systems and conversational AI products."
    },
    {
      icon: <FileSignature size={28} />,
      title: "Structured Documentation",
      description: "Expertise in creating clear, maintainable test cases, checklists, and test plans that scale with the project."
    },
    {
      icon: <Users size={28} />,
      title: "Team Collaboration",
      description: "Proactive communicator who bridges the gap between technical and business teams to drive product quality."
    }
  ];

  return (
    <Section id="strengths" className="bg-slate-50">
      <SectionHeading 
        title="Why Work With Me" 
        subtitle="Core strengths that make me a valuable addition to any quality-focused engineering team."
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {strengths.map((strength, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="flex flex-col gap-4 p-8 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
          >
            <div className="w-14 h-14 rounded-2xl bg-primary-50 text-primary-600 flex items-center justify-center group-hover:bg-primary-600 group-hover:text-white transition-colors duration-300">
              {strength.icon}
            </div>
            <div>
              <h3 className="text-xl font-bold text-dark-900 mb-3">{strength.title}</h3>
              <p className="text-slate-600 leading-relaxed">
                {strength.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

import { motion } from 'motion/react';
import { Section, SectionHeading } from './ui/Section';

export function QAApproach() {
  const steps = [
    {
      number: "01",
      title: "Requirement Analysis",
      description: "I start by deeply analyzing business requirements and user stories to identify gaps, edge cases, and potential risks before development even begins."
    },
    {
      number: "02",
      title: "Test Design & Planning",
      description: "Creating structured, reusable test documentation including test cases, checklists, and test plans tailored to the specific features and risks."
    },
    {
      number: "03",
      title: "Functional & API Testing",
      description: "Executing thorough manual tests on UI and validating backend logic via REST APIs to ensure data integrity and correct system behavior."
    },
    {
      number: "04",
      title: "Clear Bug Reporting",
      description: "Documenting defects with precision—including steps to reproduce, expected vs. actual results, logs, and screenshots—to help developers fix issues fast."
    },
    {
      number: "05",
      title: "Regression & Retesting",
      description: "Performing rigorous regression cycles and verifying fixes to ensure that new changes do not break existing functionality."
    },
    {
      number: "06",
      title: "Release Validation",
      description: "Collaborating closely with the team for final sanity checks and release validation, taking ownership of the product's quality."
    }
  ];

  return (
    <Section id="approach" className="bg-dark-900 text-white" dark>
      <SectionHeading 
        title="My QA Approach" 
        subtitle="A structured, analytical, and collaborative methodology to ensure product excellence."
        dark
      />

      <div className="relative max-w-4xl mx-auto">
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-white/10 -translate-x-1/2 hidden md:block"></div>
        <div className="absolute left-4 top-0 bottom-0 w-1 bg-white/10 md:hidden"></div>

        <div className="space-y-12">
          {steps.map((step, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row items-center justify-between w-full ${
                  isEven ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className="absolute left-4 md:left-1/2 w-8 h-8 -translate-x-4 md:-translate-x-1/2 rounded-full bg-dark-900 border-4 border-primary-500 z-10 flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>

                <div className="hidden md:block w-[45%]"></div>

                <div className="w-full md:w-[45%] pl-12 md:pl-0">
                  <div className="relative p-8 rounded-2xl bg-dark-800 border border-white/10 hover:border-primary-500/50 transition-colors group">
                    <div className="text-6xl font-black text-white/5 absolute top-4 right-4 select-none transition-transform group-hover:scale-110">
                      {step.number}
                    </div>
                    <div className="text-primary-400 font-mono text-sm font-bold mb-3 flex items-center gap-2">
                      <span className="w-4 h-px bg-primary-400"></span>
                      PHASE {step.number}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4 relative z-10">{step.title}</h3>
                    <p className="text-slate-400 leading-relaxed relative z-10">
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-primary-900/40 to-blue-900/40 border border-white/10 text-center max-w-3xl mx-auto"
      >
        <h3 className="text-2xl font-bold mb-4">Quality is a Team Effort</h3>
        <p className="text-slate-300 text-lg leading-relaxed">
          I believe that QA is not just about finding bugs at the end of the cycle, but about building a culture of quality from day one. I actively collaborate with developers, product managers, and stakeholders to ensure we build the right thing, the right way.
        </p>
      </motion.div>
    </Section>
  );
}

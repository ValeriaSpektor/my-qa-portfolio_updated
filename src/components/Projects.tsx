import { motion } from 'motion/react';
import { Section, SectionHeading } from './ui/Section';
import { LayoutTemplate, Bot, Globe, Server, Smartphone, FileSignature } from 'lucide-react';

export function Projects() {
  const domains = [
    {
      title: "CRM Systems Testing",
      icon: <LayoutTemplate size={32} />,
      description: "Ensured the stability and performance of high-load CRM platforms. Validated complex business logic, user roles, data integrity, and system integrations to support seamless business operations.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80"
    },
    {
      title: "AI Assistant Testing",
      icon: <Bot size={32} />,
      description: "Implemented QA processes for conversational AI. Tested conversational flows, voice interactions, speech recognition accuracy, and personalization logic to ensure natural user experiences.",
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80"
    },
    {
      title: "Web Platform Testing",
      icon: <Globe size={32} />,
      description: "Conducted comprehensive functional and regression testing for dynamic web platforms. Focused on cross-browser compatibility, responsive design, and flawless user workflows.",
      image: "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&q=80"
    },
    {
      title: "API Testing & Validation",
      icon: <Server size={32} />,
      description: "Verified backend reliability using Postman. Validated REST API endpoints, JSON request/response structures, status codes, and data consistency across system boundaries.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80"
    },
    {
      title: "Mobile App Testing",
      icon: <Smartphone size={32} />,
      description: "Tested mobile applications across different devices. Performed functional testing, UI validation, and network condition simulation using tools like Charles Proxy.",
      image: "https://images.unsplash.com/photo-1526498460520-4c246339dccb?auto=format&fit=crop&q=80"
    },
    {
      title: "QA Process & Documentation",
      icon: <FileSignature size={32} />,
      description: "Established and maintained structured testing documentation. Created detailed test cases, checklists, and clear bug reports to streamline development and release cycles.",
      image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&q=80"
    }
  ];

  return (
    <Section id="projects" className="bg-white">
      <SectionHeading 
        title="Domains & Expertise" 
        subtitle="Areas where I have applied my QA skills to deliver high-quality software products."
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {domains.map((domain, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="relative overflow-hidden rounded-2xl group h-80 shadow-md border border-slate-200"
          >
            <img 
              src={domain.image} 
              alt={domain.title} 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/80 to-dark-900/20" />
            
            <div className="absolute inset-0 p-6 flex flex-col justify-end">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-white/10 backdrop-blur-md border border-white/20 text-white">
                {domain.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{domain.title}</h3>
              <p className="text-slate-300 text-sm leading-relaxed line-clamp-3 group-hover:line-clamp-none transition-all duration-300">
                {domain.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

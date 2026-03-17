import { motion } from 'motion/react';
import { ArrowRight, Download, CheckCircle2, Terminal, Database, FileCheck } from 'lucide-react';
import { Button } from './ui/Button';

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-dark-900 text-white">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img
          src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80"
          alt="Tech Workspace"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark-900/50 via-dark-900/80 to-dark-900" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-sm font-medium text-primary-100 mb-6">
              <span className="w-2 h-2 rounded-full bg-primary-500 animate-pulse" />
              Available for new opportunities
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 text-white drop-shadow-lg">
              Hi, I'm{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-white to-teal-300 drop-shadow-[0_0_15px_rgba(20,184,166,0.5)]">
                Valeria Spektor
              </span>
            </h1>

            <h2 className="text-2xl md:text-3xl font-medium text-slate-300 mb-6">
              QA Engineer | Manual QA | Web & API Testing
            </h2>

            <p className="text-lg text-slate-400 mb-10 max-w-xl leading-relaxed">
              Ensuring product excellence through structured manual testing, comprehensive API validation, and meticulous attention to detail. I bridge the gap between development and user expectations.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <Button size="lg" href="#experience" className="gap-2">
                View Experience <ArrowRight size={18} />
              </Button>

              <Button
                size="lg"
                variant="outline"
                href="/CV.pdf"
                className="border-slate-600 text-white hover:bg-white/5 hover:text-white gap-2"
              >
                <Download size={18} /> Download CV
              </Button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-8 border-t border-white/10">
              <div>
                <div className="text-3xl font-bold text-white mb-1">2+</div>
                <div className="text-sm text-slate-400">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-1">Web & API</div>
                <div className="text-sm text-slate-400">Core Expertise</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-1">AI & CRM</div>
                <div className="text-sm text-slate-400">Domain Knowledge</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden lg:block relative"
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              {/* Decorative abstract tech representation */}
              <div className="absolute inset-0 bg-gradient-to-tr from-teal-500/30 to-blue-500/30 rounded-2xl blur-2xl animate-pulse" />
              <div className="relative w-full aspect-square rounded-2xl border border-white/10 shadow-2xl bg-dark-800 overflow-hidden flex flex-col">
                <div className="h-10 bg-dark-900/80 border-b border-white/5 flex items-center px-4 gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  <div className="ml-4 text-xs font-mono text-slate-500">qa_test_suite.ts</div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-center gap-4">
                  <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5 transform transition-transform hover:scale-[1.02]">
                    <div className="p-3 rounded-lg bg-teal-500/20 text-teal-400">
                      <Terminal size={24} />
                    </div>
                    <div>
                      <div className="font-medium text-white">API Integration Tests</div>
                      <div className="text-sm text-slate-400">142 passed, 0 failed</div>
                    </div>
                    <CheckCircle2 className="ml-auto text-teal-500" size={20} />
                  </div>

                  <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5 transform transition-transform hover:scale-[1.02]">
                    <div className="p-3 rounded-lg bg-blue-500/20 text-blue-400">
                      <Database size={24} />
                    </div>
                    <div>
                      <div className="font-medium text-white">Database Validation</div>
                      <div className="text-sm text-slate-400">Data integrity verified</div>
                    </div>
                    <CheckCircle2 className="ml-auto text-teal-500" size={20} />
                  </div>

                  <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5 transform transition-transform hover:scale-[1.02]">
                    <div className="p-3 rounded-lg bg-purple-500/20 text-purple-400">
                      <FileCheck size={24} />
                    </div>
                    <div>
                      <div className="font-medium text-white">E2E User Flows</div>
                      <div className="text-sm text-slate-400">All critical paths clear</div>
                    </div>
                    <CheckCircle2 className="ml-auto text-teal-500" size={20} />
                  </div>
                </div>
              </div>

              {/* Floating badges */}
              <div
                className="absolute -right-6 top-1/4 bg-dark-800 border border-white/10 p-3 rounded-xl shadow-xl flex items-center gap-3 animate-bounce"
                style={{ animationDuration: '3s' }}
              >
                <div className="w-2 h-2 rounded-full bg-green-500" />
                <span className="text-sm font-medium">0 Bugs in Prod</span>
              </div>

              <div
                className="absolute -left-8 bottom-1/3 bg-dark-800 border border-white/10 p-3 rounded-xl shadow-xl flex items-center gap-3 animate-bounce"
                style={{ animationDuration: '4s', animationDelay: '1s' }}
              >
                <span className="text-sm font-medium text-primary-400">100%</span>
                <span className="text-sm font-medium">Regression Coverage</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

import { ArrowUp, Download } from 'lucide-react';
import { Button } from './ui/Button';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-dark-900 text-slate-300 py-12 border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Brand */}
          <div className="text-center md:text-left">
            <a href="#home" className="text-2xl font-bold text-white tracking-tight block mb-2">
              Valeria<span className="text-primary-500">.</span>
            </a>
            <p className="text-sm text-slate-400">
              QA Engineer | Manual QA | Web & API Testing
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex justify-center gap-6 text-sm font-medium">
            <a href="#about" className="hover:text-primary-400 transition-colors">About</a>
            <a href="#experience" className="hover:text-primary-400 transition-colors">Experience</a>
            <a href="#projects" className="hover:text-primary-400 transition-colors">Projects</a>
            <a href="#contact" className="hover:text-primary-400 transition-colors">Contact</a>
          </div>

          {/* Actions */}
          <div className="flex justify-center md:justify-end gap-4">
            <Button variant="outline" size="sm" className="border-slate-700 text-slate-300 hover:bg-white/5 hover:text-white gap-2">
              <Download size={16} /> CV
            </Button>
            <button 
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-dark-800 border border-slate-700 text-slate-300 hover:bg-white/5 hover:text-white transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp size={20} />
            </button>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-center text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} Valeria Spektor. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

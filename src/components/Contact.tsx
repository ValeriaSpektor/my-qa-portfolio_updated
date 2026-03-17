import { motion } from 'motion/react';
import { Section, SectionHeading } from './ui/Section';
import { Button } from './ui/Button';
import { Phone, Mail, MapPin, Send, MessageCircle } from 'lucide-react';

export function Contact() {
  return (
    <Section id="contact" className="bg-white">
      <SectionHeading
        title="Get In Touch"
        subtitle="Open to new opportunities. Let's discuss how I can help improve your product's quality."
      />

      <div className="grid lg:grid-cols-5 gap-12 max-w-5xl mx-auto">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-2 space-y-8"
        >
          <div>
            <h3 className="text-2xl font-bold text-dark-900 mb-6">Contact Information</h3>
            <p className="text-slate-600 mb-8">
              Feel free to reach out for job opportunities, consulting, or just to say hi. I usually respond within 24 hours.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary-50 text-primary-600 rounded-xl shrink-0">
                <Phone size={24} />
              </div>
              <div>
                <p className="text-sm font-medium text-slate-500 mb-1">Phone</p>
                <a
                  href="tel:+972528287872"
                  className="text-lg font-medium text-dark-900 hover:text-primary-600 transition-colors"
                >
                  +972 52 8287872
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary-50 text-primary-600 rounded-xl shrink-0">
                <Mail size={24} />
              </div>
              <div>
                <p className="text-sm font-medium text-slate-500 mb-1">Email</p>
                <a
                  href="mailto:vlapin84@gmail.com"
                  className="text-lg font-medium text-dark-900 hover:text-primary-600 transition-colors"
                >
                  vlapin84@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary-50 text-primary-600 rounded-xl shrink-0">
                <MessageCircle size={24} />
              </div>
              <div>
                <p className="text-sm font-medium text-slate-500 mb-1">Telegram</p>
                <a
                  href="https://t.me/ValeriaSpektor"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-medium text-dark-900 hover:text-primary-600 transition-colors"
                >
                  @ValeriaSpektor
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary-50 text-primary-600 rounded-xl shrink-0">
                <MapPin size={24} />
              </div>
              <div>
                <p className="text-sm font-medium text-slate-500 mb-1">Location</p>
                <p className="text-lg font-medium text-dark-900">Israel</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-3"
        >
          <form
            action="https://formspree.io/f/mdawpdrz"
            method="POST"
            className="bg-slate-50 p-8 rounded-2xl border border-slate-100 shadow-sm"
          >
            <h3 className="text-2xl font-bold text-dark-900 mb-6">Send a Message</h3>

            <div className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1.5">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all bg-white"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1.5">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all bg-white"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1.5">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all bg-white resize-none"
                  placeholder="How can I help you?"
                ></textarea>
              </div>

              <Button type="submit" size="lg" className="w-full gap-2 mt-2">
                <Send size={18} />
                Send Message
              </Button>
            </div>
          </form>
        </motion.div>
      </div>
    </Section>
  );
}

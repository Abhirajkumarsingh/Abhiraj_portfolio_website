import { useState, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Send, CheckCircle } from 'lucide-react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const subject = encodeURIComponent(`Portfolio Contact: ${form.name} (${form.email})`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
    );
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=workwithabhirajkumar@gmail.com&su=${subject}&body=${body}`, '_blank');

    setSent(true);
    setForm({ name: '', email: '', message: '' });
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Get In <span className="text-emerald-400">Touch</span>
          </h2>
          <div className="mt-3 w-16 h-1 bg-emerald-400 mx-auto rounded-full" />
          <p className="mt-4 text-gray-500 max-w-lg mx-auto">
            Have a project in mind or want to discuss an opportunity? I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10 max-w-4xl mx-auto">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="p-6 rounded-2xl border border-white/5 bg-white/[0.02]">
              <h3 className="text-white font-semibold mb-4">Contact Info</h3>
              <a
                href="mailto:workwithabhirajkumar@gmail.com"
                className="flex items-center gap-3 text-gray-400 hover:text-emerald-400 transition-colors group"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center group-hover:bg-emerald-500/20 transition-colors">
                  <Mail size={18} className="text-emerald-400" />
                </div>
                <div>
                  <p className="text-xs text-gray-600">Email</p>
                  <p className="text-sm">workwithabhirajkumar@gmail.com</p>
                </div>
              </a>
              <a
                href="https://github.com/Abhirajkumarsingh"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-400 hover:text-emerald-400 transition-colors group mt-4"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center group-hover:bg-emerald-500/20 transition-colors">
                  <Github size={18} className="text-emerald-400" />
                </div>
                <div>
                  <p className="text-xs text-gray-600">GitHub</p>
                  <p className="text-sm">Abhirajkumarsingh</p>
                </div>
              </a>
              <a
                href="https://www.linkedin.com/in/abhiraj-tech"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-400 hover:text-emerald-400 transition-colors group mt-4"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center group-hover:bg-emerald-500/20 transition-colors">
                  <Linkedin size={18} className="text-emerald-400" />
                </div>
                <div>
                  <p className="text-xs text-gray-600">LinkedIn</p>
                  <p className="text-sm">abhiraj-tech</p>
                </div>
              </a>
            </div>

            <div className="p-6 rounded-2xl border border-emerald-500/10 bg-emerald-500/5">
              <p className="text-emerald-400 text-sm font-medium">Open to opportunities</p>
              <p className="text-gray-500 text-sm mt-1">
                I'm currently looking for internships and JOB opportunities in data analysis, data science, and Software Engineering.
              </p>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="p-6 rounded-2xl border border-white/5 bg-white/[0.02] space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm text-gray-400 mb-1.5">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/25 transition-all text-sm"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm text-gray-400 mb-1.5">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/25 transition-all text-sm"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm text-gray-400 mb-1.5">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/25 transition-all text-sm resize-none"
                  placeholder="Tell me about your project or opportunity..."
                />
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-emerald-400 hover:bg-emerald-300 text-gray-900 font-semibold rounded-xl transition-all hover:shadow-lg hover:shadow-emerald-500/25"
              >
                {sent ? (
                  <>
                    <CheckCircle size={18} />
                    Opening Gmail...
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

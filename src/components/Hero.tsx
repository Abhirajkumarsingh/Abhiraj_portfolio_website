import { motion } from 'framer-motion';
import { ArrowDown, Send } from 'lucide-react';

export default function Hero() {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-emerald-500/20 rounded-full blur-[128px]" />
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-teal-500/15 rounded-full blur-[128px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-900/10 rounded-full blur-[128px]" />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Profile Picture */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-8"
        >
          <div className="relative">
            <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden border-2 border-emerald-400/30 shadow-xl shadow-emerald-500/10">
              <img
                src="/profile/p1.jpg"
                alt="Abhiraj Kumar"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-emerald-400 rounded-full flex items-center justify-center border-4 border-gray-950">
              <span className="w-2.5 h-2.5 rounded-full bg-gray-950 animate-pulse" />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full border border-emerald-500/20 bg-emerald-500/5 text-emerald-400 text-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Open to opportunities
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-5xl sm:text-6xl md:text-7xl font-bold text-white tracking-tight"
        >
          Hi, I'm{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">
            Abhiraj Kumar
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-4 text-lg sm:text-xl text-gray-400 font-medium"
        >
          Data Science &nbsp;|&nbsp; Data Analyst &nbsp;|&nbsp; Python &nbsp;|&nbsp; SQL &nbsp;|&nbsp; Web Developer |&nbsp; DSA |&nbsp; Content Creator
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-6 text-base sm:text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed"
        >
          I build data-driven solutions and modern web applications.
          Turning raw data into actionable insights and ideas into interactive experiences.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={() => scrollTo('#projects')}
            className="group flex items-center gap-2 px-7 py-3.5 bg-emerald-400 hover:bg-emerald-300 text-gray-900 font-semibold rounded-xl transition-all hover:shadow-lg hover:shadow-emerald-500/25"
          >
            View Projects
            <ArrowDown size={18} className="group-hover:translate-y-0.5 transition-transform" />
          </button>
          <button
            onClick={() => scrollTo('#contact')}
            className="group flex items-center gap-2 px-7 py-3.5 border border-gray-700 hover:border-emerald-500/50 text-gray-300 hover:text-emerald-400 font-semibold rounded-xl transition-all hover:bg-emerald-500/5"
          >
            Contact Me
            <Send size={16} className="group-hover:translate-x-0.5 transition-transform" />
          </button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-5 h-8 rounded-full border-2 border-gray-600 flex justify-center pt-1.5">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-1.5 rounded-full bg-emerald-400"
          />
        </div>
      </motion.div>
    </section>
  );
}

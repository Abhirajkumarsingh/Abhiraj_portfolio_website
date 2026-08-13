import { motion } from 'framer-motion';
import { Rocket, Video, Users, PenTool } from 'lucide-react';

const experiences = [
  {
    role: 'Founder',
    org: 'College Brains',
    points: [
      'Founded and grew a tech content platform focused on career guidance and job updates.',
      'Created 1200+ YouTube videos covering technology, placements, and skill development.',
      'Built and managed an engaged community of students and aspiring professionals.',
      'Produced educational content helping thousands navigate their tech careers.',
    ],
    icon: Rocket,
  },
];

const stats = [
  { icon: Video, value: '1200+', label: 'YouTube Videos' },
  { icon: Users, value: '1000+', label: 'Community Members' },
  { icon: PenTool, value: '10+', label: 'Projects Built' },
  { icon: Rocket, value: '3+', label: 'Years Learning' },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            My <span className="text-emerald-400">Experience</span>
          </h2>
          <div className="mt-3 w-16 h-1 bg-emerald-400 mx-auto rounded-full" />
        </motion.div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto mb-16">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.org}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative pl-8 border-l-2 border-emerald-500/20 pb-8"
            >
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-emerald-400 border-4 border-gray-950" />
              <div className="p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:border-emerald-500/20 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center">
                    <exp.icon size={20} className="text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">{exp.role}</h3>
                    <p className="text-emerald-400 text-sm">{exp.org} &middot; {exp.period}</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {exp.points.map((point) => (
                    <li key={point} className="flex items-start gap-2 text-gray-400 text-sm leading-relaxed">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-500/50 shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-4"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={item}
              className="p-5 rounded-2xl border border-white/5 bg-white/[0.02] text-center hover:border-emerald-500/20 transition-all duration-300"
            >
              <stat.icon size={22} className="text-emerald-400 mx-auto mb-2" />
              <p className="text-2xl font-bold text-white">{stat.value}</p>
              <p className="text-gray-500 text-sm mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

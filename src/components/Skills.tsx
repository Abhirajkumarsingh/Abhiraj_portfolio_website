import { motion } from 'framer-motion';
import { Code2, Database, Wrench, Globe } from 'lucide-react';

const categories = [
  {
    icon: Code2,
    title: 'Programming',
    color: 'emerald',
    skills: ['Python', 'JavaScript', 'Java', 'C++','c'],
  },
  {
    icon: Database,
    title: 'Data',
    color: 'teal',
    skills: ['Pandas', 'NumPy', 'SQL', 'Data Cleaning', 'EDA'],
  },
  {
    icon: Wrench,
    title: 'Tools',
    color: 'cyan',
    skills: ['Power BI', 'Excel', 'Git', 'GitHub', 'VS Code', 'Streamlit'],
  },
  {
    icon: Globe,
    title: 'Web',
    color: 'sky',
    skills: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Express', 'MongoDB'],
  },
];

const colorMap: Record<string, { bg: string; border: string; text: string; badge: string }> = {
  emerald: {
    bg: 'bg-emerald-500/10',
    border: 'border-emerald-500/20',
    text: 'text-emerald-400',
    badge: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
  },
  teal: {
    bg: 'bg-teal-500/10',
    border: 'border-teal-500/20',
    text: 'text-teal-400',
    badge: 'bg-teal-500/10 text-teal-400 border-teal-500/20',
  },
  cyan: {
    bg: 'bg-cyan-500/10',
    border: 'border-cyan-500/20',
    text: 'text-cyan-400',
    badge: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
  },
  sky: {
    bg: 'bg-sky-500/10',
    border: 'border-sky-500/20',
    text: 'text-sky-400',
    badge: 'bg-sky-500/10 text-sky-400 border-sky-500/20',
  },
};

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            My <span className="text-emerald-400">Skills</span>
          </h2>
          <div className="mt-3 w-16 h-1 bg-emerald-400 mx-auto rounded-full" />
          <p className="mt-4 text-gray-500 max-w-lg mx-auto">
            A blend of data expertise, programming fundamentals, and web development skills.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {categories.map((cat) => {
            const c = colorMap[cat.color];
            return (
              <motion.div
                key={cat.title}
                variants={item}
                className={`group p-6 rounded-2xl border ${c.border} bg-white/[0.02] hover:bg-white/[0.05] transition-all duration-300`}
              >
                <div className={`w-11 h-11 rounded-xl ${c.bg} flex items-center justify-center mb-4`}>
                  <cat.icon size={22} className={c.text} />
                </div>
                <h3 className="text-white font-semibold mb-4">{cat.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`px-3 py-1.5 text-xs font-medium rounded-lg border ${c.badge}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

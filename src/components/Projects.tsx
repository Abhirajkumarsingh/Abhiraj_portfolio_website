import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Globe } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  stack: string[];
  github: string;
  live: string;
  category: string;
}

const projects: Project[] = [
  {
    title: 'Credit Card Fraud Detection',
    description:
      'ML model using XGBoost to detect fraudulent credit card transactions. Handled an imbalanced 284K+ transaction dataset with SMOTE, achieving ROC-AUC of ~0.97. Deployed as an interactive Streamlit web app.',
    stack: ['Python', 'XGBoost', 'SMOTE', 'Streamlit', 'Pandas'],
    github: 'https://github.com/Abhirajkumarsingh',
    live: 'https://abhirajkumarsingh-creditcardfrauddetection.streamlit.app/',
    category: 'ML',
  },

  {
    title: 'IPL Analytics Dashboard',
    description:
      'Interactive analytics dashboard for exploring IPL matches, teams, players, and season-wise performance. Includes batting and bowling analysis, win trends, team comparisons, player statistics, and interactive filters.',
    stack: ['Python', 'Pandas', 'Streamlit', 'Data Visualization'],
    github: 'https://github.com/Abhirajkumarsingh',
    live: '#',
    category: 'Data',
  },

  {
    title: 'College Brains Website',
    description:
      'Website for College Brains, an education and career platform providing learning resources, opportunities, and student-focused information. Designed and developed the website with a responsive interface and structured user experience.',
    stack: ['HTML', 'CSS', 'JavaScript', 'Web Development'],
    github: 'https://github.com/Abhirajkumarsingh',
    live: 'https://collegebrains.online/',
    category: 'Web',
  },

  {
    title: 'CB Tools',
    description:
      'A collection of useful web-based tools developed under College Brains Services, including image compression, file conversion, AI assistance, and link organization tools. Designed as a centralized toolkit with separate utilities and a responsive interface.',
    stack: ['HTML', 'CSS', 'JavaScript', 'APIs', 'AI'],
    github: 'https://github.com/Abhirajkumarsingh',
    live: 'https://cbtools.netlify.app/',
    category: 'Web',
  },

  {
    title: 'E-commerce Website',
    description:
      'Fully responsive e-commerce website with product listings, interactive elements, and a clean user interface. Built with vanilla web technologies with a focus on responsive design and user experience.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/Abhirajkumarsingh',
    live: '#',
    category: 'Web',
  },

  {
    title: 'Email Automation Tool',
    description:
      'Python-based email automation tool using SMTP to automate personalized email delivery. Supports reusable templates and recipient lists for reducing repetitive communication tasks.',
    stack: ['Python', 'SMTP', 'Automation'],
    github: 'https://github.com/Abhirajkumarsingh',
    live: '#',
    category: 'Automation',
  },
{
  title: 'Many More Projects',
  description:
    'Continuously building and exploring new projects across web development, software development, data analytics, automation, and machine learning.',
  stack: ['Web Development', 'Software Development', 'Data Analytics', 'ML'],
  github: 'https://github.com/Abhirajkumarsingh',
  live: '#',
  category: 'Web',
  },
];

const filters = ['All', 'ML', 'Web', 'Automation'];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Projects() {
  const [active, setActive] = useState('All');

  const filtered =
    active === 'All' ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            My <span className="text-emerald-400">Projects</span>
          </h2>
          <div className="mt-3 w-16 h-1 bg-emerald-400 mx-auto rounded-full" />
          <p className="mt-4 text-gray-500 max-w-lg mx-auto">
            A selection of projects that showcase my skills in data science, web development, and automation.
          </p>
        </motion.div>

        {/* Filter buttons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.4 }}
          className="flex justify-center gap-2 mb-10"
        >
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`px-4 py-2 text-sm font-medium rounded-lg transition-all ${
                active === f
                  ? 'bg-emerald-400 text-gray-900'
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              {f}
            </button>
          ))}
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="grid sm:grid-cols-2 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.div
                key={project.title}
                variants={item}
                layout
                exit={{ opacity: 0, scale: 0.95 }}
                className="group p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:border-emerald-500/20 transition-all duration-300 flex flex-col"
              >
                <div className="flex items-start justify-between mb-3">
                  <span className="px-2.5 py-1 text-xs font-medium rounded-md bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    {project.category}
                  </span>
                  <div className="flex items-center gap-1">
                    {project.live && project.live !== '#' && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-gray-500 hover:text-emerald-400 transition-colors"
                        title="Live Demo"
                      >
                        <Globe size={18} />
                      </a>
                    )}
                    {project.github && project.github !== '#' && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-gray-500 hover:text-emerald-400 transition-colors"
                        title="Source Code"
                      >
                        <Github size={18} />
                      </a>
                    )}
                    {project.github === '#' && (
                      <span className="p-2 text-gray-600">
                        <ExternalLink size={18} />
                      </span>
                    )}
                  </div>
                </div>

                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-emerald-400 transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-500 text-sm leading-relaxed mb-4 flex-1">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-xs font-medium rounded-md bg-white/5 text-gray-400 border border-white/5"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Live Demo Button */}
                {project.live && project.live !== '#' && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl border border-emerald-500/20 text-emerald-400 text-sm font-medium hover:bg-emerald-500/10 hover:border-emerald-500/30 transition-all"
                  >
                    <Globe size={14} />
                    View Live Demo
                  </a>
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

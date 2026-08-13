import { motion } from 'framer-motion';
import {
  GraduationCap,
  BarChart3,
  Code2,
  Lightbulb,
  Rocket,
  Brain,
} from 'lucide-react';

const highlights = [
  {
    icon: GraduationCap,
    title: 'Final-Year CSE Student',
    desc: 'B.Tech Computer Science Engineering student at Quantum University, Roorkee with a 7.83 CGPA and a strong foundation in programming and problem solving.',
  },
  {
    icon: BarChart3,
    title: 'Data Analytics',
    desc: 'Currently building skills in Python, SQL, Pandas, NumPy, Excel, Power BI, data visualization, and exploratory data analysis.',
  },
  {
    icon: Code2,
    title: 'Software Development',
    desc: 'Hands-on development experience from building web applications and MERN-based projects using HTML, CSS, JavaScript, Node.js, Express, APIs, and databases.',
  },
  {
    icon: Brain,
    title: 'AI & Machine Learning',
    desc: 'Building practical ML projects with Python, Scikit-learn, XGBoost, data preprocessing, feature engineering, model evaluation, and predictive analysis.',
  },
  {
    icon: Rocket,
    title: 'Project Builder',
    desc: 'Built and deployed projects across web development, automation, data analytics, machine learning, and software applications.',
  },
  {
    icon: Lightbulb,
    title: 'Founder & Product Builder',
    desc: 'Built College Brains and 99Work, gaining practical experience in developing products, solving user problems, and turning ideas into working applications.',
  },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            About <span className="text-emerald-400">Me</span>
          </h2>

          <div className="mt-3 w-16 h-1 bg-emerald-400 mx-auto rounded-full" />

          <p className="mt-4 text-gray-500 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Computer Science student, developer, and independent builder
            focused on data, software, and practical problem solving.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-start">

          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-gray-400 leading-relaxed text-base sm:text-lg">
              I'm a final-year{' '}
              <span className="text-white font-medium">
                B.Tech Computer Science Engineering
              </span>{' '}
              student at Quantum University, Roorkee. My experience has
              taken me across software development, data analytics, and
              machine learning, and I am currently building my career
              around{' '}
              <span className="text-emerald-400 font-medium">
                Data Analytics and Data Science
              </span>
              .
            </p>

            <p className="mt-4 text-gray-400 leading-relaxed text-base sm:text-lg">
              I am currently strengthening my skills in{' '}
              <span className="text-white font-medium">
                Python, SQL, Pandas, NumPy, Excel, Power BI, and data
                visualization
              </span>
              , while continuing to learn statistics, machine learning,
              and AI. I enjoy working with real datasets, understanding
              the problem behind the data, and turning it into useful
              insights, visualizations, or applications.
            </p>

            <p className="mt-4 text-gray-400 leading-relaxed text-base sm:text-lg">
              Before focusing more deeply on data, I spent significant
              time building{' '}
              <span className="text-white font-medium">
                web applications and MERN-based projects
              </span>
              . I have worked with HTML, CSS, JavaScript, Node.js,
              Express, APIs, databases, and full-stack application
              concepts. I also developed websites and software solutions
              for different use cases, giving me practical experience
              beyond classroom projects.
            </p>

            <p className="mt-4 text-gray-400 leading-relaxed text-base sm:text-lg">
              My technical projects include a{' '}
              <span className="text-emerald-400 font-medium">
                Credit Card Fraud Detection System
              </span>{' '}
              using machine learning and an{' '}
              <span className="text-emerald-400 font-medium">
                IPL Analytics Dashboard
              </span>{' '}
              for exploring historical sports data and performance trends.
              I have also built automation tools, websites, and other
              software applications while continuously experimenting with
              new technologies.
            </p>

            <p className="mt-4 text-gray-400 leading-relaxed text-base sm:text-lg">
              I am also the founder and builder of{' '}
              <span className="text-emerald-400 font-medium">
                College Brains
              </span>
              , a student-focused technology and career initiative.
              Through the platform, I have worked on websites, tools,
              educational resources, and technology-related projects.
              This experience has helped me understand product development,
              communication, problem solving, and building solutions for
              real users.
            </p>

            <p className="mt-4 text-gray-400 leading-relaxed text-base sm:text-lg">
              Alongside College Brains, I am building{' '}
              <span className="text-emerald-400 font-medium">
                99Work
              </span>
              , a service-focused project aimed at providing affordable
              digital services such as websites, resumes, portfolios,
              and other technology solutions. These projects reflect my
              interest in combining technical skills with practical
              problem solving.
            </p>

            <p className="mt-4 text-gray-400 leading-relaxed text-base sm:text-lg">
              I have also co-authored a published research paper on{' '}
              <span className="text-white font-medium">
                wearable technology and real-time detection of infectious
                disease hotspots
              </span>
              , exploring sensors, predictive analytics, and
              data-driven systems for public health applications.
            </p>

            <p className="mt-4 text-gray-400 leading-relaxed text-base sm:text-lg">
              I consider myself a{' '}
              <span className="text-white font-medium">
                fast learner and hands-on builder
              </span>
              . I prefer learning by understanding fundamentals and
              applying them through projects. My goal is to start my
              professional career in{' '}
              <span className="text-emerald-400 font-medium">
                Data Analytics, Data Science, Software Development, or
                AI
              </span>{' '}
              and gradually grow into building reliable,
              data-driven software products.
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 mt-8">
              <div className="rounded-xl border border-white/5 bg-white/[0.02] p-3 sm:p-4 text-center">
                <p className="text-lg sm:text-xl font-bold text-emerald-400">
                  ~8
                </p>
                <p className="text-[11px] sm:text-xs text-gray-500 mt-1">
                  CGPA
                </p>
              </div>

              <div className="rounded-xl border border-white/5 bg-white/[0.02] p-3 sm:p-4 text-center">
                <p className="text-lg sm:text-xl font-bold text-emerald-400">
                  150+
                </p>
                <p className="text-[11px] sm:text-xs text-gray-500 mt-1">
                  DSA Problems
                </p>
              </div>

              <div className="rounded-xl border border-white/5 bg-white/[0.02] p-3 sm:p-4 text-center">
                <p className="text-lg sm:text-xl font-bold text-emerald-400">
                  2023
                </p>
                <p className="text-[11px] sm:text-xs text-gray-500 mt-1">
                  Started B.Tech
                </p>
              </div>
            </div>
          </motion.div>

          {/* Highlight Cards */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
            className="grid sm:grid-cols-2 gap-4"
          >
            {highlights.map((highlight) => {
              const Icon = highlight.icon;

              return (
                <motion.div
                  key={highlight.title}
                  variants={item}
                  className="
                    group
                    p-5 sm:p-6
                    rounded-2xl
                    border border-white/5
                    bg-white/[0.02]
                    hover:bg-white/[0.05]
                    hover:border-emerald-500/20
                    transition-all duration-300
                  "
                >
                  <div
                    className="
                      w-10 h-10
                      rounded-xl
                      bg-emerald-500/10
                      flex items-center justify-center
                      mb-4
                      group-hover:bg-emerald-500/20
                      transition-colors
                    "
                  >
                    <Icon
                      size={20}
                      className="text-emerald-400"
                    />
                  </div>

                  <h3 className="text-white font-semibold text-sm sm:text-base">
                    {highlight.title}
                  </h3>

                  <p className="mt-2 text-gray-500 text-xs sm:text-sm leading-relaxed">
                    {highlight.desc}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
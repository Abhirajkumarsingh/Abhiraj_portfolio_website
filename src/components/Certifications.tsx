import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Award,
  ExternalLink,
  X,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';

interface Certification {
  id: string;
  title: string;
  issuer: string;
  image: string;
  credentialUrl: string;
  date: string;
  category:
    | 'Data Analytics'
    | 'AI & ML'
    | 'Web Development'
    | 'Cloud'
    | 'Digital Marketing';
}

const certifications: Certification[] = [
  {
    id: '1',
    title: 'Artificial Intelligence and Machine Learning Workshop',
    issuer: 'GeeksforGeeks / IIT Roorkee Cognizance',
    image: '/certifications/1.svg',
    credentialUrl: '#',
    date: '2023-11-30',
    category: 'AI & ML',
  },
  {
    id: '2',
    title: 'Basics of Data Analytics',
    issuer: 'Physics Wallah / Microsoft',
    image: '/certifications/2.svg',
    credentialUrl: '#',
    date: '2026-05-05',
    category: 'Data Analytics',
  },
  {
    id: '3',
    title: 'Full Stack Web Development Bootcamp',
    issuer: 'KIMO',
    image: '/certifications/3.svg',
    credentialUrl: '#',
    date: '2024-06-03',
    category: 'Web Development',
  },
  {
    id: '4',
    title: 'Digital Productivity with AI',
    issuer: 'Passport to Earning / UNICEF',
    image: '/certifications/4.svg',
    credentialUrl: '#',
    date: '2025-08-29',
    category: 'AI & ML',
  },
  {
    id: '5',
    title: 'Arcade Gen AI and Google Cloud Foundation Program',
    issuer: 'Google Developer Student Clubs, Quantum University',
    image: '/certifications/5.svg',
    credentialUrl: '#',
    date: '2023-10-01',
    category: 'Cloud',
  },
  {
    id: '6',
    title: 'Master Microsoft Power BI from Basics to Advance',
    issuer: 'Udemy',
    image: '/certifications/6.svg',
    credentialUrl: '#',
    date: '2025-12-08',
    category: 'Data Analytics',
  },
  {
    id: '7',
    title: '100 Days of Google Ads & Microsoft Ads: Ultimate Bootcamp',
    issuer: 'Udemy',
    image: '/certifications/7.svg',
    credentialUrl: '#',
    date: '2025-12-08',
    category: 'Digital Marketing',
  },
  {
    id: '8',
    title: 'AI for Business Analysts',
    issuer: 'Udemy',
    image: '/certifications/8.svg',
    credentialUrl: '#',
    date: '2025-12-08',
    category: 'AI & ML',
  },
];

const categories = [
  'All',
  'Data Analytics',
  'AI & ML',
  'Web Development',
  'Cloud',
  'Digital Marketing',
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
      duration: 0.45,
    },
  },
};

export default function Certifications() {
  const [activeCategory, setActiveCategory] = useState('All');

  const [lightbox, setLightbox] = useState<{
    open: boolean;
    index: number;
  }>({
    open: false,
    index: 0,
  });

  const filteredCertifications =
    activeCategory === 'All'
      ? certifications
      : certifications.filter(
          (cert) => cert.category === activeCategory
        );

  const openLightbox = (index: number) => {
    setLightbox({
      open: true,
      index,
    });
  };

  const closeLightbox = () => {
    setLightbox({
      open: false,
      index: 0,
    });
  };

  const prev = () => {
    setLightbox((current) => ({
      ...current,
      index:
        (current.index - 1 + filteredCertifications.length) %
        filteredCertifications.length,
    }));
  };

  const next = () => {
    setLightbox((current) => ({
      ...current,
      index:
        (current.index + 1) %
        filteredCertifications.length,
    }));
  };

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString('en-IN', {
      year: 'numeric',
      month: 'short',
    });
  };

  return (
    <section
      id="certifications"
      className="py-24 px-6"
    >
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            margin: '-80px',
          }}
          transition={{
            duration: 0.5,
          }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            My{' '}
            <span className="text-emerald-400">
              Certifications
            </span>
          </h2>

          <div className="mt-3 w-16 h-1 bg-emerald-400 mx-auto rounded-full" />

          <p className="mt-4 text-gray-500 max-w-lg mx-auto">
            Certifications, workshops, and learning programs
            across data analytics, AI, machine learning,
            development, cloud, and technology.
          </p>
        </motion.div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-emerald-400 text-gray-950 font-semibold'
                  : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Certification Grid */}
        <motion.div
          key={activeCategory}
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{
            once: true,
            margin: '-80px',
          }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {filteredCertifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              variants={item}
              className="group"
            >
              <div
                className="relative overflow-hidden rounded-2xl border border-white/5 bg-white/[0.02] hover:border-emerald-500/20 transition-all duration-300 cursor-pointer"
                onClick={() => openLightbox(index)}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-gray-950/90 via-transparent to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <div className="flex items-center gap-1.5 text-emerald-400 text-xs mb-1">
                    <Award size={12} />
                    {cert.issuer}
                  </div>

                  <h3 className="text-white font-semibold text-sm leading-snug">
                    {cert.title}
                  </h3>

                  <div className="flex items-center justify-between gap-2 mt-2">
                    <p className="text-gray-500 text-xs">
                      {formatDate(cert.date)}
                    </p>

                    <span className="text-[10px] text-gray-500 border border-white/10 px-2 py-0.5 rounded-full">
                      {cert.category}
                    </span>
                  </div>
                </div>
              </div>

              {cert.credentialUrl &&
                cert.credentialUrl !== '#' && (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex items-center gap-1.5 text-xs text-gray-500 hover:text-emerald-400 transition-colors"
                  >
                    <ExternalLink size={12} />
                    View Credential
                  </a>
                )}
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox.open &&
          filteredCertifications.length > 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
              onClick={closeLightbox}
            >
              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white transition-colors z-10"
              >
                <X size={24} />
              </button>

              {/* Previous Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  prev();
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-2 text-gray-400 hover:text-white transition-colors z-10"
              >
                <ChevronLeft size={28} />
              </button>

              {/* Next Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  next();
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-2 text-gray-400 hover:text-white transition-colors z-10"
              >
                <ChevronRight size={28} />
              </button>

              {/* Certificate Preview */}
              <motion.div
                key={filteredCertifications[lightbox.index].id}
                initial={{
                  opacity: 0,
                  scale: 0.9,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  scale: 0.9,
                }}
                className="max-w-4xl w-full"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={
                    filteredCertifications[lightbox.index]
                      .image
                  }
                  alt={
                    filteredCertifications[lightbox.index]
                      .title
                  }
                  className="w-full max-h-[75vh] object-contain rounded-2xl shadow-2xl"
                />

                <div className="mt-4 text-center">
                  <div className="flex items-center justify-center gap-2 text-emerald-400 text-sm">
                    <Award size={14} />
                    {
                      filteredCertifications[lightbox.index]
                        .issuer
                    }
                  </div>

                  <h3 className="text-white font-semibold text-lg mt-1">
                    {
                      filteredCertifications[lightbox.index]
                        .title
                    }
                  </h3>

                  <div className="flex items-center justify-center gap-2 mt-1">
                    <p className="text-gray-500 text-xs">
                      {formatDate(
                        filteredCertifications[
                          lightbox.index
                        ].date
                      )}
                    </p>

                    <span className="text-[10px] text-gray-500 border border-white/10 px-2 py-0.5 rounded-full">
                      {
                        filteredCertifications[
                          lightbox.index
                        ].category
                      }
                    </span>
                  </div>

                  {filteredCertifications[lightbox.index]
                    .credentialUrl &&
                    filteredCertifications[lightbox.index]
                      .credentialUrl !== '#' && (
                      <a
                        href={
                          filteredCertifications[
                            lightbox.index
                          ].credentialUrl
                        }
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 mt-3 text-sm text-emerald-400 hover:text-emerald-300 transition-colors"
                      >
                        <ExternalLink size={14} />
                        View Credential
                      </a>
                    )}
                </div>
              </motion.div>
            </motion.div>
          )}
      </AnimatePresence>
    </section>
  );
}
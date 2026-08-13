import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, X, ChevronLeft, ChevronRight } from 'lucide-react';

interface EventItem {
  id: string;
  title: string;
  description: string;
  image: string;
  date: string;
}

const events: EventItem[] = [
  {
    id: '1',
    title: 'Tech Workshop 2025',
    description: 'Conducted a hands-on Python and Data Analysis workshop for 200+ students at the college tech fest.',
    image: '/events/p1.jpg',
    date: '2025-03-15',
  },
  {
    id: '2',
    title: 'Hackathon Participation',
    description: 'Participated in a 24-hour national hackathon, building a real-time data dashboard prototype.',
    image: '/events/p2.jpg',
    date: '2025-01-20',
  },
  {
    id: '3',
    title: 'College Brains Meetup',
    description: 'Organized a community meetup for College Brains members with tech talks and networking.',
    image: '/events/p3.jpg',
    date: '2024-11-08',
  },
  {
    id: '4',
    title: 'Data Science Seminar',
    description: 'Attended a seminar on emerging trends in data science and machine learning applications.',
    image: '/events/p4.jpg',
    date: '2024-09-25',
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Events() {
  const [lightbox, setLightbox] = useState<{ open: boolean; index: number }>({ open: false, index: 0 });

  const openLightbox = (index: number) => setLightbox({ open: true, index });
  const closeLightbox = () => setLightbox({ open: false, index: 0 });
  const prev = () => setLightbox((l) => ({ ...l, index: (l.index - 1 + events.length) % events.length }));
  const next = () => setLightbox((l) => ({ ...l, index: (l.index + 1) % events.length }));

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString('en-IN', { year: 'numeric', month: 'short', day: 'numeric' });
  };

  return (
    <section id="events" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Events & <span className="text-emerald-400">Moments</span>
          </h2>
          <div className="mt-3 w-16 h-1 bg-emerald-400 mx-auto rounded-full" />
          <p className="mt-4 text-gray-500 max-w-lg mx-auto">
            Highlights from workshops, hackathons, meetups, and seminars I've been part of.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              variants={item}
              className="group cursor-pointer"
              onClick={() => openLightbox(index)}
            >
              <div className="relative overflow-hidden rounded-2xl border border-white/5 bg-white/[0.02] hover:border-emerald-500/20 transition-all duration-300">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-4">
                  <div className="flex items-center gap-1.5 text-emerald-400 text-xs mb-2">
                    <Calendar size={12} />
                    {formatDate(event.date)}
                  </div>
                  <h3 className="text-white font-semibold text-sm group-hover:text-emerald-400 transition-colors">
                    {event.title}
                  </h3>
                  <p className="mt-1 text-gray-500 text-xs leading-relaxed line-clamp-2">
                    {event.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox.open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white transition-colors z-10"
            >
              <X size={24} />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); prev(); }}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-2 text-gray-400 hover:text-white transition-colors z-10"
            >
              <ChevronLeft size={28} />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); next(); }}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-2 text-gray-400 hover:text-white transition-colors z-10"
            >
              <ChevronRight size={28} />
            </button>

            <motion.div
              key={lightbox.index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="max-w-3xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={events[lightbox.index].image}
                alt={events[lightbox.index].title}
                className="w-full rounded-2xl shadow-2xl"
              />
              <div className="mt-4 text-center">
                <h3 className="text-white font-semibold text-lg">{events[lightbox.index].title}</h3>
                <p className="text-gray-400 text-sm mt-1">{events[lightbox.index].description}</p>
                <p className="text-emerald-400 text-xs mt-2">{formatDate(events[lightbox.index].date)}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

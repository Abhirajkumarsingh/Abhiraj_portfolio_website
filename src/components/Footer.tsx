import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-gray-600 text-sm">
          &copy; {new Date().getFullYear()} Abhiraj Kumar. All rights reserved.
        </p>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/Abhirajkumarsingh"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-emerald-400 transition-colors"
          >
            <Github size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/abhiraj-tech"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-emerald-400 transition-colors"
          >
            <Linkedin size={18} />
          </a>
          <a
            href="mailto:workwithabhirajkumar@gmail.com"
            className="text-gray-600 hover:text-emerald-400 transition-colors"
          >
            <Mail size={18} />
          </a>
        </div>

        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="p-2 text-gray-600 hover:text-emerald-400 transition-colors"
          aria-label="Back to top"
        >
          <ArrowUp size={18} />
        </button>
      </div>
    </footer>
  );
}

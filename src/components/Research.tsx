export default function Research() {
  return (
    <section id="research" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <p className="text-sm font-medium text-blue-500 uppercase tracking-wider mb-2">
            Research
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Research Publication
          </h2>

          <p className="mt-4 text-gray-600 max-w-3xl">
            Research work exploring the use of wearable technology, real-time
            monitoring, and data-driven methods for infectious disease
            surveillance.
          </p>
        </div>

        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8">
          <div className="flex flex-col gap-6">
            <div>
              <span className="inline-block text-sm font-medium text-blue-600 mb-3">
                Published Research Paper
              </span>

              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
                Integration of Wearable Technology for Real-Time Detection of
                Infectious Disease Hotspots
              </h3>
            </div>

            <div className="text-gray-600">
              <p className="mb-2">
                <strong>Authors:</strong> Abhiraj Kumar,
              </p>

              <p>
                <strong>Research Area:</strong> Wearable Technology, Artificial
                Intelligence, Data Analytics, Real-Time Health Monitoring
              </p>
            </div>

            <div className="space-y-3 text-gray-600 leading-relaxed">
              <p>
                Explored the integration of wearable sensor technology with
                real-time data analysis for early identification of infectious
                disease patterns and potential hotspots.
              </p>

              <p>
                Studied how physiological data collected from wearable devices
                can be analyzed using data-driven methods and combined with
                geographical information to support disease surveillance.
              </p>

              <p>
                Proposed a framework for continuous monitoring, anomaly
                detection, hotspot identification, and faster response to
                potential disease outbreaks.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {[
                'Wearable Technology',
                'Artificial Intelligence',
                'Data Analytics',
                'Predictive Analytics',
                'Real-Time Monitoring',
                'Disease Surveillance',
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 text-sm rounded-full bg-gray-100 text-gray-700"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="pt-2">
              <a
                href="https://www.semanticscholar.org/author/A.-Bhardwaj/2306849051"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-blue-600 font-medium hover:underline"
              >
                View Research Record →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
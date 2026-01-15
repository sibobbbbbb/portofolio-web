import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <div className="pb-20">
      <h2 className="my-20 text-center text-4xl">Experience</h2>
      <div className="container mx-auto px-4 lg:px-8">
        <style>{`
          .custom-scrollbar::-webkit-scrollbar {
            width: 6px;
          }
          .custom-scrollbar::-webkit-scrollbar-track {
            background: #171717;
            border-radius: 4px;
          }
          .custom-scrollbar::-webkit-scrollbar-thumb {
            background-color: #404040;
            border-radius: 20px;
          }
          .custom-scrollbar::-webkit-scrollbar-thumb:hover {
            background-color: #525252;
          }
          .custom-scrollbar {
            scrollbar-width: thin;
            scrollbar-color: #404040 #171717;
          }
        `}</style>

        <div className="relative max-h-[600px] overflow-y-auto custom-scrollbar pr-2 lg:pr-6">
          {/* VERTIKAL LINE */}
          <div className="hidden lg:block absolute left-1/4 top-0 bottom-0 w-0.5 bg-neutral-800 -translate-x-1/2" />

          {EXPERIENCES.map((experience, index) => (
            <div key={index} className="mb-12 flex flex-wrap relative group">
              {/* DOT */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.3, delay: 0.2 }}
                viewport={{ once: true }}
                className="hidden lg:flex absolute left-1/4 top-1 -translate-x-1/2 z-10"
              >
                <div className="w-3 h-3 bg-neutral-400 rounded-full ring-4 ring-neutral-950 group-hover:bg-neutral-200 group-hover:ring-neutral-900 transition-colors duration-300" />
              </motion.div>

              {/* PERIOD */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="w-full lg:w-1/4 lg:pr-16 flex items-start lg:justify-end mb-4 lg:mb-0"
              >
                <div className="sticky top-0">
                  <p className="inline-block text-neutral-400 text-sm font-medium lg:text-right">
                    {experience.period}
                  </p>
                </div>
              </motion.div>

              {/* CONTENT */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="w-full lg:w-3/4 lg:pl-16"
              >
                <div className="p-6 rounded-xl bg-neutral-900/50 border border-neutral-800 hover:bg-neutral-900 hover:border-neutral-700 transition-all duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3 gap-2">
                    <h3 className="text-xl font-semibold">{experience.role}</h3>
                    <span className="text-xs font-medium text-neutral-400 bg-neutral-800 px-2.5 py-1 rounded-full border border-neutral-700">
                      {experience.company}
                    </span>
                  </div>

                  <p className="text-neutral-400 text-sm leading-relaxed text-justify font-light">
                    {experience.description}
                  </p>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;

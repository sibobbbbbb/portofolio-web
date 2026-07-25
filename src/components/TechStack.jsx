import { motion } from "framer-motion";
import { TECH_CATEGORIES } from "../constants";

const TechStack = () => {
  return (
    <div className="pb-20">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="my-20 text-center text-4xl font-bold text-neutral-200"
      >
        Tech Stack
      </motion.h2>

      <div className="container mx-auto px-4 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TECH_CATEGORIES.map((category) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: category.delay }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl bg-neutral-900/50 border border-neutral-800 hover:border-neutral-600 transition-colors duration-300"
            >
              <h3 className="text-lg font-bold text-center text-neutral-200 mb-6">
                {category.title}
              </h3>
              <div className="flex justify-center flex-wrap gap-4 items-center">
                {category.items.map((item) =>
                  item.Icon ? (
                    <item.Icon
                      key={item.title}
                      className={item.className}
                      title={item.title}
                    />
                  ) : (
                    <img
                      key={item.title}
                      src={item.src}
                      className={item.imgClassName}
                      alt={item.title}
                      title={item.title}
                    />
                  )
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStack;

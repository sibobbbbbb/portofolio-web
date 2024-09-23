import { Swiper, SwiperSlide } from "swiper/react";
import { FaGithub } from "react-icons/fa";
import { Navigation, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { PROJECTS } from "../constants";

const imageVariants = {
  hidden: { opacity: 0, y: -100 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const contentVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } },
};

const Projects = () => {
  return (
    <div className="p-28">
      <h2 className="my-20 text-center text-4xl">Projects</h2>

      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        navigation
        autoplay={{
          delay: 15000,
          disableOnInteraction: false,
        }}
        loop
        modules={[Navigation, Autoplay]}
      >
        {PROJECTS.map((project, index) => (
          <SwiperSlide key={index}>
            <div className="mb-8 flex flex-wrap lg:justify-center">
              <motion.div
                className="w-full lg:w-1/4"
                initial="hidden"
                whileInView="visible"
                variants={imageVariants}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="rounded mb-6"
                  width={270}
                  height={270}
                />
              </motion.div>

              <motion.div
                className="w-full max-w-xl lg:w-3/4"
                initial="hidden"
                whileInView="visible"
                variants={contentVariants}
              >
                <h3 className="mb-2 font-semibold text-2xl">{project.title}</h3>
                <p className="text-justify text-stone-400 mb-4">
                  {project.description}
                </p>
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-white font-bold text-stone-900 rounded-full px-2 py-1 text-sm mr-2"
                  >
                    {tech}
                  </span>
                ))}

                <div className="pt-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2 bg-gray-800 text-white font-bold rounded-full px-4 py-2 text-sm transition-all duration-300 hover:bg-gray-600 hover:shadow-lg"
                    style={{ width: "fit-content" }}
                  >
                    <FaGithub className="mr-2" />
                    View on Github
                  </a>
                </div>
              </motion.div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Projects;

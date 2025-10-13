import { useState, useEffect } from "react";
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

const ImageModal = ({ src, alt, onClose }) => {
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div className="relative" onClick={(e) => e.stopPropagation()}>
        <button
          onClick={onClose}
          className="absolute top-2 right-2 bg-white text-black text-2xl rounded-full px-2"
        >
          &times;
        </button>
        <img src={src} alt={alt} className="max-w-[90vw] max-h-[90vh] rounded-lg" />
      </div>
    </div>
  );
};

const Projects = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="p-4 md:p-8 lg:p-28">
      <h2 className="my-20 text-center text-4xl">Projects</h2>

      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        navigation={false}
        autoplay={{
          delay: 15000,
          disableOnInteraction: false,
        }}
        loop
        modules={[Navigation, Autoplay]}
      >
        {PROJECTS.map((project, index) => (
          <SwiperSlide key={index}>
            <div className="mb-8 flex flex-col lg:flex-row lg:justify-center lg:items-start">
              {/* Image Section */}
              <motion.div
                className="w-full flex justify-center lg:w-1/4 lg:justify-start"
                initial="hidden"
                whileInView="visible"
                variants={imageVariants}
              >
                <img
                  src={project.image}
                  alt={project.alt}
                  className="rounded mb-6 lg:pr-7 cursor-pointer w-full max-w-[400px] h-[280px] object-contain"
                  onClick={() => setSelectedImage(project.image)}
                />
              </motion.div>

              {/* Content Section */}
              <motion.div
                className="w-full max-w-2xl mx-auto lg:mx-0 lg:w-3/4"
                initial="hidden"
                whileInView="visible"
                variants={contentVariants}
              >
                <h3 className="text-center mb-4 font-semibold text-2xl lg:text-left">
                  {project.title}
                </h3>
                <p className="text-justify text-stone-400 mb-6 px-4 md:px-0">
                  {project.description}
                </p>
                
                {/* Technologies */}
                <div className="flex flex-wrap justify-center lg:justify-start mb-6 px-4 md:px-0">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-white font-bold text-stone-900 rounded-full px-3 py-1 text-sm mr-2 mb-2"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* GitHub Button */}
                <div className="flex justify-center lg:justify-start px-4 md:px-0">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2 bg-gray-800 text-white font-bold rounded-full px-6 py-3 text-sm transition-all duration-300 hover:bg-gray-600 hover:shadow-lg"
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

      {selectedImage && (
        <ImageModal
          src={selectedImage}
          alt="Project Image"
          onClose={() => setSelectedImage(null)}
        />
      )}
    </div>
  );
};

export default Projects;
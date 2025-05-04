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
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="p-1 lg:p-28">
      <h2 className="my-20 text-center text-4xl">Projects</h2>

      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        navigation={!isMobile} // Navigasi hanya muncul di layar besar
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
                className="w-full text-center items-center lg:w-1/4"
                initial="hidden"
                whileInView="visible"
                variants={imageVariants}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="rounded pr-7 mb-6 mx-auto cursor-pointer w-[400px] h-[280px] object-contain"
                  onClick={() => setSelectedImage(project.image)}
                />
              </motion.div>

              <motion.div
                className="w-full max-w-xl lg:w-3/4"
                initial="hidden"
                whileInView="visible"
                variants={contentVariants}
              >
                <h3 className="text-center mb-2 font-semibold text-2xl lg:text-left">
                  {project.title}
                </h3>
                <p className="text-justify text-stone-400 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap justify-center lg:justify-start">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-white font-bold text-stone-900 rounded-full px-2 py-1 text-sm mr-2 mb-2"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="pt-4 flex justify-center lg:flex-none lg:justify-start">
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

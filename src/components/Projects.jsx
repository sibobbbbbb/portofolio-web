import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

import { PROJECTS } from "../constants";

const Projects = () => {
  return (
    <div className="p-28">
      <h2 className="my-20 text-center text-4xl ">Projects</h2>
      {/* Swiper */}
      <Swiper
        spaceBetween={30}  
        slidesPerView={1}   
        navigation          
        autoplay={{         
          delay: 3000,      
          disableOnInteraction: false, 
        }}
        loop               
        modules={[Navigation, Autoplay]} 
      >
        {PROJECTS.map((project, index) => (
          <SwiperSlide key={index}>
            <div className="mb-8 flex flex-wrap lg:justify-center">
              <div className="w-full lg:w-1/4">
                <img
                  src={project.image}
                  alt={project.title}
                  className="rounded mb-6"
                  width={250}
                  height={250}
                />
              </div>
              <div className="w-full max-w-xl lg:w-3/4">
                <h3 className="mb-2 font-semibold text-2xl">{project.title}</h3>
                <p className="text-stone-400 mb-4">{project.description}</p>
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-stone-300 text-stone-900 rounded-full px-2 py-1 text-sm mr-2 hover:bg-stone-400 hover:text-stone-100"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Projects;

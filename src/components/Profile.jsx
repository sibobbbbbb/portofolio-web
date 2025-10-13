import profilePict from "../assets/profile.jpg";
import { HERO_CONTENT } from "../constants";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {
    opacity: 0,
    x: -100,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.5,
    },
  },
};

const childVariants = {
  hidden: {
    opacity: 0,
    x: -100,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const Profile = () => {
  return (
    <div className="pb-4 lg:mb-36">
      <div className="flex flex-wrap lg:flex-row-reverse">
        <div className="w-full lg:w-1/2">
          <div className="flex justify-center lg:p-8 ">
            <motion.img
              src={profilePict}
              alt="Foto profil Farhan Raditya Aji dengan latar belakang pantai saat senja."
              className="border border-stone-900 rounded-3xl w-52 lg:w-96"
              width={370}
              height={370}
              loading="eager"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.5 }}
            />
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:pl-10 lg:pt-12">
          <motion.div 
            className="flex flex-col items-center lg:items-start mt-10"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.h2 variants={childVariants} className="pb-2 text-3xl tracking-tighter lg:text:8xl">
              Hi, I'm
            </motion.h2>
            <motion.h1 
              variants={childVariants} 
              className="bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-2xl tracking-tight text-transparent lg:text-3xl"
            >
              Farhan Raditya Aji
            </motion.h1>

            <motion.h2
              variants={childVariants}
              className="mt-2 text-xl tracking-tight lg:text-2xl"
            >
              Web & Mobile Developer
            </motion.h2>
            
            <div className="sr-only">
              <h2>Farhan Raditya Aji - Mahasiswa Teknik Informatika ITB</h2>
              <h3>Web Developer | Mobile Developer | Software Engineer</h3>
              <p>Portfolio resmi Farhan Raditya Aji, mahasiswa aktif Teknik Informatika Institut Teknologi Bandung (ITB) dengan keahlian dalam web development, mobile development, dan software engineering.</p>
            </div>
            
            <motion.p 
              variants={childVariants} 
              className="my-2 max-w-lg py-6 text-lg leading-relaxed tracking-tighter text-justify lg:text-xl"
            >
              {HERO_CONTENT}
            </motion.p>
            
            <motion.a
              variants={childVariants}
              href="/CV-Farhan-Raditya-Aji.pdf"
              download
              rel="noopener noreferrer"
              target="_blank"
              className="bg-white rounded-full p-4 text-sm text-stone-800 mb-10 hover:bg-slate-600 hover:text-white"
              aria-label="Download CV Farhan Raditya Aji"
            >
              <b>Download Resume</b>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
import React from "react";

function Heading() {
  return (
    <div className="py-16 sm:py-20 w-full relative flex flex-col md:flex-row items-center justify-between gap-10">
      <div className="w-full md:w-2/3 text-center md:text-left">
        <h1 className="text-4xl sm:text-6xl inline-block w-auto mb-8 relative">
          About Me
          <img
            className="sqD w-12 -top-6 -right-8 absolute"
            src="/static/doodles/skills/fillStar.svg"
          />
        </h1>
        <p className="text-fun-gray text-xl sm:text-2xl mb-6">
          I am a recent Informatics Engineering graduate from Telkom University Surabaya with a strong interest in application development, particularly as a Front-End Developer. Furthermore, I am also interested in mobile development, quality assurance (QA), and machine learning, which I pursued through my final project.
        </p>
        <p className="text-fun-gray text-xl sm:text-2xl mb-6">
          During my internship at LLDIKTI 7, I contributed to web development using JavaScript and Laravel, solving design challenges, collaborating within a team to improve functionality, and proposing innovative solutions. I also have experience in website testing, identifying issues, and compiling test reports to support further development.
        </p>
        <p className="text-fun-gray text-xl sm:text-2xl">
          In addition to my technical experience, I am also active in campus organizations, particularly in event management, which honed my leadership, organizational, and teamwork skills. With a strong learning spirit, rapid adaptability, and a commitment to continuous development, I am ready to take on new challenges and contribute professionally.
        </p>
      </div>
      <div className="w-full md:w-1/3 flex justify-center">
        <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-2xl overflow-hidden border-4 border-fun-pink relative shadow-xl transform rotate-3 hover:rotate-0 transition-all duration-300">
          <img src="/static/projects/profil.jpg" alt="Profile" className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  );
}

export default Heading;

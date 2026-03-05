import React from "react";
import { Link as ScrollLink } from "react-scroll";
import SectionTitle from "../global/SectionTitle";

// Data pengalaman kerja - sesuaikan dengan pengalaman Anda
const experiences = [
  {
    position: "IT Developer",
    company: "PT Brantas Abipraya (Persero)",
    period: "2025 Oct - Present",
    achievements: [
      "Responsible for building the company's internal website from scratch, starting with understanding user needs and designing system flows, and then developing solutions aligned with business processes.",
      "Comprehensive system design, including ERDs, Use Case Diagrams, process flows, and technical documentation, which served as the basis for application development.",
      "Designed mockups and prototypes in Figma with a focus on UI/UX, ensuring a consistent appearance, ease of use, and a representative representation of user operational needs.",
      "Developed the website using Laravel and Livewire, integrated with a PostgreSQL database through DBeaver, and began exploring the company's microservices environment through AWS CodeCommit and AWS Lambda.",
    ],
    tags: [
      "Laravel",
      "Figma",
      "Livewire",
      "Tailwind CSS",
      "AWS Codecommit",
      "Git",
    ],
  },
  {
    position: "Junior Frontend Developer",
    company: "LLDIKTI Wilayah VII Jawa Timur (Kemendikbudristek)",
    period: "2024 Feb - 2024 Jun",
    achievements: [
      "Successfully built two company websites using Laravel, with optimal implementation in terms of performance, security, and functionality after deployment.",
      "Successfully designed and implemented over 15 website page designs in Figma, ensuring the websites met UI/UX standards and were responsive.",
      "Conducted thorough website testing, identified issues, and compiled detailed test reports.",
      "Successfully presented the websites to stakeholders and explained their features and functionality professionally.",
    ],
    tags: ["Laravel", "Figma", "UI/UX", "Testing"],
  },
];

function Experience() {
  return (
    <div className="flex flex-col text-left max-w-md md:max-w-full w-full m-auto">
      <SectionTitle title="My Work Experience" centered />

      <div className="max-w-5xl m-auto w-full">
        <div className="relative">
          {/* Timeline line - hanya tampil di desktop */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-[1px] bg-gradient-to-b from-transparent via-white/20 to-transparent h-full"></div>

          {experiences.map((item, index) => {
            const isEven = index % 2 === 0;

            return (
              <div key={index} className="relative mb-12 md:mb-16">
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-fun-pink shadow-[0_0_15px_rgba(0,199,255,0.8)] border-4 border-bg z-10"></div>

                {/* Content card */}
                <div
                  className={`md:w-[calc(50%-2rem)] ${isEven ? "md:ml-0 md:mr-auto md:pr-12" : "md:ml-auto md:mr-0 md:pl-12"}`}
                >
                  <div className="relative bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-2xl shadow-2xl hover:border-fun-pink/50 transition-all duration-500 group">
                    {/* Glow effect on hover */}
                    <div className="absolute inset-0 bg-fun-pink/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none" />

                    {/* Period badge */}
                    <div className="inline-block bg-white/10 backdrop-blur-sm border border-white/10 text-fun-pink px-4 py-1.5 rounded-full text-xs font-bold mb-4 shadow-sm">
                      {item.period}
                    </div>

                    {/* Position & Company */}
                    <h3 className="text-2xl font-black text-white mb-1 tracking-tight">
                      {item.position}
                    </h3>
                    <p className="text-fun-pink font-bold mb-4 flex items-center">
                      <span className="w-4 h-[2px] bg-fun-pink mr-2 inline-block"></span>
                      {item.company}
                    </p>

                    {/* Description */}
                    <div className="text-fun-gray-light text-sm mb-6 leading-relaxed font-medium">
                      <ul className="space-y-3">
                        {item.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="flex items-start">
                            <span className="text-fun-pink mr-3 mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-fun-pink shadow-[0_0_8px_rgba(0,199,255,1)]"></span>
                            <span className="opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                              {achievement}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 pt-2 border-t border-white/5">
                      {item.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="bg-white/5 backdrop-blur-sm border border-white/10 text-white/70 px-3 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider group-hover:text-fun-pink group-hover:border-fun-pink/30 transition-all duration-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Experience;

import React from "react";
import { Link as ScrollLink } from "react-scroll";

// Uncomment jika SectionTitle belum diimport
// import SectionTitle from "../global/SectionTitle";

// SectionTitle Component (jika belum ada, uncomment ini)
const SectionTitle = ({ title }) => (
  <h2 className="text-3xl font-bold mb-8 text-center">{title}</h2>
);

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
    tags: ["Laravel", "Figma", "Livewire", "Tailwind CSS", "AWS Codecommit", "Git",]
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
    tags: ["Laravel", "Figma", "UI/UX", "Testing"]
  }
];

function Experience() {
  return (
    <div className="flex flex-col text-left max-w-md md:max-w-full w-full m-auto">
      <SectionTitle title="My Work Experience" />

      <div className="max-w-5xl m-auto w-full">
        <div className="relative">
          {/* Timeline line - hanya tampil di desktop */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-fun-pink-light h-full"></div>

          {experiences.map((item, index) => {
            const isEven = index % 2 === 0;

            return (
              <div key={index} className="relative mb-12 md:mb-16">
                {/* Decorative elements */}
                {index === 0 && (
                  <>
                    <img
                      className="sqD absolute top-[-40px] left-[-20px] w-16 z-0 opacity-50"
                      style={{ animationDelay: "0.1s" }}
                      src="/static/doodles/testimonials/yay.svg"
                      alt=""
                    />
                    {/* Doodle di celah kanan untuk card pertama (kiri) */}
                    <img
                      className="sqD hidden md:block absolute top-[20px] right-[-30px] w-48 z-0 opacity-40"
                      style={{ animationDelay: "0.3s" }}
                      src="/static/doodles/hero/coder.svg"
                      alt=""
                    />
                  </>
                )}
                {index === 1 && (
                  /* Doodle di celah kiri untuk card kedua (kanan) */
                  <img
                    className="sqD hidden md:block absolute top-[30px] left-[-40px] w-24   z-0 opacity-40"
                    style={{ animationDelay: "0.5s" }}
                    src="/static/doodles/skills/fillStar.svg"
                    alt=""
                  />
                )}
                {index === experiences.length - 1 && (
                  <img
                    className="sqD absolute bottom-[-20px] right-[-10px] w-12 z-0 opacity-50"
                    style={{ animationDelay: "0.7s" }}
                    src="/static/doodles/testimonials/squiggle2.svg"
                    alt=""
                  />
                )}
                {/* Timeline dot */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-fun-pink rounded-full border-4 border-fun-pink-darker z-10"></div>

                {/* Content card */}
                <div className={`md:w-[calc(50%-2rem)] ${isEven ? 'md:ml-0 md:mr-auto md:pr-12' : 'md:ml-auto md:mr-0 md:pl-12'}`}>
                  <div className="relative bg-fun-pink-darker border border-fun-pink-light p-6 rounded-lg">
                    {/* Period badge */}
                    <div className="inline-block bg-fun-pink text-white px-3 py-1 rounded-full text-xs font-semibold mb-3">
                      {item.period}
                    </div>

                    {/* Position & Company */}
                    <h3 className="text-xl font-bold text-white mb-1">
                      {item.position}
                    </h3>
                    <p className="text-fun-pink font-semibold mb-3">
                      {item.company}
                    </p>

                    {/* Description */}
                    <div className="text-fun-gray text-sm mb-4 leading-relaxed">
                      <ul className="space-y-2">
                        {item.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="flex items-start">
                            <span className="text-fun-pink mr-2 mt-1 flex-shrink-0">•</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="bg-fun-pink bg-opacity-20 text-fun-pink px-3 py-1 rounded text-xs font-medium"
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
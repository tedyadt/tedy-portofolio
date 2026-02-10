import ProfileCard from "../global/ProfileCard/ProfileCard";

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
        <p className="text-fun-gray text-xs sm:text-2xl mb-6 ">
          I am an Informatics graduate from Telkom University Surabaya with
          hands-on experience in developing web applications end-to-end.
          Throughout my internships at LLDIKTI Wilayah VII and PT Brantas
          Abipraya, I worked on building internal systems using Laravel,
          Livewire, React, and Flask, including designing UI/UX, creating system
          flows, optimizing performance, and implementing features used by
          multiple departments.
        </p>

        <p className="text-fun-gray text-xs sm:text-2xl mb-6">
          I have developed 5+ web-based projects, including an internal portal
          module with an approval workflow, a sentiment analysis system with an
          80% accurate machine learning model, and a higher-education management
          platform serving 10+ institutions. My responsibilities included system
          design (ERD, use case, flow process), UI prototyping, development,
          testing, and collaboration using version control workflows.
        </p>

        <p className="text-fun-gray text-xs sm:text-2xl">
          Beyond technical skills, I have strong capabilities in communication,
          teamwork, and problem solving—sharpened through academic projects and
          organizational experiences. With adaptability, a strong learning
          drive, and a solid foundation in both frontend and backend
          development, I am ready to contribute effectively to professional
          development teams.
        </p>
      </div>
      <div className="w-full md:w-1/3 flex justify-center scale-[0.9]">
        <ProfileCard
          name="Tedy Aditiya A"
          title="Web Developer"
          handle="tedyadt"
          status="Online"
          contactText="Contact Me"
          avatarUrl="/static/projects/profil.jpg"
          showUserInfo={false}
          enableTilt={true}
          enableMobileTilt={false}
          behindGlowEnabled={false}
          behindGlowColor="rgba(125, 190, 255, 0.6) "
          innerGradient="linear-gradient(145deg,#60496e8c 0%,#71C4FF44 100%)"
        />
      </div>
    </div>
  );
}

export default Heading;

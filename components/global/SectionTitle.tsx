import React from "react";

type SectionTitleProps = {
  title: string;
  centered?: boolean;
};

function SectionTitle({ title, centered = false }: SectionTitleProps) {
  return (
    <div className="overflow-x-hidden w-full pt-5">
      <div
        className={`relative mb-12 ${centered ? "text-center" : "text-left md:text-left"}`}
      >
        <h2
          className={`text-3xl md:text-4xl font-black text-white tracking-tighter ${centered ? "mx-auto" : "max-w-sm md:max-w-max mx-auto md:mx-0"}`}
        >
          {title}
        </h2>
        <div
          className={`w-16 h-1.5 bg-fun-pink mt-3 rounded-full shadow-[0_0_15px_rgba(0,199,255,0.7)] ${centered ? "mx-auto" : "mx-auto md:mx-0"}`}
        ></div>
      </div>
    </div>
  );
}

export default SectionTitle;

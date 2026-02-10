import Link from "next/link";
import React from "react";
import { routes } from "@/data/global";

function Navbar({ currentPage }) {
  return (
    <nav className="flex items-center justify-between bg-white/5 backdrop-blur-md border border-white/10 px-6 py-3 rounded-full shadow-2xl max-w-4xl mx-auto">
      <li className="list-none font-bold text-lg cursor-pointer">
        <Link href="/">
          <span className="font-black text-xl flex items-center">
            {"Portofolio".split("").map((letter, index) => {
              return (
                <span key={index} className="hover:text-fun-pink hover:-mt-2 transition-all duration-500 hover:duration-100 click:goodbyeLetterAnim">
                  {letter}
                </span>
              );
            })}
          </span>
        </Link>
      </li>
      <ul className="flex items-center space-x-10">
        {routes.map((item, index) => {
          return (
            <li
              key={index}
              className={`list-none text-white font-medium ${
                currentPage === item.title
                  ? "opacity-100"
                  : "opacity-60 hover:opacity-100 transition-opacity"
              }`}
            >
              <Link href={item.path}>{item.title}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Navbar;

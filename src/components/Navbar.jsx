import React from "react";
import { Link } from "react-router-dom";
import cv from "../CV/Noah WU_Resume.pdf";
import { motion } from "framer-motion";

const navbarItems = (
  <React.Fragment>
    <li className="text-warning">
      <Link to={"#about"}>About Me</Link>
    </li>
    <li className="text-warning">
      <Link to={"#skills"}>Skills</Link>
    </li>
    <li className="text-warning">
      <Link to={"#experience"}>Experience</Link>
    </li>
    {/* <li className="text-warning">
      <Link to={"#education"}>Education</Link>
    </li> */}
    <li className="text-warning">
      <Link to={"#project"}>Projects</Link>
    </li>
  </React.Fragment>
);

function NavbarItem() {
  return (
    <div className="navbar">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52"
          >
            {navbarItems}
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl text-info" href="/my-self-react/">
          Noah WU
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navbarItems}</ul>
      </div>
      <div className="navbar-end">
        <a
          href={cv}
          download="Noah WU_Resume"
          target="_blank"
          rel="noreferrer"
        >
          <button className="btn bg-gray-900 text-accent border-transparent hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300">
            Download Resume
          </button>
        </a>
      </div>
    </div>
  );
}

export default function Navbar() {
  return (
    <div className="navbar">
      <NavbarItem />
    </div>
  );
}

export function ScrollDownNavBar() {
  return (
    <motion.div
      className="navbar fixed top-0 z-10"
      style={{
        backgroundImage: "linear-gradient(to top, rgba(0, 0, 0, 0), rgba(45, 45, 60, 1))",
      }}
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        ease: [0, 0.71, 0.2, 1.01],
      }}
    >
      <NavbarItem />
    </motion.div>
  );
}
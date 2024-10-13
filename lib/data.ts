import React from "react";
import { FaLaptopCode } from "react-icons/fa";
import { FaUniversity } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/Screenshot 2024-09-06 203740.png";
import rmtdevImg from "@/public/Screenshot 2024-09-06 180533.png";
import wordanalyticsImg from "@/public/image.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Journey",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Salwan Public School",
    location: "Gurugram, India",
    description:
      "After passing my school exams, I scored 95.6 percentile in the JEE exam, which led to my admission into college to pursue engineering.",
    icon: React.createElement(LuGraduationCap),
    date: "2021",
  },
  {
    title: "Maharaja Agrasen Institue of Technology",
    location: "Delhi, India",
    description:
    "I’m currently studying BTech in Computer Science and Engineering. My coursework and projects are developing my skills in software development and preparing me for a career as an SDE.",
    icon: React.createElement(FaUniversity),
    date: "2021",
  },
  {
    title: "SDE Intern",
    location: "",
    description:
      "Developed a 6-service microservice app handling 500 API requests/sec. Implemented Redis caching to cut data load time by 90% and API gateways to reduce hits by 50%. Managed 8 databases and improved team workflows. Built a secure login service, reducing unauthorized access by 90%.",
    icon: React.createElement(FaLaptopCode),
    date: "Septempber 2023 - December 2023",
  },
] as const;

export const projectsData = [
  {
    title: "Plinko Rush",
    description:
      "A game where players drop a disc down a peg-filled board, and the disc bounces randomly before landing in a slot with varying prizes or points.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Genesis",
    description:
      "The web application provides various AI tools on a single platform, including image and video generation, code generation, and AI conversations.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },
  {
    title: "Tesla Clone",
    description:
      "Tesla Clone is a web page designed to mirror the official Tesla site, showcasing my proficiency in frontend development",
    tags: ["React", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "Express",
  "PostgreSQL",
  "Framer Motion",
  "Microservices",
  "Docker",
  "Java",
] as const;

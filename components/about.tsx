"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
      After finishing school in <span className="font-medium">2021</span>, I pursued my passion for computer science by enrolling in a BTech program. I quickly discovered a love for coding, especially the problem-solving aspect. I <span className="underline">enjoy</span> the challenge of finding solutions and building efficient systems.

        Specializing in <span className="font-medium">Full-stack development</span>, I use Next.js and React.js for the frontend, Node.js with Express.js for the backend, and MongoDB/PostgreSQL for databases. 
      </p>
      {/* <p>
        During an internship, I worked on microservice architecture, implemented advanced caching with Redis, deployed API gateways, and managed multiple databases.

Now in my final year of college, I'm eager to apply my skills and continue learning new technologies in a <span className="font-medium">full-time position</span> or internship.
      </p> */}

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing video games and spending time with my dog. I also enjoy <span className="font-medium">learning new things</span>. I am currently learning about <span className="font-medium">rate-limiting, pub-subs,   and Redis queues</span>. I'm also interested in space.
      </p>
    </motion.section>
  );
}

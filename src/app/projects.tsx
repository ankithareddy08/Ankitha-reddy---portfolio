"use client";

import { ProjectCard } from "@/components";
import { Typography } from "@material-tailwind/react";
import { getImagePrefix } from "../../utils/utils";

const PROJECTS = [
  
  {
    img: `/Ankitha-reddy---portfolio/image/cyberspace-project.png`, // IMPORTANT: Add an image for your project to the public/image folder
    title: "Cyberspace (Metaverse App)",
    desc: "A UI/UX design concept for an immersive metaverse platform. The focus was on creating an intuitive, engaging, and accessible user journey from onboarding to social interaction. Tools: Figma, Adobe Illustrator.",
  },
  {
    img: `/Ankitha-reddy---portfolio/image/final-dawn-project.png`, // IMPORTANT: Add an image for your project to the public/image folder
    title: "Operation Final Dawn (Game)",
    desc: "UI/UX design for a tactical action game's interface and HUD. The solution focused on a visually compelling design that presents critical information clearly without breaking player immersion. Tools: Figma, Adobe Photoshop.",
  },
];

export function Projects() {
  return (
    <section className="py-28 px-8">
      <div className="container mx-auto mb-20 text-center">
        <Typography variant="h2" color="blue-gray" className="mb-4">
          My Projects
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full px-4 font-normal !text-gray-500 lg:w-6/12"
        >
          My passion lies in bridging the gap between design and development. Whether it's an immersive metaverse app or a fast-paced game interface, my goal is to create clean, user-centric designs that are ready to be brought to life.
        </Typography>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-x-10 gap-y-20 md:grid-cols-2 xl:grid-cols-4">
        {PROJECTS.map((props, idx) => (
          <ProjectCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}

export default Projects;

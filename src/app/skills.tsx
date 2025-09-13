"use client";

import { Typography } from "@material-tailwind/react";
import {
  RectangleGroupIcon,
  FingerPrintIcon,
  SwatchIcon,
  HashtagIcon,
  EyeIcon,
  DocumentTextIcon,
  PuzzlePieceIcon,
} from "@heroicons/react/24/solid";
import { SkillCard } from "@/components";

const SKILLS = [
  {
    icon: SwatchIcon,
    title: "UI/UX Design",
    children:
      "My design skillset includes User Research, Wireframing, Prototyping, Visual Design, and creating intuitive User Flows.",
  },
  {
    icon: RectangleGroupIcon,
    title: "Frontend Development",
    children:
      "I am currently learning and building my skills in modern web technologies, including HTML5, CSS3, and JavaScript.",
  },
  {
    icon: PuzzlePieceIcon,
    title: "Design Tools",
    children:
      "I am highly proficient with a range of professional design software, including Figma (Advanced), Adobe Photoshop, Adobe Illustrator, and Adobe XD.",
  },

];

export function Skills() {
  return (
    <section className="px-8">
      <div className="container mx-auto mb-20 text-center">
        <Typography color="blue-gray" className="mb-2 font-bold uppercase">
          my skills
        </Typography>
        <Typography variant="h1" color="blue-gray" className="mb-4">
          What I do
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full !text-gray-500 lg:w-10/12"
        >
        I don't just design interfaces; I architect digital worlds. As a Product Designer, my passion is crafting immersive and user-centric journeys, from the vast possibilities of the metaverse to the fast-paced action of gaming.
        </Typography>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
        {SKILLS.map((props, idx) => (
          <SkillCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}

export default Skills;

"use client";

import { Typography, Button } from "@material-tailwind/react";
import {
  ChartBarIcon,
  PuzzlePieceIcon,
  CursorArrowRaysIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/solid";
import { ResumeItem } from "@/components";

// This list will appear on the right side
const RESUME_ITEMS = [
  {
    icon: ChartBarIcon,
    children: "B.Tech in Computer Science (Final Year)",
  },
  {
    icon: PuzzlePieceIcon,
    children: "Proficient in UI/UX Design & Prototyping",
  },
  {
    icon: CursorArrowRaysIcon,
    children: "Frontend Development Skills (HTML, CSS, JS)",
  },
];

export function Resume() {
  return (
    <section className="px-8 py-24">
      <div className="container mx-auto grid w-full grid-cols-1 items-center gap-16 lg:grid-cols-2">
        {/* This is the Left Column */}
        <div className="col-span-1">
          <Typography variant="h2" color="blue-gray">
            My Resume
          </Typography>
          <Typography className="mb-4 mt-3 w-9/12 font-normal !text-gray-500">
            A creative UI/UX Designer and aspiring Frontend Developer, passionate about bridging the gap between beautiful design and functional code.
          </Typography>
          {/* This link now points to your resume PDF */}
          <a href="/Ankitha-Reddy-Resume.pdf" download>
            <Button
              variant="text"
              color="gray"
              className="flex items-center gap-2"
            >
              view more
              <ArrowRightIcon
                strokeWidth={3}
                className="h-3.5 w-3.5 text-gray-900"
              />
            </Button>
          </a>
        </div>
        
        {/* This is the Right Column */}
        <div className="col-span-1 grid gap-y-6 lg:ml-auto pr-0 lg:pr-12 xl:pr-32">
          {RESUME_ITEMS.map((props, idx) => (
            <ResumeItem key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Resume;

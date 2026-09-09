import React from "react";
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiRedux,
  SiTailwindcss,
  SiSass,
  SiMui,
  SiNodedotjs,
  SiPython,
} from "react-icons/si";

// Mirrors the Technologies section of the CV — nothing here that the CV
// doesn't back up.
const STACK = [
  { icon: <SiJavascript />, label: "JavaScript" },
  { icon: <SiTypescript />, label: "TypeScript" },
  { icon: <SiReact />, label: "React.js" },
  { icon: <SiNextdotjs />, label: "Next.js" },
  { icon: <SiRedux />, label: "Redux" },
  { icon: <SiTailwindcss />, label: "Tailwind CSS" },
  { icon: <SiMui />, label: "MUI" },
  { icon: <SiSass />, label: "Sass" },
  { icon: <SiNodedotjs />, label: "Node.js" },
  { icon: <SiPython />, label: "Python" },
];

function Techstack() {
  return (
    <ul className="rd-tiles">
      {STACK.map(({ icon, label }) => (
        <li className="rd-tile" key={label}>
          {icon}
          <span>{label}</span>
        </li>
      ))}
    </ul>
  );
}

export default Techstack;

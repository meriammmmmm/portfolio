import React from "react";
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiRedux,
  SiTailwindcss,
  SiNodedotjs,
  SiNestjs,
  SiPostgresql,
  SiPython,
} from "react-icons/si";

// Mirrors the Technologies section of the CV — nothing here that the CV
// doesn't back up.
const STACK = [
  { icon: <SiTypescript />, label: "TypeScript" },
  { icon: <SiJavascript />, label: "JavaScript" },
  { icon: <SiReact />, label: "React.js" },
  { icon: <SiNextdotjs />, label: "Next.js" },
  { icon: <SiRedux />, label: "Redux" },
  { icon: <SiTailwindcss />, label: "Tailwind CSS" },
  { icon: <SiNodedotjs />, label: "Node.js" },
  { icon: <SiNestjs />, label: "NestJS" },
  { icon: <SiPostgresql />, label: "PostgreSQL" },
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

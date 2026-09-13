import React from "react";
import {
  SiGit,
  SiGithub,
  SiGithubactions,
  SiDocker,
  SiStrapi,
  SiSocketdotio,
  SiTurborepo,
  SiReact,
} from "react-icons/si";

// Tooling + backend/data entries from the CV, plus React Native (listed under
// Frontend there).
const TOOLS = [
  { icon: <SiGit />, label: "Git" },
  { icon: <SiGithub />, label: "GitHub" },
  { icon: <SiGithubactions />, label: "CI/CD" },
  { icon: <SiDocker />, label: "Docker" },
  { icon: <SiTurborepo />, label: "Monorepo tooling" },
  { icon: <SiStrapi />, label: "Strapi" },
  { icon: <SiSocketdotio />, label: "WebSockets" },
  { icon: <SiReact />, label: "React Native" },
];

function Toolstack() {
  return (
    <ul className="rd-tiles">
      {TOOLS.map(({ icon, label }) => (
        <li className="rd-tile" key={label}>
          {icon}
          <span>{label}</span>
        </li>
      ))}
    </ul>
  );
}

export default Toolstack;

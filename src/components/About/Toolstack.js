import React from "react";
import {
  SiGit,
  SiGithub,
  SiDocker,
  SiStrapi,
  SiSocketdotio,
  SiReact,
} from "react-icons/si";

// "Backend Tools" from the CV, plus React Native which it lists under Frontend.
const TOOLS = [
  { icon: <SiGit />, label: "Git" },
  { icon: <SiGithub />, label: "GitHub" },
  { icon: <SiDocker />, label: "Docker" },
  { icon: <SiStrapi />, label: "Strapi" },
  { icon: <SiSocketdotio />, label: "WebSocket" },
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

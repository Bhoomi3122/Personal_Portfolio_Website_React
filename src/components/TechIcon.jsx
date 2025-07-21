import {
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPython,
  SiDjango,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiWebrtc,
  SiSocketdotio,
  SiGithub,
  SiRedux,
  SiTypescript,
  SiFirebase,
  SiGooglechrome,
  SiTailwindcss,
  SiOpenai,
  SiVercel
} from "react-icons/si";

import { FaTools, FaCode } from "react-icons/fa";
import { TbBrandCpp, TbBrandVscode } from "react-icons/tb";
import { RiStackshareLine } from "react-icons/ri";
import { MdOutlineStorage } from "react-icons/md";
import { BiCodeBlock } from "react-icons/bi";

const techIcons = {
  "React": <SiReact />,
  "Node.js": <SiNodedotjs />,
  "Express.js": <SiExpress />,
  "MongoDB": <SiMongodb />,
  "Monaco Editor": <BiCodeBlock />, // closest fit
  "Gemini API": <SiOpenai />, // Gemini is like OpenAI
  "Python": <SiPython />,
  "Django": <SiDjango />,
  "HTML": <SiHtml5 />,
  "CSS": <SiCss3 />,
  "JavaScript": <SiJavascript />,
  "WebRTC": <SiWebrtc />,
  "Socket.IO": <SiSocketdotio />,
  "LocalStorage": <MdOutlineStorage />,
  "Vercel": <SiVercel />,
  "Frontend & Backend Development": <RiStackshareLine />,
  "API Integration": <RiStackshareLine />,
  "AI Integration": <SiOpenai />,
  "Task Management Logic": <FaCode />,
  "Form Validation": <FaCode />,
  "Frontend Development": <SiHtml5 />,
  "Web Development": <FaCode />
};

const TechIcon = ({ tech }) => {
  const icon = techIcons[tech] || <FaTools />;

  return (
    <div className="flex flex-col items-center gap-1 text-sm text-[#e2e8f0]">
      <div className="p-3 rounded-full bg-[#1e293b] text-xl">
        {icon}
      </div>
      <span className="text-xs text-[#dbe5e9]">{tech}</span>
    </div>
  );
};

export default TechIcon;

import type { ElementType } from "react";
import { PiGithubLogoDuotone, PiLinkedinLogoDuotone, PiReadCvLogoDuotone } from "react-icons/pi";

export type NavLink = {
   name: string;
   href: string;
   icon?: ElementType;
};

export const navLinks: NavLink[] = [
   { name: "Resume", href: "/resume", icon: PiReadCvLogoDuotone },
   { name: "LinkedIn", href: "https://www.linkedin.com/in/anthonyccole/", icon: PiLinkedinLogoDuotone },
   { name: "GitHub", href: "https://github.com/anthonycole", icon: PiGithubLogoDuotone },
];
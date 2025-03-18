import { SiNotion, SiGithub } from "react-icons/si";
import { TbHomeLink } from "react-icons/tb";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

interface Props {
  github: string;
  notion: string;
  demo?: string;
}

const SocialMediaIcons = ({ github, notion, demo }: Props) => {
  return (
    <div className="flex gap-6">
      {demo && (
        <a
          href={demo}
          target="_blank"
          rel="noopener noreferrer"
          title="View project demo"
          aria-label="View project demo"
        >
          <TooltipProvider delayDuration={100}>
            <Tooltip>
              <TooltipTrigger
                className="w-[56px] h-[56px] rounded-full border border-brown/70 dark:bg-white/5 flex justify-center items-center hover:scale-105 focus:ring-2 focus:ring-cyan-500 transition"
                aria-labelledby="demo-tooltip"
              >
                <TbHomeLink className="text-3xl" />
                <span id="demo-tooltip" className="sr-only">
                  View project demo
                </span>
              </TooltipTrigger>
              <TooltipContent className=" p-1 text-primary dark:text-paper bg-transparent ">
                Demo
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </a>
      )}

      <a
        href={github}
        target="_blank"
        rel="noopener noreferrer"
        title="Visit GitHub profile"
        aria-label="Visit GitHub profile"
      >
        <TooltipProvider delayDuration={100}>
          <Tooltip>
            <TooltipTrigger
              className="w-[56px] h-[56px] rounded-full border border-brown/70 dark:bg-white/5 flex justify-center items-center hover:scale-105 focus:ring-2 focus:ring-cyan-500 transition"
              aria-labelledby="github-tooltip"
            >
              <SiGithub className="text-3xl" />
              <span id="github-tooltip" className="sr-only">
                Visit GitHub profile
              </span>
            </TooltipTrigger>
            <TooltipContent className=" p-1 text-primary dark:text-paper bg-transparent ">
              Github
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </a>
      <a
        href={notion}
        target="_blank"
        rel="noopener noreferrer"
        title="Open Notion workspace"
        aria-label="Open Notion workspace"
      >
        <TooltipProvider delayDuration={100}>
          <Tooltip>
            <TooltipTrigger
              className="w-[56px] h-[56px] rounded-full border border-brown/70 dark:bg-white/5 flex justify-center items-center hover:scale-105 focus:ring-2 focus:ring-cyan-500 transition"
              aria-labelledby="notion-tooltip"
            >
              <SiNotion className="text-3xl" />
              <span id="notion-tooltip" className="sr-only">
                Open Notion workspace
              </span>
            </TooltipTrigger>
            <TooltipContent className=" p-1 text-primary dark:text-paper bg-transparent ">
              Notion
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </a>
    </div>
  );
};

export default SocialMediaIcons;

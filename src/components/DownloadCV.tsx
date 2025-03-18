import { Download } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";

function DownloadCV() {
  return (
    <a
      href="/MerveBaek_resume.pdf"
      download="MerveBaek_resume.pdf"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Download Merve Baek's CV"
      className="inline-block"
    >
      <Button
        variant="ghost"
        className="p-8 w-50 rounded-full bg-cyan-600  text-paper transition-transform duration-300 focus:outline-none font-semibold text-lg cursor-pointer hover:animate-bounce"
      >
        Download CV <Download className="size-6" />
      </Button>
    </a>
  );
}

export default DownloadCV;

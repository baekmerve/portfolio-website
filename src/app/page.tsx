"use client";

import Navbar from "@/components/Navbar/Navbar";
import Landing from "@/components/views/Landing";
import { SelectedPage } from "@/lib/types/types";
import { useState } from "react";

export default function Home() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>("hero");
  return (
    <>
      <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
      <Landing setSelectedPage={setSelectedPage} />
    </>
  );
}

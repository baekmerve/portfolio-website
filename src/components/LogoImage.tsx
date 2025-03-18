"use client";
import { useTheme } from "next-themes";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const LogoImage = () => {
  //{theme} might not return the correct theme immediately due to hydration mismatches in Next.js
  const { resolvedTheme } = useTheme(); //Uses resolvedTheme to prevent hydration issues.
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch by ensuring the component is mounted
  useEffect(() => {
    setMounted(true);
  }, []);

  // Show placeholder (or nothing) until the component is mounted
  if (!mounted) {
    return <div className="w-[150px] h-[100px] bg-transparent" />;
  }

  return (
    <div className="cursor-pointer w-[150px]">
      <Image
        src={`/images/${
          resolvedTheme === "dark" ? "logodark" : "logo"
        }.png`}
        width={100}
        height={100}
        alt="logo"
        className="object-cover w-full h-full"
      />
    </div>
  );
};

export default LogoImage;

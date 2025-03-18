import React from "react";
import { TypeAnimation } from "react-type-animation";
interface Props {
  text: string;
  otherStyles?: string;
}

const TextAnimation = ({ text, otherStyles }: Props) => {
  return (
    <p
      className={`${otherStyles} text-4xl md:text-5xl font-caveat font-bold text-center lg:text-start`}
    >
      <TypeAnimation
        sequence={[text, 3000, ""]}
        repeat={Infinity}
        cursor={true}
        speed={10}
        omitDeletionAnimation={true}
      />
    </p>
  );
};

export default TextAnimation;

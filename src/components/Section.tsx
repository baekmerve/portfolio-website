import { SelectedPage } from "@/lib/types/types";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

interface Props {
  id: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
  children: React.ReactNode;
}

const Section = ({ id, setSelectedPage, children }: Props) => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.5, // When 50% of the section is visible
  });

  useEffect(() => {
    if (inView) setSelectedPage(id);
  }, [inView]);

  return (
    <div ref={ref} id={id} className="section">
      {children}
    </div>
  );
};
export default Section;

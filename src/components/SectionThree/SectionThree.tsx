import gsap from "gsap";
import S from "./SectionThree.module.scss";
import React, { useEffect, useRef } from "react";
import locomotiveScrub from "../../animations/utils/locomotive-scrub";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";
import { ReactComponent as RotatingText } from "../../svgs/rotating-text.svg";

type SectionThreeProps = {
  scroll: any;
};

const SectionThree: React.FC<SectionThreeProps> = ({ scroll }) => {
  let progress: number;
  const ref = useRef<HTMLDivElement>(null);
  const SVGRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const isOnScreen = useIntersectionObserver(ref, 0.125);

  useEffect(() => {
    if (isOnScreen && imageRef.current) {
      gsap.to(imageRef.current, {
        scale: 1,
        duration: 4,
        ease: "expo.out",
        clipPath: "inset(0% 0% 0% 0%)",
      });
    }
  }, [isOnScreen, imageRef.current]);

  useEffect(() => {
    if (scroll) {
      const tl = gsap.timeline({ paused: true });
      tl.to(SVGRef.current, {
        duration: 8,
        rotate: 720,
      });
      locomotiveScrub(scroll, "section-three", progress, tl);
    }
  }, [scroll]);

  return (
    <section data-scroll data-scroll-section data-scroll-id="section-three">
      <div className={S.section}>
        <div className={S.textWrapper}>
          <h2 className={S.title}>Honesty and vulnerability in every verse</h2>
          <p className={S.text}>
            In the world of music, true vulnerability speaks volumes. SZA brings a distinct emotional depth to every
            song and performance she creates. Her unique ability to blend genres while maintaining raw authenticity has
            made her a favorite among critics and fans across the globe.
          </p>
        </div>
        <div ref={ref} className={S.imageWrapper}>
          <div className={S.imageContainer}>
            <img
              alt=""
              ref={imageRef}
              className={S.image}
              src="https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/a2/bc/ad/a2bcad46-b389-4be1-8bac-5a0959b0b8e4/886446548449.jpg/600x600bb.jpg"
            />
          </div>
          <div ref={SVGRef} className={S.svg}>
            <RotatingText width="100%" height="100%" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionThree;

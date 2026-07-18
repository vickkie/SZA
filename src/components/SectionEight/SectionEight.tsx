import gsap from "gsap";
import { LongLine } from "../LongLine";
import React, { useEffect } from "react";
import S from "./SectionEight.module.scss";
import useRefArray from "../../hooks/useRefArray";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";

type SectionEightProps = {
  windowWidth: number;
};

const SectionEight: React.FC<SectionEightProps> = ({ windowWidth }) => {
  const refs = useRefArray<SVGSVGElement>(5);
  const linesVisibility: boolean[] = [
    useIntersectionObserver(refs[0], 1),
    useIntersectionObserver(refs[1], 1),
    useIntersectionObserver(refs[2], 1),
    useIntersectionObserver(refs[3], 1),
    useIntersectionObserver(refs[4], 1),
  ];

  useEffect(() => {
    if (!refs) return;
    refs.forEach((ref, i) => {
      if (linesVisibility[i] && ref.current?.firstChild) {
        const lineElement = ref.current.firstChild as SVGLineElement;
        const length = lineElement.getTotalLength();

        gsap.set(lineElement, {
          strokeDasharray: length,
          strokeDashoffset: windowWidth > 1024 ? -length : length,
        });

        gsap.to(lineElement, {
          delay: windowWidth > 1024 ? 0.5 : 0.2,
          duration: 2.5,
          ease: "expo.out",
          strokeDashoffset: 0,
        });
      }
    });
  }, [linesVisibility, refs, windowWidth]);

  return (
    <section id="section-eight" data-scroll-section>
      <div className={S.section}>
        <div className={S.box}>
          <LongLine ref={refs[0]} className={S.line} windowWidth={windowWidth} />
          <p className={S.title}>Ctrl</p>
          <p className={S.text}>
            Her debut studio album, Ctrl, arrived in 2017 and redefined alternative R&B. With singles like Love Galore
            and The Weekend, SZA turned introspection into anthems, earning five Grammy nominations and widespread
            critical acclaim.
          </p>
          <img
            className={S.img}
            src="https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/a2/bc/ad/a2bcad46-b389-4be1-8bac-5a0959b0b8e4/886446548449.jpg/600x600bb.jpg"
            alt="Ctrl album cover"
          />
        </div>
        <div className={S.box}>
          <LongLine ref={refs[1]} className={S.line} windowWidth={windowWidth} />
          <p className={S.title}>SOS</p>
          <p className={S.text}>
            Released in 2022, SOS debuted at number one and spent ten non-consecutive weeks atop the Billboard 200. With
            hits like Kill Bill and Snooze, SZA proved that the wait was worth it, delivering a masterpiece of
            vulnerability and sonic ambition.
          </p>
          <img
            className={S.img}
            src="https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/62/93/13/6293132e-20ff-67ab-3d1f-96bb6797a6ba/196589564955.jpg/600x600bb.jpg"
            alt="SOS album cover"
          />
        </div>
        <div className={S.box}>
          <LongLine ref={refs[2]} className={S.line} windowWidth={windowWidth} />
          <p className={S.title}>Lana</p>
          <p className={S.text}>
            The SOS Deluxe reissue, Lana, expanded the era with new tracks and deeper emotional landscapes. SZA
            continued to push boundaries, proving her creative well runs far deeper than any single album cycle.
          </p>
          <img
            className={S.img}
            src="https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/50/fa/17/50fa1760-8a36-5cef-93bf-aab5b5257b18/196871766913.jpg/600x600bb.jpg"
            alt="SOS Deluxe: LANA album cover"
          />
        </div>
        <div className={S.box}>
          <LongLine ref={refs[3]} className={S.line} windowWidth={windowWidth} />
          <p className={S.title}>Z</p>
          <p className={S.text}>
            The 2014 EP Z was SZA's breakthrough, showcasing her ethereal vocals over lo-fi production. Songs like
            Babylon and Childs Play hinted at the brilliance to come, establishing her as a singular voice in
            alternative R&B.
          </p>
          <img
            className={S.img}
            src="https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/0e/5c/6e/0e5c6e76-928a-bb8c-ec7d-b323f6079f67/886449007394.jpg/600x600bb.jpg"
            alt="Good Days single cover"
          />
          <LongLine ref={refs[4]} className={S.line} windowWidth={windowWidth} />
        </div>
      </div>
    </section>
  );
};

export default SectionEight;

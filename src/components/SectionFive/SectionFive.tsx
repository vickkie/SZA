import gsap from "gsap";
import Marquee from "react-fast-marquee";
import S from "./SectionFive.module.scss";
import React, { useEffect, useRef } from "react";
import { ReactComponent as Line } from "../../svgs/line.svg";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";

type SectionFiveProps = {
  windowWidth: number;
};

const SectionFive: React.FC<SectionFiveProps> = ({ windowWidth }) => {
  const title1ScrollSpeed = windowWidth <= 1024 ? -7.5 : 1.2;
  const title2ScrollSpeed = windowWidth <= 1024 ? 6 : -1.2;

  const ref = useRef<HTMLParagraphElement>(null);
  const isOnScreen = useIntersectionObserver(ref, 1);

  useEffect(() => {
    if (isOnScreen) {
      gsap.to("#lineRef > line", {
        duration: 2,
        ease: "expo.out",
        strokeDashoffset: 0,
      });
    }
  }, [isOnScreen]);

  return (
    <section id="section-five" data-scroll-section>
      <div id="target-element" className={S.section}>
        <Marquee pauseOnHover gradient={false} className={S.marquee} speed={windowWidth > 1024 ? 15 : 80}>
          <p className={S.marqueeText}>SOS</p>
          <p className={S.marqueeText}>SOS</p>
          <p className={S.marqueeText}>SOS</p>
          <p className={S.marqueeText}>SOS</p>
        </Marquee>
        <div className={S.main}>
          <h2 data-scroll className={S.title1} data-scroll-direction="horizontal" data-scroll-speed={title1ScrollSpeed}>
            Deep
          </h2>
          <img
            className={S.image}
            src="https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/62/93/13/6293132e-20ff-67ab-3d1f-96bb6797a6ba/196589564955.jpg/600x600bb.jpg"
            alt="SOS album cover"
          />
          <h2
            data-scroll
            className={S.title2}
            data-scroll-direction="horizontal"
            data-scroll-target="#target-element"
            data-scroll-speed={title2ScrollSpeed}
          >
            Waters
          </h2>
        </div>
        <div className={S.sub}>
          <p className={S.subText}>Songwriter</p>
          <div className={S.subRow}>
            <Line id={"lineRef"} width="11.22vh" height="0.33vh" className={S.line1} />
            <p ref={ref} className={S.subText}>
              Voice with presence
            </p>
          </div>
          <div className={S.subRow}>
            <p className={S.subText}>Honest</p>
            <Line id={"lineRef"} width="11.22vh" height="0.33vh" className={S.line2} />
          </div>
        </div>
        <div className={S.textWrapper}>
          <p className={S.text}>
            Emotion arrives with SZA's signature vulnerability and depth. Featured on critically acclaimed projects like
            Ctrl and breaking records with SOS, her catalog showcases the perfect balance of raw honesty and cosmic
            production. SZA's unique ability to channel personal experience into universal anthems makes her highly
            sought after in the industry. Her work spans from introspective ballads to chart-topping hits like Kill Bill
            and Snooze, demonstrating her remarkable versatility. Every song captures her ability to transform pain into
            beauty. The timeless quality of her voice and songwriting translates across cultural contexts, making her a
            truly global musical icon. Discover the artistry and passion she brings to music through this curated
            collection of her most defining moments.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SectionFive;

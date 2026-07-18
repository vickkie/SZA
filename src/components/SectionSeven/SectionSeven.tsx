import React from "react";
import Marquee from "react-fast-marquee";
import S from "./SectionSeven.module.scss";
import { ReactComponent as Line } from "../../svgs/line.svg";
import { ReactComponent as Plus } from "../../svgs/plus.svg";

type SectionSevenProps = {
  windowWidth: number;
};

const SectionSeven: React.FC<SectionSevenProps> = ({ windowWidth }) => {
  return (
    <section data-scroll-section>
      <div className={S.section}>
        <div className={S.marqueeSection}>
          <Marquee pauseOnHover gradient={false} className={S.marquee} speed={windowWidth > 1024 ? 15 : 80}>
            <p className={S.marqueeText}>Solána</p>
            <p className={S.marqueeText}>Solána</p>
            <p className={S.marqueeText}>Solána</p>
            <p className={S.marqueeText}>Solána</p>
            <p className={S.marqueeText}>Solána</p>
          </Marquee>
        </div>
        <div className={S.main}>
          <div className={S.up}>
            <div className={S.left}>
              <div className={S.row}>
                <Line id={"lineRef"} width="5vh" height="0.33vh" className={S.line1} />
                <p className={S.largeText}>Voice</p>
              </div>
              <div className={S.row2}>
                <Plus />
              </div>
              <div className={S.row3}>
                <p className={S.largeText}>Deep Blue</p>
                <Line id={"lineRef"} width="5vh" height="0.33vh" className={S.line2} />
              </div>
            </div>
            <div className={S.right}>
              <p className={S.smallText}>
                SZA believes that music is an act of vulnerability, that personality shines through honest expression,
                and true artistry comes from the courage to feel deeply and transform it into sound.
              </p>
            </div>
          </div>
          <div className={S.down}>
            <img
              className={S.img}
              src="https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/0f/90/a8/0f90a856-0447-d846-fa7b-b9c937e72310/196871881180.jpg/600x600bb.jpg"
              alt="Saturn single cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default SectionSeven;

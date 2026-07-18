import React, { useRef } from "react";
import S from "./SectionTwo.module.scss";
import signatureImg from "../../assets/Solana Imani Rowe.svg";

const SectionTwo: React.FC = () => {
  const imageRef = useRef<HTMLImageElement>(null);

  return (
    <section id="section-two" data-scroll-section>
      <div className={S.section}>
        <div className={S.textWrapper}>
          <h2 className={S.title}>A Journey with SZA</h2>
          <p className={S.text}>
            SZA is a visionary artist and songwriter, celebrated for her raw vulnerability and genre-defying sound. From
            her breakout EP Z to the Grammy-nominated Ctrl and the record-breaking SOS, she has redefined what R&B can
            be. With a voice that floats between featherlight and full-bodied, she turns heartbreak, self-doubt, and
            cosmic wonder into music that feels like confession and salvation at once. Join her as she charts the depths
            of emotion—where vulnerability meets power.
          </p>
          <img alt="Solána Imani Rowe" ref={imageRef} className={S.signature} src={signatureImg} />

          <p className={S.person}>Solána Imani Rowe</p>
        </div>
        <div className={S.imageWrapper}>
          <div className={S.imageContainer}>
            <div data-scroll className={S.image} data-scroll-speed="-1" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionTwo;

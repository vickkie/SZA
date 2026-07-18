import React from "react";
import S from "./SectionSix.module.scss";

import fullSza from "../../assets/sza-kill-bill.webp";

const SectionSix: React.FC = () => {
  return (
    <section data-scroll-section>
      <div className={S.section}>
        <div data-scroll data-scroll-speed="-10" className={S.videoWrapper}>
          <img src={fullSza} alt="SOS Deluxe: LANA album cover" className={S.img} />
        </div>
      </div>
    </section>
  );
};

export default SectionSix;

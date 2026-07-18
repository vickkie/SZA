import React from "react";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
import S from "./SectionNine.module.scss";

type SectionEightProps = {
  windowWidth: number;
};

const SectionEight: React.FC<SectionEightProps> = ({ windowWidth }) => {
  const textScrollSpeed = windowWidth <= 1024 ? -5 : 3;

  return (
    <section id="section-nine" data-scroll-section>
      <div className={S.section}>
        <div className={S.left}>
          <p className={S.text}>Explore more of SZA's visual world</p>
          <Link to="/gallery">
            <div className={S.button}>
              <Button use="section-nine" text="view gallery" />
            </div>
          </Link>
        </div>
        <div className={S.right}>
          <img
            className={S.image1}
            src="https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/0e/5c/6e/0e5c6e76-928a-bb8c-ec7d-b323f6079f67/886449007394.jpg/600x600bb.jpg"
            alt="Good Days single cover"
          />
          <img
            className={S.image2}
            src="https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/84/21/a6/8421a698-bfaa-62c5-3a21-eec3a7cb6a72/886448745631.jpg/600x600bb.jpg"
            alt="Hit Different single cover"
          />
          <img
            className={S.image3}
            src="https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/0f/90/a8/0f90a856-0447-d846-fa7b-b9c937e72310/196871881180.jpg/600x600bb.jpg"
            alt="Saturn single cover"
          />
          <p data-scroll className={S.title} data-scroll-direction="horizontal" data-scroll-speed={textScrollSpeed}>
            SZA ✿
          </p>
        </div>
      </div>
    </section>
  );
};

export default SectionEight;

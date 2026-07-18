import gsap from "gsap";
import S from "./Tour.module.scss";
import splitting from "splitting";
import { PageProps } from "../page.types";
import Nav from "../../components/Nav/Nav";
import { TourData } from "./TourData";
import Marquee from "react-fast-marquee";
import LocomotiveScroll from "locomotive-scroll";
import React, { useEffect, useRef, useState } from "react";

const Tour: React.FC<PageProps> = ({ appLoaded, preloaded, navOnClick, windowWidth, setAppLoaded }) => {
  const navRef = useRef(null);
  const scrollRef = useRef(null);
  const [scroll, setScroll] = useState<any>();

  useEffect(() => {
    if (preloaded && !scroll) {
      setScroll(
        new LocomotiveScroll({
          smooth: true,
          el: scrollRef.current,
          direction: windowWidth > 1024 ? "horizontal" : "vertical",
          gestureDirection: "both",
          tablet: { smooth: true },
          smartphone: { smooth: true },
          reloadOnContextChange: true,
        }),
      );
    } else if (preloaded && scroll) {
      scroll.stop();
      scroll.update();
      const delay = windowWidth <= 1024 ? 0.8 : 0.5;
      setTimeout(
        () => {
          scroll.start();
          !appLoaded && windowWidth > 1024 && gsap.set(navRef.current, { visibility: "visible" });
          setAppLoaded(true);
        },
        !appLoaded ? 0 : delay,
      );
    }
    return () => scroll && scroll.destroy();
  }, [scroll, preloaded]);

  useEffect(() => {
    !appLoaded && navRef.current && windowWidth > 1024 && gsap.set(navRef.current, { visibility: "hidden" });
  }, [navRef.current]);

  useEffect(() => {
    if (preloaded && scroll) {
      splitting({ by: "words", target: "#tour .split-text" });
      const intro = gsap.timeline({ delay: appLoaded ? 2.5 : 0 });
      intro
        .to("#tour .tourTitle", {
          delay: 0.25,
          duration: 1.5,
          opacity: 1,
          ease: "power2.out",
        })
        .from(
          "#tour .split-text .word",
          {
            stagger: 0.03,
            duration: 0.75,
            opacity: 0,
            yPercent: 50,
            ease: "power2.out",
          },
          0.5,
        )
        .from(
          "#tour .tourCard",
          {
            stagger: 0.08,
            duration: 1.2,
            opacity: 0,
            yPercent: 20,
            ease: "expo.out",
          },
          1,
        );
    }
  }, [preloaded, scroll]);

  const pastDates = TourData.filter((d) => d.status === "past");
  const upcomingDates = TourData.filter((d) => d.status === "upcoming");
  const marqueeCities = [...new Set(TourData.map((d) => d.city.toUpperCase()))];

  return (
    <>
      <Nav ref={navRef} onClick={navOnClick} />
      <div id="tour" ref={scrollRef} data-scroll-container>
        {/* Hero section */}
        <section data-scroll-section className={S.hero}>
          <div className={S.heroContent}>
            <p className={`${S.eyebrow} split-text`}>SOS Tour &amp; Grand National</p>
            <h1 className={`${S.heroTitle} split-text tourTitle`}>
              Sinking into
              <br />
              the sound
            </h1>
            <p className={`${S.heroSub} split-text`}>
              Every show a depth. Every city a wave. Follow SZA from the surface to the abyss.
            </p>
          </div>
          <div className={S.heroImage}>
            <div data-scroll className={S.heroImageInner} data-scroll-speed="-2" />
          </div>
        </section>

        {/* City marquee */}
        <section data-scroll-section className={S.marqueeSection}>
          <Marquee pauseOnHover gradient={false} className={S.marquee} speed={windowWidth > 1024 ? 15 : 80}>
            {marqueeCities.map((city, i) => (
              <span key={i} className={S.marqueeText}>
                {city} <span className={S.marqueeDot}>✿</span>
              </span>
            ))}
          </Marquee>
        </section>

        {/* Past shows — horizontal card strip */}
        <section data-scroll-section className={S.datesSection}>
          <div className={S.sectionHeader}>
            <p className={S.sectionLabel}>Past Shows</p>
            <p className={`${S.sectionTitle} split-text`}>SOS Tour 2023</p>
          </div>
          <div className={S.cardStrip}>
            {pastDates.map((show, i) => (
              <div key={i} className={`${S.tourCard} ${S.past}`} data-scroll data-scroll-speed={i % 2 === 0 ? 2 : -2}>
                <div className={S.cardImageWrap}>
                  <img src={show.image} alt={show.imageAlt} className={S.cardImage} loading="lazy" />
                  <div className={S.cardOverlay} />
                  <div className={S.cardDate}>
                    <span className={S.cardDay}>{show.day}</span>
                    <span className={S.cardMonth}>{show.month}</span>
                  </div>
                </div>
                <div className={S.cardBody}>
                  <p className={S.cardVenue}>{show.venue}</p>
                  <p className={S.cardCity}>
                    {show.city}, {show.country}
                  </p>
                  <p className={S.cardStatus}>Completed</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Divider with wave */}
        <section data-scroll-section className={S.waveSection}>
          <svg className={S.wave} viewBox="0 0 1200 80" preserveAspectRatio="none" aria-hidden="true">
            <path d="M0,40 C200,70 400,10 600,40 C800,70 1000,10 1200,40 L1200,80 L0,80 Z" fill="currentColor" />
          </svg>
          <p className={`${S.waveText} split-text`}>The deeper you go</p>
        </section>

        {/* Upcoming shows — horizontal card strip */}
        <section data-scroll-section className={`${S.datesSection} ${S.upcomingSection}`}>
          <div className={S.sectionHeader}>
            <p className={S.sectionLabel}>Upcoming</p>
            <p className={`${S.sectionTitle} split-text`}>Grand National 2025</p>
          </div>
          <div className={S.cardStrip}>
            {upcomingDates.map((show, i) => (
              <div
                key={i}
                className={`${S.tourCard} ${S.upcoming}`}
                data-scroll
                data-scroll-speed={i % 2 === 0 ? -2 : 2}
              >
                <div className={S.cardImageWrap}>
                  <img src={show.image} alt={show.imageAlt} className={S.cardImage} loading="lazy" />
                  <div className={S.cardOverlay} />
                  <div className={S.cardDate}>
                    <span className={S.cardDay}>{show.day}</span>
                    <span className={S.cardMonth}>{show.month}</span>
                  </div>
                </div>
                <div className={S.cardBody}>
                  <p className={S.cardVenue}>{show.venue}</p>
                  <p className={S.cardCity}>
                    {show.city}, {show.country}
                  </p>
                  {show.ticketUrl ? (
                    <a href={show.ticketUrl} target="_blank" rel="noopener noreferrer" className={S.ticketLink}>
                      Tickets
                    </a>
                  ) : (
                    <p className={S.cardStatus}>Soon</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <section data-scroll-section className={S.tourFooter}>
          <p className={`${S.footerText} split-text`}>The louder it gets</p>
        </section>
      </div>
    </>
  );
};

export default Tour;

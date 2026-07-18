import { useEffect, useRef, useState, useCallback } from "react";
import { Howl } from "howler";

export type Track = {
  id: string;
  name: string;
  url: string;
};

const tracks: Track[] = [
  { id: "ambience", name: "Ambience", url: "/audio/ambience.mp3" },
  { id: "snooze", name: "Snooze", url: "/audio/snooze.mp3" },
];

const useSound = () => {
  const howlsRef = useRef<Howl[]>([]);
  const indexRef = useRef(0);
  const playingRef = useRef(false);
  const [index, setIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [ready, setReady] = useState(false);

  // Preload all tracks (Web Audio API — more reliable load/play events than html5 pooling)
  useEffect(() => {
    const howls = tracks.map((track) => {
      const howl = new Howl({
        src: [track.url],
        loop: true,
        volume: 0,
        preload: true,
      });
      howl.on("loaderror", (_id, err) => console.error(`[sound] ${track.id} load error`, err));
      howl.on("playerror", (_id, err) => console.error(`[sound] ${track.id} play error`, err));
      return howl;
    });

    let loadedCount = 0;
    howls.forEach((howl) =>
      howl.once("load", () => {
        loadedCount++;
        if (loadedCount === howls.length) setReady(true);
      }),
    );

    howlsRef.current = howls;

    return () => {
      howls.forEach((howl) => howl.unload());
      howlsRef.current = [];
    };
  }, []);

  const fadeOut = useCallback((howl: Howl) => {
    if (!howl.playing()) return;
    howl.fade(howl.volume(), 0, 400);
    setTimeout(() => howl.stop(), 400);
  }, []);

  const fadeIn = useCallback((howl: Howl) => {
    howl.volume(0);
    howl.play();
    howl.fade(0, 0.4, 1200);
  }, []);

  const playAt = useCallback(
    (i: number) => {
      const howls = howlsRef.current;
      if (!howls.length) return;
      howls.forEach((howl, hi) => hi !== i && fadeOut(howl));
      fadeIn(howls[i]);
      indexRef.current = i;
      playingRef.current = true;
      setIndex(i);
      setIsPlaying(true);
    },
    [fadeIn, fadeOut],
  );

  const pause = useCallback(() => {
    const howls = howlsRef.current;
    if (!howls.length) return;
    fadeOut(howls[indexRef.current]);
    playingRef.current = false;
    setIsPlaying(false);
  }, [fadeOut]);

  const togglePlay = useCallback(() => {
    if (playingRef.current) {
      pause();
    } else {
      playAt(indexRef.current);
    }
  }, [pause, playAt]);

  const next = useCallback(() => {
    const nextIndex = (indexRef.current + 1) % tracks.length;
    if (playingRef.current) {
      playAt(nextIndex);
    } else {
      indexRef.current = nextIndex;
      setIndex(nextIndex);
    }
  }, [playAt]);

  const previous = useCallback(() => {
    const prevIndex = (indexRef.current - 1 + tracks.length) % tracks.length;
    if (playingRef.current) {
      playAt(prevIndex);
    } else {
      indexRef.current = prevIndex;
      setIndex(prevIndex);
    }
  }, [playAt]);

  // Keyboard shortcut: 'M' to toggle play/pause
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key.toLowerCase() === "m" && !e.metaKey && !e.ctrlKey && !e.altKey) {
        const target = e.target as HTMLElement;
        if (target.tagName === "INPUT" || target.tagName === "TEXTAREA" || target.isContentEditable) return;
        e.preventDefault();
        togglePlay();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [togglePlay]);

  return {
    ready,
    isPlaying,
    track: tracks[index],
    togglePlay,
    next,
    previous,
  };
};

export default useSound;

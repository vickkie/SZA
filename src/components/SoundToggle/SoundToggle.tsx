import S from "./SoundToggle.module.scss";
import React from "react";

type Track = {
  id: string;
  name: string;
  url: string;
};

type SoundToggleProps = {
  isPlaying: boolean;
  track: Track;
  onTogglePlay: () => void;
  onNext: () => void;
  onPrevious: () => void;
};

const SoundToggle: React.FC<SoundToggleProps> = ({ isPlaying, track, onTogglePlay, onNext, onPrevious }) => {
  return (
    <div className={S.toggle} data-playing={isPlaying}>
      <button className={S.arrowBtn} onClick={onPrevious} aria-label="Previous track">
        <svg viewBox="0 0 12 12" fill="none">
          <path d="M8 2L4 6l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      <button
        className={S.playBtn}
        onClick={onTogglePlay}
        aria-label={isPlaying ? "Pause" : "Play"}
        aria-pressed={isPlaying}
        title="Press M to play/pause"
      >
        {isPlaying ? (
          <svg viewBox="0 0 12 12" fill="none">
            <rect x="2.5" y="2" width="2.2" height="8" rx="0.5" fill="currentColor" />
            <rect x="7.3" y="2" width="2.2" height="8" rx="0.5" fill="currentColor" />
          </svg>
        ) : (
          <svg viewBox="0 0 12 12" fill="none">
            <path
              d="M3 2.2v7.6a0.6 0.6 0 0 0 0.92 0.5l6-3.8a0.6 0.6 0 0 0 0-1L3.92 1.7A0.6 0.6 0 0 0 3 2.2z"
              fill="currentColor"
            />
          </svg>
        )}
      </button>

      <span className={S.trackName}>{track.name}</span>

      <button className={S.arrowBtn} onClick={onNext} aria-label="Next track">
        <svg viewBox="0 0 12 12" fill="none">
          <path d="M4 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </div>
  );
};

export default SoundToggle;

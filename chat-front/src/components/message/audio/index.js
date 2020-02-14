import React, { useState, useRef, useEffect } from "react";
import Bubble from "components/message/bubble";
import "./style.scss";
import WaveSvg from "assets/img/wave.svg";
import PlaySvg from "assets/img/play.svg";
import PauseSvg from "assets/img/pause.svg";
import classNames from "classnames";
import { toTime } from "helpers/date";

function getSvg(isPlaying) {
  return isPlaying ? PauseSvg : PlaySvg;
}

function AudioMsg({ message, isMe }) {
  const audioRef = useRef(null);

  const [audioSettings, setAudioSettings] = useState({
    duration: 0,
    isPlaying: false,
    maxDuration: null
  });

  const onTimeUpdate = e => {
    const duration = e.currentTarget.currentTime;

    duration - audioSettings.duration >= 0.3 &&
      setAudioSettings(state => ({ ...state, duration }));
  };

  const onEnded = () =>
    setAudioSettings(state => ({ ...state, duration: 0, isPlaying: false }));

  const onLoadMetadata = e => {
    setAudioSettings({
      ...audioSettings,
      maxDuration: e.srcElement.duration
    });
  };

  useEffect(() => {
    const { current } = audioRef;
    console.count()
    current.addEventListener("timeupdate", onTimeUpdate);
    current.addEventListener("loadedmetadata", onLoadMetadata);
    current.addEventListener("ended", onEnded);

    return () => {
      current.removeEventListener("timeupdate", onTimeUpdate);
      current.removeEventListener("loadedmetadata", onLoadMetadata);
      current.removeEventListener("ended", onEnded);
    };
  }, []);

  const onPlayHandler = () => {
    const { current } = audioRef;
    let { isPlaying, duration } = audioSettings;

    if (isPlaying) {
      current.pause();
      duration = current.currentTime = 0;
    } else {
      current.play();
    }

    setAudioSettings(state => ({ ...state, isPlaying: !isPlaying, duration }));
  };

  const classes = classNames("audio", { "audio--is-me": isMe });
  const progressLength =
    audioSettings.duration > 0
      ? (audioSettings.duration / audioSettings.maxDuration) * 100
      : 0;

  return (
    <Bubble message={message} isMe={isMe}>
      <div className={classes}>
        <audio
          ref={audioRef}
          preload="auto"
          src="https://dl.prokerala.com/downloads/ringtones/files/mp3/himavardhan-please-pickup-the-call-49205.mp3"
        />
        <div
          className="audio-progress-bar"
          style={{
            background: `linear-gradient(
            to right,
            #87e1eb,
            #87e1eb ${progressLength}%,
            transparent 0%,
            transparent 100%
          )`
          }}
        ></div>
        <div className="audio-interface">
          <div className="audio-btn" onClick={onPlayHandler}>
            <img
              src={getSvg(audioSettings.isPlaying)}
              alt={message.user.name}
            />
          </div>
          <div className="audio-wave">
            <img src={WaveSvg} alt={message.user.name}></img>
          </div>
          <div className="audio-duration">
            {toTime(audioSettings.duration)}/
            {toTime(audioSettings.maxDuration || 0)}
          </div>
        </div>
      </div>
    </Bubble>
  );
}

export default AudioMsg;

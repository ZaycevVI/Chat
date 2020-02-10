import React, { useState, useRef, useEffect } from "react";
import Bubble from "components/message/bubble";
import "./style.scss";
import WaveSvg from "assets/wave.svg";
import PlaySvg from "assets/play.svg";
import PauseSvg from "assets/pause.svg";
import classNames from "classnames";
import moment from "moment";

function toTime(seconds) {
  return moment()
    .startOf("day")
    .seconds(seconds)
    .format("mm:ss");
}

function getSvg(isPlaying) {
  return isPlaying ? PauseSvg : PlaySvg;
}

function AudioMsg({ message, isMe }) {
  const audioRef = useRef(null);

  const [audioSettings, setAudionSettings] = useState({
    duration: 0,
    isPlaying: false,
    maxDuration: null
  });

  const onTimeUpdate = e => {
    const duration = e.currentTarget.currentTime;

    duration - audioSettings.duration >= 0.3 &&
      setAudionSettings({ ...audioSettings, duration });
  };

  const onEnded = e => {
    setAudionSettings({ ...audioSettings, duration: 0, isPlaying: false });
  };

  const onLoadMetadata = e => {
    setAudionSettings({
      ...audioSettings,
      maxDuration: e.srcElement.duration
    });
  };

  useEffect(() => {
    audioRef.current.addEventListener("timeupdate", onTimeUpdate);
    audioRef.current.addEventListener("loadedmetadata", onLoadMetadata);
    audioRef.current.addEventListener("ended", onEnded);

    return () => {
      audioRef.current.removeEventListener("timeupdate", onTimeUpdate);
      audioRef.current.removeEventListener("loadedmetadata", onLoadMetadata);
      audioRef.current.removeEventListener("ended", onEnded);
    };
  });

  const onPlayHandler = () => {
    const { current } = audioRef;
    let { isPlaying, duration } = audioSettings;

    if (isPlaying) {
      current.pause();
      duration = current.currentTime = 0;
      isPlaying = false;
    } else {
      current.play();
    }

    setAudionSettings(state => {
      return { ...state, isPlaying: !state.isPlaying, duration };
    });
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

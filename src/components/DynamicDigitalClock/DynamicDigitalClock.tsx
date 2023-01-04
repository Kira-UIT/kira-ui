import React from "react";
import "./DynamicDigitalClock.css";
type Props = {};

const DynamicDigitalClock = (props: Props) => {
  return (
    <div className="time-container">
      <div className="time">
        <div className="time-colon">
          <div className="time-text">
            <span className="num hour-num">15</span>
            <span className="text">Hours</span>
          </div>
          <span className="colon">:</span>
        </div>
        <div className="time-colon">
          <div className="time-text">
            <span className="num min-num">00</span>
            <span className="text">Minutes</span>
          </div>
          <span className="colon">:</span>
        </div>
        <div className="time-colon">
          <div className="time-text">
            <span className="num sec-num">00</span>
            <span className="text">Seconds</span>
          </div>
          <div className="am_pm">AM</div>
        </div>
      </div>
    </div>
  );
};

export default DynamicDigitalClock;

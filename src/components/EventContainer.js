import { useMemo } from "react";
import "./EventContainer.css";

const EventContainer = ({
  carYear,
  eventDescription,
  locationAddress,
  birthDate,
  lOCATION1,
  showThisTimeAround,
  propTop,
  propMixBlendMode,
  propMixBlendMode1,
  propBorderRadius,
  propTextTransform,
}) => {
  const eventStyle = useMemo(() => {
    return {
      top: propTop,
    };
  }, [propTop]);

  const lineStyle = useMemo(() => {
    return {
      mixBlendMode: propMixBlendMode,
    };
  }, [propMixBlendMode]);

  const rectangleStyle = useMemo(() => {
    return {
      mixBlendMode: propMixBlendMode1,
      borderRadius: propBorderRadius,
    };
  }, [propMixBlendMode1, propBorderRadius]);

  const lOCATIONStyle = useMemo(() => {
    return {
      textTransform: propTextTransform,
    };
  }, [propTextTransform]);

  return (
    <div className="event1" style={eventStyle}>
      <i className="i1">{carYear}</i>
      <div className="line" style={lineStyle}>
        <div className="start">
          <div className="ellipse1" />
        </div>
        <div className="rectangle12" style={rectangleStyle} />
        <div className="end">
          <div className="ellipse2" />
        </div>
      </div>
      <div className="info1">
        <div className="kintaro-is-born">{eventDescription}</div>
        {!lOCATION1 && (
          <div className="location1" style={lOCATIONStyle}>
            {locationAddress}
          </div>
        )}
        {showThisTimeAround && (
          <div className="this-time-around">{birthDate}</div>
        )}
      </div>
    </div>
  );
};

export default EventContainer;

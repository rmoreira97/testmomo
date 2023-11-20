import "./AboutContainer.css";

const AboutContainer = () => {
  return (
    <div className="about">
      <img className="cake-icon" alt="" src="/cake.svg" />
      <div className="frame12">
        <div className="frame13">
          <b className="about1">About</b>
          <div className="email">
            <img className="cake-icon" alt="" src="/person1.svg" />
            <div className="email1">
              <div className="male">Male</div>
            </div>
          </div>
        </div>
        <div className="frame14">
          <div className="frame15">
            <img className="vector-icon" alt="" src="/vector.svg" />
            <div className="phone-number">
              <div className="born-july-3rd">Born July 3rd, 2000</div>
            </div>
          </div>
          <div className="location2">
            <img className="location-icon" alt="" src="/location.svg" />
            <div className="location3">
              <p className="kyoto-city-zoo">Kyoto City Zoo</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContainer;

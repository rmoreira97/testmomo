import MomotaroFamilyCard from "../components/MomotaroFamilyCard";
import EventContainer from "../components/EventContainer";
import EventCard from "../components/EventCard";
import AboutContainer from "../components/AboutContainer";
import "./ProfilePageOwnersView.css";

const ProfilePageOwnersView = () => {
  return (
    <div className="profile-page-owners-view">
      <img className="layout-icon" alt="" src="/layout.svg" />
      <div className="navbar">
        <div className="frame">
          <b className="timeline">
            <p className="p">
              <span className="timeline2">Timeline</span>
              <span className="span">{`   `}</span>
              <span>{`                           `}</span>
            </p>
            <p className="p">
              <span>{` `}</span>
              <span className="span">{`     `}</span>
            </p>
          </b>
          <div className="gallery">Gallery</div>
        </div>
        <div className="videos">Videos</div>
      </div>
      <img
        className="profile-page-owners-view-child"
        alt=""
        src="/vector-2.svg"
      />
      <MomotaroFamilyCard />
      <div className="timeline3">
        <div className="frame1">
          <EventContainer
            carYear="2018"
            eventDescription="Kintaro is born"
            locationAddress="providence, ri 02903"
            birthDate="This time around, the process was much more manageable for the parents. Kintaro was born on December 19th, 2018"
            lOCATION1={false}
            showThisTimeAround
          />
          <EventContainer
            carYear="2010"
            eventDescription="Moved to Kyoto City Zoo"
            locationAddress="Momotaro moves to Kyoto, where he meets and eventually develops a relationship with Genki"
            lOCATION1
            showThisTimeAround
            propTop="471px"
            propMixBlendMode="unset"
            propMixBlendMode1="normal"
            propBorderRadius="7px"
            propTextTransform="unset"
          />
          <EventContainer
            carYear="2002"
            eventDescription="Moved to Chiba"
            locationAddress="Momotaro moved to Chiba Zoological Park with Momoko on July 7th, 2002"
            lOCATION1
            showThisTimeAround={false}
            propTop="141px"
            propMixBlendMode="unset"
            propMixBlendMode1="unset"
            propBorderRadius="3px"
            propTextTransform="unset"
          />
          <EventCard />
          <div className="event">
            <i className="i">2000</i>
            <img className="rectangle-icon" alt="" src="/rectangle.svg" />
            <div className="ellipse" />
            <div className="info">
              <div className="born">Born</div>
              <i className="location" />
              <div className="momotaro-was-born-container">
                <p className="p">
                  Momotaro was born on July 3rd, 2000 at Ueno Zoological
                  Gardens. He was brought up by his mother, Momoko.
                </p>
              </div>
            </div>
          </div>
          <EventContainer
            carYear="2008"
            eventDescription="Moved to Ueno "
            locationAddress="Momotaro moved to Ueno Zoological Gardens with Momoko on December 12th, 2008"
            lOCATION1
            showThisTimeAround
            propTop="285px"
            propMixBlendMode="normal"
            propMixBlendMode1="unset"
            propBorderRadius="3px"
            propTextTransform="capitalize"
          />
        </div>
      </div>
      <div className="profile-pic-and-name">
        <div className="frame2">
          <div className="frame3">
            <img className="profile-pic-icon" alt="" src="/profile-pic.svg" />
            <b className="momotaro">
              <p className="p">Momotaro</p>
            </b>
          </div>
          <div className="father-husband">Father, Husband</div>
        </div>
        <img className="cover-photo-icon" alt="" src="/cover-photo@2x.png" />
      </div>
      <div className="minigallery">
        <div className="frame4">
          <img
            className="ezlqwhfuyaqi6br-1-icon"
            alt=""
            src="/ezlqwhfuyaqi6br-1@2x.png"
          />
          <div className="frame5">
            <img className="momotaro-1-icon" alt="" src="/momotaro-1@2x.png" />
            <img
              className="ezlqvnyucaahgtz-1-icon"
              alt=""
              src="/ezlqvnyucaahgtz-1@2x.png"
            />
          </div>
        </div>
        <div className="frame6">
          <div className="frame7">
            <div className="frame8">
              <img
                className="ezlqvkdvcacpxxo-1-icon"
                alt=""
                src="/ezlqvkdvcacpxxo-1@2x.png"
              />
            </div>
            <div className="frame9">
              <img
                className="e3semtkxwaybdcb-1-icon"
                alt=""
                src="/e3semtkxwaybdcb-1@2x.png"
              />
            </div>
          </div>
          <div className="frame10">
            <div className="frame11">
              <img
                className="screenshot-2023-11-17-024136-1"
                alt=""
                src="/screenshot-20231117-024136-1@2x.png"
              />
            </div>
            <img
              className="momotaro20061004-02-1-icon"
              alt=""
              src="/20070904120549-1-momotaro20061004-02-1@2x.png"
            />
          </div>
        </div>
      </div>
      <AboutContainer />
    </div>
  );
};

export default ProfilePageOwnersView;

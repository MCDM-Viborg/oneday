import "./profileHeader.css";

const ProfileHeaderComp = ({ foundImage }) => {
  console.log("resultt", foundImage);

  const momentIndex = foundImage.momentIds.length;
  const count = foundImage.moments.filter((moment) => moment.approved).length;
  return (
    <div className="profle-upper-section">
      <div className="profile-upper-left">
        <img src={foundImage.picture} alt="" />
      </div>
      <div className="profile-upper-right">
        <p className="profile-name">{foundImage.name}</p>
        <h3 className="profile-name">{foundImage.position}</h3>
        <div>Uploaded Øjeblikke: {count}</div>
      </div>
    </div>
  );
};
export default ProfileHeaderComp;

import "./profileImages.css";

const ProfileImagesComp = ({ foundImage }) => {
  console.log("resultt", foundImage);

  return (
    <div className="profle-lower-section">
      <h2>{foundImage.name}`s Øjeblikke</h2>
      <div className="profileGallerySection">
        {/* {foundImage.moments.map((moment) => (
          <div className="profileGallerySection-image">
            <a href={"../single/" + moment._id}>
              <img src={moment.picture} alt="" />
            </a>
          </div>
        ))} */}

        {foundImage.moments.every((moment) => moment.approved === true) ? (
          foundImage.moments.map((moment) => (
            <div key={moment._id} className="profileGallerySection-image">
              <a href={"../single/" + moment._id}>
                <img src={moment.picture} alt="" />
              </a>
            </div>
          ))
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};
export default ProfileImagesComp;

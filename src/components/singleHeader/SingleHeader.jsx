import "./SingleHeader.css";

const SingleHeader = (foundImage) => {
  return (
    <div className='singleContainer-section-one'>
      <div className='singleContainer-section-one-left'>
        <img src={foundImage.foundImage.picture} alt='' />
      </div>
      <div className='singleContainer-section-one-right'>
        <p className='singleContainer-section-one-right-time'>
          {foundImage.foundImage.time}
        </p>
        <p className='singleContainer-section-one-right-title'>
          {foundImage.foundImage.title}
        </p>
        <p
          className='description'
          dangerouslySetInnerHTML={{
            __html: foundImage.foundImage.description,
          }}
        />
        <p className='profile-name'>
          {"©" + foundImage.foundImage.profile.name}
        </p>
      </div>
    </div>
  );
};
export default SingleHeader;

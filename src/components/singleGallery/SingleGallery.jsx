import "./SingleGallery.css";
import { Masonry } from "@mui/lab";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { Backdrop } from "@mui/material";
import { useState } from "react";

const SingleGallery = (foundImage) => {
  const [open, setOpen] = useState(false);
  const [image, setImage] = useState();
  const [imageTitle, setImageTitle] = useState("");

  const handleOpen = (e, item) => {
    setOpen(true);
    setImage(item.picture);
    setImageTitle(item.title);
  };

  const handleClose = () => {
    setOpen(false);
    setImage("");
    setImageTitle("");
  };

  return (
    <div className='singleContainer-section-two'>
      <div className='singleContainer-section-two-inner'>
        <Masonry columns={{ xs: 1, sm: 2, md: 3, lg: 4 }} spacing={1}>
          {foundImage.foundImage.pictures.map((item, index) => (
            <div
              key={index}
              onClick={(e) => handleOpen(e, item)}
              className='singleContainer-section-two-image'>
              <img
                srcSet={`${item.picture}?w=162&auto=format&dpr=2 2x`}
                src={`${item.picture}?w=162&auto=format`}
                alt={item.title}
                loading='lazy'
                style={{
                  display: "block",
                  width: "100%",
                }}
              />
              {item.title && (
                <p className='singleContainer-section-two-image-text'>
                  {item.title}
                </p>
              )}
            </div>
          ))}
        </Masonry>

        <Modal
          open={open}
          onClose={handleClose}
          slots={{ backdrop: Backdrop }}
          slotProps={{
            backdrop: {
              sx: {
                backgroundColor: "rgba(0, 0, 0, 0.863)",
              },
            },
          }}>
          <Box
            className='modal-box'
            onClick={handleClose}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100vh",
              cursor: "pointer",
            }}>
            <img className='modal-box-img' src={image} alt={imageTitle} />
            {imageTitle && (
              <div className='modal-text'>
                <p className='imageTitle'>{imageTitle}</p>
              </div>
            )}
          </Box>
        </Modal>
      </div>
    </div>
  );
};
export default SingleGallery;

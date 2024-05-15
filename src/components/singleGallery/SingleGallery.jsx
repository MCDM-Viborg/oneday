import "./SingleGallery.css";
import { Masonry } from "@mui/lab";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { Backdrop } from "@mui/material";
import { useState } from "react";

const SingleGallery = (foundImage) => {
  const [open, setOpen] = useState(false);
  const [image, setImage] = useState();

  const handleOpen = (e) => {
    setOpen(!open);
    setImage(e.target.src);
  };

  return (
    <div className='singleContainer-section-two'>
      <div className='singleContainer-section-two-inner'>
        <Masonry columns={{ xs: 1, sm: 2, md: 3, lg: 4 }} spacing={1}>
          {foundImage.foundImage.pictures.map((item, index) => (
            <div
              key={index}
              onClick={handleOpen}
              className='singleContainer-section-two-image'>
              <Modal
                open={open}
                slots={{ backdrop: Backdrop }}
                slotProps={{
                  backdrop: {
                    sx: {
                      backgroundColor: "rgba(0, 0, 0, 0.22)",
                    },
                  },
                }}>
                <Box className='modal-box'>
                  <img className='modal-box-img' src={image} alt='' />
                </Box>
              </Modal>

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
              <p className='singleContainer-section-two-image-text'>
                {item.title}
              </p>
            </div>
          ))}
        </Masonry>
      </div>
    </div>
  );
};
export default SingleGallery;

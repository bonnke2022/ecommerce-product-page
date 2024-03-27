import styled from "styled-components";
import imgProduct1 from "../images/image-product-1.jpg";
import { useGlobalContext } from "../context";
import { useState } from "react";
import { OverlayImage } from "../components/index";

const ImgSlider = () => {
  const { index, items, currentPic, setCurrentPic, overlay, setOverlay } =
    useGlobalContext();

  return (
    <Wrapper className="image-wrapper">
      {items.map((item) => {
        const { id, img } = item;
        if (id === currentPic) {
          return (
            <img
              key={id}
              src={img}
              alt="img-product"
              className="img-product"
              onClick={() => setOverlay(!overlay)}
            />
          );
        }
      })}
      {overlay && <OverlayImage />}
      <div className="thumbnails">
        {items.map((item, index) => {
          const { id, thumbnail, title } = item;
          return (
            <img
              key={id}
              src={thumbnail}
              alt={title}
              className="img-thumbnail"
              onClick={() => setCurrentPic(index + 1)}
            />
          );
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  .img-product {
    width: 480px;
    border-radius: 0.8rem;
    cursor: pointer;
  }
  .thumbnails {
    width: 480px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 1rem;
    place-content: center;
    place-items: center;
  }
  .img-thumbnail {
    border-radius: 0.5rem;
    width: clamp(85%, 5vw, 100%);
  }
  .img-thumbnail:hover,
  .img-thumbnail:active {
    border: 3px solid var(--Orange);
    opacity: 0.7;
    cursor: pointer;
  }
`;

export default ImgSlider;

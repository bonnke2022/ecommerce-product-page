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
  gap: 2rem;
  .img-product {
    border-radius: 0.8rem;
    cursor: pointer;
  }
  .thumbnails {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    width: 100%;
  }
  .img-thumbnail {
    width: 22%;
    border-radius: 0.5rem;
  }
  .img-thumbnail:hover,
  .img-thumbnail:active {
    border: 3px solid var(--Orange);
    border-radius: 0.5rem;
    opacity: 0.7;
    cursor: pointer;
  }
  @media screen and (min-width: 800px) {
    .img-product {
      width: 100%;
    }
  }
  @media screen and (min-width: 1100px) {
    .img-product {
      width: 500px;
      margin-left: 0;
    }
    .img-thumbnail {
      width: 112px;
    }
  }
`;

export default ImgSlider;

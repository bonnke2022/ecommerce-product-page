import styled from "styled-components";
import iconNext from "../images/icon-next.svg";
import iconPrev from "../images/icon-previous.svg";
import { useGlobalContext } from "../context";
import iconClose from "../images/icon-close.svg";

const OverlayImage = () => {
  const {
    nextItem,
    prevItem,
    index,
    items,
    amount,
    setAmount,
    handleCart,
    overlay,
    setOverlay,
  } = useGlobalContext();
  const { id, title, thumbnail, price, img } = items[index];

  return (
    <Wrapper className="overlay">
      <div className="img-slider">
        <button
          className="close-btn icon-btn"
          onClick={() => setOverlay(!overlay)}
        >
          <img src={iconClose} alt="icon-close" className="icon-close" />
        </button>
        <button className="icon-next-prev prev-btn" onClick={() => prevItem()}>
          <img src={iconPrev} alt="icon-prev" className="icon-prev" />
        </button>
        <div className="img-container">
          <img src={img} alt={title} className="img-product-overlay" />
        </div>
        <button className="icon-next-prev next-btn" onClick={() => nextItem()}>
          <img src={iconNext} alt="icon-next" className="icon-next" />
        </button>
      </div>
      <div className="thumbnail-container">
        {items.map((item, index) => {
          const { id, thumbnail, title } = item;
          return (
            <img key={id} src={thumbnail} alt={title} className="small-img" />
          );
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background: var(--Black);
  opacity: 0.95;
  z-index: 100;
  .close-btn {
    background: transparent;
    scale: 2;
    margin-bottom: 1.5rem;
    float: right;
    align-self: flex-end;
  }
  .img-slider {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .img-product-overlay {
    width: 580px;
  }
  .thumbnail-container {
    width: 600px;
    display: grid;
    gap: 1rem;
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
  .small-img {
    border-radius: 0.5rem;
    width: clamp(85%, 5vw, 100%);
  }
`;

export default OverlayImage;

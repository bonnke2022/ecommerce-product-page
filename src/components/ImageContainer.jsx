import styled from "styled-components";
import iconNext from "../images/icon-next.svg";
import iconPrev from "../images/icon-previous.svg";
import iconPlus from "../images/icon-plus.svg";
import iconMinus from "../images/icon-minus.svg";
import iconCart from "../images/icon-cart2.svg";
import { useGlobalContext } from "../context";
import { useState } from "react";

const ImageContainer = () => {
  const { nextItem, prevItem, index, items, amount, setAmount, handleCart } =
    useGlobalContext();
  const { id, title, thumbnail, price, img } = items[index];

  const handleMinus = () => {
    setAmount(amount - 1);
    if (amount === 0) {
      setAmount(0);
    }
  };

  const handlePlus = (id) => {
    console.log("plus clicked");
    // setItemAmount(itemAmount + 1);
    // const number = items.map((item) => {
    //   const { id, title, thumbnail, price, img, amount } = item;
    //   return { ...item, amount: itemAmount };
    // });
    const item = setAmount(amount + 1);
    return item;
  };

  return (
    <Wrapper className="image-container">
      <div className="img-slider">
        <button className="icon-next-prev prev-btn" onClick={() => prevItem()}>
          <img src={iconPrev} alt="icon-prev" className="icon-prev" />
        </button>
        <div className="img-container">
          <img src={img} alt={title} className="img-product" />
        </div>
        <button className="icon-next-prev next-btn" onClick={() => nextItem()}>
          <img src={iconNext} alt="icon-next" className="icon-next" />
        </button>
      </div>
      <section className="sneaker-store">
        <h5 className="text-orange uppercase fw-700">sneaker company</h5>
        <h2 className="text-black capitalize fw-700">
          fall limited edition <br />
          sneakers
        </h2>
        <p className="text-gray fw-400" style={{ lineHeight: "1.5" }}>
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they'll withstand everything
          the weather can offer.
        </p>
        <div className="shoe-prices">
          <div className="discount-prices">
            <h2 className="text-black fw-700">${(price / 2).toFixed(2)}</h2>
            <p className="text-orange fw-700">50%</p>
          </div>
          <p className="text-gray" style={{ textDecoration: "line-through" }}>
            ${price}.00
          </p>
        </div>
        <div className="btn-container">
          <button
            type="button"
            className="icon-btn minus-btn"
            onClick={handleMinus}
          >
            <img src={iconMinus} alt="icon-minus" onClick={handleMinus} />
          </button>
          <p className="text-black fw-700">{amount}</p>
          <button className="icon-btn plus-btn" onClick={handlePlus}>
            <img src={iconPlus} alt="icon-plus" onClick={handlePlus} />
          </button>
        </div>
        <button
          type="button"
          className="add-btn text-white btn"
          onClick={handleCart}
        >
          <img
            src={iconCart}
            alt="icon-cart"
            className="icon-btn"
            onClick={handleCart}
          />
          Add to cart
        </button>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  .sneaker-store {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  .shoe-prices {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 1rem 0;
  }
  .discount-prices {
    display: flex;
    gap: 1rem;
  }
  .discount-prices > p {
    background: var(--Pale-orange);
    padding: 0.1rem 0.2rem;
  }
  .btn-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: var(--Light-grayish-blue);
    border-radius: 0.5rem;
  }

  .minus-btn,
  .plus-btn {
    padding: 1rem 2rem;
    background: var(--Light-grayish-blue);
  }
  .icon-btn:hover {
    background: var(--Grayish-blue);
  }
`;

export default ImageContainer;

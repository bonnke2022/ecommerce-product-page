import styled from "styled-components";
import iconPlus from "../images/icon-plus.svg";
import iconMinus from "../images/icon-minus.svg";
import iconCart from "../images/icon-cart2.svg";
import { useGlobalContext } from "../context";

const SneakerPage = () => {
  const {
    index,
    items,
    amount,
    setAmount,
    handleCart,
    currentPic,
    setCurrentPic,
  } = useGlobalContext();
  const { price } = items[index];

  const handleMinus = () => {
    setAmount(amount - 1);
    if (amount === 0) {
      setAmount(0);
    }
  };

  const handlePlus = () => {
    console.log("plus clicked");
    const item = setAmount(amount + 1);
    return item;
  };
  return (
    <Wrapper className="sneaker-store ff-kumbh fs-160 fw-400">
      <h4 className="text-orange uppercase fw-700">sneaker company</h4>
      <h1 className="text-black capitalize fw-700">
        fall limited edition <br />
        sneakers
      </h1>
      <p className="text-gray fw-400" style={{ lineHeight: "1.5" }}>
        These low-profile sneakers are your perfect casual wear
        <br /> companion. Featuring a durable rubber outer sole, they'll <br />
        withstand everything the weather can offer.
      </p>
      {items.map((item) => {
        const { id, price } = item;
        if (id === currentPic) {
          return (
            <div className="shoe-prices" key={id}>
              <div className="discount-prices">
                <h2 className="text-black fw-700">${(price / 2).toFixed(2)}</h2>
                <p className="text-orange fw-700">50%</p>
              </div>
              <p
                className="text-gray"
                style={{ textDecoration: "line-through" }}
              >
                ${price}.00
              </p>
            </div>
          );
        }
      })}
      <div className="btn-cart-count">
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
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .shoe-prices {
    flex-direction: column;
    justify-content: start;
    align-items: start;
  }
  .btn-cart-count {
    display: flex;
    justify-content: flex-start;
    gap: 1rem;
  }
  .add-btn {
    width: 100%;
    white-space: nowrap;
  }

  @media screen and (min-width: 1100px) {
    margin: -1rem 10rem 0 0;
    p {
      white-space: nowrap;
    }
    h1 {
      font-size: 3.2rem;
    }
    .add-btn {
      width: 100%;
      white-space: nowrap;
    }
    .btn-container {
      width: 100%;
    }
  }
`;

export default SneakerPage;

import styled from "styled-components";
import { useGlobalContext } from "../context";
import iconDelete from "../images/icon-delete.svg";
import { getTotals } from "../utils";
import { toast } from "react-toastify";

const Cart = () => {
  const { index, items, amount, setAmount } = useGlobalContext();
  const { id, title, thumbnail, img, price } = items[index];

  const { totalCost } = getTotals(price, amount);
  const handleCheckout = () => {
    toast.success(
      "Sneakers have been purchased by you and will be delivered to you within 48hours!"
    );
    setAmount(0);
  };

  if (amount === 0) {
    return (
      <Wrapper className="card">
        <header className="text-black capitalize fw-700">Cart</header>
        <p className="text-gray fw-700">Your cart is empty</p>
      </Wrapper>
    );
  }
  return (
    <Wrapper className="card">
      <header className="text-black capitalize fw-700">cart</header>
      <div className="item-container">
        <div className="item">
          <div className="img-item">
            <img src={thumbnail} alt="img-product" className="img-thumbnail" />
            <div className="item-desc">
              <p className="para text-gray fw-400 capitalize">
                fall limited edition sneakers
              </p>
              <p className="para text-gray fw-400">
                ${price} x {amount}{" "}
                <span className="text-black fw-700"> ${totalCost}</span>
              </p>
            </div>
          </div>
          <button className="icon-delete icon-btn" onClick={() => setAmount(0)}>
            <img src={iconDelete} alt="icon-delete" />
          </button>
        </div>
        <button
          className="checkout-btn add-btn capitalize text-white"
          onClick={handleCheckout}
        >
          checkout
        </button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: absolute;
  top: 10%;
  left: 2%;
  background: #fff;
  width: 360px;
  height: 280px;
  z-index: 10;
  border-radius: 1rem;
  box-shadow: var(--shadow-3);
  overflow: hidden;
  header {
    padding: 2rem 2rem 1rem 1.5rem;
    border-bottom: 1px solid var(--Grayish-blue);
  }
  p {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 6rem 0;
  }
  .item-container {
    padding: 2.5rem 1rem 0 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
  }
  .img-thumbnail {
    border-radius: 0.5rem;
    width: 60px;
  }
  .para {
    padding: 0;
    display: flex;
    gap: 0.5rem;
  }
  .item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
  }
  .img-item {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  .item-desc {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  @media screen and (min-width: 800px) {
    top: 10%;
    left: 60%;
  }
  @media screen and (min-width: 1440px) {
    top: 10%;
    left: 70%;
  }
`;
export default Cart;

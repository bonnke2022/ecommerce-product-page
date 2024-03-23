import styled from "styled-components";
import iconCart from "../images/icon-cart.svg";
import imgAvatar from "../images/image-avatar.png";
import { useGlobalContext } from "../context";
import Cart from "./Cart";

const Navbar = () => {
  const { clickCart, openCart, amount, addCart } = useGlobalContext();
  return (
    <Wrapper className="ff-kumbh fs-160">
      <div className="logo-link">
        <h1>sneakers</h1>
        <nav>
          <ul>
            <li>
              <a href="#">Collections</a>
            </li>
            <li>
              <a href="#">Men</a>
            </li>
            <li>
              <a href="#">Women</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="icon-cart-avatar">
        <button className="icon-btn cart-btn" onClick={openCart}>
          <img src={iconCart} alt="icon-cart" className="icon icon-cart" />
          <span
            className="total-amount"
            style={{
              display: addCart ? "block" : "none",
            }}
          >
            {addCart && amount}
          </span>
        </button>
        <img src={imgAvatar} alt="image-avatar" className="icon img-avatar" />
      </div>
      {clickCart && <Cart />}
    </Wrapper>
  );
};

const Wrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 2rem 0 3rem 0;
  width: 100%;
  font-size: 20px;
  border-bottom: 2px solid var(--Light-grayish-blue);
  .logo-link {
    display: flex;
    align-items: center;
    gap: 3rem;
  }
  ul {
    display: flex;
    list-style: none;
    gap: 1.5rem;
    margin-bottom: 0.5rem;
  }
  li > a {
    text-decoration: none;
    color: var(--Dark-grayish-blue);
    padding: 2rem 0 3.5rem 0;
  }
  li > a:hover,
  li > a:active {
    border-bottom: 5px solid var(--Orange);
  }
  h1 {
    font-size: 2.3rem;
    letter-spacing: -2px;
  }
  .icon-cart {
    width: 30px;
    height: 30px;
  }
  .img-avatar {
    width: 50px;
    height: 50px;
  }
  @media screen and (max-width: 800px) {
    display: none;
  }
`;

export default Navbar;

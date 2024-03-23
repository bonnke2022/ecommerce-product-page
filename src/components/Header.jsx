import styled from "styled-components";
import iconMenu from "../images/icon-menu.svg";
import iconCart from "../images/icon-cart.svg";
import imgAvatar from "../images/image-avatar.png";
import { useGlobalContext } from "../context";
import Sidebar from "./Sidebar";
import Cart from "./Cart";

const Header = () => {
  const {
    click,
    openSidebar,
    closeSidebar,
    clickCart,
    openCart,
    amount,
    addCart,
  } = useGlobalContext();
  return (
    <Wrapper className="ff-kumbh ">
      <div className="logo">
        <img
          src={iconMenu}
          alt="icon-menu"
          className="icon-btn icon icon-menu"
          onClick={openSidebar}
        />
        <h1>sneakers</h1>
        {click && <Sidebar closeSidebar={closeSidebar} />}
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
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1.5rem;
`;

export default Header;

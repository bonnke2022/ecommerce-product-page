import styled from "styled-components";
import iconClose from "../images/icon-close.svg";

const Sidebar = ({ closeSidebar }) => {
  return (
    <Wrapper>
      <nav className="ff-kumbh fw-400 fs-160 capitalize">
        <img
          src={iconClose}
          alt="icon-close"
          className="icon-btn icon-close"
          onClick={closeSidebar}
        />
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
      <div className="overlay"></div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  nav {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 65%;
    background: #fff;
    padding: 2rem;
    gap: 2rem;
    z-index: 6;
  }
  .overlay {
    position: absolute;
    top: 0;
    right: 0;
    width: 35%;
    height: 100%;
    background: var(--Black);
    opacity: 0.75;
    z-index: 6;
  }
  .icon-close {
    scale: 1.2;
  }
  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }
  li > a {
    text-decoration: none;
    color: #000;
    font-weight: 700;
    font-size: 18px;
  }
  li > a:hover {
    color: var(--Orange);
  }
`;

export default Sidebar;

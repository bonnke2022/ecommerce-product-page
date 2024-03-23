import styled from "styled-components";
import { SneakerPage, ImgSlider } from "../components/index";

const SneakerStore = () => {
  return (
    <Wrapper className="sneaker-page">
      <ImgSlider />
      <SneakerPage />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 5rem 15rem;
  gap: 3rem;
  overflow-y: hidden;
  min-height: 80vh;
  @media screen and (min-width: 800px) {
    padding: 5rem 0;
    gap: 2rem;
  }
  @media screen and (min-width: 1440px) {
    padding: 5rem 15rem;
    gap: 3rem;
  }
  @media screen and (max-width: 800px) {
    display: none;
  }
`;

export default SneakerStore;

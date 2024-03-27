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
  justify-content: center;
  margin-top: 1rem;
  gap: 3rem;
  overflow-y: hidden;
  min-height: 80vh;
  @media screen and (max-width: 800px) {
    display: none;
  }
`;

export default SneakerStore;

import { ToastContainer, toast } from "react-toastify";
import {
  Header,
  ImageContainer,
  Navbar,
  SneakerStore,
} from "./components/index";
import styled from "styled-components";

const App = () => {
  return (
    <Wrapper>
      <div className="container ff-kumbh fs-160 fw400">
        <Header />
        <ImageContainer />
      </div>
      <Navbar />
      <SneakerStore />
      <ToastContainer position="top-center" />
    </Wrapper>
  );
};

const Wrapper = styled.main``;

export default App;

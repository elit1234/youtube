import { useState } from "react";
import styled from "styled-components";
import SideBar from "../SideBar";
import TopBar from "../TopBar";

const Wrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Overlay = styled.div`
  ${(props) =>
    props.active &&
    `
  background: rgba(0, 0, 0, 0.6);
  height: 100%;
  position: absolute;

  `}
`;

const Home = () => {
  const [active, setActive] = useState(false);

  return (
    <>
      <SideBar active={active} setActive={setActive} />
      <Wrapper
        onClick={() => {
          if (active) setActive(false);
        }}
        active={active ? 1 : 0}
      >
        <Overlay active={active ? 1 : 0}>
          <TopBar active={active} setActive={setActive} />
          <h1>Home</h1>
        </Overlay>
      </Wrapper>
    </>
  );
};

export default Home;

import { useRef, useEffect } from "react";
import styled from "styled-components";
import { gsap } from "gsap";

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 300px;
  background: #181818;
  height: 100vh;
  visibility: hidden;
  z-index: 20;
`;

const SideBar = ({ active, setActive }) => {
  const tl = gsap.timeline({ paused: true });
  const animRef = useRef(null);
  const wrapperRef = useRef(null);

  useEffect(() => {
    animRef.current = tl.fromTo(
      wrapperRef.current,
      {
        x: -300,
      },
      {
        x: 0,
        autoAlpha: 1,
        duration: 0.5,
        ease: "Power2.easeInOut",
      }
    );
  }, []);

  useEffect(() => {
    if (active) {
      console.log("playing");
      animRef.current.play();
    } else {
      animRef.current.reverse();
    }
  }, [active]);

  return (
    <Wrapper ref={wrapperRef}>
      <h1>Side Bar</h1>
    </Wrapper>
  );
};

export default SideBar;

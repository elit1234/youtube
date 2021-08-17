import { useRef, useEffect } from "react";

import gsap, { Power2 } from "gsap";
import styled from "styled-components";

const Line = styled.path.attrs((props) => ({
  className: props.pos && props.pos
}))`
  fill: none;
  stroke: ${(props) => (props.dark ? `#fff` : `#000`)};
  stroke-linecap: round;
`;

const Svg = styled.svg`
  height: 35px;
  width: 35px;
  cursor: pointer;
`;

const Container = styled.div`
  grid-area: menuIcon;
`;

const MenuIcon = ({ active, setActive }) => {
  const tl = gsap.timeline({ paused: true, reversed: true });
  const animRef = useRef(null);

  const dark = true;

  useEffect(() => {
    animRef.current = tl
      .to(
        ".topBar",
        0.5,
        {
          attr: {
            d: "M8,2 L2,8"
          },
          x: 1,
          ease: Power2.easeInOut
        },
        0
      )
      .to(
        ".middleBar",
        0.5,
        {
          autoAlpha: 0
        },
        0
      )
      .to(
        ".bottomBar",
        0.5,
        {
          attr: { d: "M8,8 L2,2" },
          x: 1,
          ease: Power2.easeInOut
        },
        0
      )
      .reverse();
  }, []);

  useEffect(() => {
    animRef.current.reversed(!active);
  }, [active]);

  return (
    <Container>
      <Svg viewBox="0 0 12 10" onClick={() => setActive(!active)}>
        <Line dark={dark ? 1 : 0} d="M10,2 L2,2" pos="topBar" />
        <Line dark={dark ? 1 : 0} d="M2,5 L10,5" pos="middleBar" />
        <Line dark={dark ? 1 : 0} d="M10,8 L2,8" pos="bottomBar" />
      </Svg>
    </Container>
  );
};

export default MenuIcon;

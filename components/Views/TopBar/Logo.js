import Image from "next/image";
import styled from "styled-components";

const Wrapper = styled.div`
  grid-area: logoArea;
  cursor: pointer;
`;
const Logo = () => {
  return (
    <Wrapper>
      <Image
        src="/img/yt_logo.png"
        layout="fixed"
        width="100%"
        height="24"
        alt="YouTube"
      />
    </Wrapper>
  );
};

export default Logo;

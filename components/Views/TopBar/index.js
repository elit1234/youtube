import dynamic from "next/dynamic";

import { useState } from "react";
import styled from "styled-components";

import MenuIcon from "./MenuIcon";
const Wrapper = styled.div`
  height: 56px;
  background: #212121;
  width: 100vw;

  display: grid;
  grid-template-columns: 68px 0.5fr 30px 2.5fr 0.8fr 0.2fr;
  grid-template-rows: 1fr;
  gap: 0px 5px;
  align-items: center;
  justify-items: center;
  grid-template-areas: "menuIcon logoArea . searchArea tabletArea userIcon";

  @media (max-width: 600px) {
    grid-template-columns: 0.8fr 1fr auto auto auto;
    grid-template-areas: "menuIcon logoArea searchArea tabletArea userIcon";
  }
`;

const SearchBarWrapper = styled.div`
  grid-area: searchArea;
  width: 100%;
  height: 100%;
  gap: 15px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const SearchBar = styled.input`
  background: #181818;
  height: 25px;
  width: 90%;
  border: none;
  padding-left: 10px;
  &:focus {
    outline: none;
  }
  @media (max-width: 600px) {
    width: 0%;
    visibility: hidden;
  }
`;

const MicWrapper = styled.div`
  cursor: pointer;
  background: #191919;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 35px;
  width: 35px;
`;

const SearchInputWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 90%;
`;

const SearchButton = styled.div`
  background: #282828;
  width: 10%;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: button;
  @media (max-width: 600px) {
    width: 50%;
  }
`;

const UserIcon = styled.div`
  grid-area: userIcon;
  background: #212121;

  cursor: pointer;
  align-self: center;
`;

const UserIconLetter = styled.div`
  background: green;
  border-radius: 20px;
  height: 25px;
  width: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TabletSection = styled.div`
  display: flex;
  justify-content: space-evenly;
  grid-area: tabletArea;
`;

const TabletSectionIcon = styled.div`
  cursor: pointer;
`;

const SearchSVG = styled.svg`
  fill: #3d3d3d;
  @media (max-width: 600px) {
    fill: #fff;
  }
  cursor: pointer;
`;

const TopBar = ({ active, setActive }) => {
  const Logo = dynamic(() => import("./Logo"));

  return (
    <Wrapper>
      <MenuIcon active={active} setActive={setActive} />
      <Logo />
      <SearchBarWrapper>
        <SearchInputWrapper>
          <SearchBar placeholder="Search" />
          <SearchButton>
            <SearchSVG
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
            </SearchSVG>
          </SearchButton>
        </SearchInputWrapper>
        <MicWrapper>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            enable-background="new 0 0 24 24"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#fff"
          >
            <g>
              <rect fill="none" height="24" width="24" />
              <rect fill="none" height="24" width="24" />
              <rect fill="none" height="24" width="24" />
            </g>
            <g>
              <g />
              <g>
                <path d="M12,14c1.66,0,3-1.34,3-3V5c0-1.66-1.34-3-3-3S9,3.34,9,5v6C9,12.66,10.34,14,12,14z" />
                <path d="M17,11c0,2.76-2.24,5-5,5s-5-2.24-5-5H5c0,3.53,2.61,6.43,6,6.92V21h2v-3.08c3.39-0.49,6-3.39,6-6.92H17z" />
              </g>
            </g>
          </svg>
        </MicWrapper>
      </SearchBarWrapper>
      <TabletSection>
        <TabletSectionIcon>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#fff"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4zM15 16H5V8h10v8zm-6-1h2v-2h2v-2h-2V9H9v2H7v2h2z" />
          </svg>
        </TabletSectionIcon>
        <TabletSectionIcon>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#FFFFFF"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M4 8h4V4H4v4zm6 12h4v-4h-4v4zm-6 0h4v-4H4v4zm0-6h4v-4H4v4zm6 0h4v-4h-4v4zm6-10v4h4V4h-4zm-6 4h4V4h-4v4zm6 6h4v-4h-4v4zm0 6h4v-4h-4v4z" />
          </svg>
        </TabletSectionIcon>
        <TabletSectionIcon>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#FFFFFF"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2zm-2 1H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v6z" />
          </svg>
        </TabletSectionIcon>
      </TabletSection>

      <UserIcon>
        <UserIconLetter>E</UserIconLetter>
      </UserIcon>
    </Wrapper>
  );
};

export default TopBar;

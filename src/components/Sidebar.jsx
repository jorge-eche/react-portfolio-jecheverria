import { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faUser,
  faEnvelope,
  faEnvelopeOpen,
  faFolder,
  faFolderOpen,
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

import {
  faLinkedin,
  faGithub,
  faWhatsapp,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import JE from "../img/je.png";
import JEBlue from "../img/jebluebackground.png";

const SideBar = styled.div`
  background-color: var(--dark-red);
  width: 60px;
  height: 100vh;
  @media screen and (max-width: 600px) {
    background-color: transparent;
    width: 100%;
    height: initial;
  }
`;

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px 0 10px;

  @media screen and (max-width: 600px) {
    width: 100%;
    height: auto;
    padding: 0 10px 0;
    flex-direction: row;
    align-items: center;
  }

  ${(props) =>
    props.mobileShow === "yes" &&
    `@media screen and (max-width: 1200px) {
      overflow: hidden;
      background-color: var(--dark-red);
      opacity: 0;
      z-index: 1;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0; 
      padding: 10px 10px 0;
      align-items: flex-start;
      flex-direction: column;
      justify-content: flex-start;
      gap: 10px;
      animation: fadeIn 1s forwards;
      @keyframes fadeIn {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }

      ${JELogo} {
        display:none;
      }

      ${Nav} {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        a {
          display: inline-block;
          width: 6.25rem;
        }
      }

      ${UList} {
        display: flex;
        justify-content: center;
        gap: 10px;
        li {
          display: inline;
          font-size: 1.2rem;
        }
      }

      ${BurgerIcon} {
        position: absolute;
        top: 10px;
        right:10px;
      }

      ${PageLink} {
        &:hover {
          svg {
            opacity: 1;
          }
        }

        &:after {
          opacity: 1;
          position: initial;
          display: initial;
          margin-left: 10px;
        }
      }

    }`}
`;

const JELogo = styled.img`
  display: block;
  width: 60px;
  @media screen and (max-width: 600px) {
    display: none;
  }
`;

const JELogoMobile = styled.img`
  display: none;

  @media screen and (max-width: 600px) {
    display: block;
    width: 60px;
  }
`;

const Nav = styled.nav`
  text-align: center;
  display: block;
  height: 210px;
  width: 100%;
  @media screen and (max-width: 600px) {
    display: none;
  }
`;

const PageLink = styled.a`
  position: relative;
  display: block;
  font-size: 22px;
  height: 51px;
  line-height: 51px;
  text-decoration: none;

  svg {
    transition: all 0.3s ease-out;
  }

  &:hover {
    color: var(--light-yellow);
    cursor: pointer;
    svg {
      opacity: 0;
    }
    &:after {
      opacity: 1;
    }
  }

  &:after {
    content: "";
    font-size: 0.563rem;
    letter-spacing: 2px;
    position: absolute;
    bottom: 0;
    display: block;
    width: 100%;
    text-align: center;
    opacity: 0;
    transition: all 0.3s ease-out;
  }

  &:active {
    color: var(--light-yellow);
  }
`;

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  color: ${(props) =>
    props.active === "yes" ? "var(--light-yellow)" : "var(--gun-powder)"};
`;

const UList = styled.ul`
  width: 100%;
  list-style: none;
  text-align: center;
  @media screen and (max-width: 600px) {
    display: none;
  }
`;

const ListItem = styled.li`
  a {
    padding: 7px 0;
    display: block;
    line-height: 16px;

    svg {
      transition: all 0.3s ease-out;
    }

    &:hover svg {
      color: var(--light-yellow);
    }
  }
`;

const BurgerIcon = styled(FontAwesomeIcon)`
  display: none;
  @media screen and (max-width: 600px) {
    display: initial;
    &:hover {
      cursor: pointer;
    }
  }
`;

const Sidebar = ({
  isActive,
  setIsActive,
  mobileShowNavMenu,
  setMobileShowNavMenu,
}) => {
  const activateHome = () => {
    setIsActive({
      home: true,
      about: false,
      portfolio: false,
      contact: false,
    });
    setMobileShowNavMenu(false);
  };

  const activateAbout = () => {
    setIsActive({
      home: false,
      about: true,
      portfolio: false,
      contact: false,
    });
    setMobileShowNavMenu(false);
  };

  const activatePortfolio = () => {
    setIsActive({
      home: false,
      about: false,
      portfolio: true,
      contact: false,
    });
    setMobileShowNavMenu(false);
  };
  const activateContact = () => {
    setIsActive({
      home: false,
      about: false,
      portfolio: false,
      contact: true,
    });
    setMobileShowNavMenu(false);
  };
  return (
    <SideBar>
      <Container mobileShow={mobileShowNavMenu ? "yes" : ""}>
        <JELogo src={JE} alt="JE" />
        {!mobileShowNavMenu ? <JELogoMobile src={JEBlue} alt="JE" /> : null}

        <Nav>
          <PageLink id="home-link" onClick={activateHome}>
            <StyledFontAwesomeIcon
              icon={faHouse}
              active={isActive.home ? "yes" : ""}
            />
          </PageLink>
          <PageLink id="about-link" onClick={activateAbout}>
            <StyledFontAwesomeIcon
              icon={faUser}
              active={isActive.about ? "yes" : ""}
            />
          </PageLink>
          <PageLink id="mywork-link" onClick={activatePortfolio}>
            <StyledFontAwesomeIcon
              icon={isActive.portfolio ? faFolderOpen : faFolder}
              active={isActive.portfolio ? "yes" : ""}
            />
          </PageLink>
          <PageLink id="contact-link" onClick={activateContact}>
            <StyledFontAwesomeIcon
              icon={isActive.contact ? faEnvelopeOpen : faEnvelope}
              active={isActive.contact ? "yes" : ""}
            />
          </PageLink>
        </Nav>

        <UList>
          <ListItem>
            <a
              href="https://www.linkedin.com/in/jorge-enrique-echeverr%C3%ADa-402984232/"
              target="_blank"
            >
              <StyledFontAwesomeIcon icon={faLinkedin} />
            </a>
          </ListItem>

          <ListItem>
            <a href="https://github.com/jorge-eche" target="_blank">
              <StyledFontAwesomeIcon icon={faGithub} />
            </a>
          </ListItem>

          <ListItem>
            <a href="https://twitter.com/CokoEche" target="_blank">
              <StyledFontAwesomeIcon icon={faTwitter} />
            </a>
          </ListItem>
        </UList>

        <BurgerIcon
          icon={mobileShowNavMenu ? faXmark : faBars}
          size="3x"
          color={mobileShowNavMenu ? "var(--light-yellow)" : ""}
          onClick={() =>
            !mobileShowNavMenu
              ? setMobileShowNavMenu(true)
              : setMobileShowNavMenu(false)
          }
        />
      </Container>
    </SideBar>
  );
};

export default Sidebar;

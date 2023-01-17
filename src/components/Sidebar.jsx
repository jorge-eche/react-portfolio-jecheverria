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
} from "@fortawesome/free-solid-svg-icons";

import {
  faLinkedin,
  faGithub,
  faWhatsapp,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import JE from "../img/je.png";

const SideBar = styled.div`
  background-color: var(--dark-red);
  width: 60px;
  height: 100vh;
  /* @media screen and (max-width: 1200px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: auto;
    min-height: auto;
    width: 100%; */
  }
`;

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px 0 10px;
`;

const JELogo = styled.img`
  display: block;
  width: 60px;
  height: 60px;
  /* @media screen and (max-width: 1200px) {
    margin: 0;
  } */
`;

const Nav = styled.nav`
  text-align: center;
  display: block;
  height: 210px;
  width: 100%;
  /* @media screen and (max-width: 1200px) {
    PASARLO A display: flex; al tocar hamburger button
    display: none;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: var(--dark-red);
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    margin: 0;
  } */
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
  /* @media screen and (max-width: 1200px) {
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
  } */
`;

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  color: ${(props) =>
    props.active === "yes" ? "var(--light-yellow)" : "var(--gun-powder)"};
`;

const UList = styled.ul`
  width: 100%;
  list-style: none;
  text-align: center;
  /* @media screen and (max-width: 1200px) {
    display: none;
  } */
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
  /* @media screen and (max-width: 1200px) {
    display: initial;
  } */
`;

const Sidebar = ({ isActive, setIsActive }) => {
  const activateHome = () => {
    setIsActive({
      home: true,
      about: false,
      portfolio: false,
      contact: false,
    });
  };

  const activateAbout = () => {
    setIsActive({
      home: false,
      about: true,
      portfolio: false,
      contact: false,
    });
  };

  const activatePortfolio = () => {
    setIsActive({
      home: false,
      about: false,
      portfolio: true,
      contact: false,
    });
  };
  const activateContact = () => {
    setIsActive({
      home: false,
      about: false,
      portfolio: false,
      contact: true,
    });
  };
  return (
    <SideBar>
      <Container>
        <JELogo src={JE} alt="JE" />

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
            <a
              href="https://wa.me/610468864448?text=Hi%20Jorge%20,%20I'm%20interested%20in%20your%20portfolio"
              target="_blank"
            >
              <StyledFontAwesomeIcon icon={faWhatsapp} />
            </a>
          </ListItem>

          <ListItem>
            <a href="https://twitter.com/CokoEche" target="_blank">
              <StyledFontAwesomeIcon icon={faTwitter} />
            </a>
          </ListItem>
        </UList>

        <BurgerIcon icon={faBars} size="3x" />
      </Container>
    </SideBar>
  );
};

export default Sidebar;

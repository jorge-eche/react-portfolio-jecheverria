import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faUser,
  faEnvelope,
  faFolderOpen,
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
  z-index: 3;
  width: 3.75rem;
  height: 100%;
  position: fixed;
  top: 0;
  min-height: 500px;
`;

const Nav = styled.nav`
  text-align: center;
  display: block;
  position: absolute;
  height: 210px;
  top: 50%;
  margin-top: -120px;
  width: 100%;
`;

const UList = styled.ul`
  position: absolute;
  bottom: 20px;
  width: 100%;
  list-style: none;
  text-align: center;
`;

const JELogo = styled.img`
  display: block;
  margin: 8px auto;
  padding: 8px 0;
  width: 3.75rem;
  height: auto;
`;

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  color: var(--gun-powder);
  animation-iteration-count: 2;
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

const ListItem = styled.li`
  a {
    padding: 7px 0;
    display: block;
    line-height: 16px;

    &:hover svg {
      color: var(--light-yellow);
    }
  }
`;

const Sidebar = () => {
  return (
    <SideBar>
      <a href="">
        <JELogo src={JE} alt="JE" />
      </a>

      <Nav>
        <PageLink href="" id="home-link">
          <StyledFontAwesomeIcon
            icon={faHouse}
            className="fa-beat"
          ></StyledFontAwesomeIcon>
        </PageLink>

        <PageLink href="" id="about-link">
          <StyledFontAwesomeIcon
            icon={faUser}
            className="fa-beat"
          ></StyledFontAwesomeIcon>
        </PageLink>

        <PageLink href="" id="mywork-link">
          <StyledFontAwesomeIcon
            icon={faFolderOpen}
            className="fa-beat"
          ></StyledFontAwesomeIcon>
        </PageLink>

        <PageLink href="" id="contact-link">
          <StyledFontAwesomeIcon
            icon={faEnvelope}
            className="fa-beat"
          ></StyledFontAwesomeIcon>
        </PageLink>
      </Nav>

      <UList>
        <ListItem>
          <a
            href="https://www.linkedin.com/in/jorge-enrique-echeverr%C3%ADa-402984232/"
            target="_blank"
          >
            <StyledFontAwesomeIcon icon={faLinkedin}></StyledFontAwesomeIcon>
          </a>
        </ListItem>

        <ListItem>
          <a href="https://github.com/jorge-eche" target="_blank">
            <StyledFontAwesomeIcon icon={faGithub}></StyledFontAwesomeIcon>
          </a>
        </ListItem>

        <ListItem>
          <a
            href="https://wa.me/610468864448?text=Hi%20Jorge%20,%20I'm%20interested%20in%20your%20portfolio"
            target="_blank"
          >
            <StyledFontAwesomeIcon icon={faWhatsapp}></StyledFontAwesomeIcon>
          </a>
        </ListItem>

        <ListItem>
          <a href="https://twitter.com/CokoEche" target="_blank">
            <StyledFontAwesomeIcon icon={faTwitter}></StyledFontAwesomeIcon>
          </a>
        </ListItem>
      </UList>
    </SideBar>
  );
};

export default Sidebar;

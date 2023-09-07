import {
  SideBar,
  Container,
  JELogo,
  JELogoMobile,
  Nav,
  PageLink,
  StyledFontAwesomeIcon,
  UList,
  ListItem,
  BurgerIcon,
} from "./SidebarStyledComp";
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
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import JE from "../../img/je.png";
import JEBlue from "../../img/jebluebackground.png";

const Sidebar = ({
  isActive,
  routeChangeHandler,
  mobileShowNavMenu,
  setMobileShowNavMenu,
}) => {
  return (
    <SideBar>
      <Container mobileShow={mobileShowNavMenu ? "yes" : ""}>
        <JELogo src={JE} alt="JE" />
        {!mobileShowNavMenu ? <JELogoMobile src={JEBlue} alt="JE" /> : null}

        <Nav>
          <PageLink id="home-link" onClick={() => routeChangeHandler("home")}>
            <StyledFontAwesomeIcon
              icon={faHouse}
              active={isActive === "home" ? "yes" : ""}
            />
          </PageLink>
          <PageLink id="about-link" onClick={() => routeChangeHandler("about")}>
            <StyledFontAwesomeIcon
              icon={faUser}
              active={isActive === "about" ? "yes" : ""}
            />
          </PageLink>
          <PageLink
            id="mywork-link"
            onClick={() => routeChangeHandler("portfolio")}
          >
            <StyledFontAwesomeIcon
              icon={isActive === "portfolio" ? faFolderOpen : faFolder}
              active={isActive === "portfolio" ? "yes" : ""}
            />
          </PageLink>
          <PageLink
            id="contact-link"
            onClick={() => routeChangeHandler("contact")}
          >
            <StyledFontAwesomeIcon
              icon={isActive === "contact" ? faEnvelopeOpen : faEnvelope}
              active={isActive === "contact" ? "yes" : ""}
            />
          </PageLink>
        </Nav>

        <UList>
          <ListItem>
            <a
              href="https://www.linkedin.com/in/jorge-enrique-echeverr%C3%ADa-402984232/"
              target="_blank"
              rel="noreferrer"
            >
              <StyledFontAwesomeIcon icon={faLinkedin} />
            </a>
          </ListItem>

          <ListItem>
            <a
              href="https://github.com/jorge-eche"
              target="_blank"
              rel="noreferrer"
            >
              <StyledFontAwesomeIcon icon={faGithub} />
            </a>
          </ListItem>

          <ListItem>
            <a
              href="https://twitter.com/CokoEche"
              target="_blank"
              rel="noreferrer"
            >
              <StyledFontAwesomeIcon icon={faTwitter} />
            </a>
          </ListItem>
        </UList>

        <BurgerIcon
          icon={mobileShowNavMenu ? faXmark : faBars}
          size="3x"
          color={mobileShowNavMenu ? "var(--light-yellow)" : ""}
          onClick={() =>
            setMobileShowNavMenu((preShowNavMenu) => !preShowNavMenu)
          }
        />
      </Container>
    </SideBar>
  );
};

export default Sidebar;

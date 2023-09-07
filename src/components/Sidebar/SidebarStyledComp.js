import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const SideBar = styled.div`
  background-color: var(--dark-red);
  width: 60px;
  height: 100vh;
  @media screen and (max-width: 600px) {
    background-color: transparent;
    width: 100%;
    height: initial;
  }
`;

export const Container = styled.div`
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

export const JELogo = styled.img`
  display: block;
  width: 60px;
  @media screen and (max-width: 600px) {
    display: none;
  }
`;

export const JELogoMobile = styled.img`
  display: none;

  @media screen and (max-width: 600px) {
    display: block;
    width: 60px;
  }
`;

export const Nav = styled.nav`
  text-align: center;
  display: block;
  height: 210px;
  width: 100%;
  @media screen and (max-width: 600px) {
    display: none;
  }
`;

export const PageLink = styled.a`
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

export const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  color: ${(props) =>
    props.active === "yes" ? "var(--light-yellow)" : "var(--gun-powder)"};
`;

export const UList = styled.ul`
  width: 100%;
  list-style: none;
  text-align: center;
  @media screen and (max-width: 600px) {
    display: none;
  }
`;

export const ListItem = styled.li`
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

export const BurgerIcon = styled(FontAwesomeIcon)`
  display: none;
  @media screen and (max-width: 600px) {
    display: initial;
    &:hover {
      cursor: pointer;
    }
  }
`;
